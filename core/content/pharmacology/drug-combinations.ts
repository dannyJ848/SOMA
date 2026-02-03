/**
 * Drug Combinations Database
 *
 * Patient-friendly explanations of 16 common drug combination rationales and
 * warnings: 8 safe/common combinations and 8 dangerous combinations.
 * Each entry includes 5 complexity levels and Spanish translations.
 */

// ============================================
// Types
// ============================================

export type CombinationType = 'safe' | 'dangerous';

export type CombinationCategory =
  | 'blood-pressure'
  | 'diabetes'
  | 'cholesterol'
  | 'antiplatelet'
  | 'gi-protection'
  | 'mental-health'
  | 'bleeding-risk'
  | 'electrolyte'
  | 'serotonergic'
  | 'toxicity'
  | 'anticoagulation'
  | 'musculoskeletal'
  | 'respiratory-depression'
  | 'cardiac-conduction';

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

export interface LevelExplanation {
  level: ComplexityLevel;
  whyCombined: string;
  whatCouldHappen: string;
  whatToTellDoctor: string;
}

export interface DrugCombinationEntry {
  id: string;
  drug1: string;
  drug2: string;
  drug1Es: string;
  drug2Es: string;
  combinationType: CombinationType;
  category: CombinationCategory;
  rationaleEs: string;
  warningEs: string;
  levels: Record<ComplexityLevel, LevelExplanation>;
}

// ============================================
// Helper
// ============================================

function combo(
  id: string,
  drug1: string,
  drug2: string,
  drug1Es: string,
  drug2Es: string,
  combinationType: CombinationType,
  category: CombinationCategory,
  rationaleEs: string,
  warningEs: string,
  levels: Record<ComplexityLevel, LevelExplanation>,
): DrugCombinationEntry {
  return {
    id, drug1, drug2, drug1Es, drug2Es,
    combinationType, category,
    rationaleEs, warningEs, levels,
  };
}

// ============================================
// Database (16 entries)
// ============================================

