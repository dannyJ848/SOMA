/**
 * Pharmacokinetics Database
 *
 * Comprehensive PK database of 36 key drugs covering absorption,
 * distribution, metabolism, elimination, therapeutic ranges, and
 * clinical pearls essential for medical education.
 */

// ============================================
// Types & Interfaces
// ============================================

export type PKCategory =
  | 'narrow-therapeutic-index'
  | 'requires-monitoring'
  | 'renal-adjusted'
  | 'hepatic-adjusted'
  | 'prodrug'
  | 'zero-order-kinetics';

export interface PharmacokineticEntry {
  id: string;
  drugName: string;
  category: PKCategory[];
  absorption: {
    bioavailability: string;
    tmax: string;
  };
  distribution: {
    vd: string;
    proteinBinding: string;
  };
  metabolism: {
    primaryCYP: string;
    activeMetabolites: string;
  };
  elimination: {
    halfLife: string;
    route: string;
    renalDoseAdjust: boolean;
    hepaticDoseAdjust: boolean;
  };
  therapeuticRange: string;
  toxicLevel: string;
  clinicalPearl: string;
}

// ============================================
// Compact Constructor
// ============================================

function pk(
  id: string,
  drugName: string,
  category: PKCategory[],
  bioavailability: string, tmax: string,
  vd: string, proteinBinding: string,
  primaryCYP: string, activeMetabolites: string,
  halfLife: string, route: string, renalDoseAdjust: boolean, hepaticDoseAdjust: boolean,
  therapeuticRange: string,
  toxicLevel: string,
  clinicalPearl: string,
): PharmacokineticEntry {
  return {
    id, drugName, category,
    absorption: { bioavailability, tmax },
    distribution: { vd, proteinBinding },
    metabolism: { primaryCYP, activeMetabolites },
    elimination: { halfLife, route, renalDoseAdjust, hepaticDoseAdjust },
    therapeuticRange, toxicLevel, clinicalPearl,
  };
}

// ============================================
// Database (36 entries)
// ============================================

