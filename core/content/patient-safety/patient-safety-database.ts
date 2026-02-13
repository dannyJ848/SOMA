/**
 * Biological Self - Patient Safety Database
 * Compact reference of 30+ patient safety topics for medical education
 */

// --- Types ---

export type PatientSafetyCategory =
  | 'medication-safety' | 'surgical-safety' | 'diagnostic-error'
  | 'infection-prevention' | 'fall-prevention' | 'communication'
  | 'systems-approach' | 'quality-improvement' | 'reporting';

export interface PatientSafetyEntry {
  id: string;
  name: string;
  category: PatientSafetyCategory;
  description: string;
  background: string;
  preventionStrategies: string[];
  systemsApproach: string;
  reportingRequirements: string;
  keyPearls: string[];
  references: string[];
}

// --- Patient Safety Database ---

export const PATIENT_SAFETY_ENTRIES: PatientSafetyEntry[] = [

  // ============================================================
  // MEDICATION SAFETY
  // ============================================================
  {
    id: 'med-high-alert', name: 'High-Alert Medications',
    category: 'medication-safety',
    description: 'Medications that bear a heightened risk of significant harm when used in error.',
    background: 'The Institute for Safe Medication Practices (ISMP) maintains a list of high-alert medications including anticoagulants, insulins, opioids, neuromuscular blocking agents, and concentrated electrolytes. These drugs account for a disproportionate share of serious adverse drug events despite representing a small fraction of total prescriptions.',
    preventionStrategies: [
      'Use independent double-checks before administration',
      'Employ automated dispensing cabinets with profiled access',
      'Standardize concentrations and dose limits institution-wide',
      'Use tall-man lettering and auxiliary labels for high-alert drugs',
      'Require pharmacist verification for all high-alert medication orders',
    ],
    systemsApproach: 'High-alert medications require redundant safeguards at every step of the medication-use process: prescribing, dispensing, administering, and monitoring. Forcing functions, constraints, and fail-safes should be designed into the system rather than relying on individual vigilance.',
    reportingRequirements: 'All errors and near-misses involving high-alert medications should be reported through the institutional event reporting system and analyzed for system-level root causes. Sentinel events involving high-alert medications must be reported to The Joint Commission.',
    keyPearls: [
      'ISMP high-alert list includes: anticoagulants, insulins, opioids, chemotherapy, neuromuscular blockers, concentrated electrolytes (KCl, NaCl >0.9%)',
      'Concentrated KCl should never be stored on patient care units',
      'Insulin and heparin are the two most common high-alert medication error sources',
      'Independent double-checks reduce errors by up to 95% for high-alert drugs',
    ],
    references: [
      'ISMP List of High-Alert Medications in Acute Care Settings (2024)',
      'Medication Safety - WHO Global Patient Safety Challenge',
      'The Joint Commission Sentinel Event Alert: High-Alert Medications',
    ],
  },
  {
    id: 'med-lasa', name: 'Look-Alike / Sound-Alike (LASA) Medications',
    category: 'medication-safety',
    description: 'Medications whose names or packaging can be confused with other medications, leading to dispensing or administration errors.',
    background: 'LASA errors account for up to 25% of all medication errors reported to the US Pharmacopeia. Examples include hydroxyzine/hydralazine, metformin/metronidazole, and Celebrex/Celexa. Both visual (look-alike) and auditory (sound-alike) similarities contribute to confusion at every stage of the medication-use process.',
    preventionStrategies: [
      'Implement tall-man lettering (e.g., hydrOXYzine vs. hydrALAzine)',
      'Separate LASA drugs physically in storage areas',
      'Use both generic and brand names on orders and labels',
      'Include indication on prescriptions to add a verification layer',
      'Use barcode verification at point of dispensing and administration',
    ],
    systemsApproach: 'LASA errors are a predictable system failure. Organizations should maintain an internal LASA list, conduct annual reviews of near-misses, and embed alerts in computerized provider order entry (CPOE) and pharmacy systems.',
    reportingRequirements: 'LASA errors and near-misses should be reported to the ISMP Medication Errors Reporting Program (MERP) and the FDA MedWatch program to contribute to national surveillance.',
    keyPearls: [
      'Tall-man lettering highlights distinguishing syllables in capitals: DOBUTamine vs. DOPamine',
      'The FDA Office of Generic Drugs reviews new drug names for LASA potential before approval',
      'LASA confusion is amplified by poor handwriting, verbal orders, and similar packaging',
      'Storing LASA drugs alphabetically increases error risk; separate or flag them instead',
    ],
    references: [
      'ISMP List of Confused Drug Names (updated annually)',
      'FDA Name Differentiation Project – Tall Man Lettering',
      'Joint Commission NPSG.03.01.01 – Medication Safety',
    ],
  },
  {
    id: 'med-five-rights', name: 'Five Rights of Medication Administration',
    category: 'medication-safety',
    description: 'Foundational safety framework ensuring the right patient, drug, dose, route, and time for every medication administration.',
    background: 'The "five rights" originated in nursing education as a bedside verification checklist. Modern practice has expanded to include additional rights: right documentation, right reason, right response, and right to refuse. While the five rights do not prevent all errors (they primarily catch administration-phase mistakes), they remain a core competency for all clinicians.',
    preventionStrategies: [
      'Verify patient identity using two identifiers before every administration',
      'Check the medication label three times: when retrieving, preparing, and administering',
      'Confirm dose calculations independently, especially for pediatric and weight-based dosing',
      'Verify route appropriateness (e.g., oral liquid never given IV)',
      'Confirm timing against the medication administration record (MAR)',
    ],
    systemsApproach: 'The five rights should be supported by barcode medication administration (BCMA) systems, electronic MAR integration, smart infusion pumps with dose-error reduction software, and unit-dose packaging. Relying solely on human memory is insufficient.',
    reportingRequirements: 'Violations of any of the five rights that reach the patient constitute a medication error and must be reported per institutional policy. Wrong-patient and wrong-route errors are considered high-severity events.',
    keyPearls: [
      'Original five: right Patient, Drug, Dose, Route, Time',
      'Expanded rights include: Documentation, Reason, Response, Education, Refusal',
      'Barcode scanning at bedside (BCMA) automates verification of patient and drug',
      'Pediatric dosing errors are 3x more common due to weight-based calculations',
    ],
    references: [
      'American Nurses Association – Medication Administration Standards',
      'ISMP Guidelines for Safe Medication Administration',
      'National Coordinating Council for Medication Error Reporting and Prevention (NCC MERP)',
    ],
  },
  {
    id: 'med-reconciliation', name: 'Medication Reconciliation',
    category: 'medication-safety',
    description: 'Process of comparing a patient\'s current medication orders against all medications the patient is actually taking at every transition of care.',
    background: 'Medication discrepancies occur in up to 67% of hospital admissions. Reconciliation is required at admission, transfer between units, and discharge. The Joint Commission established medication reconciliation as a National Patient Safety Goal (NPSG.03.06.01). Failures in reconciliation are a leading cause of adverse drug events post-discharge.',
    preventionStrategies: [
      'Obtain a Best Possible Medication History (BPMH) using multiple sources',
      'Involve pharmacists in the reconciliation process at transitions of care',
      'Use standardized reconciliation forms integrated into the EHR',
      'Reconcile at admission, intra-facility transfer, and discharge',
      'Provide patients with an updated medication list at every transition',
    ],
    systemsApproach: 'Effective reconciliation requires a system-level commitment: EHR tools that flag discrepancies, pharmacy-led reconciliation programs, patient engagement in verifying their medication lists, and closed-loop communication between inpatient and outpatient providers.',
    reportingRequirements: 'Discrepancies identified during reconciliation should be documented and resolved before the next transition of care. Unresolved discrepancies that cause patient harm are reportable events.',
    keyPearls: [
      'Up to 67% of admitted patients have at least one medication discrepancy',
      'Best Possible Medication History (BPMH) uses patient interview, pharmacy records, pill bottles, and outpatient records',
      'Pharmacist-led reconciliation reduces discrepancies by 50-80%',
      'Discharge reconciliation errors are the most common cause of post-discharge ADEs',
    ],
    references: [
      'Joint Commission NPSG.03.06.01 – Medication Reconciliation',
      'WHO High 5s Project – Medication Reconciliation',
      'Agency for Healthcare Research and Quality (AHRQ) Medication Reconciliation Toolkit',
    ],
  },
  {
    id: 'med-barcoding', name: 'Barcode Medication Administration (BCMA)',
    category: 'medication-safety',
    description: 'Technology-based system that uses barcode scanning to verify patient identity and medication at the point of administration.',
    background: 'BCMA systems link barcode scanning of patient wristbands and medication packages to the electronic medication administration record (eMAR). Studies show BCMA reduces administration errors by 50-80%. The FDA mandated barcode labeling for most prescription drugs in 2004. Despite proven benefits, workaround behaviors (e.g., scanning from a distance, overriding alerts) can undermine effectiveness.',
    preventionStrategies: [
      'Scan both patient wristband and medication barcode before every administration',
      'Address root causes of workarounds (e.g., missing barcodes, scanner malfunction)',
      'Integrate BCMA with smart pump technology for IV medications',
      'Audit compliance rates regularly and provide feedback to staff',
      'Ensure unit-dose packaging with scannable barcodes on all medications',
    ],
    systemsApproach: 'BCMA is a forcing function that interposes a technology check between the nurse and the patient. It is most effective when fully integrated with CPOE, pharmacy dispensing, and the eMAR, creating a closed-loop medication administration process.',
    reportingRequirements: 'BCMA alert overrides should be tracked and analyzed. Patterns of overrides may indicate system design issues. Wrong-patient scans or medication mismatches caught by BCMA are near-misses that should be reported.',
    keyPearls: [
      'BCMA reduces administration errors by 50-80% when used consistently',
      'Common workarounds include scanning from drawers, affixing barcodes to other surfaces, and overriding alerts',
      'Closed-loop medication administration: CPOE -> pharmacy verification -> BCMA -> eMAR documentation',
      'FDA mandated barcode labeling on most prescription drugs since 2004',
    ],
    references: [
      'FDA Rule on Barcode Label Requirements for Human Drugs (2004)',
      'Poon EG et al. Effect of BCMA on medication administration errors. NEJM 2010',
      'AHRQ Patient Safety Network – Barcode Medication Administration',
    ],
  },

  // ============================================================
  // SURGICAL SAFETY
  // ============================================================
  {
    id: 'surg-who-checklist', name: 'WHO Surgical Safety Checklist',
    category: 'surgical-safety',
    description: 'A 19-item checklist developed by WHO to reduce surgical complications and mortality through standardized safety checks at three critical phases.',
    background: 'Launched in 2008 as part of the WHO Safe Surgery Saves Lives campaign, the checklist has three phases: Sign In (before anesthesia induction), Time Out (before skin incision), and Sign Out (before patient leaves OR). The landmark study published in NEJM (2009) showed a 36% reduction in major complications and 47% reduction in mortality across eight diverse hospitals worldwide.',
    preventionStrategies: [
      'Complete all three phases: Sign In, Time Out, and Sign Out',
      'Ensure all team members actively participate and voice concerns',
      'Verify patient identity, procedure, site, and consent at Sign In',
      'Confirm antibiotic prophylaxis, imaging availability, and anticipated critical events at Time Out',
      'Confirm procedure performed, instrument/sponge counts correct, specimen labeling, and equipment issues at Sign Out',
    ],
    systemsApproach: 'The checklist creates a structured pause forcing multidisciplinary communication. Success depends on institutional culture that empowers all team members to speak up. Checklists are a systems tool that compensate for human cognitive limitations under stress.',
    reportingRequirements: 'Checklist compliance rates should be monitored as a quality metric. Surgical complications and near-misses should be analyzed for checklist adherence. Institutions accredited by The Joint Commission must demonstrate a standardized surgical safety process.',
    keyPearls: [
      'Three phases: Sign In (before anesthesia), Time Out (before incision), Sign Out (before leaving OR)',
      'Original study: 36% reduction in complications, 47% reduction in mortality',
      'Effective implementation requires cultural buy-in, not just form completion',
      'Checklist fatigue and perfunctory completion are the biggest threats to effectiveness',
    ],
    references: [
      'Haynes AB et al. A Surgical Safety Checklist to Reduce Morbidity and Mortality. NEJM 2009;360:491-9',
      'WHO Guidelines for Safe Surgery (2009)',
      'The Joint Commission Universal Protocol',
    ],
  },
  {
    id: 'surg-timeout', name: 'Surgical Time-Out Procedure',
    category: 'surgical-safety',
    description: 'A mandatory pause immediately before procedure initiation to verify correct patient, procedure, site, and relevant safety concerns.',
    background: 'The Joint Commission Universal Protocol (2004) mandates a time-out before every invasive procedure. The time-out requires active communication among all team members and must verify patient identity, correct procedure, correct site, patient positioning, and availability of required implants or equipment. The time-out applies not only to the operating room but also to bedside procedures and interventional suites.',
    preventionStrategies: [
      'Conduct the time-out with all team members present and actively participating',
      'Use a standardized script or checklist to ensure all elements are verified',
      'Pause all other activities during the time-out',
      'Empower any team member to stop the procedure if concerns arise',
      'Repeat the time-out if there is a change in team members or procedure plan',
    ],
    systemsApproach: 'The time-out is a forcing function that creates a mandatory pause in workflow. It overcomes production pressure and hierarchical barriers by giving every team member an equal role in verification. Effective time-outs require leadership support and a just culture.',
    reportingRequirements: 'Time-out compliance is a Joint Commission requirement. Missed or incomplete time-outs are reportable to institutional quality committees. Wrong-site, wrong-procedure, or wrong-patient events are sentinel events requiring root cause analysis.',
    keyPearls: [
      'Required before EVERY invasive procedure, not just in the OR',
      'ALL team members must actively participate, not just passively listen',
      'Joint Commission Universal Protocol: pre-procedure verification, site marking, time-out',
      'If team members change mid-procedure, re-verify with a brief time-out',
    ],
    references: [
      'The Joint Commission Universal Protocol for Preventing Wrong Site, Wrong Procedure, Wrong Person Surgery',
      'AHRQ Patient Safety Network – Surgical Time-Out',
      'Makary MA et al. Surgical Safety and the Universal Protocol. Ann Surg 2007',
    ],
  },
  {
    id: 'surg-wrong-site', name: 'Wrong-Site Surgery Prevention',
    category: 'surgical-safety',
    description: 'Strategies to prevent surgical procedures performed on the wrong body part, wrong patient, or wrong procedure entirely.',
    background: 'Wrong-site surgery occurs an estimated 40 times per week in the US. The Joint Commission designated it a sentinel event in 1998 and established the Universal Protocol in 2004. Risk factors include multiple procedures, multiple surgeons, unusual patient positioning, time pressure, and inadequate preoperative verification. The Universal Protocol mandates three steps: preoperative verification, site marking, and time-out.',
    preventionStrategies: [
      'Mark the operative site with indelible ink by the surgeon while the patient is awake and can confirm',
      'Use preoperative verification checklists involving patient, chart, imaging, and consent',
      'Ensure imaging studies are available in the OR and correctly oriented',
      'Involve the patient in verifying site and procedure (when able)',
      'Never mark the non-operative site; use institution-standardized marks',
    ],
    systemsApproach: 'Wrong-site surgery is a systems failure involving breakdowns in communication, verification, and documentation. The Universal Protocol creates multiple redundant barriers. A culture of safety that encourages speaking up is essential since 70% of wrong-site events involve communication failures.',
    reportingRequirements: 'Wrong-site surgery is a sentinel event reportable to The Joint Commission and often to state health departments. A root cause analysis (RCA) is mandatory. CMS considers wrong-site surgery a "never event" and will not reimburse for the care.',
    keyPearls: [
      'Estimated 40 wrong-site surgeries per week in the US',
      'Universal Protocol: (1) pre-op verification, (2) site marking, (3) time-out',
      'The operating surgeon must mark the site; delegation increases error risk',
      'Wrong-site surgery is a CMS "never event" – no reimbursement',
    ],
    references: [
      'Joint Commission Sentinel Event Statistics – Wrong Site Surgery',
      'The Joint Commission Universal Protocol (2004, updated)',
      'Stahel PF et al. Wrong-site and wrong-patient procedures. Ann Surg 2010',
    ],
  },
  {
    id: 'surg-retained-foreign', name: 'Retained Surgical Foreign Bodies',
    category: 'surgical-safety',
    description: 'Prevention of unintentionally retained surgical instruments, sponges, or other items after a procedure.',
    background: 'Retained surgical items (RSI) occur in approximately 1 in 5,500 operations. Sponges account for two-thirds of retained items, followed by instruments and needles. Risk factors include emergency surgery, unplanned changes in procedure, high BMI, and multiple surgical teams. Consequences range from asymptomatic to sepsis, bowel obstruction, and death. Retained items are classified as "never events."',
    preventionStrategies: [
      'Perform standardized surgical counts (sponge, instrument, needle, miscellaneous) at defined intervals',
      'Conduct counts at start, before closing a cavity, at final closure, and at relief of scrub personnel',
      'Use radiofrequency (RF) detection systems or radiopaque sponges',
      'Obtain intraoperative X-ray when count is incorrect and cannot be reconciled',
      'Implement a methodical wound exploration before closure',
    ],
    systemsApproach: 'Retained items result from count process failures, not individual negligence. System solutions include RF-tagged sponges, standardized count policies, barcode-tracked instruments, and a culture where any team member can halt closure for count reconciliation.',
    reportingRequirements: 'Retained surgical items are "never events" reportable to state health departments, The Joint Commission, and CMS. They require mandatory RCA and are not reimbursed by CMS.',
    keyPearls: [
      'Incidence approximately 1 in 5,500 operations; sponges are most common (68%)',
      'Risk factors: emergency surgery, unplanned procedure change, high BMI, multiple teams',
      'RF-tagged sponges reduce detection time and are more reliable than manual counts alone',
      '"Never event" – CMS does not reimburse for care related to retained items',
    ],
    references: [
      'Gawande AA et al. Risk factors for retained instruments and sponges after surgery. NEJM 2003',
      'AORN Guidelines for Prevention of Retained Surgical Items',
      'CMS Hospital-Acquired Conditions – Never Events',
    ],
  },

  // ============================================================
  // DIAGNOSTIC ERRORS
  // ============================================================
  {
    id: 'diag-cognitive-bias', name: 'Cognitive Biases in Diagnosis',
    category: 'diagnostic-error',
    description: 'Systematic patterns of deviation from rational judgment that contribute to diagnostic errors in clinical reasoning.',
    background: 'Diagnostic errors affect approximately 12 million Americans annually in outpatient settings. Cognitive biases are the leading contributor, present in up to 75% of diagnostic error cases. Key biases include anchoring (fixating on an initial impression), premature closure (accepting a diagnosis before fully verified), availability (overweighting recent or memorable cases), and confirmation bias (seeking information that supports the working diagnosis while ignoring contradictory data).',
    preventionStrategies: [
      'Practice diagnostic time-outs: pause and deliberately reconsider the differential',
      'Ask "What else could this be?" and "What is the worst-case scenario?"',
      'Use structured frameworks (e.g., illness scripts, problem representation)',
      'Seek disconfirming evidence actively, not just confirming data',
      'Encourage second opinions and diagnostic collaboration',
    ],
    systemsApproach: 'Cognitive debiasing requires both individual metacognitive strategies and system-level supports: clinical decision support, structured diagnostic checklists, feedback loops that inform clinicians of diagnostic outcomes, and a culture that normalizes diagnostic uncertainty.',
    reportingRequirements: 'Diagnostic errors are underreported. Institutions should establish confidential reporting pathways for diagnostic misses and near-misses. The AHRQ Calibrate Dx initiative promotes standardized diagnostic error measurement.',
    keyPearls: [
      'Anchoring: fixating on initial impression despite disconfirming evidence',
      'Premature closure: most common cognitive error; accepting diagnosis too early',
      'Availability bias: overestimating probability of diagnoses seen recently',
      'Confirmation bias: selectively seeking data that confirms working diagnosis',
      'Diagnostic time-out: structured pause to reconsider the differential',
    ],
    references: [
      'National Academies of Sciences. Improving Diagnosis in Health Care (2015)',
      'Croskerry P. The Importance of Cognitive Errors in Diagnosis. Acad Med 2003',
      'AHRQ Patient Safety Network – Diagnostic Errors',
    ],
  },
  {
    id: 'diag-closed-loop', name: 'Closed-Loop Communication for Diagnostics',
    category: 'diagnostic-error',
    description: 'Communication framework ensuring that diagnostic test results are received, acknowledged, interpreted, and acted upon with confirmation at each step.',
    background: 'Failure to follow up on diagnostic test results is a major source of diagnostic error, affecting up to 7% of abnormal test results. Breakdowns occur at multiple points: ordering, performing, transmitting, receiving, interpreting, and acting on results. Closed-loop communication ensures that the sender confirms the receiver has received, understood, and will act on the information.',
    preventionStrategies: [
      'Implement automated notification systems for critical and abnormal results',
      'Use read-back verification for verbal communication of critical values',
      'Establish maximum response times for critical result acknowledgment',
      'Create reliable tracking systems for pending results at discharge and transitions',
      'Assign clear responsibility for follow-up of every ordered test',
    ],
    systemsApproach: 'Closed-loop diagnostic follow-up requires EHR-based tracking, automated escalation when results are not acknowledged within defined timeframes, patient notification systems, and clear accountability structures so no result falls through the cracks.',
    reportingRequirements: 'Missed or delayed follow-up of critical results should be reported as patient safety events. Institutions must comply with CLIA requirements for timely communication of critical values.',
    keyPearls: [
      'Up to 7% of abnormal outpatient test results lack timely follow-up',
      'Closed loop = send -> receive -> acknowledge -> read back -> act -> confirm',
      'Discharge is a high-risk transition point for pending test results',
      'CLIA regulations mandate timely notification of critical lab values',
    ],
    references: [
      'Callen JL et al. Failure to follow up test results. Ann Intern Med 2012',
      'Joint Commission NPSG.02.03.01 – Critical Results Reporting',
      'AHRQ Patient Safety Network – Test Result Follow-Up',
    ],
  },

  // ============================================================
  // INFECTION PREVENTION
  // ============================================================
  {
    id: 'inf-hand-hygiene', name: 'Hand Hygiene Compliance',
    category: 'infection-prevention',
    description: 'The single most effective measure to prevent healthcare-associated infections (HAIs) through proper handwashing and alcohol-based hand rub use.',
    background: 'Healthcare-associated infections affect 1 in 31 hospital patients on any given day. Despite overwhelming evidence, hand hygiene compliance averages only 40-60% across healthcare settings. The WHO "My 5 Moments for Hand Hygiene" framework defines when hand hygiene is required: before touching a patient, before aseptic procedures, after body fluid exposure, after touching a patient, and after touching patient surroundings.',
    preventionStrategies: [
      'Follow WHO 5 Moments for Hand Hygiene consistently',
      'Use alcohol-based hand rub (ABHR) as primary method; wash with soap and water when hands visibly soiled or for C. difficile',
      'Place ABHR dispensers at point of care and room entry/exit',
      'Monitor compliance through direct observation and electronic systems',
      'Engage patient and family as partners in reminding staff about hand hygiene',
    ],
    systemsApproach: 'Hand hygiene compliance is a systems issue requiring accessible supplies, institutional culture change, leadership commitment, ongoing education, performance feedback, and accountability. Technology solutions include electronic monitoring and automated dispensers.',
    reportingRequirements: 'Hand hygiene compliance rates are a required quality metric for many accreditation bodies and state reporting programs. HAI rates must be reported to the CDC National Healthcare Safety Network (NHSN).',
    keyPearls: [
      'HAIs affect 1 in 31 hospital patients; hand hygiene is the #1 prevention measure',
      'Average compliance is only 40-60% despite decades of evidence',
      'WHO 5 Moments: before patient contact, before aseptic task, after body fluid exposure, after patient contact, after touching surroundings',
      'Use soap and water (not ABHR) for C. difficile and Norovirus (spore-forming organisms)',
    ],
    references: [
      'WHO Guidelines on Hand Hygiene in Health Care (2009)',
      'CDC Guideline for Hand Hygiene in Health-Care Settings (2002)',
      'Pittet D et al. Effectiveness of a hospital-wide programme to improve hand hygiene compliance. Lancet 2000',
    ],
  },
  {
    id: 'inf-clabsi', name: 'Central Line-Associated Bloodstream Infection (CLABSI) Prevention',
    category: 'infection-prevention',
    description: 'Evidence-based bundle approach to prevent bloodstream infections associated with central venous catheters.',
    background: 'CLABSIs cause approximately 28,000 deaths annually in US ICUs. The landmark Pronovost study (2006) demonstrated that a simple 5-component insertion bundle reduced CLABSI rates to nearly zero. The bundle approach represents a paradigm shift from viewing infections as inevitable complications to treating them as preventable harm.',
    preventionStrategies: [
      'Use maximal sterile barrier precautions during insertion (cap, mask, sterile gown, sterile gloves, full body drape)',
      'Clean insertion site with chlorhexidine-alcohol antiseptic',
      'Avoid femoral site when possible; prefer subclavian in non-tunneled catheters',
      'Review line necessity daily and remove promptly when no longer needed',
      'Perform hand hygiene before accessing the line and scrub the hub for 15 seconds',
    ],
    systemsApproach: 'The CLABSI bundle succeeds because it packages individual evidence-based practices into an all-or-none set. Implementation requires standardized insertion kits, daily rounds with line necessity review, empowerment of nurses to stop procedures for protocol violations, and transparent data reporting.',
    reportingRequirements: 'CLABSIs must be reported to the CDC NHSN. CMS includes CLABSI as a Hospital-Acquired Condition with payment penalties. Many states mandate public reporting of CLABSI rates.',
    keyPearls: [
      'Pronovost bundle: hand hygiene, maximal barrier, chlorhexidine, optimal site, daily necessity review',
      'Pronovost study: CLABSI rates dropped from 11.5 to 0 per 1000 catheter-days',
      'Femoral lines have highest infection risk; subclavian lowest for non-tunneled catheters',
      'Daily assessment of line necessity is the most important ongoing prevention measure',
    ],
    references: [
      'Pronovost P et al. An intervention to decrease catheter-related BSI in the ICU. NEJM 2006',
      'CDC Guidelines for Prevention of Intravascular Catheter-Related Infections (2011)',
      'CMS Hospital-Acquired Conditions Reduction Program',
    ],
  },
  {
    id: 'inf-cauti', name: 'Catheter-Associated Urinary Tract Infection (CAUTI) Prevention',
    category: 'infection-prevention',
    description: 'Strategies to prevent urinary tract infections associated with indwelling urinary catheters, the most common HAI.',
    background: 'CAUTIs are the most common HAI, accounting for 40% of all hospital-acquired infections. Up to 25% of hospitalized patients receive an indwelling urinary catheter, but studies show 21-55% of catheter-days are unnecessary. Each day of catheterization increases UTI risk by 3-7%. Prevention focuses on avoiding unnecessary catheterization and early removal.',
    preventionStrategies: [
      'Insert catheters only for appropriate indications (acute urinary retention, accurate I/O in critically ill, perioperative for selected surgeries, sacral/perineal wound healing)',
      'Use aseptic technique for insertion with properly trained personnel',
      'Maintain a closed drainage system at all times',
      'Implement nurse-driven catheter removal protocols',
      'Use daily catheter necessity reminders or automatic stop orders',
    ],
    systemsApproach: 'CAUTI prevention requires system-level interventions: restricted catheter insertion indications, nurse-driven removal protocols, electronic reminders for daily necessity assessment, alternatives to indwelling catheters (external catheters, intermittent catheterization), and leadership-driven culture change.',
    reportingRequirements: 'CAUTIs are reported to CDC NHSN. CMS includes CAUTI as a Hospital-Acquired Condition with financial penalties. State reporting requirements vary.',
    keyPearls: [
      'Most common HAI; 40% of all hospital-acquired infections',
      'Each catheter-day increases UTI risk by 3-7%',
      '21-55% of catheter-days are unnecessary',
      'Nurse-driven removal protocols reduce CAUTI rates by 50% or more',
      'Appropriate indications: retention, critical care I/O, perioperative, wound healing in sacral/perineal area',
    ],
    references: [
      'CDC Guideline for Prevention of CAUTI (2009, updated 2015)',
      'AHRQ Safety Program for CAUTI Prevention (Comprehensive Unit-Based)',
      'Saint S et al. Preventing CAUTI in the United States. Clin Infect Dis 2016',
    ],
  },
  {
    id: 'inf-vap', name: 'Ventilator-Associated Pneumonia (VAP) Prevention',
    category: 'infection-prevention',
    description: 'Bundle-based prevention of pneumonia developing more than 48 hours after endotracheal intubation and mechanical ventilation.',
    background: 'VAP occurs in 5-40% of mechanically ventilated patients and has an attributable mortality of 13%. The IHI ventilator bundle approach has significantly reduced VAP rates. Key pathophysiology involves aspiration of colonized oropharyngeal secretions past the endotracheal tube cuff into the lower respiratory tract.',
    preventionStrategies: [
      'Elevate the head of bed to 30-45 degrees',
      'Perform daily sedation vacations and assess readiness to extubate',
      'Provide peptic ulcer disease prophylaxis',
      'Provide deep venous thrombosis prophylaxis',
      'Perform daily oral care with chlorhexidine',
      'Maintain endotracheal tube cuff pressure at 20-30 cmH2O',
    ],
    systemsApproach: 'The VAP bundle combines evidence-based interventions into a standardized protocol. Spontaneous awakening trials (SAT) paired with spontaneous breathing trials (SBT) – the "wake up and breathe" protocol – are a key systems-level strategy to reduce ventilator days.',
    reportingRequirements: 'Ventilator-associated events (VAE), the broader surveillance category that includes VAP, are reported to the CDC NHSN. Ventilator days and VAE rates are quality metrics tracked by most ICUs.',
    keyPearls: [
      'VAP bundle: HOB elevation, daily sedation vacation + SBT assessment, DVT prophylaxis, PUD prophylaxis, oral care',
      'SAT + SBT protocol reduces ventilator days and mortality',
      'Most VAPs occur in the first 5 days of mechanical ventilation',
      'Subglottic secretion drainage reduces early-onset VAP',
    ],
    references: [
      'IHI Ventilator Bundle Guidelines',
      'Girard TD et al. Efficacy and safety of a paired sedation and ventilator weaning protocol. Lancet 2008',
      'CDC Ventilator-Associated Event Surveillance Protocol',
    ],
  },
  {
    id: 'inf-ssi', name: 'Surgical Site Infection (SSI) Prevention',
    category: 'infection-prevention',
    description: 'Evidence-based practices to prevent infections occurring at or near the surgical incision within 30 days (or 90 days for implant procedures).',
    background: 'SSIs are the most common HAI among surgical patients, occurring in 2-5% of inpatient surgeries. They result in approximately 8,000 deaths annually and add an average $20,000-$25,000 per infection in healthcare costs. Risk factors include patient factors (diabetes, obesity, smoking, immunosuppression) and procedural factors (wound classification, duration, technique).',
    preventionStrategies: [
      'Administer appropriate prophylactic antibiotics within 60 minutes before incision (120 min for vancomycin/fluoroquinolones)',
      'Discontinue prophylactic antibiotics within 24 hours post-operatively (48 hours for cardiac surgery)',
      'Maintain perioperative normothermia (>36°C)',
      'Maintain perioperative glucose control (<180-200 mg/dL)',
      'Use chlorhexidine-alcohol skin preparation at the surgical site',
      'Implement preoperative bathing with chlorhexidine and nasal decolonization for S. aureus carriers',
    ],
    systemsApproach: 'SSI prevention requires a perioperative bundle approach spanning preoperative (optimization, decolonization, skin prep), intraoperative (antibiotic timing, normothermia, glucose control, technique), and postoperative (wound care, surveillance) phases.',
    reportingRequirements: 'SSI rates for selected procedure types must be reported to the CDC NHSN. CMS includes SSI for select procedures in its Hospital-Acquired Conditions program. The Surgical Care Improvement Project (SCIP) measures track antibiotic timing and selection.',
    keyPearls: [
      'Most common HAI in surgical patients (2-5% of inpatient surgeries)',
      'Antibiotic prophylaxis within 60 min of incision; discontinue within 24 hours',
      'Chlorhexidine-alcohol skin prep is superior to povidone-iodine for most surgeries',
      'Perioperative normothermia (>36°C) reduces SSI by approximately 50%',
      'Wound classification: clean, clean-contaminated, contaminated, dirty/infected',
    ],
    references: [
      'CDC Guideline for Prevention of Surgical Site Infection (2017)',
      'WHO Global Guidelines for Prevention of SSI (2018)',
      'Ban KA et al. ACS/SIS Guidelines on the Management of SSI. J Am Coll Surg 2017',
    ],
  },
  {
    id: 'inf-isolation', name: 'Isolation Precautions',
    category: 'infection-prevention',
    description: 'Tiered system of transmission-based precautions (contact, droplet, airborne) layered on top of standard precautions to prevent pathogen spread.',
    background: 'The CDC two-tier approach includes Standard Precautions (applied to all patients) and Transmission-Based Precautions (applied when specific pathogens are suspected or confirmed). Contact precautions use gown and gloves (MRSA, VRE, C. difficile). Droplet precautions add a surgical mask (influenza, pertussis, meningococcus). Airborne precautions require an N95 respirator and negative-pressure room (TB, measles, varicella, COVID-19 aerosol-generating procedures).',
    preventionStrategies: [
      'Apply Standard Precautions to every patient encounter (hand hygiene, PPE for anticipated exposure, safe injection practices)',
      'Initiate Transmission-Based Precautions empirically when infection is suspected, before confirmation',
      'Use appropriate PPE for each precaution level and don/doff in correct sequence',
      'Place patients in appropriate rooms (private room for all; negative-pressure for airborne)',
      'Educate patients and visitors about precaution requirements and rationale',
    ],
    systemsApproach: 'Effective isolation requires system supports: rapid diagnostic testing to guide precautions, adequate supply of PPE, sufficient single rooms and negative-pressure rooms, signage and electronic alerts, and ongoing competency verification for PPE use.',
    reportingRequirements: 'Certain pathogens requiring isolation (TB, measles, etc.) are reportable to public health authorities. Outbreaks of HAIs require immediate institutional response and may trigger regulatory reporting.',
    keyPearls: [
      'Standard Precautions apply to ALL patients, ALL encounters',
      'Contact: gown + gloves (MRSA, VRE, C. diff, scabies)',
      'Droplet: surgical mask within 6 feet (influenza, pertussis, meningococcus)',
      'Airborne: N95 + negative-pressure room (TB, measles, varicella, disseminated zoster)',
      'Don sequence: gown, mask, eye protection, gloves. Doff: gloves, eye protection, gown, mask',
    ],
    references: [
      'CDC Guideline for Isolation Precautions (2007, updated)',
      'Siegel JD et al. 2007 Guideline for Isolation Precautions. Am J Infect Control 2007',
      'CDC Standard Precautions for All Patient Care',
    ],
  },

  // ============================================================
  // FALL PREVENTION
  // ============================================================
  {
    id: 'fall-risk-assessment', name: 'Fall Risk Assessment',
    category: 'fall-prevention',
    description: 'Systematic evaluation of patient fall risk using validated tools to guide individualized prevention interventions.',
    background: 'Falls are the most common adverse event reported in hospitals, occurring in 3-5 per 1,000 patient-days. Approximately 30% of inpatient falls result in injury, with 4-6% causing serious injury including fractures and intracranial hemorrhage. Risk factors include advanced age, gait/balance impairment, cognitive impairment, medications (sedatives, opioids, antihypertensives), history of falls, and environmental hazards.',
    preventionStrategies: [
      'Assess fall risk on admission, at regular intervals, and with any change in condition',
      'Use a validated assessment tool (Morse Fall Scale, Hendrich II, Johns Hopkins)',
      'Implement individualized interventions based on identified risk factors',
      'Communicate fall risk status through visual cues (wristbands, door signs, bed alerts)',
      'Ensure call light within reach, bed in lowest position, non-slip footwear, and adequate lighting',
    ],
    systemsApproach: 'Fall prevention requires a multicomponent program: standardized risk assessment, individualized care plans, environmental modifications, staff education, post-fall analysis, and leadership commitment to a fall prevention culture.',
    reportingRequirements: 'Falls with injury are reportable patient safety events. CMS does not reimburse for injuries from inpatient falls (Hospital-Acquired Condition). Falls resulting in death are sentinel events reportable to The Joint Commission.',
    keyPearls: [
      'Falls occur 3-5 per 1,000 patient-days; 30% cause injury',
      'Morse Fall Scale: 6 items – history of falls, secondary diagnosis, ambulatory aid, IV/heparin lock, gait, mental status',
      'Top medication risk factors: benzodiazepines, opioids, antihypertensives, diuretics',
      'Post-fall huddles identify immediate causes and prevent recurrence',
    ],
    references: [
      'AHRQ Preventing Falls in Hospitals: A Toolkit for Improving Quality of Care',
      'Morse JM. Preventing Patient Falls (2nd ed). Springer 2009',
      'CMS Hospital-Acquired Conditions – Falls with Injury',
    ],
  },
  {
    id: 'fall-morse-scale', name: 'Morse Fall Scale',
    category: 'fall-prevention',
    description: 'Widely used validated fall risk assessment tool with six items scored to categorize patients as low, moderate, or high fall risk.',
    background: 'Developed by Janice Morse in 1989, the Morse Fall Scale (MFS) is the most widely used fall risk assessment tool in acute care. It evaluates six risk factors: history of falling (within 3 months), secondary diagnosis (2+ medical conditions), ambulatory aid (none, crutches/cane/walker, furniture), IV therapy/heparin lock, gait (normal, weak, impaired), and mental status (oriented vs. overestimates abilities). Scores range from 0-125; risk levels are low (0-24), moderate (25-44), and high (≥45).',
    preventionStrategies: [
      'Score 0-24 (low risk): implement standard fall prevention (good basic care)',
      'Score 25-44 (moderate risk): add targeted interventions (toileting schedule, supervised ambulation)',
      'Score ≥45 (high risk): implement intensive interventions (1:1 sitter, bed alarm, non-skid socks, frequent rounding)',
      'Reassess with any change in patient condition, medications, or after a fall event',
      'Combine MFS results with clinical judgment; tools do not replace nursing assessment',
    ],
    systemsApproach: 'The MFS provides a standardized language for fall risk communication. It should be integrated into the EHR with automatic alerts, linked to order sets for interventions, and combined with environmental safety rounds.',
    reportingRequirements: 'MFS scores should be documented in the patient record at defined intervals. Fall events require incident reporting with documentation of the pre-fall MFS score to validate tool effectiveness.',
    keyPearls: [
      '6 items: fall history, secondary diagnosis, ambulatory aid, IV/heparin lock, gait, mental status',
      'Score range 0-125; Low <25, Moderate 25-44, High ≥45',
      'Sensitivity 72-83%, specificity 29-51% in acute care settings',
      'High sensitivity but modest specificity means over-identification; combine with clinical judgment',
    ],
    references: [
      'Morse JM et al. Development of a scale to identify the fall-prone patient. Can J Aging 1989',
      'Schwendimann R et al. Evaluation of the Morse Fall Scale. J Adv Nurs 2006',
      'AHRQ Fall Prevention Toolkit – Morse Fall Scale',
    ],
  },

  // ============================================================
  // COMMUNICATION
  // ============================================================
  {
    id: 'comm-sbar', name: 'SBAR Communication Framework',
    category: 'communication',
    description: 'Structured communication technique (Situation, Background, Assessment, Recommendation) for conveying critical patient information concisely and completely.',
    background: 'SBAR was originally developed by the US Navy for nuclear submarine communication and adapted for healthcare by Kaiser Permanente. It addresses the communication gap between clinicians of different disciplines and training levels. Communication failures are the leading root cause of sentinel events (identified in 70% of Joint Commission RCAs). SBAR provides a predictable structure that ensures critical information is transmitted completely.',
    preventionStrategies: [
      'Situation: State your name, unit, patient name, and the reason for the communication',
      'Background: Provide relevant clinical context (diagnosis, pertinent history, recent changes)',
      'Assessment: Share your clinical assessment of the situation and degree of urgency',
      'Recommendation: State what you need from the other party (order, evaluation, transfer)',
      'Use SBAR for all urgent communications, handoffs, and escalations',
    ],
    systemsApproach: 'SBAR flattens hierarchy by giving all team members a standardized format to communicate concerns to physicians and leadership. It should be embedded in institutional culture through training, simulation, and integration into EHR communication templates.',
    reportingRequirements: 'Communication failures identified in event reviews should be analyzed for whether structured communication tools were used. SBAR compliance can be audited as a quality metric.',
    keyPearls: [
      'S = Situation (who, what, why calling), B = Background (context), A = Assessment (your evaluation), R = Recommendation (what you need)',
      'Originally from US Navy submarine communication; adapted for healthcare by Kaiser Permanente',
      'Communication failures are the #1 root cause in 70% of sentinel events',
      'SBAR is most critical for nurse-to-physician and cross-discipline communication',
    ],
    references: [
      'Institute for Healthcare Improvement – SBAR Toolkit',
      'Leonard M et al. The human factor: the critical importance of effective teamwork. Qual Saf Health Care 2004',
      'Joint Commission Sentinel Event Root Cause Analysis Data',
    ],
  },
  {
    id: 'comm-handoff', name: 'Patient Handoff Protocols',
    category: 'communication',
    description: 'Standardized processes for transferring patient care responsibility between providers, the most vulnerable point in the care continuum for information loss.',
    background: 'Handoffs occur frequently in healthcare: shift changes, unit transfers, OR-to-PACU, discharge. The ACGME mandated structured handoff training in 2011. The I-PASS study (2014) demonstrated a 30% reduction in medical errors with a standardized handoff bundle. Key elements include face-to-face communication, read-back, opportunity for questions, and updated documentation.',
    preventionStrategies: [
      'Use a standardized handoff framework (I-PASS: Illness severity, Patient summary, Action list, Situation awareness, Synthesis by receiver)',
      'Conduct handoffs face-to-face or via video in a distraction-minimized environment',
      'Include read-back of key elements and opportunity for receiver questions',
      'Update the written/electronic handoff document before each transition',
      'Avoid interruptions during handoff; designate a backup for urgent issues during handoff time',
    ],
    systemsApproach: 'Effective handoffs require standardized protocols, protected time, quiet environments, EHR-integrated handoff tools, training and simulation, and institutional policies that prioritize handoff quality over efficiency pressure.',
    reportingRequirements: 'Adverse events attributed to handoff failures should be reported and analyzed. The Joint Commission NPSG.02.05.01 requires organizations to implement a standardized approach to handoff communications.',
    keyPearls: [
      'I-PASS study: 30% reduction in medical errors with standardized handoff bundle',
      'I-PASS: Illness severity, Patient summary, Action list, Situation awareness, Synthesis by receiver',
      'ACGME mandated structured handoff education in 2011',
      'Handoff failures contribute to an estimated 80% of serious medical errors',
    ],
    references: [
      'Starmer AJ et al. Changes in medical errors after implementation of a handoff program. NEJM 2014',
      'Joint Commission NPSG.02.05.01 – Handoff Communications',
      'ACGME Common Program Requirements – Transitions of Care',
    ],
  },
  {
    id: 'comm-teamstepps', name: 'TeamSTEPPS',
    category: 'communication',
    description: 'Evidence-based teamwork system (Team Strategies and Tools to Enhance Performance and Patient Safety) developed by AHRQ and DoD to improve communication and teamwork in healthcare.',
    background: 'TeamSTEPPS is a comprehensive, evidence-based framework to optimize team performance across the healthcare delivery system. It addresses four core competencies: communication, leadership, situation monitoring, and mutual support. Key tools include SBAR, CUS (Concerned-Uncomfortable-Safety issue), DESC script for conflict resolution, briefs/huddles/debriefs, and Two-Challenge Rule (advocating at least twice for patient safety).',
    preventionStrategies: [
      'Implement team briefs before procedures and debriefs after to capture lessons learned',
      'Use CUS words to escalate concerns: "I am Concerned, I am Uncomfortable, this is a Safety issue"',
      'Apply the Two-Challenge Rule: advocate at least twice if a safety concern is not addressed',
      'Conduct huddles for ad hoc situational updates when new information arises',
      'Use cross-monitoring to provide a safety net through mutual support and backup behavior',
    ],
    systemsApproach: 'TeamSTEPPS is designed as a system-level cultural transformation, not just a training program. Successful implementation requires leadership commitment, a phased rollout (assess, plan, train, implement, sustain), master trainers, and ongoing reinforcement through coaching and measurement.',
    reportingRequirements: 'TeamSTEPPS integrates with event reporting by providing tools (e.g., CUS, Two-Challenge Rule) that empower staff to speak up before harm occurs. Institutions should track team performance metrics and correlate with safety outcomes.',
    keyPearls: [
      'Four core competencies: Communication, Leadership, Situation Monitoring, Mutual Support',
      'CUS words: Concerned, Uncomfortable, Safety issue – escalating assertive language',
      'Two-Challenge Rule: advocate twice; if still ignored, escalate to supervisor',
      'Brief = planning before; Huddle = ad hoc situational update; Debrief = after-action review',
    ],
    references: [
      'AHRQ TeamSTEPPS 2.0 Curriculum',
      'King HB et al. TeamSTEPPS: Team Strategies and Tools to Enhance Performance and Patient Safety. AHRQ 2008',
      'Weaver SJ et al. Does TeamSTEPPS work? Joint Comm J Qual Patient Saf 2010',
    ],
  },

  // ============================================================
  // SYSTEMS APPROACH
  // ============================================================
  {
    id: 'sys-swiss-cheese', name: 'Swiss Cheese Model of Error',
    category: 'systems-approach',
    description: 'James Reason\'s model illustrating how errors occur when holes in multiple layers of defense align, allowing a hazard to reach the patient.',
    background: 'Proposed by James Reason in 1990, the Swiss Cheese Model conceptualizes safety as multiple defensive layers (like slices of Swiss cheese), each with imperfections (holes). An adverse event occurs only when the holes in each layer momentarily align, allowing a hazard trajectory to pass through all defenses. The model shifts focus from blaming individuals to understanding system failures. Holes arise from active failures (slips, mistakes at the sharp end) and latent conditions (system design flaws, management decisions at the blunt end).',
    preventionStrategies: [
      'Design multiple independent layers of defense (redundancy)',
      'Address latent conditions (staffing, training, equipment design) proactively',
      'Investigate near-misses as seriously as adverse events (holes aligned but one layer caught it)',
      'Build systems that are resilient to individual human error',
      'Use prospective hazard analysis to identify weaknesses in defensive layers',
    ],
    systemsApproach: 'The Swiss Cheese Model is itself a systems framework. It directs analysis away from individual blame ("sharp end") toward organizational and design factors ("blunt end"). Root cause analysis should trace back through organizational culture, management decisions, preconditions, and supervisory factors.',
    reportingRequirements: 'The model supports a just culture where reporting is encouraged because errors are viewed as system failures, not individual moral failings. Event reports should capture both active failures and latent conditions.',
    keyPearls: [
      'Proposed by James Reason (1990); foundation of modern patient safety science',
      'Active failures: slips, lapses, mistakes at the sharp end (frontline workers)',
      'Latent conditions: system design flaws, management decisions at the blunt end',
      'Adverse events require alignment of holes across multiple defensive layers',
      'Near-misses = holes almost aligned; equally important to analyze',
    ],
    references: [
      'Reason J. Human Error. Cambridge University Press 1990',
      'Reason J. Managing the Risks of Organizational Accidents. Ashgate 1997',
      'AHRQ Patient Safety Network – Systems Approach',
    ],
  },
  {
    id: 'sys-rca', name: 'Root Cause Analysis (RCA)',
    category: 'systems-approach',
    description: 'Structured retrospective analysis method to identify the fundamental system-level causes of an adverse event or sentinel event.',
    background: 'RCA is mandated by The Joint Commission for all sentinel events. The process involves a multidisciplinary team that uses tools like the "5 Whys," fishbone (Ishikawa) diagrams, and timeline mapping to trace causal pathways from the event back to root causes. Effective RCA focuses on system-level factors rather than individual blame. The output is an action plan with measurable corrective actions targeting root causes.',
    preventionStrategies: [
      'Assemble a multidisciplinary team including frontline staff involved in the event',
      'Map the timeline of events and identify all contributing factors',
      'Use the "5 Whys" technique to drill down from proximate to root causes',
      'Create a fishbone diagram categorizing factors: people, process, equipment, environment, materials, management',
      'Develop specific, measurable corrective actions with assigned owners and timelines',
    ],
    systemsApproach: 'RCA is a systems analysis tool by design. It traces causation from individual actions through supervisory, organizational, and regulatory factors. Effective RCA produces stronger corrective actions (system redesign, forcing functions) rather than weaker ones (education, policy revision).',
    reportingRequirements: 'The Joint Commission requires an RCA for every sentinel event with an action plan submitted within 45 business days. Many states require RCA for serious reportable events. The VA National Center for Patient Safety developed the widely used RCA2 methodology.',
    keyPearls: [
      'Mandated by Joint Commission for all sentinel events; action plan due within 45 business days',
      'Tools: 5 Whys, fishbone/Ishikawa diagram, timeline mapping, barrier analysis',
      'Strongest corrective actions: forcing functions, system redesign, automation',
      'Weakest corrective actions: education alone, policy revision, counseling individual',
      'RCA2 (RCA-squared) adds emphasis on system-based actions over person-based ones',
    ],
    references: [
      'The Joint Commission Framework for Root Cause Analysis and Action Plan',
      'VA National Center for Patient Safety – RCA2 Methodology',
      'AHRQ Root Cause Analysis – Patient Safety Primer',
    ],
  },
  {
    id: 'sys-fmea', name: 'Failure Mode and Effects Analysis (FMEA)',
    category: 'systems-approach',
    description: 'Proactive risk assessment methodology that systematically identifies potential failure points in a process before harm occurs.',
    background: 'Unlike RCA (reactive), FMEA is a prospective hazard analysis tool. Originally developed for aerospace engineering, Healthcare FMEA (HFMEA) was adapted by the VA National Center for Patient Safety. The process maps each step of a clinical process, identifies potential failure modes, rates them by severity, probability, and detectability to calculate a Risk Priority Number (RPN), and prioritizes high-risk failures for redesign. The Joint Commission requires at least one proactive risk assessment annually.',
    preventionStrategies: [
      'Select a high-risk process and define its scope clearly',
      'Map every step of the process using a flow diagram',
      'For each step, identify all potential failure modes (what could go wrong)',
      'Rate each failure mode for Severity x Probability x Detectability = RPN',
      'Redesign steps with highest RPNs using engineering controls and forcing functions',
    ],
    systemsApproach: 'FMEA embodies the proactive systems approach: identifying and mitigating risks before they cause harm. It is a team-based process involving those who perform the work, and it produces specific design changes rather than relying on human vigilance.',
    reportingRequirements: 'The Joint Commission LD.03.01.01 requires organizations to conduct at least one proactive risk assessment annually. Results should inform quality improvement priorities and be documented for accreditation surveys.',
    keyPearls: [
      'Proactive (before harm), unlike RCA which is reactive (after harm)',
      'Risk Priority Number (RPN) = Severity x Probability x Detectability',
      'HFMEA = Healthcare Failure Mode and Effects Analysis (VA adaptation)',
      'Joint Commission requires at least one proactive risk assessment per year',
      'Focus redesign efforts on highest-RPN failure modes first',
    ],
    references: [
      'VA National Center for Patient Safety – HFMEA Methodology',
      'DeRosier J et al. Using Health Care FMEA: the VA NCPS Experience. Jt Comm J Qual Saf 2002',
      'Joint Commission Standard LD.03.01.01 – Proactive Risk Assessment',
    ],
  },

  // ============================================================
  // QUALITY IMPROVEMENT
  // ============================================================
  {
    id: 'qi-pdsa', name: 'PDSA Cycle (Plan-Do-Study-Act)',
    category: 'quality-improvement',
    description: 'Iterative quality improvement methodology for testing and implementing changes through rapid small-scale cycles.',
    background: 'The PDSA cycle, also known as the Deming cycle, is the foundation of the Institute for Healthcare Improvement (IHI) Model for Improvement. It asks three questions: "What are we trying to accomplish?" (aim), "How will we know a change is an improvement?" (measures), and "What change can we make that will result in improvement?" (change ideas). PDSA cycles start small, test quickly, learn from results, and scale successful changes progressively.',
    preventionStrategies: [
      'Plan: Define the objective, predictions, data collection plan, and who/what/when/where',
      'Do: Carry out the test on a small scale, document observations and problems',
      'Study: Analyze data, compare results to predictions, summarize learnings',
      'Act: Decide to adopt, adapt, or abandon the change; plan the next cycle',
      'Run multiple rapid cycles with progressive scaling rather than one large implementation',
    ],
    systemsApproach: 'PDSA cycles are a systems improvement tool that tests changes in the real work environment. They reduce risk by starting small and building evidence iteratively. The approach respects system complexity by learning from each cycle rather than assuming a change will work at full scale.',
    reportingRequirements: 'PDSA cycles should be documented with aims, measures, change ideas, and results. Quality improvement projects involving patient data may require IRB review. Results should be shared through institutional quality committees.',
    keyPearls: [
      'Three fundamental questions: aim, measures, change ideas',
      'Start small (test with one patient, one shift, one day) then scale up',
      'Multiple rapid cycles > one large implementation',
      'PDSA is the engine of the IHI Model for Improvement',
      'Study phase is most commonly underdone; rigorously compare results to predictions',
    ],
    references: [
      'Langley GJ et al. The Improvement Guide (2nd ed). Jossey-Bass 2009',
      'Institute for Healthcare Improvement – Model for Improvement',
      'Deming WE. The New Economics for Industry, Government, Education. MIT Press 1993',
    ],
  },
  {
    id: 'qi-lean', name: 'Lean Healthcare',
    category: 'quality-improvement',
    description: 'Quality improvement methodology focused on eliminating waste (non-value-added steps) and optimizing flow to improve patient care and efficiency.',
    background: 'Lean originated from the Toyota Production System and has been widely adopted in healthcare since the early 2000s. It defines value from the patient\'s perspective and systematically eliminates eight types of waste (DOWNTIME: Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing). Key tools include value stream mapping, 5S (Sort, Set in order, Shine, Standardize, Sustain), A3 problem-solving, and Gemba walks.',
    preventionStrategies: [
      'Map value streams from the patient perspective to identify waste',
      'Apply 5S methodology to organize clinical workspaces',
      'Use Gemba walks (go to the place where work is done) to observe processes firsthand',
      'Implement visual management boards to track key metrics',
      'Standardize work processes to reduce variation and errors',
    ],
    systemsApproach: 'Lean is inherently a systems methodology. It views the healthcare organization as a system of interconnected processes, seeks to optimize the whole rather than individual parts, and empowers frontline workers to identify and solve problems through continuous improvement (kaizen).',
    reportingRequirements: 'Lean projects should track defined metrics on visual management boards with regular review cycles. Results should be reported to institutional quality and operations leadership.',
    keyPearls: [
      'Eight wastes (DOWNTIME): Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing',
      '5S: Sort, Set in order, Shine, Standardize, Sustain',
      'Value stream mapping visualizes current vs. future state processes',
      'Gemba = "the real place"; go observe where work actually happens',
      'A3 problem-solving: define problem, analyze causes, propose solutions, implement, follow up – all on one A3-size page',
    ],
    references: [
      'Womack JP, Jones DT. Lean Thinking. Free Press 2003',
      'Toussaint JS, Berry LL. The Promise of Lean in Health Care. Mayo Clin Proc 2013',
      'Graban M. Lean Hospitals (3rd ed). Productivity Press 2016',
    ],
  },
  {
    id: 'qi-six-sigma', name: 'Six Sigma in Healthcare',
    category: 'quality-improvement',
    description: 'Data-driven quality improvement methodology using statistical analysis to reduce process variation and defects to fewer than 3.4 per million opportunities.',
    background: 'Six Sigma was developed by Motorola in the 1980s and popularized by GE. In healthcare, it uses the DMAIC framework (Define, Measure, Analyze, Improve, Control) for existing process improvement and DMADV (Define, Measure, Analyze, Design, Verify) for new process design. The goal is to reduce variation to a level where defects are statistically rare (6 standard deviations from the mean). Practitioners are certified as Yellow, Green, or Black Belts based on expertise.',
    preventionStrategies: [
      'Define: Create a project charter with clear problem statement, scope, and goals',
      'Measure: Establish baseline performance using valid data collection methods',
      'Analyze: Identify root causes of variation using statistical tools (Pareto charts, regression, hypothesis testing)',
      'Improve: Design and implement solutions targeting identified root causes',
      'Control: Sustain improvements with control charts, standard work, and monitoring plans',
    ],
    systemsApproach: 'Six Sigma addresses systems by using data to understand process capability and variation. It distinguishes between common cause variation (inherent to the system) and special cause variation (assignable to specific factors), enabling targeted interventions.',
    reportingRequirements: 'Six Sigma projects require rigorous data collection and statistical analysis. Results should be presented using control charts to demonstrate sustained improvement. Financial impact should be quantified.',
    keyPearls: [
      'DMAIC: Define, Measure, Analyze, Improve, Control (for existing processes)',
      'Goal: <3.4 defects per million opportunities (DPMO)',
      'Belt system: Yellow (awareness), Green (project lead), Black (expert), Master Black Belt (mentor)',
      'Control charts distinguish common cause from special cause variation',
      'Often combined with Lean as "Lean Six Sigma" for comprehensive improvement',
    ],
    references: [
      'Pyzdek T, Keller PA. The Six Sigma Handbook (5th ed). McGraw-Hill 2018',
      'Chassin MR. Is health care ready for Six Sigma quality? Milbank Q 1998',
      'DelliFraine JL et al. Assessing the evidence of Six Sigma and Lean in the health care industry. Qual Manag Health Care 2010',
    ],
  },

  // ============================================================
  // EVENT REPORTING
  // ============================================================
  {
    id: 'rpt-sentinel-events', name: 'Sentinel Events',
    category: 'reporting',
    description: 'Unexpected occurrences involving death or serious physical or psychological injury that signal the need for immediate investigation and response.',
    background: 'The Joint Commission defines a sentinel event as a patient safety event that results in death, permanent harm, or severe temporary harm. Examples include wrong-site surgery, retained foreign body, suicide in a 24-hour staffed facility, infant abduction or discharge to wrong family, rape, hemolytic transfusion reaction, and surgery on the wrong patient. Organizations are expected (but not required) to self-report sentinel events to The Joint Commission and must conduct a thorough root cause analysis.',
    preventionStrategies: [
      'Maintain a robust event reporting system that captures sentinel events immediately',
      'Conduct a root cause analysis within 45 business days of the event',
      'Develop a corrective action plan with specific, measurable, system-level changes',
      'Implement a strong just culture that separates human error from reckless behavior',
      'Review Joint Commission Sentinel Event Alerts for emerging risks and prevention strategies',
    ],
    systemsApproach: 'Sentinel events represent catastrophic system failures requiring deep analysis. The response must go beyond the individual to examine organizational factors, culture, and system design. The goal is to make recurrence impossible through system redesign, not merely improbable through retraining.',
    reportingRequirements: 'Self-reporting to The Joint Commission is encouraged but voluntary. However, when a sentinel event comes to The Joint Commission\'s attention, the organization must submit an RCA and action plan or risk being placed on Accreditation Watch. Many states mandate reporting of serious events to health departments.',
    keyPearls: [
      'Definition: event resulting in death, permanent harm, or severe temporary harm',
      'Examples: wrong-site surgery, retained foreign body, inpatient suicide, infant abduction, hemolytic transfusion',
      'RCA and action plan required within 45 business days',
      'Self-reporting to Joint Commission is voluntary but strongly encouraged',
      'CMS "never events" overlap significantly with sentinel events',
    ],
    references: [
      'The Joint Commission Sentinel Event Policy (updated annually)',
      'The Joint Commission Sentinel Event Alerts archive',
      'Chassin MR, Loeb JM. The ongoing quality improvement journey. Health Aff 2011',
    ],
  },
  {
    id: 'rpt-near-miss', name: 'Near-Miss Reporting',
    category: 'reporting',
    description: 'Reporting of events that could have caused patient harm but did not, either by chance or through timely intervention, providing crucial data for proactive safety improvement.',
    background: 'Near-misses (also called close calls or good catches) occur 3-300 times more frequently than actual adverse events, making them the richest source of safety data. Heinrich\'s safety pyramid suggests that for every serious injury, there are approximately 29 minor injuries and 300 near-misses. Analyzing near-misses reveals system vulnerabilities before patients are harmed. Yet near-miss reporting rates remain low due to time constraints, fear of blame, and uncertainty about what constitutes a reportable event.',
    preventionStrategies: [
      'Create a non-punitive, confidential reporting system that is easy to use',
      'Define near-misses broadly and educate staff to recognize reportable events',
      'Provide timely feedback to reporters on actions taken (closing the loop)',
      'Analyze near-miss data for trends and system-level vulnerabilities',
      'Celebrate near-miss reporting as a proactive safety behavior ("good catch" programs)',
    ],
    systemsApproach: 'Near-miss reporting is the hallmark of a mature safety culture. It requires psychological safety (just culture), accessible reporting tools, dedicated analysts, trend identification, and organizational action on findings. The goal is to fix the system before the next near-miss becomes an adverse event.',
    reportingRequirements: 'Near-misses should be reported through institutional event reporting systems. The Patient Safety Organization (PSO) framework provides federal privilege and confidentiality protections for patient safety work product shared with a PSO. AHRQ manages the Network of Patient Safety Databases (NPSD).',
    keyPearls: [
      'Near-misses occur 3-300x more frequently than adverse events',
      'Heinrich\'s pyramid: 1 serious injury : 29 minor injuries : 300 near-misses',
      'Non-punitive culture is the #1 prerequisite for robust near-miss reporting',
      'Good catch programs incentivize and celebrate near-miss reporting',
      'Patient Safety Organizations (PSOs) provide legal privilege for shared safety data',
    ],
    references: [
      'AHRQ Patient Safety Network – Reporting Patient Safety Events',
      'Barach P, Small SD. Reporting and preventing medical mishaps: lessons from non-medical near miss reporting systems. BMJ 2000',
      'Patient Safety and Quality Improvement Act of 2005 (PSO framework)',
    ],
  },
  {
    id: 'rpt-just-culture', name: 'Just Culture Framework',
    category: 'reporting',
    description: 'A safety culture model that distinguishes between human error, at-risk behavior, and reckless behavior to create accountability without blame for honest mistakes.',
    background: 'Developed by David Marx, the Just Culture model recognizes that punishing human error does not prevent it but does suppress reporting. The framework classifies behaviors into three categories: human error (inadvertent; console the individual and fix the system), at-risk behavior (drift from best practice due to normalization; coach back to safe behavior), and reckless behavior (conscious disregard of substantial risk; remedial or disciplinary action). This nuanced approach promotes reporting while maintaining accountability.',
    preventionStrategies: [
      'Train all leaders and staff in just culture principles and behavior classification',
      'Use a standardized algorithm to classify events as human error, at-risk, or reckless behavior',
      'Console and support staff involved in human error events (second victim support)',
      'Coach individuals exhibiting at-risk behavior to understand and mitigate risk',
      'Reserve punitive action for reckless behavior (conscious disregard of known risk)',
    ],
    systemsApproach: 'Just culture is a system-level philosophy that creates the psychological safety necessary for open reporting and learning. It separates system design accountability (leadership) from behavioral accountability (individuals) and requires organizational commitment from the board level down.',
    reportingRequirements: 'A just culture environment dramatically increases voluntary event reporting. Organizations should track reporting rates as a leading indicator of safety culture. The AHRQ Hospital Survey on Patient Safety Culture (HSOPS) measures perceptions of just culture and non-punitive response.',
    keyPearls: [
      'Three behaviors: human error (console), at-risk (coach), reckless (discipline)',
      'Human error: inadvertent, unintentional – fix the system, support the person',
      'At-risk behavior: normalization of deviance, drift – coach back to safe practice',
      'Reckless behavior: conscious disregard of substantial risk – remedial/disciplinary action',
      'Punishing human error suppresses reporting without improving safety',
    ],
    references: [
      'Marx D. Patient Safety and the "Just Culture": A Primer for Health Care Executives (2001)',
      'Reason J. Managing the Risks of Organizational Accidents. Ashgate 1997',
      'AHRQ Hospital Survey on Patient Safety Culture (HSOPS)',
    ],
  },
  {
    id: 'rpt-culture-safety', name: 'Culture of Safety',
    category: 'reporting',
    description: 'An organizational culture in which safety is prioritized, errors are viewed as system failures, reporting is encouraged, and continuous learning drives improvement.',
    background: 'A culture of safety has five key attributes (per AHRQ): leadership commitment, open communication, organizational learning, non-punitive response to error, and teamwork. High-reliability organizations (HROs) – such as nuclear power, aviation, and aircraft carriers – serve as models for healthcare. HRO principles include preoccupation with failure, reluctance to simplify, sensitivity to operations, commitment to resilience, and deference to expertise regardless of hierarchy.',
    preventionStrategies: [
      'Assess safety culture regularly using validated surveys (AHRQ HSOPS)',
      'Engage leadership visibly in safety rounds, event reviews, and safety communications',
      'Create psychological safety so staff feel safe reporting errors and near-misses',
      'Implement structures for organizational learning: morbidity & mortality conferences, safety huddles, event debriefs',
      'Recognize and reward safety behaviors and proactive risk identification',
    ],
    systemsApproach: 'Culture of safety is the overarching framework within which all other patient safety strategies operate. It is a system property that emerges from leadership commitment, structures, processes, and shared values. Without a safety culture, individual safety tools and checklists will underperform.',
    reportingRequirements: 'AHRQ HSOPS provides validated measurement of safety culture dimensions. Results should be shared transparently with staff and used to guide targeted improvement efforts. The Joint Commission assesses safety culture during accreditation surveys.',
    keyPearls: [
      'Five AHRQ attributes: leadership, communication, learning, non-punitive response, teamwork',
      'HRO principles: preoccupation with failure, reluctance to simplify, sensitivity to operations, resilience, deference to expertise',
      'Safety culture is a LEADING indicator; harm rates are LAGGING indicators',
      'AHRQ HSOPS is the most widely used safety culture survey in US hospitals',
      'Culture eats strategy for breakfast – safety culture determines effectiveness of all other interventions',
    ],
    references: [
      'AHRQ Hospital Survey on Patient Safety Culture (HSOPS)',
      'Weick KE, Sutcliffe KM. Managing the Unexpected: Resilient Performance in an Age of Uncertainty (3rd ed). Jossey-Bass 2015',
      'Chassin MR, Loeb JM. High-reliability health care. Health Aff 2013',
    ],
  },

  // ============================================================
  // ADDITIONAL ENTRIES
  // ============================================================
  {
    id: 'med-smart-pumps', name: 'Smart Infusion Pumps',
    category: 'medication-safety',
    description: 'Infusion pumps with dose-error reduction software (DERS) that provide safety alerts for out-of-range dosing to prevent IV medication errors.',
    background: 'Smart pumps contain drug libraries with predefined concentration limits, dose limits, and infusion rate limits. When a nurse programs a dose outside the defined parameters, the pump generates a soft alert (can be overridden) or a hard alert (cannot be overridden). Studies show smart pumps intercept 2-5% of programmed infusions. However, effectiveness depends on comprehensive drug libraries, low override rates, and regular library updates. Override rates of 70-90% for soft alerts remain a significant challenge.',
    preventionStrategies: [
      'Build comprehensive, evidence-based drug libraries with both soft and hard limits',
      'Analyze override data to identify drugs needing limit adjustments',
      'Integrate smart pumps with BCMA and EHR for closed-loop IV medication administration',
      'Use hard stops for highest-risk medications (e.g., insulin, heparin, chemotherapy)',
      'Conduct regular library reviews and updates based on override analysis and new evidence',
    ],
    systemsApproach: 'Smart pumps are a technology-based forcing function that interposes a safety check at the point of infusion programming. Maximum benefit requires integration with the medication-use system (CPOE, pharmacy, BCMA) and continuous library optimization based on override data.',
    reportingRequirements: 'Smart pump alert data should be captured and analyzed routinely. High override rates signal drug library issues that need correction. Near-misses caught by smart pump alerts should be documented as safety catches.',
    keyPearls: [
      'DERS = Dose Error Reduction Software; the brain of the smart pump',
      'Soft alerts can be overridden; hard stops cannot – both serve important roles',
      'Override rates of 70-90% are common and indicate library optimization is needed',
      'Interoperability with EHR/BCMA enables auto-programming and closed-loop verification',
    ],
    references: [
      'ISMP Guidelines for Safe Implementation and Use of Smart Infusion Pumps',
      'Rothschild JM et al. A controlled trial of smart infusion pumps. Crit Care Med 2005',
      'ECRI Institute – Smart Pump Safety',
    ],
  },
  {
    id: 'surg-fire-prevention', name: 'Surgical Fire Prevention',
    category: 'surgical-safety',
    description: 'Prevention of fires in the operating room caused by the fire triad: oxidizer (supplemental oxygen), ignition source (electrosurgery), and fuel (drapes, prep solutions, patient).',
    background: 'An estimated 200-600 surgical fires occur annually in the US. The fire triad requires three elements: an oxidizer (supplemental oxygen or nitrous oxide), an ignition source (electrosurgery, lasers, fiber-optic light sources), and fuel (alcohol-based prep solutions, drapes, gauze, patient hair, intestinal gases). Head, neck, and upper chest procedures are highest risk due to proximity to supplemental oxygen.',
    preventionStrategies: [
      'Conduct a fire risk assessment before every procedure (especially head/neck/upper chest)',
      'Allow alcohol-based skin prep to fully dry before draping (minimum 3 minutes)',
      'Use the lowest effective oxygen concentration; avoid open oxygen delivery near the surgical site',
      'Use a surgical fire prevention checklist integrated into the WHO surgical safety checklist',
      'Ensure fire extinguisher and water/saline are immediately available in every OR',
    ],
    systemsApproach: 'Surgical fire prevention requires a team-based approach. The surgeon controls the ignition source, anesthesiologist controls the oxidizer, and nursing manages fuel sources. The fire risk assessment should be a standard part of the surgical time-out.',
    reportingRequirements: 'Surgical fires are reportable events. The FDA encourages reporting through MedWatch. ECRI Institute maintains a surgical fire database. Institutional reporting should capture near-misses to identify prevention opportunities.',
    keyPearls: [
      'Fire triad: oxidizer (O2) + ignition source (electrosurgery) + fuel (drapes, prep)',
      '200-600 surgical fires per year in the US; head/neck/upper chest highest risk',
      'Allow alcohol-based prep to dry completely before draping (≥3 minutes)',
      'Surgeon controls ignition, anesthesia controls oxidizer, nursing controls fuel',
    ],
    references: [
      'ECRI Institute – Surgical Fire Prevention',
      'FDA Recommendations for Reducing Surgical Fires',
      'ASA Practice Advisory for the Prevention of OR Fires',
    ],
  },
  {
    id: 'diag-test-stewardship', name: 'Diagnostic Test Stewardship',
    category: 'diagnostic-error',
    description: 'Appropriate use of diagnostic tests to avoid both under-testing (missed diagnoses) and over-testing (false positives, cascades of unnecessary workup, patient harm).',
    background: 'An estimated 20-50% of diagnostic tests may be unnecessary. Over-testing leads to false-positive cascades, incidental findings requiring follow-up, patient anxiety, radiation exposure, contrast reactions, and increased costs. Under-testing leads to missed or delayed diagnoses. The Choosing Wisely campaign has identified hundreds of low-value tests across specialties. Diagnostic stewardship applies the right test, for the right patient, at the right time.',
    preventionStrategies: [
      'Apply Choosing Wisely recommendations to reduce low-value testing',
      'Use clinical decision support in CPOE to guide appropriate test ordering',
      'Implement reflex testing protocols for sequential lab panels',
      'Reduce routine daily labs in stable hospitalized patients',
      'Educate clinicians about pretest probability and Bayesian reasoning',
    ],
    systemsApproach: 'Diagnostic stewardship requires system-level interventions: clinical decision support, hardwired order sets reflecting evidence-based guidelines, removal of unnecessary standing orders, transparent cost data at point of ordering, and a culture that values diagnostic parsimony.',
    reportingRequirements: 'Institutions should track test utilization metrics, particularly high-volume and high-cost tests. Choosing Wisely measures can be incorporated into provider feedback reports. Diagnostic cascades from false positives should be tracked as safety events.',
    keyPearls: [
      '20-50% of diagnostic tests may be unnecessary',
      'Choosing Wisely: specialty-specific lists of low-value tests and procedures',
      'Bayesian reasoning: pretest probability determines test utility more than test sensitivity',
      'Cascade effect: one unnecessary test leading to further tests, biopsies, and interventions',
    ],
    references: [
      'Choosing Wisely Campaign – ABIM Foundation',
      'Morgan DJ et al. Setting a research agenda for medical overuse. BMJ 2015',
      'AHRQ Diagnostic Safety – Overuse and Underuse',
    ],
  },
  {
    id: 'inf-antimicrobial-stewardship', name: 'Antimicrobial Stewardship',
    category: 'infection-prevention',
    description: 'Coordinated programs to optimize antimicrobial use, improve patient outcomes, reduce antimicrobial resistance, and decrease healthcare-associated infections like C. difficile.',
    background: 'Up to 50% of antibiotic use in hospitals is unnecessary or inappropriate. Inappropriate use drives antimicrobial resistance (a top global health threat), increases C. difficile infection risk, and causes adverse drug events. The CDC Core Elements of Hospital Antibiotic Stewardship include leadership commitment, accountability (physician leader + pharmacist co-leader), drug expertise, action (prospective audit, preauthorization), tracking, reporting, and education.',
    preventionStrategies: [
      'Implement prospective audit and feedback by infectious disease or pharmacy team',
      'Use preauthorization for restricted antimicrobials',
      'Promote de-escalation from broad to narrow spectrum based on culture results',
      'Enforce antibiotic time-outs at 48-72 hours to reassess necessity and spectrum',
      'Implement IV-to-oral conversion protocols to shorten IV duration',
    ],
    systemsApproach: 'Antimicrobial stewardship is a system-level program requiring dedicated personnel, IT infrastructure for surveillance and decision support, institutional policies, formulary management, provider education, and regular outcome measurement.',
    reportingRequirements: 'The Joint Commission requires antimicrobial stewardship programs (Standard MM.09.01.01). CMS Conditions of Participation require hospitals to have antibiotic stewardship programs. Antibiotic use data should be reported to CDC NHSN Antibiotic Use and Resistance module.',
    keyPearls: [
      'Up to 50% of hospital antibiotic use is unnecessary or inappropriate',
      'CDC Core Elements: leadership, accountability, drug expertise, action, tracking, reporting, education',
      'Antibiotic time-out at 48-72 hours: reassess necessity, spectrum, duration',
      'Inappropriate antibiotics increase C. difficile risk 3-5x',
    ],
    references: [
      'CDC Core Elements of Hospital Antibiotic Stewardship Programs (2019)',
      'Joint Commission Standard MM.09.01.01 – Antimicrobial Stewardship',
      'Barlam TF et al. IDSA/SHEA Guidelines for Implementing Antibiotic Stewardship. Clin Infect Dis 2016',
    ],
  },
  {
    id: 'comm-disclosure', name: 'Disclosure of Medical Errors',
    category: 'communication',
    description: 'The ethical and professional obligation to honestly communicate with patients and families when errors or unexpected outcomes occur during their care.',
    background: 'Ethical principles of autonomy, beneficence, and fidelity support full disclosure of medical errors to patients. The Joint Commission requires disclosure of unanticipated outcomes (RI.01.02.01). Communication-and-Resolution Programs (CRPs) pair early disclosure with proactive resolution, reducing malpractice claims and costs. The University of Michigan model demonstrated a 36% decrease in claims and 59% decrease in lawsuits after implementing a comprehensive disclosure program.',
    preventionStrategies: [
      'Disclose errors promptly, honestly, and with empathy (what happened, why, what is being done)',
      'Express genuine sympathy and apology without speculating about blame',
      'Involve risk management and patient relations early in the process',
      'Provide ongoing communication and support as investigation proceeds',
      'Implement a Communication-and-Resolution Program (CRP) institutionally',
    ],
    systemsApproach: 'Error disclosure is a system process requiring institutional policies, trained disclosure coaches, risk management support, legal consultation, and a just culture. Many states have apology laws that protect expressions of sympathy from being used as admission of liability.',
    reportingRequirements: 'The Joint Commission standard RI.01.02.01 requires organizations to inform patients about unanticipated outcomes of care. State laws vary on disclosure requirements. Disclosure does not replace event reporting or regulatory notification.',
    keyPearls: [
      'Joint Commission requires disclosure of unanticipated outcomes (RI.01.02.01)',
      'University of Michigan model: 36% fewer claims, 59% fewer lawsuits after disclosure program',
      'Communication-and-Resolution Programs (CRPs) combine disclosure with proactive resolution',
      'Apology laws in 39 states protect expressions of sympathy from legal liability',
      '"Second victim" phenomenon: healthcare workers experience significant distress after errors',
    ],
    references: [
      'Gallagher TH et al. Patients\' and physicians\' attitudes regarding the disclosure of medical errors. JAMA 2003',
      'Joint Commission Standard RI.01.02.01 – Patient Rights',
      'Kachalia A et al. Liability claims and costs before and after a CRP. Ann Intern Med 2010',
    ],
  },
  {
    id: 'sys-high-reliability', name: 'High-Reliability Organizations (HROs)',
    category: 'systems-approach',
    description: 'Organizations operating in high-hazard environments that maintain exceptionally safe performance through specific cultural and operational principles.',
    background: 'High-reliability organizations (aviation, nuclear power, aircraft carriers) achieve near-zero failure rates despite operating in complex, high-risk environments. Karl Weick and Kathleen Sutcliffe identified five HRO principles: preoccupation with failure (treating near-misses as system warnings), reluctance to simplify (embracing complexity), sensitivity to operations (situational awareness at all levels), commitment to resilience (ability to detect and recover from errors), and deference to expertise (decisions flow to the person with the most knowledge, regardless of hierarchy).',
    preventionStrategies: [
      'Foster preoccupation with failure: celebrate near-miss reporting, never become complacent after periods of success',
      'Resist the urge to simplify explanations for adverse events; seek complex, systemic root causes',
      'Maintain sensitivity to operations through safety rounds, huddles, and real-time situational awareness tools',
      'Build resilience through simulation training, rapid response systems, and recovery protocols',
      'Practice deference to expertise by empowering frontline staff to stop the line for safety concerns',
    ],
    systemsApproach: 'HRO is the aspirational model for healthcare safety. It requires a fundamental shift from a reactive culture (investigating after harm) to a proactive, anticipatory culture. Leadership must model and reinforce HRO principles in daily operations, not just in policies.',
    reportingRequirements: 'HROs maintain robust reporting systems that capture the full spectrum of events from unsafe conditions to sentinel events. Leading indicators (near-misses, safety culture scores, compliance rates) are tracked alongside lagging indicators (harm events).',
    keyPearls: [
      'Five HRO principles: preoccupation with failure, reluctance to simplify, sensitivity to operations, resilience, deference to expertise',
      'Deference to expertise: decision authority flows to knowledge, not hierarchy',
      'HROs treat near-misses as free lessons, not evidence that the system is safe',
      'Healthcare is NOT yet high-reliability; ~400,000 preventable deaths/year in US hospitals',
    ],
    references: [
      'Weick KE, Sutcliffe KM. Managing the Unexpected (3rd ed). Jossey-Bass 2015',
      'Chassin MR, Loeb JM. High-Reliability Health Care: Getting There from Here. Milbank Q 2013',
      'AHRQ High Reliability – Patient Safety Primer',
    ],
  },
];

// --- Utility Functions ---

/** Search entries by keyword across id, name, description, background, preventionStrategies, and keyPearls. */
export function searchPatientSafetyEntries(query: string): PatientSafetyEntry[] {
  const q = query.toLowerCase();
  return PATIENT_SAFETY_ENTRIES.filter(e =>
    e.id.toLowerCase().includes(q) ||
    e.name.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.background.toLowerCase().includes(q) ||
    e.preventionStrategies.some(s => s.toLowerCase().includes(q)) ||
    e.keyPearls.some(p => p.toLowerCase().includes(q))
  );
}

/** Filter entries by one or more categories. */
export function filterByCategory(categories: PatientSafetyCategory[]): PatientSafetyEntry[] {
  return PATIENT_SAFETY_ENTRIES.filter(e => categories.includes(e.category));
}

/** Get a single entry by its id. */
export function getEntryById(id: string): PatientSafetyEntry | undefined {
  return PATIENT_SAFETY_ENTRIES.find(e => e.id === id);
}
