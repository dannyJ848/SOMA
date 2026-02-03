/**
 * Health Policy Database
 *
 * Comprehensive database of health policy, insurance systems, legal/regulatory
 * frameworks, payment models, quality improvement, clinical trials, health equity,
 * and healthcare delivery concepts for medical education.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type HealthPolicyCategory =
  | 'insurance-systems'
  | 'legal-regulatory'
  | 'quality-improvement'
  | 'payment-models'
  | 'ethics-law'
  | 'clinical-trials'
  | 'health-equity'
  | 'healthcare-delivery';

export interface HealthPolicyEntry {
  id: string;
  name: string;
  category: HealthPolicyCategory;
  description: string;
  keyPoints: string[];
  clinicalRelevance: string;
  examHighYield: boolean;
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const HEALTH_POLICY_ENTRIES: Record<string, HealthPolicyEntry> = {
  // =========================================================================
  // INSURANCE SYSTEMS
  // =========================================================================
  'medicare': {
    id: 'medicare',
    name: 'Medicare',
    category: 'insurance-systems',
    description: 'Federal health insurance for adults >=65, certain disabilities, and ESRD. Part A (hospital/inpatient), Part B (outpatient/physician), Part C (Medicare Advantage managed care), Part D (prescription drugs). Funded by payroll taxes (Part A) and premiums/general revenue (Parts B & D).',
    keyPoints: [
      'Part A = hospital; Part B = outpatient; Part C = Advantage plans; Part D = drugs',
      'Part A funded by payroll tax; Part B/D by premiums + general revenue',
      'Administered by CMS; largest single payer in the US',
      'Does NOT cover long-term custodial care (common misconception)',
      'ESRD patients qualify regardless of age via Part A',
    ],
    clinicalRelevance: 'Largest US payer; drives reimbursement patterns, quality metrics, and practice standards across the healthcare system. Medicare payment policies often adopted by private insurers.',
    examHighYield: true,
  },
  'medicaid': {
    id: 'medicaid',
    name: 'Medicaid',
    category: 'insurance-systems',
    description: 'Joint federal-state program covering low-income individuals including children, pregnant women, elderly, and disabled. Eligibility and benefits vary by state. ACA expanded eligibility to 138% FPL in participating states. Largest payer for long-term care and births in the US.',
    keyPoints: [
      'Joint federal-state funding; states administer with federal guidelines',
      'Largest payer for long-term care, childbirth, and behavioral health in US',
      'ACA expansion optional per NFIB v. Sebelius (2012); not all states expanded',
      'EPSDT (Early Periodic Screening Diagnostic Treatment) mandated for children',
      'Dual-eligible patients (Medicare + Medicaid) have complex coverage',
    ],
    clinicalRelevance: 'Covers ~85 million Americans; understanding Medicaid formularies and provider networks is essential for managing low-income patients.',
    examHighYield: true,
  },
  'aca': {
    id: 'aca',
    name: 'Affordable Care Act (ACA/Obamacare)',
    category: 'insurance-systems',
    description: '2010 landmark reform: individual mandate, insurance marketplaces, Medicaid expansion, pre-existing condition protections, essential health benefits, dependents covered to age 26, preventive care without cost-sharing, and elimination of lifetime coverage limits.',
    keyPoints: [
      'Pre-existing conditions cannot be used to deny coverage or increase premiums',
      'Essential health benefits: 10 categories including mental health and Rx drugs',
      'Preventive services rated A/B by USPSTF covered without cost-sharing',
      'Individual mandate penalty zeroed in 2019 but marketplace persists',
      'Reduced uninsured rate from ~16% to ~9%',
    ],
    clinicalRelevance: 'Dramatically expanded insurance access; physicians must understand marketplace plans, essential benefits, and preventive coverage requirements.',
    examHighYield: true,
  },
  'chip': {
    id: 'chip',
    name: 'Children\'s Health Insurance Program (CHIP)',
    category: 'insurance-systems',
    description: 'Federal-state program covering children in families above Medicaid thresholds but below 200-300% FPL (varies by state). Created in 1997 to close the coverage gap for uninsured children. Provides comprehensive pediatric benefits.',
    keyPoints: [
      'Covers children whose families earn too much for Medicaid but lack private insurance',
      'States set eligibility within federal guidelines (typically 200-300% FPL)',
      'Comprehensive benefits including dental and vision',
      'Funded jointly by federal and state governments',
    ],
    clinicalRelevance: 'Important safety net for pediatric patients; ensures access to preventive and acute care for near-poor children.',
    examHighYield: false,
  },

  // =========================================================================
  // LEGAL & REGULATORY
  // =========================================================================
  'emtala': {
    id: 'emtala',
    name: 'EMTALA (Emergency Medical Treatment and Labor Act)',
    category: 'legal-regulatory',
    description: '1986 federal law requiring Medicare-participating hospitals with EDs to provide medical screening exams and stabilization to anyone regardless of insurance or ability to pay. Applies to emergency departments and hospital property. Violations carry civil monetary penalties.',
    keyPoints: [
      'Applies to all patients presenting to the ED regardless of payment status',
      'Requires medical screening exam (MSE) and stabilization before transfer/discharge',
      'Transfer only after stabilization or if benefits outweigh risks with receiving facility agreement',
      'Violations: fines up to $50K per violation, exclusion from Medicare, civil liability',
      'On-call physicians must respond; "patient dumping" is prohibited',
    ],
    clinicalRelevance: 'Every ED physician must know EMTALA obligations. Failure to screen or stabilize is a federal violation. Cannot ask about insurance before MSE.',
    examHighYield: true,
  },
  'hipaa': {
    id: 'hipaa',
    name: 'HIPAA (Health Insurance Portability and Accountability Act)',
    category: 'legal-regulatory',
    description: '1996 federal law protecting patient health information (PHI). Privacy Rule governs use/disclosure of PHI; Security Rule mandates safeguards for electronic PHI. Patients have rights to access and amend records. Permits disclosures for treatment, payment, operations, and public health without authorization.',
    keyPoints: [
      'PHI includes any individually identifiable health information',
      'Minimum necessary standard: disclose only what is needed',
      'Patients have right to access records, request amendments, and accounting of disclosures',
      'No authorization needed for treatment, payment, healthcare operations, or public health reporting',
      'Breach notification required within 60 days; penalties range from fines to criminal charges',
    ],
    clinicalRelevance: 'Governs all clinical communication about patients. Physicians can share PHI for treatment without patient authorization but must use minimum necessary information.',
    examHighYield: true,
  },
  'stark-law': {
    id: 'stark-law',
    name: 'Stark Law (Physician Self-Referral Law)',
    category: 'legal-regulatory',
    description: 'Federal law prohibiting physicians from referring Medicare/Medicaid patients for designated health services to entities with which the physician or immediate family has a financial relationship, unless an exception applies. Strict liability statute (no intent required).',
    keyPoints: [
      'Strict liability: violation occurs regardless of intent',
      'Designated health services include lab, imaging, DME, physical therapy, home health',
      'Exceptions: in-office ancillary services, fair market value compensation, academic medical centers',
      'Penalties: denial of payment, refund obligations, False Claims Act liability, exclusion from federal programs',
      'Differs from Anti-Kickback Statute which requires intent',
    ],
    clinicalRelevance: 'Physicians must be aware of financial relationships that may trigger Stark violations. Self-referral arrangements need legal review.',
    examHighYield: true,
  },
  'anti-kickback-statute': {
    id: 'anti-kickback-statute',
    name: 'Anti-Kickback Statute (AKS)',
    category: 'legal-regulatory',
    description: 'Federal criminal law prohibiting knowingly and willfully offering, paying, soliciting, or receiving remuneration to induce or reward referrals for services covered by federal healthcare programs. Requires intent (unlike Stark Law). Safe harbors protect legitimate arrangements.',
    keyPoints: [
      'Criminal statute: requires knowledge and willful intent',
      'Applies to both sides of the transaction (payer and payee)',
      'Safe harbors: employee compensation, personal services, discounts, investments in ASCs',
      'One purpose test: if even one purpose is to induce referrals, the statute is violated',
      'Penalties: fines up to $100K per violation, imprisonment up to 10 years, program exclusion',
    ],
    clinicalRelevance: 'Physicians cannot receive gifts or payments for patient referrals. Pharmaceutical interactions and consulting arrangements must comply with safe harbors.',
    examHighYield: true,
  },
  'false-claims-act': {
    id: 'false-claims-act',
    name: 'False Claims Act (FCA)',
    category: 'legal-regulatory',
    description: 'Federal law imposing liability on those who defraud the government, including submitting false claims for payment. Qui tam (whistleblower) provisions allow private citizens to file suit on behalf of the government and receive 15-30% of recovered funds.',
    keyPoints: [
      'Treble damages (3x the fraudulent amount) plus per-claim penalties',
      'Qui tam whistleblowers protected from retaliation; receive 15-30% of recovery',
      'Covers upcoding, unbundling, billing for services not rendered, kickback-tainted claims',
      'Most common tool for healthcare fraud enforcement',
      'Stark Law and AKS violations can trigger FCA liability',
    ],
    clinicalRelevance: 'Accurate coding and documentation are essential. Physicians bear personal liability for knowingly submitting false claims.',
    examHighYield: true,
  },
  'good-samaritan-laws': {
    id: 'good-samaritan-laws',
    name: 'Good Samaritan Laws',
    category: 'legal-regulatory',
    description: 'State laws providing legal protection to individuals who voluntarily provide emergency care to injured persons outside a clinical setting. Protect rescuers from civil liability for unintentional harm, encouraging bystander intervention.',
    keyPoints: [
      'Vary by state but exist in all 50 US states',
      'Protect volunteers who act in good faith without expectation of compensation',
      'Do NOT protect against gross negligence or willful misconduct',
      'Generally apply outside the clinical setting (roadside, public spaces)',
      'Some states extend to opioid overdose (naloxone administration) protections',
    ],
    clinicalRelevance: 'Physicians acting as bystanders in emergencies are generally protected. Important for encouraging naloxone use and CPR by laypersons.',
    examHighYield: true,
  },

  // =========================================================================
  // ETHICS & LAW
  // =========================================================================
  'informed-consent': {
    id: 'informed-consent',
    name: 'Informed Consent',
    category: 'ethics-law',
    description: 'Legal and ethical requirement that patients receive adequate information to make voluntary decisions about their medical care. Elements: diagnosis, proposed treatment, risks/benefits, alternatives, and right to refuse. Must be given by the treating physician, not delegated to nurses.',
    keyPoints: [
      'Five elements: diagnosis, nature of treatment, risks, benefits, alternatives (including no treatment)',
      'Patient must have decision-making capacity (not the same as legal competency)',
      'Exceptions: emergencies, therapeutic privilege, patient waiver, incompetent patients (surrogate consent)',
      'Must be voluntary, informed, and made by a competent patient',
      'Physician performing the procedure should obtain consent',
    ],
    clinicalRelevance: 'Required before every procedure and treatment. Inadequate informed consent is a common basis for malpractice claims. Document the conversation, not just the signature.',
    examHighYield: true,
  },
  'advance-directives': {
    id: 'advance-directives',
    name: 'Advance Directives',
    category: 'ethics-law',
    description: 'Legal documents expressing a patient\'s wishes for future medical care when they lose decision-making capacity. Include living wills (specifying treatments) and healthcare proxy/durable power of attorney for healthcare (designating a surrogate decision-maker).',
    keyPoints: [
      'Living will: specifies which treatments patient does/does not want',
      'Healthcare proxy: designates a surrogate to make decisions',
      'Patient Self-Determination Act (1990) requires hospitals to ask about advance directives on admission',
      'Can be revoked at any time by a competent patient',
      'Surrogate uses substituted judgment (what patient would want) or best interests standard',
    ],
    clinicalRelevance: 'Essential for end-of-life care planning. Physicians should initiate advance care planning discussions, especially for chronically ill patients.',
    examHighYield: true,
  },
  'polst': {
    id: 'polst',
    name: 'POLST (Physician Orders for Life-Sustaining Treatment)',
    category: 'ethics-law',
    description: 'Actionable medical order (not just a directive) signed by a physician specifying treatment preferences for seriously ill patients. Immediately actionable by EMS and healthcare providers. Complements but does not replace advance directives.',
    keyPoints: [
      'Medical order, not merely a directive; immediately actionable',
      'Covers CPR, medical interventions, antibiotics, artificial nutrition',
      'Designed for patients with serious illness or advanced frailty',
      'Transfers across care settings (hospital, nursing home, EMS)',
      'Requires conversation between patient/surrogate and healthcare professional',
    ],
    clinicalRelevance: 'More actionable than standard advance directives in acute settings. EMS must honor POLST forms. Facilitates goal-concordant care.',
    examHighYield: true,
  },
  'durable-power-of-attorney': {
    id: 'durable-power-of-attorney',
    name: 'Durable Power of Attorney for Healthcare',
    category: 'ethics-law',
    description: 'Legal document designating a surrogate decision-maker (healthcare agent/proxy) to make medical decisions when the patient loses capacity. "Durable" means it remains effective after incapacitation, unlike standard power of attorney.',
    keyPoints: [
      'Agent makes decisions only when patient lacks capacity',
      'More flexible than living will: covers unforeseen scenarios',
      'Agent should use substituted judgment (patient\'s known wishes) first, then best interests',
      'Can be combined with a living will for comprehensive planning',
      'Does NOT grant financial decision-making authority (separate document)',
    ],
    clinicalRelevance: 'Identify the healthcare proxy early in serious illness. The agent speaks for the patient and should be involved in care discussions.',
    examHighYield: true,
  },
  'medical-malpractice': {
    id: 'medical-malpractice',
    name: 'Medical Malpractice',
    category: 'ethics-law',
    description: 'Professional negligence by a healthcare provider whose treatment falls below the accepted standard of care, causing injury. Plaintiff must prove four elements: duty, breach, causation, and damages (the "four Ds").',
    keyPoints: [
      'Four Ds: Duty, Dereliction (breach), Direct cause (proximate causation), Damages',
      'Standard of care: what a reasonable physician in same specialty would do',
      'Expert witness testimony typically required to establish standard of care',
      'Statute of limitations varies by state (typically 2-3 years)',
      'Most claims resolved by settlement; malpractice crisis drives defensive medicine',
    ],
    clinicalRelevance: 'Thorough documentation, informed consent, and communication reduce malpractice risk. Diagnostic errors and failure to follow up are leading causes.',
    examHighYield: true,
  },
  'standard-of-care': {
    id: 'standard-of-care',
    name: 'Standard of Care',
    category: 'ethics-law',
    description: 'The degree of care and skill that a reasonably competent healthcare provider in the same field would exercise under similar circumstances. Defined by clinical guidelines, peer-reviewed literature, expert consensus, and local practice patterns.',
    keyPoints: [
      'Legal benchmark against which physician conduct is measured in malpractice',
      'Informed by guidelines (USPSTF, ACC/AHA) but not identical to guidelines',
      'Evolves as evidence and technology advance',
      'Locality rule (local standards) largely replaced by national standard',
      'Clinical practice guidelines are relevant but not dispositive in court',
    ],
    clinicalRelevance: 'Following evidence-based guidelines supports standard of care but does not guarantee immunity from liability. Deviations should be documented with reasoning.',
    examHighYield: true,
  },

  // =========================================================================
  // PAYMENT MODELS
  // =========================================================================
  'value-based-care': {
    id: 'value-based-care',
    name: 'Value-Based Care',
    category: 'payment-models',
    description: 'Healthcare delivery and payment model that rewards quality, outcomes, and cost-efficiency rather than volume. Includes ACOs, bundled payments, pay-for-performance, and shared savings programs. MACRA/MIPS ties Medicare physician payment to quality.',
    keyPoints: [
      'Shifts incentives from volume (fee-for-service) to value (outcomes/cost)',
      'ACOs coordinate care to share savings with payers',
      'MACRA (2015) created MIPS and APM pathways for Medicare physician payment',
      'Quality measures: clinical outcomes, patient experience, cost efficiency',
      'Bundled payments cover entire episode of care (e.g., joint replacement)',
    ],
    clinicalRelevance: 'Physicians are increasingly evaluated on quality metrics. Understanding value-based models essential for practice viability and population health management.',
    examHighYield: true,
  },
  'fee-for-service': {
    id: 'fee-for-service',
    name: 'Fee-for-Service (FFS)',
    category: 'payment-models',
    description: 'Traditional payment model where providers are reimbursed for each individual service rendered. Incentivizes volume over value. Associated with overutilization, fragmented care, and rising costs. Still the dominant US payment model despite reform efforts.',
    keyPoints: [
      'Payment per service: more procedures = more revenue',
      'Incentivizes volume and may lead to overutilization',
      'Does not reward care coordination, prevention, or outcomes',
      'CPT codes define billable services; RVUs determine payment amounts',
      'Gradually being replaced by value-based alternatives but still predominant',
    ],
    clinicalRelevance: 'FFS drives clinical behavior and can conflict with evidence-based medicine. Understanding coding (CPT, ICD-10) is essential for practice.',
    examHighYield: true,
  },
  'capitation': {
    id: 'capitation',
    name: 'Capitation',
    category: 'payment-models',
    description: 'Payment model where providers receive a fixed amount per patient per time period regardless of services rendered. Incentivizes efficiency and prevention but carries risk of undertreatment. Used in HMO and managed care settings.',
    keyPoints: [
      'Fixed PMPM (per member per month) payment regardless of utilization',
      'Shifts financial risk from payer to provider',
      'Incentivizes prevention and efficiency; risk of undertreatment',
      'Global capitation covers all services; partial capitation covers subset',
      'Risk adjustment (e.g., HCC scores) adjusts payments for patient complexity',
    ],
    clinicalRelevance: 'Capitated models reward keeping patients healthy and out of the hospital. Physicians must balance cost containment with quality of care.',
    examHighYield: true,
  },
  'drgs': {
    id: 'drgs',
    name: 'Diagnosis-Related Groups (DRGs)',
    category: 'payment-models',
    description: 'Prospective payment system classifying hospital inpatient stays into groups based on diagnosis, procedures, age, and complications. Medicare pays a fixed amount per DRG regardless of actual costs. Incentivizes hospitals to reduce length of stay and costs.',
    keyPoints: [
      'Fixed per-case payment based on diagnosis, not actual charges',
      'Introduced in 1983 to control Medicare inpatient spending',
      'MS-DRGs (Medicare Severity) adjust for comorbidities and complications',
      'Incentivizes efficiency: shorter stays, fewer unnecessary tests',
      'Risk of premature discharge and upcoding for higher-paying DRGs',
    ],
    clinicalRelevance: 'Accurate documentation of diagnoses and comorbidities directly affects hospital reimbursement. Clinical documentation improvement (CDI) programs ensure accurate DRG assignment.',
    examHighYield: true,
  },

  // =========================================================================
  // QUALITY IMPROVEMENT
  // =========================================================================
  'hedis': {
    id: 'hedis',
    name: 'HEDIS (Healthcare Effectiveness Data and Information Set)',
    category: 'quality-improvement',
    description: 'Standardized performance measures developed by NCQA used by >90% of US health plans. Measures preventive care, chronic disease management, access, utilization, and patient experience. Enables comparison across health plans.',
    keyPoints: [
      'Over 90 measures across 6 domains of care',
      'Used by >90% of US health plans for performance benchmarking',
      'Covers preventive screening rates, chronic disease management, medication adherence',
      'Star ratings for Medicare Advantage plans based partly on HEDIS measures',
      'Drives pay-for-performance incentives in managed care contracts',
    ],
    clinicalRelevance: 'Physicians in managed care are evaluated on HEDIS measures (e.g., HbA1c control, mammography rates). Meeting HEDIS targets improves plan ratings and reimbursement.',
    examHighYield: false,
  },
  'cahps': {
    id: 'cahps',
    name: 'CAHPS (Consumer Assessment of Healthcare Providers and Systems)',
    category: 'quality-improvement',
    description: 'Standardized patient experience surveys measuring satisfaction with healthcare. HCAHPS (hospital version) is publicly reported and tied to Medicare reimbursement via Hospital Value-Based Purchasing Program.',
    keyPoints: [
      'HCAHPS: 29-item hospital patient experience survey',
      'Domains: communication, responsiveness, environment, discharge info, overall rating',
      'Results publicly reported on Hospital Compare (CMS website)',
      'Tied to Medicare reimbursement via Value-Based Purchasing',
      'Patient experience is distinct from patient satisfaction; measures specific care processes',
    ],
    clinicalRelevance: 'Patient experience scores affect hospital reimbursement and reputation. Communication skills training directly improves CAHPS/HCAHPS scores.',
    examHighYield: false,
  },
  'patient-safety-organizations': {
    id: 'patient-safety-organizations',
    name: 'Patient Safety Organizations (PSOs)',
    category: 'quality-improvement',
    description: 'Entities federally listed under the Patient Safety and Quality Improvement Act of 2005 that collect, analyze, and report patient safety data in a protected environment. PSO protections encourage voluntary reporting by shielding data from discovery in litigation.',
    keyPoints: [
      'Created by Patient Safety and Quality Improvement Act (2005)',
      'Patient Safety Work Product (PSWP) is privileged and confidential',
      'Encourage reporting by protecting data from legal discovery',
      'Analyze patterns of errors to develop system-level improvements',
      'AHRQ oversees listing and delisting of PSOs',
    ],
    clinicalRelevance: 'PSOs enable non-punitive error reporting, essential for a safety culture. Providers can report errors without fear of litigation, facilitating system improvement.',
    examHighYield: false,
  },
  'joint-commission': {
    id: 'joint-commission',
    name: 'The Joint Commission (TJC)',
    category: 'quality-improvement',
    description: 'Independent nonprofit that accredits and certifies US healthcare organizations. Accreditation is deemed status for Medicare participation. Establishes National Patient Safety Goals (NPSGs) and conducts unannounced surveys.',
    keyPoints: [
      'Accredits >22,000 US healthcare organizations',
      'Deemed status: TJC accreditation satisfies Medicare certification requirements',
      'National Patient Safety Goals (NPSGs): improve patient ID, communication, medication safety, infection prevention',
      'Unannounced surveys every 18-39 months',
      'Sentinel event policy requires root cause analysis (RCA) for serious events',
    ],
    clinicalRelevance: 'TJC standards shape hospital policies, protocols, and workflows. NPSGs like two-patient-identifier verification are daily clinical practice.',
    examHighYield: true,
  },
  'cms': {
    id: 'cms',
    name: 'CMS (Centers for Medicare & Medicaid Services)',
    category: 'quality-improvement',
    description: 'Federal agency administering Medicare, Medicaid, CHIP, and ACA marketplaces. Sets payment rates, conditions of participation, quality programs, and coverage decisions. Largest purchaser of healthcare in the world.',
    keyPoints: [
      'Administers Medicare, Medicaid, CHIP, and ACA marketplace programs',
      'Sets physician fee schedule (MPFS) and hospital payment rates',
      'Quality programs: Hospital VBP, MIPS, Hospital Readmissions Reduction Program',
      'National Coverage Determinations (NCDs) define covered services',
      'Innovation Center (CMMI) tests new payment and delivery models',
    ],
    clinicalRelevance: 'CMS policies directly determine reimbursement, quality requirements, and coverage for the majority of US patients. Understanding CMS programs essential for practice management.',
    examHighYield: true,
  },

  // =========================================================================
  // CLINICAL TRIALS
  // =========================================================================
  'fda-drug-approval': {
    id: 'fda-drug-approval',
    name: 'FDA Drug Approval Process',
    category: 'clinical-trials',
    description: 'Multi-step regulatory pathway from preclinical testing through post-market surveillance. Preclinical (animal studies) -> IND application -> Phase I (safety/dosing) -> Phase II (efficacy/side effects) -> Phase III (large-scale RCTs) -> NDA/BLA -> Phase IV (post-market surveillance).',
    keyPoints: [
      'Preclinical: in vitro and animal studies for safety/pharmacology',
      'IND (Investigational New Drug) application required before human testing',
      'Phase I: small group (20-80), safety, pharmacokinetics, dosing',
      'Phase II: larger group (100-300), efficacy, side effects, dose-response',
      'Phase III: large RCTs (1000-3000+), definitive efficacy and safety vs. standard of care',
      'NDA/BLA submission; FDA review; Phase IV post-market surveillance',
    ],
    clinicalRelevance: 'Average development timeline: 10-15 years. Accelerated approval and breakthrough therapy designations expedite access for serious conditions with unmet need.',
    examHighYield: true,
  },
  'irb-process': {
    id: 'irb-process',
    name: 'IRB (Institutional Review Board) Process',
    category: 'clinical-trials',
    description: 'Committee that reviews and monitors research involving human subjects to ensure ethical conduct. Required by federal regulations (Common Rule, 45 CFR 46). Reviews risks/benefits, informed consent, vulnerable populations, and data safety.',
    keyPoints: [
      'Required for all federally funded human subjects research',
      'Reviews: scientific design, risk/benefit ratio, informed consent, privacy protections',
      'Special protections for vulnerable populations: prisoners, children, pregnant women, cognitively impaired',
      'Three levels: exempt, expedited, full board review',
      'Based on Belmont Report principles: respect for persons, beneficence, justice',
    ],
    clinicalRelevance: 'All clinical research at institutions receiving federal funding requires IRB approval. Physicians involved in research must understand IRB requirements.',
    examHighYield: true,
  },
  'clinical-trial-phases': {
    id: 'clinical-trial-phases',
    name: 'Clinical Trial Phases',
    category: 'clinical-trials',
    description: 'Sequential phases of human clinical trials designed to evaluate safety, efficacy, and optimal use of new interventions. Each phase answers specific questions with increasing sample sizes.',
    keyPoints: [
      'Phase 0: micro-dosing studies; pharmacokinetics only (<15 subjects)',
      'Phase I: first-in-human; safety, dosing, pharmacokinetics (20-80 subjects)',
      'Phase II: efficacy signal, dose-response, common adverse effects (100-300 subjects)',
      'Phase III: definitive efficacy/safety RCTs; basis for FDA approval (1,000-3,000+)',
      'Phase IV: post-marketing surveillance; rare adverse effects, long-term safety',
    ],
    clinicalRelevance: 'Understanding phases helps interpret drug development news. Phase III results are most clinically relevant. Phase IV detects rare but serious adverse effects (e.g., rofecoxib withdrawal).',
    examHighYield: true,
  },
  'belmont-report': {
    id: 'belmont-report',
    name: 'Belmont Report',
    category: 'clinical-trials',
    description: '1979 foundational document establishing ethical principles for human subjects research: respect for persons (autonomy/informed consent), beneficence (maximize benefits/minimize harm), and justice (fair distribution of research burdens and benefits).',
    keyPoints: [
      'Respect for persons: informed consent, protection of those with diminished autonomy',
      'Beneficence: do no harm, maximize benefit-to-risk ratio',
      'Justice: fair selection of subjects; burdens and benefits equitably distributed',
      'Response to Tuskegee syphilis study and other research abuses',
      'Foundation of the Common Rule (45 CFR 46) governing human subjects research',
    ],
    clinicalRelevance: 'Bedrock of research ethics. Every IRB application is evaluated against Belmont principles. Historical abuses (Tuskegee, Guatemala experiments) motivate ongoing vigilance.',
    examHighYield: true,
  },

  // =========================================================================
  // HEALTHCARE DELIVERY
  // =========================================================================
  'gme-funding': {
    id: 'gme-funding',
    name: 'Graduate Medical Education (GME) Funding',
    category: 'healthcare-delivery',
    description: 'Medicare is the primary funder of physician residency training in the US via Direct GME (DGME) payments for resident salaries/benefits and Indirect Medical Education (IME) adjustments for teaching hospital costs. Residency slots have been capped since the Balanced Budget Act of 1997.',
    keyPoints: [
      'Medicare DGME pays resident salaries, benefits, and program overhead',
      'Medicare IME provides payment adjustment recognizing higher teaching hospital costs',
      'Resident cap frozen since BBA 1997 at ~100,000 Medicare-funded positions',
      'Cap contributes to physician workforce shortages, especially in primary care and rural areas',
      'Some states supplement GME through Medicaid; VA system funds ~10% of residency positions',
    ],
    clinicalRelevance: 'GME funding structure shapes residency availability and physician workforce distribution. Advocacy for cap reform is a major policy issue.',
    examHighYield: false,
  },
  'healthcare-workforce': {
    id: 'healthcare-workforce',
    name: 'Healthcare Workforce and Physician Shortage',
    category: 'healthcare-delivery',
    description: 'Projected shortage of 37,800-124,000 physicians by 2034 (AAMC), driven by population growth, aging, and retirement. Shortages are most severe in primary care and rural areas. Solutions include GME expansion, scope-of-practice reform, telehealth, and international medical graduates.',
    keyPoints: [
      'Primary care and rural areas most affected by physician shortages',
      'GME residency cap limits training pipeline',
      'NP/PA scope-of-practice expansion is a policy response (controversial)',
      'J-1 visa waiver programs attract IMGs to underserved areas',
      'Burnout and early retirement worsen supply projections',
    ],
    clinicalRelevance: 'Workforce shortages directly affect patient access to care. Understanding workforce policy informs advocacy and career planning.',
    examHighYield: false,
  },
  'universal-healthcare-models': {
    id: 'universal-healthcare-models',
    name: 'Universal Healthcare Models',
    category: 'healthcare-delivery',
    description: 'Systems ensuring all residents have access to healthcare. Major models: Beveridge (government-owned, tax-funded, e.g., UK NHS), Bismarck (employer-based insurance with sickness funds, e.g., Germany), National Health Insurance (single public payer with private delivery, e.g., Canada), and Out-of-Pocket (no organized system).',
    keyPoints: [
      'Beveridge: government provides and finances care (UK, Spain, Scandinavia)',
      'Bismarck: mandatory private insurance through employers, nonprofits (Germany, Japan, France)',
      'National Health Insurance: single government payer, private providers (Canada, Taiwan)',
      'US is a hybrid: Medicare (NHI model), VA (Beveridge), employer insurance (Bismarck), uninsured (out-of-pocket)',
      'No country has a purely single model; all are hybrids to varying degrees',
    ],
    clinicalRelevance: 'Understanding international models informs US healthcare reform debate. Each model has trade-offs in access, cost, quality, and wait times.',
    examHighYield: true,
  },
  'single-payer-vs-multi-payer': {
    id: 'single-payer-vs-multi-payer',
    name: 'Single-Payer vs. Multi-Payer Systems',
    category: 'healthcare-delivery',
    description: 'Single-payer: one entity (usually government) finances care for all (e.g., Canada, Taiwan). Multi-payer: multiple insurers (public and private) provide coverage (e.g., US, Germany). Key differences in administrative costs, price negotiation power, equity, and innovation incentives.',
    keyPoints: [
      'Single-payer: lower administrative costs (~2% vs ~12-18%), monopsony bargaining power',
      'Multi-payer: more choice, potential innovation incentives, risk of coverage gaps',
      'US administrative costs are highest globally (~34% of healthcare spending)',
      'Single-payer simplifies billing but may produce wait times for elective services',
      'Medicare-for-All proposals are single-payer models applied to the US context',
    ],
    clinicalRelevance: 'Central to US healthcare reform debate. Physicians should understand trade-offs to engage in policy discussions and advocacy.',
    examHighYield: true,
  },

  // =========================================================================
  // HEALTH EQUITY
  // =========================================================================
  'social-determinants-of-health': {
    id: 'social-determinants-of-health',
    name: 'Social Determinants of Health (SDOH)',
    category: 'health-equity',
    description: 'Non-medical conditions affecting health outcomes: economic stability, education, healthcare access, neighborhood/built environment, and social/community context. Account for 30-55% of health outcomes versus ~10-20% for medical care. Healthy People 2030 framework.',
    keyPoints: [
      'Five domains: economic stability, education, healthcare access, neighborhood, social context',
      'SDOH account for 30-55% of health outcomes',
      'ICD-10 Z-codes allow documentation of social risk factors',
      'Screening tools: PRAPARE, AHC HRSN, SDOH-specific questionnaires',
      'Addressing SDOH requires cross-sector partnerships beyond healthcare',
    ],
    clinicalRelevance: 'Screen for food insecurity, housing instability, transportation barriers, and interpersonal violence. Addressing SDOH improves treatment adherence and outcomes.',
    examHighYield: true,
  },
  'health-disparities': {
    id: 'health-disparities',
    name: 'Health Disparities',
    category: 'health-equity',
    description: 'Preventable differences in disease burden, injury, violence, or opportunities to achieve optimal health linked to social, economic, or environmental disadvantage. Rooted in structural racism, poverty, unequal resource distribution, and implicit bias.',
    keyPoints: [
      'Black maternal mortality 2-3x higher than White maternal mortality',
      'Black men have highest age-adjusted cancer mortality',
      'Rural populations: less specialty access, higher opioid overdose rates',
      'Implicit bias in clinical decision-making contributes to disparities',
      'Disaggregated data essential for identifying and tracking disparities',
    ],
    clinicalRelevance: 'Physicians must recognize and actively work to reduce disparities in their clinical practice, research, and policy advocacy.',
    examHighYield: true,
  },
  'health-equity': {
    id: 'health-equity',
    name: 'Health Equity',
    category: 'health-equity',
    description: 'The principle that everyone has a fair and just opportunity to attain their highest level of health. Requires removing systemic barriers (poverty, discrimination, unequal access) and addressing root causes of health disparities. Equity differs from equality: equity allocates resources based on need.',
    keyPoints: [
      'Equity = resources based on need; equality = same resources for all',
      'Achieving equity requires addressing structural/systemic barriers',
      'Health in All Policies (HiAP) approach: embed health equity across government sectors',
      'Anti-racism in medicine: examining institutional policies and clinical algorithms for bias',
      'Community engagement is essential for equitable health interventions',
    ],
    clinicalRelevance: 'Health equity is a core competency across medical education. Physicians serve as advocates for equitable policies and practices.',
    examHighYield: true,
  },
  'implicit-bias': {
    id: 'implicit-bias',
    name: 'Implicit Bias in Healthcare',
    category: 'health-equity',
    description: 'Unconscious attitudes and stereotypes affecting clinical decision-making and patient interactions. Studies demonstrate racial bias in pain management, referral patterns, cardiac catheterization rates, and communication. Can be mitigated through awareness, training, and structured clinical decision-making.',
    keyPoints: [
      'IAT (Implicit Association Test) demonstrates widespread unconscious bias among physicians',
      'Black patients less likely to receive adequate pain management and cardiac interventions',
      'Structured protocols and checklists reduce bias impact on clinical decisions',
      'Perspective-taking, counter-stereotypic imaging, and individuation help reduce bias',
      'Institutional policies (blind review, standardized criteria) address systemic bias',
    ],
    clinicalRelevance: 'Self-awareness of implicit bias is the first step. Using evidence-based protocols rather than gestalt reduces disparate treatment.',
    examHighYield: true,
  },

  // =========================================================================
  // ADDITIONAL ENTRIES
  // =========================================================================
  'accountable-care-organizations': {
    id: 'accountable-care-organizations',
    name: 'Accountable Care Organizations (ACOs)',
    category: 'payment-models',
    description: 'Networks of providers who share financial responsibility for providing coordinated, high-quality care to a defined patient population. Medicare Shared Savings Program (MSSP) is the largest ACO program. ACOs share savings (and sometimes losses) with CMS.',
    keyPoints: [
      'Voluntary groups of providers coordinating care for attributed patients',
      'Share savings if quality targets met and spending below benchmark',
      'Two-sided risk models also share financial losses',
      'Quality measured across domains: patient experience, care coordination, preventive health, at-risk populations',
      'Medicare MSSP, Next Generation ACO, and commercial ACO models',
    ],
    clinicalRelevance: 'ACOs are reshaping physician practice patterns toward population health management, care coordination, and prevention.',
    examHighYield: false,
  },
  'hipaa-research': {
    id: 'hipaa-research',
    name: 'HIPAA and Research',
    category: 'legal-regulatory',
    description: 'HIPAA Privacy Rule provisions specific to research use of PHI. Research use requires patient authorization, IRB/Privacy Board waiver, de-identified data, or limited data set with data use agreement. Balances research needs with patient privacy.',
    keyPoints: [
      'Research use of PHI requires authorization or waiver from IRB/Privacy Board',
      'De-identified data (Safe Harbor: remove 18 identifiers; or Expert Determination) exempt from HIPAA',
      'Limited data sets: some identifiers removed, requires data use agreement',
      'Waiver criteria: minimal risk, research impracticable without waiver, adequate privacy plan',
      'Preparatory to research: may review PHI to design study without authorization',
    ],
    clinicalRelevance: 'Physician-researchers must navigate HIPAA when designing studies, accessing medical records, and creating research databases.',
    examHighYield: false,
  },
  'medical-error-reporting': {
    id: 'medical-error-reporting',
    name: 'Medical Error and Reporting Systems',
    category: 'quality-improvement',
    description: 'Medical errors are the third leading cause of death in the US (~250,000 deaths/year). Just Culture model balances accountability with non-punitive reporting. Root cause analysis (RCA) investigates system factors. Swiss Cheese Model explains how multiple failures align to cause harm.',
    keyPoints: [
      'IOM "To Err Is Human" (1999): estimated 44,000-98,000 deaths/year from medical errors',
      'Just Culture: distinguishes human error (console), at-risk behavior (coach), reckless behavior (punish)',
      'Swiss Cheese Model: multiple layers of defenses; harm occurs when holes align',
      'Reporting systems: hospital incident reports, FDA MedWatch, AHRQ PSNet',
      'RCA asks "why" iteratively to identify system-level causes, not individual blame',
    ],
    clinicalRelevance: 'Non-punitive reporting culture is essential for patient safety. Physicians should report errors and near-misses through institutional systems.',
    examHighYield: true,
  },
  'never-events': {
    id: 'never-events',
    name: 'Never Events and Hospital-Acquired Conditions',
    category: 'quality-improvement',
    description: 'Serious, preventable adverse events that should never occur. CMS does not provide additional payment for treatment of certain hospital-acquired conditions (HACs). Examples: wrong-site surgery, retained foreign body, falls, catheter-associated infections.',
    keyPoints: [
      'CMS HAC Reduction Program penalizes bottom-quartile hospitals',
      'Wrong-site surgery, retained surgical items, and certain patient falls are never events',
      'CAUTI, CLABSI, SSI, pressure ulcers, and falls with injury are HACs',
      'Time-out/surgical safety checklist prevents wrong-site surgery',
      'Financial penalties incentivize prevention programs',
    ],
    clinicalRelevance: 'Adherence to safety checklists, infection prevention bundles, and fall prevention protocols is mandatory for all clinical staff.',
    examHighYield: true,
  },
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Get all entries as an array. */
export const getAllHealthPolicyEntries = (): HealthPolicyEntry[] =>
  Object.values(HEALTH_POLICY_ENTRIES);

