/**
 * Biological Self — Pediatrics Specialty Database
 * 35 entries covering growth/development milestones, pediatric-specific conditions,
 * developmental screening, vaccinations, neonatal conditions, childhood infectious
 * diseases, behavioral/developmental disorders, and pediatric emergencies.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PediatricsCategory =
  | 'growth-development'
  | 'developmental-screening'
  | 'vaccination'
  | 'neonatal'
  | 'infectious-disease'
  | 'behavioral-developmental'
  | 'pediatric-emergency'
  | 'pediatric-condition';

export interface PediatricsEntry {
  id: string;
  name: string;
  category: PediatricsCategory;
  description: string;
  keyPoints: string[];
  clinicalPearl: string;
  icdCode: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const ped = (
  id: string, name: string, category: PediatricsCategory,
  description: string, keyPoints: string[], clinicalPearl: string,
  icdCode: string,
): PediatricsEntry => ({ id, name, category, description, keyPoints, clinicalPearl, icdCode });

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const PEDIATRICS_ENTRIES: Record<string, PediatricsEntry> = {

  // ===== GROWTH & DEVELOPMENT MILESTONES (5) ================================

  'social-smile': ped(
    'social-smile', 'Social Smile Milestone', 'growth-development',
    'First true social smile appears at approximately 6-8 weeks, indicating early social-emotional development.',
    ['Emerges around 6-8 weeks of age', 'Differentiated from reflexive newborn smiles', 'Absence by 3 months warrants developmental evaluation', 'Precursor to more complex social engagement'],
    'A social smile by 2 months is one of the earliest and most reassuring developmental milestones; its absence is an early red flag for autism spectrum disorder.',
    'Z13.40',
  ),

  'gross-motor-milestones': ped(
    'gross-motor-milestones', 'Gross Motor Milestone Progression', 'growth-development',
    'Sequential acquisition of motor skills: head control (2-4 mo), rolling (4-6 mo), sitting (6-8 mo), crawling (8-10 mo), walking (12-15 mo).',
    ['Head steady when held upright by 4 months', 'Sits without support by 6-8 months', 'Pulls to stand by 9-12 months', 'Independent walking by 12-15 months', 'Runs by 18-24 months'],
    'Failure to walk by 18 months requires urgent evaluation; however, bottom-shufflers may walk later and are typically neurologically normal.',
    'Z13.40',
  ),

  'language-milestones': ped(
    'language-milestones', 'Language Development Milestones', 'growth-development',
    'Progressive language acquisition: cooing (2 mo), babbling (6 mo), first words (12 mo), two-word phrases (24 mo).',
    ['Cooing by 2 months, babbling by 6 months', 'First word (mama/dada specific) by 12 months', '10-25 words by 18 months', 'Two-word sentences by 24 months', 'Strangers understand 75% of speech by 3 years'],
    'No words by 16 months or no two-word phrases by 24 months should trigger a formal speech-language evaluation and hearing test.',
    'Z13.42',
  ),

  'fine-motor-milestones': ped(
    'fine-motor-milestones', 'Fine Motor Milestone Progression', 'growth-development',
    'Progression from reflexive grasp to voluntary manipulation: palmar grasp (3-4 mo), transfer (6 mo), pincer (9-12 mo).',
    ['Palmar grasp reflex present at birth, fades by 3-4 months', 'Voluntary reach and grasp by 4-5 months', 'Transfers objects hand-to-hand by 6 months', 'Mature pincer grasp by 9-12 months', 'Builds tower of 2 blocks by 15 months, 6 blocks by 2 years'],
    'Persistence of the palmar grasp reflex beyond 6 months suggests upper motor neuron pathology and requires neurological evaluation.',
    'Z13.40',
  ),

  'failure-to-thrive': ped(
    'failure-to-thrive', 'Failure to Thrive (FTT)', 'growth-development',
    'Weight falling below the 3rd percentile or crossing two major percentile lines on growth charts, indicating inadequate growth.',
    ['Weight affected first, then length, then head circumference', 'Organic causes (GERD, celiac, CF, CHD) vs non-organic (psychosocial, neglect)', 'Caloric intake assessment is essential', 'Weight-for-length ratio helps distinguish acute vs chronic malnutrition', 'Hospitalization for severe cases or concern for neglect'],
    'Weight loss or plateau in a breastfed infant in the first 2 weeks is common; however, failure to regain birth weight by 2 weeks warrants a lactation evaluation and close follow-up.',
    'R62.51',
  ),

  // ===== DEVELOPMENTAL SCREENING (3) ========================================

  'ages-and-stages': ped(
    'ages-and-stages', 'ASQ Developmental Screening', 'developmental-screening',
    'The Ages and Stages Questionnaire (ASQ-3) is a parent-completed screening tool assessing 5 developmental domains at well-child visits.',
    ['Screens communication, gross motor, fine motor, problem-solving, personal-social', 'Administered at 9, 18, and 30 months per AAP guidelines', 'Parent-reported with high sensitivity (~86%) and specificity (~85%)', 'Positive screen requires formal developmental evaluation', 'Available in multiple languages'],
    'The ASQ is a screening tool, not diagnostic. A positive ASQ should lead to referral for comprehensive evaluation, not a diagnosis.',
    'Z13.40',
  ),

  'mchat-screening': ped(
    'mchat-screening', 'M-CHAT-R/F Autism Screening', 'developmental-screening',
    'Modified Checklist for Autism in Toddlers (M-CHAT-R/F) is the standard autism screening tool at 18 and 24 months.',
    ['20-item parent questionnaire at 18 and 24 months', 'Score >=3 is positive; follow-up interview reduces false positives', 'High sensitivity for ASD when combined with follow-up', 'Early detection enables intervention during critical neuroplasticity window', 'AAP recommends universal screening regardless of concerns'],
    'Many children who screen positive on the initial M-CHAT will screen negative on the structured follow-up interview; always complete the follow-up before referral to reduce unnecessary evaluations.',
    'Z13.41',
  ),

  'newborn-hearing-screening': ped(
    'newborn-hearing-screening', 'Newborn Hearing Screening', 'developmental-screening',
    'Universal newborn hearing screening (UNHS) using OAE or ABR to detect congenital hearing loss before hospital discharge.',
    ['Performed before hospital discharge on all newborns', 'OAE (otoacoustic emissions) or ABR (auditory brainstem response)', 'Failed screen requires outpatient diagnostic ABR by 3 months', 'Hearing aids or cochlear implant by 6 months for confirmed loss', 'Risk factors: NICU stay >5 days, family history, craniofacial anomalies, CMV'],
    'Congenital CMV is the leading non-genetic cause of sensorineural hearing loss; consider CMV testing in any infant who fails newborn hearing screening.',
    'Z13.5',
  ),

  // ===== VACCINATIONS (4) ===================================================

  'dtap-vaccine': ped(
    'dtap-vaccine', 'DTaP Vaccine Series', 'vaccination',
    'Diphtheria, tetanus, and acellular pertussis vaccine given as a 5-dose series at 2, 4, 6, 15-18 months, and 4-6 years.',
    ['5-dose series: 2, 4, 6, 15-18 months, 4-6 years', 'Tdap booster at 11-12 years, then every 10 years', 'Common side effects: injection site pain, low-grade fever, fussiness', 'Contraindicated if prior anaphylaxis or encephalopathy within 7 days', 'Maternal Tdap at 27-36 weeks gestation protects newborns via passive immunity'],
    'Pertussis ("whooping cough") is most deadly in infants under 6 months who are too young to be fully vaccinated; cocooning strategy (vaccinating close contacts) and maternal Tdap are critical.',
    'Z23',
  ),

  'mmr-vaccine': ped(
    'mmr-vaccine', 'MMR Vaccine', 'vaccination',
    'Measles, mumps, and rubella live attenuated vaccine given in a 2-dose series at 12-15 months and 4-6 years.',
    ['Two doses: 12-15 months and 4-6 years', 'Live vaccine; contraindicated in immunocompromised and pregnancy', 'Febrile seizures may occur 7-12 days post-vaccination (self-limited)', 'No causal link to autism (extensively studied)', 'Post-exposure prophylaxis within 72 hours can prevent measles'],
    'The MMR-related febrile seizure window is 7-12 days post-vaccination (when the live virus replicates), unlike DTaP-related fevers that occur within 24-48 hours.',
    'Z23',
  ),

  'rotavirus-vaccine': ped(
    'rotavirus-vaccine', 'Rotavirus Vaccine', 'vaccination',
    'Oral live attenuated vaccine preventing severe rotavirus gastroenteritis; given at 2 and 4 months (RV1) or 2, 4, 6 months (RV5).',
    ['Oral vaccine (not injectable)', 'RV1 (Rotarix): 2 doses; RV5 (RotaTeq): 3 doses', 'Must initiate before 15 weeks, complete by 8 months of age', 'Small increased risk of intussusception (1-5 per 100,000)', 'Dramatically reduced rotavirus hospitalizations worldwide'],
    'The strict age window for rotavirus vaccine exists because intussusception risk increases with age at first dose; do not start after 15 weeks of age.',
    'Z23',
  ),

  'varicella-vaccine': ped(
    'varicella-vaccine', 'Varicella Vaccine', 'vaccination',
    'Live attenuated vaccine against chickenpox; given at 12-15 months and 4-6 years, preventing varicella-zoster infection.',
    ['Two doses: 12-15 months and 4-6 years', 'Live vaccine; avoid in immunocompromised patients', 'Post-exposure prophylaxis effective within 3-5 days of exposure', 'Breakthrough varicella is typically mild (<50 lesions)', 'Avoid salicylates for 6 weeks post-vaccination (Reye syndrome risk)'],
    'Varicella vaccine can be given as post-exposure prophylaxis within 5 days of exposure; varicella-zoster immunoglobulin (VariZIG) is used for immunocompromised or neonates exposed perinatally.',
    'Z23',
  ),

  // ===== NEONATAL CONDITIONS (5) ============================================

  'neonatal-jaundice': ped(
    'neonatal-jaundice', 'Neonatal Hyperbilirubinemia', 'neonatal',
    'Elevated unconjugated bilirubin in newborns; physiologic (peaks day 3-5) vs pathologic (first 24h, rapid rise, or conjugated).',
    ['Physiologic jaundice peaks day 3-5, resolves by 2 weeks', 'Jaundice in first 24 hours is always pathologic (hemolysis)', 'Risk factors: ABO/Rh incompatibility, G6PD, prematurity, breastfeeding', 'Use Bhutani nomogram to plot risk trajectory', 'Treatment: phototherapy, exchange transfusion for severe cases'],
    'Jaundice appearing within the first 24 hours of life is pathologic until proven otherwise and most commonly indicates hemolytic disease (ABO or Rh incompatibility).',
    'P59.9',
  ),

  'neonatal-sepsis': ped(
    'neonatal-sepsis', 'Neonatal Sepsis', 'neonatal',
    'Systemic bacterial infection in neonates (<28 days); early-onset (<72h, GBS, E. coli) vs late-onset (>72h, coagulase-negative staph, GBS).',
    ['Early-onset: GBS and E. coli are leading pathogens', 'Late-onset: coagulase-negative staph, S. aureus, gram-negatives', 'Presentation often nonspecific: temperature instability, poor feeding, lethargy', 'Full sepsis workup: blood culture, CBC, CRP, LP, UA/culture', 'Empiric: ampicillin + gentamicin (early), vancomycin + cefotaxime (late)'],
    'Neonates can be septic with a normal WBC count and no fever; a high index of suspicion and low threshold for workup are essential in the first 28 days of life.',
    'P36.9',
  ),

  'respiratory-distress-newborn': ped(
    'respiratory-distress-newborn', 'Neonatal Respiratory Distress Syndrome', 'neonatal',
    'Surfactant deficiency in preterm infants causing progressive respiratory failure; incidence inversely related to gestational age.',
    ['Caused by immature type II pneumocytes and surfactant deficiency', 'Risk increases with decreasing gestational age (<34 weeks)', 'Presents within hours of birth: tachypnea, grunting, retractions, cyanosis', 'CXR: ground-glass opacities with air bronchograms', 'Treatment: exogenous surfactant, CPAP or mechanical ventilation, antenatal steroids for prevention'],
    'Antenatal betamethasone given to mothers at 24-34 weeks gestation significantly reduces RDS severity; the benefit is maximal 24 hours to 7 days after administration.',
    'P22.0',
  ),

  'neonatal-abstinence': ped(
    'neonatal-abstinence', 'Neonatal Abstinence Syndrome (NAS)', 'neonatal',
    'Withdrawal syndrome in newborns exposed to opioids in utero; presents 24-72 hours after birth with CNS and GI symptoms.',
    ['Onset typically 24-72 hours after birth (longer with methadone)', 'CNS: tremors, high-pitched cry, irritability, seizures', 'GI: poor feeding, vomiting, diarrhea, weight loss', 'Scored using modified Finnegan scale every 3-4 hours', 'First-line: rooming-in, swaddling, breastfeeding; pharmacologic: morphine or methadone if severe'],
    'Breastfeeding is encouraged in NAS (unless mother is using illicit drugs or HIV-positive) as it reduces NAS severity and length of hospital stay.',
    'P96.1',
  ),

  'congenital-heart-defects': ped(
    'congenital-heart-defects', 'Critical Congenital Heart Disease Screening', 'neonatal',
    'Pulse oximetry screening at 24-48 hours of life detects critical cyanotic congenital heart defects before clinical deterioration.',
    ['Screen at 24-48 hours in right hand and either foot', 'Positive screen: SpO2 <95% or >3% difference between pre/post-ductal', 'Detects coarctation of aorta, transposition, tetralogy of Fallot, and others', 'False negatives possible with large PDA or high PVR', 'Positive screen requires urgent echocardiogram'],
    'A pulse oximetry difference >3% between right hand (pre-ductal) and foot (post-ductal) suggests right-to-left shunting through the ductus arteriosus and requires immediate cardiology evaluation.',
    'Q24.9',
  ),

  // ===== CHILDHOOD INFECTIOUS DISEASES (5) ==================================

  'kawasaki-disease': ped(
    'kawasaki-disease', 'Kawasaki Disease', 'infectious-disease',
    'Acute febrile vasculitis of medium-sized arteries in children <5 years; leading cause of acquired heart disease in developed countries.',
    ['Fever >=5 days plus 4 of 5 criteria: bilateral conjunctivitis, oral changes, rash, extremity changes, cervical lymphadenopathy', 'Incomplete Kawasaki: fever + <4 criteria with lab/echo support', 'Coronary artery aneurysms in 25% untreated, <5% with treatment', 'Treatment: IVIG 2 g/kg single infusion + high-dose aspirin', 'Echocardiogram at diagnosis, 2 weeks, and 6-8 weeks'],
    'Kawasaki disease is the one pediatric condition where aspirin is indicated during the acute phase despite the general avoidance of aspirin in children due to Reye syndrome risk.',
    'M30.3',
  ),

  'rsv-bronchiolitis': ped(
    'rsv-bronchiolitis', 'RSV Bronchiolitis', 'infectious-disease',
    'RSV is the most common cause of bronchiolitis and pneumonia in infants <1 year; presents with wheezing, tachypnea, and respiratory distress.',
    ['Peak incidence at 2-6 months of age', 'Presentation: rhinorrhea, cough, wheezing, tachypnea, retractions', 'Diagnosis is clinical; RSV testing available but rarely changes management', 'Treatment is supportive: nasal suctioning, supplemental O2, hydration', 'Palivizumab (or nirsevimab) prophylaxis for high-risk infants (preterm, CHD, CLD)'],
    'Bronchodilators, corticosteroids, and antibiotics have no proven benefit in bronchiolitis and are not recommended by AAP guidelines; supportive care is the standard.',
    'J21.0',
  ),

  'croup': ped(
    'croup', 'Croup (Laryngotracheobronchitis)', 'infectious-disease',
    'Viral upper airway infection (parainfluenza most common) causing barky cough, stridor, and hoarseness; peaks at age 6 months to 3 years.',
    ['Classic triad: barky (seal-like) cough, inspiratory stridor, hoarseness', 'Steeple sign on AP neck X-ray (subglottic narrowing)', 'Mild: dexamethasone 0.6 mg/kg PO single dose', 'Moderate-severe: nebulized racemic epinephrine + dexamethasone', 'Symptoms characteristically worsen at night'],
    'A single dose of dexamethasone (0.6 mg/kg) benefits all severities of croup, including mild cases, and reduces return visits and hospitalization.',
    'J05.0',
  ),

  'hand-foot-mouth': ped(
    'hand-foot-mouth', 'Hand, Foot, and Mouth Disease', 'infectious-disease',
    'Enteroviral infection (coxsackievirus A16, enterovirus 71) causing oral vesicles and maculopapular/vesicular rash on hands and feet.',
    ['Most common in children <5 years, peaks in summer/fall', 'Oral ulcers (anterior mouth) cause painful eating and dehydration risk', 'Vesicles on palms, soles, and buttocks are characteristic', 'Self-limited in 7-10 days; treatment is supportive (hydration, analgesics)', 'Enterovirus 71 strains can cause CNS complications (encephalitis, meningitis)'],
    'HFMD oral lesions are anterior (tongue, buccal mucosa, hard palate), distinguishing them from herpangina (posterior pharynx, soft palate), which is also caused by enteroviruses.',
    'B08.4',
  ),

  'strep-pharyngitis': ped(
    'strep-pharyngitis', 'Group A Streptococcal Pharyngitis', 'infectious-disease',
    'Bacterial pharyngitis from GAS in school-age children; requires treatment to prevent acute rheumatic fever.',
    ['Peak age 5-15 years; rare under 3 years', 'Centor/McIsaac criteria guide testing: fever, tonsillar exudates, tender anterior cervical nodes, absence of cough', 'Rapid strep test; confirm negative with throat culture in children', 'Treatment: amoxicillin or penicillin V for 10 days', 'Prevents rheumatic fever but not post-streptococcal glomerulonephritis'],
    'In children under 3, classic GAS pharyngitis is rare; streptococcal infection in toddlers presents as "streptococcosis" with protracted rhinorrhea, low-grade fever, and irritability.',
    'J02.0',
  ),

  // ===== BEHAVIORAL & DEVELOPMENTAL DISORDERS (5) ===========================

  'adhd': ped(
    'adhd', 'Attention-Deficit/Hyperactivity Disorder', 'behavioral-developmental',
    'Neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity; onset before age 12, symptoms in 2+ settings.',
    ['DSM-5: >=6 symptoms of inattention and/or hyperactivity-impulsivity for >=6 months', 'Three presentations: predominantly inattentive, predominantly hyperactive-impulsive, combined', 'First-line ages 6-11: methylphenidate or amphetamine + behavioral therapy', 'Preschool (4-5): behavioral therapy first-line; medication if insufficient', 'Monitor growth, heart rate, BP, and side effects at each visit'],
    'Stimulant medications are safe and effective for ADHD; appetite suppression is the most common side effect. Give medication after breakfast and consider drug holidays during school breaks to mitigate growth effects.',
    'F90.9',
  ),

  'autism-spectrum': ped(
    'autism-spectrum', 'Autism Spectrum Disorder', 'behavioral-developmental',
    'Neurodevelopmental disorder with persistent deficits in social communication and restricted/repetitive behaviors; early intervention improves outcomes.',
    ['DSM-5: deficits in social communication + restricted/repetitive behaviors', 'Prevalence ~1 in 36 children (CDC 2023)', 'Red flags: no babbling by 12 mo, no pointing by 12 mo, no words by 16 mo, no pretend play by 18 mo', 'Screen with M-CHAT-R/F at 18 and 24 months', 'Applied Behavior Analysis (ABA) is best-studied early intervention'],
    'Regression of previously acquired language or social skills (autistic regression) occurs in approximately 30% of children with ASD, typically between 15-24 months, and always warrants evaluation.',
    'F84.0',
  ),

  'oppositional-defiant': ped(
    'oppositional-defiant', 'Oppositional Defiant Disorder', 'behavioral-developmental',
    'Pattern of angry/irritable mood, argumentative/defiant behavior, and vindictiveness lasting >=6 months in children and adolescents.',
    ['Symptoms in at least one setting (home, school, peers) for >=6 months', 'Distinguished from conduct disorder (no aggression to people/animals, property destruction)', 'High comorbidity with ADHD (40-60%)', 'First-line treatment: parent management training and behavioral therapy', 'Pharmacotherapy targets comorbidities (stimulants for ADHD, SSRIs for anxiety)'],
    'ODD frequently co-occurs with ADHD; treating the underlying ADHD with stimulants often significantly improves oppositional behaviors without specific ODD-targeted pharmacotherapy.',
    'F91.3',
  ),

  'enuresis': ped(
    'enuresis', 'Nocturnal Enuresis (Bedwetting)', 'behavioral-developmental',
    'Involuntary urination during sleep in children >=5 years; primary (never achieved dryness) vs secondary (regression after 6+ months dry).',
    ['Affects 15-20% of 5-year-olds; spontaneous resolution rate ~15%/year', 'Primary is most common and typically maturational delay', 'Secondary warrants workup: UTI, diabetes, constipation, psychosocial stressors', 'First-line: motivational therapy, bladder training, bedwetting alarm (highest cure rate)', 'Desmopressin (DDAVP) for short-term management (sleepovers, camps)'],
    'Constipation is an underrecognized cause of enuresis; a distended rectum compresses the bladder and reduces capacity. Always assess for constipation in any child with bedwetting.',
    'N39.44',
  ),

  'speech-delay': ped(
    'speech-delay', 'Speech and Language Delay', 'behavioral-developmental',
    'Delayed acquisition of speech (articulation) or language (comprehension/expression) relative to age norms; affects 5-10% of preschool children.',
    ['Expressive delay is more common; receptive delay is more concerning', 'Always obtain audiometry first to rule out hearing loss', 'Bilingual children may have smaller vocabulary in each language but normal total vocabulary', 'Early intervention (speech-language therapy) before age 3 has best outcomes', 'Red flags: no babbling by 12 mo, no gestures by 12 mo, no words by 18 mo'],
    'A child who understands everything but does not speak (isolated expressive delay) has a much better prognosis than one with combined receptive-expressive delay, which raises concern for intellectual disability or ASD.',
    'F80.9',
  ),

  // ===== PEDIATRIC EMERGENCIES (4) ==========================================

  'febrile-seizures': ped(
    'febrile-seizures', 'Febrile Seizures', 'pediatric-emergency',
    'Seizures associated with fever (>=38C) in children 6 months to 5 years without CNS infection; most common childhood seizure type.',
    ['Simple: generalized, <15 min, does not recur within 24h', 'Complex: focal, >15 min, or recurs within 24h', 'Simple febrile seizures do NOT require LP, EEG, or neuroimaging', 'Recurrence risk ~33% after first episode', 'No increased risk of epilepsy with simple febrile seizures (risk ~1% vs 1% general population)'],
    'LP is recommended for febrile seizures in children who are not up to date on Hib and pneumococcal vaccines (6-12 months) or when meningitis signs are present; it is no longer routinely required.',
    'R56.00',
  ),

  'intussusception': ped(
    'intussusception', 'Intussusception', 'pediatric-emergency',
    'Telescoping of proximal bowel into distal segment; most common cause of intestinal obstruction in children 6 months to 3 years.',
    ['Classic triad: colicky abdominal pain, currant-jelly stool, palpable sausage-shaped mass (triad present in <50%)', 'Peak age: 6-36 months; ileocolic most common', 'Ultrasound: target/donut sign (sensitivity >95%)', 'Treatment: air or hydrostatic enema reduction (85-90% success rate)', 'Surgery if peritonitis, perforation, or failed enema reduction'],
    'Intussusception in children >5 years or with recurrent episodes should raise concern for a pathologic lead point (Meckel diverticulum, lymphoma, polyp) requiring surgical exploration.',
    'K56.1',
  ),

  'pyloric-stenosis': ped(
    'pyloric-stenosis', 'Hypertrophic Pyloric Stenosis', 'pediatric-emergency',
    'Hypertrophy of the pyloric muscle causing gastric outlet obstruction; presents at 2-8 weeks with progressive non-bilious projectile vomiting.',
    ['Classically firstborn males; presents at 2-8 weeks of age', 'Non-bilious projectile vomiting after feeds, hungry immediately after', 'Olive-shaped mass in RUQ on palpation (pathognomonic but found in <50%)', 'Ultrasound: pyloric muscle thickness >3mm, length >15mm', 'Hypochloremic hypokalemic metabolic alkalosis from vomiting'],
    'The classic metabolic derangement in pyloric stenosis is hypochloremic hypokalemic metabolic alkalosis with paradoxical aciduria; correct electrolytes and dehydration before surgical pyloromyotomy.',
    'Q40.0',
  ),

  'epiglottitis': ped(
    'epiglottitis', 'Acute Epiglottitis', 'pediatric-emergency',
    'Life-threatening infection causing rapid-onset supraglottic swelling and airway obstruction; historically from H. influenzae type b, now rare due to vaccination.',
    ['Rapid onset: high fever, drooling, muffled voice, tripod positioning', 'Thumbprint sign on lateral neck X-ray', 'Do NOT examine the oropharynx or agitate the child (risk of complete obstruction)', 'Secure airway first (intubation in OR preferred), then obtain cultures', 'IV ceftriaxone or cefotaxime; consider dexamethasone as adjunct'],
    'Unlike croup (gradual onset, barky cough, low-grade fever), epiglottitis presents with abrupt high fever, toxic appearance, drooling, and absence of cough; the child prefers to sit upright and lean forward.',
    'J05.1',
  ),

  // ===== PEDIATRIC-SPECIFIC CONDITIONS (4) ==================================

  'pediatric-asthma-management': ped(
    'pediatric-asthma-management', 'Pediatric Asthma Stepwise Management', 'pediatric-condition',
    'Chronic airway inflammation and hyperresponsiveness in children; stepwise approach differs from adults with age-specific considerations.',
    ['Most common chronic disease in children; often begins before age 5', 'Intermittent: SABA PRN; Persistent: low-dose ICS is cornerstone', 'Children <4: clinical diagnosis (spirometry unreliable); 5-11: can do spirometry', 'Step-up if uncontrolled after 4-6 weeks; step-down after 3 months of good control', 'Asthma action plan for every patient; spacer required for all MDI use in children'],
    'In children under 5 with viral-triggered wheezing only, intermittent high-dose ICS at illness onset may be as effective as daily low-dose ICS and avoids chronic steroid exposure.',
    'J45.20',
  ),

  'otitis-media': ped(
    'otitis-media', 'Acute Otitis Media', 'pediatric-condition',
    'Middle ear infection; most common reason for antibiotic prescriptions in children. Peak incidence 6-18 months.',
    ['Diagnosis requires middle ear effusion + acute inflammatory signs', 'Severe: temperature >=39C, moderate-severe otalgia, or >=48 hours of symptoms', 'High-dose amoxicillin (80-90 mg/kg/day) is first-line', 'Observation option for mild cases in children >=2 years (watchful waiting 48-72h)', 'Recurrent AOM (>=3 in 6 months or >=4 in 12 months) may warrant tympanostomy tubes'],
    'The distinction between AOM and otitis media with effusion (OME) is crucial; OME is fluid without infection and does NOT require antibiotics. A bulging, erythematous TM is AOM; a retracted, amber TM is OME.',
    'H66.90',
  ),

  'iron-deficiency-anemia-peds': ped(
    'iron-deficiency-anemia-peds', 'Iron Deficiency Anemia in Children', 'pediatric-condition',
    'Most common nutritional deficiency in children; associated with excessive cow milk intake and poor dietary iron.',
    ['Screen at 12 months with hemoglobin; high-risk groups earlier', 'Risk factors: excessive cow milk (>24 oz/day), prolonged exclusive breastfeeding without supplementation, prematurity', 'Low ferritin is the earliest lab finding; microcytic hypochromic anemia develops later', 'Treatment: oral ferrous sulfate 3-6 mg/kg/day elemental iron for 3 months', 'Limit cow milk to 16-24 oz/day and encourage iron-rich foods'],
    'A trial of oral iron with reticulocyte response in 48-72 hours and hemoglobin rise by 1 g/dL in 4 weeks confirms iron deficiency anemia and avoids the need for extensive workup.',
    'D50.9',
  ),

  'childhood-obesity': ped(
    'childhood-obesity', 'Childhood Obesity', 'pediatric-condition',
    'BMI >=95th percentile for age and sex; affects ~20% of US children and increases risk of type 2 diabetes, NAFLD, and psychosocial morbidity.',
    ['Overweight: BMI 85-94th percentile; Obese: >=95th percentile; Severe: >=120% of 95th percentile', 'Screen for comorbidities: fasting glucose/HbA1c, lipids, ALT at age >=10 if obese', 'Structured weight management: family-based behavioral intervention is first-line', 'Pharmacotherapy (>=12 years) and bariatric surgery (>=13 years with severe obesity) per AAP 2023', 'Avoid stigmatizing language; use "BMI in the obese range" rather than "you are obese"'],
    'The AAP 2023 guidelines represent a paradigm shift: they recommend intensive behavioral intervention and earlier consideration of pharmacotherapy and surgery rather than "watchful waiting" for childhood obesity.',
    'E66.01',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

export function getPediatricsEntry(id: string): PediatricsEntry | undefined {
  return PEDIATRICS_ENTRIES[id];
}

export function searchPediatrics(query: string): PediatricsEntry[] {
  const q = query.toLowerCase();
  return Object.values(PEDIATRICS_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.category.includes(q) ||
    e.icdCode.toLowerCase().includes(q) ||
    e.keyPoints.some(k => k.toLowerCase().includes(q)) ||
    e.clinicalPearl.toLowerCase().includes(q),
  );
}

export function getPediatricsByCategory(cat: PediatricsCategory): PediatricsEntry[] {
  return Object.values(PEDIATRICS_ENTRIES).filter(e => e.category === cat);
}

export function getPediatricsCount(): number {
  return Object.keys(PEDIATRICS_ENTRIES).length;
}