export const PHARMACOKINETIC_ENTRIES: Record<string, PharmacokineticEntry> = {

  // ── Narrow Therapeutic Index / Requires Monitoring ──

  vancomycin: pk(
    'vancomycin', 'Vancomycin',
    ['narrow-therapeutic-index', 'requires-monitoring', 'renal-adjusted'],
    'Oral: negligible (IV only for systemic); oral used for C. diff', '1-2 hrs (IV infusion end)',
    '0.4-1.0 L/kg', '30-55%',
    'None (not hepatically metabolized)', 'None',
    '4-6 hrs (normal renal)', 'Renal (80-90% unchanged)', true, false,
    'Trough 15-20 mcg/mL (serious infections); AUC/MIC 400-600',
    'Trough >20 mcg/mL; nephrotoxicity and ototoxicity risk',
    'AUC-guided dosing is now preferred over trough-only monitoring. Red man syndrome is a histamine-mediated infusion reaction, not allergy; slow the infusion rate.',
  ),

  gentamicin: pk(
    'gentamicin', 'Gentamicin',
    ['narrow-therapeutic-index', 'requires-monitoring', 'renal-adjusted'],
    'IM: >90%; oral: negligible', '0.5-1.5 hrs (IM)',
    '0.2-0.3 L/kg', '<30%',
    'None (not metabolized)', 'None',
    '2-3 hrs (normal renal)', 'Renal (>90% unchanged)', true, false,
    'Peak 5-10 mcg/mL, trough <2 mcg/mL (traditional); extended-interval: Cmax 15-25 mcg/mL',
    'Peak >12 mcg/mL (ototoxicity); trough >2 mcg/mL (nephrotoxicity)',
    'Extended-interval (once-daily) dosing exploits concentration-dependent killing and post-antibiotic effect. Avoid in pregnancy (ototoxic to fetus). Synergistic with beta-lactams for endocarditis.',
  ),

  warfarin: pk(
    'warfarin', 'Warfarin',
    ['narrow-therapeutic-index', 'requires-monitoring', 'hepatic-adjusted'],
    '~100%', '1-4 hrs',
    '0.12-0.15 L/kg', '99% (albumin)',
    'CYP2C9 (S-warfarin, more potent); CYP1A2, 3A4 (R-warfarin)', 'None clinically significant',
    'S-warfarin: 29 hrs; R-warfarin: 45 hrs', 'Hepatic metabolism; minimal renal', false, true,
    'INR 2.0-3.0 (most indications); 2.5-3.5 (mechanical mitral valve)',
    'INR >4.0 increases bleeding risk; INR >9.0 requires urgent management',
    'Vitamin K epoxide reductase inhibitor. CYP2C9 and VKORC1 polymorphisms dramatically alter dosing. Onset delayed 3-5 days (existing clotting factors must deplete). Bridge with heparin. Dozens of drug and food interactions.',
  ),

  heparin: pk(
    'heparin', 'Heparin (Unfractionated)',
    ['narrow-therapeutic-index', 'requires-monitoring'],
    'IV: 100%; SubQ: 30% (variable)', 'IV: immediate; SubQ: 1-2 hrs',
    '0.06 L/kg (intravascular)', 'Extensive (endothelial cells, macrophages)',
    'Reticuloendothelial system; hepatic heparinase', 'None',
    '1-2 hrs (dose-dependent; zero-order at high doses)', 'Reticuloendothelial uptake + renal', true, false,
    'aPTT 1.5-2.5x control (60-80 sec); anti-Xa 0.3-0.7 IU/mL',
    'aPTT >100 sec; supratherapeutic anti-Xa',
    'Exhibits dose-dependent (zero-order then first-order) kinetics. Monitor aPTT q6h until stable. HIT (heparin-induced thrombocytopenia type II) is a prothrombotic immune-mediated complication; check platelets regularly. Reversed with protamine.',
  ),

  digoxin: pk(
    'digoxin', 'Digoxin',
    ['narrow-therapeutic-index', 'requires-monitoring', 'renal-adjusted'],
    '60-80% (tablets)', '1-3 hrs',
    '5-7 L/kg (large; distributes to tissues)', '25%',
    'Minimal hepatic; some gut flora hydrolysis', 'None significant',
    '36-48 hrs (normal renal)', 'Renal (60-80% unchanged)', true, false,
    '0.8-2.0 ng/mL (HF target 0.5-0.9 ng/mL)',
    '>2.0 ng/mL; toxicity potentiated by hypokalemia, hypomagnesemia, hypercalcemia',
    'Large Vd means dialysis is ineffective for toxicity. Draw levels at least 6 hrs post-dose (distribution phase). Hypokalemia increases toxicity risk as digoxin and K+ compete for Na/K-ATPase binding. Reversed with digoxin-specific antibody fragments (Digibind).',
  ),

  lithium: pk(
    'lithium', 'Lithium',
    ['narrow-therapeutic-index', 'requires-monitoring', 'renal-adjusted'],
    '100%', '0.5-2 hrs',
    '0.7-1.0 L/kg', '0% (no protein binding)',
    'Not metabolized', 'None',
    '18-24 hrs', 'Renal (95% unchanged; reabsorbed in PCT with sodium)', true, false,
    '0.6-1.2 mEq/L (acute mania: 0.8-1.2; maintenance: 0.6-0.8)',
    '>1.5 mEq/L (mild toxicity); >2.5 mEq/L (severe toxicity, seizures)',
    'Handled by the kidney like sodium; dehydration, NSAIDs, ACE inhibitors, and thiazides increase levels by reducing renal clearance. Check levels 12 hrs post-dose. Monitor thyroid and renal function (causes nephrogenic DI and hypothyroidism).',
  ),

  phenytoin: pk(
    'phenytoin', 'Phenytoin',
    ['narrow-therapeutic-index', 'requires-monitoring', 'zero-order-kinetics', 'hepatic-adjusted'],
    '70-100% (formulation-dependent)', '4-12 hrs (oral)',
    '0.6-0.7 L/kg', '90% (albumin)',
    'CYP2C9 (major), CYP2C19', 'None clinically significant',
    'Dose-dependent: 12-36 hrs (capacity-limited kinetics)', 'Hepatic (zero-order at therapeutic doses)', false, true,
    '10-20 mcg/mL (total); 1-2 mcg/mL (free)',
    '>20 mcg/mL (nystagmus); >30 mcg/mL (ataxia); >40 mcg/mL (seizures, coma)',
    'Classic zero-order kinetics drug: small dose increases cause disproportionately large concentration rises. Correct for albumin and renal function (Sheiner-Tozer equation). Fosphenytoin preferred IV (less purple glove syndrome). Potent CYP inducer.',
  ),

  carbamazepine: pk(
    'carbamazepine', 'Carbamazepine',
    ['narrow-therapeutic-index', 'requires-monitoring', 'hepatic-adjusted'],
    '75-85%', '4-8 hrs',
    '0.8-1.4 L/kg', '75-78%',
    'CYP3A4 (major)', 'Carbamazepine-10,11-epoxide (active)',
    '12-17 hrs initially; 8-12 hrs after autoinduction', 'Hepatic (CYP3A4 autoinduction)', false, true,
    '4-12 mcg/mL',
    '>15 mcg/mL; ataxia, diplopia, cardiac conduction abnormalities',
    'Potent CYP3A4 autoinducer; own levels decrease over 3-5 weeks requiring dose escalation. Induces metabolism of OCPs, warfarin, and many drugs. Screen HLA-B*1502 in Asian populations (SJS/TEN risk). Monitor CBC (aplastic anemia, agranulocytosis).',
  ),

  valproic_acid: pk(
    'valproic_acid', 'Valproic Acid',
    ['narrow-therapeutic-index', 'requires-monitoring', 'hepatic-adjusted'],
    '~100%', '1-4 hrs',
    '0.1-0.5 L/kg', '80-95% (concentration-dependent; saturates at high levels)',
    'Hepatic glucuronidation, beta-oxidation; minor CYP2C9', 'None clinically significant',
    '9-16 hrs', 'Hepatic (minimal renal)', false, true,
    '50-100 mcg/mL (epilepsy); 50-125 mcg/mL (mania)',
    '>100-150 mcg/mL; hepatotoxicity, hyperammonemia, pancreatitis, thrombocytopenia',
    'Protein binding is saturable; free fraction increases at higher concentrations, so total levels may underestimate active drug. Highly teratogenic (neural tube defects). Inhibits CYP2C9 and UGT, doubling lamotrigine levels. Check LFTs and ammonia.',
  ),

  theophylline: pk(
    'theophylline', 'Theophylline',
    ['narrow-therapeutic-index', 'requires-monitoring', 'hepatic-adjusted'],
    '~100%', '1-2 hrs (IR); 4-7 hrs (SR)',
    '0.5 L/kg', '40-60%',
    'CYP1A2 (major), CYP3A4', '3-methylxanthine (minor activity)',
    '6-9 hrs (adults); shorter in smokers, children', 'Hepatic', false, true,
    '5-15 mcg/mL',
    '>20 mcg/mL (nausea, arrhythmias); >30 mcg/mL (seizures)',
    'Smoking induces CYP1A2 and reduces levels by 50%; dose must be doubled in smokers and halved upon cessation. Ciprofloxacin and erythromycin inhibit metabolism, causing toxicity. Seizures can occur without warning at toxic levels.',
  ),

  cyclosporine: pk(
    'cyclosporine', 'Cyclosporine',
    ['narrow-therapeutic-index', 'requires-monitoring', 'hepatic-adjusted'],
    '20-50% (variable; bile-dependent)', '1.5-2 hrs',
    '3-5 L/kg', '90-98%',
    'CYP3A4 (major); P-glycoprotein substrate', 'AM1, AM9 (minor activity)',
    '6-12 hrs', 'Hepatic (biliary excretion)', false, true,
    'Trough 150-300 ng/mL (renal transplant, early); varies by organ and time post-transplant',
    'Trough >400 ng/mL; nephrotoxicity, neurotoxicity',
    'Calcineurin inhibitor with highly variable absorption requiring therapeutic drug monitoring. Grapefruit juice and CYP3A4 inhibitors (azoles, macrolides) dramatically increase levels. Causes nephrotoxicity (afferent arteriolar vasoconstriction), hirsutism, gingival hyperplasia, and tremor.',
  ),

  tacrolimus: pk(
    'tacrolimus', 'Tacrolimus',
    ['narrow-therapeutic-index', 'requires-monitoring', 'hepatic-adjusted'],
    '15-25% (variable)', '1-3 hrs',
    '0.85-1.94 L/kg', '99%',
    'CYP3A4, CYP3A5 (major); P-glycoprotein substrate', 'None clinically significant',
    '8-12 hrs', 'Hepatic (biliary)', false, true,
    'Trough 5-15 ng/mL (varies by organ, protocol, and time post-transplant)',
    '>20 ng/mL; nephrotoxicity, neurotoxicity, hyperglycemia',
    'More potent calcineurin inhibitor than cyclosporine with similar PK challenges. CYP3A5 polymorphisms significantly affect dosing (CYP3A5 expressors need higher doses). African Americans often need higher doses. Monitor glucose (diabetogenic) and magnesium.',
  ),

  sirolimus: pk(
    'sirolimus', 'Sirolimus',
    ['narrow-therapeutic-index', 'requires-monitoring', 'hepatic-adjusted'],
    '14% (variable)', '1-3 hrs',
    '12 L/kg (extensive tissue distribution)', '92%',
    'CYP3A4; P-glycoprotein substrate', 'None clinically significant',
    '57-63 hrs', 'Hepatic (fecal 91%)', false, true,
    'Trough 4-12 ng/mL (renal transplant maintenance)',
    '>15 ng/mL; hyperlipidemia, myelosuppression, impaired wound healing',
    'mTOR inhibitor; extremely long half-life means steady state takes ~6 days. Does NOT cause nephrotoxicity (unlike calcineurin inhibitors). Causes hyperlipidemia, poor wound healing, mouth ulcers, and pneumonitis. Synergistic with calcineurin inhibitors (allows dose reduction).',
  ),

  // ── Antimicrobials ──

  aminoglycosides: pk(
    'aminoglycosides', 'Aminoglycosides (class)',
    ['narrow-therapeutic-index', 'requires-monitoring', 'renal-adjusted'],
    'Oral: negligible; IM: >90%', '0.5-1.5 hrs (IM)',
    '0.2-0.3 L/kg (extracellular fluid)', '<10%',
    'Not metabolized', 'None',
    '2-3 hrs (normal renal); prolonged in renal failure', 'Renal (>95% unchanged)', true, false,
    'Drug-specific: gentamicin peak 5-10, trough <2; tobramycin similar; amikacin peak 20-35, trough <10',
    'Ototoxicity and nephrotoxicity correlate with elevated troughs and prolonged courses',
    'Concentration-dependent killing with significant post-antibiotic effect supports extended-interval dosing. Poorly penetrate CSF, vitreous, and abscesses. Inactivated by beta-lactams in vitro (do not mix in same IV bag). Ototoxicity is irreversible.',
  ),

  fluoroquinolones_pk: pk(
    'fluoroquinolones_pk', 'Fluoroquinolones (class)',
    ['renal-adjusted'],
    '70-99% (excellent oral; ciprofloxacin ~70%, levofloxacin ~99%)', '1-2 hrs',
    '1.5-5 L/kg (excellent tissue penetration)', '20-40%',
    'Minimal CYP involvement; some hepatic glucuronidation', 'None significant',
    'Ciprofloxacin 4 hrs; levofloxacin 6-8 hrs; moxifloxacin 12 hrs', 'Renal (cipro/levo) or hepatic (moxi)', true, false,
    'Not routinely monitored (wide therapeutic index)',
    'Not well defined; high doses cause CNS toxicity and QTc prolongation',
    'Concentration-dependent killing with AUC/MIC as key PK/PD parameter. Chelated by divalent cations (Ca, Mg, Fe, Al); separate from antacids by 2 hrs. Ciprofloxacin is a strong CYP1A2 inhibitor (raises theophylline levels). Moxifloxacin needs no renal adjustment.',
  ),

  beta_lactams: pk(
    'beta_lactams', 'Beta-Lactams (class)',
    ['renal-adjusted'],
    'Variable: amoxicillin 80-90%, ampicillin 40-50%; IV 100%', '1-2 hrs (oral)',
    '0.2-0.3 L/kg (extracellular fluid)', '15-70% (varies by agent)',
    'Minimal; some hepatic hydrolysis', 'None',
    '0.5-1.5 hrs (most penicillins/cephalosporins)', 'Renal (most agents)', true, false,
    'Not routinely monitored; time above MIC is the PK/PD target',
    'Seizures at very high doses (especially imipenem); neurotoxicity in renal failure',
    'Time-dependent killing; efficacy depends on time above MIC (target >40-70% of dosing interval). Continuous or extended infusions optimize PK/PD. Short half-lives necessitate frequent dosing. Cross-reactivity between penicillins and cephalosporins is ~2%, not 10%.',
  ),

  fluconazole: pk(
    'fluconazole', 'Fluconazole',
    ['renal-adjusted'],
    '>90%', '1-2 hrs',
    '0.7 L/kg (penetrates CSF, eye, urine well)', '11-12%',
    'Minimal hepatic metabolism (~80% excreted unchanged)', 'None',
    '30 hrs', 'Renal (80% unchanged)', true, false,
    'Not routinely monitored',
    'Hepatotoxicity at high doses; QTc prolongation',
    'Excellent oral bioavailability makes IV-to-oral switch seamless. Unlike itraconazole and voriconazole, minimal CYP3A4 inhibition but moderate CYP2C9 and 2C19 inhibitor (increases warfarin and phenytoin levels). Long half-life allows once-daily and loading-dose strategies.',
  ),

  ciprofloxacin: pk(
    'ciprofloxacin', 'Ciprofloxacin',
    ['renal-adjusted'],
    '60-80%', '1-2 hrs',
    '2-3 L/kg', '20-40%',
    'CYP1A2 (partial); hepatic glucuronidation', 'Desethylene-ciprofloxacin (minor activity)',
    '3-5 hrs', 'Renal (40-50%) and hepatic', true, false,
    'Not routinely monitored',
    'CNS toxicity (seizures), QTc prolongation at high levels',
    'Strong CYP1A2 inhibitor: significantly raises theophylline, tizanidine, and duloxetine levels. Chelated by divalent/trivalent cations (take 2 hrs before or 6 hrs after antacids/dairy). Good pseudomonal coverage, poor streptococcal coverage. Tendon rupture risk.',
  ),

  // ── Anesthesia & Pain ──

  propofol: pk(
    'propofol', 'Propofol',
    ['hepatic-adjusted'],
    'IV only', 'Immediate (IV)',
    '2-10 L/kg (highly lipophilic; extensive redistribution)', '97-99%',
    'Hepatic glucuronidation and CYP2B6; also extrahepatic metabolism', 'None',
    'Initial: 2-8 min (redistribution); terminal: 4-12 hrs (slow release from fat)',
    'Hepatic; renal excretion of metabolites', false, true,
    'Not monitored by levels; titrated to clinical effect (BIS 40-60)',
    'Propofol infusion syndrome (>4 mg/kg/hr for >48 hrs): metabolic acidosis, rhabdomyolysis, cardiac failure',
    'Rapid onset and ultra-short clinical duration due to redistribution, not metabolism. Contains egg lecithin and soybean oil (allergy caution). Green urine is benign. Propofol infusion syndrome is fatal if unrecognized; limit dose and duration in ICU.',
  ),

  fentanyl: pk(
    'fentanyl', 'Fentanyl',
    ['hepatic-adjusted'],
    'Transdermal: ~92% (over 72 hrs); transmucosal: 50%; IV: 100%', 'IV: immediate; transdermal: 12-24 hrs',
    '3-6 L/kg (highly lipophilic)', '80-85%',
    'CYP3A4 (major)', 'Norfentanyl (inactive)',
    'IV: 2-4 hrs; transdermal: 17 hrs (depot effect after patch removal)', 'Hepatic', false, true,
    'Not routinely monitored; titrate to effect',
    'Respiratory depression; chest wall rigidity at high IV doses',
    '80-100x more potent than morphine. High lipophilicity allows transdermal delivery but causes context-sensitive half-time increase with prolonged infusions (accumulates in fat). CYP3A4 inhibitors (azoles, macrolides) can precipitate fatal toxicity. Do not cut transdermal patches.',
  ),

  morphine: pk(
    'morphine', 'Morphine',
    ['renal-adjusted', 'hepatic-adjusted'],
    '20-40% (extensive first-pass)', '0.5-1 hr (IR oral)',
    '3-4 L/kg', '30-35%',
    'Hepatic glucuronidation (UGT2B7); NOT CYP-dependent', 'Morphine-6-glucuronide (active, potent; accumulates in renal failure); morphine-3-glucuronide (neuroexcitatory)',
    '2-3 hrs', 'Hepatic metabolism; renal excretion of metabolites', true, true,
    'Not routinely monitored; titrate to pain/respiratory status',
    'Respiratory depression; M6G accumulation in renal failure causes prolonged sedation',
    'Avoid in renal failure due to M6G accumulation causing prolonged respiratory depression. Histamine release causes hypotension and pruritus (not true allergy). Gold standard opioid for comparison. Oral:parenteral ratio is 3:1 for dose conversion.',
  ),

  // ── Analgesics / Anti-inflammatory ──

  acetaminophen: pk(
    'acetaminophen', 'Acetaminophen',
    ['hepatic-adjusted'],
    '60-98% (dose-dependent)', '0.5-1 hr',
    '0.8-1.0 L/kg', '10-25%',
    'Hepatic: glucuronidation (40%), sulfation (20-46%), CYP2E1 (5-15% to NAPQI)', 'NAPQI (toxic; normally detoxified by glutathione)',
    '2-4 hrs (prolonged in overdose)', 'Hepatic; renal excretion of metabolites', false, true,
    'Not routinely monitored; max 4g/day (2g/day with liver disease or alcohol)',
    '>150 mcg/mL at 4 hrs post-ingestion (Rumack-Matthew nomogram); hepatotoxicity',
    'NAPQI is the toxic metabolite normally conjugated by glutathione. Overdose depletes glutathione, causing centrilobular hepatic necrosis. N-acetylcysteine (NAC) replenishes glutathione stores. Use the Rumack-Matthew nomogram for acute single ingestion. Chronic alcohol use induces CYP2E1, increasing NAPQI formation.',
  ),

  aspirin: pk(
    'aspirin', 'Aspirin (Acetylsalicylic Acid)',
    ['zero-order-kinetics'],
    '80-100%', '0.25-2 hrs',
    '0.1-0.2 L/kg (salicylate)', '80-90% (albumin; saturable)',
    'Hepatic esterases (to salicylate); then conjugation (saturable)', 'Salicylic acid (active)',
    'Low dose: 2-3 hrs; high dose: 15-30 hrs (zero-order at toxic levels)',
    'Renal (pH-dependent); hepatic conjugation', false, true,
    'Anti-platelet: 81-325 mg/day (no level needed); anti-inflammatory: salicylate 15-30 mg/dL',
    'Salicylate >50 mg/dL (tinnitus); >70 mg/dL (severe toxicity); mixed respiratory alkalosis + metabolic acidosis',
    'Irreversibly acetylates COX-1 (platelet effect lasts 7-10 days, platelet lifespan). At toxic levels, metabolism saturates and shifts to zero-order kinetics; small dose increases cause large concentration jumps. Alkalinize urine to enhance excretion in overdose (ion trapping).',
  ),

  ibuprofen: pk(
    'ibuprofen', 'Ibuprofen',
    ['renal-adjusted'],
    '>80%', '1-2 hrs',
    '0.12-0.15 L/kg', '99%',
    'CYP2C9 (major), CYP2C8', 'None clinically significant',
    '2-4 hrs', 'Hepatic metabolism; renal excretion of metabolites', true, false,
    'Not routinely monitored',
    'GI bleeding, renal failure, cardiovascular events at chronic high doses',
    'Reversible COX inhibitor (unlike aspirin). Can interfere with aspirin antiplatelet effect if taken concurrently (blocks aspirin access to COX-1). Take aspirin 30 min before ibuprofen to avoid interaction. Avoid in 3rd trimester (premature closure of ductus arteriosus).',
  ),

  // ── Cardiovascular ──

  amiodarone: pk(
    'amiodarone', 'Amiodarone',
    ['requires-monitoring', 'hepatic-adjusted'],
    '22-55% (highly variable)', '3-7 hrs',
    '66 L/kg (massive; accumulates in fat, liver, lung, thyroid)', '96%',
    'CYP3A4, CYP2C8', 'Desethylamiodarone (active; equipotent)',
    '40-55 days (terminal; range 15-142 days)', 'Hepatic (fecal); minimal renal', false, true,
    'Trough 1.0-2.5 mcg/mL',
    '>2.5 mcg/mL; pulmonary toxicity, thyroid dysfunction, hepatotoxicity',
    'Extremely long half-life means effects (and side effects) persist weeks to months after discontinuation. Contains iodine (37% by weight); causes both hyper- and hypothyroidism. Inhibits CYP3A4, 2C9, 2D6, and P-gp: reduce warfarin dose by 50%, digoxin by 50%. Monitor PFTs, TFTs, LFTs, and eye exams.',
  ),

  metoprolol: pk(
    'metoprolol', 'Metoprolol',
    ['hepatic-adjusted'],
    '40-50% (extensive first-pass)', '1-2 hrs (IR); 6-12 hrs (XL)',
    '3.2-5.6 L/kg', '12%',
    'CYP2D6 (major)', 'Alpha-hydroxymetoprolol (minimal activity)',
    '3-7 hrs (IR); 3-7 hrs (XL; extended release)', 'Hepatic', false, true,
    'Not routinely monitored; titrate to HR and BP',
    'Severe bradycardia, heart block, cardiogenic shock at excessive doses',
    'CYP2D6 poor metabolizers (~7% of Caucasians) have significantly higher levels and increased side effects. Only metoprolol succinate (XL) has HFrEF mortality benefit; tartrate (IR) does not. Beta-1 selective at low doses; selectivity lost at high doses.',
  ),

  amlodipine: pk(
    'amlodipine', 'Amlodipine',
    ['hepatic-adjusted'],
    '64-90%', '6-12 hrs',
    '21 L/kg', '93-98%',
    'CYP3A4 (major)', 'None clinically significant',
    '30-50 hrs', 'Hepatic; 10% renal', false, true,
    'Not routinely monitored; titrate to BP',
    'Severe hypotension, reflex tachycardia; overdose may require high-dose insulin euglycemic therapy',
    'Very long half-life provides smooth 24-hr BP control and forgives missed doses. Peripheral edema is dose-dependent and NOT due to fluid overload (it is arteriolar vasodilation causing capillary leak); diuretics do not help. Adding ACE inhibitor or ARB reduces edema.',
  ),

  lisinopril: pk(
    'lisinopril', 'Lisinopril',
    ['renal-adjusted'],
    '25% (variable)', '6-8 hrs',
    '1.5-1.7 L/kg', '0% (not protein bound)',
    'Not metabolized', 'None (lisinopril is the active drug)',
    '12 hrs', 'Renal (100% unchanged)', true, false,
    'Not routinely monitored; titrate to BP and proteinuria',
    'Severe hypotension, hyperkalemia, angioedema',
    'Unlike most ACE inhibitors, lisinopril is NOT a prodrug (enalapril, fosinopril, and others are). Zero protein binding and 100% renal excretion make it one of the simplest ACE inhibitor PK profiles but require dose reduction in renal impairment.',
  ),

  // ── GI ──

  omeprazole: pk(
    'omeprazole', 'Omeprazole',
    ['prodrug', 'hepatic-adjusted'],
    '30-40% (increases with repeated dosing as acid is suppressed)', '0.5-3.5 hrs',
    '0.3 L/kg', '95%',
    'CYP2C19 (major), CYP3A4', 'None (active sulfenamide formed in acidic parietal cell canaliculus)',
    '0.5-1 hr (but acid suppression lasts 24-72 hrs due to irreversible pump binding)',
    'Hepatic', false, true,
    'Not monitored by levels; assess pH or symptom control',
    'Hypomagnesemia, B12 deficiency, fracture risk with chronic use; C. difficile risk',
    'Prodrug activated in acidic environment of parietal cell canaliculus. Take 30-60 min before meals (pumps must be active). CYP2C19 poor metabolizers have 3-5x higher levels and better acid suppression. Inhibits CYP2C19 (raises clopidogrel interaction concern). Short half-life belies prolonged pharmacodynamic effect.',
  ),

  // ── Antifungal (already have fluconazole above) ──

  // ── Endocrine ──

  metformin: pk(
    'metformin', 'Metformin',
    ['renal-adjusted'],
    '50-60%', '2-3 hrs (IR); 7 hrs (XR)',
    '1.1-5.0 L/kg (concentrates in GI tissue)', 'Negligible',
    'Not metabolized', 'None',
    '4-9 hrs', 'Renal (100% unchanged; tubular secretion)', true, false,
    'Not routinely monitored (no target level)',
    'Lactic acidosis (very rare; <0.03/1000 patient-years); occurs with renal failure/tissue hypoxia',
    'Not hepatically metabolized and no protein binding, making drug interactions minimal. Contraindicated in eGFR <30 (lactic acidosis risk); reduce dose at eGFR 30-45. Hold before iodinated contrast and resume 48 hrs after if renal function stable. Extended-release reduces GI side effects.',
  ),

  insulin: pk(
    'insulin', 'Insulin (Regular)',
    ['renal-adjusted'],
    'SubQ: variable by type; IV: 100%', 'Regular SubQ: 0.5-1 hr; IV: immediate',
    '0.15 L/kg (intravascular + interstitial)', 'None',
    'Hepatic and renal insulin-degrading enzyme (IDE)', 'None',
    'IV: 5-10 min; SubQ regular: 1-1.5 hrs', 'Hepatic (60%) and renal (35-40%) degradation', true, false,
    'Titrate to glucose targets (no insulin level monitoring)',
    'Hypoglycemia; hypokalemia (drives K+ intracellularly)',
    'Renal failure prolongs insulin duration (reduced clearance); reduce doses when eGFR <30. Regular insulin is the only insulin given IV. Insulin drives potassium intracellularly (used to treat hyperkalemia). U-500 insulin is 5x concentrated; high-risk medication requiring independent double-check.',
  ),

  levothyroxine: pk(
    'levothyroxine', 'Levothyroxine',
    ['narrow-therapeutic-index'],
    '40-80% (fasting; reduced by food, calcium, iron)', '2-4 hrs',
    '~0.15 L/kg (intravascular)', '99.97% (TBG, albumin, transthyretin)',
    'Hepatic deiodination to T3 (CYP-independent); glucuronidation and sulfation', 'T3 (triiodothyronine, active)',
    '6-7 days', 'Hepatic (fecal and urinary as metabolites)', false, false,
    'TSH 0.5-4.0 mIU/L; Free T4 0.8-1.8 ng/dL',
    'TSH <0.1 (over-replacement): atrial fibrillation, osteoporosis risk',
    'Extremely long half-life means missing one dose is inconsequential but steady state takes 5-6 weeks (recheck TSH at 6-8 weeks). Take on empty stomach 30-60 min before food. Separate from calcium, iron, and PPIs by 4 hrs. Narrow therapeutic index; small dose changes matter.',
  ),

  prednisone: pk(
    'prednisone', 'Prednisone',
    ['prodrug', 'hepatic-adjusted'],
    '~92%', '1-2 hrs',
    '0.97-1.5 L/kg', '70-90%',
    'Hepatic 11-beta-hydroxysteroid dehydrogenase type 1 (converts to prednisolone)', 'Prednisolone (active)',
    '2-3 hrs (prednisolone); biological half-life: 18-36 hrs', 'Hepatic', false, true,
    'Not routinely monitored by levels; titrate to disease activity',
    'Cushing syndrome, adrenal suppression, hyperglycemia, osteoporosis, immunosuppression',
    'Prodrug requiring hepatic conversion to active prednisolone. In severe liver disease, give prednisolone directly. Biological effect outlasts plasma half-life (18-36 hr biological t1/2). Taper after >2 weeks of use to prevent adrenal crisis. Dose equivalence: prednisone 5mg = hydrocortisone 20mg.',
  ),

  // ── Antidepressant / Anxiolytic ──

  diazepam: pk(
    'diazepam', 'Diazepam',
    ['hepatic-adjusted'],
    '>90%', '0.5-1.5 hrs',
    '0.7-2.6 L/kg (highly lipophilic)', '98%',
    'CYP3A4, CYP2C19', 'Desmethyldiazepam (active, t1/2 30-200 hrs); temazepam (active); oxazepam (active)',
    '20-100 hrs (parent + active metabolites extend duration to days)',
    'Hepatic', false, true,
    'Not routinely monitored; titrate to clinical effect',
    'Excessive sedation, respiratory depression (especially with opioids/alcohol)',
    'Multiple active metabolites with extremely long half-lives make diazepam unsuitable for elderly patients (accumulation, falls, cognitive impairment). LOT drugs (lorazepam, oxazepam, temazepam) are preferred in liver disease as they undergo only glucuronidation. Reversed by flumazenil (caution: may precipitate seizures in chronic users).',
  ),

  // ── Immunosuppressant / Antineoplastic ──

  methotrexate: pk(
    'methotrexate', 'Methotrexate',
    ['renal-adjusted', 'requires-monitoring'],
    '60% (low dose oral); variable at high doses', '1-2 hrs',
    '0.4-0.8 L/kg', '50%',
    'Intracellular polyglutamation; hepatic aldehyde oxidase', '7-OH-methotrexate; polyglutamate forms (active, retained intracellularly)',
    'Low dose: 3-10 hrs; high dose: 8-15 hrs', 'Renal (80-90% unchanged at high doses)', true, false,
    'Low-dose (RA): not routinely monitored; high-dose oncology: serum levels at 24/48/72 hrs to guide leucovorin rescue',
    '>0.05 mcmol/L at 48 hrs (high-dose protocols); mucositis, myelosuppression, renal failure',
    'Dosed WEEKLY for RA (daily dosing is a fatal error). High-dose oncology protocols require aggressive hydration, urine alkalinization, and leucovorin rescue guided by levels. NSAIDs reduce renal clearance and increase toxicity. Supplemental folic acid 1mg daily reduces side effects without reducing efficacy.',
  ),

};

