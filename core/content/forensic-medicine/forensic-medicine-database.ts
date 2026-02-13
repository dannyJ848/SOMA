/**
 * Forensic Medicine Database
 *
 * Comprehensive database of forensic medicine entries for SOMA medical education.
 * Covers death investigation, injury patterns, abuse recognition, legal procedures,
 * toxicology, and evidence collection.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ForensicCategory =
  | 'death-investigation'
  | 'injury-patterns'
  | 'abuse-recognition'
  | 'legal-procedures'
  | 'toxicology'
  | 'evidence-collection';

export interface ForensicMedicineEntry {
  id: string;
  name: string;
  category: ForensicCategory;
  description: string;
  keyFindings: string[];
  legalConsiderations: string[];
  clinicalRelevance: string[];
  examHighYield: string[];
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const entry = (
  id: string,
  name: string,
  category: ForensicCategory,
  description: string,
  keyFindings: string[],
  legalConsiderations: string[],
  clinicalRelevance: string[],
  examHighYield: string[],
): ForensicMedicineEntry => ({
  id,
  name,
  category,
  description,
  keyFindings,
  legalConsiderations,
  clinicalRelevance,
  examHighYield,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const FORENSIC_MEDICINE_ENTRIES: Record<string, ForensicMedicineEntry> = {

  // ── Death Investigation ────────────────────────────────────────────────

  'cause-vs-manner-of-death': entry(
    'cause-vs-manner-of-death',
    'Cause vs Manner of Death',
    'death-investigation',
    'Cause of death is the disease or injury producing the lethal physiological derangement; manner of death classifies the circumstances (natural, accident, suicide, homicide, undetermined).',
    [
      'Cause of death: the specific disease, injury, or mechanism (e.g., coronary artery atherosclerosis, gunshot wound to head)',
      'Mechanism of death: the physiological derangement leading to death (e.g., cardiac arrhythmia, exsanguination)',
      'Manner of death: natural, accident, suicide, homicide, or undetermined (NASH-U)',
      'A single cause can have different manners depending on circumstances (e.g., drug overdose may be accident, suicide, or homicide)',
    ],
    [
      'Manner of death determination directly affects criminal investigation and prosecution',
      'Death certificate requires both cause and manner; inaccurate certification may constitute fraud',
      'Insurance payouts often depend on manner of death (e.g., double indemnity for accidental death)',
      'Undetermined manner is appropriate when evidence is insufficient — avoid guessing',
    ],
    [
      'Attending physicians certify deaths from natural causes; medical examiners/coroners handle unnatural or suspicious deaths',
      'Correct cause-of-death reporting improves public health surveillance data',
      'Physicians must understand when to refer deaths to the medical examiner',
      'Contributing conditions should be listed but distinguished from the proximate cause',
    ],
    [
      'NASH-U classification: Natural, Accident, Suicide, Homicide, Undetermined',
      'Cause answers "what" killed the person; manner answers "how" (circumstances)',
      'Mechanism (e.g., cardiac arrest) is never an acceptable cause of death alone',
      'Proximate cause: the initial event in the chain leading to death',
    ],
  ),

  'death-certification': entry(
    'death-certification',
    'Death Certification',
    'death-investigation',
    'Legal documentation of death including cause, manner, and contributing factors, completed on the death certificate following WHO International Classification format.',
    [
      'Part I lists the chain of events leading to death: immediate cause (line a) through underlying cause (lowest line)',
      'Part II lists other significant conditions contributing to death but not directly causing it',
      'Time intervals between onset of each condition and death should be estimated',
      'The underlying cause of death (lowest completed line in Part I) is the most important for public health statistics',
    ],
    [
      'Death certificates are legal documents; inaccurate completion may carry legal consequences',
      'Physicians must sign within timeframe mandated by state law (commonly 24–72 hours)',
      'Pending cause of death is acceptable when awaiting toxicology or further investigation',
      'Amendment procedures exist if errors are discovered after filing',
    ],
    [
      'All physicians will complete death certificates regardless of specialty',
      'Common errors: listing mechanism only, incorrect causal sequence, omitting contributing conditions',
      'Electronic death registration systems (EDRS) are replacing paper certificates in most jurisdictions',
      'Funeral homes cannot proceed with disposition without a signed death certificate',
    ],
    [
      'Underlying cause of death = lowest completed line in Part I = drives mortality statistics',
      'Never list "cardiac arrest" or "cardiopulmonary arrest" as a sole cause — these are mechanisms',
      'Example correct chain: (a) Pulmonary embolism → (b) Deep venous thrombosis → (c) Immobilization from hip fracture → (d) Fall',
      'Part II example: diabetes mellitus, hypertension, chronic kidney disease',
    ],
  ),

  'autopsy-types-findings': entry(
    'autopsy-types-findings',
    'Autopsy: Types and Findings',
    'death-investigation',
    'Systematic postmortem examination including external and internal evaluation; may be clinical (hospital) autopsy for quality assurance or medicolegal autopsy for legal investigation.',
    [
      'Clinical autopsy: performed with family consent to determine cause of death and evaluate treatment; rate has declined to <5% in most hospitals',
      'Medicolegal autopsy: ordered by medical examiner/coroner, no family consent required, performed in unnatural, suspicious, or unexplained deaths',
      'Standard technique: Y-incision, organ removal en bloc or individually, systematic examination of all organ systems',
      'Ancillary studies include histology, toxicology, microbiology, neuropathology, and molecular testing',
    ],
    [
      'Medicolegal autopsies do not require next-of-kin consent — authority derives from statute',
      'Chain of custody must be maintained for all specimens in medicolegal cases',
      'Autopsy findings may be subpoenaed and presented in court proceedings',
      'Religious or cultural objections may be considered but generally do not override medicolegal authority',
    ],
    [
      'Autopsies reveal clinically undiagnosed conditions in 25–40% of cases',
      'Quality improvement tool: identifies diagnostic discrepancies in approximately 10% of hospital deaths',
      'Molecular autopsy (genetic testing) increasingly important for sudden unexplained death in the young',
      'Verbal autopsy methods used in resource-limited settings to estimate cause-of-death distributions',
    ],
    [
      'Clinical autopsy = consent needed; medicolegal autopsy = no consent needed',
      'Autopsy rate decline has reduced feedback to clinicians and may impair diagnostic accuracy',
      'Molecular autopsy can identify channelopathies (Long QT, Brugada) in sudden cardiac death',
      'External examination alone may miss internal injuries — always correlate',
    ],
  ),

  'time-of-death-estimation': entry(
    'time-of-death-estimation',
    'Time of Death Estimation',
    'death-investigation',
    'Postmortem interval (PMI) estimation using sequential changes in the body: algor mortis (cooling), livor mortis (lividity), rigor mortis (stiffness), and decomposition.',
    [
      'Algor mortis: body cools ~1.5°F/hr until ambient temperature; affected by body habitus, clothing, environment',
      'Livor mortis: blood pools in dependent areas; appears 30 min–2 hr, becomes fixed at 8–12 hr postmortem',
      'Rigor mortis: begins 2–4 hr postmortem in small muscles (jaw, hands), fully developed at 12 hr, resolves at 24–36 hr',
      'Decomposition sequence: autolysis → putrefaction (green discoloration of RLQ abdomen) → bloating → skeletonization',
    ],
    [
      'PMI estimation is inherently imprecise; ranges should be given rather than exact times',
      'Expert testimony should acknowledge limitations and environmental variables',
      'Fixed lividity inconsistent with body position suggests the body was moved postmortem',
      'Scene temperature documentation is critical for Henssge nomogram-based cooling estimates',
    ],
    [
      'Vitreous humor potassium rises predictably postmortem — useful adjunct for PMI estimation',
      'Gastric contents can suggest time of last meal but not reliably time of death',
      'Entomology (insect succession) provides PMI estimates over days to weeks',
      'Tache noire (dark scleral spots) appears when eyes remain open postmortem',
    ],
    [
      'Rigor mortis timeline: starts 2–4 hr, full at 12 hr, resolves 24–36 hr',
      'Livor mortis becomes fixed at 8–12 hr — fixed lividity not matching position = body moved',
      'Algor mortis: Henssge nomogram accounts for body weight, clothing, ambient temperature',
      'RLQ green discoloration is earliest visible sign of putrefaction (cecum proximity)',
    ],
  ),

  'gunshot-wound-patterns': entry(
    'gunshot-wound-patterns',
    'Gunshot Wound Patterns',
    'injury-patterns',
    'Classification of firearm injuries by range of fire, projectile characteristics, and wound morphology; critical for determining manner and circumstances of death.',
    [
      'Contact wound: muzzle pressed against skin; stellate (star-shaped) laceration over bone, soot in wound, muzzle imprint possible',
      'Near-contact/close range (< 6 inches): soot and powder stippling (tattooing) around entrance',
      'Intermediate range (6 inches–2 feet): powder stippling without soot',
      'Distant range (> 2 feet): no soot or stippling; round entrance wound with abrasion collar',
    ],
    [
      'Range of fire determination is critical for differentiating suicide, homicide, and accident',
      'Entrance vs exit wound distinction affects trajectory reconstruction',
      'Bullet recovery and chain of custody are essential for ballistics comparison',
      'Contact wounds to the head with a long-barreled weapon are consistent with suicide',
    ],
    [
      'Entrance wounds: abrasion collar (marginal abrasion), round/oval defect, inverted wound edges',
      'Exit wounds: typically larger, irregular, stellate, everted wound edges, no abrasion collar',
      'Shored exit wound: exit against firm surface creates abrasion collar mimicking entrance wound',
      'Intermediate target effects: bullet passing through an object before striking the body alters wound pattern',
    ],
    [
      'Entrance = round, abrasion collar, inverted edges; Exit = irregular, everted edges, no collar',
      'Stippling/tattooing = intermediate range; soot = close/contact range',
      'Contact wound over bone = stellate pattern from expanding gases',
      'Shored exit wounds can mimic entrance wounds — look for intermediate target evidence',
    ],
  ),

  'sharp-force-injuries': entry(
    'sharp-force-injuries',
    'Sharp Force Injuries',
    'injury-patterns',
    'Injuries produced by sharp-edged or pointed objects including incised wounds, stab wounds, and chop wounds; pattern analysis aids in weapon identification and circumstance reconstruction.',
    [
      'Incised wound: longer than deep, clean edges, caused by slicing/cutting motion (e.g., knife, razor)',
      'Stab wound: deeper than wide, caused by thrusting motion; wound track can damage multiple organs',
      'Chop wound: deep incised wound with underlying bone injury, caused by heavy sharp object (e.g., axe, machete)',
      'Hesitation marks: superficial, parallel, tentative incisions near lethal wound — suggest self-infliction',
    ],
    [
      'Wound dimensions on skin may not reflect blade width due to skin elasticity (Langer lines)',
      'Single-edged blade produces wound with one squared and one pointed end',
      'Defense wounds on hands, forearms, and arms indicate victim awareness and active resistance',
      'Weapon identification from wound alone is limited; range of possibilities should be stated',
    ],
    [
      'Stab wounds require surgical exploration to assess depth and organ involvement',
      'Serial wound measurement should note orientation relative to Langer lines of skin',
      'Hemorrhage control is the primary clinical concern; wound pattern analysis is secondary in living patients',
      'Documentation of wound characteristics before surgical repair is essential for forensic purposes',
    ],
    [
      'Hesitation marks = superficial parallel cuts = suggests suicide attempt',
      'Defense wounds on ulnar forearms and palms = victim tried to ward off attacker',
      'Stab wound depth may exceed blade length due to soft tissue compression',
      'Incised wound = longer than deep; stab wound = deeper than wide',
    ],
  ),

  'blunt-force-trauma': entry(
    'blunt-force-trauma',
    'Blunt Force Trauma Patterns',
    'injury-patterns',
    'Injuries caused by impact with or against blunt objects, encompassing abrasions, contusions, lacerations, and fractures; pattern analysis can identify the causative object.',
    [
      'Abrasion: superficial skin damage from friction/scraping; pattern may match object surface (e.g., tire tread, belt buckle)',
      'Contusion (bruise): hemorrhage into soft tissue from ruptured vessels; color change is unreliable for dating',
      'Laceration: tearing/splitting of tissue from compressive/stretching force; irregular edges, tissue bridging distinguishes from incised wound',
      'Fracture patterns: linear, depressed, comminuted, ring (basilar skull) — each suggests specific mechanism',
    ],
    [
      'Patterned injuries (e.g., belt marks, bite impressions, shoe prints) should be photographed with scale',
      'Bruise color cannot reliably determine age — this outdated concept persists in popular belief',
      'Subdural hematoma from blunt head trauma may present delayed symptoms, complicating timeline',
      'Documentation of all injuries with measurements, photos, and body diagrams is medically and legally essential',
    ],
    [
      'Coup injury occurs at impact site; contrecoup injury occurs opposite to impact (brain contusion)',
      'Epidural hematoma: temporal bone fracture tearing middle meningeal artery — lucid interval classic',
      'Diffuse axonal injury from rotational acceleration — most common cause of persistent vegetative state after trauma',
      'Lacerations have tissue bridging (intact vessels/nerves crossing the wound), unlike incised wounds',
    ],
    [
      'Laceration = tissue bridging, irregular edges; incised wound = clean edges, no bridging',
      'Bruise dating by color is unreliable and should not be used in forensic opinions',
      'Coup-contrecoup: impact site vs opposite side brain contusion from deceleration',
      'Epidural hematoma = lens-shaped (biconvex) on CT, middle meningeal artery',
    ],
  ),

  'asphyxia-types': entry(
    'asphyxia-types',
    'Asphyxia: Types and Mechanisms',
    'death-investigation',
    'Death from oxygen deprivation; classified by mechanism: suffocation, strangulation, chemical asphyxia, or positional asphyxia. Accurate classification is essential for manner determination.',
    [
      'Suffocation: environmental (oxygen-depleted space), smothering (obstruction of nose/mouth), choking (internal airway obstruction)',
      'Strangulation: ligature (cord/rope), hanging (body weight against ligature), manual (hands/arms compressing neck)',
      'Chemical asphyxia: carbon monoxide (cherry-red lividity), cyanide (bitter almond odor), hydrogen sulfide',
      'Positional asphyxia: body position restricts chest expansion; common in restrained, intoxicated, or obese individuals',
    ],
    [
      'Petechial hemorrhages in conjunctivae and face are hallmark findings in strangulation/asphyxia but are not pathognomonic',
      'Hyoid bone fracture in manual strangulation is more common in victims >40 years (ossified hyoid)',
      'Hanging: complete suspension not required; partial hanging (feet touching ground) can be lethal',
      'Autoerotic asphyxia: accidental death during self-strangulation for sexual gratification — scene findings critical',
    ],
    [
      'Foreign body airway obstruction (café coronary) is a common choking cause in elderly and children',
      'CO poisoning: headache, confusion, cherry-red skin; treat with 100% O2 or hyperbaric oxygen',
      'Positional asphyxia risk in prone restraint — relevant to law enforcement custody deaths',
      'Strangulation survivors may develop delayed airway edema and should be observed',
    ],
    [
      'Petechiae above ligature point + cyanosis = classic strangulation findings',
      'Hyoid fracture more common in manual strangulation, especially age >40',
      'Cherry-red lividity = CO poisoning; bitter almond odor = cyanide',
      'Café coronary: sudden death during eating from food bolus airway obstruction',
    ],
  ),

  'drowning-pathology': entry(
    'drowning-pathology',
    'Drowning Pathology',
    'death-investigation',
    'Death from submersion/immersion asphyxia; diagnosis is largely one of exclusion after scene investigation, autopsy, and toxicology rule out other causes.',
    [
      'Freshwater drowning: hypotonic fluid enters alveoli, absorbed rapidly into circulation causing hemodilution and electrolyte imbalance',
      'Saltwater drowning: hypertonic fluid draws plasma into alveoli causing pulmonary edema and hemoconcentration',
      'Autopsy findings: hyperinflated lungs, frothy fluid in airways, pleural effusions, diatoms in tissues (controversial)',
      'Dry drowning: laryngospasm prevents water entry into lungs; accounts for 10–15% of drownings',
    ],
    [
      'Drowning is a diagnosis of exclusion — must rule out trauma, intoxication, cardiac events, seizure',
      'Bodies recovered from water are not automatically drowning victims; submersion may be postmortem',
      'Diatom analysis (presence of microscopic algae in bone marrow/organs) remains controversial as definitive proof',
      'Scene investigation and witness statements are often more valuable than autopsy findings alone',
    ],
    [
      'Submersion time >5–10 minutes in warm water generally associated with poor neurological outcome',
      'Cold water submersion may extend survival window via diving reflex and hypothermic neuroprotection',
      'Secondary drowning: delayed pulmonary edema hours after submersion event — warn families',
      'Risk factors: inability to swim, alcohol use, unsupervised children, seizure disorders',
    ],
    [
      'Drowning is a diagnosis of exclusion — no single pathognomonic autopsy finding',
      'Freshwater = hemodilution; saltwater = hemoconcentration and pulmonary edema',
      'Cold water immersion activates diving reflex — may allow prolonged resuscitation attempts',
      'Diatom test is supportive but not definitive evidence of drowning',
    ],
  ),

  'poisoning-toxicology': entry(
    'poisoning-toxicology',
    'Poisoning and Toxicology',
    'toxicology',
    'Forensic evaluation of poisoning includes toxicological analysis of biological specimens, clinical toxicology correlation, and determination of whether exposure was accidental, suicidal, or homicidal.',
    [
      'Specimen collection: antemortem blood, urine; postmortem blood (femoral preferred), vitreous humor, bile, liver, gastric contents, hair, nails',
      'Postmortem redistribution: drug concentrations in central blood may be artificially elevated due to release from solid organs',
      'Immunoassay screening followed by confirmatory GC-MS or LC-MS/MS for definitive identification and quantification',
      'Common forensic poisons: opioids, ethanol, acetaminophen, carbon monoxide, ethylene glycol, arsenic, cyanide',
    ],
    [
      'Postmortem toxicology results must be interpreted cautiously due to redistribution and decomposition artifacts',
      'Hair analysis can detect chronic drug exposure over months but cannot pinpoint exact timing',
      'Femoral blood is preferred for postmortem analysis — less affected by redistribution than cardiac blood',
      'Chain of custody for specimens is essential; mishandling can render results inadmissible',
    ],
    [
      'Toxicology screens in emergency departments may miss novel synthetic substances (e.g., fentanyl analogs)',
      'Acetaminophen and salicylate levels should be checked in all intentional overdose presentations',
      'Osmolar gap elevation: methanol, ethylene glycol, isopropanol poisoning',
      'Anion gap metabolic acidosis: methanol, ethylene glycol, salicylate, isoniazid (MUDPILES mnemonic)',
    ],
    [
      'Femoral blood preferred postmortem — avoids redistribution artifact from cardiac blood',
      'Postmortem redistribution can falsely elevate drug levels, especially for lipophilic drugs',
      'MUDPILES: Methanol, Uremia, DKA, Propylene glycol, INH/Iron, Lactic acid, Ethylene glycol, Salicylates',
      'Hair analysis = chronic exposure months; urine = days; blood = hours to days',
    ],
  ),

  'burns-classification': entry(
    'burns-classification',
    'Burns Classification',
    'injury-patterns',
    'Forensic classification of thermal injuries by depth, pattern, and distribution; critical for distinguishing accidental, abusive, and self-inflicted burns and for estimating antemortem vs postmortem burns.',
    [
      'Superficial (1st degree): epidermis only, erythema, no blistering (e.g., sunburn)',
      'Partial thickness (2nd degree): epidermis and dermis, blistering, painful; superficial vs deep variants',
      'Full thickness (3rd degree): entire dermis destroyed, painless (nerve destruction), leathery/waxy appearance',
      'Fourth degree: extends to fascia, muscle, or bone; seen in prolonged exposure or high-temperature sources',
    ],
    [
      'Burn pattern analysis: pour patterns, splash patterns, immersion lines (stocking/glove distribution = abuse)',
      'Absence of soot in airways suggests victim was dead before fire — critical for arson homicide investigation',
      'Pugilistic posture (flexion) is a heat artifact, not evidence of defensive posturing or antemortem activity',
      'Ante- vs postmortem burn distinction: vital reaction (erythema, inflammatory infiltrate) indicates antemortem burn',
    ],
    [
      'Rule of Nines for BSA estimation: head 9%, each arm 9%, anterior trunk 18%, posterior trunk 18%, each leg 18%, perineum 1%',
      'Parkland formula for fluid resuscitation: 4 mL × %BSA × kg over first 24 hours',
      'Inhalation injury dramatically increases mortality — assess for singed nasal hairs, carbonaceous sputum, stridor',
      'Circumferential full-thickness burns may require escharotomy to restore circulation or ventilation',
    ],
    [
      'Stocking/glove immersion burn pattern with sharp demarcation = highly suspicious for child abuse',
      'No soot in airways + fire death = likely dead before fire started',
      'Pugilistic posture is a postmortem heat artifact, NOT evidence of being alive during fire',
      'Rule of Nines: quick BSA estimation; Lund-Browder chart more accurate for children',
    ],
  ),

  'child-abuse-recognition': entry(
    'child-abuse-recognition',
    'Child Abuse Recognition (Non-Accidental Injury)',
    'abuse-recognition',
    'Identification of non-accidental injury (NAI) patterns in children through characteristic injury distributions, developmental inconsistency, and clinical red flags.',
    [
      'Bruising in non-mobile infants (those who don\'t cruise): any bruise is suspicious — "those who don\'t cruise rarely bruise"',
      'Patterned injuries: loop marks (cord/belt), parallel linear marks, cigarette burns (circular, uniform)',
      'Fractures concerning for abuse: metaphyseal corner (bucket-handle), posterior rib, spinous process, scapular, sternal',
      'Abusive head trauma (shaken baby): subdural hematoma, retinal hemorrhages, encephalopathy triad',
    ],
    [
      'All U.S. states mandate reporting of suspected child abuse by healthcare providers (mandatory reporters)',
      'Failure to report suspected abuse may result in criminal and civil liability for the physician',
      'Suspicion of abuse — not proof — triggers the reporting obligation; investigation is for CPS/law enforcement',
      'Medical records documenting injuries become critical evidence; thorough documentation is essential',
    ],
    [
      'Injuries inconsistent with developmental stage (e.g., spiral femur fracture in a non-walking infant)',
      'Multiple injuries in various stages of healing suggest repeated abuse',
      'Skeletal survey indicated for all children <2 years with suspected physical abuse',
      'Differential diagnosis: osteogenesis imperfecta, bleeding disorders, Mongolian spots, cultural practices (e.g., coining)',
    ],
    [
      '"Those who don\'t cruise rarely bruise" — any bruising in pre-mobile infant is suspicious',
      'Classic triad of abusive head trauma: subdural hematoma + retinal hemorrhages + encephalopathy',
      'Metaphyseal corner fractures (bucket-handle) are highly specific for non-accidental injury',
      'Posterior rib fractures in infants = squeezing mechanism, highly suspicious for abuse',
    ],
  ),

  'elder-abuse-recognition': entry(
    'elder-abuse-recognition',
    'Elder Abuse Recognition',
    'abuse-recognition',
    'Identification of physical, emotional, sexual, financial abuse and neglect in elderly persons; prevalence estimated at 10% of adults >60 with significant underreporting.',
    [
      'Physical abuse indicators: unexplained bruising (bilateral upper arms from gripping), burns, fractures; injuries inconsistent with stated mechanism',
      'Neglect indicators: malnutrition, dehydration, pressure ulcers, poor hygiene, untreated medical conditions',
      'Financial abuse: sudden changes in financial documents, unpaid bills despite adequate resources, caregiver controlling finances',
      'Psychological indicators: withdrawal, fearfulness around caregiver, depression, anxiety',
    ],
    [
      'Most states mandate reporting of suspected elder abuse by healthcare providers',
      'Adult Protective Services (APS) investigates elder abuse reports in community settings',
      'Long-term care ombudsman programs investigate abuse in institutional settings',
      'Guardianship and conservatorship may be necessary to protect vulnerable adults',
    ],
    [
      'Screen all elderly patients: direct questioning in private, without caregiver present',
      'Elder Abuse Suspicion Index (EASI) and similar validated screening tools are available',
      'Caregiver stress and burnout are major risk factors — addressing these may prevent abuse',
      'Cognitive impairment, social isolation, and functional dependence increase vulnerability',
    ],
    [
      'Bilateral upper arm bruising (grip marks) is a red flag for elder physical abuse',
      'Unexplained pressure ulcers, dehydration, or malnutrition may indicate neglect',
      'Always interview the patient alone — abuser may be the accompanying caregiver',
      'Elder abuse is significantly underreported; prevalence ~10% of adults over 60',
    ],
  ),

  'intimate-partner-violence': entry(
    'intimate-partner-violence',
    'Intimate Partner Violence Screening',
    'abuse-recognition',
    'Systematic screening and clinical recognition of intimate partner violence (IPV), affecting approximately 1 in 4 women and 1 in 10 men in the U.S.; healthcare settings are critical for identification and intervention.',
    [
      'Common injury patterns: central pattern (face, head, neck, chest, abdomen, genitals) rather than extremity injuries',
      'Defensive injuries: bruising of ulnar forearms, palms; injuries in various stages of healing',
      'Strangulation signs: petechiae above clavicles, hoarse voice, dysphagia, subconjunctival hemorrhage',
      'Psychological indicators: depression, PTSD, anxiety, chronic pain, somatic complaints, substance use',
    ],
    [
      'USPSTF recommends screening all women of childbearing age for IPV (Grade B)',
      'Mandatory reporting laws for IPV vary by state — physician should know local requirements',
      'Document injuries with body diagrams, photographs (with consent), and patient\'s own words in quotes',
      'Safety planning is critical; provide resources (National DV Hotline: 1-800-799-7233) and assess lethality',
    ],
    [
      'HITS screening tool: Hurt, Insult, Threaten, Scream — quick validated 4-question screen',
      'Pregnancy increases risk of IPV initiation or escalation',
      'Frequent ED visits, chronic pain, depression, or recurrent vague complaints should prompt screening',
      'Strangulation is the strongest single risk factor for future homicide by an intimate partner',
    ],
    [
      'Central pattern injury distribution (face, neck, trunk) = suggestive of IPV',
      'Strangulation = strongest risk factor for subsequent intimate partner homicide',
      'HITS tool for IPV screening: Hurt, Insult, Threaten, Scream',
      'Document in patient\'s own words; use body diagrams and photographs with consent',
    ],
  ),

  'sexual-assault-examination': entry(
    'sexual-assault-examination',
    'Sexual Assault Forensic Examination (SAFE)',
    'evidence-collection',
    'Standardized forensic examination by a Sexual Assault Nurse Examiner (SANE) or physician, integrating medical care, evidence collection, and trauma-informed support.',
    [
      'Evidence collection kit (rape kit): oral, vaginal/penile, and anal swabs; fingernail scrapings; clothing; pubic hair combings; blood/urine for toxicology',
      'Genital findings: posterior fourchette injuries most common; however, absence of injury does not exclude assault',
      'DNA evidence viable up to 72–120 hours depending on specimen type and site',
      'Colposcopy or toluidine blue dye enhances detection of subtle genital injuries',
    ],
    [
      'Consent for each component of the exam must be obtained separately — patient may decline any portion',
      'Evidence kit chain of custody must be maintained; sealed kits transferred to law enforcement',
      'Reporting is not required for competent adults in most states (patient chooses to report or not)',
      'Many jurisdictions now allow anonymous/non-report evidence kit storage for later retrieval',
    ],
    [
      'Emergency contraception should be offered to all female patients of reproductive age',
      'STI prophylaxis: empiric treatment for gonorrhea, chlamydia, trichomoniasis; HIV PEP if indicated',
      'Pregnancy testing and hepatitis B vaccination should be offered',
      'Trauma-informed care: patient controls the pace, may stop at any time, given choices throughout',
    ],
    [
      'Absence of genital injury does NOT exclude sexual assault — most victims have no visible injuries',
      'Posterior fourchette is the most common site of genital injury in female assault victims',
      'DNA evidence best collected within 72 hours; may be viable up to 120 hours at some sites',
      'Patient consent is required for each exam component — nothing is mandatory',
    ],
  ),

  'chain-of-custody': entry(
    'chain-of-custody',
    'Chain of Custody',
    'legal-procedures',
    'Documented chronological record of evidence handling from collection through analysis and court presentation; any break in the chain may render evidence inadmissible.',
    [
      'Every transfer of evidence must be documented: who collected it, when, from where, and to whom it was transferred',
      'Evidence must be properly packaged, labeled, and sealed with tamper-evident materials',
      'Biological specimens require proper storage (refrigeration, freezing) to prevent degradation',
      'Digital documentation (electronic tracking, barcoding) is replacing paper logs in many jurisdictions',
    ],
    [
      'Any gap or irregularity in the chain of custody may be challenged in court and could exclude evidence',
      'Healthcare providers who collect forensic evidence are part of the chain and may be called to testify',
      'Standard operating procedures for evidence collection should be followed exactly',
      'Evidence collected without proper authorization may be excluded under Fourth Amendment protections',
    ],
    [
      'Blood alcohol specimens must be collected with non-alcohol skin prep to avoid contamination',
      'Sexual assault kit evidence must be handed directly to law enforcement or locked in secure storage',
      'Clothing should be collected in paper (not plastic) bags to prevent mold and DNA degradation',
      'Physicians should document what was collected, how it was stored, and to whom it was released',
    ],
    [
      'Every evidence transfer must be documented with time, person, and method',
      'Paper bags for clothing (prevents mold); sealed containers for fluids',
      'Non-alcohol skin prep for forensic blood alcohol draws',
      'Break in chain of custody = potential inadmissibility of evidence',
    ],
  ),

  'medical-examiner-vs-coroner': entry(
    'medical-examiner-vs-coroner',
    'Medical Examiner vs Coroner Systems',
    'legal-procedures',
    'Two parallel systems for death investigation in the United States: the medical examiner system (appointed physician, usually forensic pathologist) and the coroner system (elected official, may not be a physician).',
    [
      'Medical examiner: appointed, board-certified forensic pathologist; merit-based system providing medical expertise',
      'Coroner: elected official; medical degree not required in most jurisdictions; may be sheriff, funeral director, etc.',
      'Mixed systems exist: some jurisdictions have a medical examiner with coroner authority or vice versa',
      'Both systems investigate deaths that are sudden, unexpected, violent, suspicious, or unattended',
    ],
    [
      'Reportable deaths vary by jurisdiction but generally include: unnatural, violent, suspicious, unattended, in custody, workplace deaths',
      'Medical examiner/coroner has legal authority to order autopsies, subpoena records, and take jurisdiction of the body',
      'Death investigation independence from law enforcement is critical for objectivity',
      'National Association of Medical Examiners (NAME) provides accreditation standards',
    ],
    [
      'Physicians must know their jurisdiction\'s reportable death criteria and reporting procedures',
      'Medical examiner system is considered the gold standard for scientific death investigation',
      'Approximately 2,000 medicolegal death investigation offices serve the U.S.',
      'Forensic pathology fellowship requires completion of anatomic pathology residency plus 1-year fellowship',
    ],
    [
      'Medical examiner = appointed physician (forensic pathologist); coroner = elected (may not be MD)',
      'Medical examiner system is the preferred/gold standard model',
      'Reportable deaths: unnatural, violent, suspicious, unattended, in-custody, workplace',
      'Both systems have authority to order autopsy without family consent',
    ],
  ),

  'expert-witness-testimony': entry(
    'expert-witness-testimony',
    'Expert Witness Testimony',
    'legal-procedures',
    'Physicians may serve as expert witnesses in forensic and medical malpractice cases, providing opinions based on scientific knowledge and clinical experience beyond the understanding of lay jurors.',
    [
      'Fact witness: testifies to what they personally observed or did (e.g., treating physician)',
      'Expert witness: provides opinions based on specialized knowledge, training, or experience',
      'Daubert standard: trial judge acts as gatekeeper to ensure testimony is based on reliable scientific methodology',
      'Frye standard (older): expert opinion must be based on techniques generally accepted in the scientific community',
    ],
    [
      'Daubert criteria: testable theory, peer review, known error rate, standards, general acceptance',
      'Expert witness has a duty to the court (truth) above duty to the retaining party',
      'Compensation must be for time, not outcome — contingency fee arrangements are unethical',
      'AMA and specialty societies have guidelines for ethical expert witness conduct',
    ],
    [
      'Physicians called as fact witnesses should testify only to facts within their direct knowledge',
      'Expert witness work requires staying current with literature and evidence-based practice',
      'Effective testimony: clear, jargon-free language; acknowledge limitations and uncertainties',
      'Deposition (pretrial) and trial testimony are both under oath and carry equal legal weight',
    ],
    [
      'Daubert standard: judge as gatekeeper for scientific reliability of expert testimony',
      'Fact witness = what you saw/did; expert witness = opinions based on expertise',
      'Expert witness duty is to truth/court, not to the hiring party',
      'Contingency-fee expert witness arrangements are unethical',
    ],
  ),

  'forensic-toxicology': entry(
    'forensic-toxicology',
    'Forensic Toxicology',
    'toxicology',
    'Specialized toxicological analysis in medicolegal contexts including postmortem toxicology, workplace drug testing, human performance toxicology (DUI), and drug-facilitated crimes.',
    [
      'Postmortem toxicology: femoral blood, vitreous humor, liver, bile, gastric contents; avoids redistribution artifacts',
      'Human performance toxicology: blood alcohol concentration (BAC) per se limits; drug recognition expert (DRE) evaluation',
      'Drug-facilitated sexual assault: GHB (undetectable after 12 hr in blood), benzodiazepines, zolpidem — early urine collection critical',
      'Workplace testing: DOT-mandated 5-panel (marijuana, cocaine, opioids, amphetamines, PCP); expanded panels available',
    ],
    [
      'BAC of 0.08 g/dL is per se legal limit for driving in all U.S. states',
      'Retrograde extrapolation of BAC is commonly challenged in court and requires careful assumptions',
      'Medical Review Officer (MRO) reviews workplace test results before reporting to ensure legitimate medical explanations',
      'Specimen validity testing detects adulterated or substituted urine samples',
    ],
    [
      'Ethanol pharmacokinetics: zero-order elimination ~15–20 mg/dL/hr in most individuals',
      'GHB has extremely short half-life — urge early specimen collection in suspected drug-facilitated assault',
      'Fentanyl and analogs dominate current opioid overdose deaths; may require specific immunoassay',
      'Point-of-care drug screens have significant false-positive and false-negative rates; confirm with GC-MS/LC-MS',
    ],
    [
      'BAC legal limit = 0.08 g/dL; ethanol eliminated ~15–20 mg/dL/hr (zero-order kinetics)',
      'GHB undetectable in blood after ~12 hours — early collection essential',
      'Femoral blood is gold standard for postmortem toxicology (avoids redistribution)',
      'Point-of-care drug screens require confirmation by GC-MS or LC-MS/MS',
    ],
  ),

  'dna-evidence': entry(
    'dna-evidence',
    'DNA Evidence',
    'evidence-collection',
    'Collection, analysis, and interpretation of DNA evidence in forensic investigations; includes STR profiling, mitochondrial DNA, touch DNA, and database comparisons (CODIS).',
    [
      'STR (short tandem repeat) profiling: standard forensic DNA method; 20+ loci analyzed for unique identification',
      'Touch DNA: trace amounts from skin cells on handled objects; low copy number increases contamination risk',
      'Mitochondrial DNA: maternally inherited; useful for degraded samples, hair shafts, bone; lower discriminating power',
      'Y-STR analysis: traces paternal lineage; useful in sexual assault cases with male/female mixtures',
    ],
    [
      'CODIS (Combined DNA Index System): FBI-maintained national database linking DNA profiles from crime scenes, offenders, and missing persons',
      'DNA match probability expressed as random match probability (e.g., 1 in 10 billion unrelated individuals)',
      'Secondary/tertiary transfer: DNA deposited indirectly — presence at scene does not prove direct contact',
      'Familial DNA searching: identifies partial matches suggesting a relative — raises privacy concerns',
    ],
    [
      'Buccal swab is the standard for reference DNA collection (non-invasive, reliable)',
      'Proper evidence handling: avoid touching evidence; change gloves between samples; use sterile swabs',
      'Rapid DNA instruments can generate profiles in <2 hours for booking station use',
      'Forensic genealogy (genetic genealogy) has solved cold cases but raises ethical and privacy debates',
    ],
    [
      'STR profiling = standard forensic DNA method; 20+ loci for unique identification',
      'CODIS = national DNA database maintained by FBI',
      'Touch DNA = trace skin cells, high contamination risk, presence ≠ proof of direct contact',
      'Mitochondrial DNA useful for degraded samples but has lower discriminating power than nuclear DNA',
    ],
  ),

  'wound-age-estimation': entry(
    'wound-age-estimation',
    'Wound Age Estimation',
    'injury-patterns',
    'Histological and gross assessment of wound healing stages to estimate injury timing; important in abuse cases and determining sequence of events, but subject to significant biological variability.',
    [
      'Immediate (0–1 hr): hemorrhage, minimal cellular response',
      'Early inflammatory (1–24 hr): neutrophil infiltration, fibrin deposition, early edema',
      'Late inflammatory (1–3 days): macrophage predominance, granulation tissue begins',
      'Proliferative (3–14 days): fibroblasts, capillary ingrowth, collagen deposition, re-epithelialization',
    ],
    [
      'Wound age estimation is inherently imprecise and should be given as a range, not an exact time',
      'Histological assessment requires proper tissue sampling and processing',
      'Expert testimony should acknowledge the limitations of wound dating',
      'Gross bruise color dating has been discredited — histology is more reliable but still imprecise',
    ],
    [
      'Wound healing is affected by age, nutrition, comorbidities (diabetes), medications (steroids), and location',
      'Multiple wounds in different healing stages suggest injuries at different times — key finding in abuse',
      'Immunohistochemistry (fibronectin, collagen III, CD15, CD68) can refine wound age estimates',
      'Bone fracture healing follows predictable radiographic stages, aiding in temporal estimation',
    ],
    [
      'Neutrophils appear first (hours), then macrophages (days), then fibroblasts (days to weeks)',
      'Multiple wounds in different healing stages = strong indicator of repeated/ongoing abuse',
      'Bruise color dating is unreliable — do NOT use for forensic opinions',
      'Wound healing timeline is affected by age, nutrition, diabetes, steroids, infection',
    ],
  ),

  'bite-mark-analysis': entry(
    'bite-mark-analysis',
    'Bite Mark Analysis',
    'evidence-collection',
    'Forensic evaluation of patterned injuries caused by teeth; increasingly controversial due to high error rates and lack of scientific validation for individualization.',
    [
      'Human bite marks: oval/elliptical contusion with two opposing U-shaped arches; may show individual tooth impressions',
      'Animal bite marks: deeper penetration, tearing; dog bites show wider arch spacing',
      'Documentation: photograph with and without scale (ABFO No. 2 scale), at 90-degree angle, in color',
      'Swab for DNA: salivary DNA on bite mark may provide more reliable identification than pattern matching',
    ],
    [
      'Bite mark comparison for identification is scientifically controversial and has led to wrongful convictions',
      'No scientific basis that bite marks can be reliably matched to a specific individual',
      'Multiple forensic science reviews (NAS 2009, PCAST 2016) have criticized bite mark analysis',
      'Some jurisdictions no longer admit bite mark comparison evidence',
    ],
    [
      'Bite marks in child abuse: often on cheeks, arms, buttocks; adult dental arch is larger than child\'s',
      'Bite marks should be swabbed for DNA before any other manipulation',
      'Human vs animal bite distinction is clinically important for wound management and antibiotic prophylaxis',
      'Self-inflicted bites (in seizures or self-harm) typically occur on accessible areas (tongue, lips, hands)',
    ],
    [
      'Bite mark individualization is scientifically unreliable — has caused wrongful convictions',
      'DNA from saliva on bite marks is more reliable than pattern matching for identification',
      'NAS 2009 and PCAST 2016 reports criticized bite mark analysis methodology',
      'Always photograph with ABFO No. 2 scale at 90 degrees before swabbing for DNA',
    ],
  ),

  'traffic-accident-injuries': entry(
    'traffic-accident-injuries',
    'Traffic Accident Injuries',
    'injury-patterns',
    'Pattern recognition of injuries from motor vehicle collisions based on seating position, restraint use, impact direction, and vehicle type; aids in accident reconstruction and occupant identification.',
    [
      'Driver vs passenger: steering wheel injuries (chest, face) indicate driver; dashboard knee/femur fractures suggest front passenger',
      'Seatbelt sign: diagonal bruise across chest (clavicle to opposite hip) indicates lap-shoulder belt use; may cause mesenteric/bowel injury',
      'Pedestrian triad: bumper impact (tibial/fibular fracture) → hood impact (trunk/hip injury) → ground impact (head/contralateral injuries)',
      'Ejection injuries: dramatically increased mortality; head and spinal injuries predominate',
    ],
    [
      'Seatbelt use determination affects liability and insurance claims',
      'Airbag deployment pattern corroborates impact direction and crash severity',
      'Hit-and-run cases: vehicle paint transfers, glass fragments, and tire marks on victim help identify vehicle',
      'Toxicology of deceased driver is standard practice for accident reconstruction',
    ],
    [
      'Aortic transection from rapid deceleration — classic at aortic isthmus (ligamentum arteriosum)',
      'Chance fracture (horizontal fracture through vertebral body) = lap belt injury, check for abdominal injuries',
      'Cervical spine injury patterns: hyperflexion (anterior compression), hyperextension (hangman\'s fracture), axial loading (Jefferson fracture)',
      'Motorcycle injuries: predominantly lower extremity fractures, traumatic brain injury if unhelmeted',
    ],
    [
      'Pedestrian triad: bumper (leg) → hood (trunk) → ground (head) injuries',
      'Seatbelt sign = diagonal chest bruise; check for underlying mesenteric/bowel injury',
      'Aortic transection at isthmus = classic rapid deceleration injury',
      'Chance fracture = horizontal vertebral body fracture from lap belt, associated with bowel injury',
    ],
  ),

  'occupational-injury-patterns': entry(
    'occupational-injury-patterns',
    'Occupational Injury Patterns',
    'injury-patterns',
    'Recognition of work-related injury and illness patterns for forensic documentation, workers\' compensation evaluation, and occupational disease surveillance.',
    [
      'Repetitive strain injuries: carpal tunnel syndrome, rotator cuff tendinopathy, epicondylitis — require occupational exposure history',
      'Crush injuries: industrial machinery, construction collapses; rhabdomyolysis risk with large muscle mass involvement',
      'Chemical exposures: acute (inhalation, burns) and chronic (mesothelioma from asbestos, silicosis, lead poisoning)',
      'Fall-from-height injuries: bilateral calcaneal fractures → vertebral compression fractures → base of skull fractures',
    ],
    [
      'Workers\' compensation is a no-fault system — employee does not need to prove employer negligence',
      'Occupational disease causation requires establishing exposure history and temporal relationship',
      'OSHA mandates employer reporting of workplace fatalities (within 8 hr) and hospitalizations (within 24 hr)',
      'Independent medical examination (IME) assesses injury causation, treatment necessity, and disability rating',
    ],
    [
      'Always ask about occupation in history: "What kind of work do you do? What are you exposed to?"',
      'Mesothelioma has 20–40 year latency from asbestos exposure — obtain lifetime occupational history',
      'Don Quixote sign: bilateral calcaneal fractures from fall landing on feet — always image the spine',
      'Noise-induced hearing loss: bilateral, symmetric, 4 kHz dip on audiogram — most common occupational sensory deficit',
    ],
    [
      'Fall-from-height pattern: calcaneal fx → lumbar burst fx → basilar skull fx',
      'Mesothelioma latency 20–40 years; almost exclusively from asbestos exposure',
      'Workers\' compensation is a no-fault system — no need to prove employer negligence',
      'Noise-induced hearing loss: bilateral symmetric 4 kHz audiometric dip',
    ],
  ),

  'organ-donation-brain-death': entry(
    'organ-donation-brain-death',
    'Organ Donation Criteria: Brain Death',
    'death-investigation',
    'Brain death is the irreversible cessation of all functions of the entire brain, including the brainstem; it constitutes legal death in all U.S. states and is the basis for deceased organ donation.',
    [
      'Prerequisites: known etiology sufficient to cause brain death, exclusion of confounders (hypothermia <36°C, drugs, metabolic derangement)',
      'Clinical exam: coma (no response to stimulation), absent brainstem reflexes (pupillary, corneal, oculocephalic, oculovestibular, gag, cough), no respiratory drive',
      'Apnea test: disconnect ventilator, observe for respiratory effort with PaCO2 rising to ≥60 mmHg (or 20 mmHg above baseline)',
      'Ancillary tests (if clinical exam cannot be completed): cerebral angiography, EEG, nuclear brain flow scan, transcranial Doppler',
    ],
    [
      'Brain death = legal death in all U.S. states (Uniform Determination of Death Act)',
      'Many states require two physician examinations separated by a defined observation period',
      'Time of death is the time brain death is declared, not the time support is withdrawn',
      'Organ Procurement Organization (OPO) must be notified of all deaths or imminent deaths per federal law',
    ],
    [
      'Donation after brain death (DBD) allows organ recovery while circulation is maintained by ventilator',
      'Donation after circulatory death (DCD) is an alternative when brain death criteria are not met',
      'Organ allocation managed by UNOS (United Network for Organ Sharing) based on standardized criteria',
      'Physician declaring death must be independent of transplant team — separation required to avoid conflicts',
    ],
    [
      'Brain death prerequisites: known cause, exclude hypothermia (<36°C), drugs, metabolic derangement',
      'Apnea test: PaCO2 must rise to ≥60 mmHg with no respiratory effort',
      'Time of death = time of brain death declaration, NOT time of ventilator withdrawal',
      'OPO notification is federally mandated for all deaths or imminent deaths',
    ],
  ),

  // ── Additional Topics ──────────────────────────────────────────────────

  'manner-of-death-suicide': entry(
    'manner-of-death-suicide',
    'Suicide Investigation',
    'death-investigation',
    'Medicolegal investigation of suspected suicide incorporating scene findings, autopsy results, psychological autopsy, and exclusion of homicide disguised as suicide.',
    [
      'Common methods: firearm (most lethal), hanging, poisoning/overdose, jumping, sharp force (wrist cutting)',
      'Scene findings: suicide note (present in ~25–30%), locked-room scenario, known psychiatric history, prior attempts',
      'Firearm suicide: typically contact wound to head (temple, mouth, submental); dominant hand holding weapon',
      'Hesitation marks in sharp force suicide: multiple superficial, tentative cuts near the fatal wound',
    ],
    [
      'Psychological autopsy: structured interview of decedent\'s contacts to reconstruct mental state before death',
      'Equivocal death analysis: when manner is unclear between accident and suicide (e.g., single-car crash, overdose)',
      'Life insurance policies often have a suicide exclusion period (typically 2 years from policy inception)',
      'Suicide determination must be supported by positive evidence of intent, not merely exclusion of other manners',
    ],
    [
      'Risk factors: prior attempt (strongest predictor), psychiatric illness, substance abuse, chronic pain, social isolation',
      'Means restriction counseling reduces suicide rates (e.g., secure firearms, limit medication access)',
      'Columbia Suicide Severity Rating Scale (C-SSRS) standardizes suicidal ideation assessment',
      'Postvention: supporting survivors of suicide loss, including healthcare team debriefing',
    ],
    [
      'Prior suicide attempt is the strongest predictor of completed suicide',
      'Suicide note present in only ~25–30% of cases',
      'Hesitation marks + contact wound + dominant hand + scene context = consistent with suicide',
      'Means restriction (firearms, medications) is an evidence-based suicide prevention strategy',
    ],
  ),

  'decomposition-taphonomy': entry(
    'decomposition-taphonomy',
    'Decomposition and Taphonomy',
    'death-investigation',
    'Study of postmortem changes from autolysis through skeletonization; taphonomy (study of what happens to remains after death) encompasses environmental effects, animal activity, and burial changes.',
    [
      'Fresh stage (0–2 days): pallor, algor/rigor/livor mortis, autolysis begins',
      'Bloat stage (2–6 days): bacterial gas production, abdominal distension, skin slippage, marbling of vessels',
      'Active decay (6–10 days): purging of fluids, soft tissue liquefaction, insect mass activity',
      'Advanced decay/skeletonization: weeks to months depending on environment; adipocere formation in moist environments',
    ],
    [
      'Environmental factors dramatically affect decomposition rate: temperature, moisture, insect access, burial depth',
      'Casper\'s rule: decomposition in air 8× faster than in water, 2× faster than in soil (1:2:8 ratio)',
      'Mummification occurs in hot/dry or well-ventilated conditions; preserves external features',
      'Adipocere (grave wax) forms in moist, anaerobic conditions; preserves body contour but obscures injury',
    ],
    [
      'Forensic entomology: insect succession and larval development estimate PMI in days to weeks',
      'Forensic anthropology: skeletal analysis for identification, trauma assessment, and biological profile',
      'Decomposition stages are guidelines — actual timeline varies enormously with conditions',
      'Scavenger activity (animal predation) can mimic or obscure antemortem injuries',
    ],
    [
      'Casper\'s rule: air:water:soil decomposition ratio = 8:2:1',
      'Bloat stage: bacterial gas, green discoloration, skin slippage (day 2–6)',
      'Adipocere = grave wax; moist anaerobic conditions; preserves body contour',
      'Insect evidence (forensic entomology) useful for PMI estimation over days–weeks',
    ],
  ),

  'carbon-monoxide-poisoning': entry(
    'carbon-monoxide-poisoning',
    'Carbon Monoxide Poisoning',
    'toxicology',
    'Forensic and clinical evaluation of CO exposure: the most common cause of fatal poisoning in the U.S.; CO binds hemoglobin with 240× the affinity of O2, causing tissue hypoxia.',
    [
      'Cherry-red lividity and cherry-pink tissues at autopsy are characteristic but not always present',
      'Carboxyhemoglobin (COHb) levels: >10% symptomatic, >50–60% typically fatal; nonsmokers baseline <3%, smokers up to 10%',
      'Sources: house fires, automobile exhaust, furnaces, generators, charcoal grills in enclosed spaces',
      'Co-exposure to cyanide common in fire victims (combustion of synthetics)',
    ],
    [
      'CO poisoning manner: accident (most common — faulty heating, enclosed spaces), suicide (vehicle exhaust, charcoal), homicide (rare)',
      'Scene investigation must document CO source, ventilation, and detector presence',
      'Multiple victims in same location strongly suggests environmental CO exposure',
      'Delayed neurological sequelae (DNS) may develop days to weeks after exposure',
    ],
    [
      'Standard pulse oximetry reads COHb as oxyhemoglobin — falsely normal SpO2 in CO poisoning',
      'Treatment: 100% O2 reduces COHb half-life from ~5 hr (room air) to ~90 min; hyperbaric O2 for severe cases',
      'Headache, nausea, confusion in multiple household members = classic CO poisoning presentation',
      'Fetal hemoglobin has even higher CO affinity — pregnant women and fetuses at increased risk',
    ],
    [
      'Pulse oximetry is unreliable in CO poisoning — reads COHb as oxyHb (falsely normal)',
      'CO-Hb binding affinity 240× greater than O2; half-life 5 hr room air → 90 min on 100% O2',
      'Cherry-red lividity = classic but not always present; confirm with COHb level',
      'Multiple victims in same location + headache/confusion = think CO poisoning',
    ],
  ),

  'ethanol-pharmacology-forensic': entry(
    'ethanol-pharmacology-forensic',
    'Ethanol: Forensic Pharmacology',
    'toxicology',
    'Forensic evaluation of ethanol including pharmacokinetics, BAC interpretation, tolerance effects, and postmortem ethanol considerations.',
    [
      'Absorption: rapid from stomach (20%) and small intestine (80%); peak BAC 30–90 min after last drink',
      'Elimination: zero-order kinetics, ~15–20 mg/dL/hr (average); range 10–25 mg/dL/hr depending on tolerance',
      'Widmark formula: estimates BAC from drinks consumed and body weight (or retrograde extrapolation)',
      'Postmortem ethanol production: microbial fermentation of glucose can produce ethanol in decomposed bodies',
    ],
    [
      'Per se BAC limits: 0.08 g/dL (general driving), 0.04 (commercial vehicle), 0.00–0.02 (underage)',
      'Retrograde extrapolation to estimate BAC at time of incident is legally accepted but scientifically debated',
      'Hospital BAC (serum/plasma) is ~15% higher than whole blood BAC used in law enforcement',
      'Postmortem ethanol must be interpreted with vitreous humor and urine levels to confirm antemortem ingestion',
    ],
    [
      'Tolerance: chronic drinkers may appear functional at BAC levels that would incapacitate naive drinkers',
      'Acute ethanol withdrawal: tremor (6–24 hr), seizures (12–48 hr), delirium tremens (48–96 hr)',
      'Congener analysis can differentiate beverage types but rarely changes forensic conclusions',
      'Ethanol interacts with CNS depressants synergistically — combined toxicity at lower individual levels',
    ],
    [
      'Ethanol elimination = zero-order, ~15–20 mg/dL/hr',
      'Hospital serum BAC is ~15% higher than forensic whole blood BAC',
      'Postmortem ethanol production (neoformation) occurs in decomposed bodies — check vitreous for confirmation',
      'Widmark formula estimates BAC from drinks consumed, body weight, and time elapsed',
    ],
  ),

  'opioid-overdose-forensics': entry(
    'opioid-overdose-forensics',
    'Opioid Overdose Forensics',
    'toxicology',
    'Forensic investigation of opioid-related deaths including scene findings, autopsy features, and toxicological interpretation in the context of the ongoing opioid epidemic.',
    [
      'Scene findings: drug paraphernalia (needles, spoons, tourniquets), pill bottles, fentanyl patches/powder',
      'Autopsy findings: pulmonary edema (heavy, congested lungs), needle track marks, nasal septal perforation (insufflation)',
      'Toxicology: quantitative blood opioid levels; fentanyl analogs may not appear on standard immunoassays',
      'Manner determination: accidental (most common), suicide, homicide (e.g., drug dealer supplying lethal product)',
    ],
    [
      'Fentanyl and analogs now the leading cause of opioid overdose death in the U.S.',
      'Drug-induced homicide laws: some jurisdictions prosecute suppliers of drugs causing fatal overdose',
      'Scene evidence of naloxone (Narcan) administration suggests attempted resuscitation',
      'Postmortem fentanyl redistribution can significantly alter blood concentrations',
    ],
    [
      'Naloxone reversal: short half-life (30–90 min) may necessitate repeated dosing or infusion for long-acting opioids',
      'Opioid triad: respiratory depression, miosis, CNS depression — but pupil dilation occurs postmortem',
      'Harm reduction: naloxone distribution, supervised injection sites, fentanyl test strips reduce mortality',
      'Prescription Drug Monitoring Programs (PDMPs) track controlled substance prescriptions to reduce diversion',
    ],
    [
      'Fentanyl and analogs = leading cause of opioid overdose deaths',
      'Opioid triad: respiratory depression, miosis, altered mental status',
      'Naloxone half-life (30–90 min) shorter than most opioids — re-sedation risk',
      'Standard immunoassays may miss fentanyl analogs — specific testing required',
    ],
  ),

  'forensic-photography': entry(
    'forensic-photography',
    'Forensic Photography and Documentation',
    'evidence-collection',
    'Systematic photographic documentation of injuries, evidence, and scenes for medical, legal, and investigative purposes; follows standardized protocols to ensure admissibility.',
    [
      'Three-photo rule: overview (context/orientation), mid-range (injury in anatomical context), close-up (detail with scale)',
      'ABFO No. 2 scale (right-angle ruler) placed adjacent to injury in close-up photographs',
      'Color calibration card should be included to ensure accurate color reproduction',
      'Both pre- and post-cleaning photographs should be taken when possible',
    ],
    [
      'Photographs are admissible evidence — must accurately represent what was seen without manipulation',
      'Consent for medical photography should be obtained (except in medicolegal cases where documentation is mandatory)',
      'Images become part of the medical record and may be discoverable in litigation',
      'Digital images should be stored in original format; metadata (date, time, device) should be preserved',
    ],
    [
      'Body diagrams complement photographs by providing standardized injury mapping',
      'Ultraviolet photography can reveal bruising not visible under normal light (subcutaneous hemorrhage)',
      'Follow-up photography at 24–48 hours may reveal injuries that develop after initial examination',
      'Standardized injury documentation improves communication between medical and legal professionals',
    ],
    [
      'Three-photo rule: overview → mid-range → close-up with ABFO scale',
      'UV photography reveals subcutaneous bruising not visible under white light',
      'Re-photograph injuries at 24–48 hours — bruises often become more apparent',
      'Digital forensic images: preserve original format and metadata, no cropping/editing',
    ],
  ),

  'forensic-odontology': entry(
    'forensic-odontology',
    'Forensic Odontology (Dental Identification)',
    'evidence-collection',
    'Use of dental records and oral findings for human identification; teeth are the most durable structures in the body and often survive conditions that destroy other identifying features.',
    [
      'Dental comparison: antemortem dental records (radiographs, charts) compared with postmortem findings',
      'Teeth survive extreme conditions: fire, decomposition, submersion — often last identifiable structures',
      'Age estimation from dental development: tooth eruption patterns in children, third molar development in adolescents',
      'Adult age estimation: tooth wear, root translucency, cementum annulation (less precise)',
    ],
    [
      'Dental identification provides positive identification admissible in court when sufficient concordant features match',
      'Mass disaster victim identification (DVI) relies heavily on dental records alongside DNA and fingerprints',
      'Dental records must be accurately maintained as they may serve as identification records',
      'Standards set by American Board of Forensic Odontology for comparison methodology',
    ],
    [
      'Dental identification is faster and less expensive than DNA analysis — preferred when antemortem records exist',
      'Edentulous (toothless) individuals require alternative identification methods',
      'Dental prostheses (dentures, implants) may have unique serial numbers or markings',
      'Palatal rugae pattern is individually unique and can aid identification when teeth are absent',
    ],
    [
      'Teeth are the most durable human structures — often the last identifiable feature',
      'Dental comparison = fast, reliable positive ID when antemortem records available',
      'Mass disaster identification triad: dental records + DNA + fingerprints',
      'Dental age estimation useful for children (eruption patterns) and adolescents (third molars)',
    ],
  ),
};

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

/**
 * Full-text search across all forensic medicine entries.
 */
