/**
 * Patient Advocacy Database
 *
 * Comprehensive database of patient advocacy entries for SOMA medical education.
 * Covers rights, navigation, insurance, advance directives, communication,
 * safety, access, and legal topics to empower patients in healthcare settings.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AdvocacyCategory =
  | 'rights'
  | 'navigation'
  | 'insurance'
  | 'advance-directive'
  | 'communication'
  | 'safety'
  | 'access'
  | 'legal';

export interface PatientAdvocacyEntry {
  id: string;
  name: string;
  nameEs: string;
  category: AdvocacyCategory;
  description: string;
  keyPoints: string[];
  actionSteps: string[];
  resources: string[];
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const entry = (
  id: string,
  name: string,
  nameEs: string,
  category: AdvocacyCategory,
  description: string,
  keyPoints: string[],
  actionSteps: string[],
  resources: string[],
  patientExplanation: string,
): PatientAdvocacyEntry => ({
  id,
  name,
  nameEs,
  category,
  description,
  keyPoints,
  actionSteps,
  resources,
  patientExplanation,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const PATIENT_ADVOCACY_ENTRIES: Record<string, PatientAdvocacyEntry> = {

  // ── Rights ──────────────────────────────────────────────────────────────

  'right-to-informed-consent': entry(
    'right-to-informed-consent',
    'Right to Informed Consent',
    'Derecho al consentimiento informado',
    'rights',
    'Patients have the legal and ethical right to receive clear information about proposed treatments, including risks, benefits, and alternatives, before agreeing to any medical procedure.',
    [
      'Providers must disclose the nature of the procedure, its risks, benefits, and alternatives',
      'Consent must be given voluntarily without coercion',
      'The patient must have decision-making capacity to provide valid consent',
      'Consent can be withdrawn at any time before or during a procedure',
    ],
    [
      'Ask your provider to explain the procedure in plain language',
      'Request written materials or visual aids if needed',
      'Take time to consider your options — you are not required to decide immediately',
      'Bring a trusted person to help you ask questions and take notes',
    ],
    [
      'American Medical Association – Informed Consent overview',
      'U.S. Department of Health and Human Services – Patient Rights',
      'National Institutes of Health – Informed Consent in Clinical Research',
    ],
    'Before any test, surgery, or treatment, your doctor must explain what will happen, why it is recommended, what could go wrong, and what other options exist. You always have the right to ask questions and to say no.',
  ),

  'right-to-privacy': entry(
    'right-to-privacy',
    'Right to Medical Privacy',
    'Derecho a la privacidad médica',
    'rights',
    'Under HIPAA, patients have the right to control who can access their medical information and to be informed about how their health data is used and disclosed.',
    [
      'HIPAA protects individually identifiable health information (PHI)',
      'Providers may share PHI for treatment, payment, and healthcare operations without separate consent',
      'Patients can request restrictions on certain disclosures',
      'Breaches must be reported to affected individuals within 60 days',
    ],
    [
      'Ask your provider for a Notice of Privacy Practices',
      'Review and update your authorization forms regularly',
      'Request an accounting of disclosures to see who accessed your records',
      'File a complaint with the HHS Office for Civil Rights if your privacy is violated',
    ],
    [
      'HHS – HIPAA for Individuals',
      'Office for Civil Rights – Filing a Health Information Privacy Complaint',
      'HealthIT.gov – Your Health Information, Your Rights',
    ],
    'Your medical information is private. Doctors, hospitals, and insurers must follow strict rules about who can see your health records. You can ask who has looked at your information and file a complaint if your privacy is not respected.',
  ),

  'right-to-refuse-treatment': entry(
    'right-to-refuse-treatment',
    'Right to Refuse Treatment',
    'Derecho a rechazar tratamiento',
    'rights',
    'Competent adult patients have the legal right to refuse any medical treatment, even life-sustaining interventions, provided they understand the consequences of their decision.',
    [
      'Refusal is valid only when the patient has decision-making capacity',
      'Providers must document the informed refusal and its potential consequences',
      'Exceptions may apply in psychiatric emergencies or public health orders',
      'Refusing treatment does not forfeit the right to other forms of care',
    ],
    [
      'Tell your provider clearly that you do not wish to proceed',
      'Ask about alternative treatments or watchful waiting',
      'Request documentation of your refusal and the risks explained to you',
      'Consider discussing your decision with a trusted family member or advocate',
    ],
    [
      'American Hospital Association – Patient Care Partnership',
      'Legal Information Institute – Right to Refuse Medical Treatment',
      'National Academy of Elder Law Attorneys – Treatment Refusal Rights',
    ],
    'You can say no to any treatment, test, or procedure. Your doctor should explain what might happen if you decline, but the final decision belongs to you. Refusing one treatment does not mean you lose access to other care.',
  ),

  // ── Navigation ──────────────────────────────────────────────────────────

  'finding-a-primary-care-provider': entry(
    'finding-a-primary-care-provider',
    'Finding a Primary Care Provider',
    'Cómo encontrar un médico de atención primaria',
    'navigation',
    'Guidance on selecting a primary care physician or provider who fits your needs, including how to evaluate credentials, communication style, and insurance compatibility.',
    [
      'A primary care provider (PCP) manages preventive care, chronic conditions, and referrals',
      'Check that the provider is board-certified and in good standing with state medical boards',
      'Confirm the provider accepts your insurance plan before scheduling',
      'Consider logistics such as office location, hours, telehealth availability, and language services',
    ],
    [
      'Use your insurer\'s online provider directory to identify in-network PCPs',
      'Read patient reviews on verified platforms and check disciplinary records on your state medical board site',
      'Schedule a new-patient visit to evaluate communication style and office environment',
      'Prepare a health history summary to bring to your first appointment',
    ],
    [
      'Medicare.gov – Physician Compare',
      'ABMS – Is Your Doctor Board Certified?',
      'AAFP – Tips for Choosing a Primary Care Doctor',
    ],
    'Your primary care doctor is the first person you see for most health concerns. To find one, check with your insurance for covered doctors, look at reviews, and schedule a first visit to see if you feel comfortable.',
  ),

  'understanding-referral-process': entry(
    'understanding-referral-process',
    'Understanding the Referral Process',
    'Cómo entender el proceso de referencia médica',
    'navigation',
    'Many insurance plans and health systems require a referral from a primary care provider before seeing a specialist. Understanding this process prevents delays and unexpected costs.',
    [
      'HMO plans typically require a referral; PPO plans usually do not',
      'A referral authorizes a set number of specialist visits within a time window',
      'Pre-authorization is different from a referral and may also be required',
      'Emergency specialist care generally does not require a referral',
    ],
    [
      'Ask your PCP which specialist they recommend and why',
      'Confirm with your insurance that the referral has been submitted and approved',
      'Verify the specialist is in-network before scheduling',
      'Keep copies of referral paperwork for your personal records',
    ],
    [
      'Healthcare.gov – Referral glossary entry',
      'Kaiser Family Foundation – Managed Care Explained',
      'CMS – Medicare Referral Requirements',
    ],
    'Some insurance plans require your regular doctor to send a referral before you can see a specialist. Always check whether you need one so you avoid surprise bills or denied coverage.',
  ),

  'preparing-for-appointments': entry(
    'preparing-for-appointments',
    'Preparing for Medical Appointments',
    'Cómo prepararse para citas médicas',
    'navigation',
    'Effective appointment preparation helps patients communicate their concerns clearly, leading to better diagnoses and treatment plans.',
    [
      'Write down your symptoms, questions, and medication list before the visit',
      'Bring insurance cards, photo ID, and any relevant prior medical records',
      'Arrive early to complete paperwork and reduce stress',
      'Know your family health history as providers frequently ask about it',
    ],
    [
      'Create a written list of your top three concerns to discuss',
      'Download and complete any intake forms available on the provider\'s website',
      'Bring a notebook or ask permission to record the conversation for reference',
      'Ask the office what to expect regarding visit length and follow-up procedures',
    ],
    [
      'Agency for Healthcare Research and Quality – Questions to Ask Your Doctor',
      'NIH MedlinePlus – Getting the Most Out of Your Doctor Visit',
      'American College of Physicians – Patient Preparation Guide',
    ],
    'Before your doctor visit, write down your symptoms, medications, and questions. Bring your insurance card and ID. Being prepared helps your doctor understand your needs quickly and gives you time to discuss what matters most.',
  ),

  // ── Insurance ───────────────────────────────────────────────────────────

  'understanding-health-insurance-plans': entry(
    'understanding-health-insurance-plans',
    'Understanding Health Insurance Plans',
    'Cómo entender los planes de seguro médico',
    'insurance',
    'Overview of common health insurance plan types — HMO, PPO, EPO, POS — and how they differ in cost-sharing, provider networks, and out-of-pocket expenses.',
    [
      'HMO plans require a PCP and referrals but often have lower premiums',
      'PPO plans allow seeing specialists without referrals but cost more',
      'EPO plans combine elements of both but do not cover out-of-network care except emergencies',
      'All marketplace plans must cover ten Essential Health Benefits under the ACA',
    ],
    [
      'Compare plan summaries during open enrollment using the Summary of Benefits and Coverage (SBC)',
      'Estimate your annual healthcare use to choose between lower-premium/higher-deductible and higher-premium/lower-deductible plans',
      'Confirm that your current providers and medications are covered before switching plans',
      'Check whether the plan covers out-of-state care if you travel frequently',
    ],
    [
      'Healthcare.gov – Health Insurance Plan Types',
      'Kaiser Family Foundation – Health Insurance Basics',
      'National Association of Insurance Commissioners – Consumer Resources',
    ],
    'Health insurance plans differ in how much you pay each month, which doctors you can see, and what you pay at the time of care. Comparing plans side by side during enrollment season is the best way to find one that fits your budget and health needs.',
  ),

  'appealing-insurance-denials': entry(
    'appealing-insurance-denials',
    'Appealing Insurance Denials',
    'Cómo apelar denegaciones de seguro',
    'insurance',
    'When an insurance company denies coverage for a service, patients have the right to appeal the decision through internal and external review processes.',
    [
      'Insurers must provide a written explanation for any denial',
      'Internal appeals must be filed within the timeframe stated in the denial letter (usually 180 days)',
      'If the internal appeal fails, an external review by an independent organization is available',
      'Urgent care denials may qualify for expedited review within 72 hours',
    ],
    [
      'Read the denial letter carefully and note the reason code and deadline',
      'Request your complete claim file from the insurer',
      'Ask your provider to write a letter of medical necessity supporting the service',
      'Submit your internal appeal in writing with all supporting documentation',
      'If denied again, file for external review through your state insurance department',
    ],
    [
      'CMS – Appeals Process Overview',
      'Healthcare.gov – How to Appeal an Insurance Decision',
      'Patient Advocate Foundation – Insurance Appeal Assistance',
    ],
    'If your insurance says no to a treatment or service, you can fight that decision. Ask for the reason in writing, gather supporting documents from your doctor, and file an appeal. If the insurance company still says no, an outside reviewer can look at your case.',
  ),

  'no-surprises-act': entry(
    'no-surprises-act',
    'No Surprises Act Protections',
    'Protecciones de la Ley de No Sorpresas',
    'insurance',
    'The No Surprises Act (effective January 2022) protects patients from unexpected medical bills when they receive emergency care or are treated by out-of-network providers at in-network facilities.',
    [
      'Emergency services cannot be billed at out-of-network rates without consent',
      'Out-of-network providers at in-network facilities must obtain advance consent to balance-bill',
      'Good-faith cost estimates must be provided to uninsured or self-pay patients before scheduled services',
      'An independent dispute resolution process settles payment disagreements between insurers and providers',
    ],
    [
      'Ask whether all providers involved in your care are in-network before a planned procedure',
      'Do not sign surprise-billing consent forms without reading them carefully',
      'Request a good-faith estimate if you are uninsured or paying out of pocket',
      'Report suspected violations to CMS or your state insurance department',
    ],
    [
      'CMS – No Surprises Act overview',
      'HHS – No Surprises: Understand Your Rights',
      'Commonwealth Fund – No Surprises Act Explainer',
    ],
    'A federal law called the No Surprises Act protects you from unexpected medical bills. If you go to an emergency room or have a procedure at a hospital that takes your insurance, you should not receive a surprise bill from an out-of-network doctor who treated you there.',
  ),

  // ── Advance Directives ─────────────────────────────────────────────────

  'living-will': entry(
    'living-will',
    'Living Will',
    'Testamento vital',
    'advance-directive',
    'A living will is a legal document that specifies which life-sustaining treatments a person does or does not want if they become unable to communicate their wishes.',
    [
      'Addresses scenarios such as terminal illness, permanent unconsciousness, and persistent vegetative state',
      'Can specify preferences on mechanical ventilation, tube feeding, dialysis, and resuscitation',
      'Must be signed according to state-specific witnessing and notarization requirements',
      'Should be reviewed and updated periodically, especially after major health changes',
    ],
    [
      'Reflect on your values regarding quality of life and medical interventions',
      'Discuss your wishes with your healthcare proxy, family, and physician',
      'Complete the form recognized in your state (many states offer free templates)',
      'Distribute copies to your proxy, physician, hospital, and a secure personal file',
    ],
    [
      'National Hospice and Palliative Care Organization – CaringInfo',
      'American Bar Association – Advance Directive Forms by State',
      'Five Wishes – advance directive document',
    ],
    'A living will lets you write down what medical treatments you want or do not want if you become too sick to speak for yourself. For example, you can say whether you want to be kept on a breathing machine. It is important to share this document with your family and doctor.',
  ),

  'healthcare-power-of-attorney': entry(
    'healthcare-power-of-attorney',
    'Healthcare Power of Attorney',
    'Poder notarial para decisiones de salud',
    'advance-directive',
    'A healthcare power of attorney (also called a healthcare proxy) designates a trusted person to make medical decisions on your behalf if you are unable to do so.',
    [
      'The appointed agent can consent to or refuse treatment on your behalf',
      'The agent\'s authority activates only when the patient lacks decision-making capacity',
      'Choose someone who understands your values and can handle difficult conversations',
      'State laws vary on who may serve as an agent (some prohibit treating physicians)',
    ],
    [
      'Choose a person you trust who is willing and able to act as your agent',
      'Have a detailed conversation with your agent about your care preferences',
      'Complete the healthcare power of attorney form valid in your state',
      'Ensure the document is accessible to providers by uploading it to your patient portal or bringing it to appointments',
    ],
    [
      'National Institute on Aging – Advance Care Planning',
      'AARP – Healthcare Power of Attorney Guide',
      'State-specific forms available through CaringInfo (NHPCO)',
    ],
    'A healthcare power of attorney lets you choose someone you trust to make medical decisions for you if you cannot speak for yourself. Talk to this person about your wishes so they know what you would want.',
  ),

  'polst-molst-forms': entry(
    'polst-molst-forms',
    'POLST / MOLST Forms',
    'Formularios POLST / MOLST',
    'advance-directive',
    'POLST (Physician Orders for Life-Sustaining Treatment) and MOLST (Medical Orders for Life-Sustaining Treatment) are portable medical orders that translate patient wishes into actionable clinical directives.',
    [
      'POLST forms are signed by both the patient (or surrogate) and a clinician',
      'They travel with the patient across care settings — hospital, home, nursing facility',
      'Appropriate for patients with serious illness or advanced frailty',
      'Different from advance directives: POLST forms are medical orders, not merely wishes',
    ],
    [
      'Discuss POLST with your physician if you have a serious illness or are elderly',
      'Review and update the form when your health status changes significantly',
      'Keep the original in a visible location at home (e.g., on the refrigerator)',
      'Ensure copies are in your medical record and available to emergency responders',
    ],
    [
      'National POLST – polst.org',
      'AHRQ – POLST and Advance Care Planning',
      'Journal of Palliative Medicine – POLST Best Practices',
    ],
    'POLST and MOLST are medical order forms for people with serious illnesses. Unlike a living will, these are actual doctor\'s orders that paramedics and hospital staff follow immediately. They cover decisions like CPR and hospital transfer.',
  ),

  // ── Communication ───────────────────────────────────────────────────────

  'teach-back-method': entry(
    'teach-back-method',
    'The Teach-Back Method',
    'El método de enseñanza recíproca',
    'communication',
    'The teach-back method is a communication technique where patients repeat health information in their own words, helping providers confirm understanding and identify gaps.',
    [
      'Proven to improve medication adherence and health outcomes',
      'Places the responsibility for clear communication on the provider, not the patient',
      'Effective across literacy levels, languages, and age groups',
      'Endorsed by AHRQ, IHI, and the Joint Commission',
    ],
    [
      'After your doctor explains something, summarize it back: "So what I understand is..."',
      'If you cannot explain it, ask the provider to re-explain using simpler language',
      'Use this technique for medication instructions, post-operative care, and diagnosis explanations',
      'Encourage family members present at the visit to practice teach-back as well',
    ],
    [
      'AHRQ – Health Literacy Universal Precautions Toolkit',
      'IHI – Always Use Teach-Back',
      'Joint Commission – Advancing Health Literacy',
    ],
    'After your doctor explains something, try repeating it back in your own words. This helps both you and your doctor make sure you understood correctly. It is okay to ask them to explain again if anything is unclear.',
  ),

  'using-medical-interpreters': entry(
    'using-medical-interpreters',
    'Using Medical Interpreters',
    'Cómo usar intérpretes médicos',
    'communication',
    'Patients with limited English proficiency have the legal right to qualified medical interpretation services at no cost, ensuring accurate communication during healthcare encounters.',
    [
      'Title VI of the Civil Rights Act requires federally funded providers to offer language services',
      'Qualified medical interpreters are preferred over family members or bilingual staff for accuracy',
      'Interpreter services may be provided in person, by phone, or via video',
      'Using untrained interpreters increases the risk of medical errors',
    ],
    [
      'Request an interpreter when scheduling your appointment',
      'Speak directly to your provider, not to the interpreter',
      'Ask the interpreter to clarify if something does not make sense after translation',
      'Report any instance where interpreter services are denied to the HHS Office for Civil Rights',
    ],
    [
      'HHS – Language Access Obligations',
      'National Council on Interpreting in Health Care',
      'CMS – Requirements for Interpreter Services',
    ],
    'If English is not your first language, you have the right to a medical interpreter at no charge. Ask for one when you schedule your visit. A trained interpreter helps make sure nothing is lost in translation so you get safe, accurate care.',
  ),

  'shared-decision-making': entry(
    'shared-decision-making',
    'Shared Decision-Making',
    'Toma de decisiones compartida',
    'communication',
    'Shared decision-making is a collaborative process in which patients and providers work together to choose treatments that align with the patient\'s values, preferences, and clinical evidence.',
    [
      'Integrates clinical evidence with patient values and preferences',
      'Especially important for preference-sensitive decisions (e.g., surgery vs. medication)',
      'Decision aids such as brochures, videos, and interactive tools can support the process',
      'Associated with higher patient satisfaction and lower decisional regret',
    ],
    [
      'Ask your provider to explain all reasonable treatment options, not just one',
      'Share your priorities — for example, minimizing side effects vs. fastest recovery',
      'Request decision aids if available for your condition',
      'Take time to deliberate, especially for non-urgent decisions',
    ],
    [
      'Ottawa Hospital Research Institute – Patient Decision Aids',
      'AHRQ – The SHARE Approach',
      'Informed Medical Decisions Foundation',
    ],
    'You and your doctor should make health decisions together. Your doctor knows the medical facts, and you know what matters most in your life. By sharing information both ways, you can choose a plan that fits your situation and values.',
  ),

  // ── Safety ──────────────────────────────────────────────────────────────

  'medication-safety': entry(
    'medication-safety',
    'Medication Safety',
    'Seguridad con los medicamentos',
    'safety',
    'Medication errors are among the most common preventable harms in healthcare. Patients play a vital role in preventing errors by verifying prescriptions, understanding dosages, and reporting adverse reactions.',
    [
      'Always confirm the name, dose, frequency, and purpose of every medication',
      'Drug interactions can occur between prescription drugs, OTC medications, and supplements',
      'Keep an up-to-date medication list accessible to all providers',
      'Report adverse drug reactions to your provider and to the FDA MedWatch program',
    ],
    [
      'Maintain a current list of all medications, doses, and prescribing providers',
      'At every appointment, ask for a medication reconciliation',
      'Use one pharmacy when possible to enable automatic interaction checks',
      'Ask "What is this medication for?" each time you receive a new prescription',
    ],
    [
      'FDA – MedWatch Safety Reporting',
      'ISMP – Consumer Medication Safety',
      'AHRQ – 20 Tips to Prevent Medical Errors',
    ],
    'Every time you get a new medicine, ask what it is, what it does, and how to take it. Keep a written list of everything you take — including vitamins and supplements — and show it to every doctor you visit. This helps prevent dangerous drug mix-ups.',
  ),

  'reporting-medical-errors': entry(
    'reporting-medical-errors',
    'Reporting Medical Errors',
    'Cómo reportar errores médicos',
    'safety',
    'Patients and families have the right to report medical errors and adverse events. Reporting improves patient safety by enabling healthcare systems to identify and correct systemic issues.',
    [
      'Medical errors can include wrong-site surgery, misdiagnosis, medication mistakes, and falls',
      'Hospitals are required to have internal incident-reporting systems',
      'Patients can report to the facility, state health department, or The Joint Commission',
      'Federal Patient Safety Organizations (PSOs) collect anonymized error data to improve safety',
    ],
    [
      'Document the error in writing, including dates, times, people involved, and what happened',
      'Report the incident to the hospital\'s patient safety or risk management office',
      'File a complaint with The Joint Commission or your state health department if needed',
      'Consider contacting a patient safety advocate or attorney for serious harm',
    ],
    [
      'The Joint Commission – Report a Safety Concern',
      'AHRQ – Patient Safety Network',
      'CMS – Quality Improvement Organizations',
    ],
    'If something goes wrong during your care — like getting the wrong medicine or a wrong diagnosis — you can and should report it. Tell the hospital, and if needed, contact your state health department or The Joint Commission. Reporting helps prevent the same error from hurting someone else.',
  ),

  'infection-prevention': entry(
    'infection-prevention',
    'Infection Prevention in Healthcare Settings',
    'Prevención de infecciones en entornos de salud',
    'safety',
    'Healthcare-associated infections (HAIs) are a major safety concern. Patients can actively reduce their risk by asking about hygiene practices and understanding prevention protocols.',
    [
      'Hand hygiene is the single most effective measure against HAIs',
      'Common HAIs include catheter-associated UTIs, surgical site infections, and C. difficile',
      'Patients have the right to ask any provider to wash their hands',
      'Hospitals report HAI rates publicly through CMS Hospital Compare',
    ],
    [
      'Ask every provider if they have washed or sanitized their hands before touching you',
      'Keep wounds clean and follow discharge instructions for wound care',
      'Ask whether catheters or IV lines are still necessary each day',
      'Check hospital infection rates on Medicare.gov\'s Care Compare tool',
    ],
    [
      'CDC – Healthcare-Associated Infections',
      'WHO – Clean Your Hands Campaign',
      'CMS – Hospital Compare',
    ],
    'Infections caught in hospitals are a real risk. You can help protect yourself by asking doctors and nurses to wash their hands, keeping cuts clean, and asking daily whether tubes or IVs can be removed. Do not be afraid to speak up — it is your safety.',
  ),

  // ── Access ──────────────────────────────────────────────────────────────

  'emergency-care-rights': entry(
    'emergency-care-rights',
    'Emergency Care Rights (EMTALA)',
    'Derechos de atención de emergencia (EMTALA)',
    'access',
    'The Emergency Medical Treatment and Labor Act (EMTALA) requires Medicare-participating hospitals to screen and stabilize anyone who arrives at the emergency department, regardless of insurance status or ability to pay.',
    [
      'Applies to all hospitals that accept Medicare, which includes nearly every emergency department in the U.S.',
      'Requires a medical screening examination to determine whether an emergency condition exists',
      'Stabilization must be provided before transfer or discharge',
      'Violations can result in fines, exclusion from Medicare, and civil liability',
    ],
    [
      'Go to the nearest emergency department if you believe you have a medical emergency',
      'You cannot be turned away or asked to pay before being screened',
      'If you are told to leave before being examined, ask for the hospital\'s EMTALA obligations in writing',
      'Report EMTALA violations to CMS regional offices',
    ],
    [
      'CMS – EMTALA Overview',
      'American College of Emergency Physicians – EMTALA Fact Sheet',
      'HHS Office of Inspector General – EMTALA Enforcement',
    ],
    'If you go to an emergency room, the hospital must check your condition and provide stabilizing treatment before they can send you home or transfer you, even if you do not have insurance. This is a federal law.',
  ),

  'disability-accommodations': entry(
    'disability-accommodations',
    'Disability Accommodations in Healthcare',
    'Adaptaciones por discapacidad en la atención médica',
    'access',
    'Under the Americans with Disabilities Act (ADA) and Section 504 of the Rehabilitation Act, healthcare providers must offer reasonable accommodations to patients with disabilities.',
    [
      'Providers must ensure physical access (ramps, accessible exam tables, scales)',
      'Effective communication accommodations include sign language interpreters, large print, and screen readers',
      'Service animals must be permitted in healthcare facilities',
      'Providers cannot deny care solely on the basis of a disability',
    ],
    [
      'Inform the provider\'s office of your accommodation needs when scheduling',
      'Request accessible medical equipment such as height-adjustable exam tables',
      'Ask for materials in alternative formats (Braille, audio, large print)',
      'File a complaint with the DOJ or HHS Office for Civil Rights if accommodations are denied',
    ],
    [
      'ADA National Network – Healthcare Access',
      'HHS – Section 504 and Section 1557',
      'National Disability Rights Network',
    ],
    'If you have a disability, healthcare providers must make changes so you can receive care — for example, providing sign language interpreters, accessible exam rooms, or large-print materials. If a provider refuses, you can file a complaint.',
  ),

  'telehealth-access': entry(
    'telehealth-access',
    'Telehealth Access and Rights',
    'Acceso y derechos de telesalud',
    'access',
    'Telehealth enables patients to receive medical care remotely through video, phone, or secure messaging. Understanding telehealth policies helps patients access care when in-person visits are impractical.',
    [
      'Most insurers, including Medicare and Medicaid, now cover a range of telehealth services',
      'Patients should verify that their provider is licensed in the state where the patient is located',
      'HIPAA protections apply to telehealth just as they do to in-person visits',
      'Audio-only visits may be available for patients without broadband or video capability',
    ],
    [
      'Ask your provider whether your concern can be addressed via telehealth',
      'Ensure you have a private, quiet space for your virtual visit',
      'Test your technology (camera, microphone, internet) before the appointment',
      'Check your insurance plan for telehealth coverage and any copay differences',
    ],
    [
      'HHS – Telehealth Policy Resources',
      'AMA – Telehealth Implementation Playbook',
      'FCC – Lifeline Program for low-cost broadband',
    ],
    'Telehealth lets you see a doctor using your phone or computer without leaving home. Many insurance plans cover these visits. Make sure you are in a quiet, private spot, and test your tech before the appointment starts.',
  ),

  // ── Legal ───────────────────────────────────────────────────────────────

  'medical-malpractice-basics': entry(
    'medical-malpractice-basics',
    'Medical Malpractice Basics',
    'Conceptos básicos de negligencia médica',
    'legal',
    'Medical malpractice occurs when a healthcare provider deviates from the accepted standard of care, causing injury to a patient. Understanding the basics helps patients recognize when their rights may have been violated.',
    [
      'Four elements must be proven: duty, breach, causation, and damages',
      'A bad outcome alone does not constitute malpractice — negligence must be shown',
      'Statutes of limitations vary by state, typically 1 to 3 years from discovery of harm',
      'Expert medical testimony is usually required to establish the standard of care',
    ],
    [
      'Document everything — keep copies of medical records, bills, and correspondence',
      'Request your complete medical records as soon as possible',
      'Consult a medical malpractice attorney for a case evaluation (many offer free consultations)',
      'Do not delay — filing deadlines are strict and vary by state',
    ],
    [
      'American Bar Association – Patient Rights and Medical Malpractice',
      'FindLaw – Medical Malpractice Basics',
      'State bar association lawyer referral services',
    ],
    'Medical malpractice means a doctor or hospital made a mistake that fell below the accepted standard of care and caused you harm. If you believe this happened to you, gather your records and consult a lawyer, because there are deadlines for taking action.',
  ),

  'hipaa-violations-and-complaints': entry(
    'hipaa-violations-and-complaints',
    'HIPAA Violations and Complaints',
    'Violaciones de HIPAA y cómo presentar quejas',
    'legal',
    'Patients who believe their health information has been improperly used or disclosed can file a HIPAA complaint with the U.S. Department of Health and Human Services Office for Civil Rights.',
    [
      'Complaints must be filed within 180 days of discovering the violation',
      'OCR investigates complaints and may impose corrective action plans or financial penalties',
      'Common violations include unauthorized access to records, improper disclosures, and lack of safeguards',
      'There is no private right of action under HIPAA — complaints go through OCR, not courts',
    ],
    [
      'Document the suspected violation with dates, names, and specifics',
      'File a complaint online through the OCR complaint portal',
      'Contact your state attorney general, who may have additional enforcement authority',
      'If you suffered financial harm, consult an attorney about state privacy law claims',
    ],
    [
      'HHS OCR – How to File a HIPAA Complaint',
      'HHS – HIPAA Enforcement Highlights',
      'National Health Law Program – Patient Privacy Rights',
    ],
    'If someone shares your health information without permission, you can file a complaint with the government. Go to the HHS website, fill out the complaint form, and describe what happened. The government can investigate and hold the violator accountable.',
  ),

  'patient-grievance-process': entry(
    'patient-grievance-process',
    'Hospital Grievance Process',
    'Proceso de quejas del hospital',
    'legal',
    'Federal regulations require hospitals to maintain a formal grievance process allowing patients to voice complaints about care quality, staff behavior, safety, and billing.',
    [
      'CMS Conditions of Participation require a written grievance procedure',
      'Hospitals must acknowledge grievances promptly and provide written resolutions',
      'Patients cannot face retaliation for filing a grievance',
      'Unresolved grievances can be escalated to state health departments or accrediting organizations',
    ],
    [
      'Ask the hospital for its patient grievance policy and contact information',
      'Submit your complaint in writing, keeping a copy for your records',
      'Include specific dates, locations, staff names, and a clear description of the issue',
      'If the hospital does not resolve your grievance, escalate to your state health department or The Joint Commission',
    ],
    [
      'CMS – Hospital Conditions of Participation (42 CFR 482.13)',
      'The Joint Commission – Submit a Complaint',
      'State health department complaint portals',
    ],
    'Every hospital must have a way for you to file a formal complaint. If you are unhappy with your care, ask for the grievance process, put your complaint in writing, and expect a response. If the hospital does not fix the issue, you can contact your state health department.',
  ),

  'anti-discrimination-protections': entry(
    'anti-discrimination-protections',
    'Anti-Discrimination Protections in Healthcare',
    'Protecciones contra la discriminación en la atención médica',
    'legal',
    'Federal and state laws prohibit discrimination in healthcare based on race, color, national origin, sex, age, disability, religion, and other protected characteristics.',
    [
      'Title VI of the Civil Rights Act prohibits discrimination based on race, color, and national origin',
      'Section 1557 of the ACA is the broadest federal health-specific non-discrimination provision',
      'The ADA and Section 504 protect individuals with disabilities',
      'State laws may provide additional protections, such as for sexual orientation and gender identity',
    ],
    [
      'Know your protected characteristics under federal and state law',
      'Document any discriminatory treatment with specifics: what was said, who was present, when it happened',
      'File a complaint with the HHS Office for Civil Rights',
      'Contact a civil rights attorney or legal aid organization if you face ongoing discrimination',
    ],
    [
      'HHS Office for Civil Rights – Filing a Discrimination Complaint',
      'ADA.gov – Healthcare Providers and the ADA',
      'National Health Law Program – Health Care Rights',
    ],
    'It is against the law for doctors, hospitals, and insurers to treat you differently because of your race, sex, age, disability, or other personal characteristics. If you experience discrimination, document what happened and file a complaint with the government.',
  ),

  'understanding-medical-bills': entry(
    'understanding-medical-bills',
    'Understanding and Disputing Medical Bills',
    'Cómo entender y disputar facturas médicas',
    'legal',
    'Medical billing errors are common. Patients have the right to receive itemized bills, question charges, and dispute inaccuracies through formal processes.',
    [
      'Request an itemized bill to see every charge rather than just a summary balance',
      'Common billing errors include duplicate charges, incorrect procedure codes, and wrong patient information',
      'The No Surprises Act requires good-faith cost estimates for uninsured patients',
      'Medical debt cannot be reported to credit agencies for at least 12 months after the date of first billing',
    ],
    [
      'Request an itemized statement and review each line item',
      'Compare charges to your Explanation of Benefits (EOB) from your insurer',
      'Contact the billing department in writing to dispute any errors',
      'Ask about financial assistance programs, payment plans, or charity care if you cannot pay',
      'Consult a medical billing advocate for large or complex disputes',
    ],
    [
      'Consumer Financial Protection Bureau – Medical Billing and Collections',
      'Patient Advocate Foundation – Medical Debt Resources',
      'CMS – Hospital Price Transparency Requirements',
    ],
    'If a medical bill looks wrong, you have the right to ask for a detailed breakdown of every charge. Compare it to what your insurance says it covered. If numbers do not match, call the billing office and dispute the errors in writing.',
  ),

};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Search advocacy entries by keyword across name, description, keyPoints,
 * actionSteps, and patientExplanation fields. Case-insensitive.
 */