// ============================================
// Utility Functions
// ============================================

/**
 * Retrieve a PK entry by its ID.
 */
export function getPKEntry(id: string): PharmacokineticEntry | undefined {
  return PHARMACOKINETIC_ENTRIES[id];
}

/**
 * Search PK entries by a case-insensitive query string.
 * Matches against drugName, clinicalPearl, and category.
 */
export function searchPKEntries(query: string): PharmacokineticEntry[] {
  const q = query.toLowerCase();
  return Object.values(PHARMACOKINETIC_ENTRIES).filter((entry) =>
    entry.drugName.toLowerCase().includes(q) ||
    entry.clinicalPearl.toLowerCase().includes(q) ||
    entry.category.some((c) => c.toLowerCase().includes(q)) ||
    entry.metabolism.primaryCYP.toLowerCase().includes(q),
  );
}

/**
 * Get all PK entries belonging to a specific category.
 */
export function getPKEntriesByCategory(category: PKCategory): PharmacokineticEntry[] {
  return Object.values(PHARMACOKINETIC_ENTRIES).filter((entry) =>
    entry.category.includes(category),
  );
}

/**
 * Get all narrow therapeutic index drugs.
 */
export function getNarrowTherapeuticIndexDrugs(): PharmacokineticEntry[] {
  return getPKEntriesByCategory('narrow-therapeutic-index');
}