export const DRUG_COMBINATION_ENTRIES: Record<string, DrugCombinationEntry> = {

  // ══════════════════════════════════════════
  // SAFE / COMMON COMBINATIONS
  // ══════════════════════════════════════════

  acei_amlodipine: combo(
    'acei_amlodipine',
    'ACE Inhibitor (e.g., Lisinopril)',
    'Amlodipine',
    'Inhibidor de la ECA (ej., Lisinopril)',
    'Amlodipino',
    'safe',
    'blood-pressure',
    'Estos dos medicamentos bajan la presion arterial de maneras diferentes, lo que los hace mas efectivos juntos.',
    'Informe a su medico si siente mareos o hinchazon en los tobillos.',
    {
      1: {
        level: 1,
        whyCombined: 'These two medicines lower blood pressure in different ways. One relaxes blood vessels from the inside, and the other relaxes them from the outside. Together they work better than either one alone, like opening a door with two hands instead of one.',
        whatCouldHappen: 'Your blood pressure may drop a little too low at first, which can make you feel dizzy when you stand up. Amlodipine can cause swollen ankles. These side effects usually get better over time.',
        whatToTellDoctor: 'Tell your doctor if you feel dizzy, lightheaded when standing up, or notice your ankles swelling.',
      },
      2: {
        level: 2,
        whyCombined: 'ACE inhibitors (like lisinopril) stop the body from making a chemical that tightens blood vessels. Amlodipine is a calcium channel blocker that relaxes blood vessel walls directly. Together they lower blood pressure through two separate pathways, which is more effective and often means lower doses of each drug.',
        whatCouldHappen: 'Blood pressure may drop too low (hypotension), causing dizziness. Amlodipine can cause ankle swelling (edema). ACE inhibitors can cause a dry cough. Overall, this combination is well-tolerated and widely used.',
        whatToTellDoctor: 'Tell your doctor about dizziness, persistent dry cough, ankle swelling, or if your blood pressure readings at home are frequently below 90/60.',
      },
      3: {
        level: 3,
        whyCombined: 'ACE inhibitors block the renin-angiotensin-aldosterone system (RAAS) by preventing conversion of angiotensin I to angiotensin II. Amlodipine is a dihydropyridine calcium channel blocker that inhibits L-type calcium channels in vascular smooth muscle, causing vasodilation. The combination targets two independent mechanisms of vascular tone regulation, producing additive blood pressure reduction with complementary side effect profiles -- ACE inhibitors reduce the peripheral edema caused by amlodipine.',
        whatCouldHappen: 'Symptomatic hypotension is possible, particularly in volume-depleted patients. ACE inhibitor-related cough occurs in 5-10% of patients. Peripheral edema from amlodipine is less common with the combination because ACE inhibitors reduce capillary hydrostatic pressure.',
        whatToTellDoctor: 'Report persistent cough, significant ankle edema, lightheadedness, elevated potassium on lab work, or any signs of angioedema (lip or tongue swelling).',
      },
      4: {
        level: 4,
        whyCombined: 'This combination provides dual-mechanism antihypertensive therapy. ACE inhibition reduces angiotensin II-mediated vasoconstriction, aldosterone release, and sympathetic activation, while also increasing bradykinin levels contributing to vasodilation. Amlodipine blocks L-type calcium channels in vascular smooth muscle, reducing peripheral vascular resistance. The ACCOMPLISH trial demonstrated that ACE-I plus amlodipine was superior to ACE-I plus HCTZ in reducing cardiovascular events, establishing this as a preferred combination.',
        whatCouldHappen: 'Hypotension (especially first-dose and in volume-depleted patients), hyperkalemia (ACE-I effect on aldosterone), angioedema (rare, 0.1-0.7%, higher in Black patients), peripheral edema (attenuated by ACE-I venodilation), and dry cough (bradykinin-mediated). Renal function should be monitored as both agents affect glomerular hemodynamics.',
        whatToTellDoctor: 'Report angioedema symptoms immediately (emergency). Communicate any persistent cough, significant edema, dizziness, or symptoms of hyperkalemia (muscle weakness, palpitations). Ensure potassium and creatinine are monitored after initiation.',
      },
      5: {
        level: 5,
        whyCombined: 'ACE-I + CCB is a guideline-preferred combination (JNC 8, ACC/AHA 2017). The ACCOMPLISH trial (n=11,506) showed benazepril/amlodipine reduced the composite CV endpoint by 19.6% vs benazepril/HCTZ (p<0.001). Mechanistically, ACE-I attenuate reflex RAAS activation triggered by CCB-induced vasodilation, while CCBs counteract ACE-I-related salt sensitivity. The combination reduces proteinuria synergistically through efferent arteriolar dilation (ACE-I) and afferent pressure reduction (CCB). Amlodipine-associated peripheral edema is reduced by ~50% with concurrent ACE-I due to post-capillary venodilation reducing capillary hydrostatic pressure.',
        whatCouldHappen: 'Angioedema risk (0.1-0.7%, requires immediate discontinuation and airway management). Hyperkalemia risk increases in CKD (eGFR <45), diabetes, and with concurrent potassium-sparing agents. First-dose hypotension is notable in high-renin states. Long-term: monitor renal function, electrolytes, and BP targets per guidelines.',
        whatToTellDoctor: 'Ensure patients understand angioedema is a medical emergency. Discuss home BP monitoring targets. Review potassium-containing foods and supplements. Report any decline in urine output, facial or tongue swelling, or syncopal episodes.',
      },
    },
  ),

  metformin_sulfonylurea: combo(
    'metformin_sulfonylurea',
    'Metformin',
    'Sulfonylurea (e.g., Glipizide, Glimepiride)',
    'Metformina',
    'Sulfonilurea (ej., Glipizida, Glimepirida)',
    'safe',
    'diabetes',
    'Metformina reduce la produccion de azucar del higado y la sulfonilurea ayuda al pancreas a producir mas insulina. Juntos controlan mejor el azucar en sangre.',
    'Informe a su medico si experimenta temblores, sudoracion o confusion, ya que podria ser azucar baja en la sangre.',
    {
      1: {
        level: 1,
        whyCombined: 'Metformin tells your liver to stop making so much sugar. The sulfonylurea tells your pancreas to release more insulin, which helps sugar move from your blood into your cells. Together, they attack high blood sugar from two directions.',
        whatCouldHappen: 'The biggest risk is low blood sugar (hypoglycemia). You might feel shaky, sweaty, dizzy, or confused. Always carry a sugary snack in case this happens. Metformin can sometimes upset your stomach.',
        whatToTellDoctor: 'Tell your doctor if you have episodes of shakiness, sweating, or confusion. Also mention any stomach problems or if your blood sugar readings are frequently low.',
      },
      2: {
        level: 2,
        whyCombined: 'Metformin works mainly by reducing sugar production in the liver and improving insulin sensitivity. Sulfonylureas stimulate the pancreas to make more insulin. Since they work through different mechanisms, combining them provides better blood sugar control than either alone.',
        whatCouldHappen: 'Hypoglycemia (low blood sugar) is the main risk, primarily from the sulfonylurea component. Symptoms include trembling, sweating, rapid heartbeat, confusion, and blurred vision. Metformin can cause GI side effects (nausea, diarrhea) and rarely lactic acidosis. Weight gain is possible from the sulfonylurea.',
        whatToTellDoctor: 'Report frequent low blood sugar episodes, persistent GI symptoms, unexplained weight gain, or any signs of illness that may affect eating. Keep glucose tablets or juice available.',
      },
      3: {
        level: 3,
        whyCombined: 'Metformin decreases hepatic glucose production and improves peripheral insulin sensitivity by activating AMP-activated protein kinase (AMPK). Sulfonylureas bind to SUR1 receptors on pancreatic beta cells, closing ATP-sensitive K+ channels and triggering insulin secretion. This dual mechanism targets both insulin resistance and relative insulin deficiency seen in type 2 diabetes.',
        whatCouldHappen: 'Sulfonylurea-induced hypoglycemia is the primary concern (especially with glibenclamide/glyburide over glipizide or glimepiride). Risk increases with skipped meals, exercise, renal impairment, and alcohol. Metformin-associated lactic acidosis is rare (3-10 per 100,000 patient-years) but serious, particularly with renal insufficiency. Weight gain of 1-3 kg is typical from sulfonylurea use.',
        whatToTellDoctor: 'Report recurrent hypoglycemia, GI intolerance, signs of lactic acidosis (malaise, myalgia, respiratory distress), or any upcoming procedures requiring contrast dye (metformin should be held).',
      },
      4: {
        level: 4,
        whyCombined: 'Metformin activates AMPK, suppressing hepatic gluconeogenesis and lipogenesis while improving peripheral glucose uptake. Sulfonylureas provide insulin secretagogue action independent of glucose levels. The UKPDS demonstrated that combination therapy improved glycemic control and reduced microvascular complications. This is a cost-effective initial combination when monotherapy with metformin fails to achieve target HbA1c.',
        whatCouldHappen: 'Hypoglycemia incidence is 10-20% with combination therapy (higher with glyburide vs glipizide/glimepiride). Secondary sulfonylurea failure occurs in 5-10% per year due to progressive beta-cell decline. Metformin-associated lactic acidosis requires eGFR monitoring (contraindicated if <30 mL/min, dose reduction at <45). Weight gain from sulfonylurea partially offsets the weight-neutral or weight-reducing effect of metformin.',
        whatToTellDoctor: 'Discuss self-monitoring of blood glucose patterns, sick-day rules (hold both drugs if unable to eat), renal function trends, and whether newer agents (SGLT2i, GLP-1 RA) with cardiovascular benefit might be more appropriate.',
      },
      5: {
        level: 5,
        whyCombined: 'The metformin-sulfonylurea combination remains the most commonly prescribed dual therapy globally due to cost, efficacy (HbA1c reduction ~1.5-2.0% combined), and long-term outcomes data from UKPDS. However, the 2022 ADA/EASD consensus recommends considering SGLT2 inhibitors or GLP-1 receptor agonists as preferred second-line agents over sulfonylureas, particularly in patients with established CVD (EMPA-REG, CANVAS, LEADER trials) or heart failure. Sulfonylureas remain appropriate when cost is a primary barrier.',
        whatCouldHappen: 'UKPDS post-trial monitoring showed durable microvascular benefit. However, ADVANCE and ACCORD trials raised concerns about intensive sulfonylurea-based regimens and cardiovascular outcomes. Risk-benefit assessment should weigh hypoglycemia burden, weight gain, potential beta-cell exhaustion, and cardiovascular neutrality of sulfonylureas vs proven cardioprotection of newer agents.',
        whatToTellDoctor: 'Ensure patients understand hypoglycemia recognition and treatment (rule of 15). Discuss transition to cardioprotective agents when insurance coverage allows. Review renal function biannually. Counsel on metformin continuation perioperatively per updated guidelines.',
      },
    },
  ),

  statin_ezetimibe: combo(
    'statin_ezetimibe',
    'Statin (e.g., Atorvastatin, Rosuvastatin)',
    'Ezetimibe',
    'Estatina (ej., Atorvastatina, Rosuvastatina)',
    'Ezetimiba',
    'safe',
    'cholesterol',
    'La estatina reduce la produccion de colesterol en el higado y la ezetimiba bloquea la absorcion de colesterol del intestino. Juntos reducen el colesterol de manera mas efectiva.',
    'Informe a su medico si tiene dolor muscular o debilidad inusuales.',
    {
      1: {
        level: 1,
        whyCombined: 'Your body gets cholesterol from two places: your liver makes it, and you absorb it from food. The statin slows down the liver from making cholesterol. Ezetimibe blocks cholesterol from being absorbed in your intestine. By attacking from both sides, they lower your cholesterol much more.',
        whatCouldHappen: 'Some people get muscle aches from statins. Adding ezetimibe rarely makes this worse because ezetimibe works in the gut, not in the muscles. Mild stomach upset is possible.',
        whatToTellDoctor: 'Tell your doctor if you have unusual muscle pain, weakness, or dark-colored urine. Also mention any stomach problems.',
      },
      2: {
        level: 2,
        whyCombined: 'Statins block an enzyme in the liver (HMG-CoA reductase) that is needed to produce cholesterol. When the liver makes less, it pulls more LDL ("bad cholesterol") out of the blood. Ezetimibe blocks cholesterol absorption at the intestinal wall. Together they can reduce LDL cholesterol by up to 65%, compared to about 50% with a statin alone.',
        whatCouldHappen: 'Muscle pain (myalgia) affects about 5-10% of statin users. Liver enzyme elevations are possible but uncommon. Ezetimibe adds minimal additional side effect risk. The combination is generally well-tolerated.',
        whatToTellDoctor: 'Report muscle pain or weakness (especially if severe or with fever), dark urine, yellowing skin or eyes, or unexplained fatigue. Periodic liver and cholesterol blood tests are recommended.',
      },
      3: {
        level: 3,
        whyCombined: 'Statins competitively inhibit HMG-CoA reductase, the rate-limiting enzyme in the mevalonate pathway for cholesterol biosynthesis. This upregulates hepatic LDL receptors, increasing LDL clearance from plasma. Ezetimibe blocks the Niemann-Pick C1-Like 1 (NPC1L1) transporter at the intestinal brush border, reducing cholesterol absorption by ~50%. The compensatory increase in hepatic cholesterol synthesis from ezetimibe is counteracted by the statin, making them synergistic.',
        whatCouldHappen: 'The IMPROVE-IT trial showed the combination reduced cardiovascular events beyond statin alone in post-ACS patients. Myopathy risk is primarily statin-dose-dependent; ezetimibe allows a lower statin dose for the same LDL reduction. Hepatotoxicity is rare (<1%). Ezetimibe monotherapy side effects are similar to placebo.',
        whatToTellDoctor: 'Report myalgia, muscle weakness, or brown urine suggesting rhabdomyolysis. Discuss whether the combination is targeting an appropriate LDL goal based on cardiovascular risk. Ensure adherence to both medications.',
      },
      4: {
        level: 4,
        whyCombined: 'Statin inhibition of HMG-CoA reductase activates SREBP-2, upregulating LDL receptor expression and NPC1L1 expression. Ezetimibe blocks the compensatory increase in intestinal cholesterol absorption. The IMPROVE-IT trial (n=18,144) demonstrated that simvastatin 40mg + ezetimibe 10mg reduced the primary composite endpoint by 6.4% vs simvastatin alone (p=0.016) over 7 years in post-ACS patients, validating the LDL hypothesis that "lower is better."',
        whatCouldHappen: 'NNT of 50 over 7 years for major vascular events (IMPROVE-IT). Myopathy risk is primarily statin-related (dose-dependent) and not significantly increased by ezetimibe. CK monitoring is only needed if symptomatic. Hepatic transaminase elevations >3x ULN occur in ~1% and are usually reversible. Drug interactions: ezetimibe has minimal CYP450 involvement, so it avoids the interaction profile of high-dose statins.',
        whatToTellDoctor: 'Discuss LDL target based on ASCVD risk category (ACC/AHA guidelines). Consider this combination as alternative to high-dose statin in patients intolerant of intensive statin therapy. Review for drug interactions with the statin component (CYP3A4 for simvastatin/atorvastatin, limited for rosuvastatin/pravastatin).',
      },
      5: {
        level: 5,
        whyCombined: 'Post-IMPROVE-IT and 2018 ACC/AHA cholesterol guidelines position ezetimibe as first add-on to maximally tolerated statin for patients not at LDL goal. The "LDL threshold" concept has been replaced by "lower is better" based on IMPROVE-IT, FOURIER, and Mendelian randomization studies. Ezetimibe provides an additional 23-24% LDL reduction on top of statin therapy. In the cost-effectiveness hierarchy, generic statin + generic ezetimibe is preferred over moderate-dose statin alone when targets are unmet, and over PCSK9 inhibitors as a second step.',
        whatCouldHappen: 'IMPROVE-IT showed greatest absolute risk reduction in diabetic subgroup (NNT 38). Long-term safety data from IMPROVE-IT (7-year follow-up) showed no signal for cancer, hepatotoxicity, or other serious adverse events beyond statin alone. Consider PCSK9 inhibitors if LDL remains above threshold despite maximally tolerated statin + ezetimibe, per 2018 guidelines.',
        whatToTellDoctor: 'Ensure patients understand the cardiovascular risk reduction rationale. Discuss cost-benefit relative to PCSK9 inhibitors. If patient has statin intolerance, ezetimibe monotherapy provides modest but meaningful LDL reduction (~18%). Review guideline-based LDL targets and whether additional therapy is warranted.',
      },
    },
  ),

  aspirin_clopidogrel: combo(
    'aspirin_clopidogrel',
    'Aspirin',
    'Clopidogrel (Plavix)',
    'Aspirina',
    'Clopidogrel (Plavix)',
    'safe',
    'antiplatelet',
    'Despues de un stent, estas dos medicinas evitan que se formen coagulos en el stent. Funcionan de maneras diferentes para mantener la sangre fluyendo.',
    'Nunca deje de tomar estos medicamentos sin hablar con su medico. Podria formarse un coagulo peligroso en su stent.',
    {
      1: {
        level: 1,
        whyCombined: 'After a heart stent is placed, the body sees it as something foreign and wants to form a blood clot around it. These two medicines stop blood clots from forming in different ways. Taking both gives the best protection while the stent heals, usually for 6 to 12 months.',
        whatCouldHappen: 'Because both medicines thin the blood, you will bruise and bleed more easily. Cuts may take longer to stop bleeding. Rarely, serious bleeding can occur. But stopping them too early after a stent is much more dangerous -- the stent can clot off and cause a heart attack.',
        whatToTellDoctor: 'Tell your doctor if you have unusual bruising, blood in your stool (black or red), nosebleeds that do not stop, or if you need any surgery or dental work. NEVER stop taking these without asking your cardiologist first.',
      },
      2: {
        level: 2,
        whyCombined: 'Aspirin blocks an enzyme (COX-1) in platelets that helps them stick together. Clopidogrel blocks a different receptor (P2Y12) on platelets. Together, this is called dual antiplatelet therapy (DAPT). After a stent, both are needed to prevent blood clots from forming inside the stent (stent thrombosis), which is a life-threatening emergency.',
        whatCouldHappen: 'Increased bleeding risk is the main concern: GI bleeding, bruising, and prolonged bleeding from cuts. Stent thrombosis from premature discontinuation carries a 40-60% mortality or MI rate. Duration of DAPT depends on stent type and bleeding risk.',
        whatToTellDoctor: 'Never discontinue either drug without cardiology approval. Report any bleeding, upcoming procedures, or new medications. Inform any new doctor or dentist that you are on DAPT and why. Carry a card listing your medications.',
      },
      3: {
        level: 3,
        whyCombined: 'Aspirin irreversibly acetylates COX-1, inhibiting thromboxane A2-mediated platelet activation. Clopidogrel is a prodrug (requiring CYP2C19 activation) that irreversibly blocks the P2Y12 ADP receptor on platelets. Dual pathway inhibition provides superior antithrombotic protection compared to single-agent therapy. The CURE trial demonstrated a 20% relative risk reduction in CV events with DAPT after ACS.',
        whatCouldHappen: 'Major bleeding risk increases approximately 1% per year on DAPT. Stent thrombosis from premature cessation has 20-40% mortality. Duration: minimum 1 month (BMS), 6-12 months (DES), potentially longer in ACS. CYP2C19 poor metabolizers may not activate clopidogrel effectively -- genetic testing or prasugrel/ticagrelor may be warranted.',
        whatToTellDoctor: 'Discuss planned procedures (elective surgery should be delayed or DAPT managed with bridging). Report GI symptoms as PPI may be needed (prefer pantoprazole over omeprazole to avoid CYP2C19 interaction). Discuss clopidogrel resistance testing if recurrent events occur.',
      },
      4: {
        level: 4,
        whyCombined: 'DAPT with aspirin and a P2Y12 inhibitor is the standard of care post-PCI. Aspirin provides baseline antithrombotic effect via TXA2 inhibition. Clopidogrel (or more potent alternatives: prasugrel, ticagrelor) blocks ADP-mediated platelet activation via the P2Y12 receptor. The CURE (n=12,562), CREDO, CURRENT-OASIS 7, and DAPT trials established optimal duration and dosing. The 2016 ACC/AHA guideline recommends DAPT for at least 12 months after ACS-PCI.',
        whatCouldHappen: 'Stent thrombosis (0.5-2% with DAPT, up to 29% without DAPT in early period post-DES). DAPT Score helps balance ischemic vs bleeding risk to determine optimal duration. CYP2C19 loss-of-function alleles (*2, *3) affect 25-30% of patients and impair clopidogrel activation; CPIC guidelines recommend alternative P2Y12 inhibitors in poor metabolizers.',
        whatToTellDoctor: 'Discuss pharmacogenomic testing for CYP2C19 if available. Review DAPT Score to individualize duration. Plan for elective procedures requiring DAPT interruption with cardiology coordination. Address GI protection with pantoprazole if indicated.',
      },
      5: {
        level: 5,
        whyCombined: 'Evidence base includes CURE, CREDO, CHARISMA, CURRENT-OASIS 7, DAPT, PEGASUS-TIMI 54, and TWILIGHT trials. The evolving paradigm includes de-escalation strategies (TWILIGHT: P2Y12 monotherapy after 3 months in high-bleeding-risk patients), escalation with prasugrel/ticagrelor (TRITON-TIMI 38, PLATO), and extended DAPT beyond 12 months (DAPT trial). CYP2C19-guided therapy is increasingly implemented per TAILOR-PCI results and CPIC/DPWG guidelines.',
        whatCouldHappen: 'Current controversies include optimal DAPT duration with newer-generation DES (shorter DAPT may be adequate), role of CYP2C19-guided therapy (TAILOR-PCI showed nonsignificant trend), P2Y12 monotherapy strategies (TWILIGHT, TICO, STOPDAPT-2), and DAPT with concurrent oral anticoagulation (double vs triple therapy per AUGUSTUS, RE-DUAL PCI). Individualization based on DAPT Score, bleeding risk (PRECISE-DAPT), and ischemic risk is paramount.',
        whatToTellDoctor: 'Discuss individualized duration using validated risk scores. Review pharmacogenomic data if available. Coordinate peri-procedural management. For patients requiring OAC, discuss double therapy (P2Y12 + DOAC) vs triple therapy per AUGUSTUS protocol. Ensure patient understands the life-threatening nature of premature DAPT cessation.',
      },
    },
  ),

  ppi_nsaid: combo(
    'ppi_nsaid',
    'Proton Pump Inhibitor (e.g., Omeprazole)',
    'NSAID (e.g., Ibuprofen, Naproxen)',
    'Inhibidor de Bomba de Protones (ej., Omeprazol)',
    'AINE (ej., Ibuprofeno, Naproxeno)',
    'safe',
    'gi-protection',
    'Los AINEs pueden danar el estomago. El inhibidor de bomba de protones protege el revestimiento del estomago reduciendo el acido.',
    'Informe a su medico si tiene dolor de estomago, heces negras o vomito con sangre.',
    {
      1: {
        level: 1,
        whyCombined: 'Pain medicines like ibuprofen and naproxen can irritate your stomach and even cause bleeding ulcers. A PPI like omeprazole reduces stomach acid, which protects your stomach lining while you take the pain medicine. Think of it like putting a protective coat on your stomach.',
        whatCouldHappen: 'Without the PPI, NSAIDs can cause stomach ulcers and internal bleeding. With the PPI, your stomach is much better protected. Long-term PPI use may slightly reduce calcium and magnesium absorption.',
        whatToTellDoctor: 'Tell your doctor if you have stomach pain, black or tarry stools (a sign of bleeding), or heartburn that gets worse. Let them know how long you have been taking both medicines.',
      },
      2: {
        level: 2,
        whyCombined: 'NSAIDs block the COX enzyme, which reduces inflammation and pain but also reduces protective mucus and bicarbonate production in the stomach. PPIs block the acid-producing proton pump in stomach cells, dramatically reducing acid secretion. Less acid means less damage to the already-vulnerable stomach lining. This combination reduces GI ulcer risk by about 60-70%.',
        whatCouldHappen: 'Without PPI protection, NSAIDs cause gastric ulcers in about 15-30% of chronic users. PPIs reduce this to under 5%. Long-term PPI risks include possible C. difficile infection, bone fracture, vitamin B12 deficiency, and kidney concerns, though absolute risks are low.',
        whatToTellDoctor: 'Report any signs of GI bleeding (black stools, vomiting blood, abdominal pain). Discuss whether long-term NSAID use is truly necessary. Ask about periodic PPI reassessment and whether alternative pain management could reduce the need for both drugs.',
      },
      3: {
        level: 3,
        whyCombined: 'NSAIDs inhibit COX-1, reducing prostaglandin E2 and prostacyclin synthesis in gastric mucosa. These prostaglandins maintain mucosal blood flow, stimulate mucus and bicarbonate secretion, and promote epithelial cell turnover. PPIs irreversibly inhibit the H+/K+ ATPase (proton pump) on gastric parietal cells, raising gastric pH above 4 and reducing pepsin activation. This compensates for the lost prostaglandin-mediated mucosal defense.',
        whatCouldHappen: 'The CONDOR trial showed celecoxib alone was inferior to diclofenac plus omeprazole for GI outcomes. ACG guidelines recommend PPI co-therapy for all patients on chronic NSAIDs who have GI risk factors (age >65, history of ulcer, concurrent anticoagulant/corticosteroid use). Long-term PPI concerns include hypomagnesemia, fundic gland polyps, and possible increased pneumonia risk.',
        whatToTellDoctor: 'Discuss GI risk stratification (prior ulcer, age, concurrent medications). Report alarm symptoms (dysphagia, weight loss, early satiety). Reassess NSAID and PPI necessity annually. Consider H. pylori testing and treatment as additional ulcer risk reduction.',
      },
      4: {
        level: 4,
        whyCombined: 'Prostaglandin depletion from COX-1 inhibition disrupts the gastric mucosal barrier at multiple levels: reduced mucus thickness, diminished bicarbonate secretion, impaired mucosal blood flow, and decreased epithelial proliferation. PPIs maintain intragastric pH >4, which prevents acid-pepsin-mediated injury to the already-compromised mucosa. Evidence: OMNIUM and ASTRONAUT trials demonstrated omeprazole superiority over ranitidine for NSAID ulcer prevention. FDA-approved fixed combinations (naproxen/esomeprazole) exist.',
        whatCouldHappen: 'PPI co-therapy reduces upper GI events by 60-80% (NNT ~6 in high-risk patients). However, PPIs do not protect against lower GI NSAID injury (which accounts for 40% of NSAID-related GI events). Small bowel injury is prostaglandin-dependent and acid-independent. Long-term PPI considerations: fundic gland polyp formation (benign), theoretical rebound acid hypersecretion on discontinuation, and observational associations with CKD (confounding likely).',
        whatToTellDoctor: 'Risk-stratify patients per ACG/AGA guidelines. In highest-risk patients (prior complicated ulcer + need for anticoagulant), consider avoiding NSAIDs entirely. Discuss misoprostol as an alternative gastroprotective agent. Review PPI dose (standard once-daily dosing is sufficient for prophylaxis).',
      },
      5: {
        level: 5,
        whyCombined: 'PPI gastroprotection with NSAIDs is guideline-mandated (ACG 2009, AGA 2017) for high-risk patients. The evidence hierarchy: PPIs > misoprostol > H2RAs for NSAID ulcer prevention. COX-2 selective NSAIDs (celecoxib) reduce but do not eliminate GI risk; CONDOR and GI-REASONS trials inform this comparison. The combination of COX-2 inhibitor + PPI provides the lowest GI risk for patients requiring anti-inflammatory therapy. Emerging concern: PPI-NSAID combination does not protect against NSAID-induced enteropathy (capsule endoscopy studies show 55-70% small bowel injury with chronic NSAID use).',
        whatCouldHappen: 'Optimal strategy per risk: low GI risk -- NSAID alone; moderate risk -- NSAID + PPI or COX-2 inhibitor; high risk -- COX-2 + PPI or avoid NSAIDs. Cardiovascular risk adds complexity: COX-2 inhibitors carry CV risk (APPROVe, VIGOR), requiring naproxen preference in high CV risk patients. The "double jeopardy" patient (high GI + high CV risk) is best managed with naproxen + PPI + cardioprotective aspirin, though this remains imperfect.',
        whatToTellDoctor: 'Individualize based on GI, CV, and renal risk matrix. Review alternatives (topical NSAIDs, duloxetine, physical therapy). Discuss H. pylori eradication as synergistic risk reduction. Monitor renal function in patients on NSAIDs + PPIs. Reassess indication regularly given evolving risk-benefit over time.',
      },
    },
  ),

  ssri_buspirone: combo(
    'ssri_buspirone',
    'SSRI (e.g., Sertraline, Escitalopram)',
    'Buspirone',
    'ISRS (ej., Sertralina, Escitalopram)',
    'Buspirona',
    'safe',
    'mental-health',
    'El antidepresivo ISRS trata la ansiedad y la depresion, mientras que la buspirona proporciona alivio adicional de la ansiedad sin los riesgos de sedacion o dependencia.',
    'Informe a su medico si siente mareos, nauseas o somnolencia excesiva.',
    {
      1: {
        level: 1,
        whyCombined: 'SSRIs help with both depression and anxiety, but sometimes anxiety needs extra help. Buspirone is an anti-anxiety medicine that works differently from SSRIs and is safe to take with them. Unlike some other anxiety medicines, buspirone is not addictive.',
        whatCouldHappen: 'You might feel a little dizzy or have an upset stomach when starting. Buspirone takes 2-4 weeks to work fully, so be patient. This combination is generally very safe.',
        whatToTellDoctor: 'Tell your doctor about dizziness, nausea, headache, or if your anxiety is not improving after a few weeks.',
      },
      2: {
        level: 2,
        whyCombined: 'SSRIs increase serotonin activity in the brain by blocking its reuptake. Buspirone is a partial agonist at serotonin 5-HT1A receptors, providing anxiolytic effects through a complementary mechanism. Unlike benzodiazepines, buspirone has no abuse potential, no sedation, and no withdrawal syndrome, making it a safer add-on for persistent anxiety.',
        whatCouldHappen: 'Mild dizziness, nausea, and headache are common initially. There is a theoretical risk of serotonin syndrome when combining serotonergic agents, but this is extremely rare with buspirone at standard doses. No sedation, cognitive impairment, or dependence issues.',
        whatToTellDoctor: 'Report persistent dizziness, any signs of serotonin excess (agitation, rapid heartbeat, tremor, sweating), or lack of improvement after 4-6 weeks. Discuss any use of other serotonergic agents.',
      },
      3: {
        level: 3,
        whyCombined: 'SSRIs block SERT (serotonin transporter), increasing synaptic 5-HT levels globally. Buspirone is a partial agonist at 5-HT1A receptors (both presynaptic autoreceptors and postsynaptic), providing anxiolysis via distinct receptor-level modulation. The combination augments serotonergic neurotransmission and may also enhance SSRI antidepressant efficacy (STAR*D trial included buspirone augmentation as a Level 2 option).',
        whatCouldHappen: 'Serotonin syndrome risk is minimal because buspirone is a partial (not full) agonist. STAR*D showed buspirone augmentation achieved ~30% remission rate in SSRI non-responders. Buspirone\'s short half-life (2-3 hours) requires BID-TID dosing for consistent effect. No respiratory depression, no psychomotor impairment, no abuse potential.',
        whatToTellDoctor: 'Discuss adequate trial duration (4-6 weeks at therapeutic dose of 15-60mg/day). Review dosing schedule adherence (short half-life requires consistent dosing). Report efficacy assessment at follow-up visits.',
      },
      4: {
        level: 4,
        whyCombined: 'Buspirone acts as a 5-HT1A partial agonist with anxiolytic and potential antidepressant-augmenting properties. Presynaptically, 5-HT1A autoreceptor activation initially reduces serotonin firing (explaining delayed onset), then desensitization permits enhanced serotonergic transmission. Postsynaptically, partial agonism modulates downstream signaling. STAR*D Level 2 augmentation with buspirone showed comparable efficacy to bupropion augmentation (~30% remission).',
        whatCouldHappen: 'Generally well-tolerated. Buspirone does not impair psychomotor function, does not interact with alcohol, and carries no abuse liability (Schedule IV listing is historical). CYP3A4 is the primary metabolic pathway; interactions with strong CYP3A4 inhibitors (ketoconazole, erythromycin) can increase buspirone levels. No significant pharmacokinetic interaction with most SSRIs, except fluoxetine (mild CYP3A4 inhibition).',
        whatToTellDoctor: 'Review concomitant CYP3A4 inhibitors or inducers. Ensure TID dosing for optimal anxiolysis. Discuss treatment goals: buspirone works best for generalized anxiety disorder (GAD), less evidence for panic disorder or social anxiety disorder. Consider alternatives if inadequate response after 6-8 weeks.',
      },
      5: {
        level: 5,
        whyCombined: 'Evidence for SSRI + buspirone: STAR*D (Level 2 augmentation), multiple open-label studies for GAD, and mechanistic rationale from 5-HT1A receptor pharmacology. Buspirone augmentation is a guideline-recommended strategy (APA, CANMAT) for partial SSRI response in depression and GAD. The combination avoids the risks of benzodiazepine augmentation (dependence, cognitive impairment, falls in elderly, respiratory depression). Neuroimaging studies show buspirone modulates amygdala reactivity independently of SSRI effects.',
        whatCouldHappen: 'STAR*D remission rates with buspirone augmentation (~30%) are modest, suggesting it is not a universally effective strategy. Consider alternatives: aripiprazole augmentation (higher remission rates but metabolic concerns), lithium augmentation, or switching to SNRI. In treatment-resistant anxiety, off-label options (pregabalin, hydroxyzine) may be considered. Buspirone has favorable safety in elderly populations (no fall risk, no cognitive impairment).',
        whatToTellDoctor: 'Position buspirone augmentation in the broader treatment algorithm. For depression: STAR*D Level 2-3 options. For GAD: guideline-based sequencing (SSRI/SNRI first, then augmentation or switch). Discuss patient preference regarding side effect profile vs efficacy. Review emerging data on novel anxiolytics and psychedelic-assisted therapy in treatment-resistant cases.',
      },
    },
  ),

  lisinopril_hctz: combo(
    'lisinopril_hctz',
    'Lisinopril',
    'Hydrochlorothiazide (HCTZ)',
    'Lisinopril',
    'Hidroclorotiazida (HCTZ)',
    'safe',
    'blood-pressure',
    'Lisinopril relaja los vasos sanguineos y la hidroclorotiazida elimina el exceso de agua y sal. Juntos bajan la presion arterial de forma mas efectiva.',
    'Informe a su medico si siente mareos, calambres musculares o si orina mucho mas de lo normal.',
    {
      1: {
        level: 1,
        whyCombined: 'Lisinopril relaxes blood vessels so blood flows more easily. HCTZ is a water pill that helps your kidneys flush out extra salt and water. Less fluid means less pressure in your blood vessels. Together, they lower blood pressure better than either alone.',
        whatCouldHappen: 'HCTZ can make you urinate more often, especially at first. You might feel dizzy from lower blood pressure. The water pill can also lower your potassium levels, but lisinopril helps balance this because it tends to raise potassium. You may feel muscle cramps if potassium gets too low.',
        whatToTellDoctor: 'Tell your doctor about dizziness, muscle cramps, excessive urination, or feeling very thirsty. Also mention a dry cough, which can be a side effect of lisinopril.',
      },
      2: {
        level: 2,
        whyCombined: 'Lisinopril (an ACE inhibitor) blocks the enzyme that makes angiotensin II, a hormone that constricts blood vessels and promotes salt retention. HCTZ reduces blood volume by increasing sodium and water excretion in the kidneys. They complement each other: HCTZ triggers the body to produce more angiotensin II (a compensatory mechanism), and lisinopril blocks this compensation, making both drugs more effective together.',
        whatCouldHappen: 'Hypotension (low BP), dehydration, and electrolyte imbalances are the main risks. HCTZ can lower potassium and magnesium while raising blood sugar and uric acid. Lisinopril can raise potassium. The potassium effects partially cancel out, which is a benefit of this combination. ACE inhibitor cough occurs in about 10% of patients.',
        whatToTellDoctor: 'Report dizziness (especially upon standing), persistent cough, muscle weakness or cramps, irregular heartbeat, gout flares, or elevated blood sugar. Lab monitoring of electrolytes and kidney function is recommended.',
      },
      3: {
        level: 3,
        whyCombined: 'This combination exploits complementary neurohormonal pathways. Thiazide-induced volume depletion activates the RAAS, which would normally limit the diuretic\'s antihypertensive effect. ACE inhibition blocks this compensatory RAAS activation, preventing aldosterone-mediated sodium reabsorption and potassium excretion. The result is synergistic BP reduction with attenuated hypokalemia (since ACE-I opposes aldosterone-driven potassium wasting). Available as a fixed-dose combination pill for adherence.',
        whatCouldHappen: 'Electrolyte effects: HCTZ causes hypokalemia, hyponatremia, hypomagnesemia, hypercalcemia, and hyperuricemia. Lisinopril causes hyperkalemia. Net potassium effect is usually neutral. Metabolic: HCTZ worsens insulin resistance and may precipitate gout. Renal: ACE-I can increase creatinine (acceptable if <30% rise). Symptomatic hypotension risk, especially in volume-depleted patients.',
        whatToTellDoctor: 'Monitor BMP (potassium, sodium, creatinine, glucose) within 2-4 weeks of initiation and after dose changes. Report ACE-I cough (consider switching to ARB + HCTZ). Discuss UV sensitivity from HCTZ. Counsel on adequate hydration and timing of diuretic dose (morning to avoid nocturia).',
      },
      4: {
        level: 4,
        whyCombined: 'ACE-I + thiazide is a well-established combination endorsed by JNC guidelines. The pharmacological synergy arises from thiazide-induced RAAS activation being blocked by ACE inhibition. ALLHAT positioned thiazides as first-line, and combination therapy is recommended when monotherapy fails to achieve target (<130/80 per 2017 ACC/AHA). Fixed-dose combinations improve adherence by 26% vs free-drug combinations. However, the ACCOMPLISH trial showed ACE-I + amlodipine was superior to ACE-I + HCTZ for CV outcomes.',
        whatCouldHappen: 'ALLHAT data support thiazide-based regimens for stroke prevention. However, metabolic adverse effects (new-onset diabetes, dyslipidemia) are concerning long-term, particularly in metabolic syndrome patients. ACCOMPLISH trial (HR 0.80, p<0.001 for ACE-I/CCB vs ACE-I/HCTZ) shifted preference toward CCB combinations in high-risk populations. Electrolyte monitoring is essential: even mild hypokalemia (K+ 3.0-3.5) increases arrhythmia risk in patients with underlying cardiac disease.',
        whatToTellDoctor: 'Discuss whether CCB-based combination might be preferred based on ACCOMPLISH data. Ensure appropriate metabolic monitoring (glucose, lipids, uric acid) in addition to electrolytes. Review indications for switching to chlorthalidone (longer-acting, more evidence-based than HCTZ per recent analyses). Address medication timing and sun protection.',
      },
      5: {
        level: 5,
        whyCombined: 'Despite ubiquitous use, HCTZ has come under scrutiny vs chlorthalidone. Pharmacologic comparison: chlorthalidone has 45-60 hour half-life vs HCTZ 6-15 hours, achieves greater 24-hour BP reduction, and has the majority of landmark trial evidence (ALLHAT, SHEP, MRFIT). A 2020 VA study found chlorthalidone reduced CV events vs HCTZ. Current guidelines do not specify a preferred thiazide, but expert consensus increasingly favors chlorthalidone. For the ACE-I component, post-ACCOMPLISH, ACE-I/CCB combinations are preferred in high-risk ASCVD populations.',
        whatCouldHappen: 'Long-term metabolic effects of thiazides require surveillance: new-onset diabetes (ALLHAT: 11.6% chlorthalidone vs 9.8% amlodipine), hyponatremia (especially in elderly women, can cause seizures), and increased skin cancer risk with HCTZ specifically (recent pharmacoepidemiologic data). The clinical significance of thiazide-induced metabolic changes remains debated, as ALLHAT showed CV benefit despite metabolic costs.',
        whatToTellDoctor: 'Consider chlorthalidone over HCTZ for evidence-based thiazide therapy. Individualize combination based on comorbidities: prefer ACE-I/CCB in CAD, ACE-I/thiazide in salt-sensitive hypertension or Black patients. Monitor for hyponatremia in elderly. Discuss dermatologic screening given HCTZ photosensitivity and skin cancer data. Review ACC/AHA BP targets and escalation strategy.',
      },
    },
  ),

  metformin_sglt2: combo(
    'metformin_sglt2',
    'Metformin',
    'SGLT2 Inhibitor (e.g., Empagliflozin, Dapagliflozin)',
    'Metformina',
    'Inhibidor SGLT2 (ej., Empagliflozina, Dapagliflozina)',
    'safe',
    'diabetes',
    'Metformina reduce la produccion de azucar del higado. Los inhibidores SGLT2 eliminan el azucar extra por la orina y ademas protegen el corazon y los rinones.',
    'Informe a su medico si tiene infecciones urinarias o genitales frecuentes, o si se siente muy sediento o mareado.',
    {
      1: {
        level: 1,
        whyCombined: 'Metformin tells your liver to make less sugar. The SGLT2 inhibitor helps your kidneys filter out extra sugar through your urine. They work in completely different ways, so together they lower blood sugar better. A big bonus: SGLT2 inhibitors also protect your heart and kidneys.',
        whatCouldHappen: 'Because more sugar passes through your urine, you may get yeast infections or urinary tract infections more easily. You will urinate more often. Low blood sugar is uncommon with this combination because neither drug forces insulin release. Stay well hydrated.',
        whatToTellDoctor: 'Tell your doctor about genital itching or burning, frequent urination that feels abnormal, signs of dehydration (dizziness, dry mouth), or any upcoming surgery (the SGLT2 inhibitor may need to be stopped temporarily).',
      },
      2: {
        level: 2,
        whyCombined: 'Metformin reduces liver glucose production and improves insulin sensitivity. SGLT2 inhibitors work in the kidneys by blocking the protein that normally reabsorbs glucose back into the blood, so excess glucose is eliminated in urine. Beyond blood sugar, SGLT2 inhibitors have proven benefits for heart failure and kidney disease, making this a preferred combination for patients with cardiovascular or renal risk.',
        whatCouldHappen: 'Genital mycotic infections (yeast infections) affect about 5-10% of users. Urinary tract infections are mildly increased. Risk of diabetic ketoacidosis (DKA) exists even with normal blood sugars ("euglycemic DKA") -- rare but serious. Volume depletion and hypotension are possible, especially in elderly patients on diuretics. Weight loss of 2-3 kg is typical.',
        whatToTellDoctor: 'Report recurrent genital or urinary infections, signs of dehydration, nausea or vomiting that could indicate DKA, and any planned surgery (hold SGLT2i 3 days before). Discuss the heart and kidney protection benefits. Review hydration needs.',
      },
      3: {
        level: 3,
        whyCombined: 'Metformin activates AMPK, suppressing hepatic gluconeogenesis. SGLT2 inhibitors block the sodium-glucose cotransporter 2 in the proximal tubule, reducing renal glucose reabsorption (normally 180g/day) by 30-50%. This insulin-independent mechanism complements metformin\'s action. Landmark trials -- EMPA-REG OUTCOME, CANVAS, DECLARE-TIMI 58, DAPA-HF, and DAPA-CKD -- demonstrated cardiovascular and renal benefits independent of glycemic control.',
        whatCouldHappen: 'Glycosuric caloric loss promotes weight loss (2-4 kg) and osmotic diuresis reduces BP (3-5/1-2 mmHg). Genital mycotic infections in 5-12% (more in women). Euglycemic DKA (0.1-0.3%) requires index of suspicion: check ketones in ill patients even with glucose <250. Fournier gangrene is exceedingly rare but FDA-warned. Volume depletion risk warrants cautious initiation in elderly/diuretic users.',
        whatToTellDoctor: 'Discuss cardiorenal indications per ADA/EASD 2022 consensus: SGLT2i is preferred second-line (over sulfonylureas) in patients with ASCVD, HF, or CKD. Review sick-day rules (hold SGLT2i during illness). Monitor renal function and adjust if eGFR <45 (drug-specific thresholds). Counsel on perineal hygiene.',
      },
      4: {
        level: 4,
        whyCombined: 'SGLT2 inhibitors have transformed diabetes management by demonstrating cardiorenal benefits beyond glucose lowering. Empagliflozin reduced CV death by 38% (EMPA-REG), dapagliflozin reduced HF hospitalization by 27% (DECLARE), and DAPA-CKD showed renal benefit regardless of diabetes status. Mechanisms include natriuresis, reduced preload/afterload, improved myocardial energetics (ketone body utilization), and tubuloglomerular feedback restoration. ADA 2024 guidelines recommend SGLT2i independent of HbA1c in patients with ASCVD, HF, or CKD.',
        whatCouldHappen: 'Cardiorenal benefits appear as a class effect (empagliflozin, dapagliflozin, canagliflozin). Canagliflozin had amputation signal in CANVAS (not replicated with others). Euglycemic DKA mechanism: SGLT2i increases glucagon, promotes lipolysis and ketogenesis while lowering glucose threshold for detecting DKA. Initial eGFR dip (hemodynamic, similar to ACE-I) is expected and protective long-term. Current eGFR thresholds for initiation: empagliflozin >20, dapagliflozin >25 (expanding based on trial data).',
        whatToTellDoctor: 'Prescribe SGLT2i for cardiorenal indication regardless of HbA1c per current guidelines. Educate on sick-day rules and perioperative holds. Monitor eGFR trend (initial dip is acceptable). Review concurrent diuretic dosing (may need reduction). Consider canagliflozin caution in peripheral arterial disease. Discuss emerging indications (HFpEF, CKD without diabetes).',
      },
      5: {
        level: 5,
        whyCombined: 'The metformin + SGLT2i combination represents the current evidence-based standard for T2DM with cardiorenal comorbidity (ADA/EASD 2022 consensus). Mechanistic complementarity: metformin targets hepatic insulin resistance; SGLT2i provides insulin-independent glucose lowering with pleiotropic cardiorenal effects. The cardiorenal benefits of SGLT2i are thought to involve tubuloglomerular feedback restoration (reducing intraglomerular pressure), natriuresis-mediated preload reduction, improved myocardial substrate utilization (beta-hydroxybutyrate > glucose), and anti-inflammatory/anti-fibrotic effects. Ongoing trials exploring SGLT2i in acute HF (EMPULSE), post-MI (DAPA-MI), and type 1 diabetes.',
        whatCouldHappen: 'Paradigm shift: SGLT2i indication is now organ-protective rather than purely glycemic. EMPEROR-Preserved extended HF benefit to HFpEF. EMPA-KIDNEY showed benefit in CKD with eGFR as low as 20. Future directions include earlier initiation in CKD, combination with GLP-1 RA for additive cardiorenal-metabolic benefit (FLOW trial for semaglutide + CKD), and potential role in non-alcoholic steatohepatitis. Cost remains a barrier despite generic availability expanding.',
        whatToTellDoctor: 'Position SGLT2i in the treatment algorithm per 2024 ADA Standards of Care: first-line alongside or independent of metformin in ASCVD/HF/CKD. Discuss dual cardiorenal-metabolic combinations (SGLT2i + GLP-1 RA). Review perioperative protocols (hold 3 days pre-surgery). Monitor for ketoacidosis in insulin-deficient patients (latent autoimmune diabetes). Ensure formulary access and address cost barriers.',
      },
    },
  ),

  // ══════════════════════════════════════════
  // DANGEROUS COMBINATIONS
  // ══════════════════════════════════════════

  aspirin_nsaids: combo(
    'aspirin_nsaids',
    'Aspirin',
    'NSAIDs (e.g., Ibuprofen, Naproxen)',
    'Aspirina',
    'AINEs (ej., Ibuprofeno, Naproxeno)',
    'dangerous',
    'bleeding-risk',
    'Ambos medicamentos adelgazan la sangre y danan el revestimiento del estomago. Juntos, el riesgo de sangrado estomacal aumenta dramaticamente.',
    'Evite tomar AINEs de venta libre si ya toma aspirina. Pregunte a su medico sobre alternativas seguras para el dolor.',
    {
      1: {
        level: 1,
        whyCombined: 'Both aspirin and NSAIDs like ibuprofen slow down blood clotting and can irritate your stomach. Taking them together is like having two things that weaken your stomach lining at the same time. This greatly increases the chance of stomach bleeding.',
        whatCouldHappen: 'You could develop stomach ulcers and internal bleeding. Signs include black or bloody stools, stomach pain, vomiting blood (which may look like coffee grounds), and feeling weak or dizzy. Ibuprofen can also block aspirin\'s heart-protective effects.',
        whatToTellDoctor: 'Tell your doctor if you are taking aspirin for your heart and also using ibuprofen or naproxen for pain. Ask about safer pain alternatives like acetaminophen (Tylenol). If you see black stools or feel stomach pain, get medical help right away.',
      },
      2: {
        level: 2,
        whyCombined: 'Both aspirin and NSAIDs block the COX enzyme, which reduces substances (prostaglandins) that protect the stomach lining and help blood clot. The double effect on your stomach and blood clotting creates a high risk of GI bleeding. Additionally, ibuprofen can actually block aspirin from reaching its target on platelets, reducing aspirin\'s heart protection.',
        whatCouldHappen: 'GI bleeding risk increases 2-4 fold compared to either drug alone. The aspirin-ibuprofen interaction is particularly concerning: ibuprofen competes for the same binding site on COX-1 and can prevent aspirin\'s irreversible antiplatelet effect. This could leave a patient without cardiac protection AND at increased bleeding risk.',
        whatToTellDoctor: 'Report all OTC medications including NSAIDs. If you need aspirin for heart protection, ask about acetaminophen or celecoxib for pain. If both are necessary, take aspirin at least 30 minutes before ibuprofen. Report any GI symptoms, black stools, or unusual bleeding.',
      },
      3: {
        level: 3,
        whyCombined: 'Both drug classes inhibit cyclooxygenase (COX), reducing prostaglandin synthesis. Gastric prostaglandins (PGE2, PGI2) maintain mucosal blood flow, mucus secretion, and epithelial integrity. Dual COX inhibition profoundly depletes mucosal defenses. Pharmacodynamic conflict: ibuprofen\'s reversible COX-1 binding can competitively block aspirin\'s irreversible acetylation of Ser-530, negating aspirin\'s permanent antiplatelet effect.',
        whatCouldHappen: 'GI bleeding risk: OR 2.5-4.0 for combination vs aspirin alone. The competitive interaction at COX-1 means ibuprofen taken before or concurrent with aspirin reduces aspirin\'s antiplatelet effect by up to 90%. This has been shown in ex vivo platelet aggregation studies. Naproxen may have less competitive interaction, but evidence is mixed.',
        whatToTellDoctor: 'Discuss the timing interaction (FDA recommends aspirin 30 minutes before ibuprofen or ibuprofen 8+ hours before aspirin). Review pain management alternatives. If NSAID is essential, consider naproxen (less competitive inhibition) with PPI protection and aspirin timing strategy.',
      },
      4: {
        level: 4,
        whyCombined: 'The aspirin-NSAID interaction involves two distinct mechanisms: (1) additive COX-mediated gastropathy through prostaglandin depletion, and (2) pharmacodynamic antagonism where ibuprofen\'s reversible COX-1 occupancy prevents aspirin from irreversibly acetylating platelet COX-1 at Ser-530. The FDA 2006 Science Paper confirmed that concurrent ibuprofen (400mg) reduced aspirin\'s antiplatelet effect when taken within a narrow time window. Catella-Lawson et al. (NEJM 2001) demonstrated complete abrogation of aspirin\'s platelet inhibitory effect with ibuprofen co-administration.',
        whatCouldHappen: 'Clinical consequence: patients on cardioprotective aspirin who regularly use ibuprofen may lose cardiovascular protection while gaining GI risk -- the worst of both worlds. Population-level data from observational studies suggest increased MI risk in aspirin users who regularly take ibuprofen. Selective COX-2 inhibitors (celecoxib) do not interfere with aspirin\'s COX-1 effect and may be preferable when an anti-inflammatory is needed.',
        whatToTellDoctor: 'For patients requiring both: (1) aspirin should be taken first (30-60 min before NSAID), (2) avoid chronic NSAID use, (3) celecoxib + PPI is a safer alternative, (4) verify platelet function if clinical concern. FDA labeling includes this interaction warning. Advocate for OTC labeling awareness among patients.',
      },
      5: {
        level: 5,
        whyCombined: 'Catella-Lawson et al. (NEJM 2001) was the pivotal study demonstrating competitive COX-1 inhibition. The interaction is ibuprofen-specific based on binding kinetics; diclofenac and celecoxib do not interfere. Naproxen data is conflicting -- some studies suggest less competitive inhibition but FDA maintains caution. The clinical impact depends on dosing schedule: occasional NSAID use is less concerning than chronic scheduled dosing. MacDonald & Wei (BMJ 2003) showed increased CV mortality in aspirin + ibuprofen users. Current ACC/AHA guidelines recommend avoiding concomitant NSAID use in patients on antiplatelet therapy.',
        whatCouldHappen: 'Unresolved questions: whether enteric-coated aspirin is more susceptible to this interaction (slower COX-1 binding kinetics), whether low-dose ibuprofen (<400mg) preserves aspirin effect, and whether monitoring with platelet function assays should guide therapy. For high-risk patients (post-ACS, post-stent), this interaction is potentially catastrophic and should be treated as contraindicated.',
        whatToTellDoctor: 'Educate all aspirin users about OTC NSAID risks. Ensure clear documentation and patient counseling. Consider dedicated patient handout. For pain management in cardiac patients: acetaminophen first-line, topical NSAIDs second, oral celecoxib + PPI third (with CV risk acceptance), and avoid ibuprofen/naproxen when possible.',
      },
    },
  ),

  acei_arb_spironolactone: combo(
    'acei_arb_spironolactone',
    'ACE Inhibitor + ARB',
    'Spironolactone',
    'Inhibidor de la ECA + ARA',
    'Espironolactona',
    'dangerous',
    'electrolyte',
    'Estos tres medicamentos impiden que el cuerpo elimine el potasio. Demasiado potasio puede causar ritmos cardiacos peligrosos.',
    'Busque atencion medica inmediata si experimenta debilidad muscular, palpitaciones o dificultad para respirar.',
    {
      1: {
        level: 1,
        whyCombined: 'Your body needs to get rid of extra potassium through your kidneys. These three medicines all block your body from doing that in different ways. When potassium builds up too much in your blood, it can make your heart beat irregularly, which can be life-threatening.',
        whatCouldHappen: 'Dangerously high potassium (hyperkalemia) can cause muscle weakness, tingling, nausea, and abnormal heartbeats. In severe cases, the heart can stop beating entirely. This is a medical emergency.',
        whatToTellDoctor: 'Tell your doctor immediately if you are taking all three of these types of medicines. Report muscle weakness, irregular heartbeat, numbness or tingling, or nausea. Avoid potassium supplements and salt substitutes (they contain potassium).',
      },
      2: {
        level: 2,
        whyCombined: 'ACE inhibitors and ARBs both suppress the RAAS system, which normally helps the kidneys excrete potassium. Spironolactone directly blocks aldosterone, the hormone that drives potassium excretion. Triple blockade of potassium elimination at multiple points creates extreme hyperkalemia risk. While dual RAAS blockade (ACE-I + ARB) alone is harmful, adding spironolactone is even more dangerous.',
        whatCouldHappen: 'Life-threatening hyperkalemia (potassium >6.0 mEq/L) causing cardiac arrhythmias: peaked T waves, widened QRS, heart block, and cardiac arrest. Risk is highest in patients with kidney disease, diabetes, or those taking potassium supplements. The ONTARGET trial showed ACE-I + ARB increased adverse events without benefit.',
        whatToTellDoctor: 'Never take ACE-I + ARB + spironolactone simultaneously unless specifically directed by a specialist with close monitoring. Report any new medications. Avoid potassium-rich salt substitutes (KCl-based). Ensure regular blood tests for potassium and kidney function. Seek emergency care for palpitations or severe weakness.',
      },
      3: {
        level: 3,
        whyCombined: 'Triple RAAS blockade eliminates three redundant pathways for potassium excretion: ACE inhibitors reduce angiotensin II formation (which stimulates aldosterone); ARBs block AT1 receptors (blocking angiotensin II action at the adrenal gland and kidney); spironolactone blocks the mineralocorticoid receptor directly. Net effect: near-complete elimination of aldosterone-mediated potassium secretion in the cortical collecting duct.',
        whatCouldHappen: 'Hyperkalemia rate approaches 20-30% with triple therapy. The ONTARGET trial (n=25,620) showed dual RAAS blockade (ACE-I + ARB) increased renal dysfunction and hyperkalemia without cardiovascular benefit vs monotherapy. Adding spironolactone compounds the risk further. ECG changes progress from peaked T waves to PR prolongation, QRS widening, and ultimately sine wave pattern preceding cardiac arrest.',
        whatToTellDoctor: 'This combination is generally contraindicated. Dual RAAS blockade is not recommended per ACC/AHA guidelines (except rare nephrologist-supervised proteinuria cases). If spironolactone is needed for heart failure, use only one RAAS blocker (ACE-I or ARB, not both). Monitor potassium within 3-7 days of any RAAS modification. Maintain eGFR surveillance.',
      },
      4: {
        level: 4,
        whyCombined: 'The physiological rationale for triple RAAS blockade was "more complete blockade = better outcomes." This was definitively disproven: ONTARGET (telmisartan + ramipril showed more AKI and hyperkalemia), VA NEPHRON-D (losartan + lisinopril terminated early for safety), and ALTITUDE (aliskiren + ACE-I/ARB stopped early for harm in diabetics). The RALES mortality benefit of spironolactone in HF led to increased real-world use, but post-RALES surveillance showed a spike in hyperkalemia hospitalizations due to inadequate monitoring.',
        whatCouldHappen: 'Population data post-RALES: hyperkalemia-associated hospitalizations increased 6.7-fold and mortality increased 5.2-fold in the years following increased spironolactone prescribing. This was attributed to real-world lack of monitoring (contrast with RALES trial protocols). Triple therapy risk is multiplicative: each additional RAAS blocker independently increases hyperkalemia risk by 2-3 fold.',
        whatToTellDoctor: 'FDA warning against dual RAAS blockade. Guidelines restrict spironolactone to ACE-I OR ARB (not both) in HF. Individualize based on eGFR (avoid if <30), baseline potassium (avoid if >5.0), and monitoring capability. Consider eplerenone (more selective mineralocorticoid antagonist) with marginally lower hyperkalemia risk. Review diet, supplements, and concomitant medications affecting potassium.',
      },
      5: {
        level: 5,
        whyCombined: 'The trajectory from theoretical benefit to proven harm: RALES (1999) and EPHESUS (2003) showed mortality benefit of MRA in HFrEF, but in the context of ACE-I OR ARB monotherapy. CHARM-Added showed benefit of candesartan + ACE-I but with hyperkalemia signal. ONTARGET (2008), VA NEPHRON-D (2013), and ALTITUDE (2012) decisively demonstrated harm from dual RAAS blockade. Current guidelines (ACC/AHA 2022 HF, KDIGO 2021) recommend single RAAS blocker + MRA with close monitoring, never triple RAAS blockade.',
        whatCouldHappen: 'The post-RALES hyperkalemia epidemic (Juurlink et al., NEJM 2004) is a landmark example of guideline-practice gaps causing harm. Key lesson: trial populations with close monitoring ≠ real-world populations. Finerenone (non-steroidal MRA) from FIDELIO-DKD and FIGARO-DKD may have a more favorable potassium profile but still requires monitoring. Future approaches include potassium-lowering agents (patiromer, sodium zirconium cyclosilicate) as enablers for RAAS therapy.',
        whatToTellDoctor: 'This combination should be categorized as contraindicated in clinical decision support systems. Ensure electronic health record alerts flag triple RAAS blockade. For patients who need MRA + RAAS blocker, implement structured monitoring (K+ at 3 days, 1 week, 1 month, then quarterly). Utilize patiromer or SZC to enable RAAS therapy in hyperkalemia-prone patients. Review emerging finerenone data for cardiorenal diabetic patients.',
      },
    },
  ),

  ssri_maoi: combo(
    'ssri_maoi',
    'SSRI (e.g., Sertraline, Fluoxetine)',
    'MAOI (e.g., Phenelzine, Tranylcypromine)',
    'ISRS (ej., Sertralina, Fluoxetina)',
    'IMAO (ej., Fenelzina, Tranilcipromina)',
    'dangerous',
    'serotonergic',
    'Ambos medicamentos aumentan la serotonina en el cerebro. Demasiada serotonina causa el sindrome serotoninergico, una emergencia medica potencialmente mortal.',
    'Nunca tome estos medicamentos juntos. Debe esperar al menos 2 semanas despues de dejar uno antes de comenzar el otro (5 semanas para fluoxetina).',
    {
      1: {
        level: 1,
        whyCombined: 'SSRIs and MAOIs both increase a brain chemical called serotonin, but in different ways. When you take both, serotonin levels get dangerously high. This causes a condition called serotonin syndrome, which can be fatal. These medicines must NEVER be taken together.',
        whatCouldHappen: 'Serotonin syndrome causes high fever, muscle stiffness, confusion, rapid heartbeat, seizures, and can lead to death. Symptoms can start within hours. This is a medical emergency requiring immediate hospital treatment.',
        whatToTellDoctor: 'Tell EVERY doctor you see about ALL antidepressants you take or have recently stopped. If switching between these types, there must be a waiting period of at least 2 weeks (5 weeks for fluoxetine/Prozac). Go to the emergency room immediately if you accidentally take both.',
      },
      2: {
        level: 2,
        whyCombined: 'SSRIs block the reuptake of serotonin, keeping more of it active in the brain. MAOIs prevent the breakdown of serotonin (and other brain chemicals). Together, serotonin accumulates to toxic levels because it is neither being broken down nor removed from the synapse. This creates a potentially fatal "serotonin storm."',
        whatCouldHappen: 'Serotonin syndrome: a triad of (1) mental status changes (agitation, confusion, coma), (2) autonomic instability (fever >41C, sweating, rapid heart rate, blood pressure swings), and (3) neuromuscular excitation (tremor, muscle rigidity, clonus). Can progress to organ failure and death within hours.',
        whatToTellDoctor: 'This combination is absolutely contraindicated. Mandatory washout periods: at least 14 days after stopping an MAOI before starting an SSRI, and 14 days after stopping most SSRIs before starting an MAOI. Fluoxetine requires 5 weeks due to its long-acting metabolite (norfluoxetine). Inform all providers about your medication history.',
      },
      3: {
        level: 3,
        whyCombined: 'MAOIs inhibit monoamine oxidase A and B, preventing oxidative deamination of serotonin (5-HT), norepinephrine, and dopamine. SSRIs selectively inhibit the serotonin transporter (SERT), preventing synaptic serotonin reuptake. The combination eliminates both primary routes of serotonin clearance: enzymatic degradation and reuptake. The resulting massive synaptic serotonin accumulation activates 5-HT1A and 5-HT2A receptors, producing serotonin syndrome.',
        whatCouldHappen: 'Serotonin syndrome pathophysiology: 5-HT2A activation drives hyperthermia, agitation, and clonus; 5-HT1A contributes to autonomic instability. Severe cases progress to disseminated intravascular coagulation (DIC), rhabdomyolysis, ARDS, and multi-organ failure. Mortality is 2-12% with treatment, higher without. Treatment: cyproheptadine (5-HT2A antagonist), aggressive cooling, benzodiazepines, and ICU supportive care.',
        whatToTellDoctor: 'Absolutely contraindicated per all prescribing references. Washout rules: MAOI to SSRI = 14 days; SSRI to MAOI = 14 days (5 weeks for fluoxetine due to norfluoxetine half-life of 4-16 days). Also beware of "hidden" serotonergics: tramadol, meperidine, dextromethorphan, linezolid, St. John\'s Wort, and methylene blue.',
      },
      4: {
        level: 4,
        whyCombined: 'Serotonin syndrome results from excessive postsynaptic 5-HT receptor stimulation, primarily at 5-HT1A and 5-HT2A receptors in the brainstem and spinal cord. The Hunter Criteria (sensitivity 84%, specificity 97%) diagnose SS based on: spontaneous clonus; inducible clonus + agitation/diaphoresis; ocular clonus + agitation/diaphoresis; tremor + hyperreflexia; or hypertonia + temperature >38C + ocular/inducible clonus. The pathological mechanism is pharmacokinetically amplified by MAO-A inhibition (which increases CNS serotonin by 3-5 fold) combined with SERT blockade.',
        whatCouldHappen: 'Severe serotonin syndrome: core temperature >41.1C triggers DIC, rhabdomyolysis with CK >10,000, metabolic acidosis, ARDS, and renal failure from myoglobinuria. Mortality in unrecognized cases is significant. Treatment: discontinue all serotonergic agents, IV fluids, cyproheptadine 12mg loading then 2mg q2h, benzodiazepines for agitation, external cooling (NOT antipyretics as hyperthermia is muscular not hypothalamic), intubation and paralysis (non-depolarizing agents) for severe rigidity.',
        whatToTellDoctor: 'Maintain systems-level safeguards: electronic prescribing alerts, pharmacy cross-checks, patient medication lists. Educate patients about serotonergic agents in OTC products (dextromethorphan in cough medicines). If MAOI-to-SSRI switch is planned, coordinate with psychiatry and document washout timeline explicitly. Consider hospital admission for the transition period in high-risk patients.',
      },
      5: {
        level: 5,
        whyCombined: 'The SSRI-MAOI interaction is the archetype of pharmacodynamic drug interactions. Historical context: MAOIs preceded SSRIs; the interaction was discovered through fatal case reports in the 1960s-80s. The transition from iproniazid-era MAOIs to SSRIs partially stemmed from safety concerns about MAOI interactions and dietary restrictions. Modern relevance: linezolid (reversible MAO-A inhibitor) has caused serotonin syndrome with SSRIs, prompting FDA Drug Safety Communication (2011). Methylene blue (MAO-A inhibitor at high doses) is another unexpected source.',
        whatCouldHappen: 'Current research: serotonin syndrome incidence is rising due to increased serotonergic prescribing. The spectrum ranges from mild (tremor, diarrhea) to fatal. Distinction from neuroleptic malignant syndrome (NMS) is critical: SS has hyperkinesis/clonus vs NMS has "lead pipe" rigidity; SS onset is hours vs NMS onset is days; SS involves serotonergic agents vs NMS involves dopamine antagonists. Dantrolene treats NMS, NOT SS. Cyproheptadine treats SS, NOT NMS.',
        whatToTellDoctor: 'This interaction must be flagged as "hard stop" in all clinical decision support systems. Advocate for pharmacogenomic testing (CYP2D6, CYP2C19) when planning transitions between serotonergic agents. Ensure washout calculations account for individual pharmacokinetic variability (CYP2D6 poor metabolizers may need longer fluoxetine washouts). Review all serotonergic exposures including supplements and OTC drugs at every visit.',
      },
    },
  ),

  methotrexate_nsaids: combo(
    'methotrexate_nsaids',
    'Methotrexate',
    'NSAIDs (e.g., Ibuprofen, Naproxen)',
    'Metotrexato',
    'AINEs (ej., Ibuprofeno, Naproxeno)',
    'dangerous',
    'toxicity',
    'Los AINEs reducen la eliminacion del metotrexato por los rinones, causando que se acumule a niveles toxicos que pueden danar la medula osea, el higado y los rinones.',
    'Evite los AINEs mientras toma metotrexato a menos que su medico lo apruebe especificamente. Use acetaminofen para el dolor.',
    {
      1: {
        level: 1,
        whyCombined: 'Methotrexate is a strong medicine used for arthritis, cancer, and other conditions. Your kidneys are responsible for flushing it out of your body. NSAIDs like ibuprofen slow down your kidneys, so the methotrexate stays in your body longer and builds up to dangerous levels.',
        whatCouldHappen: 'Too much methotrexate can damage your bone marrow (where blood cells are made), liver, and kidneys. You might develop severe infections, uncontrolled bleeding, mouth sores, or organ damage. At high doses, this can be fatal.',
        whatToTellDoctor: 'Tell your doctor that you take methotrexate before taking ANY pain medicine. Avoid ibuprofen, naproxen, and other NSAIDs unless your doctor specifically says it is safe. Use acetaminophen (Tylenol) for pain instead. Report mouth sores, unusual bruising, fever, or fatigue immediately.',
      },
      2: {
        level: 2,
        whyCombined: 'NSAIDs reduce blood flow to the kidneys and interfere with methotrexate excretion. They may also push methotrexate off blood proteins, increasing the amount of active drug. This causes methotrexate to accumulate to toxic levels, even at normally safe doses. The risk is especially high with high-dose methotrexate (cancer treatment) but exists even with low weekly doses (arthritis treatment).',
        whatCouldHappen: 'Methotrexate toxicity: severe bone marrow suppression (pancytopenia) leading to life-threatening infections and bleeding, painful mouth ulcers (mucositis), liver damage, and acute kidney injury. Symptoms may include fever, sore throat, easy bruising, mouth sores, and fatigue.',
        whatToTellDoctor: 'Report all medications including OTC pain relievers. If you take weekly low-dose methotrexate for arthritis, occasional short-term NSAID use may be cautiously permitted with monitoring, but discuss this explicitly. For high-dose methotrexate (cancer treatment), NSAIDs are strictly avoided.',
      },
      3: {
        level: 3,
        whyCombined: 'Methotrexate is eliminated renally via glomerular filtration and active tubular secretion. NSAIDs reduce renal blood flow by inhibiting prostaglandin-mediated afferent arteriolar vasodilation, decreasing GFR and methotrexate clearance. NSAIDs also compete with methotrexate for organic anion transporters (OATs) involved in tubular secretion. Additionally, protein-binding displacement increases free methotrexate fraction. The net effect is substantially elevated methotrexate exposure.',
        whatCouldHappen: 'High-dose methotrexate (>500 mg/m2): NSAIDs can cause fatal pancytopenia and mucositis. Low-dose (7.5-25 mg/week for RA): risk is lower but clinically significant, especially in renal impairment. Toxicity manifests 7-14 days after methotrexate dosing (nadir). Leucovorin rescue becomes critical if toxicity is recognized. Monitoring: CBC with differential, LFTs, creatinine.',
        whatToTellDoctor: 'For high-dose methotrexate: avoid NSAIDs for 2 days before through 5 days after administration. For low-dose RA methotrexate: if NSAID is essential, use lowest effective dose with monitoring of CBC and creatinine at baseline and periodically. Ensure adequate hydration. Educate on OTC NSAID avoidance.',
      },
      4: {
        level: 4,
        whyCombined: 'Methotrexate renal clearance involves three mechanisms affected by NSAIDs: (1) reduced GFR from afferent arteriolar vasoconstriction (prostaglandin depletion), (2) competitive inhibition at OAT1/OAT3 and MRP2/MRP4 transporters mediating tubular secretion, and (3) reduced tubular flow promoting intratubular methotrexate precipitation (especially at acidic pH). Protein binding displacement increases free drug from ~50% to >60%. Total effect: methotrexate AUC can increase 30-100%.',
        whatCouldHappen: 'In oncologic high-dose methotrexate protocols, concurrent NSAIDs have caused fatal pancytopenia with nadir WBC <100/uL. Case fatality rate is significant. In rheumatologic practice, the interaction is dose-dependent: concurrent chronic NSAID use with weekly methotrexate increases toxicity risk but does not contraindicate the combination -- rheumatologists routinely co-prescribe with monitoring. The critical variable is renal function.',
        whatToTellDoctor: 'Differentiate oncologic vs rheumatologic context. For oncology: absolute NSAID avoidance with high-dose MTX, ensure alkaline diuresis (urine pH >7), and monitor serum MTX levels at 24, 48, 72 hours. For rheumatology: acceptable with stable renal function and regular monitoring; adjust if creatinine rises. Hold both drugs during acute illness with dehydration risk.',
      },
      5: {
        level: 5,
        whyCombined: 'The methotrexate-NSAID interaction illustrates the spectrum from theoretical risk to clinical pragmatism. In oncology, high-dose MTX (1-12 g/m2) with leucovorin rescue has extremely narrow therapeutic margins, and any impairment of MTX clearance (delayed 48h level >1 uM) mandates extended leucovorin and possible glucarpidase rescue. NSAIDs are absolutely prohibited. In rheumatology, the DMARD-NSAID combination is standard practice for RA, with population-based studies showing modest (1.5-2x) increased toxicity risk with concurrent NSAIDs -- acceptable with monitoring.',
        whatCouldHappen: 'Context-dependent risk: high-dose MTX + NSAID = potentially fatal (case fatality reports); low-dose MTX + NSAID = manageable with monitoring (standard RA care). Current research: MTX polyglutamate concentrations (more relevant than serum levels for low-dose) and pharmacogenomics (MTHFR, SLC19A1 variants) may help individualize risk. Glucarpidase (carboxypeptidase G2) for rescue in high-dose MTX toxicity represents a major therapeutic advance.',
        whatToTellDoctor: 'Risk stratification: oncology (absolute contraindication), rheumatology (relative caution), dermatology (intermediate). Ensure institutional protocols for high-dose MTX include NSAID screening. For rheumatologic patients, document informed consent for combination use, establish monitoring schedule, and educate about sick-day rules (hold both drugs with dehydration/illness). Review renal function trends longitudinally.',
      },
    },
  ),

  warfarin_antibiotics: combo(
    'warfarin_antibiotics',
    'Warfarin',
    'Many Antibiotics (esp. TMP-SMX, Fluconazole, Metronidazole)',
    'Warfarina',
    'Muchos Antibioticos (esp. TMP-SMX, Fluconazol, Metronidazol)',
    'dangerous',
    'anticoagulation',
    'Muchos antibioticos aumentan el efecto de la warfarina al interferir con su metabolismo o al reducir la vitamina K. Esto puede causar sangrado peligroso.',
    'Informe a su medico que toma warfarina ANTES de que le receten cualquier antibiotico. Necesitara analisis de sangre adicionales.',
    {
      1: {
        level: 1,
        whyCombined: 'Warfarin is a blood thinner that must be carefully dosed. Many antibiotics change how your body processes warfarin, making it much stronger. This makes your blood too thin, which can lead to dangerous bleeding. Even a short course of antibiotics can throw off your warfarin balance.',
        whatCouldHappen: 'Your blood can become too thin, leading to nosebleeds, bleeding gums, blood in urine or stool, excessive bruising, or even internal bleeding in the brain (stroke). These symptoms can appear within days of starting an antibiotic.',
        whatToTellDoctor: 'ALWAYS tell any doctor prescribing antibiotics that you take warfarin. Your INR (blood-thinning test) will need to be checked more often. Watch for unusual bleeding or bruising. Do not start any antibiotic without your warfarin-prescribing doctor knowing about it.',
      },
      2: {
        level: 2,
        whyCombined: 'Antibiotics can increase warfarin\'s effect through two mechanisms: (1) Some antibiotics (like TMP-SMX, fluconazole, metronidazole) block the liver enzymes (CYP2C9, CYP3A4) that break down warfarin, causing warfarin levels to rise. (2) Antibiotics can kill vitamin K-producing gut bacteria, further enhancing warfarin\'s effect. The result is a rapid, sometimes dramatic rise in INR, increasing bleeding risk.',
        whatCouldHappen: 'INR can spike to dangerous levels (>4-5, sometimes >10) within 3-7 days of starting certain antibiotics. The most dangerous antibiotics with warfarin include TMP-SMX, fluconazole, metronidazole, and ciprofloxacin. This can cause major bleeding including intracranial hemorrhage.',
        whatToTellDoctor: 'Inform every prescriber about warfarin use. When an antibiotic is prescribed, ask about the warfarin interaction. Your doctor may need to reduce your warfarin dose or schedule extra INR checks (within 3-5 days of starting). Report any signs of bleeding immediately.',
      },
      3: {
        level: 3,
        whyCombined: 'Warfarin (S-enantiomer is 3-5x more potent) is metabolized primarily by CYP2C9, with CYP3A4 and CYP1A2 as secondary pathways. TMP-SMX inhibits CYP2C9 (most clinically significant), fluconazole inhibits CYP2C9 and CYP3A4, metronidazole inhibits CYP2C9, and ciprofloxacin inhibits CYP1A2. Additionally, broad-spectrum antibiotics reduce intestinal flora that produce vitamin K2 (menaquinone), potentiating warfarin\'s anti-vitamin K effect.',
        whatCouldHappen: 'TMP-SMX: INR increases by 50-100% within 3-5 days. Fluconazole: INR doubles or triples. Metronidazole: INR increases 30-50%. Rifampin causes the OPPOSITE: massive CYP induction reduces INR (equally dangerous from thrombosis). Risk is modulated by CYP2C9 polymorphisms (*2, *3 alleles reduce baseline metabolism, amplifying interaction).',
        whatToTellDoctor: 'For TMP-SMX: reduce warfarin by 25-50%, check INR at day 3-5. For fluconazole: reduce by 25-50%, consider alternative antifungal. For metronidazole: reduce by 25-30%. For rifampin: expect 2-3x warfarin dose increase. Resume baseline dose after antibiotic completion with INR monitoring. Pharmacogenomic data (CYP2C9, VKORC1) can guide management.',
      },
      4: {
        level: 4,
        whyCombined: 'The warfarin-antibiotic interaction involves CYP-mediated metabolic inhibition and vitamin K pathway disruption. Key interactions by CYP pathway: CYP2C9 (S-warfarin, 3-5x potency): TMP, fluconazole, metronidazole, amiodarone; CYP3A4 (R-warfarin): fluconazole, clarithromycin, HIV protease inhibitors; CYP1A2 (R-warfarin): ciprofloxacin. The vitamin K depletion mechanism (gut flora reduction) is particularly relevant with broad-spectrum agents (fluoroquinolones, broad-spectrum cephalosporins) in patients with marginal vitamin K intake.',
        whatCouldHappen: 'Population-level data: warfarin-antibiotic combinations are the leading cause of emergency department visits for adverse drug events in the elderly. TMP-SMX + warfarin has the strongest evidence for major bleeding (OR 4.0-8.0 in case-control studies). Rifampin causes the most dramatic REDUCTION in INR (CYP2C9/3A4/1A2 induction), requiring 2-3x warfarin dose increase that must be tapered back after rifampin completion -- a period of extreme vulnerability.',
        whatToTellDoctor: 'Implement institutional protocols: automatic INR check within 3-5 days of any antibiotic start in warfarin patients. Pharmacist-led anticoagulation services reduce adverse events by 50-80%. Consider DOAC transition for patients with frequent antibiotic courses (DOACs have fewer drug interactions, no INR monitoring). If CYP2C9 genotype is known, apply pharmacogenomic dosing algorithms.',
      },
      5: {
        level: 5,
        whyCombined: 'Warfarin drug interactions remain the leading cause of preventable adverse drug events in the US (Budnitz et al., NEJM 2011). The interaction landscape encompasses >200 drugs. Evidence hierarchy: TMP-SMX (strongest evidence for major bleeding, Baillargeon et al., Ann Intern Med 2012), fluconazole (consistent pharmacokinetic data), rifampin (most clinically impactful induction). Newer considerations: interaction with direct-acting antivirals (DAAs) for hepatitis C, immunotherapy agents, and antifungals in immunocompromised patients.',
        whatCouldHappen: 'Health system interventions: clinical decision support (CDS) systems reduce warfarin-antibiotic adverse events by 40-60% but alert fatigue diminishes effectiveness. Pharmacogenomic-guided warfarin dosing (incorporating CYP2C9 and VKORC1 genotypes) improves time-in-therapeutic-range and may reduce interaction severity. The transition to DOACs (apixaban, rivaraban) reduces but does not eliminate antibiotic interactions (CYP3A4/P-gp for rivaroxaban, minimal for apixaban).',
        whatToTellDoctor: 'Advocate for systematic warfarin stewardship: automatic interaction screening, protocol-driven INR monitoring with antibiotics, pharmacogenomic testing at warfarin initiation, and proactive DOAC transition assessment. For unavoidable interactions, document expected INR trajectory, planned dose adjustments, and follow-up schedule. Educate patients on warfarin interactions with ALL new medications, not just antibiotics.',
      },
    },
  ),

  statins_gemfibrozil: combo(
    'statins_gemfibrozil',
    'Statins (especially Simvastatin, Lovastatin)',
    'Gemfibrozil',
    'Estatinas (especialmente Simvastatina, Lovastatina)',
    'Gemfibrozilo',
    'dangerous',
    'musculoskeletal',
    'El gemfibrozilo impide que el cuerpo elimine las estatinas, causando que se acumulen a niveles que destruyen el tejido muscular. Esto se llama rabdomiolisis.',
    'Informe a su medico inmediatamente si experimenta dolor muscular severo, debilidad u orina oscura mientras toma estos medicamentos.',
    {
      1: {
        level: 1,
        whyCombined: 'Gemfibrozil slows down how your body gets rid of statins. When statin levels build up too much, they can poison your muscles. This causes a serious condition called rhabdomyolysis, where muscle tissue breaks down and can damage your kidneys.',
        whatCouldHappen: 'Severe muscle pain, weakness, and dark brown urine (a sign of muscle breakdown). In serious cases, the broken-down muscle releases substances that damage the kidneys and can cause kidney failure. This can be life-threatening.',
        whatToTellDoctor: 'Tell your doctor if you take both a statin and gemfibrozil. Report ANY muscle pain, tenderness, or weakness immediately. If your urine turns dark or brownish, go to the emergency room. Ask if fenofibrate (a safer alternative to gemfibrozil) could be used instead.',
      },
      2: {
        level: 2,
        whyCombined: 'Gemfibrozil blocks the liver enzymes and transport proteins that eliminate statins from the body. This causes statin levels to rise dramatically (up to 2-5 fold). High statin levels are directly toxic to skeletal muscle cells. This combination was the primary cause of the withdrawal of cerivastatin (Baycol) from the market in 2001, after it caused multiple deaths.',
        whatCouldHappen: 'Rhabdomyolysis: massive skeletal muscle breakdown releasing myoglobin, potassium, and creatine kinase into the blood. Myoglobin clogs kidney tubules, causing acute kidney injury. CK levels may exceed 10,000 U/L (normal <200). Hyperkalemia from muscle breakdown can cause fatal cardiac arrhythmias.',
        whatToTellDoctor: 'If you need both cholesterol and triglyceride treatment, ask about fenofibrate instead of gemfibrozil -- it does not cause this dangerous interaction. Report any muscle symptoms immediately; do not wait to see if they improve. Avoid high-intensity exercise when starting this combination.',
      },
      3: {
        level: 3,
        whyCombined: 'Gemfibrozil inhibits OATP1B1 (hepatic uptake transporter encoded by SLCO1B1), reducing hepatic statin extraction and increasing systemic exposure. It also inhibits statin glucuronidation (UGT1A1, UGT1A3), blocking a major elimination pathway. Simvastatin acid AUC increases ~2.8-fold; lovastatin acid AUC increases ~2.8-fold; rosuvastatin AUC increases ~1.9-fold. Fenofibrate does not significantly inhibit OATP1B1 or glucuronidation, explaining its safety advantage.',
        whatCouldHappen: 'Rhabdomyolysis incidence with gemfibrozil + statin: approximately 5-10x higher than statin alone. Cerivastatin + gemfibrozil caused 52 deaths from rhabdomyolysis before market withdrawal in 2001. Rhabdomyolysis severity spectrum: myalgia (CK 1-10x ULN) to frank rhabdomyolysis (CK >40x ULN) with acute kidney injury requiring dialysis.',
        whatToTellDoctor: 'FDA contraindicates gemfibrozil with simvastatin and lovastatin. If fibrate therapy is indicated, use fenofibrate with any statin or gemfibrozil with pravastatin only (pravastatin is not dependent on OATP1B1 for hepatic uptake). Monitor CK only if symptomatic. Educate on risk factors that compound myopathy: hypothyroidism, renal impairment, advanced age, and concurrent CYP3A4 inhibitors.',
      },
      4: {
        level: 4,
        whyCombined: 'The molecular basis: gemfibrozil and its glucuronide metabolite potently inhibit OATP1B1 (IC50 ~4 uM for gemfibrozil glucuronide, within therapeutic concentrations). OATP1B1 mediates hepatic uptake of statin acids from portal blood. Blockade shunts statins into systemic circulation, increasing skeletal muscle exposure. Additionally, gemfibrozil inhibits CYP2C8 (relevant for cerivastatin, which was withdrawn) and UGT-mediated glucuronidation of all statins. SLCO1B1*5 polymorphism (rs4149056) independently increases myopathy risk and may amplify the interaction.',
        whatCouldHappen: 'Post-cerivastatin analysis: 31 of 52 deaths involved gemfibrozil co-prescription. Simvastatin: OR for rhabdomyolysis is ~5-10 with gemfibrozil. Fenofibrate: no significant OATP1B1 inhibition (IC50 >100 uM), CYP2C8 inhibition is weaker, and no UGT inhibition -- NNH is dramatically higher. Pharmacogenomic amplification: SLCO1B1*5 carriers have ~4.5x baseline risk of statin myopathy (SEARCH study), and gemfibrozil interaction further compounds this.',
        whatToTellDoctor: 'Contraindicated with simvastatin and lovastatin (FDA label). If patient requires fibrate + statin, prescribe fenofibrate + any statin. Consider SLCO1B1 genotyping to identify high-risk patients before statin initiation. Monitor CK in symptomatic patients only (routine monitoring not recommended). Review for additive myopathy risk factors.',
      },
      5: {
        level: 5,
        whyCombined: 'The gemfibrozil-statin interaction is a case study in transporter-mediated drug interactions. The pivotal work by Shitara et al. and the SEARCH Collaborative Group established the OATP1B1 mechanism. Regulatory impact: cerivastatin withdrawal (2001) was a landmark pharmacovigilance event that transformed drug interaction assessment requirements. FDA now mandates OATP1B1/1B3, BCRP, and P-gp transporter interaction studies for all new drug applications. The SLCO1B1 pharmacogenomic association (SEARCH trial: OR 4.5 per copy of *5 allele for simvastatin myopathy) led to CPIC guidelines for statin prescribing based on genotype.',
        whatCouldHappen: 'Current state: CPIC guidelines recommend avoiding simvastatin 80mg in all patients (regardless of genotype) and considering alternatives in SLCO1B1*5 carriers. Gemfibrozil interaction amplifies genetic risk multiplicatively. Future directions: OATP1B1 substrate/inhibitor profiling is now standard in drug development. Emerging statin alternatives (bempedoic acid -- ACL inhibitor, not an OATP1B1 substrate) may reduce interaction risk in patients requiring lipid-lowering + fibrate combinations.',
        whatToTellDoctor: 'Implement pharmacogenomic-guided statin prescribing (SLCO1B1 genotyping). If fibrate is needed, fenofibrate is the only acceptable choice with statins. Consider bempedoic acid for patients intolerant of statins or with complex interaction profiles. Ensure institutional formulary and CDS systems enforce the gemfibrozil-statin contraindication. Review cerivastatin history as a teaching case for trainees.',
      },
    },
  ),

  opioids_benzodiazepines: combo(
    'opioids_benzodiazepines',
    'Opioids (e.g., Oxycodone, Hydrocodone, Fentanyl)',
    'Benzodiazepines (e.g., Alprazolam, Diazepam, Lorazepam)',
    'Opioides (ej., Oxicodona, Hidrocodona, Fentanilo)',
    'Benzodiazepinas (ej., Alprazolam, Diazepam, Lorazepam)',
    'dangerous',
    'respiratory-depression',
    'Ambos medicamentos deprimen la respiracion. Juntos, pueden hacer que deje de respirar, lo cual es la causa principal de muerte por sobredosis de medicamentos recetados.',
    'Informe a su medico si le recetan ambos. Nunca mezcle estos con alcohol. Tenga naloxona (Narcan) disponible si toma ambos.',
    {
      1: {
        level: 1,
        whyCombined: 'Both opioids (pain medicines like oxycodone) and benzodiazepines (anxiety medicines like Xanax) slow down your brain and breathing. When taken together, they can slow your breathing so much that it stops. This is the number one cause of death from prescription drug overdoses.',
        whatCouldHappen: 'You may become extremely drowsy, confused, or unresponsive. Your breathing can slow down or stop, leading to brain damage or death. Even normal doses of both can be dangerous, especially at the beginning of treatment or after a dose increase.',
        whatToTellDoctor: 'Tell your doctor about ALL medicines you take, especially pain and anxiety medicines. Never take more than prescribed. Never mix with alcohol. Ask about having naloxone (Narcan) at home as an emergency rescue medicine. Make sure someone you live with knows the signs of an overdose.',
      },
      2: {
        level: 2,
        whyCombined: 'Opioids activate mu receptors in the brain that reduce pain sensation but also slow breathing. Benzodiazepines enhance GABA activity, causing sedation and anxiety relief but also respiratory depression. These two different mechanisms amplify each other\'s effect on breathing, making the combination far more dangerous than either alone. The FDA has issued its strongest warning (black box) about this combination.',
        whatCouldHappen: 'Synergistic respiratory depression: the risk of fatal overdose increases dramatically. Studies show benzodiazepine co-prescription increases opioid overdose death risk by 3-10 fold. Even therapeutic doses can be lethal, especially in opioid-naive patients, elderly patients, or those with sleep apnea. Alcohol further compounds the risk.',
        whatToTellDoctor: 'If both are prescribed, ensure the lowest possible doses for the shortest duration. Ask about non-opioid pain management (NSAIDs, acetaminophen, physical therapy) and non-benzodiazepine anxiolytics (buspirone, SSRIs, hydroxyzine). Request a naloxone prescription. Never share medications. Report any excessive drowsiness or breathing changes.',
      },
      3: {
        level: 3,
        whyCombined: 'Opioids depress respiration via mu-opioid receptor-mediated inhibition of brainstem respiratory centers (pre-Botzinger complex). Benzodiazepines enhance GABA-A receptor chloride conductance, depressing respiratory drive through a distinct mechanism. The synergistic (not merely additive) interaction at brainstem respiratory neurons lowers the threshold for apnea. The 2016 FDA black box warning was based on epidemiologic data showing 30% of opioid overdose deaths involve benzodiazepines.',
        whatCouldHappen: 'Dose-response: each doubling of benzodiazepine dose increases opioid-related death risk by ~20-40%. Vulnerable populations: opioid-naive patients, elderly (reduced drug clearance), obstructive sleep apnea (baseline respiratory compromise), concurrent alcohol use (triple CNS depression). Naloxone reverses opioid but NOT benzodiazepine respiratory depression; flumazenil may be needed but risks seizures in chronic benzodiazepine users.',
        whatToTellDoctor: 'If co-prescription is unavoidable, document medical necessity, prescribe lowest effective doses, limit duration, and coprescribe naloxone. Consider gabapentin or pregabalin caution (FDA 2019 warning for gabapentinoid + opioid combination). Implement opioid risk mitigation: patient-provider agreement, PDMP checks, urine drug screening, and frequent follow-up.',
      },
      4: {
        level: 4,
        whyCombined: 'The pharmacological synergy involves convergent inhibition of brainstem respiratory oscillator neurons. Mu-opioid agonism hyperpolarizes pre-Botzinger complex neurons via GIRK potassium channel activation. GABA-A positive allosteric modulation (benzodiazepines) increases chloride conductance in the same and adjacent neuronal populations. The combined effect produces a steep dose-response curve for respiratory depression, where small dose increments can trigger apnea. CDC data: benzodiazepines are involved in ~30% of opioid-related deaths.',
        whatCouldHappen: 'Park et al. (BMJ 2020): concurrent opioid-benzodiazepine prescribing increases overdose risk OR 3.8 (10-day overlap) to OR 6.8 (>90 day overlap). The VA Opioid Safety Initiative reduced concurrent prescribing by >50% and decreased overdose events. Pharmacokinetic interactions compound the risk: CYP3A4 inhibition by some benzodiazepines (e.g., fluconazole inhibits midazolam and fentanyl metabolism). Methadone + benzodiazepine is particularly lethal due to methadone\'s long, variable half-life.',
        whatToTellDoctor: 'Implement FDA REMS-compliant prescribing practices. Check PDMP at every visit. Quantify risk using validated tools (ORT, RIOSORD). Initiate benzodiazepine taper when possible (cross-taper to long-acting agent, reduce by 10-25% per 1-2 weeks). Co-prescribe naloxone per CDC 2022 guidelines. Document risk-benefit discussion. Consider buprenorphine (ceiling effect on respiratory depression) for patients requiring both pain and addiction treatment.',
      },
      5: {
        level: 5,
        whyCombined: 'The opioid-benzodiazepine syndemic: concurrent prescribing peaked circa 2015, with ~17% of opioid recipients also receiving benzodiazepines. The 2016 FDA black box warning and 2016 CDC Guideline for Prescribing Opioids reduced concurrent prescribing by 30-50% in most health systems. Landmark studies: Sun et al. (BMJ 2017) showed the combination doubled postoperative respiratory failure; Dasgupta et al. (Annals IM 2016) showed dose-response relationship for overdose death. Current VA/DoD and CDC 2022 guidelines recommend against concurrent prescribing with specific deprescribing algorithms.',
        whatCouldHappen: 'Unresolved challenges: benzodiazepine deprescribing is difficult (physical dependence, rebound anxiety/seizures), many patients on long-term opioid + benzodiazepine combinations cannot safely discontinue either. Emerging approaches: buprenorphine transition (partial agonist with respiratory ceiling), gabapentinoid substitution (though FDA 2019 warning complicates this), mindfulness-based stress reduction for anxiety, and multimodal non-opioid pain protocols. Naloxone distribution programs reduce mortality but are an imperfect safety net.',
        whatToTellDoctor: 'Systems-level interventions: PDMP integration into EHR workflows, clinical decision support hard stops for new co-prescriptions, pharmacist-led deprescribing clinics, and naloxone co-prescribing mandates. For individual patients: staged benzodiazepine taper over months (not abrupt discontinuation), concurrent cognitive-behavioral therapy, and alternative anxiolytics. If both are maintained, ensure naloxone availability, caregiver education on overdose recognition, and frequent monitoring.',
      },
    },
  ),

  multiple_qt_prolonging: combo(
    'multiple_qt_prolonging',
    'Multiple QT-Prolonging Drugs',
    '(e.g., Haloperidol + Azithromycin + Ondansetron)',
    'Multiples Medicamentos que Prolongan el QT',
    '(ej., Haloperidol + Azitromicina + Ondansetron)',
    'dangerous',
    'cardiac-conduction',
    'Varios medicamentos comunes alargan un intervalo en el ritmo cardiaco llamado QT. Cuando se combinan, el riesgo de arritmia cardiaca mortal aumenta dramaticamente.',
    'Informe a su medico sobre TODOS sus medicamentos. Busque atencion inmediata si siente palpitaciones, mareos o desmayos.',
    {
      1: {
        level: 1,
        whyCombined: 'Your heart uses electrical signals to beat regularly. Some medicines make these signals take longer, which is called "QT prolongation." When you take multiple medicines that do this, it can make your heart beat in a dangerously irregular way. Many common medicines can prolong the QT -- even some antibiotics and nausea medicines.',
        whatCouldHappen: 'The heart can suddenly start beating in a fast, chaotic rhythm called torsades de pointes. This can cause fainting, and if it does not stop on its own, it can lead to cardiac arrest and death. The risk goes up with more QT-prolonging drugs, low potassium or magnesium, and heart disease.',
        whatToTellDoctor: 'Tell your doctor about ALL medicines you take, including antibiotics, nausea medicines, and psychiatric medicines. If you feel your heart racing, skipping beats, or if you faint, go to the emergency room immediately. Ask if any of your medicines affect the QT interval.',
      },
      2: {
        level: 2,
        whyCombined: 'Many common medications block potassium channels (hERG channels) in the heart, which delays the electrical "reset" phase of each heartbeat. This shows up as a longer QT interval on an ECG. When multiple QT-prolonging drugs are combined, the effect adds up and can trigger a dangerous heart rhythm called torsades de pointes. Common culprits include antipsychotics, certain antibiotics, anti-nausea drugs, and some heart medicines.',
        whatCouldHappen: 'Torsades de pointes (TdP): a twisting pattern of ventricular tachycardia that can degenerate into ventricular fibrillation and cardiac arrest. Risk factors that compound the danger: low potassium, low magnesium, bradycardia (slow heart rate), female sex, heart failure, and congenital long QT syndrome. QTc above 500 milliseconds significantly increases TdP risk.',
        whatToTellDoctor: 'Ask about QT effects of all your medications. Common QT-prolonging drugs include: ondansetron (Zofran), azithromycin, ciprofloxacin, haloperidol, quetiapine, citalopram, and methadone. Report palpitations, dizziness, or fainting. Ensure your potassium and magnesium levels are checked regularly.',
      },
      3: {
        level: 3,
        whyCombined: 'The cardiac action potential repolarization depends primarily on the delayed rectifier potassium current (IKr), conducted through hERG (KCNH2) encoded channels. Many structurally diverse drugs block hERG channels due to the channel\'s unique aromatic-binding inner vestibule. Each additional hERG blocker reduces the "repolarization reserve," progressively prolonging the QT interval. When the QT is sufficiently prolonged, early afterdepolarizations (EADs) can trigger the re-entrant circuit that produces torsades de pointes.',
        whatCouldHappen: 'The risk of TdP increases exponentially (not linearly) as QTc exceeds 500ms. Drug-induced TdP mortality is approximately 10-20% per episode. Risk factors: acquired (hypokalemia, hypomagnesemia, bradycardia, HF, hepatic impairment reducing drug clearance) and congenital (LQTS mutations). CredibleMeds.org classifies drugs by TdP risk: known, possible, conditional. Common hospital scenario: haloperidol + ondansetron + fluoroquinolone in a hypokalemic patient.',
        whatToTellDoctor: 'Before combining QT-prolonging drugs, obtain baseline ECG and electrolytes. Maintain K+ >4.0 mEq/L and Mg2+ >2.0 mg/dL. Use CredibleMeds.org to check drug QT risk. If QTc >500ms, discontinue offending agents. In the hospital, continuous telemetry monitoring for high-risk combinations. Review all new medications for QT potential.',
      },
      4: {
        level: 4,
        whyCombined: 'hERG channel blockade reduces IKr current, prolonging phase 3 repolarization and increasing action potential duration (APD). The "repolarization reserve" concept (Roden 2004) explains why multiple modest hERG blockers combine to dangerous effect: each drug partially depletes the reserve, and the last drug added tips the balance toward EADs. EADs in Purkinje fibers or M-cells trigger re-entrant circuits using transmural dispersion of repolarization, producing the characteristic polymorphic VT of TdP.',
        whatCouldHappen: 'Clinical risk assessment: QTc prolongation is necessary but not sufficient for TdP. Transmural dispersion of repolarization (TDR) is the mechanistic link. Short-long-short RR sequences preceding TdP are characteristic. Drug-specific risk (per CredibleMeds): known risk (haloperidol, sotalol, dofetilide, methadone, citalopram >40mg) vs conditional risk (ondansetron, azithromycin at high doses). Pharmacokinetic interactions can compound pharmacodynamic risk: erythromycin inhibits CYP3A4, raising levels of co-prescribed hERG blockers.',
        whatToTellDoctor: 'Implement institutional QTc monitoring protocols for inpatients. Use automated EHR-based QT drug interaction alerts. Prioritize electrolyte repletion in patients on QT-prolonging drugs. Review CredibleMeds classifications for all concurrent medications. For unavoidable combinations, serial ECGs with QTc trending. Consult cardiology/electrophysiology for QTc >500ms.',
      },
      5: {
        level: 5,
        whyCombined: 'The hERG channel liability is the leading cause of drug withdrawal post-approval (terfenadine, cisapride, grepafloxacin). Modern drug development requires hERG channel screening in vitro and thorough QT (TQT) studies per ICH E14 guidelines. The Comprehensive in Vitro Proarrhythmia Assay (CiPA) initiative aims to replace TQT studies with multi-ion channel in vitro assessments and in silico modeling. Despite decades of research, predicting which patients will develop TdP remains imprecise -- the "repolarization reserve" is clinically unmeasurable.',
        whatCouldHappen: 'Emerging approaches: iPS-CM (induced pluripotent stem cell-derived cardiomyocytes) for patient-specific proarrhythmia risk assessment. LQTS genetic screening may identify patients with subclinical channelopathies at high risk for drug-triggered TdP. Machine learning algorithms for real-time QTc monitoring from wearables may enable earlier detection. Pharmacoepidemiologic data suggest drug-induced TdP accounts for 5-7% of sudden cardiac deaths.',
        whatToTellDoctor: 'Advocate for health system QT stewardship programs analogous to antibiotic stewardship. Implement risk scoring (RISQ-PATH, Tisdale score for inpatients). Ensure formulary review includes QT risk assessment. Support CiPA initiative adoption for earlier proarrhythmia detection in drug development. Consider pharmacogenomic screening for congenital LQTS in patients requiring multiple QT-prolonging agents.',
      },
    },
  ),
};

