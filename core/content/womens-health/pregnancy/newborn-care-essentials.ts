/**
 * Newborn Care Essentials
 *
 * Educational content covering newborn care basics, feeding schedules,
 * sleep safety, umbilical cord care, jaundice recognition, and developmental
 * milestones in the first weeks of life.
 */

import { EducationalContent } from '../../types';

export const newbornCareEssentialsContent: EducationalContent = {
  id: 'topic-newborn-care-essentials',
  type: 'topic',
  name: 'Newborn Care Essentials',
  nameEs: 'Cuidados Esenciales del Recien Nacido',
  alternateNames: ['Neonatal care basics', 'Baby care fundamentals', 'Infant care guide'],

  levels: {
    1: {
      level: 1,
      summary:
        'Newborn care means keeping your baby safe, fed, clean, and comfortable during the first weeks of life. Learning a few basics gives you confidence and helps your baby thrive.',
      explanation: `Bringing a new baby home can feel overwhelming, but the most important things are simple: feed your baby, keep them warm and clean, help them sleep safely, and watch for signs that something might be wrong.

**Feeding Your Newborn**
- Babies need to eat 8-12 times per day (about every 2-3 hours)
- Breast milk or formula provides all the nutrition a newborn needs
- Watch for hunger cues: rooting, sucking on hands, lip smacking
- Crying is a late hunger sign; try to feed before the baby gets too upset
- Burp your baby during and after each feeding

**Safe Sleep**
- Always place your baby on their back to sleep
- Use a firm, flat mattress with a fitted sheet
- Keep blankets, pillows, stuffed animals, and bumpers out of the crib
- Your baby should sleep in your room but not in your bed for the first 6 months
- Keep the room at a comfortable temperature; dress baby in one layer more than you would wear
- Pacifiers at sleep time can reduce the risk of SIDS

**Umbilical Cord Care**
- Keep the cord stump clean and dry
- Fold the diaper below the stump so it stays exposed to air
- It will fall off on its own in 1-3 weeks
- Call your doctor if you see redness, swelling, pus, or a bad smell around the stump

**Diaper Care**
- Change diapers every 2-3 hours or whenever the diaper is wet or dirty
- Clean the diaper area with warm water or gentle wipes
- Apply barrier cream if you see redness
- Newborns have 6 or more wet diapers per day once milk comes in

**Bathing Your Baby**
- Give sponge baths until the cord stump falls off
- After that, a gentle bath 2-3 times per week is enough
- Use warm (not hot) water and mild, fragrance-free soap
- Never leave your baby alone in or near water

**When to Call the Doctor**
- Fever of 100.4 F (38 C) or higher in a baby under 3 months (this is an emergency)
- Not eating or refusing to feed
- Yellow skin or eyes (jaundice) that is getting worse
- Fewer than 6 wet diapers per day after day 4
- Difficulty breathing, fast breathing, or grunting
- Unusual sleepiness or hard to wake for feedings
- Redness, swelling, or foul smell at the umbilical cord site

**Bonding with Your Baby**
- Skin-to-skin contact helps your baby feel safe and warm
- Talk, sing, and read to your baby from the first day
- Respond to your baby's cries; you cannot spoil a newborn
- Make eye contact during feedings`,
      keyTerms: [
        { term: 'SIDS', definition: 'Sudden Infant Death Syndrome; the unexplained death of a seemingly healthy baby during sleep, usually under 1 year old' },
        { term: 'jaundice', definition: 'A yellowing of the skin and eyes caused by a buildup of bilirubin; common in newborns but needs monitoring' },
        { term: 'umbilical cord stump', definition: 'The small piece of the cord left on your baby\'s belly after birth; it dries up and falls off in 1-3 weeks' },
        { term: 'rooting reflex', definition: 'When a baby turns their head and opens their mouth toward touch on the cheek, looking for the breast or bottle' },
        { term: 'meconium', definition: 'The first dark, sticky poop a newborn passes in the first day or two of life' },
        { term: 'fontanelle', definition: 'The soft spots on a baby\'s head where the skull bones have not yet grown together' },
      ],
      analogies: [
        'A newborn\'s stomach is about the size of a cherry on day 1 and grows to the size of an egg by day 10. That is why they need to eat so often in small amounts.',
        'Think of safe sleep like an empty crib recipe: baby on back, firm mattress, fitted sheet, nothing else. Simple and lifesaving.',
        'The umbilical cord stump is like a scab. Leave it alone, keep it clean and dry, and it will fall off on its own when it is ready.',
      ],
      patientCounselingPoints: [
        'A fever of 100.4 F or higher in a baby younger than 3 months is always an emergency. Go to the emergency room right away.',
        'It is normal for newborns to lose up to 7-10% of their birth weight in the first few days. They should regain it by 10-14 days old.',
        'You cannot hold your baby too much. Responding to their cries builds trust and helps brain development.',
        'Always put your baby on their back to sleep, even for naps. This is the single most important thing you can do to prevent SIDS.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Newborn care encompasses thermoregulation, feeding optimization, safe sleep practices, common neonatal conditions like jaundice and diaper dermatitis, and recognizing red flags requiring urgent medical evaluation.',
      explanation: `**Normal Newborn Assessment**

| Parameter | Normal Values |
|-----------|--------------|
| Weight | 2,500-4,000 g (5.5-8.8 lbs); lose up to 7-10% by day 3-5, regain by day 10-14 |
| Heart rate | 120-160 bpm |
| Respiratory rate | 30-60 breaths/min |
| Temperature | 97.7-99.5 F (36.5-37.5 C) axillary |
| Head circumference | 33-35 cm at birth |

**Newborn Reflexes**
| Reflex | Description | Disappears |
|--------|-------------|-----------|
| Moro (startle) | Arms extend then flex when startled | 3-6 months |
| Rooting | Turns toward cheek stimulation | 3-4 months |
| Sucking | Sucks when palate stimulated | Voluntary by 2 months |
| Grasp (palmar) | Grips objects placed in palm | 5-6 months |
| Stepping | Makes stepping movements when held upright | 2 months |
| Babinski | Toes fan out when sole stroked | 12-24 months |

**Thermoregulation**
- Newborns lose heat rapidly through their large surface-area-to-volume ratio
- Four mechanisms of heat loss: evaporation, conduction, convection, radiation
- Prevention: dry immediately after birth, skin-to-skin, hat, warm environment
- Hypothermia risk increases morbidity; target temperature 36.5-37.5 C
- Overheating is also dangerous and is a risk factor for SIDS

**Neonatal Jaundice**
| Type | Timing | Cause | Management |
|------|--------|-------|-----------|
| Physiological | Day 2-3; peaks day 3-5 | Immature liver; increased RBC breakdown | Monitor; usually resolves by 1-2 weeks |
| Breastfeeding jaundice | Days 3-5 | Inadequate milk intake; dehydration | Increase feeding frequency; lactation support |
| Breast milk jaundice | After day 5-7; may last weeks | Substances in breast milk inhibit conjugation | Continue breastfeeding; monitor levels |
| Pathological | Within 24 hours of birth | Hemolytic disease (Rh, ABO); infection; metabolic | Urgent evaluation; phototherapy; possible exchange transfusion |

**Bilirubin Monitoring:**
- Transcutaneous bilirubinometry (TcB) for screening
- Serum total bilirubin (TSB) for confirmation
- Plot on Bhutani nomogram (hour-specific risk zones)
- Phototherapy thresholds depend on gestational age, age in hours, and risk factors

**Safe Sleep Guidelines (AAP)**
- Supine position for every sleep
- Firm, flat surface meeting CPSC safety standards
- Room sharing without bed sharing for at least 6 months
- No soft bedding, bumpers, wedges, or positioners
- Offer pacifier at nap and bedtime (after breastfeeding established)
- Avoid tobacco smoke exposure, alcohol, and illicit drug use
- Avoid overheating; no hats indoors
- Tummy time when awake and supervised to prevent flat head

**Common Newborn Skin Conditions**
| Condition | Description | Management |
|-----------|-------------|-----------|
| Erythema toxicum | Red blotches with yellow-white bumps; appears days 1-3 | Normal; no treatment |
| Milia | Tiny white bumps on nose and cheeks | Normal; resolve spontaneously |
| Mongolian spots | Blue-gray patches on lower back/buttocks | Normal; fade over years; document |
| Cradle cap | Yellowish, scaly patches on scalp | Gentle washing; oil and soft brush |
| Diaper dermatitis | Red, irritated skin in diaper area | Frequent changes; barrier cream; air exposure |

**Newborn Screening**
- Blood spot test (heel prick) at 24-48 hours: screens for metabolic, endocrine, hemoglobin, and other disorders
- Hearing screen before discharge (OAE or ABR)
- Pulse oximetry screen for critical congenital heart defects (CCHD)
- Specific conditions vary by state/country`,
      keyTerms: [
        { term: 'Bhutani nomogram', definition: 'A chart that plots total serum bilirubin levels against age in hours to determine risk zone and need for phototherapy' },
        { term: 'phototherapy', definition: 'Treatment for neonatal jaundice using blue-spectrum light to convert bilirubin in the skin into a form that can be excreted without liver processing' },
        { term: 'transcutaneous bilirubinometry', definition: 'A noninvasive screening method that estimates bilirubin levels by measuring light reflected from the skin' },
        { term: 'erythema toxicum', definition: 'A common, harmless newborn rash appearing as red blotches with yellow-white papules; affects up to 50% of newborns' },
        { term: 'Moro reflex', definition: 'The startle reflex in newborns; arms extend outward then flex inward when the baby feels a sudden change in support; normal and disappears by 3-6 months' },
        { term: 'critical congenital heart defect screening', definition: 'Pulse oximetry test performed on newborns before hospital discharge to detect heart defects that require intervention in the first year of life' },
      ],
      patientCounselingPoints: [
        'Some yellowing of the skin is normal in newborns, but jaundice that appears in the first 24 hours or spreads rapidly needs immediate evaluation.',
        'Newborn screening tests (heel prick, hearing, and heart screen) are done before you leave the hospital to catch rare but treatable conditions early.',
        'Mongolian spots are normal birthmarks that look like bruises. Make sure your doctor documents them so they are not mistaken for injury.',
        'Babies do not need a bath every day. Two to three times per week is enough; too much bathing can dry out their skin.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Neonatal adaptation involves cardiopulmonary transition, thermoregulation, bilirubin metabolism, metabolic screening, and developmental assessment using standardized tools during the newborn period.',
      explanation: `**Neonatal Cardiopulmonary Transition**
- Fetal circulation features: ductus arteriosus, foramen ovale, ductus venosus
- At birth: first breath causes lung expansion and decreased pulmonary vascular resistance
- Increased left atrial pressure functionally closes foramen ovale
- Rising PaO2 triggers ductus arteriosus constriction (prostaglandin withdrawal)
- Ductus venosus closes as umbilical blood flow ceases
- Transitional circulation may take 24-72 hours to fully stabilize
- Persistent pulmonary hypertension of the newborn (PPHN) occurs when transition fails

**Bilirubin Metabolism in Detail**
- Heme (from RBC breakdown) is converted to biliverdin, then unconjugated (indirect) bilirubin
- Unconjugated bilirubin is bound to albumin for transport to the liver
- Hepatic uptake via organic anion transporting polypeptide (OATP)
- Conjugation by UGT1A1 (UDP-glucuronosyltransferase) to direct bilirubin
- Excreted in bile to the intestine
- Enterohepatic circulation: beta-glucuronidase deconjugates bilirubin in the gut; reabsorbed
- Neonatal risk factors: immature UGT1A1, increased RBC volume, shorter RBC lifespan (90 vs. 120 days), sterile gut (no bacteria to convert bilirubin to urobilinogen)

**Acute Bilirubin Encephalopathy and Kernicterus**
| Stage | Signs |
|-------|-------|
| Early | Lethargy, hypotonia, poor feeding |
| Intermediate | Hypertonia (opisthotonus), high-pitched cry, fever |
| Advanced | Pronounced opisthotonus, seizures, apnea |
| Chronic (kernicterus) | Choreoathetoid cerebral palsy, upward gaze palsy, sensorineural hearing loss |

**Expanded Newborn Screening**
| Category | Examples | Method |
|----------|---------|--------|
| Amino acid disorders | PKU, maple syrup urine disease, homocystinuria | Tandem mass spectrometry |
| Fatty acid oxidation disorders | MCADD, VLCADD, LCHAD | Tandem mass spectrometry |
| Organic acid disorders | Methylmalonic acidemia, propionic acidemia | Tandem mass spectrometry |
| Endocrine | Congenital hypothyroidism, CAH | Immunoassay (TSH, 17-OHP) |
| Hemoglobinopathies | Sickle cell disease, thalassemia | HPLC or IEF |
| Cystic fibrosis | CF | Immunoreactive trypsinogen (IRT) |
| Galactosemia | Classic galactosemia | GALT enzyme activity |
| SCID | Severe combined immunodeficiency | TREC assay |
| SMA | Spinal muscular atrophy | SMN1 gene deletion |

**Neonatal Infection: Risk Factors and Evaluation**
| Risk Factor | Significance |
|-------------|-------------|
| Maternal GBS colonization | Risk of early-onset sepsis if intrapartum antibiotics not given |
| Prolonged rupture of membranes (>18 hours) | Increased ascending infection risk |
| Maternal fever in labor | Chorioamnionitis risk |
| Prematurity | Immature immune system |

**Evaluation of Febrile Neonate (<28 days)**
- Full sepsis workup: CBC with differential, blood culture, urinalysis and culture, lumbar puncture (CSF analysis and culture)
- Empiric antibiotics (ampicillin + gentamicin) pending cultures
- Consider HSV evaluation (PCR, LFTs, surface cultures) if risk factors present
- Fever in neonate <28 days is a medical emergency until proven otherwise

**Vitamin K Prophylaxis**
- Intramuscular vitamin K (phytonadione) 0.5-1 mg at birth
- Prevents vitamin K deficiency bleeding (VKDB): early, classic, and late forms
- Late VKDB (2-12 weeks) primarily affects exclusively breastfed infants who did not receive IM vitamin K
- Late VKDB can cause intracranial hemorrhage with devastating neurological outcomes
- Oral vitamin K regimens exist but are less reliable

**Developmental Assessment in the Newborn Period**
| Domain | Expected by 2 Weeks |
|--------|-------------------|
| Motor | Flexed posture; symmetric movements; intact primitive reflexes |
| Sensory | Fixes briefly on faces at 8-12 inches; startles to loud sounds |
| Feeding | Coordinated suck-swallow-breathe pattern |
| State regulation | Clear sleep-wake cycles emerging; consolable when crying |`,
      keyTerms: [
        { term: 'UGT1A1', definition: 'UDP-glucuronosyltransferase 1A1; the hepatic enzyme responsible for conjugating unconjugated bilirubin; immature in neonates, contributing to physiological jaundice' },
        { term: 'kernicterus', definition: 'Chronic bilirubin encephalopathy resulting from deposition of unconjugated bilirubin in the basal ganglia and brainstem; presents with choreoathetoid cerebral palsy and hearing loss' },
        { term: 'TREC assay', definition: 'T-cell receptor excision circle assay; newborn screening test for severe combined immunodeficiency (SCID) by measuring T-cell production markers' },
        { term: 'enterohepatic circulation', definition: 'Recycling of bilirubin between intestine and liver; enhanced in neonates due to beta-glucuronidase activity and lack of gut bacteria, contributing to jaundice' },
        { term: 'vitamin K deficiency bleeding', definition: 'Hemorrhagic disorder in newborns caused by insufficient vitamin K for coagulation factor synthesis; prevented by intramuscular vitamin K at birth' },
        { term: 'persistent pulmonary hypertension', definition: 'Failure of normal postnatal decrease in pulmonary vascular resistance, resulting in right-to-left shunting and hypoxemia in the newborn' },
      ],
    },
    4: {
      level: 4,
      summary:
        'Advanced neonatal care integrates understanding of transitional physiology, bilirubin neurotoxicity mechanisms, evidence-based screening protocols, sepsis risk stratification, and emerging neonatal biomarkers for clinical decision-making.',
      explanation: `**Molecular Mechanisms of Bilirubin Neurotoxicity**
- Unconjugated bilirubin crosses blood-brain barrier when free (unbound to albumin)
- Free bilirubin is the neurotoxic fraction; total bilirubin is a surrogate marker
- Bilirubin-albumin binding capacity depends on: gestational age, albumin concentration, competing ligands (medications, free fatty acids), pH
- Neurotoxicity mechanisms: mitochondrial dysfunction, excitotoxicity (glutamate release), oxidative stress, calcium-mediated apoptosis
- Selective vulnerability of globus pallidus, subthalamic nucleus, hippocampus, cochlear nuclei
- Bilirubin/albumin ratio (B/A ratio) may improve risk stratification beyond total serum bilirubin alone

**Neonatal Sepsis Risk Stratification**
| Approach | Method | Advantage |
|----------|--------|-----------|
| Traditional (CDC 2010) | Categorical risk factors; empiric antibiotics for all at-risk | High sensitivity; low specificity; overtreats |
| Kaiser sepsis calculator | Multivariate model using maternal risk factors + newborn exam | Reduces antibiotic exposure by 40-60%; validated in large populations |
| Serial examination | Clinical observation with vital signs every 4 hours for 24-48 hours | Reduces blood draws and antibiotics; requires nursing resources |
| Biomarkers | Procalcitonin (PCT), CRP, IL-6 | PCT has best early sensitivity; serial CRP for monitoring |

**Neonatal Hypoglycemia Management**
| Category | Definition | Population |
|----------|-----------|-----------|
| At-risk groups | LGA, SGA, IDM, preterm (34-36 weeks) | Screen glucose at 1, 2, 4, 8, 12, 24 hours |
| Operational threshold | <45 mg/dL in first 48 hours | Feed and recheck; IV dextrose if symptomatic or persistent |
| Symptomatic hypoglycemia | <40 mg/dL with symptoms (jitteriness, poor feeding, seizures) | IV dextrose bolus (2 mL/kg D10W) followed by continuous infusion |
| Persistent hypoglycemia | Requiring >12 mg/kg/min glucose infusion rate | Evaluate for hyperinsulinism, cortisol deficiency, metabolic disorders |

**Congenital Heart Disease: Newborn Presentation Patterns**
| Pattern | Timing | Lesions | Presentation |
|---------|--------|---------|-------------|
| Ductal-dependent systemic | Day 2-7 (ductus closes) | Coarctation, HLHS, interrupted arch | Shock, poor perfusion, metabolic acidosis |
| Ductal-dependent pulmonary | Day 1-3 | Pulmonary atresia, critical PS, TOF | Cyanosis unresponsive to oxygen |
| Mixing lesions | Variable | TGA, truncus, TAPVR | Cyanosis; may improve with PGE1 |
| Left-to-right shunts | Weeks 2-6 (as PVR drops) | VSD, ASD, PDA | Tachypnea, poor feeding, heart failure |

**Prostaglandin E1 (PGE1) in Ductal-Dependent Lesions:**
- Maintains ductal patency when systemic or pulmonary blood flow depends on the ductus arteriosus
- Starting dose: 0.05-0.1 mcg/kg/min IV
- Side effects: apnea (12%), hypotension, fever, vasodilation
- Must have airway management capability when starting PGE1

**Evidence-Based Cord Clamping**
| Approach | Evidence |
|----------|---------|
| Delayed cord clamping (30-60 sec) | Increases blood volume, iron stores, and hemoglobin; reduces IVH in preterms; AAP/WHO recommended |
| Cord milking | Alternative when delayed clamping not feasible; increases placental transfusion |
| Immediate clamping | Reserved for emergencies requiring immediate neonatal resuscitation |
| Term benefits | Higher ferritin at 3-6 months; reduced iron deficiency anemia |
| Preterm benefits | Reduced IVH, reduced NEC, fewer transfusions |

**Neonatal Abstinence Syndrome (NAS)**
- Opioid withdrawal in neonates exposed in utero; onset 24-72 hours for short-acting, up to 5-7 days for methadone/buprenorphine
- Finnegan scoring system: assesses CNS irritability, GI dysfunction, autonomic signs
- First-line treatment: morphine or methadone; titrate to score; wean gradually
- Non-pharmacologic: swaddling, low-stimulation environment, breastfeeding (if mother on stable MAT and no contraindications)
- Eat-Sleep-Console approach: newer model focusing on functional outcomes rather than pharmacologic titration`,
      keyTerms: [
        { term: 'bilirubin-albumin ratio', definition: 'Ratio of total serum bilirubin to albumin concentration; may better predict neurotoxicity risk than total bilirubin alone by reflecting free bilirubin fraction' },
        { term: 'Kaiser sepsis calculator', definition: 'Multivariate risk stratification tool using maternal factors and newborn clinical exam to guide early-onset sepsis evaluation; reduces unnecessary antibiotic exposure by 40-60%' },
        { term: 'prostaglandin E1', definition: 'Medication used to maintain ductal patency in ductal-dependent congenital heart disease; critical bridge therapy before surgical intervention' },
        { term: 'Finnegan scoring', definition: 'Standardized assessment tool for neonatal abstinence syndrome severity using 21 items across CNS, GI, and autonomic domains; guides pharmacologic treatment decisions' },
        { term: 'Eat-Sleep-Console', definition: 'Function-based assessment model for NAS replacing Finnegan scoring in many centers; focuses on whether the infant can eat adequately, sleep undisturbed, and be consoled' },
        { term: 'glucose infusion rate', definition: 'Rate of intravenous dextrose delivery in mg/kg/min; persistent requirement above 12 mg/kg/min suggests pathological hyperinsulinism or metabolic disorder' },
      ],
      clinicalNotes:
        'The Kaiser sepsis calculator has significantly reduced antibiotic exposure in well-appearing newborns with risk factors for early-onset sepsis. However, it should not replace clinical judgment, and any newborn with clinical signs of sepsis should receive empiric antibiotics regardless of calculator output. For jaundice, the bilirubin-albumin ratio is an underutilized tool; consider it when total bilirubin is approaching exchange transfusion thresholds. Always start PGE1 before transfer in any neonate with suspected ductal-dependent cardiac lesion presenting with shock or cyanosis.',
    },
    5: {
      level: 5,
      summary:
        'Expert neonatal care integrates precision bilirubin risk assessment, genomic newborn screening advances, hemodynamic monitoring, neuroprotective strategies, and emerging point-of-care technologies transforming newborn evaluation.',
      explanation: `**Precision Bilirubin Management**
| Advance | Detail |
|---------|--------|
| End-tidal CO (ETCOc) | Measures bilirubin production rate; distinguishes hemolytic from non-hemolytic jaundice |
| Unbound (free) bilirubin assays | Direct measurement of neurotoxic fraction; not widely available but superior predictor of neurotoxicity |
| Pharmacogenomics | UGT1A1 polymorphisms (Gilbert syndrome variant) + OATP1B1 variants predict severe hyperbilirubinemia risk |
| Machine learning models | Integrating gestational age, birth weight, ethnicity, feeding type, serial bilirubin values for personalized phototherapy thresholds |

**Exchange Transfusion: Evidence and Technique**
- Double-volume exchange (160-180 mL/kg) removes ~85% of circulating bilirubin and antibody-coated RBCs
- Indications: TSB at or above exchange threshold on AAP nomogram; signs of acute bilirubin encephalopathy regardless of level
- Complications: electrolyte derangements (hypocalcemia, hyperkalemia), thrombocytopenia, catheter-related complications, NEC, mortality (~0.3%)
- IVIG (0.5-1 g/kg) can reduce need for exchange in immune-mediated hemolysis (Rh, ABO)

**Genomic Newborn Screening**
| Modality | Current Use | Future Direction |
|----------|-------------|-----------------|
| Tandem mass spectrometry | Standard for metabolic screening | Expanding analyte panels |
| DNA-based screening | SCID (TREC), SMA (SMN1) | Whole-exome/genome sequencing pilots |
| Whole-genome sequencing | Research (BabySeq, GUARDIAN studies) | Potential to screen for 200+ conditions |
| Rapid genome sequencing | NICU setting for critically ill neonates (turnaround <48 hours) | Standard of care for undiagnosed NICU patients |
| Ethical considerations | Variants of uncertain significance, incidental findings, consent, data storage | Frameworks needed for population-level implementation |

**Targeted Neonatal Echocardiography and Hemodynamic Assessment**
| Application | Parameters |
|-------------|-----------|
| PDA assessment | DA diameter, flow pattern, LA:Ao ratio, descending aorta flow reversal |
| Cardiac output | Left ventricular output (LVO), superior vena cava (SVC) flow |
| Pulmonary hypertension | TR jet velocity, septal position, RV function (TAPSE) |
| Volume status | IVC collapsibility, mitral valve E/A ratio |

**Neonatal Neuroprotection**
| Strategy | Evidence |
|----------|---------|
| Therapeutic hypothermia (HIE) | Standard of care for moderate-severe HIE at >=36 weeks; NNT = 7 to prevent death/disability |
| Erythropoietin (Epo) | HEAL trial (2022): No benefit for HIE; not recommended as adjunct |
| Magnesium sulfate (antenatal) | Given to mothers at risk of preterm delivery <32 weeks; reduces cerebral palsy risk |
| Delayed cord clamping | Reduces IVH in preterm infants; improved motor outcomes in follow-up studies |
| Caffeine citrate | Standard for apnea of prematurity; also neuroprotective (CAP trial: improved motor outcomes at 18 months) |
| Stem cell therapy | Phase I/II trials for HIE and BPD; mesenchymal stem cells (MSCs) via IV or IT |

**Point-of-Care Technologies in Neonatal Care**
| Technology | Application |
|------------|-----------|
| Point-of-care ultrasound (POCUS) | Lung ultrasound for RDS vs. TTN; cardiac assessment; line placement verification |
| Near-infrared spectroscopy (NIRS) | Cerebral and renal oxygenation monitoring; guides hemodynamic management |
| Amplitude-integrated EEG (aEEG) | Seizure detection; background pattern assessment; prognostication in HIE |
| Continuous glucose monitoring (CGM) | Investigational in neonates; detects occult hypoglycemia not caught by intermittent sampling |
| Artificial intelligence | Automated vital sign pattern recognition for early sepsis detection (e.g., heart rate variability analysis) |

**Neonatal Resuscitation: Key Updates (NRP 8th Edition)**
| Recommendation | Change |
|---------------|--------|
| Initial steps | Dry, stimulate, clear airway if needed; delayed cord clamping if vigorous |
| Initial FiO2 | 21% for term; 21-30% for preterm |
| Heart rate assessment | ECG preferred over pulse oximetry for accurate HR during resuscitation |
| Epinephrine route | IV/IO preferred over endotracheal; 0.01-0.03 mg/kg IV; 0.05-0.1 mg/kg ET |
| Volume resuscitation | 10 mL/kg NS or O-negative pRBC for suspected hemorrhage |
| Laryngeal mask | Can be used as alternative to intubation for >=34 weeks if face mask ventilation ineffective |`,
      keyTerms: [
        { term: 'end-tidal carbon monoxide (ETCOc)', definition: 'Measurement of CO in exhaled breath; reflects bilirubin production rate from heme catabolism; distinguishes hemolytic from non-hemolytic causes of neonatal jaundice' },
        { term: 'BabySeq study', definition: 'Landmark genomic newborn screening research project using whole-exome sequencing in healthy and NICU newborns; demonstrated feasibility and identified actionable findings in ~10% of participants' },
        { term: 'therapeutic hypothermia', definition: 'Controlled cooling to 33.5 C for 72 hours in neonates with moderate-severe hypoxic-ischemic encephalopathy; reduces death and disability with NNT of 7' },
        { term: 'amplitude-integrated EEG', definition: 'Simplified continuous brain monitoring displaying compressed EEG trends; used for seizure detection and prognostication in neonatal encephalopathy' },
        { term: 'GUARDIAN study', definition: 'Large-scale genomic newborn screening trial evaluating whole-genome sequencing for over 200 genetic conditions in the general newborn population' },
      ],
      clinicalNotes: `**Expert Integration:**
- Pharmacogenomic profiling of UGT1A1 and OATP1B1 variants may eventually allow personalized jaundice risk assessment at birth, reducing both under- and overtreatment.
- Rapid whole-genome sequencing in the NICU has diagnostic yields of 30-50% in critically ill neonates with suspected genetic disease, often changing management. Cost-effectiveness favors early genomic testing over serial specialized tests.
- NIRS-guided hemodynamic management is increasingly used in NICUs but lacks definitive RCT evidence that it improves long-term neurodevelopmental outcomes. The SafeBoosC III trial showed no reduction in death or severe brain injury with cerebral NIRS monitoring in preterm infants.
- AI-driven heart rate variability analysis (HeRO monitor) can detect neonatal sepsis 24 hours before clinical signs; implementation reduced mortality in one large trial but has not been universally adopted.
- The Eat-Sleep-Console model for NAS has reduced pharmacologic treatment rates by 50% and length of stay by 8-10 days in quality improvement studies, representing a major paradigm shift.`,
    },
  },

  media: [],

  citations: [
    { id: 'aap-safe-sleep-2022', type: 'guideline', title: 'Sleep-Related Infant Deaths: Updated 2022 Recommendations', authors: ['AAP Task Force on SIDS'], source: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2022-057990' },
    { id: 'aap-hyperbili-2022', type: 'guideline', title: 'Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation', authors: ['Kemper, A.R.', 'Newman, T.B.'], source: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2022-058859' },
    { id: 'nrp-8th-edition', type: 'textbook', title: 'Textbook of Neonatal Resuscitation (NRP), 8th Edition', authors: ['Weiner, G.M.'], source: 'American Academy of Pediatrics', license: 'Proprietary' },
  ],

  crossReferences: [
    { targetId: 'topic-breastfeeding-support', targetType: 'topic', relationship: 'related', label: 'Breastfeeding Support' },
    { targetId: 'topic-postpartum-recovery', targetType: 'topic', relationship: 'related', label: 'Postpartum Recovery' },
  ],

  tags: {
    systems: ['cardiovascular', 'respiratory', 'nervous', 'integumentary'],
    topics: ['neonatology', 'pediatrics', 'preventive care', 'newborn screening'],
    keywords: ['newborn', 'neonate', 'jaundice', 'bilirubin', 'SIDS', 'safe sleep', 'newborn screening', 'cord care', 'thermoregulation'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'family medicine'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
