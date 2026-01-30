/**
 * Medical Ethics Database
 *
 * Comprehensive database of medical ethics entries for SOMA medical education.
 * Covers core principles, informed consent, end-of-life care, research ethics,
 * confidentiality, resource allocation, professionalism, reproductive ethics,
 * and pediatric ethics.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type MedicalEthicsCategory =
  | 'principles'
  | 'informed-consent'
  | 'end-of-life'
  | 'research-ethics'
  | 'confidentiality'
  | 'resource-allocation'
  | 'professionalism'
  | 'reproductive-ethics'
  | 'pediatric-ethics';

export interface MedicalEthicsEntry {
  id: string;
  name: string;
  category: MedicalEthicsCategory;
  description: string;
  ethicalPrinciples: string[];
  legalConsiderations: string[];
  clinicalScenarios: string[];
  decisionFramework: string[];
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const entry = (
  id: string,
  name: string,
  category: MedicalEthicsCategory,
  description: string,
  ethicalPrinciples: string[],
  legalConsiderations: string[],
  clinicalScenarios: string[],
  decisionFramework: string[],
  keyPearls: string[],
  references: string[],
): MedicalEthicsEntry => ({
  id,
  name,
  category,
  description,
  ethicalPrinciples,
  legalConsiderations,
  clinicalScenarios,
  decisionFramework,
  keyPearls,
  references,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const MEDICAL_ETHICS_ENTRIES: Record<string, MedicalEthicsEntry> = {

  // ── Principles ───────────────────────────────────────────────────────────

  'autonomy': entry(
    'autonomy',
    'Respect for Autonomy',
    'principles',
    'The ethical obligation to honor a patient\'s right to self-determination, including the freedom to make informed decisions about their own medical care without coercion.',
    [
      'Patients have the right to accept or refuse treatment based on personal values',
      'Autonomy requires adequate information, understanding, and voluntariness',
      'Respecting autonomy includes supporting patients who make decisions physicians disagree with',
      'Autonomy applies to competent adults; special considerations exist for minors and incapacitated patients',
    ],
    [
      'Informed consent laws codify autonomy protections in all U.S. jurisdictions',
      'The Patient Self-Determination Act (1990) requires hospitals to inform patients of advance directive rights',
      'Competent adults may refuse any treatment, including life-sustaining interventions',
      'Surrogate decision-making laws vary by state when patients lack capacity',
    ],
    [
      'A Jehovah\'s Witness refuses a blood transfusion during surgery despite life-threatening hemorrhage',
      'An elderly patient with full capacity declines recommended chemotherapy to prioritize quality of life',
      'A patient discharges against medical advice after being fully informed of risks',
    ],
    [
      'Verify the patient has decision-making capacity',
      'Provide clear, unbiased information about options, risks, and benefits',
      'Explore the patient\'s values and goals of care',
      'Document the informed decision and respect the patient\'s choice',
    ],
    [
      'Autonomy is not absolute — it may be limited when actions harm others (e.g., infectious disease quarantine)',
      'Respecting autonomy means supporting the process of decision-making, not just the outcome',
      'Cultural humility is essential: patients from collectivist cultures may prefer shared or family-based decision-making',
    ],
    [
      'Beauchamp TL, Childress JF. Principles of Biomedical Ethics. 8th ed. Oxford University Press; 2019.',
      'American Medical Association Code of Medical Ethics, Opinion 2.1.1',
      'Jonsen AR, Siegler M, Winslade WJ. Clinical Ethics. 8th ed. McGraw-Hill; 2015.',
    ],
  ),

  'beneficence': entry(
    'beneficence',
    'Beneficence',
    'principles',
    'The ethical duty to act in the best interest of the patient by promoting well-being, preventing harm, and actively contributing to their health and welfare.',
    [
      'Physicians have a positive obligation to benefit patients, not merely avoid harm',
      'Beneficence requires balancing potential benefits against risks of interventions',
      'Paternalism arises when beneficence overrides patient autonomy without justification',
      'The standard of care reflects the profession\'s commitment to beneficent practice',
    ],
    [
      'Medical malpractice law is rooted in the duty of beneficence — failing to meet standard of care',
      'Good Samaritan laws protect providers acting beneficently in emergencies',
      'Fiduciary duty requires physicians to place patient interests above personal gain',
      'Professional licensing standards enforce minimum competency as a form of beneficence',
    ],
    [
      'A physician recommends surgery with clear survival benefit despite the patient\'s fear of the procedure',
      'An oncologist discusses palliative care when further aggressive treatment offers minimal benefit',
      'A primary care physician arranges social work referral for a patient lacking medication access',
    ],
    [
      'Assess the expected benefits of the proposed intervention',
      'Weigh benefits against potential harms and burdens to the patient',
      'Consider the patient\'s own definition of benefit and well-being',
      'Act to maximize benefit while respecting autonomy',
    ],
    [
      'Beneficence does not justify overriding a competent patient\'s informed refusal',
      'Paternalism is beneficence without autonomy — it is rarely ethically justified in modern practice',
      'The obligation of beneficence extends beyond individual patients to public health duties',
    ],
    [
      'Beauchamp TL, Childress JF. Principles of Biomedical Ethics. 8th ed. Oxford University Press; 2019.',
      'Pellegrino ED, Thomasma DC. For the Patient\'s Good. Oxford University Press; 1988.',
      'AMA Code of Medical Ethics, Opinion 1.1.1 — Patient-Physician Relationships',
    ],
  ),

  'nonmaleficence': entry(
    'nonmaleficence',
    'Nonmaleficence',
    'principles',
    'The foundational ethical principle of "primum non nocere" — first, do no harm. Physicians must avoid causing unnecessary injury or suffering to patients through acts of commission or omission.',
    [
      'Nonmaleficence prohibits intentional harm and requires due care to avoid negligent harm',
      'The principle applies to physical, psychological, and social dimensions of harm',
      'Risk of harm must be proportionate to expected benefit (principle of double effect)',
      'Futile or non-beneficial treatments that prolong suffering may violate nonmaleficence',
    ],
    [
      'Negligence law holds physicians accountable for foreseeable harm due to substandard care',
      'The doctrine of double effect is legally recognized in end-of-life care (e.g., opioid use for pain)',
      'Product liability and medication error statutes address systemic harm prevention',
      'Sentinel event reporting and root cause analysis are legally mandated harm reduction measures',
    ],
    [
      'A surgeon decides against an operation when surgical risk substantially exceeds potential benefit',
      'A physician avoids prescribing opioids to a patient with high addiction risk when safer alternatives exist',
      'An ICU team considers discontinuing aggressive measures that only prolong the dying process',
    ],
    [
      'Evaluate whether the proposed action carries risk of harm',
      'Determine whether harm is proportionate to expected benefit',
      'Consider less harmful alternatives that achieve similar outcomes',
      'Apply the principle of double effect when harm is a foreseeable side effect of a beneficial action',
    ],
    [
      'Nonmaleficence is the most basic obligation — it takes priority when principles conflict',
      'The principle of double effect permits foreseeable harm only if the intended effect is beneficial',
      'Medical errors are the third leading cause of death in the U.S., underscoring systemic nonmaleficence failures',
    ],
    [
      'Beauchamp TL, Childress JF. Principles of Biomedical Ethics. 8th ed. Oxford University Press; 2019.',
      'Gert B, Culver CM, Clouser KD. Bioethics: A Systematic Approach. 2nd ed. Oxford University Press; 2006.',
      'Makary MA, Daniel M. Medical error — the third leading cause of death in the US. BMJ. 2016;353:i2139.',
    ],
  ),

  'justice': entry(
    'justice',
    'Justice',
    'principles',
    'The ethical principle requiring fair, equitable, and appropriate distribution of healthcare resources, benefits, and burdens across individuals and populations.',
    [
      'Distributive justice demands equitable allocation of limited medical resources',
      'Equal cases should be treated equally; differences in treatment require morally relevant justification',
      'Health disparities based on race, sex, socioeconomic status, or geography violate justice',
      'Justice encompasses both individual clinical encounters and systemic healthcare policy',
    ],
    [
      'Title VI of the Civil Rights Act prohibits discrimination in federally funded healthcare',
      'EMTALA requires emergency departments to screen and stabilize all patients regardless of ability to pay',
      'The ACA expanded insurance coverage as a justice measure',
      'Organ allocation policies (UNOS) attempt to codify distributive justice criteria',
    ],
    [
      'An ICU bed shortage requires triage decisions during a pandemic surge',
      'A patient without insurance presents to the ED requiring expensive emergency surgery',
      'A transplant committee allocates a donated organ among several eligible recipients',
    ],
    [
      'Identify the scarce resource or benefit in question',
      'Apply fair allocation criteria (medical need, likelihood of benefit, time on waitlist)',
      'Ensure criteria are transparent, consistent, and free from bias',
      'Advocate for systemic changes that address root causes of inequity',
    ],
    [
      'Justice requires addressing social determinants of health, not only bedside decisions',
      'Microallocation (individual cases) and macroallocation (policy) both require justice analysis',
      'Implicit bias training is necessary but not sufficient to achieve health equity',
    ],
    [
      'Beauchamp TL, Childress JF. Principles of Biomedical Ethics. 8th ed. Oxford University Press; 2019.',
      'Daniels N. Just Health: Meeting Health Needs Fairly. Cambridge University Press; 2008.',
      'Braveman P. Health disparities and health equity. Annu Rev Public Health. 2006;27:167-194.',
    ],
  ),

  // ── Informed Consent ────────────────────────────────────────────────────

  'informed-consent-process': entry(
    'informed-consent-process',
    'Informed Consent Process',
    'informed-consent',
    'The ethical and legal process by which a patient voluntarily agrees to a proposed medical intervention after receiving adequate disclosure of its nature, risks, benefits, and alternatives.',
    [
      'Informed consent operationalizes respect for autonomy in clinical practice',
      'Five elements: disclosure, understanding, voluntariness, capacity, and consent',
      'The discussion itself is the consent — the signed form is merely documentation',
      'Consent is an ongoing process, not a single event',
    ],
    [
      'Canterbury v. Spence (1972) established the reasonable patient standard for disclosure',
      'Most jurisdictions require disclosure of risks a reasonable patient would consider material',
      'Failure to obtain informed consent can constitute battery or negligence',
      'Special requirements apply to experimental treatments and surgical procedures',
    ],
    [
      'A surgeon explains the risks, benefits, and alternatives before a scheduled appendectomy',
      'A patient with limited English proficiency requires interpreter services during the consent discussion',
      'A patient changes their mind about a procedure after signing the consent form',
    ],
    [
      'Assess the patient\'s capacity to make the specific decision at hand',
      'Disclose the diagnosis, proposed treatment, risks, benefits, and alternatives including no treatment',
      'Verify understanding using teach-back or other confirmation methods',
      'Ensure the decision is voluntary and document the discussion',
    ],
    [
      'Consent is decision-specific: a patient may have capacity for one decision but not another',
      'Therapeutic privilege (withholding information to avoid harm) is rarely justified and legally risky',
      'Implied consent applies in true emergencies when the patient is unable to communicate',
    ],
    [
      'Appelbaum PS. Assessment of patients\' competence to consent to treatment. N Engl J Med. 2007;357:1834-1840.',
      'Canterbury v. Spence, 464 F.2d 772 (D.C. Cir. 1972).',
      'AMA Code of Medical Ethics, Opinion 2.1.1 — Informed Consent.',
    ],
  ),

  'capacity-assessment': entry(
    'capacity-assessment',
    'Decision-Making Capacity Assessment',
    'informed-consent',
    'The clinical evaluation of whether a patient can make a specific medical decision, assessing their ability to understand, appreciate, reason, and communicate a choice.',
    [
      'Capacity is clinical and decision-specific; competency is a legal determination by a court',
      'All adult patients are presumed to have capacity unless demonstrated otherwise',
      'Capacity can fluctuate (e.g., delirium, intoxication, acute psychiatric episodes)',
      'A patient may lack capacity for one decision while retaining it for others',
    ],
    [
      'Only a court can declare a person legally incompetent and appoint a guardian',
      'Physicians assess capacity; the legal system determines competency',
      'Treating a patient who lacks capacity without proper surrogate consent may constitute battery',
      'State laws define hierarchies of surrogate decision-makers when patients lack capacity',
    ],
    [
      'An intoxicated trauma patient refuses a life-saving intervention',
      'A patient with mild dementia wants to refuse placement in a skilled nursing facility',
      'A psychiatric inpatient on a 72-hour hold requests to leave the hospital',
    ],
    [
      'Assess four abilities: understanding, appreciation, reasoning, and expressing a choice',
      'Use a standardized tool (e.g., MacCAT-T) when the assessment is complex',
      'Re-assess when the clinical condition changes or the decision changes',
      'If capacity is absent, identify the appropriate surrogate decision-maker',
    ],
    [
      'A bad decision does not equal lack of capacity — patients may make unwise but autonomous choices',
      'Capacity assessment should be proportionate to the stakes of the decision',
      'Psychiatric illness alone does not negate capacity; functional assessment is required',
    ],
    [
      'Appelbaum PS. Assessment of patients\' competence to consent to treatment. N Engl J Med. 2007;357:1834-1840.',
      'Grisso T, Appelbaum PS. Assessing Competence to Consent to Treatment. Oxford University Press; 1998.',
      'Sessums LL, et al. Does this patient have medical decision-making capacity? JAMA. 2011;306:420-427.',
    ],
  ),

  'exceptions-to-informed-consent': entry(
    'exceptions-to-informed-consent',
    'Exceptions to Informed Consent',
    'informed-consent',
    'Recognized circumstances in which treatment may proceed without the standard informed consent process, including emergencies, therapeutic privilege, waiver, and incapacity.',
    [
      'Exceptions exist to prevent harm when standard consent is not feasible',
      'Emergency exception applies when delay would result in death or serious harm',
      'Therapeutic privilege is the most controversial and narrowly applied exception',
      'Patient waiver occurs when a patient voluntarily delegates decision-making',
    ],
    [
      'Emergency exception is legally recognized in all jurisdictions',
      'Implied consent presumes a reasonable person would consent to emergency life-saving treatment',
      'Therapeutic privilege has been narrowed or eliminated in many jurisdictions',
      'Public health exceptions allow mandatory treatment for certain communicable diseases',
    ],
    [
      'An unconscious patient arrives in the ED with a ruptured aortic aneurysm requiring immediate surgery',
      'A patient tells the physician: "I trust you — just do whatever you think is best"',
      'A patient with active tuberculosis refuses treatment that is mandated by public health law',
    ],
    [
      'Determine whether a recognized exception applies to the specific clinical situation',
      'Document the basis for proceeding without standard consent',
      'Obtain consent from a surrogate if available and time permits',
      'Re-engage the consent process as soon as the patient regains capacity',
    ],
    [
      'Emergency exception does not apply if there is time to obtain consent or contact a surrogate',
      'Therapeutic privilege should almost never be invoked — it risks paternalism and legal liability',
      'Waiver of consent should be explicitly documented and the patient should understand they can re-engage at any time',
    ],
    [
      'Appelbaum PS. Assessment of patients\' competence to consent to treatment. N Engl J Med. 2007;357:1834-1840.',
      'Meisel A, Kuczewski M. Legal and ethical myths about informed consent. Arch Intern Med. 1996;156:2521-2526.',
      'AMA Code of Medical Ethics, Opinion 2.1.1.',
    ],
  ),

  // ── End of Life ─────────────────────────────────────────────────────────

  'advance-directives': entry(
    'advance-directives',
    'Advance Directives',
    'end-of-life',
    'Legal documents that allow individuals to specify their healthcare preferences and designate surrogate decision-makers in the event they lose decision-making capacity.',
    [
      'Advance directives extend patient autonomy beyond the point of incapacity',
      'Living wills specify desired or refused treatments in particular clinical scenarios',
      'Durable power of attorney for healthcare designates a surrogate decision-maker',
      'Directives should reflect the patient\'s values, not just medical preferences',
    ],
    [
      'The Patient Self-Determination Act (1990) requires federally funded facilities to inform patients about advance directives',
      'Advance directives are governed by state law and vary in form and scope',
      'HIPAA permits sharing advance directives with treating providers',
      'Directives must be executed while the patient has capacity; notarization or witness requirements vary by state',
    ],
    [
      'A patient with ALS completes a living will refusing mechanical ventilation if unable to breathe independently',
      'A healthy 40-year-old designates their spouse as healthcare proxy during routine care planning',
      'Family members disagree about the wishes of an incapacitated patient who has no written directive',
    ],
    [
      'Initiate advance care planning conversations early, ideally when the patient is healthy',
      'Help the patient articulate values, goals, and specific treatment preferences',
      'Document and upload directives to the medical record; provide copies to the surrogate',
      'Revisit and update directives after major health changes or life events',
    ],
    [
      'An advance directive is only activated when the patient loses decision-making capacity',
      'Surrogate decisions should follow substituted judgment (what the patient would want), not best interest alone',
      'Having the conversation matters more than the paperwork — documented verbal wishes carry weight',
    ],
    [
      'Silveira MJ, Kim SY, Langa KM. Advance directives and outcomes of surrogate decision making before death. N Engl J Med. 2010;362:1211-1218.',
      'Sudore RL, et al. Defining advance care planning for adults: a consensus definition. J Pain Symptom Manage. 2017;53:821-832.',
      'Patient Self-Determination Act, 42 U.S.C. §§ 1395cc, 1396a (1990).',
    ],
  ),

  'dnr-polst': entry(
    'dnr-polst',
    'DNR Orders and POLST',
    'end-of-life',
    'Do-Not-Resuscitate (DNR) orders and Physician Orders for Life-Sustaining Treatment (POLST) are medical orders that translate patient preferences regarding resuscitation and life-sustaining treatments into actionable directives.',
    [
      'DNR orders apply specifically to cardiopulmonary resuscitation; they do not limit other treatments',
      'POLST forms are portable medical orders covering CPR, intubation, antibiotics, and artificial nutrition',
      'POLST is intended for patients with serious illness or advanced frailty',
      'These orders reflect shared decision-making between the patient (or surrogate) and physician',
    ],
    [
      'DNR orders are recognized in all U.S. states; out-of-hospital DNR laws vary',
      'POLST has legal standing in most states as a physician order, not merely a preference document',
      'Prehospital personnel (EMS) generally must follow POLST/out-of-hospital DNR orders',
      'DNR status during surgery requires explicit re-discussion ("required reconsideration")',
    ],
    [
      'A terminally ill cancer patient requests DNR status and completion of a POLST form',
      'A patient with DNR orders is scheduled for elective surgery — the anesthesiologist discusses perioperative resuscitation',
      'EMS arrives at a nursing home where a patient with a signed POLST has arrested',
    ],
    [
      'Assess the patient\'s prognosis, goals, and understanding of resuscitation outcomes',
      'Clarify that DNR does not mean "do not treat" — full care continues unless otherwise specified',
      'Complete POLST only for patients with serious illness after a goals-of-care conversation',
      'Review and update orders with each significant change in clinical status',
    ],
    [
      'DNR does not equal comfort care only — patients with DNR orders may still receive ICU-level treatment',
      'POLST is complementary to, not a replacement for, advance directives',
      'Survival to discharge after in-hospital cardiac arrest is approximately 25%, lower in patients with advanced illness',
    ],
    [
      'POLST – National POLST website, polst.org.',
      'AMA Code of Medical Ethics, Opinion 5.3 — Withholding or Withdrawing Life-Sustaining Treatment.',
      'Blinderman CD, Krakauer EL. Goals of care in resuscitation: DNR and beyond. J Gen Intern Med. 2016;31:1488-1494.',
    ],
  ),

  'withdrawal-of-treatment': entry(
    'withdrawal-of-treatment',
    'Withdrawal of Life-Sustaining Treatment',
    'end-of-life',
    'The ethically and legally permissible discontinuation of medical interventions that sustain life, such as mechanical ventilation, vasopressors, dialysis, or artificial nutrition, when continued treatment is inconsistent with the patient\'s wishes or best interests.',
    [
      'Withdrawing treatment is ethically equivalent to withholding treatment',
      'The right to refuse treatment includes the right to discontinue treatment already started',
      'The intent is to remove a burdensome intervention, not to cause death',
      'Comfort-focused care must be provided during and after withdrawal',
    ],
    [
      'Cruzan v. Director, Missouri Dept. of Health (1990) affirmed the right to refuse treatment',
      'No legal distinction exists between withdrawing and withholding treatment',
      'Withdrawal requires informed consent from the patient or authorized surrogate',
      'Physicians are not required to provide treatments they deem medically futile',
    ],
    [
      'A family requests withdrawal of mechanical ventilation for a patient with irreversible brain injury',
      'A surrogate requests discontinuation of dialysis for a patient in persistent vegetative state',
      'A patient with advanced COPD requests removal of the ventilator to transition to comfort care',
    ],
    [
      'Confirm the patient or surrogate is making an informed, voluntary decision',
      'Convene a family meeting with the care team, chaplain, and palliative care',
      'Develop a withdrawal protocol with symptom management (dyspnea, pain, anxiety)',
      'Document the decision, rationale, and plan; consider ethics consultation if disagreement exists',
    ],
    [
      'Withdrawal is NOT euthanasia — the underlying disease causes death, not the removal of technology',
      'Emotional distress for families and staff is expected; provide support for all involved',
      'Terminal extubation and terminal weaning are both acceptable withdrawal approaches',
    ],
    [
      'Cruzan v. Director, Missouri Dept. of Health, 497 U.S. 261 (1990).',
      'Truog RD, et al. Recommendations for end-of-life care in the ICU. Crit Care Med. 2008;36:953-963.',
      'Bosslet GT, et al. An official ATS/AACN/ACCP/ESICM/SCCM policy statement: responding to requests for futile treatment. Am J Respir Crit Care Med. 2015;191:1318-1330.',
    ],
  ),

  'physician-assisted-death': entry(
    'physician-assisted-death',
    'Physician-Assisted Death',
    'end-of-life',
    'The practice in which a physician provides a competent, terminally ill patient with a prescription for a lethal medication that the patient may voluntarily self-administer to end their life.',
    [
      'Proponents frame it as the ultimate expression of patient autonomy at end of life',
      'Opponents argue it conflicts with nonmaleficence and the physician\'s role as healer',
      'Distinguished from euthanasia: the patient, not the physician, administers the medication',
      'Palliative care should be offered as a comprehensive alternative or complement',
    ],
    [
      'Legal in several U.S. states (Oregon Death with Dignity Act, 1997, was the first)',
      'Typical safeguards: terminal diagnosis with <6 months prognosis, two oral requests, written request, waiting period, two physician confirmations, mental health evaluation if concern for depression',
      'The federal Controlled Substances Act does not preempt state laws (Gonzales v. Oregon, 2006)',
      'No physician is required to participate — conscientious objection is protected',
    ],
    [
      'A patient with metastatic pancreatic cancer in Oregon requests a prescription under the Death with Dignity Act',
      'A depressed patient with terminal illness requests assisted death — how to distinguish autonomous request from treatable depression',
      'A physician personally opposed to assisted death receives a request in a state where it is legal',
    ],
    [
      'Verify the patient meets all legal criteria in the applicable jurisdiction',
      'Assess decision-making capacity and screen for depression or coercion',
      'Ensure robust palliative care has been offered and goals of care explored',
      'If conscientiously opposed, refer the patient to a willing provider without abandoning care',
    ],
    [
      'Data from Oregon show no evidence of disproportionate use among vulnerable populations',
      'Most patients who obtain prescriptions cite loss of autonomy and dignity, not pain, as primary motivation',
      'A significant percentage of patients who receive prescriptions never take the medication',
    ],
    [
      'Oregon Death with Dignity Act, ORS 127.800-127.897.',
      'Gonzales v. Oregon, 546 U.S. 243 (2006).',
      'Emanuel EJ, et al. Attitudes and practices of euthanasia and physician-assisted suicide. N Engl J Med. 2016;374:553-563.',
    ],
  ),

  'medical-futility': entry(
    'medical-futility',
    'Medical Futility',
    'end-of-life',
    'The concept that certain medical interventions are futile when they cannot achieve any meaningful physiological or patient-centered goal, raising the question of whether physicians are obligated to provide treatments they consider non-beneficial.',
    [
      'Quantitative futility: treatment has failed in the last 100 cases or has < 1% chance of success',
      'Qualitative futility: treatment may achieve a physiological effect but not a patient-centered benefit',
      'Futility debates often involve conflict between physician judgment and family demands',
      'Unilateral withdrawal of futile treatment remains ethically and legally contested',
    ],
    [
      'Texas Advance Directives Act allows hospitals to withdraw futile treatment after due process',
      'Most states lack specific futility legislation; disputes may require court intervention',
      'The AMA and major critical care societies support a fair process approach to futility disputes',
      'Hospital ethics committees serve as mediators in futility conflicts',
    ],
    [
      'A family insists on continued CPR for a patient with multi-organ failure and no chance of recovery',
      'A physician believes ICU admission is futile for a patient with end-stage metastatic disease',
      'A hospital ethics committee is consulted when family and providers cannot reach agreement',
    ],
    [
      'Define the treatment goal and whether any intervention can achieve it',
      'Engage the patient or surrogate in a goals-of-care discussion',
      'Involve palliative care and ethics consultation early in disagreements',
      'Follow institutional fair process policies if consensus cannot be reached',
    ],
    [
      'There is no ethical obligation to provide truly futile interventions',
      'The term "futility" is often used imprecisely — define the specific goal that cannot be met',
      'Process-based approaches (institutional review, transfer options) are preferred over unilateral decisions',
    ],
    [
      'Schneiderman LJ, Jecker NS, Jonsen AR. Medical futility: its meaning and ethical implications. Ann Intern Med. 1990;112:949-954.',
      'Bosslet GT, et al. An official ATS/AACN/ACCP/ESICM/SCCM policy statement on futile treatment. Am J Respir Crit Care Med. 2015;191:1318-1330.',
      'Texas Health & Safety Code § 166.046 — Procedure If Not Effectuating a Directive or Treatment Decision.',
    ],
  ),

  // ── Confidentiality ─────────────────────────────────────────────────────

  'confidentiality-hipaa': entry(
    'confidentiality-hipaa',
    'Confidentiality and HIPAA',
    'confidentiality',
    'The ethical duty and legal obligation to protect patient health information from unauthorized disclosure, codified primarily through the Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule.',
    [
      'Confidentiality is rooted in respect for autonomy and the trust essential to the patient-physician relationship',
      'Protected health information (PHI) includes any individually identifiable health data',
      'Minimum necessary standard: share only the PHI needed for the intended purpose',
      'Breaches of confidentiality can erode trust and deter patients from seeking care',
    ],
    [
      'HIPAA Privacy Rule (2003) establishes national standards for PHI protection',
      'PHI may be disclosed without authorization for treatment, payment, and healthcare operations (TPO)',
      'Patients have the right to access, amend, and receive an accounting of disclosures of their PHI',
      'HIPAA violations carry civil penalties up to $1.9 million per violation category per year',
    ],
    [
      'A medical student discusses a patient case in a hospital elevator where visitors can overhear',
      'A celebrity is hospitalized and staff access the chart out of curiosity (snooping)',
      'A patient requests that their diagnosis not be shared with a family member present in the room',
    ],
    [
      'Apply the minimum necessary standard to all disclosures',
      'Verify the identity and authority of anyone requesting PHI',
      'Discuss sensitive information in private settings only',
      'Follow institutional procedures for breach notification and reporting',
    ],
    [
      'Talking about patients in public spaces is the most common confidentiality breach in training environments',
      'Social media posts that contain identifiable patient details violate HIPAA, even without names',
      'HIPAA does not prevent communication between treating providers — treatment is a permitted use',
    ],
    [
      'Health Insurance Portability and Accountability Act of 1996, Pub. L. 104-191.',
      '45 CFR Parts 160, 164 — HIPAA Privacy and Security Rules.',
      'AMA Code of Medical Ethics, Opinion 3.2.1 — Confidentiality.',
    ],
  ),

  'mandatory-reporting': entry(
    'mandatory-reporting',
    'Mandatory Reporting Obligations',
    'confidentiality',
    'Legal exceptions to patient confidentiality that require physicians to report certain conditions or situations to public authorities, including child abuse, elder abuse, communicable diseases, and threats of violence.',
    [
      'Mandatory reporting reflects a tension between confidentiality and the duty to protect vulnerable populations',
      'Reporting obligations override patient confidentiality by law',
      'Physicians should inform patients about reporting obligations when feasible, but reporting is not contingent on patient consent',
      'Failure to report can result in criminal penalties and civil liability',
    ],
    [
      'All 50 states mandate reporting of suspected child abuse and neglect',
      'Most states require reporting of elder abuse, domestic violence, and certain communicable diseases',
      'Tarasoff v. Regents (1976) established the duty to protect identifiable third parties from credible threats',
      'Gunshot and stab wound reporting is required in most jurisdictions',
    ],
    [
      'A pediatrician identifies bruises on a child inconsistent with the reported mechanism of injury',
      'A psychiatrist\'s patient makes a credible threat to harm a specific individual',
      'A physician diagnoses active tuberculosis in a patient who refuses treatment',
    ],
    [
      'Identify whether the clinical situation triggers a mandatory reporting obligation',
      'Report to the appropriate authority (child protective services, public health department, law enforcement)',
      'Document the report, including the basis for suspicion and the agency contacted',
      'Inform the patient about the report when clinically safe and appropriate to do so',
    ],
    [
      'Mandatory reporting requires suspicion, not proof — physicians are not investigators',
      'Good faith reporters are protected from liability by statute in all states',
      'Tarasoff-type duty varies by state: some require a duty to warn, others a duty to protect',
    ],
    [
      'Tarasoff v. Regents of the University of California, 17 Cal.3d 425 (1976).',
      'Child Abuse Prevention and Treatment Act (CAPTA), 42 U.S.C. §§ 5101-5107.',
      'AMA Code of Medical Ethics, Opinion 3.2.1 — Confidentiality.',
    ],
  ),

  'adolescent-confidentiality': entry(
    'adolescent-confidentiality',
    'Adolescent Confidentiality',
    'confidentiality',
    'Special confidentiality protections for adolescent patients regarding sensitive health topics including sexual health, substance use, and mental health, designed to encourage minors to seek care.',
    [
      'Adolescent confidentiality supports the developing autonomy of the minor patient',
      'Maintaining confidentiality encourages adolescents to seek care for sensitive issues',
      'Physicians must balance confidentiality with the duty to protect minors from serious harm',
      'Many adolescents will not seek care for STIs, contraception, or substance use if confidentiality is not assured',
    ],
    [
      'Minor consent laws in most states allow adolescents to consent for STI testing/treatment, contraception, substance abuse treatment, and mental health services without parental involvement',
      'HIPAA defers to state law on minor consent; when the minor lawfully consented, PHI protections apply',
      'Confidentiality may be breached if there is risk of serious harm (suicidality, abuse)',
      'Explanation of Benefits (EOB) from insurance may inadvertently disclose confidential care to parents',
    ],
    [
      'A 16-year-old requests STI testing without parental notification',
      'A 15-year-old discloses marijuana use and asks the physician not to tell their parents',
      'A 17-year-old reveals suicidal ideation during a confidential interview',
    ],
    [
      'Establish confidentiality at the beginning of every adolescent visit',
      'Explain the limits of confidentiality clearly (imminent danger to self or others)',
      'Know your state\'s minor consent laws for specific health services',
      'Discuss with the adolescent before breaching confidentiality, when safety permits',
    ],
    [
      'Begin speaking with adolescents privately starting around age 12',
      'The biggest barrier to adolescent healthcare access is fear of parental notification',
      'Insurance billing may unintentionally breach confidentiality — consider Title X or other confidential services',
    ],
    [
      'Ford CA, et al. Influence of physician confidentiality assurances on adolescents\' willingness to disclose information. JAMA. 1997;278:1029-1034.',
      'Society for Adolescent Health and Medicine. Confidentiality protections for adolescents. J Adolesc Health. 2004;35:160-167.',
      'Guttmacher Institute — An overview of minors\' consent law.',
    ],
  ),

  // ── Research Ethics ─────────────────────────────────────────────────────

  'research-ethics-irb': entry(
    'research-ethics-irb',
    'Research Ethics and Institutional Review Boards',
    'research-ethics',
    'The ethical framework and regulatory oversight system governing human subjects research, including the role of Institutional Review Boards (IRBs) in protecting research participants from harm and ensuring voluntary informed consent.',
    [
      'The Belmont Report (1979) established three core research ethics principles: respect for persons, beneficence, and justice',
      'IRBs are mandated to review all federally funded human subjects research',
      'Research participants must give voluntary informed consent with full disclosure of risks',
      'Equipoise — genuine uncertainty about which treatment is superior — justifies randomized trials',
    ],
    [
      'The Common Rule (45 CFR 46) provides the federal regulatory framework for human subjects protections',
      'IRBs must include at least one non-scientist and one member unaffiliated with the institution',
      'Vulnerable populations (prisoners, children, pregnant persons) receive additional regulatory protections',
      'Clinical trials must be registered on ClinicalTrials.gov per FDAAA (2007)',
    ],
    [
      'A researcher proposes a randomized trial of a new drug versus placebo in patients with moderate depression',
      'An IRB reviews a study protocol and identifies inadequate provisions for obtaining consent from cognitively impaired participants',
      'A data safety monitoring board halts a trial early because one arm shows clear superiority',
    ],
    [
      'Determine whether the project constitutes human subjects research requiring IRB review',
      'Ensure the study design minimizes risk and has a favorable risk-benefit ratio',
      'Develop a robust informed consent process appropriate for the study population',
      'Plan for ongoing safety monitoring and data integrity oversight',
    ],
    [
      'The Tuskegee Syphilis Study, Nazi medical experiments, and Willowbrook hepatitis study were pivotal in shaping modern research ethics',
      'Equipoise is lost when accumulating evidence shows one treatment is clearly superior — the trial should stop',
      'Therapeutic misconception: participants may confuse research participation with clinical care',
    ],
    [
      'National Commission for the Protection of Human Subjects. The Belmont Report. 1979.',
      '45 CFR Part 46 — Protection of Human Subjects (The Common Rule).',
      'Emanuel EJ, Wendler D, Grady C. What makes clinical research ethical? JAMA. 2000;283:2701-2711.',
    ],
  ),

  'clinical-trial-ethics': entry(
    'clinical-trial-ethics',
    'Clinical Trial Ethics',
    'research-ethics',
    'Ethical principles governing the design, conduct, and reporting of clinical trials, including equipoise, randomization, placebo controls, and the obligation to publish results.',
    [
      'Clinical equipoise — genuine uncertainty in the expert medical community — is required to justify randomization',
      'Placebo-controlled trials are ethical only when withholding active treatment poses no serious harm',
      'Declaration of Helsinki requires that every participant receive the best proven treatment as comparator unless specific exceptions apply',
      'Researchers have an obligation to disseminate results, including negative findings',
    ],
    [
      'FDA regulations require adequate and well-controlled studies for drug approval (21 CFR 314.126)',
      'GCP (Good Clinical Practice) guidelines ensure participant safety and data integrity',
      'Registration of clinical trials is required before enrollment (ICMJE policy, FDAAA)',
      'Publication bias — failure to publish negative results — is increasingly addressed by regulation',
    ],
    [
      'A pharmaceutical company proposes a placebo-controlled trial for a condition with an existing effective treatment',
      'A participant in a blinded trial experiences a serious adverse event and requests unblinding',
      'A large trial is completed but the sponsor suppresses unfavorable results',
    ],
    [
      'Verify that clinical equipoise exists before randomization',
      'Use active comparators rather than placebo when standard treatments exist',
      'Establish clear stopping rules with an independent data safety monitoring board',
      'Commit to timely publication of all results regardless of outcome',
    ],
    [
      'The Declaration of Helsinki is aspirational but influential; FDA does not require compliance with all its provisions',
      'Adaptive trial designs can improve efficiency while maintaining ethical standards',
      'Post-trial access to beneficial interventions is an unresolved ethical obligation',
    ],
    [
      'World Medical Association. Declaration of Helsinki — Ethical Principles for Medical Research. 2013.',
      'ICH E6(R2) — Good Clinical Practice Guidelines.',
      'Freedman B. Equipoise and the ethics of clinical research. N Engl J Med. 1987;317:141-145.',
    ],
  ),

  'research-misconduct': entry(
    'research-misconduct',
    'Research Misconduct',
    'research-ethics',
    'Fabrication, falsification, and plagiarism (FFP) in the proposal, conduct, or reporting of research, representing serious violations of scientific integrity and public trust.',
    [
      'Fabrication: making up data or results that were never obtained',
      'Falsification: manipulating research materials, equipment, or processes to change results',
      'Plagiarism: appropriating another\'s ideas, processes, or results without credit',
      'Honest error and differences in interpretation do not constitute misconduct',
    ],
    [
      'The Office of Research Integrity (ORI) oversees misconduct investigations for federally funded research',
      'Institutions receiving federal funds must have policies for investigating misconduct allegations',
      'Consequences include retraction of publications, loss of funding, debarment, and termination',
      'Whistleblower protections exist but are imperfect — retaliation remains a significant concern',
    ],
    [
      'A postdoctoral researcher fabricates data points to achieve statistical significance for a grant-funded project',
      'A faculty member discovers a colleague\'s published images appear manipulated',
      'A graduate student suspects their mentor of falsifying clinical trial data and considers reporting',
    ],
    [
      'If misconduct is suspected, report through institutional channels (research integrity officer)',
      'Preserve all relevant evidence and documentation',
      'The institution conducts an inquiry followed by a formal investigation if warranted',
      'Cooperate with the investigation while maintaining confidentiality',
    ],
    [
      'Retraction Watch maintains a database of retracted publications — the number has increased dramatically',
      'Pressure to publish ("publish or perish") is a systemic driver of misconduct',
      'Reproducibility crisis in science is related to, but distinct from, misconduct',
    ],
    [
      '42 CFR Part 93 — Public Health Service Policies on Research Misconduct.',
      'Office of Research Integrity (ORI), U.S. Department of Health and Human Services.',
      'Fanelli D. How many scientists fabricate and falsify research? PLoS ONE. 2009;4:e5738.',
    ],
  ),

  // ── Resource Allocation ─────────────────────────────────────────────────

  'resource-allocation-triage': entry(
    'resource-allocation-triage',
    'Resource Allocation and Triage',
    'resource-allocation',
    'The ethical framework for distributing scarce medical resources among patients in need, including crisis standards of care, triage protocols, and allocation criteria during emergencies and everyday practice.',
    [
      'Triage aims to maximize benefit (utilitarian principle) while respecting equity',
      'Allocation criteria should be transparent, consistent, evidence-based, and free from bias',
      'First-come-first-served is simple but does not maximize outcomes and may disadvantage marginalized groups',
      'Multi-principle frameworks balance utility, equity, prioritizing the worst off, and reciprocity',
    ],
    [
      'Crisis standards of care (CSC) are activated during public health emergencies when resources are overwhelmed',
      'The AMA supports allocation based on medical criteria, not social worth or ability to pay',
      'Anti-discrimination laws (ADA, Section 1557 ACA) prohibit allocation based on disability or protected characteristics',
      'States developed CSC plans during COVID-19 with varying inclusion of disability protections',
    ],
    [
      'A hospital has 3 ventilators and 5 critically ill patients during a pandemic surge',
      'An organ transplant committee must allocate a single kidney among several eligible recipients',
      'An emergency department must triage dozens of casualties after a mass-casualty incident',
    ],
    [
      'Establish a triage team separate from the treating physicians to reduce moral distress and bias',
      'Apply objective medical criteria: likelihood of survival, expected benefit, urgency of need',
      'Use a lottery or first-come-first-served as a tiebreaker when medical criteria are equal',
      'Implement reassessment protocols to reallocate resources as clinical status changes',
    ],
    [
      'No allocation system is ethically perfect — the goal is a fair and transparent process',
      'Social utility criteria (e.g., occupation) are ethically contentious and generally disfavored',
      'Allocation decisions during crises cause significant moral injury to healthcare workers',
    ],
    [
      'Emanuel EJ, et al. Fair allocation of scarce medical resources in the time of COVID-19. N Engl J Med. 2020;382:2049-2055.',
      'White DB, Lo B. A framework for rationing ventilators and critical care beds during the COVID-19 pandemic. JAMA. 2020;323:1773-1774.',
      'Hick JL, et al. Crisis standards of care and COVID-19. JAMA. 2020;324:1431-1432.',
    ],
  ),

  'organ-donation-ethics': entry(
    'organ-donation-ethics',
    'Organ Donation Ethics',
    'resource-allocation',
    'Ethical issues surrounding organ procurement and allocation, including consent models, determination of death, living donation, and fair distribution of scarce transplantable organs.',
    [
      'Opt-in (explicit consent) versus opt-out (presumed consent) donation models reflect different balances of autonomy',
      'The dead donor rule: vital organs may only be recovered from patients who are dead',
      'Living donation raises concerns about coercion, informed consent, and donor safety',
      'Allocation must balance utility (best outcome) with equity (fair access)',
    ],
    [
      'The Uniform Anatomical Gift Act governs organ donation in the U.S.',
      'UNOS (United Network for Organ Sharing) manages the national organ allocation system',
      'The National Organ Transplant Act (1984) prohibits the sale of human organs',
      'Brain death and cardiac death are both legal criteria for death preceding organ recovery',
    ],
    [
      'A family is approached about organ donation after their loved one is declared brain dead',
      'A healthy adult volunteers to donate a kidney to a stranger (non-directed living donation)',
      'A hospital identifies a patient eligible for donation after cardiac death (DCD)',
    ],
    [
      'Separate the care team from the organ procurement team to avoid conflicts of interest',
      'Approach families with sensitivity; use trained requestors and respect cultural and religious values',
      'Ensure living donors receive independent evaluation of risks and psychosocial readiness',
      'Follow UNOS allocation algorithms to ensure equitable distribution',
    ],
    [
      'There are over 100,000 people on the U.S. organ transplant waiting list; demand far exceeds supply',
      'Financial incentives for organ donation remain prohibited but are actively debated',
      'Paired kidney exchange programs expand living donation while respecting donor preferences',
    ],
    [
      'National Organ Transplant Act, Pub. L. 98-507 (1984).',
      'UNOS — Ethics of Organ Allocation, unos.org.',
      'Truog RD. The ethics of organ donation by living donors. N Engl J Med. 2005;353:444-446.',
    ],
  ),

  // ── Professionalism ─────────────────────────────────────────────────────

  'conflicts-of-interest': entry(
    'conflicts-of-interest',
    'Conflicts of Interest',
    'professionalism',
    'Situations in which a physician\'s personal, financial, or professional interests may compromise, or appear to compromise, their primary obligation to act in the patient\'s best interest.',
    [
      'Financial conflicts include industry gifts, consulting fees, ownership of healthcare facilities, and self-referral',
      'Non-financial conflicts include academic advancement, personal relationships, and institutional loyalties',
      'Disclosure is necessary but not sufficient — management or elimination of the conflict may be required',
      'Even the appearance of a conflict can undermine trust in the profession',
    ],
    [
      'The Physician Payments Sunshine Act (2010) requires reporting of industry payments to physicians',
      'Stark Law prohibits physician self-referral for designated health services paid by Medicare',
      'Anti-Kickback Statute criminalizes payments intended to induce or reward referrals',
      'ACCME standards restrict industry influence on CME content',
    ],
    [
      'A physician who owns a diagnostic imaging center refers patients to their own facility',
      'A researcher receives consulting fees from a pharmaceutical company whose drug they are studying',
      'A physician accepts an all-expenses-paid conference trip from a medical device company',
    ],
    [
      'Identify the competing interest and its potential impact on clinical judgment',
      'Disclose the conflict to patients, institutions, and journals as applicable',
      'Determine whether disclosure alone is sufficient or whether recusal or divestment is needed',
      'Follow institutional conflict-of-interest policies and reporting requirements',
    ],
    [
      'Open Payments (CMS database) allows patients to look up industry payments to their physicians',
      'Small gifts and meals have been shown to influence prescribing behavior',
      'Academic medical centers increasingly restrict industry interactions with trainees',
    ],
    [
      'Physician Payments Sunshine Act, 42 U.S.C. § 1320a-7h.',
      'Lo B, Field MJ, eds. Conflict of Interest in Medical Research, Education, and Practice. National Academies Press; 2009.',
      'AMA Code of Medical Ethics, Opinion 9.6.1 — Physician Involvement in Industry.',
    ],
  ),

  'conscientious-objection': entry(
    'conscientious-objection',
    'Conscientious Objection',
    'professionalism',
    'The claim by a healthcare provider to refuse to participate in a legally and medically permissible intervention on the grounds of personal moral or religious beliefs.',
    [
      'Conscientious objection reflects the physician\'s moral autonomy and integrity',
      'The duty to the patient requires timely referral and non-abandonment despite personal objections',
      'Objection is more ethically defensible when the service is not time-sensitive and alternatives are accessible',
      'Institutional objection (entire hospital systems) is more ethically problematic than individual objection',
    ],
    [
      'The Church Amendments (1973) protect providers who refuse to participate in abortion or sterilization',
      'The ACA Section 1553 prohibits discrimination against providers who refuse to participate in assisted suicide',
      'State conscience clauses vary widely in scope and the services they cover',
      'Courts have generally upheld the right to object but required alternative access for patients',
    ],
    [
      'A pharmacist refuses to dispense emergency contraception on moral grounds',
      'A physician declines to refer a patient for physician-assisted death in a state where it is legal',
      'A nurse refuses to participate in withdrawal of life-sustaining treatment for a patient',
    ],
    [
      'Determine whether the objection is based on a sincerely held moral or religious belief',
      'Notify patients and employers of the objection in advance when possible',
      'Provide timely and effective referral to a willing provider',
      'In emergencies, the duty to the patient overrides the right to object',
    ],
    [
      'Conscientious objection is not a license to obstruct — the patient\'s access to legal care must be preserved',
      'In rural or underserved areas, objection may effectively deny access if alternatives are unavailable',
      'Professional organizations (ACOG, AMA) emphasize the obligation of effective referral',
    ],
    [
      'ACOG Committee Opinion No. 385 — The Limits of Conscientious Refusal in Reproductive Medicine. 2007.',
      'Wicclair MR. Conscientious Objection in Health Care. Cambridge University Press; 2011.',
      'AMA Code of Medical Ethics, Opinion 1.1.7 — Physician Exercise of Conscience.',
    ],
  ),

  'physician-impairment': entry(
    'physician-impairment',
    'Physician Impairment',
    'professionalism',
    'The ethical obligation to identify and address impairment in colleagues due to substance use, mental illness, or physical conditions that compromise their ability to practice medicine safely.',
    [
      'Physicians have a duty to report impaired colleagues to protect patients',
      'Stigma around mental health and addiction is a major barrier to self-reporting',
      'Physician health programs (PHPs) offer confidential evaluation and monitored treatment',
      'Impairment is defined by functional deficits, not by diagnosis alone',
    ],
    [
      'State medical practice acts require or encourage reporting of impaired physicians',
      'Most states have physician health programs that offer alternatives to disciplinary action',
      'Failure to report an impaired colleague may constitute negligence if patients are harmed',
      'ADA protections apply to physicians with disabilities, but not when patient safety is at risk',
    ],
    [
      'A resident smells alcohol on an attending physician\'s breath during morning rounds',
      'A surgeon\'s hand tremor raises concerns about ability to perform procedures safely',
      'A colleague confides they have been using opioids to manage chronic pain',
    ],
    [
      'Observe and document specific behaviors that raise safety concerns',
      'Report concerns through institutional channels or the state physician health program',
      'Do not attempt to diagnose or treat the colleague yourself',
      'Support the impaired physician in seeking help while prioritizing patient safety',
    ],
    [
      'Approximately 10-15% of physicians will experience substance use disorders during their careers',
      'Physician suicide rates exceed those of the general population, highlighting the need for mental health support',
      'Physician health programs have high success rates (>75% return to safe practice)',
    ],
    [
      'Federation of State Medical Boards — Policy on Physician Impairment.',
      'Berge KH, et al. Chemical dependency and the physician. Mayo Clin Proc. 2009;84:625-631.',
      'AMA Code of Medical Ethics, Opinion 9.3.2 — Physician Responsibilities to Impaired Colleagues.',
    ],
  ),

  'boundary-violations': entry(
    'boundary-violations',
    'Professional Boundary Violations',
    'professionalism',
    'Inappropriate crossings of the professional boundary between physician and patient, including sexual, financial, and dual-relationship boundaries that exploit the power differential inherent in the therapeutic relationship.',
    [
      'The physician-patient relationship involves an inherent power imbalance that precludes true reciprocity',
      'Sexual contact with current patients is always unethical, regardless of who initiates it',
      'Boundary crossings (minor) are distinguished from boundary violations (exploitative)',
      'Self-disclosure, gift-giving, and dual relationships require careful judgment',
    ],
    [
      'Sexual contact with a current patient is grounds for license revocation in all states',
      'Some states extend the prohibition to former patients for a defined period or indefinitely for psychiatric patients',
      'Physicians must report colleagues who engage in sexual misconduct with patients',
      'Financial exploitation of patients (loans, business deals) is separately actionable',
    ],
    [
      'A patient develops romantic feelings toward their physician and the physician reciprocates',
      'A physician hires a current patient to work in their office',
      'A physician accepts a large financial gift from a grateful patient with cognitive impairment',
    ],
    [
      'Maintain clear professional boundaries from the outset of the relationship',
      'Recognize early warning signs: excessive self-disclosure, special treatment, off-hours communication',
      'Transfer care before pursuing any non-professional relationship with a former patient',
      'Report known boundary violations through institutional and licensing channels',
    ],
    [
      'It is always the physician\'s responsibility to maintain boundaries, regardless of patient behavior',
      'Romantic or sexual relationships with former patients may be acceptable after a sufficient interval and if the relationship was not psychotherapeutic',
      'Small rural communities present unique dual-relationship challenges requiring additional thoughtfulness',
    ],
    [
      'Gabbard GO, Nadelson C. Professional boundaries in the physician-patient relationship. JAMA. 1995;273:1445-1449.',
      'AMA Code of Medical Ethics, Opinion 9.1.1 — Romantic or Sexual Relationships with Patients.',
      'Federation of State Medical Boards — Addressing Sexual Boundaries. 2020.',
    ],
  ),

  // ── Reproductive Ethics ─────────────────────────────────────────────────

  'reproductive-autonomy': entry(
    'reproductive-autonomy',
    'Reproductive Autonomy',
    'reproductive-ethics',
    'The ethical right of individuals to make autonomous decisions about reproduction, including contraception, assisted reproduction, pregnancy continuation, and genetic testing, free from coercion or undue interference.',
    [
      'Reproductive autonomy is grounded in bodily autonomy and respect for persons',
      'Historical abuses (forced sterilization programs) underscore the importance of protecting reproductive rights',
      'Access to reproductive healthcare is an issue of justice — barriers disproportionately affect marginalized populations',
      'Physicians must provide non-directive counseling to support autonomous reproductive decisions',
    ],
    [
      'Griswold v. Connecticut (1965) recognized the right to use contraception',
      'Roe v. Wade (1973) established constitutional abortion protections; Dobbs v. Jackson (2022) returned regulation to states',
      'The post-Dobbs legal landscape varies dramatically by state regarding abortion access',
      'EMTALA obligations for emergency pregnancy-related care remain federally mandated',
    ],
    [
      'A patient requests contraception but their partner objects on religious grounds',
      'A pregnant patient seeks genetic counseling after an abnormal prenatal screening result',
      'A physician in a restrictive state receives a patient requesting information about abortion access',
    ],
    [
      'Provide comprehensive, unbiased information about all reproductive options',
      'Assess for coercion from partners, family, or other sources',
      'Respect the patient\'s decision even if it conflicts with the physician\'s personal values',
      'Know the current legal status of reproductive services in your jurisdiction',
    ],
    [
      'Non-directive counseling is the standard for reproductive decision-making',
      'Contraceptive coercion (pressuring patients to use or avoid contraception) violates autonomy',
      'Pre-conception genetic carrier screening raises complex ethical questions about selection and disability',
    ],
    [
      'Griswold v. Connecticut, 381 U.S. 479 (1965).',
      'Dobbs v. Jackson Women\'s Health Organization, 597 U.S. ___ (2022).',
      'ACOG Committee Opinion No. 385 — The Limits of Conscientious Refusal in Reproductive Medicine.',
    ],
  ),

  'maternal-fetal-conflict': entry(
    'maternal-fetal-conflict',
    'Maternal-Fetal Conflict',
    'reproductive-ethics',
    'Ethical dilemmas arising when the interests or well-being of a pregnant patient and the fetus appear to conflict, including treatment refusal during pregnancy, forced cesarean delivery, and substance use during pregnancy.',
    [
      'The pregnant patient retains full decision-making autonomy including the right to refuse treatment',
      'Court-ordered interventions (e.g., forced cesarean sections) violate bodily autonomy and are ethically condemned by major medical organizations',
      'Punitive approaches to substance use during pregnancy deter prenatal care and worsen outcomes',
      'The physician\'s primary ethical obligation is to the pregnant patient, with the fetus as a secondary consideration',
    ],
    [
      'In re A.C. (1990) held that a patient\'s informed refusal of a cesarean section must be honored',
      'ACOG opposes court-ordered medical interventions and criminalization of pregnant patients\' behavior',
      'Some states have enacted fetal harm laws that have been applied to pregnant individuals with substance use',
      'Child welfare reporting obligations may be triggered at birth but do not apply to prenatal conduct in most states',
    ],
    [
      'A pregnant patient with placenta previa refuses a recommended cesarean section on religious grounds',
      'A patient at 34 weeks gestation continues using methamphetamine despite counseling',
      'A pregnant patient with cancer must decide between immediate chemotherapy and delaying treatment until after delivery',
    ],
    [
      'Prioritize the pregnant patient\'s autonomy and informed decision-making',
      'Provide non-judgmental counseling about risks to both patient and fetus',
      'Offer comprehensive support including addiction services, social work, and harm reduction',
      'Never seek a court order to compel medical treatment over a competent patient\'s refusal',
    ],
    [
      'Forced interventions on pregnant patients disproportionately target women of color and low-income women',
      'The therapeutic alliance is more effective than coercion in improving prenatal outcomes',
      'ACOG and AMA both oppose incarceration or prosecution of pregnant individuals for substance use',
    ],
    [
      'In re A.C., 573 A.2d 1235 (D.C. 1990).',
      'ACOG Committee Opinion No. 321 — Maternal Decision Making, Ethics, and the Law. 2005.',
      'AMA Board of Trustees Report — Legal Interventions During Pregnancy. JAMA. 1990;264:2663-2670.',
    ],
  ),

  'assisted-reproduction-ethics': entry(
    'assisted-reproduction-ethics',
    'Assisted Reproduction Ethics',
    'reproductive-ethics',
    'Ethical considerations in assisted reproductive technologies (ART) including IVF, gamete donation, surrogacy, preimplantation genetic testing, and the disposition of embryos.',
    [
      'ART raises questions about the moral status of embryos, commodification, and access equity',
      'Gamete donors and surrogates face risks of exploitation and deserve robust informed consent',
      'Preimplantation genetic testing (PGT) for medical conditions is widely accepted; selection for non-medical traits is controversial',
      'Insurance coverage for ART is limited, creating significant access disparities',
    ],
    [
      'Only a minority of U.S. states mandate insurance coverage for infertility treatment',
      'Surrogacy is legal and regulated in some states, banned in others, and unregulated in many',
      'The Uniform Parentage Act addresses legal parentage in ART contexts',
      'No comprehensive federal regulation of ART exists; the field is largely self-regulated through ASRM guidelines',
    ],
    [
      'A couple undergoing IVF disagrees about the disposition of remaining frozen embryos after divorce',
      'A single woman requests donor sperm and IVF; the physician questions whether single parenthood is in the child\'s best interest',
      'A couple requests PGT to select an embryo as a tissue-matched donor for a sibling with a genetic disease',
    ],
    [
      'Provide thorough informed consent addressing success rates, risks, and alternatives',
      'Ensure independent counseling for surrogates and gamete donors',
      'Address embryo disposition before beginning IVF through written agreements',
      'Avoid value judgments about family structure or patient worthiness',
    ],
    [
      'ASRM Ethics Committee provides consensus guidelines on most ART ethical questions',
      'Savior siblings raise concerns about instrumentalizing children but can be ethically justified',
      'International reproductive tourism creates exploitation risks and regulatory gaps',
    ],
    [
      'Ethics Committee of ASRM. Disposition of abandoned embryos. Fertil Steril. 2013;99:1848-1849.',
      'Daar JF. Reproductive Technologies and the Law. 3rd ed. LexisNexis; 2021.',
      'Baylis F. Human embryo research: debating the 14-day rule. Nature. 2017;25:14.',
    ],
  ),

  // ── Pediatric Ethics ────────────────────────────────────────────────────

  'pediatric-consent-assent': entry(
    'pediatric-consent-assent',
    'Pediatric Consent and Assent',
    'pediatric-ethics',
    'The ethical framework for decision-making in pediatric care, where parents or guardians provide informed permission and children participate through a developmentally appropriate assent process.',
    [
      'Parents have the authority to consent for minors based on the presumption that they act in the child\'s best interest',
      'Assent is the child\'s affirmative agreement to participate, appropriate starting around age 7',
      'Dissent by the child should be respected when the intervention is not essential',
      'The mature minor doctrine recognizes that some adolescents have adult-level decision-making capacity',
    ],
    [
      'Parental consent is legally required for treatment of minors with limited exceptions',
      'Emancipated minors (married, military, self-supporting) may consent independently',
      'The mature minor doctrine is recognized in some states but not uniformly defined',
      'Minor consent statutes allow independent consent for specific services (STI, contraception, mental health, substance abuse)',
    ],
    [
      'Parents of a 10-year-old refuse a recommended blood transfusion on religious grounds',
      'A 14-year-old with cancer refuses further chemotherapy, but parents insist on continuing treatment',
      'A 7-year-old scheduled for a research blood draw says "I don\'t want the needle"',
    ],
    [
      'Obtain parental informed permission for medical decisions affecting minors',
      'Seek the child\'s assent in an age-appropriate manner starting around age 7',
      'Give weight to the child\'s dissent when the intervention is not medically necessary',
      'Consider the mature minor doctrine for adolescents demonstrating adult-level understanding',
    ],
    [
      'Assent is ethically required by the AAP even though it is not legally binding',
      'The best interest standard guides decisions for young children; adolescents may express preferences deserving deference',
      'When parents refuse treatment that is clearly life-saving, physicians may seek judicial intervention',
    ],
    [
      'American Academy of Pediatrics Committee on Bioethics. Informed consent, parental permission, and assent. Pediatrics. 1995;95:314-317.',
      'Diekema DS. Parental refusals of medical treatment. Pediatrics. 2004;113:1135-1143.',
      'Katz AL, Webb SA; AAP Committee on Bioethics. Informed consent in decision-making in pediatric practice. Pediatrics. 2016;138:e20161485.',
    ],
  ),

  'parental-refusal-of-treatment': entry(
    'parental-refusal-of-treatment',
    'Parental Refusal of Treatment',
    'pediatric-ethics',
    'The ethical and legal response when parents refuse medically recommended treatment for their child, balancing parental authority with the state\'s interest in protecting children from harm.',
    [
      'Parental authority is broad but not absolute — it is limited by the child\'s best interest',
      'The harm principle: state intervention is justified when parental decisions pose serious risk to the child',
      'Religious or cultural motivations for refusal are respected but do not override the child\'s right to life-saving treatment',
      'The standard for intervention increases with the severity and imminence of harm',
    ],
    [
      'Prince v. Massachusetts (1944): parents may make martyrs of themselves but not of their children',
      'Courts routinely order blood transfusions and cancer treatment for minors over parental objection',
      'Child Protective Services (CPS) involvement may be necessary when parents refuse critical care',
      'Religious exemption laws for medical neglect exist in some states but are increasingly contested',
    ],
    [
      'Jehovah\'s Witness parents refuse a blood transfusion for their 5-year-old with severe anemia',
      'Parents of a child with leukemia wish to pursue only alternative medicine',
      'Parents refuse vaccination for their child entering public school',
    ],
    [
      'Engage the parents in open, non-confrontational dialogue about their concerns and values',
      'Explore compromises or alternatives that address parental concerns while protecting the child',
      'If agreement cannot be reached and the child faces serious harm, involve hospital ethics and legal counsel',
      'Seek a court order as a last resort when life-saving treatment is being refused',
    ],
    [
      'Most parental refusals can be resolved through respectful communication and negotiation',
      'Involving a religious leader or cultural mediator may help when refusal is belief-based',
      'Seeking a court order is not adversarial — it protects the child while preserving the physician-parent relationship',
    ],
    [
      'Prince v. Massachusetts, 321 U.S. 158 (1944).',
      'Diekema DS. Parental refusals of medical treatment. Pediatrics. 2004;113:1135-1143.',
      'AAP Committee on Bioethics. Religious objections to medical care. Pediatrics. 1997;99:279-281.',
    ],
  ),

  'neonatal-ethics': entry(
    'neonatal-ethics',
    'Neonatal Ethics and Periviability',
    'pediatric-ethics',
    'Ethical dilemmas in the care of extremely premature and critically ill newborns, including decisions about resuscitation at the limits of viability, quality-of-life considerations, and parental authority in neonatal care.',
    [
      'Periviability (22-25 weeks) presents the greatest uncertainty about benefit versus burden of resuscitation',
      'Parental values and preferences should be central to periviability decisions',
      'Prognostic uncertainty at the margins of viability complicates shared decision-making',
      'Quality of life, not mere survival, should be part of the ethical calculus',
    ],
    [
      'Born-Alive Infants Protection Act (2002) defines any infant born alive as a person with legal rights',
      'No legal obligation exists to resuscitate non-viable infants, but defining viability is clinically complex',
      'Institutional guidelines vary on resuscitation thresholds; most allow parental choice in the periviable zone',
      'Baby Doe regulations (1984) prohibit withholding treatment from disabled newborns solely based on disability',
    ],
    [
      'Parents expecting a 23-week delivery must decide whether to pursue full resuscitation or comfort care',
      'A newborn with trisomy 18 requires surgical intervention for a congenital heart defect',
      'Parents request continued aggressive treatment for an infant with anencephaly',
    ],
    [
      'Provide prenatal counseling using gestational-age-specific outcome data',
      'Present resuscitation as an option (not an obligation) in the periviable zone',
      'Support parents in decision-making with multidisciplinary input (neonatology, palliative care, social work)',
      'Reassess the plan after delivery based on the infant\'s actual condition',
    ],
    [
      'Survival and intact survival rates improve dramatically between 22 and 25 weeks',
      'The "gray zone" of periviability is where shared decision-making is most critical',
      'Palliative care for newborns is an essential alternative to aggressive intervention',
    ],
    [
      'Raju TNK, et al. Periviable birth: executive summary of a joint workshop by NICHD, SMFM, AAP, and ACOG. Obstet Gynecol. 2014;123:1083-1096.',
      'Janvier A, et al. Measuring and communicating meaningful outcomes in neonatology. Semin Perinatol. 2016;40:571-577.',
      'Born-Alive Infants Protection Act of 2002, Pub. L. 107-207.',
    ],
  ),

  // ── Additional Entries ──────────────────────────────────────────────────

  'truth-telling-disclosure': entry(
    'truth-telling-disclosure',
    'Truth-Telling and Medical Disclosure',
    'professionalism',
    'The ethical obligation of physicians to provide honest and complete information to patients about their diagnosis, prognosis, and treatment options, including disclosure of medical errors.',
    [
      'Truthfulness is foundational to trust, autonomy, and informed decision-making',
      'Physicians have a duty to disclose medical errors to patients, even absent legal requirements',
      'Cultural differences in truth-telling preferences should be explored, not assumed',
      'Prognostic disclosure requires sensitivity — patients need honest information delivered with compassion',
    ],
    [
      'The Joint Commission requires disclosure of unanticipated outcomes to patients',
      'Apology laws in many states protect physician expressions of sympathy from being used as evidence of liability',
      'Open disclosure programs reduce malpractice claims and improve patient satisfaction',
      'Failure to disclose known risks or errors may constitute fraud or negligence',
    ],
    [
      'A surgeon realizes during a procedure that a wrong-site error occurred on a previous operation',
      'A family requests that a terminal cancer diagnosis be withheld from the patient',
      'A physician must communicate an unexpected poor prognosis to a newly diagnosed patient',
    ],
    [
      'Default to full, honest disclosure unless the patient has explicitly expressed a preference not to know',
      'Use a structured protocol (e.g., SPIKES) for breaking difficult news',
      'Disclose medical errors promptly, honestly, and with a plan for remediation',
      'Explore cultural communication preferences with the patient directly, not through assumptions',
    ],
    [
      'Most patients want full disclosure of diagnosis, prognosis, and errors — even when families request otherwise',
      'The "conspiracy of silence" around terminal diagnoses is diminishing but persists in some cultural contexts',
      'Open disclosure of errors is associated with decreased litigation, not increased',
    ],
    [
      'Gallagher TH, et al. Patients\' and physicians\' attitudes regarding the disclosure of medical errors. JAMA. 2003;289:1001-1007.',
      'Baile WF, et al. SPIKES — a six-step protocol for delivering bad news. Oncologist. 2000;5:302-311.',
      'AMA Code of Medical Ethics, Opinion 2.1.3 — Withholding Information from Patients.',
    ],
  ),

  'double-effect': entry(
    'double-effect',
    'Principle of Double Effect',
    'end-of-life',
    'The ethical doctrine holding that an action with both a good and a bad effect is morally permissible when the good effect is intended, the bad effect is foreseen but not intended, and the good effect is proportionate to the bad.',
    [
      'Four conditions: the action itself is not intrinsically wrong; the good effect is intended; the bad effect is foreseen but not intended; there is proportionality between good and bad effects',
      'Most commonly applied to opioid use in palliative care where pain relief may hasten death',
      'Distinguishes between killing (intention to cause death) and allowing to die (foreseeing death as a side effect)',
      'Provides moral justification for aggressive symptom management at end of life',
    ],
    [
      'The doctrine of double effect is recognized in legal and medical practice for end-of-life care',
      'Administering opioids for pain relief that may secondarily hasten death is legally permissible under this principle',
      'The Supreme Court referenced double effect in Vacco v. Quill (1997) when distinguishing palliative care from euthanasia',
      'Documentation of intent (pain management) is critical for legal protection',
    ],
    [
      'A physician titrates morphine for a dying patient\'s severe pain, knowing it may depress respiration',
      'A patient with terminal lung cancer receives escalating sedation for refractory dyspnea',
      'A surgeon performs a hysterectomy for uterine cancer in a pregnant patient, resulting in fetal death',
    ],
    [
      'Verify that the intended effect is genuinely beneficial (e.g., pain relief, symptom control)',
      'Confirm that the harmful effect (e.g., respiratory depression) is foreseen but not intended',
      'Ensure there is proportionality — the severity of suffering justifies the risk of harm',
      'Document the clinical rationale, intent, and dosing decision clearly',
    ],
    [
      'Studies show that appropriately titrated opioids for pain rarely hasten death in practice',
      'The principle is often invoked but less often needed — palliative doses are usually safe',
      'Palliative sedation for refractory symptoms is ethically distinct from euthanasia under double effect',
    ],
    [
      'Vacco v. Quill, 521 U.S. 793 (1997).',
      'Quill TE, Dresser R, Brock DW. The rule of double effect — a critique of its role in end-of-life decision making. N Engl J Med. 1997;337:1768-1771.',
      'Sulmasy DP. The rule of double effect: clearing up the double talk. Arch Intern Med. 1999;159:545-550.',
    ],
  ),

  'surrogate-decision-making': entry(
    'surrogate-decision-making',
    'Surrogate Decision-Making',
    'end-of-life',
    'The process by which a legally authorized individual makes healthcare decisions on behalf of a patient who has lost decision-making capacity, guided by the patient\'s known wishes or best interests.',
    [
      'Substituted judgment (what the patient would want) is preferred over best interest (what is objectively best)',
      'Advance directives and previously expressed wishes guide surrogate decisions',
      'When the patient\'s wishes are unknown, surrogates apply the best interest standard',
      'Surrogate decision-making is a source of significant psychological burden for families',
    ],
    [
      'State laws establish hierarchies of default surrogates (typically spouse, adult children, parents, siblings)',
      'Healthcare proxy or durable power of attorney designates a specific surrogate',
      'Surrogates must act in accordance with the patient\'s known values and preferences',
      'Disputes among surrogates may require ethics committee involvement or court resolution',
    ],
    [
      'A patient in a persistent vegetative state has no advance directive; adult children disagree about goals of care',
      'A healthcare proxy requests withdrawal of treatment based on conversations with the patient before incapacitation',
      'An estranged family member arrives and disputes the surrogate\'s decision to pursue comfort care',
    ],
    [
      'Identify the legally authorized surrogate according to state law or the patient\'s designation',
      'Explore any known wishes, values, or prior statements by the patient',
      'Guide the surrogate to decide based on what the patient would want, not what the surrogate wants',
      'Involve ethics consultation when there is conflict or uncertainty about the patient\'s wishes',
    ],
    [
      'Surrogates frequently overestimate how much the patient would want aggressive treatment',
      'The emotional toll of surrogate decision-making can lead to prolonged grief and PTSD',
      'Encouraging advance care planning reduces surrogate burden and improves concordance with patient preferences',
    ],
    [
      'Wendler D, Rid A. Systematic review: the effect on surrogates of making treatment decisions for others. Ann Intern Med. 2011;154:336-346.',
      'Shalowitz DI, Garrett-Mayer E, Wendler D. The accuracy of surrogate decision makers. Arch Intern Med. 2006;166:493-497.',
      'Uniform Health Care Decisions Act (1993).',
    ],
  ),

  'social-media-ethics': entry(
    'social-media-ethics',
    'Social Media and Medical Ethics',
    'confidentiality',
    'Ethical challenges posed by physician use of social media, including risks to patient confidentiality, professional boundaries, misinformation dissemination, and the intersection of personal and professional online identities.',
    [
      'Posts containing identifiable patient information violate confidentiality, even without names',
      'De-identification is harder than it appears — combinations of details can identify patients',
      'Physicians have a professional obligation to combat health misinformation online',
      'Online interactions with patients blur professional boundaries',
    ],
    [
      'HIPAA applies to social media — identifiable PHI in posts constitutes a breach',
      'State medical boards have disciplined physicians for unprofessional online conduct',
      'FSMB and AMA guidelines address appropriate physician social media use',
      'Employers and credentialing bodies may review social media as part of professional evaluation',
    ],
    [
      'A physician posts an interesting X-ray on social media without the patient\'s name but with enough clinical detail to identify them',
      'A patient sends a friend request to their physician on a personal social media account',
      'A physician uses their personal social media account to promote unproven treatments',
    ],
    [
      'Assume all social media content is public and permanent',
      'Never post identifiable patient information, even with supposed de-identification',
      'Maintain separate professional and personal accounts when feasible',
      'Decline patient friend/follow requests to maintain professional boundaries',
    ],
    [
      'A surprising number of disciplinary cases now involve social media conduct',
      'Medical students and residents are particularly vulnerable to social media missteps early in their careers',
      'Physician advocacy and education on social media can be valuable when done professionally',
    ],
    [
      'AMA Policy H-478.997 — Professionalism in the Use of Social Media.',
      'Federation of State Medical Boards. Model Policy Guidelines for the Appropriate Use of Social Media. 2012.',
      'Ventola CL. Social media and health care professionals. P T. 2014;39:491-520.',
    ],
  ),

  'genetic-testing-ethics': entry(
    'genetic-testing-ethics',
    'Genetic Testing Ethics',
    'confidentiality',
    'Ethical issues surrounding genetic testing, including privacy of genetic information, duty to warn relatives, incidental findings, direct-to-consumer testing, and the potential for genetic discrimination.',
    [
      'Genetic information has implications beyond the individual — it affects biological relatives',
      'Duty to warn at-risk relatives may conflict with patient confidentiality',
      'Incidental or secondary findings create disclosure dilemmas',
      'Genetic exceptionalism — treating genetic data as uniquely sensitive — is debated',
    ],
    [
      'The Genetic Information Nondiscrimination Act (GINA, 2008) prohibits discrimination by health insurers and employers based on genetic information',
      'GINA does not cover life, disability, or long-term care insurance',
      'ACMG recommends reporting secondary findings from a curated list of actionable genes',
      'Direct-to-consumer genetic testing is regulated by the FDA but gaps in oversight exist',
    ],
    [
      'A patient tests positive for BRCA1 but refuses to inform their sister who is at high risk',
      'A genomic sequencing study reveals an incidental finding of a pathogenic cardiac gene variant',
      'An employer requests genetic test results as a condition of employment',
    ],
    [
      'Provide pre-test counseling addressing potential results and their implications',
      'Discuss the possibility of incidental findings and establish preferences before testing',
      'Encourage patients to share relevant results with at-risk family members',
      'If the patient refuses to warn at-risk relatives, consider whether a duty to warn applies',
    ],
    [
      'GINA is important but incomplete — it does not protect against all forms of genetic discrimination',
      'The duty to warn relatives about genetic risks is recognized in Safer v. Pack (1996) but not universally applied',
      'Direct-to-consumer tests may cause unnecessary anxiety due to limited clinical context',
    ],
    [
      'Genetic Information Nondiscrimination Act (GINA), Pub. L. 110-233 (2008).',
      'Green RC, et al. ACMG recommendations for reporting of incidental findings. Genet Med. 2013;15:565-574.',
      'Safer v. Estate of Pack, 677 A.2d 1188 (N.J. Super. 1996).',
    ],
  ),

  'global-health-ethics': entry(
    'global-health-ethics',
    'Global Health Ethics',
    'resource-allocation',
    'Ethical considerations in global health practice, including research in low-resource settings, fair distribution of global health resources, exploitation concerns, and the obligations of high-income countries to address health inequities.',
    [
      'Avoid exploitation: research and interventions must benefit the host community, not only the visiting researchers',
      'Post-trial access to beneficial interventions is an ethical obligation in resource-limited settings',
      'Capacity building and partnership models are ethically preferable to paternalistic aid models',
      'The "10/90 gap" — 90% of health research funding addresses diseases affecting 10% of the global disease burden',
    ],
    [
      'The Declaration of Helsinki requires that research in developing countries meet the same ethical standards',
      'The Doha Declaration (2001) affirmed the right of developing nations to access essential medicines',
      'The Nagoya Protocol addresses equitable sharing of benefits arising from genetic resources',
      'International clinical trial regulations require local IRB approval in the host country',
    ],
    [
      'A pharmaceutical company tests a new drug in a developing country where participants lack access to standard of care',
      'Medical volunteers provide surgical care during a short-term mission but no follow-up infrastructure exists',
      'A global health research team publishes findings from a low-resource setting without local co-investigators',
    ],
    [
      'Ensure research is responsive to the health needs of the host community',
      'Establish equitable partnerships with local investigators and institutions',
      'Plan for sustainable capacity building, not just data extraction',
      'Address post-trial access and technology transfer as part of study design',
    ],
    [
      'Short-term medical missions can cause harm if they undermine local health systems',
      'Voluntourism in global health is increasingly criticized for prioritizing volunteer experience over community benefit',
      'Equitable authorship and data sharing are ethical imperatives in global health research',
    ],
    [
      'Benatar SR, Singer PA. Responsibilities in international research: a new look revisited. J Med Ethics. 2010;36:194-197.',
      'World Medical Association. Declaration of Helsinki. 2013.',
      'Pratt B, Hyder AA. Applying a global justice lens to health systems research ethics. Kennedy Inst Ethics J. 2016;26:35-66.',
    ],
  ),

  'artificial-intelligence-ethics': entry(
    'artificial-intelligence-ethics',
    'AI and Machine Learning in Medicine',
    'professionalism',
    'Ethical considerations in the use of artificial intelligence and machine learning in clinical decision-making, including algorithmic bias, transparency, accountability, and the evolving physician-AI relationship.',
    [
      'AI algorithms can embed and amplify existing biases from training data',
      'Transparency (explainability) of AI recommendations is necessary for informed consent',
      'Physicians remain responsible for clinical decisions even when supported by AI tools',
      'AI must augment, not replace, the physician-patient relationship',
    ],
    [
      'FDA regulates AI/ML-based software as a medical device (SaMD) under existing frameworks',
      'No comprehensive federal legislation specifically governs clinical AI ethics',
      'Liability for AI-influenced clinical errors is unsettled — physician, developer, or shared responsibility?',
      'CMS reimbursement policies are beginning to address AI-assisted diagnostics',
    ],
    [
      'A clinical decision support tool recommends against treatment for a patient due to algorithmically predicted poor outcomes, but the algorithm was trained on biased data',
      'An AI-based radiology tool misses a finding that a radiologist would likely have caught',
      'A hospital system deploys a predictive algorithm for readmission risk that disadvantages minority patients',
    ],
    [
      'Evaluate AI tools for bias, validity, and generalizability before clinical deployment',
      'Maintain physician oversight and the ability to override AI recommendations',
      'Inform patients when AI tools are used in their care as part of informed consent',
      'Continuously monitor AI tool performance across demographic groups for equity',
    ],
    [
      'AI bias is not theoretical — documented examples include racial bias in kidney function estimates and hospital resource allocation algorithms',
      'The "black box" problem: complex algorithms may produce accurate results without explainable reasoning',
      'Human-AI teaming models outperform either alone in many diagnostic tasks when implemented thoughtfully',
    ],
    [
      'Obermeyer Z, et al. Dissecting racial bias in an algorithm used to manage the health of populations. Science. 2019;366:447-453.',
      'AMA Policy H-480.940 — Augmented Intelligence in Health Care.',
      'Char DS, Shah NH, Magnus D. Implementing machine learning in health care — addressing ethical challenges. N Engl J Med. 2018;378:981-983.',
    ],
  ),

  'palliative-sedation': entry(
    'palliative-sedation',
    'Palliative Sedation',
    'end-of-life',
    'The monitored use of medications to induce reduced consciousness for the purpose of relieving refractory suffering in imminently dying patients, when all other palliative measures have failed.',
    [
      'Palliative sedation is ethically justified by the principle of double effect and proportionality',
      'It is ethically distinct from euthanasia: the intent is to relieve suffering, not to hasten death',
      'Refractory symptoms must have been treated with all reasonable alternatives before sedation',
      'Proportional sedation (lightest level to achieve comfort) is preferred over continuous deep sedation',
    ],
    [
      'Palliative sedation is legal in all U.S. states when performed with appropriate intent and documentation',
      'The Supreme Court distinguished palliative sedation from assisted suicide in Vacco v. Quill (1997)',
      'Institutional policies and palliative care consultation are recommended before initiating',
      'Documentation of intent, refractory nature of symptoms, and informed consent is critical',
    ],
    [
      'A patient with terminal cancer has intractable pain unresponsive to escalating opioid therapy',
      'A dying patient experiences refractory delirium with extreme agitation in the final days of life',
      'A family requests sedation for an imminently dying patient experiencing existential distress',
    ],
    [
      'Confirm that symptoms are truly refractory — all reasonable alternatives have been attempted',
      'Obtain informed consent from the patient or surrogate, explaining the intent, risks, and expected course',
      'Use proportional sedation — titrate to comfort, not to unconsciousness unless necessary',
      'Document the clinical rationale, consent, and ongoing reassessment clearly',
    ],
    [
      'Palliative sedation does not shorten life in most studies when appropriately applied',
      'Existential suffering as an indication for sedation remains controversial',
      'Palliative sedation is underutilized due to misconceptions that it constitutes euthanasia',
    ],
    [
      'Cherny NI, Radbruch L; Board of EAPC. European Association for Palliative Care recommended framework for the use of sedation. Palliat Med. 2009;23:581-593.',
      'Vacco v. Quill, 521 U.S. 793 (1997).',
      'Maltoni M, et al. Palliative sedation in end-of-life care and survival: a systematic review. J Clin Oncol. 2012;30:1378-1383.',
    ],
  ),

  'brain-death-determination': entry(
    'brain-death-determination',
    'Brain Death Determination',
    'end-of-life',
    'The clinical and ethical framework for determining death by neurological criteria (brain death), including the medical standards for diagnosis and the ethical obligations surrounding family communication and organ donation.',
    [
      'Brain death is legal death — a patient declared brain dead is dead, not "as good as dead"',
      'The concept of brain death is accepted by medical consensus but remains philosophically debated',
      'Religious and cultural objections to brain death criteria exist and require sensitive handling',
      'Families may struggle to accept brain death when the patient appears alive on mechanical support',
    ],
    [
      'The Uniform Determination of Death Act (UDDA, 1981) defines death as irreversible cessation of circulatory/respiratory functions OR irreversible cessation of all brain functions, including the brainstem',
      'AAN guidelines (2010, updated) provide the clinical standards for brain death determination',
      'New Jersey and New York have provisions accommodating religious objections to brain death',
      'Brain death determination requires specific clinical examinations and may include ancillary testing',
    ],
    [
      'A family refuses to accept the brain death diagnosis of their loved one and demands continued ventilation',
      'A patient meeting clinical brain death criteria is a potential organ donor; the procurement team is contacted',
      'An apnea test is attempted but cannot be completed due to hemodynamic instability',
    ],
    [
      'Ensure all prerequisites are met (known cause, exclusion of confounders, normothermia, adequate time)',
      'Perform two clinical examinations demonstrating absent brainstem reflexes and apnea',
      'Use ancillary testing (EEG, cerebral blood flow study) when clinical exam is equivocal or incomplete',
      'Communicate with the family using clear, compassionate language before, during, and after determination',
    ],
    [
      'The time of death is the time brain death is declared, not the time the ventilator is removed',
      'Families need time to process — rushing from brain death declaration to organ donation discussion can damage trust',
      'A small number of jurisdictions allow religious accommodation for continued ventilation after brain death',
    ],
    [
      'Uniform Determination of Death Act (UDDA), Uniform Law Commission, 1981.',
      'Wijdicks EFM, et al. Evidence-based guideline update: Determining brain death in adults. Neurology. 2010;74:1911-1918.',
      'President\'s Council on Bioethics. Controversies in the Determination of Death. 2008.',
    ],
  ),

  'justice-vulnerable-populations': entry(
    'justice-vulnerable-populations',
    'Justice and Vulnerable Populations',
    'resource-allocation',
    'Ethical obligations to ensure equitable access to healthcare and fair treatment for vulnerable and marginalized populations, including those defined by socioeconomic status, race, disability, immigration status, incarceration, or homelessness.',
    [
      'Vulnerability creates heightened ethical obligations, not diminished ones',
      'Health disparities are not merely unfortunate — they reflect systemic injustice requiring active remediation',
      'Structural determinants of health (housing, education, food access) are ethical concerns, not just social ones',
      'Cultural humility and implicit bias awareness are professional ethical obligations',
    ],
    [
      'Title VI of the Civil Rights Act prohibits discrimination in federally funded healthcare',
      'Section 1557 of the ACA extends nondiscrimination protections to healthcare settings',
      'Incarcerated individuals retain the right to healthcare (Estelle v. Gamble, 1977)',
      'Emergency Medical Treatment and Labor Act (EMTALA) ensures access regardless of immigration or insurance status',
    ],
    [
      'An undocumented immigrant presents with a chronic condition requiring ongoing specialist care',
      'A homeless patient is repeatedly discharged to the street without adequate follow-up resources',
      'An incarcerated patient requests specialty care that the correctional facility denies',
    ],
    [
      'Screen all patients for social determinants of health using validated tools',
      'Advocate for patients facing systemic barriers to accessing care',
      'Examine institutional policies for practices that may disproportionately harm vulnerable groups',
      'Engage in community health initiatives that address root causes of health inequity',
    ],
    [
      'Implicit bias affects clinical decision-making even among well-intentioned providers',
      'Healthcare is necessary but not sufficient for health equity — upstream determinants must be addressed',
      'Advocacy is a professional obligation, not an optional add-on to clinical care',
    ],
    [
      'Estelle v. Gamble, 429 U.S. 97 (1977).',
      'Braveman P. Health disparities and health equity. Annu Rev Public Health. 2006;27:167-194.',
      'AMA Code of Medical Ethics, Opinion 11.1.1 — Discrimination in Health Care.',
    ],
  ),
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Search ethics entries by query string across name, description, principles, and pearls.
 */
export function searchEthicsEntries(query: string): MedicalEthicsEntry[] {
  const lower = query.toLowerCase();
  return Object.values(MEDICAL_ETHICS_ENTRIES).filter((e) => {
    const searchable = [
      e.name,
      e.description,
      ...e.ethicalPrinciples,
      ...e.legalConsiderations,
      ...e.clinicalScenarios,
      ...e.decisionFramework,
      ...e.keyPearls,
      ...e.references,
    ].join(' ').toLowerCase();
    return searchable.includes(lower);
  });
}

/**
 * Filter ethics entries by one or more categories.
 */
export function filterByCategory(
  categories: MedicalEthicsCategory | MedicalEthicsCategory[],
): MedicalEthicsEntry[] {
  const cats = Array.isArray(categories) ? categories : [categories];
  return Object.values(MEDICAL_ETHICS_ENTRIES).filter((e) =>
    cats.includes(e.category),
  );
}

/**
 * Retrieve a single entry by its ID. Returns undefined if not found.
 */
export function getEntryById(id: string): MedicalEthicsEntry | undefined {
  return MEDICAL_ETHICS_ENTRIES[id];
}