/**
 * Get all drugs requiring renal dose adjustment.
 */
export function getRenalAdjustedDrugs(): PharmacokineticEntry[] {
  return Object.values(PHARMACOKINETIC_ENTRIES).filter(
    (entry) => entry.elimination.renalDoseAdjust,
  );
}

/**
 * Get all drugs requiring hepatic dose adjustment.
 */
export function getHepaticAdjustedDrugs(): PharmacokineticEntry[] {
  return Object.values(PHARMACOKINETIC_ENTRIES).filter(
    (entry) => entry.elimination.hepaticDoseAdjust,
  );
}

/**
 * Get all drugs with active metabolites.
 */
export function getDrugsWithActiveMetabolites(): PharmacokineticEntry[] {
  return Object.values(PHARMACOKINETIC_ENTRIES).filter(
    (entry) =>
      entry.metabolism.activeMetabolites !== 'None' &&
      entry.metabolism.activeMetabolites !== 'None significant' &&
      entry.metabolism.activeMetabolites !== 'None clinically significant',
  );
}

/**
 * Get all prodrugs.
 */
export function getProdrugs(): PharmacokineticEntry[] {
  return getPKEntriesByCategory('prodrug');
}

/**
 * Get total number of PK entries in the database.
 */
export function getPKEntryCount(): number {
  return Object.keys(PHARMACOKINETIC_ENTRIES).length;
}