/** Search entries by query matching id, name, description, keyPoints, or clinicalRelevance. */
export const searchHealthPolicyEntries = (query: string): HealthPolicyEntry[] => {
  const q = query.toLowerCase();
  return getAllHealthPolicyEntries().filter((e) => {
    const haystack = [e.id, e.name, e.description, e.clinicalRelevance, ...e.keyPoints]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
};

/** Filter entries by one or more categories. */
export const filterByHealthPolicyCategory = (
  categories: HealthPolicyCategory[],
): HealthPolicyEntry[] =>
  getAllHealthPolicyEntries().filter((e) => categories.includes(e.category));

/** Get a single entry by its id. */
export const getHealthPolicyEntryById = (id: string): HealthPolicyEntry | undefined =>
  HEALTH_POLICY_ENTRIES[id];

/** Get all high-yield exam entries. */
export const getHighYieldEntries = (): HealthPolicyEntry[] =>
  getAllHealthPolicyEntries().filter((e) => e.examHighYield);

/** Get all available categories with entry counts. */
export const getHealthPolicyCategoryCounts = (): Record<HealthPolicyCategory, number> => {
  const counts = {} as Record<HealthPolicyCategory, number>;
  for (const entry of getAllHealthPolicyEntries()) {
    counts[entry.category] = (counts[entry.category] || 0) + 1;
  }
  return counts;
};
