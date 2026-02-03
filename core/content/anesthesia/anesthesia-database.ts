/**
 * Anesthesia Database
 *
 * Comprehensive anesthesia reference for SOMA medical education.
 * Covers 30+ entries across 9 categories: general-anesthesia,
 * regional-anesthesia, local-anesthesia, sedation, airway-management,
 * monitoring, pharmacology, complications, and perioperative.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AnesthesiaCategory =
  | 'general-anesthesia'
  | 'regional-anesthesia'
  | 'local-anesthesia'
  | 'sedation'
  | 'airway-management'
  | 'monitoring'
  | 'pharmacology'
  | 'complications'
  | 'perioperative';

export interface AnesthesiaEntry {
  id: string;
  name: string;
  category: AnesthesiaCategory;
  description: string;
  technique: string[];
  indications: string[];
  contraindications: string[];
  medications: string[];
  complications: string[];
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const entry = (
  id: string,
  name: string,
  category: AnesthesiaCategory,
  description: string,
  technique: string[],
  indications: string[],
  contraindications: string[],
  medications: string[],
  complications: string[],
  keyPearls: string[],
  references: string[],
): AnesthesiaEntry => ({
  id, name, category, description, technique, indications,
  contraindications, medications, complications, keyPearls, references,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const ANESTHESIA_ENTRIES: Record<string, AnesthesiaEntry> = {

  // ===== GENERAL ANESTHESIA =====

  'general-anesthesia-induction': entry(
    'general-anesthesia-induction',
    'General Anesthesia Induction',
    'general-anesthesia',
    'The process of transitioning a patient from consciousness to a state of general anesthesia, involving loss of consciousness, amnesia, analgesia, and muscle relaxation.',
    [
      'Preoxygenate with 100% O2 for 3-5 minutes or 8 vital capacity breaths',
      'Administer IV induction agent (propofol 1.5-2.5 mg/kg most common)',
      'Confirm loss of consciousness (loss of verbal response, eyelash reflex)',
      'Administer neuromuscular blocking agent if intubation planned',
      'Perform laryngoscopy and endotracheal intubation or place supraglottic airway',
      'Confirm placement with end-tidal CO2 and bilateral breath sounds',
    ],
    [
      'Major surgical procedures requiring immobility and airway control',
      'Procedures requiring muscle relaxation',
      'Patients unable to cooperate with regional or local anesthesia',
      'Surgery in body cavities (thoracic, abdominal, intracranial)',
    ],
    [
      'Patient refusal',
      'Known difficult airway without preparation',
      'Inadequate fasting (relative - assess aspiration risk)',
      'Severe hemodynamic instability (relative - consider etomidate or ketamine)',
    ],
    [
      'Propofol 1.5-2.5 mg/kg IV',
      'Etomidate 0.2-0.3 mg/kg IV',
      'Ketamine 1-2 mg/kg IV',
      'Succinylcholine 1-1.5 mg/kg IV',
      'Rocuronium 0.6-1.2 mg/kg IV',
      'Fentanyl 1-2 mcg/kg IV',
      'Lidocaine 1-1.5 mg/kg IV (to blunt airway reflexes)',
    ],
    [
      'Hypotension (especially with propofol)',
      'Aspiration of gastric contents',
      'Failed intubation / cannot intubate cannot ventilate',
      'Bronchospasm or laryngospasm',
      'Dental injury during laryngoscopy',
      'Anaphylaxis to induction agents',
    ],
    [
      'Preoxygenation creates an oxygen reserve; desaturation is slower in well-preoxygenated patients',
      'Rapid sequence induction (RSI) is indicated for full stomach / aspiration risk',
      'Etomidate preserves hemodynamic stability but may suppress adrenal function',
      'Ketamine is the induction agent of choice in hemodynamically unstable patients',
    ],
    [
      'Miller RD. Miller\'s Anesthesia, 9th ed. Elsevier, 2020',
      'ASA Practice Guidelines for Preoperative Fasting, Anesthesiology 2017',
    ],
  ),

  'general-anesthesia-maintenance': entry(
    'general-anesthesia-maintenance',
    'General Anesthesia Maintenance',
    'general-anesthesia',
    'Continuation of general anesthesia during surgery using inhaled volatile agents, IV agents, or a combination (balanced anesthesia) to maintain unconsciousness, analgesia, and appropriate surgical conditions.',
    [
      'Titrate volatile anesthetic to target MAC (minimum alveolar concentration)',
      'Maintain ventilation with volume- or pressure-controlled mode',
      'Administer supplemental opioids for analgesia as needed',
      'Redose neuromuscular blocking agents guided by train-of-four monitoring',
      'Monitor depth of anesthesia (clinical signs, BIS if available)',
      'Maintain hemodynamic stability with fluids and vasopressors as needed',
    ],
    [
      'Ongoing surgical procedure under general anesthesia',
      'Procedures lasting longer than brief induction-only cases',
    ],
    [
      'Known susceptibility to malignant hyperthermia (avoid volatile agents)',
      'Severe bronchospasm unresponsive to treatment (relative)',
    ],
    [
      'Sevoflurane 1-3% (MAC 2.0% in adults)',
      'Desflurane 3-9% (MAC 6.0% in adults)',
      'Isoflurane 0.5-1.5% (MAC 1.15% in adults)',
      'Nitrous oxide 50-70% as adjunct',
      'Propofol infusion 100-200 mcg/kg/min (TIVA)',
      'Remifentanil infusion 0.05-0.2 mcg/kg/min',
    ],
    [
      'Hemodynamic instability (hypotension, bradycardia)',
      'Intraoperative awareness',
      'Malignant hyperthermia (with volatile agents)',
      'Respiratory depression',
      'Hepatotoxicity (rare, historically with halothane)',
    ],
    [
      'MAC is additive: 0.5 MAC sevoflurane + 0.5 MAC N2O = 1.0 MAC total',
      'TIVA with propofol/remifentanil avoids volatile agents entirely',
      'BIS values 40-60 suggest adequate anesthetic depth',
      'MAC decreases with age, hypothermia, and concurrent opioids',
    ],
    [
      'Egan TD. Pharmacokinetics and Pharmacodynamics of Inhaled Anesthetics. In: Miller\'s Anesthesia, 9th ed.',
      'ASA Standards for Basic Anesthetic Monitoring, 2020',
    ],
  ),

  'general-anesthesia-emergence': entry(
    'general-anesthesia-emergence',
    'General Anesthesia Emergence',
    'general-anesthesia',
    'The process of transitioning a patient from general anesthesia back to consciousness, including reversal of neuromuscular blockade, return of protective reflexes, and extubation.',
    [
      'Discontinue or reduce volatile anesthetic agent',
      'Increase fresh gas flow to wash out volatile agent',
      'Reverse neuromuscular blockade (neostigmine/glycopyrrolate or sugammadex)',
      'Confirm train-of-four ratio >= 0.9 before extubation',
      'Suction oropharynx, ensure patient breathing spontaneously',
      'Extubate when patient follows commands and has adequate tidal volumes',
      'Administer supplemental O2 and transport to PACU',
    ],
    [
      'Completion of surgical procedure',
      'Planned transition to spontaneous ventilation and consciousness',
    ],
    [
      'Ongoing surgical need (delayed emergence planned)',
      'Residual neuromuscular blockade not adequately reversed',
      'Hemodynamic instability requiring continued ventilatory support',
    ],
    [
      'Neostigmine 0.04-0.07 mg/kg + glycopyrrolate 0.01 mg/kg',
      'Sugammadex 2-4 mg/kg (for rocuronium/vecuronium reversal)',
      'Ondansetron 4 mg IV (PONV prophylaxis)',
      'Dexamethasone 4-8 mg IV (PONV prophylaxis, given at induction)',
    ],
    [
      'Emergence delirium or agitation',
      'Laryngospasm on extubation',
      'Post-extubation stridor',
      'Residual neuromuscular blockade leading to hypoventilation',
      'Postoperative nausea and vomiting (PONV)',
      'Shivering and hypothermia',
    ],
    [
      'Sugammadex provides more reliable reversal of rocuronium than neostigmine',
      'Deep extubation may reduce coughing but carries aspiration risk',
      'Emergence delirium is more common in children and after sevoflurane',
      'PONV prophylaxis should be multimodal for high-risk patients',
    ],
    [
      'Brull SJ, Kopman AF. Current Status of Neuromuscular Reversal and Monitoring. Anesthesiology 2017',
      'Apfel CC et al. PONV Risk Score. Anesthesiology 1999',
    ],
  ),

  // ===== REGIONAL ANESTHESIA =====

  'spinal-anesthesia': entry(
    'spinal-anesthesia',
    'Spinal Anesthesia (Subarachnoid Block)',
    'regional-anesthesia',
    'Injection of local anesthetic into the subarachnoid space (cerebrospinal fluid) to produce dense sensory and motor blockade of the lower body. Rapid onset, reliable block for surgeries below the umbilicus.',
    [
      'Position patient sitting or lateral decubitus with maximal spinal flexion',
      'Identify L3-L4 or L4-L5 interspace using Tuffier\'s line',
      'Prep skin with chlorhexidine, apply sterile drape',
      'Infiltrate skin and subcutaneous tissue with local anesthetic',
      'Advance 25-27G pencil-point (Whitacre) or cutting (Quincke) spinal needle',
      'Confirm CSF flow upon entry into subarachnoid space',
      'Inject hyperbaric bupivacaine 0.75% (1.2-1.8 mL) or equivalent',
      'Position patient to achieve desired block level',
    ],
    [
      'Cesarean section',
      'Lower extremity orthopedic surgery (hip, knee)',
      'Urologic procedures (TURP, cystoscopy)',
      'Hernia repair (inguinal)',
      'Lower abdominal surgery below umbilicus',
    ],
    [
      'Patient refusal',
      'Coagulopathy or therapeutic anticoagulation',
      'Infection at injection site',
      'Severe hypovolemia (uncorrected)',
      'Increased intracranial pressure',
      'Severe aortic or mitral stenosis (relative)',
    ],
    [
      'Hyperbaric bupivacaine 0.75% (7.5-15 mg)',
      'Lidocaine 5% (50-100 mg) - less commonly used due to TNS risk',
      'Fentanyl 10-25 mcg intrathecal (adjunct)',
      'Morphine 0.1-0.2 mg intrathecal (extended postop analgesia)',
      'Epinephrine 0.1-0.2 mg (adjunct to prolong block)',
    ],
    [
      'Hypotension (sympathectomy-mediated) - most common',
      'Bradycardia',
      'Post-dural puncture headache (PDPH)',
      'High or total spinal',
      'Transient neurologic symptoms (TNS)',
      'Epidural hematoma (rare but devastating)',
      'Cauda equina syndrome (extremely rare)',
    ],
    [
      'Pencil-point needles reduce PDPH incidence compared to cutting needles',
      'Hyperbaric solutions are denser than CSF and spread with gravity',
      'Preloading with crystalloid has limited benefit; co-loading with colloid is more effective',
      'Phenylephrine or ephedrine should be immediately available to treat hypotension',
    ],
    [
      'Hadzic A. Hadzic\'s Textbook of Regional Anesthesia, 2nd ed. McGraw-Hill, 2017',
      'ASRA Guidelines on Neuraxial Anesthesia and Anticoagulation, Reg Anesth Pain Med 2018',
    ],
  ),

  'epidural-anesthesia': entry(
    'epidural-anesthesia',
    'Epidural Anesthesia and Analgesia',
    'regional-anesthesia',
    'Placement of a catheter into the epidural space for continuous or intermittent injection of local anesthetics and/or opioids. Provides segmental blockade and is commonly used for labor analgesia and postoperative pain management.',
    [
      'Position patient sitting or lateral decubitus',
      'Identify target interspace based on desired dermatome level',
      'Advance 17-18G Tuohy needle using loss-of-resistance technique (saline or air)',
      'Thread epidural catheter 3-5 cm into epidural space',
      'Aspirate to confirm no blood or CSF',
      'Administer test dose (lidocaine 1.5% with 1:200,000 epinephrine, 3 mL)',
      'Bolus and/or initiate continuous infusion of local anesthetic +/- opioid',
    ],
    [
      'Labor analgesia (lumbar epidural)',
      'Cesarean section (as primary or supplement to spinal)',
      'Thoracic and abdominal postoperative analgesia',
      'Chronic pain management',
      'Rib fracture analgesia (thoracic epidural)',
    ],
    [
      'Patient refusal',
      'Coagulopathy or therapeutic anticoagulation',
      'Infection at insertion site or systemic sepsis',
      'Uncorrected hypovolemia',
      'Increased intracranial pressure',
    ],
    [
      'Bupivacaine 0.0625-0.125% (infusion) or 0.25-0.5% (bolus)',
      'Ropivacaine 0.1-0.2% (infusion)',
      'Lidocaine 1-2% (bolus for surgical anesthesia)',
      'Fentanyl 2 mcg/mL (epidural adjunct)',
      'Hydromorphone 10-20 mcg/mL (epidural adjunct)',
    ],
    [
      'Hypotension from sympathetic blockade',
      'Inadvertent dural puncture (wet tap) leading to PDPH',
      'Epidural hematoma (rare)',
      'Epidural abscess',
      'Local anesthetic systemic toxicity (LAST)',
      'Catheter migration (intrathecal or intravascular)',
      'Motor block (may impede ambulation)',
    ],
    [
      'Test dose helps identify intravascular or intrathecal catheter placement',
      'Loss-of-resistance to saline is preferred over air to reduce pneumocephalus risk',
      'Thoracic epidurals improve pulmonary outcomes after major abdominal surgery',
      'Patient-controlled epidural analgesia (PCEA) improves satisfaction',
    ],
    [
      'ASRA Guidelines on Neuraxial Anesthesia and Anticoagulation, 2018',
      'Practice Guidelines for Obstetric Anesthesia, ASA Task Force, Anesthesiology 2016',
    ],
  ),

  'peripheral-nerve-block-upper': entry(
    'peripheral-nerve-block-upper',
    'Upper Extremity Peripheral Nerve Blocks',
    'regional-anesthesia',
    'Ultrasound-guided injection of local anesthetic around nerves of the brachial plexus to provide surgical anesthesia and postoperative analgesia for shoulder, arm, forearm, and hand procedures.',
    [
      'Interscalene block: probe at C6 level, identify brachial plexus roots between anterior and middle scalene muscles',
      'Supraclavicular block: probe in supraclavicular fossa, target "cluster of grapes" appearance of trunks/divisions',
      'Infraclavicular block: probe below clavicle, identify cords around axillary artery',
      'Axillary block: probe in axilla, identify median, ulnar, radial, and musculocutaneous nerves',
      'Inject 15-30 mL local anesthetic under real-time ultrasound guidance',
    ],
    [
      'Shoulder surgery (interscalene)',
      'Elbow, forearm, and hand surgery (supraclavicular, infraclavicular)',
      'Hand and wrist surgery (axillary)',
      'Postoperative analgesia for upper extremity procedures',
      'Multimodal pain management to reduce opioid use',
    ],
    [
      'Patient refusal',
      'Local infection at block site',
      'Allergy to local anesthetics',
      'Coagulopathy (relative for deep blocks)',
      'Interscalene: contralateral phrenic nerve palsy or pneumothorax (avoid bilateral)',
      'Pre-existing neurological deficit in affected extremity (relative)',
    ],
    [
      'Ropivacaine 0.5% (15-30 mL)',
      'Bupivacaine 0.25-0.5% (15-30 mL)',
      'Lidocaine 1.5-2% (with or without epinephrine)',
      'Dexamethasone 4 mg perineural (adjunct to prolong block)',
      'Dexmedetomidine 50-100 mcg perineural (adjunct)',
    ],
    [
      'Phrenic nerve palsy (interscalene - up to 100%)',
      'Pneumothorax (supraclavicular - rare with ultrasound)',
      'Vascular puncture',
      'Local anesthetic systemic toxicity (LAST)',
      'Nerve injury (rare, typically transient)',
      'Horner syndrome (interscalene)',
    ],
    [
      'Ultrasound guidance has reduced complication rates and improved success',
      'Interscalene block reliably misses C8-T1 (ulnar sparing)',
      'Supraclavicular block is the "spinal of the arm" - most complete brachial plexus coverage',
      'Always aspirate before injecting and use incremental dosing',
    ],
    [
      'Hadzic A. Hadzic\'s Peripheral Nerve Blocks and Anatomy for Ultrasound-Guided Regional Anesthesia, 3rd ed.',
      'Neal JM et al. ASRA Practice Advisory on LAST, Reg Anesth Pain Med 2020',
    ],
  ),

  'peripheral-nerve-block-lower': entry(
    'peripheral-nerve-block-lower',
    'Lower Extremity Peripheral Nerve Blocks',
    'regional-anesthesia',
    'Ultrasound-guided injection of local anesthetic around nerves of the lumbar and sacral plexus for surgical anesthesia and analgesia of hip, knee, ankle, and foot procedures.',
    [
      'Femoral nerve block: probe at inguinal crease, identify nerve lateral to femoral artery',
      'Adductor canal block: probe at mid-thigh, identify saphenous nerve under sartorius muscle',
      'Popliteal sciatic block: probe in popliteal fossa, identify sciatic nerve before bifurcation',
      'Ankle block: infiltrate around five nerves at ankle level (tibial, deep peroneal, superficial peroneal, sural, saphenous)',
      'Inject 15-30 mL local anesthetic under real-time ultrasound guidance',
    ],
    [
      'Total knee arthroplasty (adductor canal + sciatic)',
      'ACL repair (femoral or adductor canal)',
      'Ankle and foot surgery (popliteal sciatic + saphenous)',
      'Hip fracture analgesia (fascia iliaca or femoral)',
      'Postoperative analgesia to reduce opioid consumption',
    ],
    [
      'Patient refusal',
      'Infection at block site',
      'Allergy to local anesthetics',
      'Pre-existing neuropathy (relative)',
      'Anticoagulation (relative for deep blocks like lumbar plexus)',
    ],
    [
      'Ropivacaine 0.2-0.5% (15-30 mL)',
      'Bupivacaine 0.25-0.5% (15-30 mL)',
      'Liposomal bupivacaine (for extended-release single injection)',
      'Dexamethasone 4 mg perineural adjunct',
    ],
    [
      'Falls risk from motor blockade (femoral nerve block)',
      'Nerve injury (rare)',
      'Vascular puncture',
      'Local anesthetic systemic toxicity (LAST)',
      'Infection',
    ],
    [
      'Adductor canal block preserves quadriceps strength better than femoral nerve block',
      'Continuous catheter techniques extend analgesia for 48-72 hours',
      'Popliteal block should target sciatic nerve proximal to bifurcation for complete coverage',
      'Fascia iliaca block is an effective analgesic for hip fractures in the emergency department',
    ],
    [
      'Hadzic A. Hadzic\'s Textbook of Regional Anesthesia, 2nd ed.',
      'Elkassabany NM et al. Adductor Canal Block vs Femoral Nerve Block. Anesthesiology 2016',
    ],
  ),

  // ===== LOCAL ANESTHESIA =====

  'local-infiltration': entry(
    'local-infiltration',
    'Local Infiltration Anesthesia',
    'local-anesthesia',
    'Direct injection of local anesthetic into tissues at the surgical site to block nerve endings and provide localized anesthesia. Simple, safe, and widely used for minor procedures.',
    [
      'Clean and prep the injection site',
      'Use a small-gauge needle (25-30G)',
      'Inject local anesthetic subcutaneously, creating a wheal',
      'Advance needle through anesthetized tissue to extend the field',
      'Aspirate before each injection to avoid intravascular injection',
      'Wait 5-10 minutes for full effect (longer with epinephrine)',
    ],
    [
      'Minor skin procedures (biopsies, laceration repair)',
      'Wound closure',
      'Central line and arterial line placement',
      'Minor surgical excisions',
      'Supplementation of regional or general anesthesia',
    ],
    [
      'Allergy to local anesthetic (true allergy rare for amides)',
      'Infection at injection site (relative)',
      'Epinephrine contraindicated in end-arterial territories (debated for digits)',
    ],
    [
      'Lidocaine 1-2% (max 4.5 mg/kg without epi, 7 mg/kg with epi)',
      'Bupivacaine 0.25-0.5% (max 2.5 mg/kg)',
      'Lidocaine with epinephrine 1:100,000-1:200,000',
      'Sodium bicarbonate 1 mEq/10 mL lidocaine (to buffer and reduce pain)',
    ],
    [
      'Pain on injection',
      'Local anesthetic systemic toxicity (LAST) if max dose exceeded',
      'Hematoma',
      'Infection',
      'Tissue necrosis (if epinephrine used in end-artery territory)',
      'Allergic reaction (rare)',
    ],
    [
      'Buffering lidocaine with sodium bicarbonate significantly reduces injection pain',
      'Warming the solution to body temperature also reduces pain',
      'Inject slowly and through already-anesthetized tissue',
      'Always calculate maximum dose based on patient weight before injection',
    ],
    [
      'Butterworth JF et al. Local Anesthetics. In: Morgan & Mikhail\'s Clinical Anesthesiology, 6th ed.',
      'Achar S, Kundu S. Principles of Office Anesthesia. Am Fam Physician 2002',
    ],
  ),

  'topical-anesthesia': entry(
    'topical-anesthesia',
    'Topical Anesthesia',
    'local-anesthesia',
    'Application of local anesthetic directly to mucous membranes or skin surfaces to provide localized numbness without injection. Used for minor procedures and as adjunct to other techniques.',
    [
      'Apply anesthetic cream, gel, or spray to target area',
      'EMLA cream: apply under occlusive dressing 60 minutes before procedure',
      'LET gel (lidocaine-epinephrine-tetracaine): apply to wound for 20-30 minutes',
      'Lidocaine spray 4%: apply to mucous membranes for immediate effect',
      'Tetracaine eye drops: instill 1-2 drops for ophthalmic procedures',
    ],
    [
      'Venipuncture and IV access in pediatric patients (EMLA)',
      'Laceration repair in children (LET gel)',
      'Awake fiberoptic intubation (lidocaine spray)',
      'Ophthalmic procedures (tetracaine drops)',
      'Urethral catheterization (lidocaine jelly)',
      'Nasogastric tube insertion',
    ],
    [
      'Allergy to specific topical agent',
      'Application to large areas (systemic absorption risk)',
      'EMLA on mucous membranes in neonates (methemoglobinemia risk)',
      'Damaged or inflamed skin (increased absorption)',
    ],
    [
      'EMLA cream (lidocaine 2.5% + prilocaine 2.5%)',
      'LET gel (lidocaine 4% + epinephrine 0.1% + tetracaine 0.5%)',
      'Lidocaine spray 4-10%',
      'Tetracaine 0.5% ophthalmic drops',
      'Lidocaine jelly 2%',
      'Benzocaine spray 20% (use with caution - methemoglobinemia)',
    ],
    [
      'Methemoglobinemia (prilocaine, benzocaine)',
      'Allergic contact dermatitis',
      'Systemic toxicity from large-area application',
      'Corneal toxicity with prolonged ophthalmic use',
    ],
    [
      'EMLA requires 60 minutes for adequate skin anesthesia',
      'LET gel is preferred over EMLA for open wounds in children',
      'Benzocaine carries the highest risk of methemoglobinemia among topical agents',
      'Maximum recommended EMLA area depends on patient age and weight',
    ],
    [
      'Achar S, Kundu S. Principles of Office Anesthesia. Am Fam Physician 2002',
      'Zempsky WT. Pharmacologic Approaches for Reducing Venous Access Pain in Children. Pediatrics 2008',
    ],
  ),

  // ===== SEDATION =====

  'minimal-sedation': entry(
    'minimal-sedation',
    'Minimal Sedation (Anxiolysis)',
    'sedation',
    'A drug-induced state during which patients respond normally to verbal commands. Cognitive function and physical coordination may be impaired, but airway reflexes, ventilatory, and cardiovascular function are unaffected.',
    [
      'Assess patient suitability and NPO status',
      'Administer low-dose anxiolytic (typically oral or IV)',
      'Monitor patient responsiveness to verbal stimulation',
      'Maintain continuous observation throughout procedure',
      'Standard monitoring: pulse oximetry, blood pressure, heart rate',
    ],
    [
      'Anxious patients undergoing minor procedures',
      'Dental procedures',
      'MRI or CT imaging in mildly anxious patients',
      'Simple wound care or dressing changes',
    ],
    [
      'Allergy to sedative agents',
      'Severe respiratory compromise',
      'Lack of appropriate monitoring equipment',
    ],
    [
      'Midazolam 0.5-1 mg IV or 0.25-0.5 mg/kg PO',
      'Diazepam 2-5 mg PO',
      'Hydroxyzine 25-50 mg PO',
      'Nitrous oxide 25-50% inhaled',
    ],
    [
      'Over-sedation progressing to moderate or deep sedation',
      'Paradoxical agitation (especially in elderly)',
      'Respiratory depression (rare at minimal sedation doses)',
      'Delayed recovery',
    ],
    [
      'Minimal sedation does not require the same monitoring intensity as deeper levels',
      'ASA defines the sedation continuum: minimal, moderate, deep, general anesthesia',
      'Patients should still be assessed for aspiration risk',
      'Practitioners should be able to rescue from one level deeper than intended',
    ],
    [
      'ASA Continuum of Depth of Sedation, ASA 2019',
      'ASA Practice Guidelines for Sedation and Analgesia by Non-Anesthesiologists, 2018',
    ],
  ),

  'moderate-sedation': entry(
    'moderate-sedation',
    'Moderate Sedation (Conscious Sedation)',
    'sedation',
    'A drug-induced depression of consciousness during which patients respond purposefully to verbal commands, either alone or accompanied by light tactile stimulation. No airway intervention is typically required, and spontaneous ventilation is adequate.',
    [
      'Perform preprocedural assessment including airway evaluation and NPO status',
      'Establish IV access and apply standard ASA monitors plus capnography',
      'Titrate medications to desired sedation endpoint',
      'Maintain verbal contact with patient throughout procedure',
      'Continuously monitor ventilation, oxygenation, and hemodynamics',
      'Have resuscitation equipment and reversal agents immediately available',
    ],
    [
      'Endoscopy (upper and lower GI)',
      'Cardiac catheterization',
      'Minor orthopedic procedures',
      'Interventional radiology procedures',
      'Dental procedures requiring more than anxiolysis',
      'Bronchoscopy',
    ],
    [
      'ASA IV or V patients without anesthesia supervision (relative)',
      'Known difficult airway',
      'Severe obstructive sleep apnea (increased monitoring)',
      'Full stomach with high aspiration risk',
    ],
    [
      'Midazolam 0.5-2 mg IV titrated',
      'Fentanyl 25-100 mcg IV titrated',
      'Propofol 10-30 mg IV boluses (when administered by trained provider)',
      'Ketamine 0.25-0.5 mg/kg IV (procedural sedation)',
    ],
    [
      'Over-sedation to deep sedation or general anesthesia',
      'Respiratory depression and airway obstruction',
      'Hypotension',
      'Nausea and vomiting',
      'Aspiration',
      'Paradoxical agitation',
    ],
    [
      'Capnography provides earlier detection of respiratory depression than pulse oximetry',
      'Titrate to effect - start low and go slow, especially in the elderly',
      'Flumazenil reverses benzodiazepines; naloxone reverses opioids',
      'Moderate sedation privileges require training in rescue from deep sedation',
    ],
    [
      'ASA Practice Guidelines for Sedation and Analgesia by Non-Anesthesiologists, 2018',
      'Conway A et al. Capnography Monitoring during Procedural Sedation. Cochrane 2016',
    ],
  ),

  'deep-sedation': entry(
    'deep-sedation',
    'Deep Sedation',
    'sedation',
    'A drug-induced depression of consciousness during which patients cannot be easily aroused but respond purposefully to repeated or painful stimulation. Ventilatory function may be impaired, and patients may require airway intervention.',
    [
      'Perform thorough preprocedural assessment including airway evaluation',
      'Establish IV access and apply full ASA monitoring including capnography',
      'Ensure immediate availability of airway management equipment',
      'Administer sedative agents with careful titration',
      'Continuously monitor ventilation, oxygenation, and hemodynamics',
      'Be prepared to provide airway support (jaw thrust, oral airway, bag-mask ventilation)',
    ],
    [
      'Colonoscopy with propofol sedation',
      'Pediatric procedural sedation (MRI, fracture reduction)',
      'Cardioversion',
      'Burn wound care and dressing changes',
      'Complex interventional radiology procedures',
    ],
    [
      'Inability to manage a potentially compromised airway',
      'Lack of trained personnel for airway rescue',
      'Inadequate monitoring equipment',
      'Unstable hemodynamics',
    ],
    [
      'Propofol 0.5-1 mg/kg IV bolus, then 25-75 mcg/kg/min infusion',
      'Ketamine 1-2 mg/kg IV (dissociative sedation)',
      'Dexmedetomidine 0.5-1 mcg/kg load, then 0.2-0.7 mcg/kg/hr',
      'Midazolam + fentanyl combination (higher doses)',
    ],
    [
      'Progression to general anesthesia (loss of protective reflexes)',
      'Respiratory depression and apnea',
      'Airway obstruction',
      'Cardiovascular depression',
      'Aspiration',
      'Emergence reactions (ketamine)',
    ],
    [
      'Deep sedation requires the same level of care as general anesthesia in many institutions',
      'Ketamine preserves airway reflexes and respiratory drive better than propofol',
      'Dexmedetomidine provides sedation without significant respiratory depression',
      'Recovery criteria should be met before discharge (Aldrete score or equivalent)',
    ],
    [
      'ASA Practice Guidelines for Sedation and Analgesia by Non-Anesthesiologists, 2018',
      'Green SM et al. Clinical Practice Guideline for Ketamine Sedation. Ann Emerg Med 2011',
    ],
  ),

  // ===== AIRWAY MANAGEMENT =====

  'endotracheal-intubation': entry(
    'endotracheal-intubation',
    'Endotracheal Intubation',
    'airway-management',
    'Placement of an endotracheal tube (ETT) through the mouth or nose into the trachea to secure the airway, provide mechanical ventilation, and protect against aspiration.',
    [
      'Position: sniffing position (head extended, neck flexed) or ramped in obese patients',
      'Preoxygenate with 100% O2',
      'Administer induction agent and neuromuscular blocker',
      'Open mouth with scissor technique, insert laryngoscope (direct or video)',
      'Visualize vocal cords and advance ETT through glottis',
      'Inflate cuff, confirm placement with ETCO2 (gold standard), auscultation, and chest rise',
      'Secure tube, note depth at teeth (typically 21 cm women, 23 cm men)',
    ],
    [
      'General anesthesia requiring muscle relaxation',
      'Airway protection in obtunded patients',
      'Respiratory failure requiring mechanical ventilation',
      'Procedures requiring controlled ventilation',
    ],
    [
      'No absolute contraindications when airway management is emergently needed',
      'Relative: significant airway trauma or disruption (consider surgical airway)',
      'Relative: known difficult airway without preparation',
    ],
    [
      'Succinylcholine 1-1.5 mg/kg (rapid onset paralysis)',
      'Rocuronium 1.2 mg/kg (rapid sequence alternative)',
      'Propofol 1.5-2.5 mg/kg or etomidate 0.3 mg/kg for induction',
      'Lidocaine 1.5 mg/kg IV (blunt sympathetic response)',
    ],
    [
      'Esophageal intubation (detected by absent ETCO2)',
      'Right mainstem bronchus intubation',
      'Dental or lip injury',
      'Laryngeal or tracheal injury',
      'Aspiration of gastric contents',
      'Cardiovascular response (hypertension, tachycardia)',
      'Cannot intubate, cannot oxygenate (CICO) emergency',
    ],
    [
      'ETCO2 is the gold standard for confirming tracheal placement',
      'Video laryngoscopy improves first-pass success rate compared to direct laryngoscopy',
      'Rapid sequence intubation (RSI) includes cricoid pressure (Sellick maneuver) - though its efficacy is debated',
      'Always have a backup plan before every intubation attempt',
    ],
    [
      'Apfelbaum JL et al. ASA Practice Guidelines for Management of the Difficult Airway, Anesthesiology 2022',
      'Cook TM et al. Major Complications of Airway Management in the UK. Br J Anaesth 2011',
    ],
  ),

  'laryngeal-mask-airway': entry(
    'laryngeal-mask-airway',
    'Laryngeal Mask Airway (LMA)',
    'airway-management',
    'A supraglottic airway device placed above the glottis to maintain airway patency during anesthesia. Does not require laryngoscopy or neuromuscular blockade for placement.',
    [
      'Select appropriate size (based on patient weight)',
      'Deflate cuff and lubricate posterior surface',
      'Open mouth, insert along hard palate with smooth downward motion',
      'Advance until resistance is felt (hypopharynx)',
      'Inflate cuff to recommended pressure (< 60 cmH2O)',
      'Confirm placement with ETCO2, bilateral breath sounds, and adequate tidal volumes',
      'Secure device',
    ],
    [
      'Routine general anesthesia for appropriate cases',
      'Rescue airway device in failed intubation',
      'Short-duration procedures',
      'Cases not requiring muscle relaxation or high airway pressures',
      'Ophthalmic, ENT, and ambulatory surgery',
    ],
    [
      'Full stomach or high aspiration risk (use second-generation LMA with gastric port)',
      'Morbid obesity (relative)',
      'Poor pulmonary compliance requiring high airway pressures',
      'Prolonged procedures (relative)',
      'Prone positioning (relative; some second-generation LMAs are suitable)',
    ],
    [
      'Propofol for smooth insertion (suppresses airway reflexes)',
      'Sevoflurane inhalation induction (pediatric)',
      'No neuromuscular blocker typically required',
    ],
    [
      'Aspiration (lower risk with second-generation devices with gastric drain)',
      'Laryngospasm',
      'Sore throat (10-20%)',
      'Nerve injury (lingual, recurrent laryngeal - rare)',
      'Inadequate seal with air leak',
      'Gastric insufflation',
    ],
    [
      'Second-generation LMAs (e.g., i-gel, LMA ProSeal) have gastric access ports reducing aspiration risk',
      'LMA is a key rescue device in the difficult airway algorithm',
      'Insertion is easier with propofol than with thiopental or volatile induction',
      'Cuff pressure should be monitored to prevent mucosal injury',
    ],
    [
      'Apfelbaum JL et al. ASA Difficult Airway Guidelines, Anesthesiology 2022',
      'Brimacombe J. The Advantages of the LMA over the Tracheal Tube or Facemask. Can J Anaesth 1995',
    ],
  ),

  'difficult-airway-algorithm': entry(
    'difficult-airway-algorithm',
    'Difficult Airway Algorithm',
    'airway-management',
    'A systematic approach to managing anticipated and unanticipated difficult airways, as outlined by the ASA and Difficult Airway Society (DAS). Emphasizes planning, communication, and stepwise escalation to prevent cannot-intubate-cannot-oxygenate (CICO) emergencies.',
    [
      'Step 1: Evaluate airway preoperatively (Mallampati, thyromental distance, neck mobility, mouth opening)',
      'Step 2: If anticipated difficult airway, consider awake intubation (awake fiberoptic most common)',
      'Step 3: If unanticipated failure, call for help, optimize position, and attempt video laryngoscopy',
      'Step 4: If intubation fails after 3 attempts, insert supraglottic airway (LMA)',
      'Step 5: If LMA fails, return to face-mask ventilation',
      'Step 6: If CICO situation: perform emergency front-of-neck access (cricothyrotomy)',
      'Throughout: maintain oxygenation, limit attempts, declare emergency early',
    ],
    [
      'All patients undergoing anesthesia requiring airway management',
      'Preoperative airway assessment identifies patients at increased risk',
      'Emergency airway management when standard techniques fail',
    ],
    [
      'There are no contraindications to having an airway management plan',
      'Specific techniques within the algorithm have individual contraindications',
    ],
    [
      'Awake fiberoptic: topicalized airway with 4% lidocaine, light sedation with dexmedetomidine',
      'Sugammadex 16 mg/kg for immediate reversal of rocuronium in emergency',
      'Emergency cricothyrotomy: scalpel-bougie-tube technique',
    ],
    [
      'Cannot intubate, cannot oxygenate (CICO) - life threatening',
      'Hypoxic brain injury from prolonged failed airway management',
      'Airway trauma from multiple attempts',
      'Aspiration',
      'Cardiovascular collapse',
    ],
    [
      'The most important step is recognizing the difficult airway before induction',
      'Limit laryngoscopy attempts to 3+1 (3 by primary provider, 1 by most experienced)',
      'Awake intubation is the gold standard for anticipated difficult airway',
      'Declare CICO emergency early and proceed to surgical airway without delay',
      'Human factors (communication, leadership, task allocation) are critical in airway emergencies',
    ],
    [
      'Apfelbaum JL et al. ASA Practice Guidelines for Management of the Difficult Airway, Anesthesiology 2022',
      'Frerk C et al. DAS Difficult Intubation Guidelines. Br J Anaesth 2015',
    ],
  ),

  // ===== MONITORING =====

  'asa-standard-monitors': entry(
    'asa-standard-monitors',
    'ASA Standard Monitors',
    'monitoring',
    'The American Society of Anesthesiologists mandates specific monitoring standards during all anesthetics. These include oxygenation, ventilation, circulation, and temperature monitoring.',
    [
      'Oxygenation: pulse oximetry (continuous), inspired O2 concentration analyzer',
      'Ventilation: capnography (ETCO2), observation of chest excursion, auscultation',
      'Circulation: continuous ECG, blood pressure (at least every 5 min), pulse assessment',
      'Temperature: available for all cases, continuously monitored when clinically indicated',
      'Qualified anesthesia personnel present throughout the anesthetic',
    ],
    [
      'All patients receiving general anesthesia',
      'All patients receiving regional anesthesia',
      'All patients receiving monitored anesthesia care (MAC)',
    ],
    [
      'None - monitoring is mandatory for all anesthetics',
    ],
    [
      'Pulse oximeter (SpO2 probe)',
      'Capnograph (ETCO2 module)',
      'ECG with 3- or 5-lead configuration',
      'Non-invasive blood pressure cuff',
      'Temperature probe (esophageal, nasopharyngeal, or skin)',
      'Inspired oxygen analyzer',
      'Peripheral nerve stimulator (when neuromuscular blockers used)',
    ],
    [
      'Equipment malfunction leading to undetected deterioration',
      'False alarms leading to alarm fatigue',
      'Burns from pulse oximetry probes',
      'Pressure injury from blood pressure cuffs',
    ],
    [
      'Capnography is the earliest detector of esophageal intubation, circuit disconnection, and hypoventilation',
      'The ASA closed-claims analysis shows pulse oximetry and capnography prevent the majority of anesthesia-related cardiac arrests',
      'Temperature monitoring is critical for detecting malignant hyperthermia early',
      'A qualified anesthesia provider must be present throughout every anesthetic',
    ],
    [
      'ASA Standards for Basic Anesthetic Monitoring, Last amended October 2020',
      'Tremper KK, Barker SJ. Pulse Oximetry. Anesthesiology 1989',
    ],
  ),

  'bispectral-index': entry(
    'bispectral-index',
    'Bispectral Index (BIS) Monitoring',
    'monitoring',
    'Processed EEG monitoring that provides a dimensionless number (0-100) correlating with depth of anesthesia. Used to guide anesthetic dosing, reduce awareness, and potentially reduce anesthetic consumption.',
    [
      'Apply BIS sensor to patient forehead (frontotemporal region)',
      'Ensure adequate skin contact and low impedance',
      'Monitor BIS value continuously throughout anesthetic',
      'Target BIS 40-60 for general anesthesia',
      'BIS > 60: light anesthesia, risk of awareness',
      'BIS < 40: deep anesthesia, possible burst suppression',
    ],
    [
      'TIVA (total intravenous anesthesia) where end-tidal monitoring unavailable',
      'Patients at high risk for intraoperative awareness',
      'Titration of anesthetic depth in elderly patients',
      'Sedation monitoring in ICU',
    ],
    [
      'Not validated in children under 1 year',
      'Unreliable with ketamine (may show paradoxically high values)',
      'Affected by electromyographic (EMG) interference',
      'Not a substitute for clinical assessment',
    ],
    [
      'BIS sensor (disposable forehead electrode)',
      'BIS monitor module',
    ],
    [
      'Falsely elevated BIS from EMG artifact (may miss deep anesthesia)',
      'Falsely low BIS from hypothermia or brain injury',
      'Skin irritation from sensor adhesive',
      'Over-reliance on single monitoring modality',
    ],
    [
      'BIS-guided anesthesia may reduce intraoperative awareness (B-Aware trial)',
      'BIS is most useful during TIVA when end-tidal agent monitoring is unavailable',
      'Ketamine and nitrous oxide can falsely elevate BIS readings',
      'Clinical signs (hemodynamics, movement, lacrimation) should complement BIS monitoring',
    ],
    [
      'Myles PS et al. BIS Monitoring to Prevent Awareness during Anaesthesia (B-Aware Trial). Lancet 2004',
      'Avidan MS et al. BIS vs ETAG-guided Anesthesia (BAG-RECALL Trial). NEJM 2011',
    ],
  ),

  'arterial-line-monitoring': entry(
    'arterial-line-monitoring',
    'Invasive Arterial Blood Pressure Monitoring',
    'monitoring',
    'Continuous beat-to-beat blood pressure monitoring via an intra-arterial catheter, typically placed in the radial artery. Provides real-time hemodynamic data and access for arterial blood gas sampling.',
    [
      'Perform modified Allen test to confirm collateral ulnar flow',
      'Position wrist in slight dorsiflexion over a roll',
      'Prep with chlorhexidine, use sterile technique',
      'Palpate radial artery, insert 20G catheter at 30-45 degree angle',
      'Advance catheter over needle upon flash of arterial blood',
      'Connect to pressure transducer zeroed at phlebostatic axis (4th ICS, midaxillary)',
      'Confirm arterial waveform on monitor',
    ],
    [
      'Major surgery with expected hemodynamic instability',
      'Cardiac surgery',
      'Neurosurgery (tight blood pressure control)',
      'Patients on vasoactive infusions',
      'Need for frequent arterial blood gas sampling',
      'Morbidly obese patients (unreliable NIBP)',
    ],
    [
      'Absent collateral circulation (failed Allen test) - relative',
      'Severe peripheral vascular disease at cannulation site',
      'Infection at insertion site',
      'Coagulopathy (relative - apply direct pressure after removal)',
    ],
    [
      '20G radial arterial catheter',
      'Pressure transducer and tubing with continuous heparin flush (3 mL/hr)',
      'Pressure bag inflated to 300 mmHg',
    ],
    [
      'Thrombosis or distal ischemia',
      'Hemorrhage from disconnection or accidental removal',
      'Infection or bloodstream infection',
      'Pseudoaneurysm formation',
      'Air embolism',
      'Nerve injury (median nerve proximity)',
    ],
    [
      'The radial artery is preferred due to dual blood supply to the hand (Allen test)',
      'Overdamping causes underestimation of systolic and overestimation of diastolic pressure',
      'Underdamping causes overestimation of systolic and underestimation of diastolic pressure',
      'Square wave (fast-flush) test helps assess system damping',
      'The arterial waveform provides information about cardiac output and volume status',
    ],
    [
      'Scheer B et al. Clinical Review: Complications of Arterial Catheterization. Crit Care 2002',
      'ASA Standards for Basic Anesthetic Monitoring, 2020',
    ],
  ),

  // ===== PHARMACOLOGY =====

  'volatile-anesthetic-agents': entry(
    'volatile-anesthetic-agents',
    'Volatile Anesthetic Agents',
    'pharmacology',
    'Inhaled halogenated ethers used for maintenance of general anesthesia. Produce dose-dependent CNS depression, amnesia, immobility, and unconsciousness. Sevoflurane, desflurane, and isoflurane are the agents in current clinical use.',
    [
      'Delivered via calibrated vaporizer on anesthesia machine',
      'Titrated using minimum alveolar concentration (MAC) as potency measure',
      'Sevoflurane: MAC 2.0%, pleasant odor, suitable for inhalation induction',
      'Desflurane: MAC 6.0%, rapid onset/offset, pungent (not for inhalation induction)',
      'Isoflurane: MAC 1.15%, longest used, cost-effective',
      'Administered with carrier gas mixture of O2 +/- N2O or air',
    ],
    [
      'Maintenance of general anesthesia',
      'Inhalation induction (sevoflurane in pediatric and needle-phobic patients)',
      'Bronchodilation in severe asthma (sevoflurane, isoflurane)',
    ],
    [
      'Known or suspected malignant hyperthermia susceptibility',
      'History of volatile agent-induced hepatitis',
      'Severe hypovolemia (volatile agents cause vasodilation)',
      'Desflurane: avoid in pediatric inhalation induction (airway irritation)',
    ],
    [
      'Sevoflurane (Ultane) - most commonly used',
      'Desflurane (Suprane) - rapid emergence',
      'Isoflurane (Forane) - cost-effective',
      'Nitrous oxide (adjunct, MAC 104%)',
    ],
    [
      'Dose-dependent cardiovascular depression (hypotension)',
      'Respiratory depression',
      'Malignant hyperthermia (all volatile agents are triggers)',
      'Postoperative nausea and vomiting',
      'Compound A production with sevoflurane (nephrotoxicity concern at low flows - clinically insignificant)',
      'Coronary steal with isoflurane (theoretical)',
    ],
    [
      'MAC is the concentration at which 50% of patients do not move to surgical incision',
      'Blood:gas partition coefficient determines speed of onset (lower = faster)',
      'Desflurane has the lowest blood:gas coefficient (0.42) - fastest emergence',
      'Sevoflurane is ideal for inhalation induction due to its non-pungent odor',
      'All volatile agents provide dose-dependent bronchodilation',
    ],
    [
      'Eger EI. Characteristics of Anesthetic Agents Used for Induction and Maintenance. In: Anesthetic Uptake and Action. Williams & Wilkins',
      'Miller RD. Miller\'s Anesthesia, 9th ed. Elsevier, 2020',
    ],
  ),

  'propofol': entry(
    'propofol',
    'Propofol',
    'pharmacology',
    'A short-acting IV anesthetic agent widely used for induction and maintenance of general anesthesia, procedural sedation, and ICU sedation. Produces rapid, smooth induction with antiemetic properties.',
    [
      'Induction: 1.5-2.5 mg/kg IV (reduce in elderly, hemodynamically unstable)',
      'Maintenance infusion (TIVA): 100-200 mcg/kg/min',
      'Sedation: 25-75 mcg/kg/min',
      'Administer through large-bore IV; consider lidocaine to reduce injection pain',
      'Onset: 15-30 seconds; duration of single bolus: 5-10 minutes',
    ],
    [
      'Induction of general anesthesia',
      'Maintenance of anesthesia (TIVA)',
      'Procedural sedation (endoscopy, cardioversion)',
      'ICU sedation',
      'Antiemetic effect (subhypnotic doses: 10-20 mg)',
    ],
    [
      'Allergy to propofol, egg lecithin, or soybean oil (manufacturer states)',
      'Severe cardiovascular instability (significant hypotension)',
      'Propofol infusion syndrome risk (prolonged high-dose ICU infusion > 48-72 hours)',
    ],
    [
      'Propofol 10 mg/mL (1%) emulsion - standard formulation',
      'Propofol 20 mg/mL (2%) - available for ICU infusion',
      'Fospropofol (prodrug) - no longer widely available',
    ],
    [
      'Hypotension (dose-dependent vasodilation and myocardial depression)',
      'Apnea (especially with rapid bolus or in combination with opioids)',
      'Pain on injection (most common side effect)',
      'Propofol infusion syndrome (metabolic acidosis, rhabdomyolysis, cardiac failure) - rare but fatal',
      'Hypertriglyceridemia with prolonged use',
      'Bacterial contamination (lipid emulsion supports microbial growth)',
    ],
    [
      'Propofol has NO analgesic properties; always pair with opioid or regional technique',
      'Green discoloration of urine is benign',
      'Pain on injection reduced by lidocaine 20-40 mg IV or lidocaine mixed into propofol',
      'Propofol is the preferred agent for patients at high PONV risk',
      'Strict aseptic technique required; discard unused propofol within 6-12 hours',
    ],
    [
      'Sahinovic MM et al. Clinical Pharmacokinetics and Pharmacodynamics of Propofol. Clin Pharmacokinet 2018',
      'Krajcova A et al. Propofol Infusion Syndrome. Pharmacol Ther 2015',
    ],
  ),

  'ketamine': entry(
    'ketamine',
    'Ketamine',
    'pharmacology',
    'A dissociative anesthetic that produces a trance-like state with analgesia, amnesia, and sedation while maintaining airway reflexes and respiratory drive. Acts primarily as an NMDA receptor antagonist. Unique among anesthetics for its sympathomimetic properties.',
    [
      'IV induction: 1-2 mg/kg (onset 30-60 seconds)',
      'IM administration: 4-6 mg/kg (onset 3-5 minutes)',
      'Sub-dissociative analgesia: 0.1-0.3 mg/kg IV',
      'Sedation infusion: 0.5-2 mg/kg/hr',
      'Consider co-administration of midazolam or glycopyrrolate',
    ],
    [
      'Hemodynamically unstable patient requiring anesthesia',
      'Pediatric procedural sedation',
      'Burn wound care and dressing changes',
      'Rapid sequence induction in trauma',
      'Acute pain management (sub-dissociative doses)',
      'Bronchospasm (bronchodilator properties)',
      'Resource-limited settings (IM route, preserves airway)',
    ],
    [
      'Conditions where elevated ICP is dangerous (relative - previously overstated)',
      'Severe uncontrolled hypertension',
      'Ischemic heart disease (relative - sympathomimetic effect)',
      'Psychiatric illness with active psychosis',
      'Globe injury or elevated intraocular pressure',
    ],
    [
      'Ketamine 10 mg/mL, 50 mg/mL, 100 mg/mL solutions',
      'S-ketamine (esketamine) - more potent enantiomer',
      'Midazolam 0.5-1 mg co-administered (reduce emergence phenomena)',
      'Glycopyrrolate 0.2 mg (reduce secretions)',
    ],
    [
      'Emergence phenomena (vivid dreams, hallucinations, dysphoria) - 10-30% of adults',
      'Hypersalivation',
      'Nausea and vomiting',
      'Transient increase in blood pressure and heart rate',
      'Laryngospasm (rare)',
      'Increased intracranial pressure (debated; likely clinically insignificant)',
    ],
    [
      'Ketamine is the only IV induction agent that stimulates the cardiovascular system',
      'Preserves airway reflexes and respiratory drive better than other IV anesthetics',
      'Emergence reactions are less common in children and when midazolam is co-administered',
      'Sub-dissociative ketamine (0.1-0.3 mg/kg) is an effective opioid-sparing analgesic',
      'S-ketamine (esketamine) is approximately twice as potent as racemic ketamine',
    ],
    [
      'Green SM et al. Ketamine Safety Profile in the Developing World. Acad Emerg Med 2000',
      'Schwenk ES et al. Consensus Guidelines on IV Ketamine for Acute Pain. Reg Anesth Pain Med 2018',
    ],
  ),

  'neuromuscular-blocking-agents': entry(
    'neuromuscular-blocking-agents',
    'Neuromuscular Blocking Agents',
    'pharmacology',
    'Drugs that block transmission at the neuromuscular junction, producing skeletal muscle paralysis. Classified as depolarizing (succinylcholine) or non-depolarizing (rocuronium, vecuronium, cisatracurium). Used to facilitate intubation and provide surgical relaxation.',
    [
      'Depolarizing: succinylcholine mimics acetylcholine, causes initial fasciculations then paralysis',
      'Non-depolarizing: competitively antagonize acetylcholine at nicotinic receptors',
      'Monitor with peripheral nerve stimulator (train-of-four)',
      'Redose based on train-of-four count',
      'Reverse non-depolarizing agents before extubation',
    ],
    [
      'Facilitation of endotracheal intubation',
      'Surgical relaxation (abdominal, thoracic surgery)',
      'Rapid sequence intubation (succinylcholine or high-dose rocuronium)',
      'Prevention of patient movement during delicate surgery',
      'Electroconvulsive therapy (succinylcholine)',
    ],
    [
      'Succinylcholine: personal/family history of malignant hyperthermia, hyperkalemia risk (burns > 24h, spinal cord injury, muscular dystrophy, denervation injuries)',
      'Non-depolarizing: no absolute contraindications; dose adjustment in hepatic/renal failure',
    ],
    [
      'Succinylcholine 1-1.5 mg/kg IV (onset 45-60 sec, duration 6-10 min)',
      'Rocuronium 0.6-1.2 mg/kg IV (onset 60-90 sec, duration 30-45 min)',
      'Vecuronium 0.1 mg/kg IV (onset 2-3 min, duration 25-40 min)',
      'Cisatracurium 0.15-0.2 mg/kg IV (onset 2-3 min, Hofmann elimination)',
    ],
    [
      'Succinylcholine: hyperkalemia, malignant hyperthermia, masseter spasm, bradycardia, increased IOP/ICP',
      'Residual paralysis if inadequately reversed',
      'Allergic/anaphylactic reaction (rocuronium most common NMB to cause anaphylaxis)',
      'Awareness under anesthesia if paralyzed without adequate hypnotic',
    ],
    [
      'Succinylcholine is the only depolarizing agent in clinical use',
      'Rocuronium at 1.2 mg/kg provides intubating conditions comparable to succinylcholine',
      'Train-of-four ratio must be >= 0.9 before extubation to prevent residual paralysis',
      'Cisatracurium undergoes Hofmann elimination (organ-independent), ideal in liver/kidney failure',
      'NMBAs have no analgesic, amnestic, or sedative properties',
    ],
    [
      'Brull SJ, Kopman AF. Current Status of Neuromuscular Reversal and Monitoring. Anesthesiology 2017',
      'Naguib M et al. Pharmacology of Neuromuscular Blocking Drugs. In: Miller\'s Anesthesia, 9th ed.',
    ],
  ),

  'reversal-agents': entry(
    'reversal-agents',
    'Neuromuscular Blockade Reversal Agents',
    'pharmacology',
    'Medications used to reverse neuromuscular blockade at the end of surgery. Neostigmine (anticholinesterase) and sugammadex (selective relaxant binding agent) are the two primary agents.',
    [
      'Neostigmine: inhibits acetylcholinesterase, increasing ACh at NMJ',
      'Always co-administer glycopyrrolate or atropine with neostigmine (prevents muscarinic effects)',
      'Sugammadex: encapsulates rocuronium/vecuronium molecules directly',
      'Confirm adequate reversal: TOF ratio >= 0.9, sustained head lift 5 sec, strong grip',
      'Sugammadex 2 mg/kg for moderate block, 4 mg/kg for deep block, 16 mg/kg for immediate reversal',
    ],
    [
      'Reversal of non-depolarizing neuromuscular blockade before extubation',
      'Sugammadex: emergency reversal of rocuronium (e.g., can\'t intubate scenario)',
      'Prevention of residual postoperative neuromuscular blockade',
    ],
    [
      'Neostigmine: bowel obstruction (relative), bradycardia without anticholinergic coverage',
      'Sugammadex: severe renal impairment (delayed excretion, not a contraindication)',
      'Neostigmine should not be given at deep levels of block (TOF count < 2)',
    ],
    [
      'Neostigmine 0.04-0.07 mg/kg + glycopyrrolate 0.01 mg/kg (or atropine 0.02 mg/kg)',
      'Sugammadex 2 mg/kg (moderate block, TOF count >= 2)',
      'Sugammadex 4 mg/kg (deep block, PTC >= 1)',
      'Sugammadex 16 mg/kg (immediate reversal after rocuronium)',
    ],
    [
      'Neostigmine: bradycardia, bronchospasm, nausea, increased secretions',
      'Sugammadex: anaphylaxis (rare), bradycardia (rare), potential interaction with oral contraceptives',
      'Residual blockade if reversal is inadequate',
    ],
    [
      'Sugammadex provides more complete and reliable reversal than neostigmine',
      'Sugammadex reverses ONLY aminosteroid NMBAs (rocuronium, vecuronium) - NOT benzylisoquinolines',
      'Neostigmine has a ceiling effect; it cannot reverse deep neuromuscular block',
      'Quantitative neuromuscular monitoring (TOF-Watch, EMG) is superior to qualitative assessment',
      'Sugammadex may interfere with hormonal contraceptives for 7 days',
    ],
    [
      'Hristovska AM et al. Efficacy and Safety of Sugammadex vs Neostigmine. Cochrane 2017',
      'Brull SJ, Kopman AF. Current Status of Neuromuscular Reversal and Monitoring. Anesthesiology 2017',
    ],
  ),

  'opioid-analgesics': entry(
    'opioid-analgesics',
    'Opioid Analgesics in Anesthesia',
    'pharmacology',
    'Mu-opioid receptor agonists used perioperatively for analgesia and as adjuncts during general anesthesia. Commonly used agents include fentanyl, morphine, hydromorphone, sufentanil, and remifentanil.',
    [
      'Fentanyl: 1-2 mcg/kg IV bolus for intraoperative analgesia',
      'Remifentanil: 0.05-0.2 mcg/kg/min infusion (ultra-short acting, TIVA component)',
      'Morphine: 0.05-0.1 mg/kg IV for postoperative analgesia',
      'Hydromorphone: 0.01-0.02 mg/kg IV (5-7x potency of morphine)',
      'Sufentanil: 0.1-0.5 mcg/kg IV (cardiac anesthesia)',
    ],
    [
      'Intraoperative analgesia as part of balanced anesthesia',
      'Postoperative pain management',
      'Blunting of sympathetic response to laryngoscopy and surgical stimulation',
      'ICU sedation and analgesia',
      'Patient-controlled analgesia (PCA)',
    ],
    [
      'Allergy or intolerance to specific opioid',
      'Concurrent MAO inhibitor use (avoid meperidine especially)',
      'Severe respiratory depression without ventilatory support',
      'Acute or severe asthma in unmonitored setting',
    ],
    [
      'Fentanyl 50 mcg/mL (most commonly used intraoperative opioid)',
      'Remifentanil 1 mg/vial (reconstituted)',
      'Morphine 2-10 mg/mL',
      'Hydromorphone 0.2-4 mg/mL',
      'Sufentanil 50 mcg/mL',
    ],
    [
      'Respiratory depression (dose-dependent)',
      'Hypotension (histamine release with morphine)',
      'Nausea and vomiting',
      'Pruritus (especially neuraxial opioids)',
      'Chest wall rigidity (rapid high-dose fentanyl or sufentanil)',
      'Bradycardia',
      'Urinary retention',
      'Opioid-induced hyperalgesia (remifentanil)',
    ],
    [
      'Remifentanil is metabolized by tissue esterases - offset independent of infusion duration',
      'Fentanyl is 100x more potent than morphine',
      'Context-sensitive half-time is critical for choosing opioid in prolonged procedures',
      'Chest wall rigidity from fentanyl can be treated with naloxone or a muscle relaxant',
      'Multimodal analgesia (NSAIDs, acetaminophen, regional) should always be considered to reduce opioid requirements',
    ],
    [
      'Egan TD. Opioids. In: Miller\'s Anesthesia, 9th ed. Elsevier, 2020',
      'Chou R et al. Management of Postoperative Pain. APS/ASA/ASRA Guideline. J Pain 2016',
    ],
  ),

  // ===== COMPLICATIONS =====

  'malignant-hyperthermia': entry(
    'malignant-hyperthermia',
    'Malignant Hyperthermia',
    'complications',
    'A life-threatening pharmacogenetic disorder triggered by volatile anesthetic agents and/or succinylcholine in susceptible individuals. Caused by uncontrolled skeletal muscle calcium release via ryanodine receptors (RYR1 mutation), leading to hypermetabolism, hyperthermia, and multiorgan failure.',
    [
      'Earliest sign: unexplained rise in ETCO2 (most sensitive)',
      'Tachycardia, tachypnea, masseter muscle rigidity',
      'Temperature rise is a LATE sign (may exceed 1 C every 5 minutes)',
      'Mixed respiratory and metabolic acidosis, hyperkalemia, myoglobinuria',
      'CK elevation (peaks 12-24 hours after onset)',
    ],
    [
      'Diagnosis triggered by clinical signs during or after exposure to volatile agents or succinylcholine',
      'Family history of MH or unexplained perioperative death',
      'Caffeine-halothane contracture test (gold standard diagnostic)',
      'Genetic testing for RYR1 mutations',
    ],
    [
      'All volatile anesthetic agents are absolute triggers',
      'Succinylcholine is an absolute trigger',
      'In MH-susceptible patients, use TIVA (propofol + remifentanil + non-depolarizing NMBAs)',
    ],
    [
      'Dantrolene 2.5 mg/kg IV initial bolus, repeat every 5 min up to 10 mg/kg (or until signs resolve)',
      'Ryanodex (concentrated dantrolene) 2.5 mg/kg',
      'Iced saline IV, cooling blankets, cold lavage',
      'Sodium bicarbonate for acidosis',
      'Calcium chloride or gluconate for hyperkalemia',
      'Regular insulin + dextrose for hyperkalemia',
    ],
    [
      'Death (if untreated, mortality > 70%; with dantrolene < 5%)',
      'Disseminated intravascular coagulation (DIC)',
      'Acute renal failure from myoglobinuria',
      'Cardiac arrest from hyperkalemia',
      'Compartment syndrome',
      'Recrudescence (recurrence after initial treatment in 25%)',
    ],
    [
      'ETCO2 rise is the earliest and most sensitive sign of MH',
      'Temperature elevation is a LATE finding - do not wait for it to treat',
      'Know the location of your MH cart and dantrolene supply',
      'MH hotline (US): 1-800-MH-HYPER (1-800-644-9737)',
      'After an MH event, monitor in ICU for at least 24-36 hours for recrudescence',
      'Autosomal dominant inheritance with variable penetrance',
    ],
    [
      'Rosenberg H et al. Malignant Hyperthermia Management. Anesth Analg 2015',
      'MHAUS (Malignant Hyperthermia Association of the United States) Guidelines',
      'Hopkins PM. Malignant Hyperthermia: Pharmacology. Br J Anaesth 2011',
    ],
  ),

  'aspiration-pneumonitis': entry(
    'aspiration-pneumonitis',
    'Pulmonary Aspiration',
    'complications',
    'Inhalation of gastric contents into the tracheobronchial tree during anesthesia, leading to chemical pneumonitis, bacterial pneumonia, airway obstruction, or death. Mendelson syndrome describes the chemical pneumonitis from acidic gastric contents.',
    [
      'Prevention: NPO guidelines (clear liquids 2h, light meal 6h, full meal 8h)',
      'Rapid sequence induction with cricoid pressure for at-risk patients',
      'Pharmacologic prophylaxis: ranitidine, metoclopramide, sodium citrate',
      'If aspiration occurs: suction airway, intubate, bronchoscopy for particulate matter',
      'Supportive care: supplemental O2, mechanical ventilation if needed',
      'Bronchodilators for bronchospasm; avoid routine antibiotics initially',
    ],
    [
      'Risk stratification applies to all patients undergoing anesthesia',
      'High risk: emergency surgery, pregnancy, obesity, GERD, diabetic gastroparesis, bowel obstruction',
    ],
    [
      'Aspiration itself is not a planned event; prevention is the goal',
      'Elective surgery should be delayed if NPO guidelines not met (relative)',
    ],
    [
      'Sodium citrate 30 mL PO (non-particulate antacid) within 30 minutes of induction',
      'Ranitidine 50 mg IV or famotidine 20 mg IV (reduce gastric acidity)',
      'Metoclopramide 10 mg IV (prokinetic, reduce gastric volume)',
      'Ondansetron 4 mg IV (reduce vomiting risk)',
    ],
    [
      'Aspiration pneumonitis (chemical injury, Mendelson syndrome)',
      'Aspiration pneumonia (bacterial infection)',
      'Acute respiratory distress syndrome (ARDS)',
      'Bronchospasm and airway obstruction',
      'Death (mortality 3-5% of witnessed aspiration events)',
    ],
    [
      'ASA fasting guidelines: 2 hours clear liquids, 6 hours light meal, 8 hours fatty/heavy meal',
      'Aspiration risk is the primary reason for NPO guidelines before elective surgery',
      'Cricoid pressure efficacy is debated, but still recommended in many RSI protocols',
      'Do not give prophylactic antibiotics after aspiration - treat only if pneumonia develops',
      'Right lower lobe is most commonly affected in supine aspiration',
    ],
    [
      'Warner MA et al. Practice Guidelines for Preoperative Fasting. Anesthesiology 2017',
      'Mendelson CL. The Aspiration of Stomach Contents into the Lungs During Obstetric Anesthesia. Am J Obstet Gynecol 1946',
    ],
  ),

  'intraoperative-awareness': entry(
    'intraoperative-awareness',
    'Intraoperative Awareness Under General Anesthesia',
    'complications',
    'Unintended consciousness during general anesthesia with explicit recall of intraoperative events. Incidence approximately 1-2 per 1,000 general anesthetics. Can cause significant psychological harm including post-traumatic stress disorder.',
    [
      'Ensure adequate anesthetic depth using clinical signs and monitoring (BIS, end-tidal agent)',
      'Maintain end-tidal volatile agent concentration at >= 0.7 MAC',
      'Use BIS monitoring for high-risk patients (target 40-60)',
      'Avoid total paralysis without adequate hypnotic (NMBAs mask signs of light anesthesia)',
      'If awareness suspected postoperatively: empathetic interview, psychological referral',
    ],
    [
      'Risk factors: use of neuromuscular blocking agents, cardiac surgery, cesarean section under GA, trauma surgery, history of substance abuse, difficult airway management',
    ],
    [
      'No contraindications to preventing awareness - it should always be a priority',
    ],
    [
      'Volatile agents at adequate MAC (primary prevention)',
      'BIS monitoring (target 40-60)',
      'Propofol TIVA with TCI (target-controlled infusion)',
      'Benzodiazepine premedication (amnestic adjunct)',
    ],
    [
      'Post-traumatic stress disorder (PTSD) - most serious consequence',
      'Anxiety, depression, and sleep disturbances',
      'Chronic pain syndromes',
      'Fear of future anesthesia',
      'Medico-legal claims',
    ],
    [
      'Neuromuscular blocking agents are the strongest risk factor - they abolish movement response',
      'The 5th National Audit Project (NAP5) found 1:19,600 incidence of certain/probable awareness',
      'End-tidal agent monitoring prevents more awareness events than BIS in volatile-based anesthesia',
      'Immediate acknowledgment and psychological support reduce long-term sequelae',
      'Structured interview (modified Brice questionnaire) at 24 hours and 2 weeks postoperatively',
    ],
    [
      'Pandit JJ et al. 5th National Audit Project (NAP5) on Accidental Awareness. Br J Anaesth 2014',
      'Avidan MS et al. BAG-RECALL Trial. NEJM 2011',
      'Myles PS et al. B-Aware Trial. Lancet 2004',
    ],
  ),

  'ponv': entry(
    'ponv',
    'Postoperative Nausea and Vomiting (PONV)',
    'complications',
    'Nausea, vomiting, or retching occurring within 24 hours of surgery. Affects 30% of general surgical patients and up to 80% of high-risk patients. A leading cause of patient dissatisfaction and delayed discharge.',
    [
      'Risk stratify using Apfel simplified score (female sex, non-smoking, history of PONV/motion sickness, postoperative opioid use)',
      'Multimodal prophylaxis for moderate to high risk patients',
      'Consider TIVA with propofol (baseline risk reduction)',
      'Minimize opioid use (multimodal analgesia)',
      'Treat with agent from different class than prophylaxis if rescue needed',
    ],
    [
      'All surgical patients should be risk-assessed for PONV',
      'Prophylaxis recommended for patients with >= 2 Apfel risk factors',
      'High-risk patients (3-4 risk factors) should receive multimodal prophylaxis',
    ],
    [
      'Individual agent contraindications apply (e.g., droperidol in prolonged QTc)',
    ],
    [
      'Ondansetron 4 mg IV (5-HT3 antagonist)',
      'Dexamethasone 4-8 mg IV at induction',
      'Droperidol 0.625-1.25 mg IV (butyrophenone)',
      'Scopolamine transdermal patch (applied evening before or 2h pre-op)',
      'Aprepitant 40 mg PO (NK-1 antagonist)',
      'Propofol TIVA (reduces baseline PONV risk by ~25%)',
      'Haloperidol 0.5-2 mg IV (rescue)',
    ],
    [
      'Dehydration from protracted vomiting',
      'Aspiration of vomitus',
      'Wound dehiscence (abdominal surgery)',
      'Electrolyte imbalances',
      'Delayed hospital discharge',
      'Patient dissatisfaction',
    ],
    [
      'Each Apfel risk factor adds approximately 20% PONV risk (0 factors: 10%, 4 factors: 80%)',
      'Multimodal approach: combine agents from different drug classes',
      'Propofol TIVA reduces PONV risk equivalent to one antiemetic',
      'Dexamethasone should be given at induction, ondansetron at end of surgery',
      'Regional anesthesia reduces PONV by avoiding general anesthesia and reducing opioid use',
    ],
    [
      'Gan TJ et al. Fourth Consensus Guidelines for PONV Management. Anesth Analg 2020',
      'Apfel CC et al. A Simplified Risk Score for PONV. Anesthesiology 1999',
    ],
  ),

  'local-anesthetic-systemic-toxicity': entry(
    'local-anesthetic-systemic-toxicity',
    'Local Anesthetic Systemic Toxicity (LAST)',
    'complications',
    'A life-threatening complication resulting from excessive plasma levels of local anesthetics, leading to CNS and cardiovascular toxicity. Can occur from inadvertent intravascular injection, excessive dosing, or rapid absorption.',
    [
      'Early CNS symptoms: perioral numbness, metallic taste, tinnitus, visual changes',
      'Progressive CNS: confusion, agitation, seizures',
      'Cardiovascular: hypotension, bradycardia, wide-complex arrhythmias, asystole',
      'Atypical presentations common: may present with cardiovascular collapse without preceding CNS signs',
      'Treatment: stop injection, call for help, manage airway, administer intralipid',
    ],
    [
      'Any procedure involving local anesthetic injection',
      'Regional anesthesia (highest risk with intercostal and IV regional blocks)',
      'Tumescent liposuction',
      'Dental blocks',
    ],
    [
      'There are no contraindications to treating LAST',
      'Prevention: use lowest effective dose, aspirate before injection, use ultrasound guidance',
    ],
    [
      'Intralipid 20%: 1.5 mL/kg IV bolus, then 0.25 mL/kg/min infusion',
      'Repeat lipid bolus twice at 5-minute intervals if cardiovascular instability persists',
      'Maximum lipid dose: 12 mL/kg',
      'Benzodiazepines for seizures (avoid propofol in hemodynamic instability)',
      'Epinephrine in small doses (< 1 mcg/kg) if needed',
      'Avoid vasopressin, calcium channel blockers, beta-blockers',
    ],
    [
      'Seizures',
      'Cardiovascular collapse and cardiac arrest',
      'Death (if untreated)',
      'Anoxic brain injury',
    ],
    [
      'Bupivacaine has the highest cardiotoxicity risk among commonly used local anesthetics',
      'Intralipid 20% is the specific antidote - every location using local anesthetics should stock it',
      'LAST can present up to 60 minutes after injection',
      'Ropivacaine is less cardiotoxic than bupivacaine at equivalent doses',
      'Incremental dosing with aspiration and use of epinephrine test dose reduce risk',
      'ASRA checklist for LAST management should be posted in all regional anesthesia locations',
    ],
    [
      'Neal JM et al. ASRA Practice Advisory on LAST, 3rd revision. Reg Anesth Pain Med 2020',
      'Weinberg GL. Lipid Emulsion Infusion: Resuscitation for LAST. Anesthesiology 2012',
    ],
  ),

  // ===== PERIOPERATIVE =====

  'preoperative-assessment': entry(
    'preoperative-assessment',
    'Preoperative Anesthesia Assessment',
    'perioperative',
    'Systematic evaluation of a patient before surgery to identify risk factors, optimize medical conditions, develop an anesthetic plan, and obtain informed consent. Includes history, physical examination, ASA classification, and airway assessment.',
    [
      'Review medical history: cardiovascular, pulmonary, endocrine, neurological, hepatic, renal',
      'Assess functional capacity (METs: >= 4 METs generally acceptable for most surgeries)',
      'Airway assessment: Mallampati score, thyromental distance, mouth opening, neck mobility',
      'Review medications: anticoagulants, antihypertensives, diabetic medications, herbals',
      'Order appropriate preoperative testing based on clinical indications (not routine)',
      'Assign ASA Physical Status classification (I-VI)',
      'Discuss anesthetic options and obtain informed consent',
    ],
    [
      'All patients undergoing procedures requiring anesthesia or sedation',
    ],
    [
      'No contraindications to preoperative assessment - it is required for all anesthetic plans',
    ],
    [
      'ASA-directed testing only (not routine CBC, BMP, CXR, ECG for healthy patients)',
      'Pregnancy test for females of childbearing age (institutional policy)',
      'Type and screen for procedures with expected blood loss',
    ],
    [
      'Unanticipated difficult airway if assessment is inadequate',
      'Perioperative cardiac events in unoptimized patients',
      'Medication interactions (e.g., MAOIs, anticoagulants)',
      'Surgery cancellation or delay',
    ],
    [
      'ASA Physical Status: I (healthy), II (mild systemic disease), III (severe systemic disease), IV (life-threatening), V (moribund), VI (brain-dead organ donor)',
      'Functional capacity < 4 METs is associated with increased perioperative cardiac risk',
      'Mallampati score correlates with but does not reliably predict difficult intubation',
      'The STOP-BANG questionnaire screens for obstructive sleep apnea',
      'Most preoperative testing should be indication-based, not routine',
    ],
    [
      'Apfelbaum JL et al. ASA Practice Advisory for Preanesthesia Evaluation. Anesthesiology 2012',
      'Fleisher LA et al. ACC/AHA Guidelines on Perioperative Cardiovascular Evaluation. Circulation 2014',
    ],
  ),

  'asa-npo-guidelines': entry(
    'asa-npo-guidelines',
    'ASA Fasting (NPO) Guidelines',
    'perioperative',
    'Evidence-based fasting guidelines to reduce aspiration risk during anesthesia. Specify minimum fasting intervals for different types of ingested materials before elective procedures requiring sedation or general anesthesia.',
    [
      'Clear liquids: minimum 2 hours (water, clear juice, black coffee, tea without milk)',
      'Breast milk: minimum 4 hours',
      'Infant formula, non-human milk: minimum 6 hours',
      'Light meal (toast and clear liquids): minimum 6 hours',
      'Full meal (fried, fatty, or meat-containing): minimum 8 hours',
      'Chewing gum and hard candy: not considered a reason to delay surgery (updated guidance)',
    ],
    [
      'All patients undergoing elective procedures requiring general anesthesia, regional anesthesia, or procedural sedation',
    ],
    [
      'Emergency surgery may proceed regardless of fasting status (with aspiration precautions)',
      'Guidelines apply to healthy patients; higher risk patients may require longer fasting',
    ],
    [
      'Sodium citrate 30 mL PO (if aspiration risk despite fasting)',
      'Ranitidine or famotidine (reduce gastric acidity)',
      'Metoclopramide (increase gastric emptying)',
    ],
    [
      'Aspiration of gastric contents if guidelines not followed',
      'Dehydration and hypoglycemia from excessive fasting',
      'Patient discomfort and dissatisfaction from prolonged fasting',
      'Case cancellation or delay',
    ],
    [
      '2-4-6-8 rule is a simple mnemonic: 2h clear liquids, 4h breast milk, 6h light meal, 8h full meal',
      'Prolonged fasting beyond guidelines provides no additional benefit and may be harmful',
      'Clear liquids 2 hours before surgery improve patient comfort and may reduce PONV',
      'Diabetic patients require special fasting instructions to prevent hypoglycemia',
      'Updated guidelines recommend carbohydrate-rich clear drinks 2h pre-op to reduce insulin resistance',
    ],
    [
      'ASA Practice Guidelines for Preoperative Fasting, Anesthesiology 2017',
      'Smith I et al. Perioperative Fasting in Adults and Children. Eur J Anaesthesiol 2011',
    ],
  ),

  'enhanced-recovery-after-surgery': entry(
    'enhanced-recovery-after-surgery',
    'Enhanced Recovery After Surgery (ERAS)',
    'perioperative',
    'Evidence-based multimodal perioperative care pathways designed to reduce surgical stress, maintain physiologic function, and accelerate recovery. ERAS protocols coordinate preoperative, intraoperative, and postoperative interventions across disciplines.',
    [
      'Preoperative: patient education, carbohydrate loading, minimize fasting, no routine bowel prep',
      'Intraoperative: goal-directed fluid therapy, multimodal analgesia, minimize opioids, normothermia',
      'Postoperative: early mobilization, early oral intake, multimodal pain management',
      'Avoid routine NG tubes, drains, and urinary catheters when possible',
      'Standardized order sets and audit compliance',
    ],
    [
      'Colorectal surgery (original and best-studied application)',
      'Gynecologic surgery',
      'Orthopedic surgery (joint replacement)',
      'Urologic surgery',
      'Cardiac and thoracic surgery',
      'Hepatobiliary and pancreatic surgery',
    ],
    [
      'No absolute contraindications to ERAS principles',
      'Individual components may be modified based on patient comorbidities',
      'Emergency surgery may adopt applicable ERAS elements',
    ],
    [
      'Acetaminophen 1g IV/PO scheduled',
      'Celecoxib 200-400 mg PO (if no contraindication)',
      'Gabapentin 300-600 mg PO preoperatively',
      'Regional anesthesia / nerve blocks',
      'Dexamethasone 4-8 mg IV (anti-inflammatory and antiemetic)',
      'IV lidocaine infusion 1-2 mg/kg/hr (abdominal surgery)',
      'Goal-directed fluid therapy with balanced crystalloids',
    ],
    [
      'Non-compliance leading to suboptimal outcomes',
      'Readmission if discharged too early without adequate support',
      'NSAID-related bleeding or renal injury',
    ],
    [
      'ERAS reduces length of stay by 30-50% and complications by 30-40%',
      'Multimodal analgesia is the cornerstone: combine non-opioid systemic agents + regional techniques',
      'Goal-directed fluid therapy prevents both hypovolemia and fluid overload',
      'Early mobilization is one of the most impactful interventions',
      'Institutional compliance with protocol elements strongly correlates with outcomes',
    ],
    [
      'Gustafsson UO et al. ERAS Society Guidelines for Colorectal Surgery. World J Surg 2019',
      'Ljungqvist O et al. Enhanced Recovery After Surgery: A Review. JAMA Surg 2017',
    ],
  ),

  'post-anesthesia-care': entry(
    'post-anesthesia-care',
    'Post-Anesthesia Care Unit (PACU)',
    'perioperative',
    'Specialized unit for monitoring and managing patients during the immediate postoperative period following anesthesia. Care focuses on airway management, pain control, hemodynamic stability, and identification of early complications.',
    [
      'Handoff from anesthesia to PACU nurse (standardized report)',
      'Monitor vitals every 5 minutes x 3, then every 15 minutes',
      'Assess airway patency, oxygen saturation, respiratory pattern',
      'Evaluate and treat pain using numeric rating scale (NRS)',
      'Monitor for nausea, vomiting, bleeding, urinary retention',
      'Apply Aldrete scoring system for discharge readiness (score >= 9)',
      'Discharge criteria: stable vitals, adequate pain control, no active bleeding, adequate consciousness',
    ],
    [
      'All patients recovering from general anesthesia',
      'Patients recovering from regional anesthesia or MAC with sedation',
      'ASA standards require PACU care for all anesthetic types',
    ],
    [
      'Direct ICU admission may bypass PACU (complex cardiac, neurosurgical cases)',
    ],
    [
      'Oxygen therapy (nasal cannula or face mask)',
      'Morphine 1-2 mg IV q5min PRN pain (titrate)',
      'Hydromorphone 0.2-0.4 mg IV q5min PRN',
      'Ketorolac 15-30 mg IV',
      'Ondansetron 4 mg IV PRN nausea',
      'Naloxone 0.04 mg IV for opioid-induced respiratory depression',
      'Flumazenil 0.2 mg IV for benzodiazepine reversal',
    ],
    [
      'Airway obstruction (tongue, laryngospasm, edema)',
      'Hypoventilation and hypoxemia',
      'Postoperative hemorrhage',
      'Emergence delirium or agitation',
      'Hypothermia and shivering',
      'PONV',
      'Urinary retention',
      'Cardiovascular instability (hypertension, hypotension, arrhythmias)',
    ],
    [
      'Aldrete score assesses: activity, respiration, circulation, consciousness, and SpO2',
      'The most common cause of airway obstruction in PACU is the tongue falling posteriorly',
      'Shivering can be treated with meperidine 12.5-25 mg IV or forced-air warming',
      'Emergence delirium is more common in children (sevoflurane) and elderly (anticholinergics)',
      'Structured handoff (e.g., I-PASS) improves communication and reduces errors',
    ],
    [
      'ASA Standards for Post-Anesthesia Care, Last amended October 2019',
      'Aldrete JA. The Post-Anesthesia Recovery Score Revisited. J Clin Anesth 1995',
    ],
  ),

  'blood-product-transfusion': entry(
    'blood-product-transfusion',
    'Perioperative Blood Product Transfusion',
    'perioperative',
    'Administration of packed red blood cells (PRBCs), fresh frozen plasma (FFP), platelets, or cryoprecipitate during the perioperative period to treat hemorrhage, coagulopathy, or severe anemia. Guided by clinical assessment and laboratory values.',
    [
      'Type and screen / crossmatch preoperatively based on expected blood loss',
      'PRBC transfusion trigger: Hgb < 7 g/dL (restrictive) or < 10 g/dL (cardiac, symptomatic)',
      'FFP for INR > 1.5 with active bleeding or planned procedure',
      'Platelets for count < 50,000 with active bleeding or < 100,000 for neuraxial/CNS surgery',
      'Cryoprecipitate for fibrinogen < 150-200 mg/dL',
      'Massive transfusion protocol: 1:1:1 ratio of PRBC:FFP:platelets',
      'Use blood warmer for rapid or large-volume transfusion',
    ],
    [
      'Acute hemorrhage with hemodynamic instability',
      'Severe anemia (Hgb < 7 g/dL, or < 8-10 g/dL in cardiac patients)',
      'Coagulopathy with active bleeding',
      'Massive transfusion in trauma',
      'Preoperative optimization in severely anemic patients (consider alternatives first)',
    ],
    [
      'Patient refusal (Jehovah\'s Witness - must respect autonomy)',
      'No absolute medical contraindications when transfusion is life-saving',
    ],
    [
      'Packed Red Blood Cells (PRBCs) - one unit raises Hgb ~1 g/dL',
      'Fresh Frozen Plasma (FFP) - 10-15 mL/kg',
      'Platelets - one apheresis unit or 6-pack random donor',
      'Cryoprecipitate - 10 units (contains fibrinogen, factor VIII, vWF, factor XIII)',
      'Tranexamic acid 1g IV (antifibrinolytic, reduces transfusion requirements)',
      'Cell salvage (autologous blood recovery)',
    ],
    [
      'Transfusion reactions (febrile non-hemolytic most common)',
      'Acute hemolytic transfusion reaction (ABO incompatibility - most dangerous)',
      'Transfusion-related acute lung injury (TRALI)',
      'Transfusion-associated circulatory overload (TACO)',
      'Infectious disease transmission (extremely rare with modern screening)',
      'Hyperkalemia (stored blood)',
      'Citrate toxicity and hypocalcemia (massive transfusion)',
      'Hypothermia from cold blood products',
    ],
    [
      'Restrictive transfusion strategy (Hgb trigger 7 g/dL) is as safe or safer than liberal in most patients',
      'ABO verification at bedside is the most critical safety step',
      'Massive transfusion protocol should be activated early in major hemorrhage',
      'Tranexamic acid within 3 hours of injury reduces mortality (CRASH-2 trial)',
      'Hypothermia, acidosis, and coagulopathy form the lethal triad in trauma',
    ],
    [
      'Carson JL et al. Clinical Practice Guidelines from the AABB: Red Blood Cell Transfusion Thresholds. JAMA 2016',
      'CRASH-2 Trial Collaborators. Effects of TXA on Death. Lancet 2010',
    ],
  ),

  'monitored-anesthesia-care': entry(
    'monitored-anesthesia-care',
    'Monitored Anesthesia Care (MAC)',
    'perioperative',
    'An anesthesia service in which an anesthesia provider monitors the patient during a procedure performed under local or regional anesthesia, with or without supplemental IV sedation and analgesia. The anesthesia provider must be prepared to convert to general anesthesia if necessary.',
    [
      'Perform standard preoperative assessment',
      'Apply ASA standard monitors (SpO2, ECG, NIBP, capnography)',
      'Establish IV access',
      'Administer anxiolysis and analgesia as needed (titrated sedation)',
      'Monitor patient responsiveness, ventilation, and hemodynamics continuously',
      'Be prepared with airway equipment and medications for conversion to general anesthesia',
    ],
    [
      'Minor surgical procedures with local anesthesia',
      'Diagnostic procedures (endoscopy, cardiac catheterization)',
      'Ophthalmic surgery under retrobulbar or topical anesthesia',
      'Interventional radiology and pain procedures',
      'Patient preference for anesthesia provider monitoring',
    ],
    [
      'Patient refusal of monitoring',
      'No specific contraindications to MAC itself; individual agents have their own contraindications',
    ],
    [
      'Midazolam 0.5-2 mg IV (anxiolysis)',
      'Fentanyl 25-100 mcg IV (analgesia)',
      'Propofol 10-50 mg IV boluses or 25-75 mcg/kg/min infusion',
      'Dexmedetomidine 0.5-1 mcg/kg load, 0.2-0.7 mcg/kg/hr',
      'Ketamine 10-20 mg IV boluses (analgesic adjunct)',
    ],
    [
      'Over-sedation requiring airway intervention',
      'Respiratory depression',
      'Unplanned conversion to general anesthesia',
      'Cardiovascular instability',
      'Patient discomfort or dissatisfaction',
    ],
    [
      'MAC carries the same standard of care as general anesthesia regarding monitoring and readiness',
      'The anesthesia provider must be prepared to rescue from any depth of sedation',
      'MAC is a billable anesthesia service, not just sedation by a non-anesthesiologist',
      'Dexmedetomidine provides sedation and analgesia without respiratory depression',
      'Local anesthesia is the foundation; sedation is supplemental',
    ],
    [
      'ASA Position on Monitored Anesthesia Care, ASA 2018',
      'ASA Standards for Basic Anesthetic Monitoring, 2020',
    ],
  ),

};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Returns all anesthesia entries as an array. */
export const getAllAnesthesiaEntries = (): AnesthesiaEntry[] =>
  Object.values(ANESTHESIA_ENTRIES);