export function searchForensicEntries(query: string): ForensicMedicineEntry[] {
  const lower = query.toLowerCase();
  return Object.values(FORENSIC_MEDICINE_ENTRIES).filter((e) => {
    const searchable = [
      e.name,
      e.description,
      ...e.keyFindings,
      ...e.legalConsiderations,
      ...e.clinicalRelevance,
      ...e.examHighYield,
    ].join(' ').toLowerCase();
    return searchable.includes(lower);
  });
}

/**
 * Filter forensic entries by one or more categories.
 */
export function filterByForensicCategory(
  categories: ForensicCategory | ForensicCategory[],
): ForensicMedicineEntry[] {
  const cats = Array.isArray(categories) ? categories : [categories];
  return Object.values(FORENSIC_MEDICINE_ENTRIES).filter((e) =>
    cats.includes(e.category),
  );
}

/**
 * Retrieve a single entry by its ID. Returns undefined if not found.
 */
export function getForensicEntryById(id: string): ForensicMedicineEntry | undefined {
  return FORENSIC_MEDICINE_ENTRIES[id];
}

/**
 * Get all unique categories present in the database.
 */
export function getAllForensicCategories(): ForensicCategory[] {
  const cats = new Set<ForensicCategory>();
  for (const e of Object.values(FORENSIC_MEDICINE_ENTRIES)) {
    cats.add(e.category);
  }
  return [...cats];
}

/**
 * Get the total count of entries, optionally filtered by category.
 */
export function getForensicEntryCount(category?: ForensicCategory): number {
  if (!category) return Object.keys(FORENSIC_MEDICINE_ENTRIES).length;
  return Object.values(FORENSIC_MEDICINE_ENTRIES).filter(
    (e) => e.category === category,
  ).length;
}
