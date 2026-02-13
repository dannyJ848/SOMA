/**
 * Pharmacodynamics Educational Content
 *
 * Multi-level content covering dose-response curves, ED50/LD50,
 * therapeutic index, agonists/antagonists, receptor theory,
 * and potency vs efficacy.
 *
 * 5 complexity levels from 8th grade through MD/Professional.
 */

import { EducationalContent } from '../../types';

// ============================================
// Dose-Response Relationships
// ============================================

export const doseResponse: EducationalContent = {
  id: 'pharmacodynamics-dose-response',
  type: 'concept',
  name: 'Dose-Response Relationships',
  alternateNames: ['Dose-Response Curves', 'Concentration-Effect Relationships'],
  levels: {
    1: {
      level: 1,
      summary: 'The dose-response relationship explains how the amount of medicine you take affects how well it works.',
      explanation: 'If you take a very small amount of medicine, it might not do anything. As you take more, the effect gets stronger. But at some point, taking more does not help any further — the medicine has done all it can. Taking too much can even be harmful. Doctors choose doses that give the best effect with the fewest side effects.',
      keyTerms: [
        { term: 'dose', definition: 'The amount of medicine you take' },
        { term: 'response', definition: 'What the medicine does in your body' },
        { term: 'side effects', definition: 'Unwanted effects of a medicine' },
      ],
      analogies: ['A dose-response curve is like turning up the volume on a radio. At first nothing happens, then it gets louder, but eventually it maxes out and turning the knob more does not help.'],
      patientCounselingPoints: ['Taking more than your prescribed dose will not make the medicine work better and could be dangerous.', 'Your doctor chose your dose to give the best effect with the fewest side effects.'],
    },
    2: {
      level: 2,
      summary: 'A dose-response curve is a graph showing how the effect of a drug changes as the dose increases, typically forming an S-shaped (sigmoidal) curve.',
      explanation: 'When plotted on a graph with dose (log scale) on the x-axis and effect on the y-axis, most drugs produce a sigmoidal curve. Key features include: the threshold (minimum dose for any effect), the linear portion (where response increases proportionally with dose), and the maximum effect (plateau where increasing dose no longer increases response). Two types of dose-response curves exist: graded (measuring effect in one individual) and quantal (measuring the proportion of a population that responds).',
      keyTerms: [
        { term: 'sigmoidal curve', definition: 'S-shaped curve typical of dose-response relationships' },
        { term: 'threshold', definition: 'Minimum dose needed to produce any effect' },
        { term: 'maximum effect (Emax)', definition: 'The greatest response a drug can produce' },
        { term: 'graded dose-response', definition: 'Measures the magnitude of effect in one individual' },
        { term: 'quantal dose-response', definition: 'Measures the percentage of a population showing a defined response' },
      ],
    },
    3: {
      level: 3,
      summary: 'Dose-response relationships are modeled by the Hill equation: E = Emax x [D]^n / (EC50^n + [D]^n), describing graded responses, while quantal responses follow cumulative frequency distributions.',
      explanation: 'The Hill equation (Emax model) describes graded dose-response curves where Emax is maximum effect, EC50 is the concentration producing 50% of Emax, and n (Hill coefficient) describes curve steepness (n=1 for standard hyperbolic, n>1 for steep/cooperative binding). Log-transformation of the concentration axis linearizes the curve between 20-80% of Emax. Quantal dose-response curves plot the cumulative percentage of individuals responding versus log dose, yielding ED50 (median effective dose). The slope of the quantal curve reflects population variability in drug sensitivity.',
      keyTerms: [
        { term: 'Hill equation', definition: 'Mathematical model: E = Emax x [D]^n / (EC50^n + [D]^n)' },
        { term: 'EC50', definition: 'Drug concentration producing 50% of maximum effect' },
        { term: 'Hill coefficient (n)', definition: 'Steepness parameter reflecting cooperativity of drug binding' },
        { term: 'ED50', definition: 'Dose at which 50% of the population shows the defined effect' },
        { term: 'Emax', definition: 'Maximum achievable pharmacological effect' },
      ],
      clinicalNotes: 'Drugs with steep dose-response curves (high Hill coefficient) have narrow margins between ineffective and toxic doses. Warfarin and phenytoin exhibit steep curves with significant inter-patient variability, necessitating careful dose titration.',
    },
    4: {
      level: 4,
      summary: 'Advanced dose-response analysis incorporates the operational model of agonism, signal amplification (receptor reserve), and pharmacokinetic-pharmacodynamic (PK/PD) modeling linking exposure to effect over time.',
      explanation: 'The operational model (Black and Leff) separates agonist affinity (KA) from efficacy (tau): E = Emax x tau x [A] / ([A] x (1 + tau) + KA). Receptor reserve (spare receptors) means maximal response occurs at submaximal receptor occupancy — tissues with large receptor reserves show left-shifted dose-response curves (lower EC50 relative to KD). PK/PD models link plasma concentration-time profiles to effect-time profiles. Direct-link models assume instantaneous equilibration; effect-compartment models add a hypothetical biophase with a rate constant (ke0) for delayed equilibration. Indirect response models describe drugs affecting production or loss of a physiological mediator.',
      keyTerms: [
        { term: 'operational model', definition: 'Black-Leff model separating affinity from efficacy using parameter tau' },
        { term: 'receptor reserve', definition: 'Spare receptors allowing maximal response at submaximal occupancy' },
        { term: 'effect compartment', definition: 'Hypothetical compartment modeling delayed drug-effect equilibration' },
        { term: 'ke0', definition: 'Rate constant for drug equilibration between plasma and effect site' },
        { term: 'indirect response model', definition: 'PD model where drug modulates production or elimination of a response mediator' },
      ],
      clinicalNotes: 'Effect compartment modeling explains hysteresis loops in concentration-effect plots (e.g., midazolam sedation lags behind plasma concentration). Indirect response models are essential for drugs affecting endogenous mediators (warfarin inhibits vitamin K-dependent factor synthesis — effect lags by days).',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge dose-response science integrates systems pharmacology, quantitative systems toxicology, exposure-response analysis for regulatory decisions, and mechanism-based PK/PD models for complex biologics.',
      explanation: 'Quantitative systems pharmacology (QSP) models integrate molecular pathways, cellular responses, and organ physiology to predict dose-response from mechanistic understanding. Exposure-response (E-R) analysis is required by FDA for dose justification in NDA submissions, using population PK/PD to identify optimal dose ranges. Mechanism-based PK/PD models for biologics incorporate target turnover, receptor internalization, and immune-mediated clearance. Tumor growth inhibition (TGI) models in oncology link drug exposure to tumor dynamics for dose optimization. Model-informed precision dosing uses E-R relationships with individual patient covariates for real-time dose optimization.',
      keyTerms: [
        { term: 'QSP', definition: 'Quantitative systems pharmacology integrating multi-scale biological models' },
        { term: 'exposure-response analysis', definition: 'Regulatory framework linking drug exposure metrics to efficacy/safety outcomes' },
        { term: 'tumor growth inhibition model', definition: 'PK/PD model predicting tumor dynamics from drug exposure' },
        { term: 'target turnover', definition: 'Synthesis and degradation kinetics of the pharmacological target' },
        { term: 'model-informed precision dosing', definition: 'Individual dose optimization using PK/PD models with patient-specific data' },
      ],
      clinicalNotes: 'FDA E-R guidance (2003, updated) requires sponsors to characterize dose-response across the studied range. QSP models have successfully predicted clinical outcomes from preclinical data (e.g., anti-PD1 immunotherapy). Digital twins incorporating patient-specific QSP models represent the frontier of precision dosing.',
    },
  },
  media: [],
  citations: [
    { id: 'katzung-pd', type: 'textbook', title: 'Basic & Clinical Pharmacology', authors: ['Katzung BG'], source: 'McGraw-Hill', chapter: 'Pharmacodynamics' },
  ],
  crossReferences: [
    { targetId: 'pharmacodynamics-therapeutic-index', targetType: 'concept', relationship: 'related' },
    { targetId: 'pharmacodynamics-potency-efficacy', targetType: 'concept', relationship: 'related' },
    { targetId: 'pharmacodynamics-agonists-antagonists', targetType: 'concept', relationship: 'related' },
  ],
  tags: { topics: ['pharmacology', 'pharmacodynamics'], keywords: ['dose-response', 'EC50', 'Emax', 'Hill equation'], clinicalRelevance: 'critical', examRelevance: { usmle: true } },
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

// ============================================
// Therapeutic Index (ED50 / LD50)
// ============================================

export const therapeuticIndex: EducationalContent = {
  id: 'pharmacodynamics-therapeutic-index',
  type: 'concept',
  name: 'Therapeutic Index',
  alternateNames: ['TI', 'Therapeutic Window', 'Safety Margin'],
  levels: {
    1: {
      level: 1,
      summary: 'The therapeutic index tells us how safe a medicine is — the gap between the dose that helps and the dose that harms.',
      explanation: 'Every medicine has a dose that works and a higher dose that becomes dangerous. The therapeutic index is like a safety zone between these two. A medicine with a wide therapeutic index (big safety zone) is safer — even if you accidentally take a little extra, you will be okay. A medicine with a narrow therapeutic index (small safety zone) is trickier — the dose must be very exact.',
      keyTerms: [
        { term: 'therapeutic index', definition: 'The safety gap between a helpful dose and a harmful dose' },
        { term: 'safe dose', definition: 'The amount of medicine that helps without causing harm' },
      ],
      analogies: ['Think of driving on a road. A wide therapeutic index is like a wide highway — lots of room for error. A narrow therapeutic index is like a narrow mountain road with cliffs on both sides — you must be very precise.'],
      patientCounselingPoints: ['Some medicines require regular blood tests to make sure levels stay in the safe range.', 'Never change your dose without talking to your doctor, especially for medicines that need precise dosing.'],
    },
    2: {
      level: 2,
      summary: 'The therapeutic index (TI) is the ratio of the toxic dose to the effective dose (TI = TD50/ED50), measuring a drug\'s margin of safety.',
      explanation: 'ED50 is the dose effective in 50% of the population. TD50 (or LD50 in animal studies) is the dose causing toxicity (or death) in 50% of the population. TI = TD50/ED50. A high TI (e.g., penicillin, TI > 100) means the drug is relatively safe. A low TI (e.g., warfarin, lithium, digoxin) means the effective dose is close to the toxic dose, requiring careful monitoring. The therapeutic window is the range of blood concentrations between the minimum effective concentration and the minimum toxic concentration.',
      keyTerms: [
        { term: 'ED50', definition: 'Dose effective in 50% of the population' },
        { term: 'TD50', definition: 'Dose causing toxicity in 50% of the population' },
        { term: 'LD50', definition: 'Dose lethal to 50% of test animals' },
        { term: 'therapeutic window', definition: 'Range of drug concentrations between effective and toxic levels' },
        { term: 'narrow therapeutic index (NTI)', definition: 'Drug where the effective dose is close to the toxic dose' },
      ],
    },
    3: {
      level: 3,
      summary: 'The therapeutic index (TI = LD50/ED50) and the more clinically useful certain safety factor (CSF = LD1/ED99) quantify drug safety margins, with NTI drugs requiring therapeutic drug monitoring.',
      explanation: 'TI = LD50/ED50 uses median values and can be misleading if dose-response curves for efficacy and toxicity have different slopes. The certain safety factor (CSF = LD1/ED99) is more conservative, comparing the dose lethal to 1% with the dose effective in 99%. Narrow therapeutic index drugs defined by the FDA include warfarin, digoxin, lithium, theophylline, phenytoin, and cyclosporine. These drugs require therapeutic drug monitoring (TDM): measuring serum concentrations to ensure they remain within the therapeutic window. Trough concentrations are typically used, drawn just before the next dose at steady state.',
      keyTerms: [
        { term: 'certain safety factor', definition: 'CSF = LD1/ED99, a more conservative safety measure than TI' },
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug blood levels to optimize dosing within the therapeutic window' },
        { term: 'trough concentration', definition: 'Lowest drug level measured just before next dose' },
        { term: 'NTI drugs', definition: 'Drugs where small dose changes cause significant efficacy or toxicity changes' },
      ],
      clinicalNotes: 'FDA requires tighter bioequivalence standards (90-111%) for NTI drugs. Lithium therapeutic range is 0.6-1.2 mEq/L with toxicity at >1.5 mEq/L. Digoxin therapeutic range is 0.5-2.0 ng/mL. Phenytoin therapeutic range is 10-20 mcg/mL. Warfarin is monitored by INR (2.0-3.0 for most indications) rather than serum concentration.',
    },
    4: {
      level: 4,
      summary: 'Clinical therapeutic index assessment integrates population pharmacokinetic variability, pharmacogenomic factors, and exposure-safety analysis to define individualized therapeutic windows.',
      explanation: 'The population-level TI is inadequate because inter-individual variability in both PK and PD means each patient has a different effective and toxic concentration. Bayesian individualized therapeutic windows integrate: (1) population PK parameters, (2) patient covariates (age, weight, renal/hepatic function, genotype), and (3) measured drug levels. CYP2C9/VKORC1 genotyping narrows the warfarin therapeutic window prediction. The probability of target attainment (PTA) and probability of toxicity can be simultaneously modeled using Monte Carlo simulation to find optimal dose ranges. The therapeutic window may shift with tolerance, sensitization, or disease progression.',
      keyTerms: [
        { term: 'population therapeutic window', definition: 'Population-level range that may not apply to individuals' },
        { term: 'Bayesian individualization', definition: 'Updating population predictions with individual patient data' },
        { term: 'probability of target attainment', definition: 'Likelihood that a regimen achieves therapeutic exposure' },
        { term: 'tolerance', definition: 'Decreased drug effect with repeated exposure, shifting the effective concentration upward' },
        { term: 'sensitization', definition: 'Increased drug effect with repeated exposure, narrowing the safety margin' },
      ],
      clinicalNotes: 'Vancomycin dosing has shifted from trough-based monitoring to AUC/MIC-based targets (400-600 mg*h/L) using Bayesian software (InsightRx). Pharmacogenomics-guided dosing of warfarin reduces time-to-therapeutic INR and bleeding events. The Clinical Pharmacogenetics Implementation Consortium (CPIC) provides evidence-based genotype-to-phenotype dosing guidelines.',
    },
    5: {
      level: 5,
      summary: 'Advanced safety margin assessment uses quantitative benefit-risk frameworks, exposure-response modeling for regulatory dose selection, and multi-endpoint safety biomarkers for real-time therapeutic window optimization.',
      explanation: 'Regulatory dose selection now requires exposure-response analysis across the efficacy-safety continuum. The FDA\'s benefit-risk framework formalizes how TI is weighed against unmet medical need and available alternatives. Structured benefit-risk assessment tools (BRAT, MCDA) quantify the acceptable safety trade-off. Model-based meta-analysis (MBMA) synthesizes dose-response data across trials to identify optimal dose. Safety biomarkers (QTc for cardiac risk, ALT for hepatotoxicity, ANC for myelosuppression) enable real-time therapeutic window monitoring. For oncology drugs, the maximum tolerated dose (MTD) paradigm is shifting toward optimal biological dose (OBD) guided by PK/PD modeling of both efficacy and toxicity endpoints.',
      keyTerms: [
        { term: 'benefit-risk framework', definition: 'Structured FDA approach to evaluate drug safety vs. efficacy trade-offs' },
        { term: 'MBMA', definition: 'Model-based meta-analysis synthesizing dose-response across studies' },
        { term: 'optimal biological dose', definition: 'Dose maximizing efficacy without unnecessary toxicity, replacing MTD for targeted agents' },
        { term: 'BRAT framework', definition: 'Benefit-Risk Action Team tool for structured benefit-risk assessment' },
        { term: 'safety biomarkers', definition: 'Measurable indicators of drug-induced organ injury' },
      ],
      clinicalNotes: 'The FDA Sentinel system conducts real-world safety surveillance post-approval. Project Optimus (2022) requires dose optimization studies for oncology drugs rather than defaulting to MTD. ICH E9(R1) estimands framework clarifies how intercurrent events (dose modifications, discontinuation) affect benefit-risk interpretation.',
    },
  },
  media: [],
  citations: [
    { id: 'brunton-therapeutic-index', type: 'textbook', title: 'Goodman & Gilman\'s The Pharmacological Basis of Therapeutics', source: 'McGraw-Hill', chapter: 'Pharmacodynamics', section: 'Therapeutic Index' },
  ],
  crossReferences: [
    { targetId: 'pharmacodynamics-dose-response', targetType: 'concept', relationship: 'related' },
    { targetId: 'pharmacodynamics-potency-efficacy', targetType: 'concept', relationship: 'related' },
  ],
  tags: { topics: ['pharmacology', 'pharmacodynamics'], keywords: ['therapeutic index', 'ED50', 'LD50', 'NTI drugs', 'drug safety'], clinicalRelevance: 'critical', examRelevance: { usmle: true } },
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

// ============================================
// Agonists and Antagonists / Receptor Theory
// ============================================

export const agonistsAntagonists: EducationalContent = {
  id: 'pharmacodynamics-agonists-antagonists',
  type: 'concept',
  name: 'Agonists and Antagonists',
  alternateNames: ['Receptor Theory', 'Drug-Receptor Interactions'],
  levels: {
    1: {
      level: 1,
      summary: 'Some medicines activate your body\'s natural switches (agonists), while others block them (antagonists).',
      explanation: 'Your body has tiny receivers called receptors on your cells, like locks on a door. Your body makes natural chemicals (like hormones) that fit into these locks like keys and make things happen. An agonist drug is a key that fits the lock and opens the door — it turns on the receptor. An antagonist drug fits the lock but does not open the door — it blocks the real key from working.',
      keyTerms: [
        { term: 'receptor', definition: 'A tiny receiver on cells that responds to chemicals' },
        { term: 'agonist', definition: 'A medicine that activates a receptor (turns it on)' },
        { term: 'antagonist', definition: 'A medicine that blocks a receptor (prevents activation)' },
      ],
      analogies: ['Receptors are like locks on doors. Agonists are keys that open the lock. Antagonists are keys that fit the lock but jam it so the real key cannot get in.'],
      patientCounselingPoints: ['Beta-blockers are antagonists — they block the effects of stress hormones on your heart to slow it down.', 'Albuterol inhalers are agonists — they activate receptors in your lungs to open airways.'],
    },
    2: {
      level: 2,
      summary: 'Agonists bind to receptors and activate them to produce a biological response, while antagonists bind without activating and prevent agonists from working.',
      explanation: 'Receptors are proteins on or inside cells that respond to signaling molecules. A full agonist produces the maximum possible response (e.g., morphine at opioid receptors). A partial agonist activates the receptor but cannot produce the maximum response no matter how much you give (e.g., buprenorphine). An antagonist binds the receptor without activating it and blocks agonists from binding. Competitive antagonists can be overcome by adding more agonist; non-competitive antagonists cannot. Inverse agonists do the opposite of agonists — they reduce receptor activity below baseline.',
      keyTerms: [
        { term: 'full agonist', definition: 'Drug that produces maximum receptor activation' },
        { term: 'partial agonist', definition: 'Drug that activates receptors but cannot reach maximum effect' },
        { term: 'competitive antagonist', definition: 'Blocks receptor but can be overcome by more agonist' },
        { term: 'non-competitive antagonist', definition: 'Blocks receptor in a way that cannot be overcome by more agonist' },
        { term: 'inverse agonist', definition: 'Drug that reduces receptor activity below baseline' },
      ],
    },
    3: {
      level: 3,
      summary: 'Receptor pharmacology is governed by affinity (binding strength) and intrinsic activity (ability to activate), with drug classification based on these two independent properties.',
      explanation: 'Drug-receptor interactions follow the law of mass action: [D] + [R] <-> [DR]. Affinity is described by the dissociation constant KD = [D][R]/[DR]; lower KD means higher affinity. Intrinsic activity (alpha) ranges from 1 (full agonist) to 0 (antagonist); partial agonists have 0 < alpha < 1. Competitive antagonists cause a parallel rightward shift of the agonist dose-response curve without reducing Emax (surmountable). Non-competitive antagonists reduce Emax (insurmountable). The Schild equation quantifies competitive antagonism: dose ratio = 1 + [B]/KB, where a Schild plot slope of 1 confirms competitive mechanism. Allosteric modulators bind at sites distinct from the orthosteric site, either enhancing (PAM) or inhibiting (NAM) agonist effects.',
      keyTerms: [
        { term: 'KD (dissociation constant)', definition: 'Concentration of drug occupying 50% of receptors; lower KD = higher affinity' },
        { term: 'intrinsic activity (alpha)', definition: 'Ability of a drug to activate a receptor once bound (0 to 1)' },
        { term: 'Schild equation', definition: 'Quantifies competitive antagonism: dose ratio = 1 + [B]/KB' },
        { term: 'allosteric modulator', definition: 'Drug binding at a non-agonist site that modifies receptor function' },
        { term: 'PAM', definition: 'Positive allosteric modulator enhancing agonist effect' },
        { term: 'orthosteric site', definition: 'Primary binding site where endogenous agonist binds' },
      ],
      clinicalNotes: 'Benzodiazepines are PAMs at GABA-A receptors — they enhance GABA action without directly activating the receptor, providing a safety ceiling. Naloxone is a competitive opioid antagonist used for overdose reversal. Its short half-life (~30-90 min) may require repeat dosing as opioid effects outlast it.',
    },
    4: {
      level: 4,
      summary: 'Modern receptor theory incorporates the two-state model, biased agonism (functional selectivity), receptor desensitization/downregulation, and constitutive receptor activity.',
      explanation: 'The two-state model proposes receptors exist in equilibrium between inactive (R) and active (R*) conformations. Agonists stabilize R*, inverse agonists stabilize R, neutral antagonists bind equally to both. Biased agonism (functional selectivity) occurs when ligands preferentially activate one signaling pathway over another at the same receptor — e.g., G-protein vs. beta-arrestin signaling at mu-opioid receptors. Constitutive activity means some receptors have baseline R* activity without agonist; inverse agonists reduce this. Receptor desensitization (phosphorylation, arrestin binding) and downregulation (reduced receptor number via internalization/degradation) explain tachyphylaxis and tolerance. Receptor upregulation during chronic antagonist use explains rebound phenomena upon withdrawal.',
      keyTerms: [
        { term: 'two-state model', definition: 'Receptors fluctuate between inactive (R) and active (R*) conformations' },
        { term: 'biased agonism', definition: 'Selective activation of specific downstream signaling pathways at a single receptor' },
        { term: 'constitutive activity', definition: 'Baseline receptor activation in absence of any ligand' },
        { term: 'desensitization', definition: 'Rapid loss of receptor response via phosphorylation and arrestin uncoupling' },
        { term: 'downregulation', definition: 'Reduced receptor number from internalization and degradation' },
        { term: 'tachyphylaxis', definition: 'Rapid onset tolerance from receptor desensitization' },
      ],
      clinicalNotes: 'Biased mu-opioid agonists (oliceridine/TRV130) aim to provide analgesia (G-protein pathway) with less respiratory depression (beta-arrestin pathway). Beta-blocker withdrawal can cause rebound hypertension/tachycardia from upregulated beta-receptors. Continuous albuterol use causes beta-2 receptor desensitization, reducing bronchodilator response.',
    },
    5: {
      level: 5,
      summary: 'Frontier receptor pharmacology encompasses multi-state receptor models, structure-based drug design, cryo-EM-resolved receptor conformations, and computational prediction of biased signaling profiles.',
      explanation: 'Multi-state (multi-conformation) models replace the two-state model, recognizing that receptors sample a conformational energy landscape with multiple active states, each coupling differently to effectors. Cryo-EM structures of GPCRs in complex with different G-proteins and arrestins reveal the structural basis of biased agonism. Structure-based virtual screening designs ligands targeting specific receptor conformations. Molecular dynamics simulations predict residence time (1/koff), which may better predict in vivo duration of action than equilibrium affinity. Receptor dimerization (homodimers, heterodimers) creates emergent pharmacology not predicted from monomer studies. Computational quantitative pharmacology integrates receptor-level models with systems-level pathway models to predict tissue-specific drug effects.',
      keyTerms: [
        { term: 'conformational energy landscape', definition: 'Ensemble of receptor conformations sampled thermodynamically' },
        { term: 'residence time', definition: 'Duration a drug remains bound to its target (1/koff), predicting in vivo duration' },
        { term: 'cryo-EM', definition: 'Cryo-electron microscopy resolving receptor-ligand complex structures' },
        { term: 'receptor dimerization', definition: 'Receptor oligomerization creating novel pharmacological properties' },
        { term: 'structure-based drug design', definition: 'Using 3D receptor structure to computationally design new ligands' },
        { term: 'molecular dynamics', definition: 'Computational simulation of atomic-level receptor-drug interactions over time' },
      ],
      clinicalNotes: 'AlphaFold and RoseTTAFold have revolutionized receptor structure prediction, accelerating structure-based drug design. Kinetic selectivity (different residence times at receptor subtypes) explains why tiotropium provides 24-hour bronchodilation despite similar affinity to shorter-acting muscarinic antagonists. GPCR heterodimer targeting is an emerging therapeutic strategy (e.g., mu-delta opioid heterodimers).',
    },
  },
  media: [],
  citations: [
    { id: 'rang-dale-receptor', type: 'textbook', title: 'Rang & Dale\'s Pharmacology', source: 'Elsevier', chapter: 'How Drugs Act: General Principles' },
  ],
  crossReferences: [
    { targetId: 'pharmacodynamics-dose-response', targetType: 'concept', relationship: 'related' },
    { targetId: 'pharmacodynamics-potency-efficacy', targetType: 'concept', relationship: 'related' },
  ],
  tags: { topics: ['pharmacology', 'pharmacodynamics'], keywords: ['agonist', 'antagonist', 'receptor', 'biased agonism', 'GPCR'], clinicalRelevance: 'critical', examRelevance: { usmle: true } },
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

// ============================================
// Potency vs Efficacy
// ============================================

export const potencyVsEfficacy: EducationalContent = {
  id: 'pharmacodynamics-potency-efficacy',
  type: 'concept',
  name: 'Potency vs Efficacy',
  alternateNames: ['Drug Potency', 'Drug Efficacy', 'Potency and Efficacy Comparison'],
  levels: {
    1: {
      level: 1,
      summary: 'Potency is how much medicine you need to take, and efficacy is how well the medicine works at its best.',
      explanation: 'Imagine two pain medicines. Medicine A needs only 1 pill to relieve pain, while Medicine B needs 4 pills. Medicine A is more potent (you need less). But if Medicine A can only relieve mild pain while Medicine B can relieve severe pain, then Medicine B has greater efficacy (it works better at its maximum). A more potent drug is not necessarily better — efficacy (how well it works) usually matters more.',
      keyTerms: [
        { term: 'potency', definition: 'How much drug you need to get an effect — less needed means more potent' },
        { term: 'efficacy', definition: 'How well the drug works at its best' },
      ],
      analogies: ['Potency is like the size of an engine — a small engine that moves a car is more potent per unit. Efficacy is the top speed — which car can ultimately go fastest regardless of engine size.'],
      patientCounselingPoints: ['A lower dose does not mean a weaker medicine — some very strong medicines come in tiny doses because they are very potent.', 'Your doctor picks the medicine that works best for your condition (efficacy), not just the one with the smallest pill.'],
    },
    2: {
      level: 2,
      summary: 'Potency (EC50) describes the dose needed for an effect, while efficacy (Emax) describes the maximum effect a drug can achieve.',
      explanation: 'On a dose-response graph, potency is represented by the position of the curve along the x-axis (left = more potent, needing lower doses). Efficacy is represented by the height of the curve (higher = greater maximum effect). Two drugs can differ in potency but have the same efficacy, or vice versa. For example, hydromorphone is more potent than morphine (needs smaller doses), but both can achieve complete pain relief (same efficacy). A partial agonist like buprenorphine has lower efficacy than morphine regardless of dose — it cannot achieve the same maximum effect.',
      keyTerms: [
        { term: 'potency', definition: 'Measured by EC50 — the dose producing 50% of maximum effect' },
        { term: 'efficacy', definition: 'Measured by Emax — the maximum effect the drug can produce' },
        { term: 'EC50', definition: 'Concentration producing half the maximum effect; lower EC50 = more potent' },
        { term: 'Emax', definition: 'The ceiling of drug effect; higher Emax = greater efficacy' },
      ],
      examples: ['Hydromorphone vs. morphine: hydromorphone is ~5x more potent but similar efficacy.', 'Buprenorphine: lower efficacy (partial agonist) than morphine at any dose.'],
    },
    3: {
      level: 3,
      summary: 'Potency reflects drug-receptor affinity and tissue coupling efficiency (EC50 = KD / (tau + 1)), while efficacy reflects intrinsic activity and receptor reserve.',
      explanation: 'Potency (EC50) is determined by both affinity (KD) and efficacy (tau in the operational model): EC50 = KA / (1 + tau). A drug can be potent due to high affinity, high coupling efficiency, or both. Efficacy (Emax) depends on intrinsic activity and the tissue\'s receptor reserve — a partial agonist may behave as a full agonist in tissues with large receptor reserves. Relative potency between drugs is expressed as equipotent dose ratios and is only meaningful when drugs have the same Emax. Clinical potency additionally incorporates absorption, distribution, and receptor accessibility. Receptor-independent pharmacological potency accounts for full PK/PD integration.',
      keyTerms: [
        { term: 'relative potency', definition: 'Ratio of equieffective doses between two drugs' },
        { term: 'equipotent dose', definition: 'Doses of different drugs producing equal effect' },
        { term: 'coupling efficiency', definition: 'How effectively receptor activation translates to cellular response' },
        { term: 'clinical potency', definition: 'In vivo potency incorporating PK and PD factors' },
      ],
      clinicalNotes: 'Opioid equianalgesic tables compare clinical potencies (e.g., oral morphine 30mg ~ hydromorphone 6mg). These ratios are approximations with significant inter-patient variability. Incomplete cross-tolerance means dose conversion requires 25-50% reduction when switching opioids.',
    },
    4: {
      level: 4,
      summary: 'Advanced potency-efficacy distinction requires understanding of signal amplification cascades, tissue-dependent pharmacology, and the operational model parameters that independently quantify affinity (KA) and efficacy (tau).',
      explanation: 'The operational model: E = (Emax x tau^n x [A]^n) / ((KA + [A])^n + tau^n x [A]^n) separates affinity (KA) from efficacy (tau). High tau values indicate high intrinsic efficacy. Tissue-dependent efficacy means the same drug may be a full agonist in one tissue (high receptor reserve) and partial agonist in another (low reserve). Signal amplification through second messenger cascades (cAMP, IP3/DAG, MAPK) means very low receptor occupancy can produce large responses. The concept of relative intrinsic activity compares drugs independent of tissue factors. Functional antagonism occurs when drugs act on different receptors but produce opposing physiological effects.',
      keyTerms: [
        { term: 'tau (operational model)', definition: 'Efficacy parameter: ratio of receptor density to KD for transducer coupling' },
        { term: 'signal amplification', definition: 'Cascading second messengers amplifying receptor activation into large cellular responses' },
        { term: 'tissue-dependent efficacy', definition: 'Same drug showing different maximum effects in different tissues due to receptor reserve' },
        { term: 'relative intrinsic activity', definition: 'Tissue-independent comparison of drug efficacy' },
        { term: 'functional antagonism', definition: 'Opposing physiological effects via different receptors (e.g., histamine vs. epinephrine on bronchial smooth muscle)' },
      ],
      clinicalNotes: 'Buprenorphine acts as a partial agonist at mu-opioid receptors, providing analgesia with a ceiling on respiratory depression — a desirable therapeutic profile for opioid use disorder treatment. Aripiprazole is a partial agonist at D2 receptors: it reduces dopaminergic hyperactivity (antipsychotic) while preventing excessive D2 blockade (lower EPS risk).',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art efficacy quantification uses transduction coefficients, bias factors, and systems pharmacology to predict tissue-specific drug effects and optimize pluridimensional efficacy profiles.',
      explanation: 'Transduction coefficients (log(tau/KA)) provide a single metric combining affinity and efficacy for ranking agonists. Bias factors (Delta-Delta-log(tau/KA)) quantify the degree of signaling bias between pathways at the same receptor. Multi-dimensional efficacy profiling characterizes drugs across multiple endpoints (G-protein coupling, arrestin recruitment, internalization, transcription) to identify optimal therapeutic profiles. Systems pharmacology models integrate receptor-level efficacy data with downstream pathway models to predict in vivo tissue-specific effects. Computational drug design now targets specific efficacy profiles rather than simply high affinity, designing molecules that preferentially activate therapeutically relevant signaling cascades while avoiding those linked to adverse effects.',
      keyTerms: [
        { term: 'transduction coefficient', definition: 'log(tau/KA) combining affinity and efficacy in a single parameter' },
        { term: 'bias factor', definition: 'Quantitative measure of signaling pathway selectivity relative to a reference agonist' },
        { term: 'pluridimensional efficacy', definition: 'Drug characterization across multiple signaling endpoints simultaneously' },
        { term: 'efficacy profiling', definition: 'Comprehensive characterization of drug effects across signaling pathways' },
      ],
      clinicalNotes: 'Oliceridine (Olinvyk) was approved as a G-protein-biased mu-opioid agonist based on reduced respiratory depression signal in clinical trials, representing the first clinical translation of biased agonism. Ongoing research targets biased ligands at other GPCRs: beta-arrestin-biased angiotensin AT1 agonists for heart failure, G-protein-biased D2 agonists for Parkinson disease without dyskinesia.',
    },
  },
  media: [],
  citations: [
    { id: 'stahl-pd', type: 'textbook', title: 'Stahl\'s Essential Psychopharmacology', source: 'Cambridge University Press', chapter: 'Receptor Theory and Pharmacodynamics' },
  ],
  crossReferences: [
    { targetId: 'pharmacodynamics-dose-response', targetType: 'concept', relationship: 'related' },
    { targetId: 'pharmacodynamics-agonists-antagonists', targetType: 'concept', relationship: 'related' },
    { targetId: 'pharmacodynamics-therapeutic-index', targetType: 'concept', relationship: 'related' },
  ],
  tags: { topics: ['pharmacology', 'pharmacodynamics'], keywords: ['potency', 'efficacy', 'EC50', 'Emax', 'partial agonist'], clinicalRelevance: 'high', examRelevance: { usmle: true } },
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};