/** Returns a single entry by its unique ID, or undefined if not found. */
export const getAnesthesiaEntryById = (id: string): AnesthesiaEntry | undefined =>
  ANESTHESIA_ENTRIES[id];

/**
 * Full-text search across anesthesia entries.
 * Searches name, description, technique, indications, medications, complications,
 * and keyPearls fields. Case-insensitive. Returns entries sorted by relevance.
 */
export function searchAnesthesiaEntries(query: string): AnesthesiaEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const scored: { entry: AnesthesiaEntry; score: number }[] = [];

  for (const e of Object.values(ANESTHESIA_ENTRIES)) {
    let score = 0;

    if (e.name.toLowerCase().includes(q)) score += 10;
    if (e.id.includes(q)) score += 8;
    if (e.description.toLowerCase().includes(q)) score += 5;
    if (e.technique.some(t => t.toLowerCase().includes(q))) score += 4;
    if (e.indications.some(i => i.toLowerCase().includes(q))) score += 4;
    if (e.medications.some(m => m.toLowerCase().includes(q))) score += 4;
    if (e.complications.some(c => c.toLowerCase().includes(q))) score += 3;
    if (e.keyPearls.some(k => k.toLowerCase().includes(q))) score += 3;
    if (e.contraindications.some(c => c.toLowerCase().includes(q))) score += 2;
    if (e.references.some(r => r.toLowerCase().includes(q))) score += 1;

    if (score > 0) scored.push({ entry: e, score });
  }

  return scored.sort((a, b) => b.score - a.score).map(s => s.entry);
}