export function searchAdvocacyEntries(query: string): PatientAdvocacyEntry[] {
  const lower = query.toLowerCase();
  return Object.values(PATIENT_ADVOCACY_ENTRIES).filter((e) => {
    const searchable = [
      e.name,
      e.nameEs,
      e.description,
      e.patientExplanation,
      ...e.keyPoints,
      ...e.actionSteps,
      ...e.resources,
    ]
      .join(' ')
      .toLowerCase();
    return searchable.includes(lower);
  });
}

/**
 * Filter advocacy entries by one or more categories.
 */
export function filterByCategory(
  categories: AdvocacyCategory | AdvocacyCategory[],
): PatientAdvocacyEntry[] {
  const cats = Array.isArray(categories) ? categories : [categories];
  return Object.values(PATIENT_ADVOCACY_ENTRIES).filter((e) =>
    cats.includes(e.category),
  );
}

/**
 * Retrieve a single entry by its ID. Returns undefined if not found.
 */
export function getAdvocacyEntryById(
  id: string,
): PatientAdvocacyEntry | undefined {
  return PATIENT_ADVOCACY_ENTRIES[id];
}

/**
 * Return all unique categories present in the database.
 */
export function getAvailableCategories(): AdvocacyCategory[] {
  const set = new Set<AdvocacyCategory>(
    Object.values(PATIENT_ADVOCACY_ENTRIES).map((e) => e.category),
  );
  return Array.from(set);
}

/**
 * Return the total number of entries, optionally filtered by category.
 */
export function countAdvocacyEntries(category?: AdvocacyCategory): number {
  if (!category) return Object.keys(PATIENT_ADVOCACY_ENTRIES).length;
  return filterByCategory(category).length;
}