// ============================================
// Utility Functions
// ============================================

/**
 * Retrieve a drug combination entry by its ID.
 */
export function getDrugCombination(id: string): DrugCombinationEntry | undefined {
  return DRUG_COMBINATION_ENTRIES[id];
}

/**
 * Get all safe (commonly prescribed together) combinations.
 */
export function getSafeCombinations(): DrugCombinationEntry[] {
  return Object.values(DRUG_COMBINATION_ENTRIES).filter(
    (entry) => entry.combinationType === 'safe',
  );
}

/**
 * Get all dangerous (avoid) combinations.
 */
export function getDangerousCombinations(): DrugCombinationEntry[] {
  return Object.values(DRUG_COMBINATION_ENTRIES).filter(
    (entry) => entry.combinationType === 'dangerous',
  );
}

/**
 * Get a combination explanation at a specific complexity level.
 */
export function getCombinationAtLevel(
  id: string,
  level: ComplexityLevel,
): LevelExplanation | undefined {
  const entry = DRUG_COMBINATION_ENTRIES[id];
  return entry?.levels[level];
}

/**
 * Search drug combinations by case-insensitive query string.
 */
export function searchDrugCombinations(query: string): DrugCombinationEntry[] {
  const q = query.toLowerCase();
  return Object.values(DRUG_COMBINATION_ENTRIES).filter((entry) => {
    return (
      entry.drug1.toLowerCase().includes(q) ||
      entry.drug2.toLowerCase().includes(q) ||
      entry.drug1Es.toLowerCase().includes(q) ||
      entry.drug2Es.toLowerCase().includes(q) ||
      entry.category.toLowerCase().includes(q) ||
      Object.values(entry.levels).some(
        (lvl) =>
          lvl.whyCombined.toLowerCase().includes(q) ||
          lvl.whatCouldHappen.toLowerCase().includes(q) ||
          lvl.whatToTellDoctor.toLowerCase().includes(q),
      )
    );
  });
}

/**
 * Get all combinations in a specific category.
 */
export function getCombinationsByCategory(
  category: CombinationCategory,
): DrugCombinationEntry[] {
  return Object.values(DRUG_COMBINATION_ENTRIES).filter(
    (entry) => entry.category === category,
  );
}

/**
 * Get total number of drug combinations in the database.
 */
export function getDrugCombinationCount(): number {
  return Object.keys(DRUG_COMBINATION_ENTRIES).length;
}

/**
 * Check if a specific drug appears in any combination (safe or dangerous).
 */
export function findCombinationsForDrug(drugName: string): {
  safe: DrugCombinationEntry[];
  dangerous: DrugCombinationEntry[];
} {
  const q = drugName.toLowerCase();
  const all = Object.values(DRUG_COMBINATION_ENTRIES).filter(
    (entry) =>
      entry.drug1.toLowerCase().includes(q) ||
      entry.drug2.toLowerCase().includes(q),
  );
  return {
    safe: all.filter((e) => e.combinationType === 'safe'),
    dangerous: all.filter((e) => e.combinationType === 'dangerous'),
  };
}