/**
 * Filter entries by one or more categories.
 * Pass a single category or an array of categories.
 */
export function filterByCategory(
  categories: AnesthesiaCategory | AnesthesiaCategory[],
): AnesthesiaEntry[] {
  const cats = Array.isArray(categories) ? categories : [categories];
  return Object.values(ANESTHESIA_ENTRIES).filter(e => cats.includes(e.category));
}

/**
 * Combined search + category filter.
 * If query is empty, returns all entries in the given categories.
 * If categories is undefined, searches across all categories.
 */
export function filterAnesthesiaEntries(
  options: { query?: string; categories?: AnesthesiaCategory[] },
): AnesthesiaEntry[] {
  let results: AnesthesiaEntry[];

  if (options.query && options.query.trim()) {
    results = searchAnesthesiaEntries(options.query);
  } else {
    results = getAllAnesthesiaEntries();
  }

  if (options.categories && options.categories.length > 0) {
    results = results.filter(e => options.categories!.includes(e.category));
  }

  return results;
}

/** Returns all distinct categories present in the database. */
export function getAnesthesiaDatabaseCategories(): AnesthesiaCategory[] {
  const cats = new Set<AnesthesiaCategory>();
  for (const e of Object.values(ANESTHESIA_ENTRIES)) {
    cats.add(e.category);
  }
  return Array.from(cats);
}

/** Returns a count of entries per category. */
export function getAnesthesiaEntryCounts(): Record<AnesthesiaCategory, number> {
  const counts = {} as Record<AnesthesiaCategory, number>;
  for (const e of Object.values(ANESTHESIA_ENTRIES)) {
    counts[e.category] = (counts[e.category] || 0) + 1;
  }
  return counts;
}
