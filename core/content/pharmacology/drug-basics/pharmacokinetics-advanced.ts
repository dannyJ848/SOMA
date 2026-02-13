/**
 * Pharmacokinetics Educational Content — Advanced Topics
 *
 * Multi-level content covering first-pass metabolism, volume of distribution,
 * and clearance.
 *
 * 5 complexity levels from 8th grade through MD/Professional.
 */

import { EducationalContent } from '../../types';

// ============================================
// First-Pass Metabolism
// ============================================

export const firstPassMetabolism: EducationalContent = {
  id: 'pharmacokinetics-first-pass',
  type: 'concept',
  name: 'First-Pass Metabolism',
  alternateNames: ['First-Pass Effect', 'Presystemic Elimination'],
  levels: {
    1: {
      level: 1,
      summary: 'First-pass metabolism is when your liver breaks down some of a medicine before it can reach the rest of your body.',
      explanation: 'When you swallow a pill, it goes from your stomach to your intestines and then to your liver through a special blood vessel. Your liver acts like a security checkpoint — it breaks down some of the medicine before it enters your main bloodstream. This means less medicine is available to do its job. That is why some drugs need to be given by injection instead of as a pill.',
      keyTerms: [
        { term: 'first-pass metabolism', definition: 'The liver breaking down a drug before it reaches the rest of the body' },
        { term: 'liver', definition: 'Organ that filters blood and breaks down medicines' },
      ],
      analogies: ['First-pass metabolism is like a toll booth on a highway. Some cars (drug molecules) get stopped and cannot continue the journey.'],
      patientCounselingPoints: ['This is why some medicines are given as injections or patches instead of pills.', 'Grapefruit juice can interfere with first-pass metabolism for some drugs.'],
    },
    2: {
      level: 2,
      summary: 'First-pass metabolism is the significant reduction of drug concentration by the liver before the drug reaches systemic circulation.',
      explanation: 'After oral absorption, all blood from the GI tract flows through the portal vein to the liver before reaching the heart and general circulation. The liver contains enzymes that metabolize many drugs during this first pass. Drugs with extensive first-pass metabolism (like nitroglycerin) have very low oral bioavailability and must be given sublingually, transdermally, or intravenously. Routes that bypass the liver (sublingual, rectal lower portion, transdermal, inhaled) avoid first-pass metabolism.',
      keyTerms: [
        { term: 'portal vein', definition: 'Blood vessel carrying blood from the intestines to the liver' },
        { term: 'sublingual', definition: 'Under the tongue — drug absorbs directly into bloodstream' },
        { term: 'transdermal', definition: 'Through the skin via a patch' },
        { term: 'first-pass effect', definition: 'Loss of drug during first passage through the liver' },
      ],
    },
    3: {
      level: 3,
      summary: 'First-pass elimination encompasses presystemic metabolism in the gut wall (CYP3A4) and liver, quantified by the hepatic extraction ratio.',
      explanation: 'Presystemic elimination includes both intestinal wall metabolism (gut CYP3A4 and UGT enzymes) and hepatic first-pass metabolism. The hepatic extraction ratio (Eh) determines the fraction removed: fh = 1 - Eh. High extraction drugs (Eh > 0.7) include morphine, propranolol, lidocaine, and verapamil. Their oral bioavailability is low and highly variable because small changes in hepatic enzyme activity or blood flow cause large changes in the amount surviving first pass. Prodrugs can exploit first-pass metabolism: enalapril is converted to active enalaprilat by hepatic esterases.',
      keyTerms: [
        { term: 'hepatic extraction ratio', definition: 'Fraction of drug removed during single pass through the liver (0 to 1)' },
        { term: 'prodrug', definition: 'Inactive compound converted to active drug by metabolism' },
        { term: 'gut wall metabolism', definition: 'Drug metabolism by intestinal CYP3A4 and conjugation enzymes' },
        { term: 'high extraction drug', definition: 'Drug with Eh > 0.7, significantly affected by first-pass metabolism' },
      ],
      clinicalNotes: 'Grapefruit juice inhibits intestinal CYP3A4, increasing bioavailability of drugs like simvastatin and cyclosporine. Liver cirrhosis with portosystemic shunting bypasses hepatic first-pass, dramatically increasing bioavailability of high-extraction drugs.',
    },
    4: {
      level: 4,
      summary: 'First-pass extraction is flow-dependent for high-extraction drugs and enzyme-capacity-dependent for low-extraction drugs, with distinct clinical implications for dose adjustment.',
      explanation: 'The well-stirred model predicts: Eh = (fu x CLint) / (Qh + fu x CLint). For high-extraction drugs (CLint >> Qh), Eh approaches 1 and hepatic clearance approximates hepatic blood flow (CLh ~ Qh) — these drugs are "flow-limited." Oral bioavailability is sensitive to enzyme activity changes. For low-extraction drugs (CLint << Qh), CLh = fu x CLint — these are "capacity-limited" and sensitive to protein binding and enzyme changes. The parallel-tube model predicts somewhat different extraction ratios but the clinical principles are similar.',
      keyTerms: [
        { term: 'flow-limited clearance', definition: 'Hepatic clearance limited by blood flow, not enzyme capacity (high-E drugs)' },
        { term: 'capacity-limited clearance', definition: 'Hepatic clearance limited by enzyme capacity and protein binding (low-E drugs)' },
        { term: 'parallel-tube model', definition: 'Alternative hepatic model assuming drug concentration decreases along sinusoid length' },
        { term: 'well-stirred model', definition: 'Hepatic model assuming instantaneous equilibrium within the liver' },
      ],
      clinicalNotes: 'For high-E drugs given orally, enzyme induction/inhibition dramatically alters bioavailability but has less effect on IV clearance. For low-E drugs, enzyme changes affect both oral and IV clearance proportionally. Heart failure reduces Qh, increasing first-pass extraction of high-E drugs and reducing their oral bioavailability.',
    },
    5: {
      level: 5,
      summary: 'Advanced first-pass models integrate transporter-enzyme interplay, zonal hepatic metabolism, and computational prediction of presystemic extraction for drug design.',
      explanation: 'Hepatic uptake transporters (OATP1B1, OATP1B3) can be rate-limiting for first-pass extraction of drugs that are not freely permeable (e.g., statins). The extended clearance model incorporates both transporter-mediated uptake and metabolic clearance: CLh = (Qh x fu x PSinf x CLint,met) / (Qh x (PSinf + PSeff + CLint,met) + fu x PSinf x CLint,met). Periportal (zone 1) and pericentral (zone 3) hepatocytes differ in enzyme expression (CYP2E1 predominates zone 3), creating zonal metabolism. In silico tools predict first-pass extraction from molecular descriptors to guide drug design toward desired oral bioavailability.',
      keyTerms: [
        { term: 'OATP1B1/1B3', definition: 'Organic anion transporting polypeptides mediating hepatic drug uptake' },
        { term: 'extended clearance model', definition: 'Model incorporating both transporter uptake and metabolic clearance' },
        { term: 'zonal metabolism', definition: 'Differential enzyme expression across hepatic lobule zones' },
        { term: 'PSinf', definition: 'Sinusoidal influx clearance by uptake transporters' },
      ],
      clinicalNotes: 'OATP1B1 polymorphisms (SLCO1B1*5) reduce statin hepatic uptake, increasing systemic exposure and myopathy risk. FDA recommends reduced simvastatin doses in SLCO1B1 poor-function carriers. DDIs involving OATP inhibition (e.g., cyclosporine increasing statin levels) have clinical significance.',
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'pharmacokinetics-adme-overview', targetType: 'concept', relationship: 'parent' },
    { targetId: 'pharmacokinetics-bioavailability', targetType: 'concept', relationship: 'related' },
  ],
  tags: { topics: ['pharmacology', 'pharmacokinetics'], keywords: ['first-pass', 'presystemic', 'hepatic extraction'], clinicalRelevance: 'high', examRelevance: { usmle: true } },
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

// ============================================
// Volume of Distribution
// ============================================

export const volumeOfDistribution: EducationalContent = {
  id: 'pharmacokinetics-vd',
  type: 'concept',
  name: 'Volume of Distribution',
  alternateNames: ['Vd', 'Apparent Volume of Distribution'],
  levels: {
    1: {
      level: 1,
      summary: 'Volume of distribution tells us how spread out a medicine is in your body.',
      explanation: 'Some medicines mostly stay in your blood, while others spread deeply into your muscles, fat, and organs. Volume of distribution is a number that tells doctors how spread out the drug is. A small number means the drug mostly stays in the blood. A big number means it spreads out a lot into your tissues.',
      keyTerms: [
        { term: 'volume of distribution', definition: 'A measure of how much a drug spreads throughout the body' },
      ],
      analogies: ['Imagine dropping food coloring into a small glass versus a swimming pool. The same amount of dye makes the glass very colorful but the pool barely changes. Vd tells us the size of the pool the drug spreads into.'],
    },
    2: {
      level: 2,
      summary: 'Volume of distribution (Vd) is a theoretical volume that relates the total amount of drug in the body to its plasma concentration.',
      explanation: 'Vd is calculated as: Vd = Total drug in body / Plasma concentration. A drug that stays in the blood has a small Vd (close to blood volume, ~5L). A drug that moves extensively into tissues has a large Vd — sometimes hundreds of liters, far exceeding actual body volume. This is because Vd is a mathematical concept, not a real physical space. Water-soluble drugs tend to have small Vd values, while fat-soluble drugs tend to have large Vd values.',
      keyTerms: [
        { term: 'Vd', definition: 'Volume of distribution = amount of drug in body / plasma concentration' },
        { term: 'plasma concentration', definition: 'Amount of drug per volume of blood plasma' },
        { term: 'lipophilic', definition: 'Fat-soluble, tends to distribute into tissues' },
        { term: 'hydrophilic', definition: 'Water-soluble, tends to stay in blood' },
      ],
    },
    3: {
      level: 3,
      summary: 'Vd reflects drug partitioning between plasma and tissues, determined by plasma protein binding, tissue binding, and physicochemical properties.',
      explanation: 'Vd = Dose(IV) / C0, where C0 is the initial plasma concentration extrapolated to time zero. Vd can also be expressed as Vd = Vp + Vt x (fu/fut), where Vp = plasma volume, Vt = tissue volume, fu = fraction unbound in plasma, fut = fraction unbound in tissue. Drugs highly bound to plasma proteins (warfarin, fu ~0.01) have small Vd (~8L). Drugs extensively bound to tissues (chloroquine, digoxin) have very large Vd (>100L). Vd is essential for calculating loading doses: LD = Vd x target concentration.',
      keyTerms: [
        { term: 'C0', definition: 'Initial plasma concentration at time zero after IV bolus' },
        { term: 'plasma protein binding', definition: 'Drug bound to albumin or alpha-1-acid glycoprotein, reducing Vd' },
        { term: 'tissue binding', definition: 'Drug bound to tissue components, increasing Vd' },
        { term: 'loading dose', definition: 'LD = Vd x Ctarget / F' },
      ],
      clinicalNotes: 'Digoxin Vd (~500L) reflects extensive tissue binding; dialysis is ineffective for digoxin overdose because little drug is in the blood. Digoxin-specific antibody fragments (DigiFab) work by pulling digoxin out of tissues. Obesity increases Vd for lipophilic drugs, requiring weight-based dose adjustments.',
    },
    4: {
      level: 4,
      summary: 'Vd is characterized as Vc (central), Vss (steady-state), and Vbeta (terminal phase), each with distinct applications in PK modeling and clinical dosing.',
      explanation: 'In multi-compartment models: Vc (central compartment volume) is used for initial bolus concentration predictions. Vss = Vc + Vt is the steady-state volume accounting for total distribution. Vbeta = CL / beta includes the elimination component and exceeds Vss. The relationship: Vc < Vss < Vbeta. Physiologically, Vd depends on regional blood flow, capillary permeability (tight junctions in the BBB limit CNS distribution), tissue mass, plasma protein binding, tissue binding affinity, and pH partitioning (ion trapping). Pathological states alter Vd: heart failure reduces Vd of hydrophilic drugs; ascites and edema increase it.',
      keyTerms: [
        { term: 'Vc', definition: 'Volume of the central compartment (plasma + highly perfused tissues)' },
        { term: 'Vss', definition: 'Steady-state volume of distribution, most physiologically meaningful' },
        { term: 'Vbeta', definition: 'Terminal phase volume, largest Vd estimate' },
        { term: 'ion trapping', definition: 'Accumulation of ionized drug in compartments with favorable pH' },
        { term: 'BBB', definition: 'Blood-brain barrier restricting drug distribution into the CNS' },
      ],
      clinicalNotes: 'In critically ill patients with sepsis, capillary leak increases Vd of hydrophilic antibiotics (vancomycin, aminoglycosides), necessitating higher loading doses. Conversely, dehydration decreases Vd, increasing drug concentrations. Obese patients require ideal body weight dosing for hydrophilic drugs but total body weight for lipophilic drugs.',
    },
    5: {
      level: 5,
      summary: 'Advanced Vd concepts integrate PBPK tissue-plasma partition coefficients (Kp), transporter-mediated distribution, and allometric scaling for cross-species and special population predictions.',
      explanation: 'PBPK models calculate Vss = Vp + sum(Vt,i x Kp,i) where Kp,i is the tissue-plasma partition coefficient for each organ. Kp prediction methods (Poulin-Theil, Rodgers-Rowland, Berezhkovskiy) use lipophilicity, ionization, and plasma/tissue composition data. Active uptake transporters (OCT, OAT, OATP) create tissue concentrations exceeding passive partitioning predictions. Allometric scaling of Vd uses the exponent ~1.0 (proportional to body weight). In pediatrics, age-dependent changes in body water, fat, protein binding, and organ size alter Vd — neonates have larger Vd for water-soluble drugs due to higher body water content.',
      keyTerms: [
        { term: 'Kp', definition: 'Tissue-plasma partition coefficient predicting drug distribution to each organ' },
        { term: 'Poulin-Theil method', definition: 'Mechanistic Kp prediction using tissue composition and drug properties' },
        { term: 'Rodgers-Rowland method', definition: 'Kp prediction incorporating electrostatic interactions with phospholipids' },
        { term: 'allometric scaling', definition: 'Body weight-based cross-species Vd prediction using power law' },
      ],
      clinicalNotes: 'PBPK-predicted Vd is increasingly used in pediatric dose extrapolation accepted by FDA. Hepatic Kp values inform understanding of liver-targeted drugs. Transporter-mediated uptake explains why metformin concentrations in liver exceed plasma by >10-fold despite being hydrophilic.',
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'pharmacokinetics-adme-overview', targetType: 'concept', relationship: 'parent' },
    { targetId: 'pharmacokinetics-clearance', targetType: 'concept', relationship: 'related' },
    { targetId: 'pharmacokinetics-half-life', targetType: 'concept', relationship: 'related' },
  ],
  tags: { topics: ['pharmacology', 'pharmacokinetics'], keywords: ['volume of distribution', 'Vd', 'drug distribution'], clinicalRelevance: 'high', examRelevance: { usmle: true } },
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

// ============================================
// Clearance
// ============================================

export const clearance: EducationalContent = {
  id: 'pharmacokinetics-clearance',
  type: 'concept',
  name: 'Clearance',
  alternateNames: ['CL', 'Drug Clearance', 'Total Body Clearance'],
  levels: {
    1: {
      level: 1,
      summary: 'Clearance is how fast your body removes medicine from your blood.',
      explanation: 'Your body is always working to remove medicine. The liver breaks it down and the kidneys filter it out. Clearance tells doctors how quickly this happens. If your liver or kidneys are not working well, the medicine stays in your body longer and you may need a lower dose.',
      keyTerms: [
        { term: 'clearance', definition: 'How fast your body removes medicine from the blood' },
        { term: 'kidneys', definition: 'Organs that filter waste and medicine from your blood into urine' },
      ],
      analogies: ['Clearance is like a pool filter system. A powerful filter cleans the water quickly (high clearance). A weak filter takes longer (low clearance).'],
      patientCounselingPoints: ['If you have kidney or liver problems, your doctor may give you a lower dose because your body removes the drug more slowly.'],
    },
    2: {
      level: 2,
      summary: 'Clearance (CL) is the volume of plasma completely cleared of drug per unit time, reflecting the body\'s ability to eliminate a drug.',
      explanation: 'Total clearance is the sum of all routes: CL_total = CL_renal + CL_hepatic + CL_other. Units are volume per time (e.g., mL/min or L/hr). Renal clearance depends on kidney function and can be estimated using creatinine clearance. Hepatic clearance depends on liver blood flow and enzyme activity. Clearance is the most important parameter for determining maintenance dose: Maintenance dose = CL x Css x tau / F.',
      keyTerms: [
        { term: 'total clearance', definition: 'Sum of all elimination pathways (renal + hepatic + other)' },
        { term: 'renal clearance', definition: 'Drug removal by the kidneys' },
        { term: 'hepatic clearance', definition: 'Drug removal by the liver' },
        { term: 'creatinine clearance', definition: 'Measure of kidney function used to estimate renal drug clearance' },
        { term: 'maintenance dose', definition: 'Regular dose needed to maintain steady-state drug levels' },
      ],
    },
    3: {
      level: 3,
      summary: 'Clearance equals the product of elimination rate constant and volume of distribution (CL = kel x Vd), and is the proportionality constant between maintenance dose rate and steady-state concentration.',
      explanation: 'CL = Dose x F / AUC (model-independent calculation). Renal clearance: CLr = (fu x GFR) + secretion - reabsorption. Net tubular secretion increases CLr above fu x GFR; tubular reabsorption decreases it. Hepatic clearance via the well-stirred model: CLh = Qh x (fu x CLint) / (Qh + fu x CLint). For high-extraction drugs, CLh approaches Qh (flow-limited). For low-extraction drugs, CLh approaches fu x CLint (capacity-limited). Total body clearance determines the maintenance dose rate: Rate = CL x Css.',
      keyTerms: [
        { term: 'GFR', definition: 'Glomerular filtration rate — baseline renal clearance for unbound drug' },
        { term: 'tubular secretion', definition: 'Active transport of drug from blood into renal tubule' },
        { term: 'tubular reabsorption', definition: 'Drug moving back from tubule to blood, reducing renal clearance' },
        { term: 'intrinsic clearance (CLint)', definition: 'Metabolic capacity of the liver independent of blood flow and protein binding' },
      ],
      clinicalNotes: 'Cockcroft-Gault equation estimates CrCl for renal dose adjustments. The MDRD and CKD-EPI equations estimate GFR. For drugs primarily cleared renally (>70%), dose reduction is needed when CrCl falls below 50 mL/min. Drug-drug interactions that inhibit tubular secretion (probenecid blocking penicillin secretion) reduce renal clearance.',
    },
    4: {
      level: 4,
      summary: 'Clearance concepts include organ clearance models, extraction ratio classification, and the impact of pathophysiology on clearance mechanisms.',
      explanation: 'Organ clearance follows the venous equilibrium (well-stirred) model or parallel-tube (undistributed) model, each predicting different sensitivity to parameter changes. Biliary clearance involves hepatic uptake, metabolism/conjugation, and canalicular efflux transport (BCRP, MRP2, P-gp). Renal clearance changes across the lifespan: GFR matures by age 1-2 years and declines ~1 mL/min/year after age 40. Disease state effects: cirrhosis reduces hepatic CLint and may reduce Qh; nephrotic syndrome increases fu for highly protein-bound drugs, increasing CL of low-E drugs but not changing free Css; critical illness alters both renal and hepatic clearance unpredictably (augmented renal clearance in sepsis vs. AKI).',
      keyTerms: [
        { term: 'biliary clearance', definition: 'Drug excretion into bile via canalicular transporters' },
        { term: 'augmented renal clearance', definition: 'Increased GFR in critically ill patients causing subtherapeutic drug levels' },
        { term: 'extraction ratio', definition: 'Fraction of drug cleared during single organ passage (determines flow- vs. capacity-limited behavior)' },
        { term: 'BCRP', definition: 'Breast cancer resistance protein — canalicular efflux transporter for biliary excretion' },
        { term: 'MRP2', definition: 'Multidrug resistance-associated protein 2 — biliary efflux transporter' },
      ],
      clinicalNotes: 'Augmented renal clearance (CrCl > 130 mL/min) in young trauma/sepsis patients causes subtherapeutic beta-lactam and vancomycin levels — higher doses or continuous infusions may be needed. Child-Pugh and MELD scores guide hepatic dose adjustments but are imprecise for predicting drug clearance.',
    },
    5: {
      level: 5,
      summary: 'Advanced clearance modeling integrates transporter-mediated clearance, metabolite kinetics, allometric/maturation scaling, and organ-on-a-chip predictions for emerging drug development paradigms.',
      explanation: 'The extended clearance concept decomposes hepatic clearance into uptake (PSinf), efflux (PSeff), metabolic (CLint,met), and biliary (CLint,bile) components. IVIVE scaling uses microsomal or hepatocyte CLint with scaling factors (mg protein/g liver, g liver/kg body weight) to predict in vivo CLh. Allometric clearance scaling uses exponent 0.75 across species. Maturation models (Hill equation) describe ontogeny of enzyme/transporter expression in pediatric populations. Organ-on-a-chip and microphysiological systems aim to improve IVIVE accuracy by recapitulating tissue architecture, flow, and cell interactions. Machine learning approaches predict clearance from molecular structure with increasing accuracy.',
      keyTerms: [
        { term: 'extended clearance concept', definition: 'Framework decomposing hepatic clearance into transporter and metabolic components' },
        { term: 'IVIVE scaling factors', definition: 'Physiological constants for extrapolating in vitro to in vivo clearance' },
        { term: 'ontogeny', definition: 'Developmental changes in enzyme and transporter expression from birth to adulthood' },
        { term: 'organ-on-a-chip', definition: 'Microfluidic cell culture systems mimicking organ-level function for PK prediction' },
        { term: 'Hill equation (maturation)', definition: 'Sigmoidal model describing enzyme/transporter maturation with age' },
      ],
      clinicalNotes: 'Pediatric dose extrapolation using PBPK maturation models is accepted by FDA and EMA for reducing pediatric study requirements. CYP3A4 activity is low at birth, reaches adult levels by ~1 year, exceeds adult levels in early childhood, then normalizes. UGT enzymes mature more slowly — chloramphenicol toxicity in neonates (gray baby syndrome) results from immature UGT2B7.',
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'pharmacokinetics-adme-overview', targetType: 'concept', relationship: 'parent' },
    { targetId: 'pharmacokinetics-half-life', targetType: 'concept', relationship: 'related' },
    { targetId: 'pharmacokinetics-vd', targetType: 'concept', relationship: 'related' },
    { targetId: 'pharmacokinetics-steady-state', targetType: 'concept', relationship: 'related' },
  ],
  tags: { topics: ['pharmacology', 'pharmacokinetics'], keywords: ['clearance', 'renal clearance', 'hepatic clearance'], clinicalRelevance: 'critical', examRelevance: { usmle: true } },
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};
