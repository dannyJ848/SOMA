/**
 * Pharmacokinetics Educational Content
 *
 * Multi-level content covering ADME (absorption, distribution, metabolism,
 * excretion), bioavailability, half-life, and steady state.
 *
 * 5 complexity levels from 8th grade through MD/Professional.
 */

import { EducationalContent } from '../../types';

// ============================================
// ADME Overview
// ============================================

export const admeOverview: EducationalContent = {
  id: 'pharmacokinetics-adme-overview',
  type: 'concept',
  name: 'ADME Overview',
  alternateNames: ['Pharmacokinetics', 'Drug Movement in the Body'],
  levels: {
    1: {
      level: 1,
      summary: 'ADME describes the four things your body does with any medicine you take.',
      explanation: 'When you take a medicine, your body handles it in four steps: **Absorption** means the drug gets into your blood. **Distribution** means the blood carries it around your body. **Metabolism** means your body (mainly the liver) breaks the drug down. **Excretion** means your body gets rid of it, mostly through urine. Think of it like a journey the medicine takes through your body.',
      keyTerms: [
        { term: 'absorption', definition: 'How the drug gets into your bloodstream' },
        { term: 'distribution', definition: 'How the drug travels around your body' },
        { term: 'metabolism', definition: 'How your body breaks down the drug' },
        { term: 'excretion', definition: 'How your body removes the drug' },
      ],
      analogies: [
        'ADME is like ordering a package online: absorption is the package arriving at your door, distribution is you carrying it to different rooms, metabolism is unpacking and using the contents, and excretion is taking out the trash.',
      ],
      patientCounselingPoints: [
        'Taking some medicines with food helps your body absorb them better.',
        'Your liver and kidneys do most of the work removing medicines from your body.',
      ],
    },
    2: {
      level: 2,
      summary: 'ADME is the pharmacokinetic framework describing how a drug is absorbed into the bloodstream, distributed to tissues, metabolized by enzymes, and excreted from the body.',
      explanation: 'Pharmacokinetics studies what the body does to a drug. **Absorption** occurs when a drug crosses membranes to enter the bloodstream, influenced by route of administration and drug properties. **Distribution** moves the drug from blood into tissues via the circulatory system, affected by blood flow and protein binding. **Metabolism** (biotransformation) mainly happens in the liver, where enzymes convert the drug into metabolites. **Excretion** eliminates the drug and its metabolites, primarily through the kidneys in urine or through bile into feces.',
      keyTerms: [
        { term: 'pharmacokinetics', definition: 'Study of how the body processes drugs (what the body does to the drug)' },
        { term: 'biotransformation', definition: 'Chemical modification of a drug by the body' },
        { term: 'metabolites', definition: 'Breakdown products of the original drug' },
        { term: 'protein binding', definition: 'Drug molecules attaching to proteins in the blood' },
        { term: 'route of administration', definition: 'How the drug enters the body (oral, IV, etc.)' },
      ],
      analogies: [
        'ADME is like a river system: drugs enter at a tributary (absorption), flow through the main river to all the towns (distribution), pass through a water treatment plant (metabolism), and drain into the sea (excretion).',
      ],
    },
    3: {
      level: 3,
      summary: 'ADME encompasses the pharmacokinetic processes governing drug concentration in plasma and tissues over time, determining onset, duration, and intensity of drug action.',
      explanation: 'Pharmacokinetics is described by four interconnected processes. **Absorption** depends on drug lipophilicity, molecular weight, ionization state (Henderson-Hasselbalch equation), and formulation. Most oral drugs are absorbed via passive diffusion across the GI mucosa. **Distribution** is governed by cardiac output, regional blood flow, capillary permeability, tissue binding, and plasma protein binding (albumin for acidic drugs, alpha-1-acid glycoprotein for basic drugs). **Metabolism** occurs in two phases: Phase I (oxidation, reduction, hydrolysis via CYP450 enzymes) and Phase II (conjugation reactions including glucuronidation, sulfation, acetylation). **Excretion** involves renal mechanisms (glomerular filtration, tubular secretion, tubular reabsorption) and biliary excretion with potential enterohepatic recirculation.',
      keyTerms: [
        { term: 'CYP450', definition: 'Cytochrome P450 enzyme superfamily responsible for Phase I metabolism' },
        { term: 'Phase I metabolism', definition: 'Oxidation, reduction, or hydrolysis reactions that modify the drug molecule' },
        { term: 'Phase II metabolism', definition: 'Conjugation reactions that make drug metabolites more water-soluble for excretion' },
        { term: 'Henderson-Hasselbalch equation', definition: 'Equation predicting ionization of drugs based on pH and pKa' },
        { term: 'enterohepatic recirculation', definition: 'Drug excreted in bile is reabsorbed from the intestine, prolonging its effect' },
        { term: 'plasma protein binding', definition: 'Only unbound (free) drug is pharmacologically active' },
      ],
      clinicalNotes: 'Drug interactions often involve CYP450 inhibition or induction. CYP3A4 metabolizes approximately 50% of all drugs. Renal impairment affects excretion and requires dose adjustments for renally cleared drugs.',
    },
    4: {
      level: 4,
      summary: 'ADME processes are modeled using compartmental pharmacokinetics and physiologically-based pharmacokinetic (PBPK) models to predict drug behavior and optimize dosing.',
      explanation: 'Compartmental models (one-compartment, two-compartment) use differential equations to describe drug concentration-time profiles. The one-compartment model assumes instant distribution; two-compartment models include an alpha (distribution) and beta (elimination) phase. PBPK models integrate anatomical and physiological parameters with drug-specific properties to predict tissue concentrations. Absorption modeling considers the Biopharmaceutics Classification System (BCS): Class I (high solubility, high permeability), Class II (low solubility, high permeability), Class III (high solubility, low permeability), Class IV (low both). P-glycoprotein and other efflux transporters affect oral bioavailability. CYP enzyme polymorphisms create phenotypic classes: poor, intermediate, extensive, and ultra-rapid metabolizers.',
      keyTerms: [
        { term: 'compartmental model', definition: 'Mathematical model treating the body as one or more kinetically homogeneous compartments' },
        { term: 'PBPK model', definition: 'Physiologically-based model using actual organ volumes, blood flows, and tissue partition coefficients' },
        { term: 'BCS', definition: 'Biopharmaceutics Classification System categorizing drugs by solubility and permeability' },
        { term: 'P-glycoprotein', definition: 'ATP-dependent efflux transporter limiting oral absorption and CNS penetration' },
        { term: 'pharmacogenomics', definition: 'Study of genetic variation affecting drug metabolism and response' },
        { term: 'alpha phase', definition: 'Initial rapid distribution phase in two-compartment models' },
        { term: 'beta phase', definition: 'Terminal elimination phase in two-compartment models' },
      ],
      clinicalNotes: 'CYP2D6 poor metabolizers (5-10% of Caucasians) cannot activate codeine to morphine. CYP2C19 polymorphisms affect clopidogrel efficacy. FDA recommends pharmacogenomic testing for warfarin (CYP2C9, VKORC1), abacavir (HLA-B*5701), and carbamazepine (HLA-B*1502).',
    },
    5: {
      level: 5,
      summary: 'Advanced pharmacokinetics integrates population PK modeling, allometric scaling, in vitro-in vivo extrapolation (IVIVE), and mechanistic transporter/enzyme models for drug development and precision dosing.',
      explanation: 'Population pharmacokinetics uses nonlinear mixed-effects modeling (NONMEM) to characterize PK variability across patient populations, identifying covariates (weight, renal function, genotype) that explain inter-individual variability. Model-informed drug development (MIDD) applies these models from first-in-human through Phase III. IVIVE uses hepatocyte or microsomal intrinsic clearance scaled by physiological parameters to predict in vivo hepatic clearance. Allometric scaling relates PK parameters across species using body weight exponents. Target-mediated drug disposition (TMDD) models describe nonlinear PK of biologics. Absorption modeling now incorporates gastrointestinal simulation tools (GastroPlus, Simcyp) integrating dissolution, permeability, and transporter kinetics.',
      keyTerms: [
        { term: 'population PK', definition: 'Nonlinear mixed-effects modeling of PK variability in patient populations' },
        { term: 'NONMEM', definition: 'Software for nonlinear mixed-effects pharmacokinetic modeling' },
        { term: 'IVIVE', definition: 'In vitro-in vivo extrapolation to predict human clearance from in vitro data' },
        { term: 'allometric scaling', definition: 'Cross-species PK prediction using body weight relationships' },
        { term: 'TMDD', definition: 'Target-mediated drug disposition describing nonlinear PK when drug binds its pharmacological target' },
        { term: 'MIDD', definition: 'Model-informed drug development using quantitative modeling throughout drug development' },
      ],
      clinicalNotes: 'Bayesian dose individualization uses population PK models with patient-specific drug levels to optimize dosing for narrow therapeutic index drugs (vancomycin, aminoglycosides). PBPK modeling is increasingly accepted by FDA for drug-drug interaction predictions and pediatric dose selection. The FDA issued guidance on PBPK analysis in regulatory submissions.',
    },
  },
  media: [],
  citations: [
    { id: 'goodman-gilman-pk', type: 'textbook', title: 'Goodman & Gilman\'s The Pharmacological Basis of Therapeutics', source: 'McGraw-Hill', chapter: 'Pharmacokinetics', section: 'ADME' },
  ],
  crossReferences: [
    { targetId: 'pharmacokinetics-bioavailability', targetType: 'concept', relationship: 'child' },
    { targetId: 'pharmacokinetics-half-life', targetType: 'concept', relationship: 'child' },
    { targetId: 'pharmacokinetics-steady-state', targetType: 'concept', relationship: 'child' },
    { targetId: 'pharmacokinetics-first-pass', targetType: 'concept', relationship: 'child' },
    { targetId: 'pharmacokinetics-vd', targetType: 'concept', relationship: 'child' },
    { targetId: 'pharmacokinetics-clearance', targetType: 'concept', relationship: 'child' },
  ],
  tags: { topics: ['pharmacology', 'pharmacokinetics'], keywords: ['ADME', 'drug metabolism', 'drug absorption'], clinicalRelevance: 'critical', examRelevance: { usmle: true } },
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

// ============================================
// Bioavailability
// ============================================

export const bioavailability: EducationalContent = {
  id: 'pharmacokinetics-bioavailability',
  type: 'concept',
  name: 'Bioavailability',
  alternateNames: ['F', 'Systemic Availability'],
  levels: {
    1: {
      level: 1,
      summary: 'Bioavailability is how much of a medicine actually reaches your bloodstream.',
      explanation: 'When you swallow a pill, not all of the medicine makes it into your blood. Some is destroyed by stomach acid, some is broken down by your liver before it can work. Bioavailability tells us what percentage actually gets through. A medicine given by IV (directly into a vein) has 100% bioavailability because it all goes straight into the blood.',
      keyTerms: [
        { term: 'bioavailability', definition: 'The percentage of a drug that reaches your bloodstream' },
        { term: 'IV', definition: 'Intravenous — medicine given directly into a vein' },
      ],
      analogies: ['If you pour water through a coffee filter, not all the water passes through. Bioavailability is like the percentage of water that makes it through the filter.'],
      patientCounselingPoints: ['Some medicines must be taken on an empty stomach so more of the drug gets absorbed.', 'Taking a medicine by injection usually delivers more drug than taking it by mouth.'],
    },
    2: {
      level: 2,
      summary: 'Bioavailability (F) is the fraction of an administered drug dose that reaches systemic circulation in an unchanged form.',
      explanation: 'When a drug is taken orally, it must survive the stomach acid, be absorbed through the intestinal wall, and pass through the liver before entering general circulation. Each step can reduce the amount of active drug. IV drugs have 100% bioavailability by definition. Oral bioavailability varies widely: some drugs have nearly 100% (like metoprolol) while others have very low bioavailability (like cyclosporine at around 30%). Factors affecting bioavailability include the drug formulation, food interactions, and individual patient factors.',
      keyTerms: [
        { term: 'bioavailability (F)', definition: 'Fraction of administered dose reaching systemic circulation unchanged' },
        { term: 'systemic circulation', definition: 'The main blood supply flowing through the body' },
        { term: 'oral bioavailability', definition: 'Fraction of oral dose reaching the bloodstream' },
        { term: 'formulation', definition: 'How the drug is prepared (tablet, capsule, liquid, etc.)' },
      ],
    },
    3: {
      level: 3,
      summary: 'Bioavailability is quantified as the AUC ratio of a given route to IV administration, reflecting the combined effects of incomplete absorption and first-pass elimination.',
      explanation: 'Absolute bioavailability is calculated as F = (AUC_oral / AUC_IV) x (Dose_IV / Dose_oral). Relative bioavailability compares two non-IV formulations. Bioavailability is reduced by poor dissolution, degradation in GI fluid, incomplete membrane permeation, efflux by P-glycoprotein, intestinal wall metabolism (CYP3A4), and hepatic first-pass metabolism. Bioequivalence studies for generic drugs require the 90% confidence interval of the AUC and Cmax ratios to fall within 80-125% of the reference product.',
      keyTerms: [
        { term: 'AUC', definition: 'Area under the concentration-time curve — total drug exposure over time' },
        { term: 'Cmax', definition: 'Peak plasma concentration of the drug' },
        { term: 'absolute bioavailability', definition: 'Comparison of non-IV AUC to IV AUC' },
        { term: 'relative bioavailability', definition: 'Comparison of two non-IV formulations' },
        { term: 'bioequivalence', definition: 'Two formulations producing similar plasma concentration profiles' },
      ],
      clinicalNotes: 'Generic drug approval requires bioequivalence studies. The 80-125% AUC/Cmax rule ensures interchangeability. Narrow therapeutic index drugs may require tighter bioequivalence criteria.',
    },
    4: {
      level: 4,
      summary: 'Bioavailability reflects the product of fraction absorbed (fa), fraction escaping gut-wall metabolism (fg), and fraction escaping hepatic first-pass extraction (fh): F = fa x fg x fh.',
      explanation: 'Each component of F can be independently assessed. Fraction absorbed (fa) depends on dissolution, solubility, permeability, and GI transit time. Fraction escaping gut-wall extraction (fg) is reduced by intestinal CYP3A4 and UGT enzymes. Fraction escaping hepatic extraction (fh) = 1 - Eh, where Eh is hepatic extraction ratio. High extraction ratio drugs (Eh > 0.7) show significant first-pass effect and large inter-individual variability in oral bioavailability due to variable hepatic blood flow and enzyme activity. The well-stirred liver model predicts Eh = (fu x CLint) / (Qh + fu x CLint).',
      keyTerms: [
        { term: 'extraction ratio (E)', definition: 'Fraction of drug removed from blood during single passage through an organ' },
        { term: 'well-stirred model', definition: 'Hepatic clearance model assuming instant drug equilibrium within the liver' },
        { term: 'CLint', definition: 'Intrinsic clearance — metabolic capacity of the liver independent of blood flow' },
        { term: 'Qh', definition: 'Hepatic blood flow (~1.5 L/min)' },
        { term: 'fu', definition: 'Fraction of drug unbound in plasma' },
      ],
      clinicalNotes: 'Propranolol and morphine are high extraction ratio drugs; their oral bioavailability is highly variable and flow-dependent. Liver disease with portosystemic shunting dramatically increases bioavailability of high-extraction drugs.',
    },
    5: {
      level: 5,
      summary: 'Advanced bioavailability assessment integrates in silico PBPK modeling, BCS-based biowaivers, and mechanistic understanding of transporter-enzyme interplay for drug development and regulatory decisions.',
      explanation: 'PBPK models predict oral bioavailability by simulating GI tract physiology, drug dissolution (Noyes-Whitney equation), permeability (parallel artificial membrane permeability assay — PAMPA, Caco-2 cells), transporter kinetics, and metabolic clearance. The FDA BCS biowaiver framework allows Class I and III drugs to forgo in vivo bioequivalence studies under specified conditions. The interplay between CYP3A4 and P-gp in the intestine creates complex nonlinear absorption. Advanced formulation strategies (amorphous solid dispersions, lipid-based delivery, nanocrystals) address low bioavailability of BCS Class II/IV compounds.',
      keyTerms: [
        { term: 'BCS biowaiver', definition: 'Regulatory pathway allowing in vitro dissolution testing instead of in vivo bioequivalence' },
        { term: 'Noyes-Whitney equation', definition: 'Equation describing drug dissolution rate based on surface area, diffusion, and solubility' },
        { term: 'PAMPA', definition: 'Parallel artificial membrane permeability assay for passive permeability screening' },
        { term: 'Caco-2', definition: 'Human colon carcinoma cell line used to model intestinal permeability' },
        { term: 'amorphous solid dispersion', definition: 'Formulation strategy improving dissolution of poorly soluble drugs' },
      ],
      clinicalNotes: 'PBPK modeling is increasingly used in regulatory submissions (IND, NDA) to predict food effects, DDI impact on bioavailability, and pediatric dosing. The FDA has accepted PBPK-based biowaivers for certain formulation changes.',
    },
  },
  media: [],
  citations: [
    { id: 'shargel-bioavailability', type: 'textbook', title: 'Applied Biopharmaceutics & Pharmacokinetics', source: 'McGraw-Hill', chapter: 'Bioavailability and Bioequivalence' },
  ],
  crossReferences: [
    { targetId: 'pharmacokinetics-adme-overview', targetType: 'concept', relationship: 'parent' },
    { targetId: 'pharmacokinetics-first-pass', targetType: 'concept', relationship: 'related' },
  ],
  tags: { topics: ['pharmacology', 'pharmacokinetics'], keywords: ['bioavailability', 'AUC', 'bioequivalence'], clinicalRelevance: 'high', examRelevance: { usmle: true } },
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

// ============================================
// Half-Life
// ============================================

export const halfLife: EducationalContent = {
  id: 'pharmacokinetics-half-life',
  type: 'concept',
  name: 'Half-Life',
  alternateNames: ['t1/2', 'Elimination Half-Life'],
  levels: {
    1: {
      level: 1,
      summary: 'Half-life is the time it takes for half the medicine in your body to be removed.',
      explanation: 'Imagine you have 100 units of medicine in your blood. If the half-life is 4 hours, after 4 hours you have 50 left. After another 4 hours, you have 25. Then 12.5, and so on. This is why you need to take medicine at regular times — to keep enough in your body to work.',
      keyTerms: [
        { term: 'half-life', definition: 'Time for half the drug to leave your body' },
      ],
      analogies: ['Half-life is like a sandcastle on the beach. Each wave (one half-life) washes away half of what is left.'],
      patientCounselingPoints: ['This is why some medicines are taken once a day and others three times a day — they have different half-lives.', 'Do not stop taking your medicine suddenly; the drug needs time to leave your body gradually.'],
    },
    2: {
      level: 2,
      summary: 'Half-life (t1/2) is the time required for the plasma concentration of a drug to decrease by 50%.',
      explanation: 'Half-life determines how often a drug must be taken. Drugs with short half-lives (e.g., ibuprofen at ~2 hours) need frequent dosing, while drugs with long half-lives (e.g., amiodarone at ~40 days) are taken less frequently. After approximately 4-5 half-lives, a drug is considered essentially eliminated from the body (~97% removed). Half-life also determines how long it takes for a drug to reach stable levels when taken regularly.',
      keyTerms: [
        { term: 'half-life (t1/2)', definition: 'Time for plasma drug concentration to fall by 50%' },
        { term: 'dosing interval', definition: 'Time between each dose of medication' },
        { term: 'elimination', definition: 'Complete removal of the drug from the body' },
      ],
    },
    3: {
      level: 3,
      summary: 'Half-life is derived from the elimination rate constant (kel): t1/2 = 0.693/kel, and is dependent on both volume of distribution and clearance: t1/2 = (0.693 x Vd) / CL.',
      explanation: 'The half-life equation t1/2 = (0.693 x Vd) / CL reveals that half-life is not solely a measure of elimination efficiency. A drug may have a long half-life because it has a large volume of distribution (e.g., chloroquine, Vd ~200L) or because it has low clearance (e.g., diazepam). Changes in Vd or CL independently alter half-life. In first-order kinetics, the fraction eliminated per unit time is constant regardless of concentration. After 5 half-lives, 96.875% of the drug is eliminated.',
      keyTerms: [
        { term: 'elimination rate constant (kel)', definition: 'Fractional rate of drug removal per unit time' },
        { term: 'first-order kinetics', definition: 'Rate of elimination proportional to drug concentration' },
        { term: 'zero-order kinetics', definition: 'Constant rate of elimination regardless of concentration (e.g., ethanol)' },
        { term: 'Vd', definition: 'Volume of distribution — apparent volume drug distributes into' },
        { term: 'CL', definition: 'Clearance — volume of plasma cleared of drug per unit time' },
      ],
      clinicalNotes: 'Phenytoin exhibits Michaelis-Menten (saturable) kinetics at therapeutic concentrations, meaning small dose changes cause disproportionate concentration changes. Ethanol follows zero-order kinetics — a constant amount is eliminated per hour regardless of blood level.',
    },
    4: {
      level: 4,
      summary: 'Half-life in multi-compartment models includes distribution (alpha) and terminal elimination (beta) half-lives, with clinical relevance depending on the context of drug action.',
      explanation: 'In a two-compartment model, the initial alpha half-life reflects redistribution from central to peripheral compartments, while the terminal beta half-life reflects true elimination. For some drugs (e.g., thiopental), the clinically relevant half-life is the context-sensitive half-time, which describes the time for plasma concentration to fall by 50% after stopping a continuous infusion, accounting for tissue accumulation. Effective half-life may differ from terminal half-life when drug effect correlates with distribution phase concentrations.',
      keyTerms: [
        { term: 'alpha half-life', definition: 'Distribution half-life in multi-compartment kinetics' },
        { term: 'beta half-life', definition: 'Terminal elimination half-life' },
        { term: 'context-sensitive half-time', definition: 'Time for 50% concentration decline after variable-duration infusion' },
        { term: 'effective half-life', definition: 'Half-life relevant to clinical drug effect, may differ from terminal t1/2' },
      ],
      clinicalNotes: 'Context-sensitive half-time is critical in anesthesia: remifentanil has a consistently short context-sensitive half-time (~3-4 min) regardless of infusion duration, while fentanyl accumulates and its context-sensitive half-time increases dramatically with prolonged infusions.',
    },
    5: {
      level: 5,
      summary: 'Advanced half-life concepts include target-mediated disposition nonlinear half-life in biologics, flip-flop kinetics, and multi-exponential terminal phase analysis.',
      explanation: 'Monoclonal antibodies exhibit concentration-dependent half-life due to TMDD: at low concentrations, target-mediated clearance dominates (short half-life); at saturating concentrations, non-specific clearance dominates (longer IgG half-life ~21 days via FcRn recycling). Flip-flop kinetics occurs when absorption is rate-limiting (ka < kel), making the terminal slope reflect absorption rather than elimination — common with sustained-release formulations and intramuscular depots. Metabolite kinetics follow the formation-rate-limited or elimination-rate-limited model depending on whether the metabolite half-life exceeds the parent.',
      keyTerms: [
        { term: 'TMDD', definition: 'Target-mediated drug disposition causing concentration-dependent half-life' },
        { term: 'FcRn recycling', definition: 'Neonatal Fc receptor salvage pathway extending IgG antibody half-life' },
        { term: 'flip-flop kinetics', definition: 'Terminal slope reflects absorption rate rather than elimination rate' },
        { term: 'formation-rate-limited', definition: 'Metabolite elimination parallels parent because metabolite has shorter half-life' },
        { term: 'elimination-rate-limited', definition: 'Metabolite accumulates because its half-life exceeds the parent drug' },
      ],
      clinicalNotes: 'FcRn engineering (Xtend technology, YTE mutations) extends monoclonal antibody half-life, enabling less frequent dosing. Albumin fusion and PEGylation similarly extend half-life of peptide drugs. Understanding flip-flop kinetics is essential for interpreting PK data from depot formulations (e.g., paliperidone palmitate).',
    },
  },
  media: [],
  citations: [
    { id: 'rowland-tozer-pk', type: 'textbook', title: 'Clinical Pharmacokinetics and Pharmacodynamics', authors: ['Rowland M', 'Tozer TN'], source: 'Lippincott Williams & Wilkins' },
  ],
  crossReferences: [
    { targetId: 'pharmacokinetics-adme-overview', targetType: 'concept', relationship: 'parent' },
    { targetId: 'pharmacokinetics-steady-state', targetType: 'concept', relationship: 'related' },
    { targetId: 'pharmacokinetics-clearance', targetType: 'concept', relationship: 'related' },
  ],
  tags: { topics: ['pharmacology', 'pharmacokinetics'], keywords: ['half-life', 't1/2', 'elimination'], clinicalRelevance: 'critical', examRelevance: { usmle: true } },
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

// ============================================
// Steady State
// ============================================

export const steadyState: EducationalContent = {
  id: 'pharmacokinetics-steady-state',
  type: 'concept',
  name: 'Steady State',
  alternateNames: ['Css', 'Steady-State Concentration'],
  levels: {
    1: {
      level: 1,
      summary: 'Steady state is when the amount of medicine going into your body equals the amount leaving.',
      explanation: 'When you start taking medicine regularly, the level builds up in your blood. Eventually, the amount you take in each dose equals the amount your body removes between doses. This balance is called steady state. It usually takes about 4-5 doses spaced by the half-life to get there.',
      keyTerms: [
        { term: 'steady state', definition: 'When drug levels stay the same because intake equals removal' },
      ],
      analogies: ['Steady state is like filling a bathtub with the drain open. At first the water level rises, but eventually the water flowing in equals the water draining out, and the level stays constant.'],
      patientCounselingPoints: ['It may take several days for your medicine to reach full effect because it takes time to reach steady state.', 'Do not skip doses — this disrupts the balance of medicine in your body.'],
    },
    2: {
      level: 2,
      summary: 'Steady state occurs after approximately 4-5 half-lives of regular dosing, when the rate of drug administration equals the rate of elimination.',
      explanation: 'With repeated dosing, each dose adds to the drug remaining from previous doses. The drug level rises until the amount eliminated per dosing interval equals the dose administered. At steady state, plasma concentrations fluctuate between a peak (Cmax) and trough (Cmin) but the average remains constant. If you double the dose, the steady-state concentration doubles. Changing the dosing interval changes the degree of fluctuation but not the average level (if the same daily dose is maintained).',
      keyTerms: [
        { term: 'steady state', definition: 'Equilibrium where drug input rate equals elimination rate' },
        { term: 'Cmax', definition: 'Peak drug level after each dose' },
        { term: 'Cmin (trough)', definition: 'Lowest drug level just before the next dose' },
        { term: 'loading dose', definition: 'A larger first dose to reach steady state faster' },
      ],
    },
    3: {
      level: 3,
      summary: 'Steady-state average concentration (Css,avg) = F x Dose / (CL x tau), achieved after ~4-5 half-lives, with fluctuation dependent on dosing interval relative to half-life.',
      explanation: 'At steady state with first-order elimination: Css,avg = (F x Dose) / (CL x tau), where tau is the dosing interval. The accumulation factor R = 1 / (1 - e^(-kel x tau)) predicts the ratio of steady-state to single-dose concentrations. A loading dose (LD = Css x Vd) immediately achieves target concentrations. Greater fluctuation (Cmax/Cmin ratio) occurs when tau >> t1/2. Continuous IV infusion achieves a constant Css = Rate / CL with no fluctuation.',
      keyTerms: [
        { term: 'accumulation factor', definition: 'Ratio of steady-state to first-dose peak concentration' },
        { term: 'loading dose', definition: 'LD = target Css x Vd / F, achieves immediate therapeutic levels' },
        { term: 'tau', definition: 'Dosing interval (time between doses)' },
        { term: 'Css,avg', definition: 'Time-averaged steady-state concentration over a dosing interval' },
      ],
      clinicalNotes: 'Loading doses are critical for drugs with long half-lives where waiting 4-5 half-lives is clinically unacceptable (e.g., digoxin t1/2 ~36h, amiodarone t1/2 ~40 days). Therapeutic drug monitoring samples should be drawn at steady state (trough levels).',
    },
    4: {
      level: 4,
      summary: 'Steady-state PK analysis incorporates nonlinear kinetics, time-dependent changes, and autoinduction/autoinhibition that complicate simple accumulation predictions.',
      explanation: 'Drugs with Michaelis-Menten kinetics (phenytoin, ethanol) do not follow simple accumulation rules — small dose increases near saturation cause disproportionate concentration increases and time to steady state increases nonlinearly. Autoinduction (carbamazepine induces its own CYP3A4 metabolism) causes declining concentrations over weeks despite constant dosing, eventually reaching a new steady state at lower levels. Time-dependent protein binding changes (e.g., valproic acid saturating albumin) alter the free fraction at steady state. Population variability in CL and Vd creates wide Css ranges for the same dose.',
      keyTerms: [
        { term: 'Michaelis-Menten kinetics', definition: 'Saturable elimination where rate approaches Vmax at high concentrations' },
        { term: 'autoinduction', definition: 'Drug inducing its own metabolism, reducing steady-state levels' },
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug levels to guide dosing, especially near saturation kinetics' },
        { term: 'Vmax', definition: 'Maximum rate of metabolic elimination' },
        { term: 'Km', definition: 'Concentration at which metabolism rate is 50% of Vmax' },
      ],
      clinicalNotes: 'Phenytoin dosing requires the Michaelis-Menten equation: dose rate = (Vmax x Css) / (Km + Css). The Orbit nomogram or Bayesian methods help clinicians adjust phenytoin doses. Carbamazepine autoinduction necessitates dose escalation over 2-4 weeks.',
    },
    5: {
      level: 5,
      summary: 'Advanced steady-state concepts encompass chronopharmacokinetics, adaptive dosing algorithms, and model-predictive control for individualized drug therapy.',
      explanation: 'Circadian variation in GI motility, hepatic blood flow, renal function, and enzyme expression creates chronopharmacokinetic variation in Css. Bayesian adaptive dosing uses population PK priors updated with individual drug levels to optimize subsequent doses. Model-predictive control (MPC) systems adjust drug delivery in real time (e.g., closed-loop insulin delivery). For biologics, anti-drug antibody formation can alter clearance over time, disrupting steady-state predictions. Stochastic simulation using Monte Carlo methods evaluates probability of target attainment (PTA) across populations for pharmacokinetic-pharmacodynamic optimization.',
      keyTerms: [
        { term: 'chronopharmacokinetics', definition: 'Time-of-day variation in drug pharmacokinetics' },
        { term: 'Bayesian adaptive dosing', definition: 'Individualizing doses using population models updated with patient data' },
        { term: 'probability of target attainment', definition: 'Likelihood a dosing regimen achieves the PK/PD target in a population' },
        { term: 'Monte Carlo simulation', definition: 'Stochastic simulation using random sampling of PK parameter distributions' },
        { term: 'anti-drug antibodies', definition: 'Immune response to biologics that increases clearance' },
      ],
      clinicalNotes: 'Bayesian dosing software (InsightRx, DoseMeRx) is used clinically for vancomycin, aminoglycosides, and voriconazole. The AUC/MIC target for vancomycin (400-600) requires Bayesian estimation. Closed-loop insulin delivery (artificial pancreas) represents the most advanced application of model-predictive steady-state control.',
    },
  },
  media: [],
  citations: [
    { id: 'winter-pk', type: 'textbook', title: 'Basic Clinical Pharmacokinetics', authors: ['Winter ME'], source: 'Lippincott Williams & Wilkins' },
  ],
  crossReferences: [
    { targetId: 'pharmacokinetics-half-life', targetType: 'concept', relationship: 'related' },
    { targetId: 'pharmacokinetics-clearance', targetType: 'concept', relationship: 'related' },
  ],
  tags: { topics: ['pharmacology', 'pharmacokinetics'], keywords: ['steady state', 'accumulation', 'loading dose'], clinicalRelevance: 'critical', examRelevance: { usmle: true } },
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};
