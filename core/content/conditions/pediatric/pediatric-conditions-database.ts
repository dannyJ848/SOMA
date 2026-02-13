/**
 * Pediatric Conditions Database
 *
 * Comprehensive reference of 40+ common pediatric conditions with
 * clinical summaries, parent guidance, and age-group classifications.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PediatricConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  ageGroup: 'neonate' | 'infant' | 'toddler' | 'child' | 'adolescent' | 'all-pediatric';
  category: string;
  icd11: string;
  prevalence: string;
  presentation: string;
  diagnosis: string;
  treatment: string;
  whenToWorry: string;
  homeManagement: string;
  prevention: string;
  prognosis: string;
  parentTip: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

type AgeGroup = PediatricConditionEntry['ageGroup'];

function pc(
  id: string, name: string, nameEs: string,
  ageGroup: AgeGroup, category: string, icd11: string,
  prevalence: string, presentation: string, diagnosis: string,
  treatment: string, whenToWorry: string, homeManagement: string,
  prevention: string, prognosis: string, parentTip: string,
): PediatricConditionEntry {
  return {
    id, name, nameEs, ageGroup, category, icd11,
    prevalence, presentation, diagnosis, treatment,
    whenToWorry, homeManagement, prevention, prognosis, parentTip,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const PEDIATRIC_CONDITIONS: Record<string, PediatricConditionEntry> = {

  // ---- Infectious (8) ----------------------------------------------------

  'otitis-media': pc(
    'otitis-media', 'Otitis Media (Ear Infection)', 'Otitis media (infeccion de oido)',
    'toddler', 'infectious', 'AB10',
    '80% of children by age 3',
    'Ear pain, tugging at ear, fever, irritability, trouble sleeping, fluid drainage from ear.',
    'Otoscopy showing bulging, erythematous tympanic membrane; pneumatic otoscopy for reduced mobility.',
    'Observation for mild cases in children >2y; amoxicillin 80-90 mg/kg/day for 10 days as first-line antibiotic.',
    'Fever >102.2F persisting >48h on antibiotics, ear drainage with blood, hearing loss, facial weakness, or neck stiffness.',
    'Warm compress on affected ear, age-appropriate pain relief (acetaminophen/ibuprofen), elevate head during sleep.',
    'Breastfeeding, avoid secondhand smoke, keep vaccinations current (PCV13, flu), limit pacifier use after 6 months.',
    'Excellent; most resolve within days. Recurrent episodes may need tympanostomy tubes.',
    'Do not put anything in the ear canal. A child pulling at their ear does not always mean infection—teething can cause similar behavior.',
  ),

  'croup': pc(
    'croup', 'Croup (Laryngotracheobronchitis)', 'Crup (laringotraqueobronquitis)',
    'toddler', 'infectious', 'CA07',
    '~3% of children aged 6 mo–3 yr annually',
    'Barky "seal-like" cough, hoarse voice, inspiratory stridor, low-grade fever; worse at night.',
    'Clinical diagnosis based on characteristic cough and stridor; neck X-ray (steeple sign) if uncertain.',
    'Single dose dexamethasone 0.6 mg/kg; nebulized epinephrine for moderate-severe cases; cool mist humidifier.',
    'Stridor at rest that does not improve, difficulty breathing or swallowing, drooling, bluish lips, high fever >104F.',
    'Cool night air or steam from a hot shower, keep child calm (crying worsens symptoms), upright positioning.',
    'Hand hygiene, avoid sick contacts; no specific vaccine for parainfluenza virus.',
    'Excellent; most cases are mild and resolve in 3–5 days. Severe croup requiring hospitalization is uncommon.',
    'If your child wakes with a barky cough, try stepping outside into cool air for 10–15 minutes—this often provides quick relief.',
  ),

  'bronchiolitis': pc(
    'bronchiolitis', 'Bronchiolitis (RSV)', 'Bronquiolitis (VRS)',
    'infant', 'infectious', 'CA43',
    'Nearly all children infected with RSV by age 2; ~3% hospitalized',
    'Rhinorrhea, cough, wheezing, tachypnea, difficulty feeding, nasal flaring, retractions; peaks at days 3–5.',
    'Clinical diagnosis; RSV rapid antigen test or PCR for confirmation; chest X-ray shows hyperinflation if obtained.',
    'Supportive: nasal suctioning, supplemental O2 if SpO2 <90%, IV fluids if poor intake. Nirsevimab for prevention in eligible infants.',
    'Breathing rate >60/min, persistent retractions, apneic episodes, refusing feeds, cyanosis, age <12 weeks.',
    'Frequent nasal suctioning with bulb syringe, small frequent feeds, elevate head of crib, run cool-mist humidifier.',
    'Nirsevimab (monoclonal antibody) for infants; hand hygiene; avoid sick contacts; no daycare when symptomatic.',
    'Most improve in 7–10 days; peak severity at days 3–5. Premature infants and those with heart/lung disease at higher risk.',
    'Watch breathing, not just listening to the cough. Count breaths per minute when baby is calm—over 60 is a reason to call the doctor.',
  ),

  'hand-foot-mouth': pc(
    'hand-foot-mouth', 'Hand-Foot-and-Mouth Disease', 'Enfermedad de mano-pie-boca',
    'toddler', 'infectious', '1F05',
    'Extremely common; outbreaks in daycare/preschool settings, peak summer-fall',
    'Fever, painful mouth sores (anterior oral cavity), vesicular rash on palms, soles, and sometimes buttocks.',
    'Clinical diagnosis based on characteristic distribution of lesions; rarely requires lab testing.',
    'Supportive care: analgesics for pain/fever, cold foods and fluids; avoid acidic foods. No antiviral needed.',
    'Unable to drink fluids for >12 hours, signs of dehydration, high fever >5 days, neck stiffness, lethargy.',
    'Offer cold soft foods (popsicles, yogurt), avoid spicy/acidic foods, magic mouthwash (equal parts Maalox/diphenhydramine) for older children.',
    'Frequent handwashing, disinfect surfaces, keep child home until fever-free and blisters crusted.',
    'Self-limited in 7–10 days. Nail shedding may occur weeks later (harmless). Rarely causes viral meningitis.',
    'Dehydration from mouth pain is the main risk. Focus on getting any fluids in—popsicles count!',
  ),

  'fifth-disease': pc(
    'fifth-disease', 'Fifth Disease (Erythema Infectiosum)', 'Quinta enfermedad (eritema infeccioso)',
    'child', 'infectious', '1F01.0',
    'Common in school-age children; outbreaks in late winter-spring',
    'Initial mild cold symptoms, then bright red "slapped-cheek" rash, followed by lacy reticular rash on trunk/extremities.',
    'Clinical diagnosis by rash appearance; parvovirus B19 IgM serology if needed (pregnancy, immunocompromised).',
    'Supportive only: analgesics for joint pain/fever. No antiviral. Child is no longer contagious once rash appears.',
    'Child with sickle cell disease or chronic anemia (aplastic crisis risk), pregnant contacts, persistent joint swelling.',
    'Comfort measures for mild symptoms; rash may wax and wane with heat/sun for weeks—this is normal.',
    'Limited; contagious before rash appears. Good handwashing. Notify school if diagnosed.',
    'Excellent in healthy children. Rash may recur for weeks but is benign. Risk of fetal hydrops if maternal infection in pregnancy.',
    'By the time you see the slapped-cheek rash, your child is no longer contagious and can return to school.',
  ),

  'roseola': pc(
    'roseola', 'Roseola Infantum (Sixth Disease)', 'Roseola infantil (sexta enfermedad)',
    'infant', 'infectious', '1F00.1',
    'Very common; ~90% of children infected by age 2',
    'High fever (often 103–105F) for 3–5 days, then sudden defervescence followed by diffuse pink maculopapular rash.',
    'Clinical diagnosis by characteristic fever-then-rash pattern; HHV-6 PCR rarely needed.',
    'Supportive: antipyretics for fever comfort; hydration. Rash requires no treatment.',
    'Febrile seizure during high fever, bulging fontanelle, persistent lethargy, fever >7 days.',
    'Maintain hydration, dress lightly during fever, tepid baths if uncomfortable. Rash is not itchy—no treatment needed.',
    'Difficult to prevent; transmitted via saliva. Avoid sharing cups/utensils.',
    'Excellent; self-limited. Once rash appears, illness is resolving. Febrile seizures may occur but are usually benign.',
    'The rash is actually the good news—it means the fever is over and your child is getting better.',
  ),

  'strep-pharyngitis': pc(
    'strep-pharyngitis', 'Strep Pharyngitis (Strep Throat)', 'Faringitis estreptococica',
    'child', 'infectious', 'CA03',
    '15–30% of pharyngitis in children aged 5–15 years',
    'Sudden sore throat, fever, headache, abdominal pain, tonsillar exudates, palatal petechiae, tender anterior cervical lymph nodes. Absence of cough/rhinorrhea.',
    'Rapid strep antigen test (90–95% specific); throat culture if rapid test negative in children. Centor/McIsaac score.',
    'Penicillin V or amoxicillin for 10 days; azithromycin if penicillin-allergic. Symptom relief in 24–48h.',
    'Difficulty breathing or swallowing, drooling, muffled voice ("hot potato"), inability to open mouth, persistent fever after 48h on antibiotics.',
    'Soft cool foods, warm salt water gargles (if old enough), analgesics for pain, encourage fluids.',
    'Hand hygiene, replace toothbrush after treatment, do not share utensils. No vaccine available.',
    'Full recovery with antibiotics. Prevents rheumatic fever and suppurative complications. Return to school after 24h on antibiotics.',
    'Complete the full course of antibiotics even if your child feels better in 2 days—this prevents rheumatic fever.',
  ),

  'gastroenteritis': pc(
    'gastroenteritis', 'Acute Gastroenteritis', 'Gastroenteritis aguda',
    'all-pediatric', 'infectious', 'DA63',
    'Leading cause of pediatric ER visits; rotavirus incidence greatly reduced by vaccination',
    'Vomiting, watery diarrhea, abdominal cramps, low-grade fever, decreased appetite. Viral most common.',
    'Clinical diagnosis; stool studies only if bloody diarrhea, prolonged course, or travel history.',
    'Oral rehydration therapy (ORT) with Pedialyte; continue age-appropriate diet; ondansetron for vomiting if needed to allow ORT.',
    'Unable to keep fluids down >12h, bloody stool, no urine >8h, sunken eyes/fontanelle, lethargy, persistent high fever.',
    'Small frequent sips of ORT (1 tsp every 1–2 min), BRAT diet once tolerating fluids, avoid juice and sugary drinks.',
    'Rotavirus vaccine, hand hygiene, safe food handling, avoid contaminated water.',
    'Most viral gastroenteritis resolves in 3–7 days. Dehydration is the main risk, especially in infants.',
    'Do not give anti-diarrheal medications to young children. Focus on replacing fluids—small sips beat large gulps.',
  ),

  // ---- Respiratory (4) ---------------------------------------------------

  'pediatric-asthma': pc(
    'pediatric-asthma', 'Pediatric Asthma', 'Asma pediatrica',
    'child', 'respiratory', 'CA23',
    'Most common chronic childhood disease; ~8% of US children',
    'Recurrent wheezing, cough (especially nighttime/exercise), chest tightness, shortness of breath; triggered by allergens, infections, exercise.',
    'Spirometry (age >5), bronchodilator reversibility, clinical history of recurrent episodes. Trial of therapy in younger children.',
    'Quick-relief: albuterol inhaler; controller: low-dose ICS (fluticasone, budesonide); step-up therapy per NAEPP guidelines.',
    'Using rescue inhaler >2x/week, retractions, unable to speak in sentences, no improvement after albuterol, bluish lips.',
    'Identify and avoid triggers, use spacer with inhaler, follow asthma action plan, keep home dust-free.',
    'Allergen avoidance, no smoking in home, flu vaccination, early controller therapy to prevent remodeling.',
    'Many children improve with proper management; some outgrow symptoms. Poorly controlled asthma can limit activity and cause airway remodeling.',
    'Every child with asthma should have a written asthma action plan with green/yellow/red zones posted where caregivers can see it.',
  ),

  'reactive-airway': pc(
    'reactive-airway', 'Reactive Airway Disease', 'Enfermedad reactiva de las vias aereas',
    'infant', 'respiratory', 'CA23.Z',
    'Common in children <5 with recurrent wheezing',
    'Wheezing episodes with viral infections, cough, mild respiratory distress; often diagnosed when too young for formal asthma diagnosis.',
    'Clinical diagnosis based on recurrent wheezing episodes; no definitive test in children <5. Modified Asthma Predictive Index.',
    'Albuterol for acute episodes; trial of ICS or montelukast for frequent episodes; reassess at age 5 with spirometry.',
    'Persistent wheezing unresponsive to bronchodilator, poor feeding, retractions, oxygen desaturation, lethargy.',
    'Keep child upright during episodes, use nebulizer as prescribed, suction nasal secretions, humidified air.',
    'Avoid smoke exposure, reduce viral illness exposure, breastfeeding may be protective.',
    'Many children with reactive airway disease outgrow symptoms by school age. Persistent symptoms may indicate true asthma.',
    'Not every wheeze is asthma. In young children, "reactive airway disease" is used until they are old enough for formal testing.',
  ),

  'foreign-body-aspiration': pc(
    'foreign-body-aspiration', 'Foreign Body Aspiration', 'Aspiracion de cuerpo extrano',
    'toddler', 'respiratory', 'CB41',
    'Peak incidence ages 1–3 years; leading cause of accidental death in children <1 year',
    'Sudden choking, coughing, unilateral wheezing, stridor; may have witnessed event. Delayed: recurrent pneumonia, persistent cough.',
    'Chest X-ray (inspiratory/expiratory views showing air trapping); rigid bronchoscopy is both diagnostic and therapeutic.',
    'Rigid bronchoscopy for removal; Heimlich maneuver/back blows for acute complete obstruction; observation if partial and stable.',
    'Complete airway obstruction (unable to cry/cough/breathe), cyanosis, sudden onset stridor, unexplained recurrent pneumonia.',
    'If child is coughing forcefully, do not interfere—let them cough. Call 911 for complete obstruction.',
    'Supervise mealtimes, cut food into small pieces, avoid nuts/grapes/hot dogs/popcorn for children <4, keep small objects out of reach.',
    'Excellent if removed promptly. Delayed diagnosis can lead to bronchiectasis or recurrent pneumonia.',
    'Learn infant/child CPR and choking first aid. Keep small batteries, coins, and toy parts away from toddlers.',
  ),

  'pertussis': pc(
    'pertussis', 'Pertussis (Whooping Cough)', 'Tos ferina',
    'all-pediatric', 'respiratory', '1C12',
    'Resurging despite vaccination; ~18,000 US cases/year; infants at highest risk',
    'Catarrhal phase (1–2 wk): mild cold. Paroxysmal phase (2–8 wk): severe coughing fits with inspiratory "whoop," post-tussive vomiting. Young infants may present with apnea instead.',
    'Nasopharyngeal PCR (gold standard); culture (slow); elevated lymphocyte count; clinical suspicion critical.',
    'Azithromycin (or TMP-SMX if allergic); supportive care; hospitalize infants <6 months. Treatment reduces transmission.',
    'Apnea, cyanosis during coughing spells, inability to feed, infant <3 months with any cough illness, dehydration.',
    'Small frequent meals after cough paroxysms, avoid triggers (dust, smoke), gentle nasal suction for infants.',
    'DTaP vaccine series for children; Tdap booster for adolescents/adults; maternal Tdap during each pregnancy (cocooning strategy).',
    'Recovery takes weeks ("100-day cough"). Infants have highest morbidity/mortality. Older children and adults typically recover fully.',
    'Vaccination is the best protection. Pregnant women should get Tdap in each pregnancy to pass antibodies to their newborn.',
  ),

  // ---- GI (4) ------------------------------------------------------------

  'pyloric-stenosis': pc(
    'pyloric-stenosis', 'Pyloric Stenosis', 'Estenosis pilorica',
    'neonate', 'gastrointestinal', 'LB11.0',
    '2–5 per 1,000 live births; more common in firstborn males',
    'Progressive nonbilious projectile vomiting starting at 2–6 weeks of age, hungry after vomiting ("hungry vomiter"), weight loss, dehydration.',
    'Abdominal ultrasound (pyloric muscle thickness >3mm, length >15mm); palpable "olive" mass in RUQ; hypochloremic hypokalemic metabolic alkalosis.',
    'Surgical pyloromyotomy (Ramstedt procedure) after fluid/electrolyte correction. No medical alternative.',
    'Projectile vomiting in a newborn, poor weight gain, dehydration signs, decreased wet diapers, lethargy.',
    'Pre-surgery: small frequent feeds may be attempted; keep infant upright after feeds. Post-surgery: gradual refeeding per surgeon protocol.',
    'No known prevention; genetic predisposition; erythromycin exposure in early life may increase risk.',
    'Excellent after surgery; most infants feed normally within 24–48 hours post-op. Cure rate approaches 100%.',
    'Projectile vomiting that gets worse over days in a young infant should be evaluated urgently—pyloric stenosis is fixable with surgery.',
  ),

  'intussusception': pc(
    'intussusception', 'Intussusception', 'Invaginacion intestinal',
    'infant', 'gastrointestinal', 'DA93',
    '~60 per 100,000 children <1 year; peak 5–9 months',
    'Sudden intermittent colicky abdominal pain (drawing up legs), vomiting, "currant jelly" stool (late finding), sausage-shaped mass in RUQ, lethargy between episodes.',
    'Abdominal ultrasound (target/donut sign); air or contrast enema is both diagnostic and therapeutic.',
    'Air or hydrostatic enema reduction (80–95% success); surgery if enema fails, peritonitis, or perforation.',
    'Severe persistent abdominal pain, bilious (green) vomiting, bloody stool, distended abdomen, lethargy/pallor.',
    'Keep child NPO if suspected; this is an emergency requiring immediate medical evaluation.',
    'No reliable prevention; prompt attention to symptoms. Post-rotavirus vaccine risk is minimally elevated.',
    'Excellent if reduced promptly. 5–10% recurrence rate. Surgical cases also have good outcomes.',
    'Intermittent screaming episodes with legs drawn up and unusual lethargy between episodes is a pattern to take seriously—go to the ER.',
  ),

  'pediatric-constipation': pc(
    'pediatric-constipation', 'Functional Constipation (Pediatric)', 'Estrenimiento funcional (pediatrico)',
    'all-pediatric', 'gastrointestinal', 'ME05.1',
    'Affects ~30% of children at some point; accounts for 3–5% of pediatric visits',
    'Infrequent large hard stools, straining, withholding behavior, abdominal pain, soiling (encopresis), decreased appetite.',
    'Clinical diagnosis (Rome IV criteria); rectal exam if needed; abdominal X-ray for fecal loading assessment; rarely need further workup.',
    'Disimpaction (PEG 3350 or enemas), then maintenance PEG 3350 0.4–0.8 g/kg/day, high-fiber diet, toilet-sitting routine, behavioral support.',
    'Abdominal distension with vomiting, failure to pass meconium in first 48h (Hirschsprung), bloody stool, weight loss, onset in infancy.',
    'Increase fiber/fluid intake, regular toilet time after meals (5–10 min), stool diary, positive reinforcement, foot stool for toilet.',
    'High-fiber diet from early age, adequate fluids, responsive toilet training (no pressure), regular physical activity.',
    'Most children improve with consistent management over months. Encopresis resolves as constipation is treated. Relapse is common.',
    'Soiling is not laziness—it is overflow from severe constipation. Be patient and supportive; punishment makes it worse.',
  ),

  'pediatric-appendicitis': pc(
    'pediatric-appendicitis', 'Appendicitis (Pediatric)', 'Apendicitis (pediatrica)',
    'child', 'gastrointestinal', 'DC11',
    'Most common surgical emergency in children; lifetime risk ~7%',
    'Periumbilical pain migrating to RLQ, anorexia, nausea/vomiting, low-grade fever. Young children may present atypically.',
    'Pediatric Appendicitis Score; ultrasound (first-line in peds); CT if US inconclusive; elevated WBC/CRP supportive.',
    'Appendectomy (laparoscopic preferred); non-operative antibiotics-first in selected uncomplicated cases (emerging evidence).',
    'Worsening abdominal pain especially with movement, rebound tenderness, rigid abdomen, high fever, bilious vomiting.',
    'NPO once suspected; no laxatives or heating pads over abdomen if undiagnosed. Seek medical evaluation promptly.',
    'No reliable prevention; prompt evaluation of persistent abdominal pain reduces perforation risk.',
    'Excellent after appendectomy. Perforation rate higher in young children due to delayed/atypical presentation (up to 80% in <5y).',
    'Children under 5 rarely present classically—if a young child has persistent belly pain and won\'t eat, get checked.',
  ),

  // ---- Neurologic (4) ----------------------------------------------------

  'febrile-seizures': pc(
    'febrile-seizures', 'Febrile Seizures', 'Convulsiones febriles',
    'toddler', 'neurologic', '8A65',
    '2–5% of children aged 6 months–5 years',
    'Generalized tonic-clonic seizure during fever (>100.4F), lasting <15 minutes (simple) or >15 min/focal/recurrent (complex).',
    'Clinical diagnosis; no routine labs, EEG, or imaging for simple febrile seizures. Workup for meningitis if clinical concern.',
    'Seizure first aid (protect from injury, position on side); antipyretics for comfort (do not prevent recurrence); no daily anticonvulsants for simple FS.',
    'Seizure lasting >5 minutes, multiple seizures in 24h, focal features, post-ictal for >1 hour, stiff neck, petechial rash.',
    'Time the seizure, place child on side, do not put anything in mouth, clear surroundings, call 911 if >5 min.',
    'Antipyretics do not prevent febrile seizures but can improve comfort. No effective prevention for children prone to FS.',
    'Excellent; simple febrile seizures do not cause brain damage or epilepsy. 30% recurrence risk; slightly higher epilepsy risk with complex FS.',
    'A febrile seizure is terrifying to witness but rarely harmful. Time it, keep your child safe, and call your doctor.',
  ),

  'adhd': pc(
    'adhd', 'ADHD (Attention-Deficit/Hyperactivity Disorder)', 'TDAH (Trastorno por deficit de atencion e hiperactividad)',
    'child', 'neurologic', '6A05',
    '~9.4% of US children aged 2–17; boys diagnosed 2x more than girls',
    'Inattention (difficulty focusing, forgetful, disorganized), hyperactivity (fidgeting, unable to sit still), impulsivity (interrupting, difficulty waiting). Symptoms present before age 12 in 2+ settings.',
    'DSM-5 criteria; standardized rating scales (Vanderbilt, Conners) from parents and teachers; rule out anxiety, learning disabilities, sleep disorders.',
    'Ages 4–5: behavioral therapy first. Ages 6+: stimulant medication (methylphenidate, amphetamines) + behavioral therapy. Monitor growth, BP, HR.',
    'Talk of self-harm, severe aggression, psychotic symptoms, cardiac symptoms on medication, substance misuse.',
    'Structured routines, clear expectations, break tasks into small steps, positive reinforcement, minimize distractions, regular exercise.',
    'No proven prevention; early intervention and supportive environment improve outcomes.',
    'Chronic condition; many develop coping strategies. ~60% continue to have symptoms into adulthood. Treatment significantly improves function.',
    'ADHD is a brain-based condition, not a discipline problem. The right support can help your child thrive academically and socially.',
  ),

  'autism-spectrum': pc(
    'autism-spectrum', 'Autism Spectrum Disorder', 'Trastorno del espectro autista',
    'toddler', 'neurologic', '6A02',
    '~1 in 36 children (CDC 2023); boys diagnosed 4x more than girls',
    'Deficits in social communication (reduced eye contact, difficulty with conversation, limited gestures), restricted/repetitive behaviors (lining up toys, routines, sensory sensitivities). Signs often by 12–18 months.',
    'Developmental screening at 18 and 24 months (M-CHAT-R/F); comprehensive evaluation by developmental specialist; DSM-5 criteria.',
    'Early intensive behavioral intervention (ABA), speech therapy, occupational therapy, social skills training; medications for co-occurring symptoms only.',
    'Loss of previously acquired skills (regression), self-injurious behavior, severe aggression, seizures, complete absence of communication by age 2.',
    'Visual schedules, consistent routines, sensory-friendly environment, social stories, celebrate strengths.',
    'No prevention; early identification and intervention improve outcomes significantly. No link to vaccines.',
    'Wide spectrum; many individuals lead fulfilling independent lives. Early intervention (before age 3) yields the best outcomes.',
    'Early intervention is the most important factor. If you have concerns about your child\'s development, do not "wait and see"—ask for screening.',
  ),

  'pediatric-migraine': pc(
    'pediatric-migraine', 'Pediatric Migraine', 'Migrana pediatrica',
    'child', 'neurologic', '8A80.0',
    '~8% of children; increases with age; equal sex ratio before puberty',
    'Bilateral (not unilateral as in adults) pulsating headache, shorter duration (2–72h), nausea/vomiting, photo/phonophobia; child appears pale, wants to sleep.',
    'Clinical diagnosis (ICHD-3 criteria adapted for children); neuroimaging only if red flags present (focal neuro signs, papilledema, sudden worst headache).',
    'Acute: ibuprofen or acetaminophen early; triptans for adolescents. Preventive: lifestyle modifications, amitriptyline, topiramate, or propranolol if frequent.',
    'Worst headache of life, fever with headache/stiff neck, focal weakness, vision loss, confusion, headaches waking from sleep, progressive worsening.',
    'Dark quiet room, cold compress, adequate sleep, regular meals, hydration, headache diary to identify triggers.',
    'Regular sleep schedule, adequate hydration, regular exercise, stress management, avoid known triggers (skipped meals, screen time).',
    'Many children improve through adolescence. Proper management reduces frequency and disability. ~50% experience remission.',
    'A headache diary helps identify patterns. Common triggers in kids: skipping meals, too little sleep, dehydration, and screen overuse.',
  ),

  // ---- Dermatologic (4) --------------------------------------------------

  'atopic-dermatitis': pc(
    'atopic-dermatitis', 'Eczema (Atopic Dermatitis)', 'Eccema (dermatitis atopica)',
    'infant', 'dermatologic', 'EA80',
    '10–20% of children; onset usually before age 5',
    'Intensely itchy, dry patches; infants: face/scalp/extensor surfaces; older children: flexural areas (antecubital, popliteal). Chronic relapsing course.',
    'Clinical diagnosis (Hanifin-Rajka criteria); no routine allergy testing unless suspected food trigger; skin biopsy rarely needed.',
    'Emollients (cornerstone), topical corticosteroids (low-potency for face/folds), calcineurin inhibitors (tacrolimus/pimecrolimus), dupilumab for severe.',
    'Widespread infected eczema (honey-colored crust, fever), eczema herpeticum (punched-out vesicles), severe uncontrolled flares, sleep disruption.',
    'Lukewarm baths (soak and seal), fragrance-free thick emollient within 3 min of bath, cotton clothing, keep nails short, avoid irritants.',
    'Daily moisturizing from birth may reduce incidence; avoid harsh soaps; breastfeeding may be protective; manage dust mites/allergens.',
    'Most children improve by adolescence; ~60% have significant improvement by teens. Atopic march: may develop allergic rhinitis/asthma.',
    'Moisturize, moisturize, moisturize. Thick cream or ointment applied right after bath is the single most important thing you can do.',
  ),

  'diaper-rash': pc(
    'diaper-rash', 'Diaper Dermatitis', 'Dermatitis del panol',
    'infant', 'dermatologic', 'EH43',
    'Affects ~50% of infants at some point; peak 9–12 months',
    'Erythema in diaper area, papules, maceration; spares skin folds (irritant) vs. involves folds (candidal—satellite lesions).',
    'Clinical diagnosis; KOH prep if candidal suspected (satellite papules, beefy red); consider contact dermatitis or psoriasis if persistent.',
    'Frequent diaper changes, barrier cream (zinc oxide/petrolatum), air drying; topical antifungal (nystatin/clotrimazole) if candidal.',
    'Blistering or bleeding rash, fever with rash, rash extending beyond diaper area, no improvement after 7 days of treatment.',
    'Change diapers frequently, use warm water (no wipes) during flare, apply thick barrier cream, allow diaper-free time.',
    'Frequent diaper changes, barrier cream with every change, avoid overly tight diapers, treat diarrhea promptly.',
    'Excellent; most irritant diaper rash resolves in 3–5 days with proper care. Candidal may take 7–14 days with antifungal.',
    'Zinc oxide cream is your best friend. Apply it thick—like frosting a cake—at every diaper change during a flare.',
  ),

  'impetigo': pc(
    'impetigo', 'Impetigo', 'Impetigo',
    'child', 'dermatologic', '1B73',
    'Most common bacterial skin infection in children; peak ages 2–5',
    'Honey-colored crusted lesions (nonbullous, most common) or fluid-filled blisters (bullous); typically face/extremities; contagious.',
    'Clinical diagnosis by appearance; wound culture if recurrent or MRSA suspected; no blood tests needed.',
    'Limited: topical mupirocin or retapamulin. Extensive: oral cephalexin or dicloxacillin; TMP-SMX or clindamycin if MRSA.',
    'Rapidly spreading despite treatment, deep tissue involvement (ecthyma), fever/systemic symptoms, dark urine weeks later (post-strep GN).',
    'Gently wash crusts with soap/water, cover lesions to prevent spread, separate towels/linens, trim fingernails.',
    'Good hand hygiene, promptly clean cuts/scrapes, avoid sharing personal items, keep fingernails short.',
    'Resolves in 7–10 days with treatment. Monitor urine color for 4–6 weeks after (post-streptococcal glomerulonephritis risk).',
    'Impetigo is very contagious. Keep your child home until 24 hours on antibiotics and cover open sores.',
  ),

  'cradle-cap': pc(
    'cradle-cap', 'Cradle Cap (Seborrheic Dermatitis)', 'Costra lactea (dermatitis seborreica)',
    'neonate', 'dermatologic', 'EA81',
    'Affects ~10% of infants in first 3 months; very common',
    'Thick, yellowish, greasy, scaly patches on scalp; may extend to face, ears, neck folds. Not itchy in most cases.',
    'Clinical diagnosis; no testing needed. Distinguish from atopic dermatitis (itchy, dry) and tinea capitis (hair loss, lymphadenopathy).',
    'Gentle scalp massage with mineral/coconut oil, soft brush to loosen scales, mild baby shampoo; ketoconazole shampoo or low-potency topical steroid if persistent.',
    'Spreading rash with redness/weeping, hair loss, significant itching, or not improving by 6–12 months.',
    'Apply oil to scalp 15 min before bath, gently brush with soft-bristled brush, shampoo daily during flare, then 2–3x/week.',
    'No reliable prevention; keeping scalp clean may reduce severity.',
    'Excellent; usually resolves by 6–12 months without treatment. May recur briefly. Not a sign of poor hygiene.',
    'Cradle cap looks worse than it is. It does not bother your baby and is not caused by anything you did or did not do.',
  ),

  // ---- Developmental (4) -------------------------------------------------

  'failure-to-thrive': pc(
    'failure-to-thrive', 'Failure to Thrive', 'Retraso del crecimiento',
    'infant', 'developmental', 'QC40',
    '5–10% of children in primary care; higher in low-income populations',
    'Weight <3rd percentile or crossing 2 major percentile lines downward; may have poor feeding, developmental delay, irritability.',
    'Serial growth measurements (weight, length, head circumference plotted on WHO/CDC charts); calorie count; labs (CBC, CMP, TFTs, celiac, UA) as indicated.',
    'Increase caloric density of feeds, frequent feeding, nutritional supplementation; address underlying cause (medical, behavioral, psychosocial); multidisciplinary team.',
    'Severely underweight or dehydrated, signs of abuse/neglect, developmental regression, no catch-up growth after intervention.',
    'Offer calorie-dense foods, feed on demand for infants, structured mealtimes for toddlers, avoid force-feeding, consult WIC/nutrition support.',
    'Breastfeeding support, responsive feeding practices, nutritional education, food security resources, routine growth monitoring.',
    'Most children catch up with appropriate intervention. Critical to address in first 2 years when brain growth is most rapid.',
    'Growth is the best vital sign for infants. Regular well-child visits with weight checks catch this early—do not skip them.',
  ),

  'developmental-delay': pc(
    'developmental-delay', 'Global Developmental Delay', 'Retraso global del desarrollo',
    'toddler', 'developmental', 'MX40',
    '1–3% of children <5 years',
    'Not meeting milestones in 2+ domains (motor, speech/language, cognitive, social-emotional, adaptive). May present as late walking, no words by 18mo, poor social interaction.',
    'Developmental screening (ASQ-3, PEDS) at well-visits; formal developmental evaluation; genetic testing (chromosomal microarray), metabolic workup, brain MRI as indicated.',
    'Early intervention services (PT, OT, speech therapy, special education); address underlying etiology; family support and counseling.',
    'Loss of previously acquired skills (regression), seizures, dysmorphic features, family history of metabolic disease, progressive symptoms.',
    'Engage in developmental play, read aloud daily, limit screen time, provide responsive caregiving, use early intervention resources.',
    'Prenatal care, newborn screening, avoidance of teratogens, responsive parenting, early screening at well-child visits.',
    'Variable depending on cause and severity. Early intervention significantly improves outcomes across all etiologies.',
    'Trust your instincts. If something feels off, ask for a developmental evaluation. Early intervention before age 3 makes the biggest difference.',
  ),

  'speech-delay': pc(
    'speech-delay', 'Speech and Language Delay', 'Retraso del habla y lenguaje',
    'toddler', 'developmental', 'MA80',
    '5–8% of preschool children; boys more affected',
    'Expressive delay: <50 words at 24 months, no 2-word phrases by 24 months. Receptive delay: not following simple commands by 18 months. May have frustration/behavioral issues.',
    'Hearing test (audiometry) is first step; speech-language evaluation; screen for ASD (M-CHAT); developmental assessment.',
    'Speech-language therapy, parent coaching (language-rich environment), sign language as bridge, early intervention services; treat underlying cause (hearing loss, ASD).',
    'No babbling by 12 months, no words by 18 months, no 2-word phrases by 24 months, loss of language skills, not understanding simple requests.',
    'Narrate daily activities, read together daily, reduce screen time, expand on child\'s words, do not force speech, respond to all communication attempts.',
    'Talk and read to children from birth, limit screen time (none <18mo), hearing screen at birth, responsive communication.',
    'Late talkers (expressive-only delay): 50–70% catch up by school age. Receptive delays: need more intensive support. Outcomes improve with early intervention.',
    'Talk to your child constantly—narrate everything you do. "Late talkers" often catch up, but always get hearing checked first.',
  ),

  'learning-disabilities': pc(
    'learning-disabilities', 'Learning Disabilities', 'Discapacidades de aprendizaje',
    'child', 'developmental', '6A03',
    '5–15% of school-age children; dyslexia most common',
    'Difficulty with reading (dyslexia), writing (dysgraphia), or math (dyscalculia) despite adequate intelligence and instruction. May also have attention or behavioral concerns.',
    'Psychoeducational testing (IQ and achievement discrepancy model or RTI model); school-based evaluation; rule out vision/hearing problems, ADHD.',
    'Individualized Education Program (IEP) or 504 plan, specialized instruction, multisensory teaching methods, assistive technology, tutoring.',
    'Severe school avoidance, depression/anxiety about school, behavioral changes, declining performance despite support, talk of self-harm.',
    'Homework accommodations, break tasks into chunks, use strengths to support weaknesses, audiobooks, encourage effort over outcome.',
    'Early literacy exposure, phonological awareness activities in preschool, early screening and intervention.',
    'Lifelong condition but not a limitation on success. With proper support, most individuals develop effective compensatory strategies.',
    'A learning disability means your child\'s brain learns differently, not that they are less intelligent. Find what works for them.',
  ),

  // ---- Orthopedic (3) ----------------------------------------------------

  'growing-pains': pc(
    'growing-pains', 'Growing Pains', 'Dolores de crecimiento',
    'child', 'orthopedic', 'FB56.3',
    '25–40% of children aged 3–12 years',
    'Bilateral leg pain (thighs, shins, calves), typically in the evening/night, resolves by morning, does not cause limping; no swelling or redness.',
    'Clinical diagnosis of exclusion; normal physical exam, no limp, no joint swelling. Labs/imaging only if atypical features.',
    'Massage, warm compresses, stretching exercises; acetaminophen/ibuprofen for severe episodes; reassurance.',
    'Unilateral pain, limping, joint swelling/warmth, persistent daytime pain, fever, weight loss, waking with pain that worsens.',
    'Gentle massage of affected muscles, warm bath before bed, stretching routine, comfortable shoes, reassurance.',
    'Regular stretching and physical activity may reduce frequency.',
    'Benign and self-limited; resolves by adolescence. No long-term sequelae. Does not actually relate to growth rate.',
    'Growing pains always happen in muscles, never joints. If your child points to a joint, limps, or has swelling, see a doctor.',
  ),

  'nursemaids-elbow': pc(
    'nursemaids-elbow', 'Nursemaid\'s Elbow (Radial Head Subluxation)', 'Codo de ninera (subluxacion de la cabeza del radio)',
    'toddler', 'orthopedic', 'FB53.1',
    'Most common elbow injury in children <5 years',
    'Sudden refusal to use arm after pulling/lifting by hand, arm held at side slightly flexed and pronated, no swelling or deformity, cries with attempted movement.',
    'Clinical diagnosis based on mechanism and exam; X-rays usually not needed unless atypical. No fracture visible.',
    'Supination-flexion or hyperpronation maneuver (felt/audible click); child uses arm within minutes. No immobilization needed.',
    'Significant swelling, deformity, no improvement after reduction attempt, recurrent episodes (>3), mechanism involving a fall.',
    'Apply arm sling for comfort before medical evaluation; avoid lifting child by hands/wrists in the future.',
    'Lift children under the arms rather than by the hands/wrists; educate caregivers; gentle play.',
    'Excellent; immediate relief after reduction. Recurrence in ~20–30%. Ligament strengthens with age; rare after age 5.',
    'Never swing a child by the arms or pull them by one hand. Lift under the armpits to prevent this painful but fixable injury.',
  ),

  'scoliosis': pc(
    'scoliosis', 'Scoliosis Screening', 'Deteccion de escoliosis',
    'adolescent', 'orthopedic', 'FA30',
    'Adolescent idiopathic scoliosis affects 2–3% of children aged 10–16; girls more likely to progress',
    'Lateral spinal curvature; uneven shoulders/waistline, rib prominence on forward bend (Adam\'s test), one hip higher.',
    'Forward bend test (Adam\'s); scoliometer (>5-7 degrees refers for imaging); standing PA spine X-ray measures Cobb angle.',
    'Observation (<25 degrees, growing); bracing (25–45 degrees, growing); surgical fusion (>45–50 degrees or progressing). Physical therapy adjunctive.',
    'Rapid curve progression, neurologic symptoms (weakness, numbness, bowel/bladder changes), severe pain, onset before age 10.',
    'Encourage physical activity (does not worsen curve), good posture awareness, wear brace as prescribed, emotional support.',
    'No prevention for idiopathic scoliosis; screening at well-child visits during growth spurt detects early.',
    'Mild curves often require no treatment. Bracing prevents progression in ~70% of compliant patients. Post-surgical outcomes are excellent.',
    'Scoliosis screening is important during the growth spurt (ages 10–14). A backpack does NOT cause scoliosis.',
  ),

  // ---- Allergic (3) ------------------------------------------------------

  'food-allergies-pediatric': pc(
    'food-allergies-pediatric', 'Food Allergies (Pediatric)', 'Alergias alimentarias (pediatricas)',
    'all-pediatric', 'allergic', '4A80',
    '~8% of US children; peanut, milk, and egg most common',
    'Immediate (IgE-mediated): urticaria, vomiting, wheezing, anaphylaxis within minutes to 2 hours. Delayed: eczema flare, GI symptoms.',
    'Skin prick testing, serum specific IgE; oral food challenge (gold standard); component testing for risk stratification.',
    'Strict avoidance of allergen, epinephrine auto-injector prescribed, antihistamines for mild reactions; oral immunotherapy (OIT) for selected patients.',
    'Any prior anaphylaxis history, throat tightness, difficulty breathing, persistent vomiting, dizziness/fainting, swelling of tongue/lips.',
    'Read all food labels, educate child on allergens (age-appropriate), carry epinephrine always, allergy action plan for school.',
    'Early introduction of peanut (4–6 months per LEAP study), diverse diet in infancy, breastfeeding may be protective.',
    'Milk, egg, wheat, and soy allergies often outgrown by school age. Peanut, tree nut, fish, shellfish more likely to persist.',
    'Teach your child to say "I have a food allergy" and to never eat food without checking with a trusted adult first.',
  ),

  'allergic-rhinitis-pediatric': pc(
    'allergic-rhinitis-pediatric', 'Allergic Rhinitis (Pediatric)', 'Rinitis alergica (pediatrica)',
    'child', 'allergic', 'CA08',
    '~40% of children; often starts by age 6',
    'Nasal congestion, clear rhinorrhea, sneezing, itchy nose/eyes, "allergic salute" (rubbing nose upward), "allergic shiners" (dark circles), mouth breathing.',
    'Clinical diagnosis; skin prick testing or specific IgE for allergen identification; nasal smear (eosinophils).',
    'Intranasal corticosteroids (fluticasone, mometasone—first-line), oral antihistamines (cetirizine, loratadine), allergen avoidance; immunotherapy for refractory cases.',
    'Severe sleep disruption, impaired school performance, recurrent sinusitis or ear infections, asthma worsening.',
    'Allergen avoidance (HEPA filters, dust mite covers, close windows), nasal saline irrigation, keep windows closed during pollen season.',
    'Reduce allergen exposure, HEPA filters in bedroom, wash bedding in hot water weekly, keep pets out of bedroom.',
    'Chronic but manageable. Immunotherapy can provide long-term remission in 70–80%. Important to treat to prevent asthma worsening.',
    'Allergic rhinitis is not "just a cold." Untreated nasal allergies can worsen asthma and affect school performance and sleep.',
  ),

  'anaphylaxis-pediatric': pc(
    'anaphylaxis-pediatric', 'Anaphylaxis (Pediatric)', 'Anafilaxia (pediatrica)',
    'all-pediatric', 'allergic', '4A84',
    '~1 in 50 people; food is the most common trigger in children',
    'Rapid onset multi-system involvement: urticaria/flushing, angioedema, wheezing/stridor, hypotension, vomiting/diarrhea, dizziness. Can progress within minutes.',
    'Clinical diagnosis (NIAID/FAAN criteria); tryptase level if drawn within 4 hours; allergen testing after recovery.',
    'IM epinephrine (EpiPen Jr <30kg, EpiPen >30kg) immediately—thigh; repeat in 5–15 min if no improvement; call 911; observe 4–6h (biphasic risk).',
    'ANY suspected anaphylaxis is an emergency—give epinephrine first, call 911 second. Do not wait.',
    'Use epinephrine immediately, lay child flat with legs elevated (sit up if breathing difficulty), do NOT induce vomiting, go to ER even if improving.',
    'Strict allergen avoidance, carry 2 epinephrine auto-injectors at all times, medical alert bracelet, school anaphylaxis plan.',
    'Survival >98% when epinephrine given promptly. Biphasic reactions occur in 5–20% (symptoms return hours later). Lifelong vigilance needed.',
    'When in doubt, give the epinephrine. It is safer to give it unnecessarily than to delay when it is needed. There is no wrong time to use it.',
  ),

  // ---- Genetic/Congenital (3) --------------------------------------------

  'down-syndrome': pc(
    'down-syndrome', 'Down Syndrome (Trisomy 21)', 'Sindrome de Down (trisomia 21)',
    'all-pediatric', 'genetic-congenital', 'LD40.0',
    '~1 in 700 live births; most common chromosomal condition',
    'Hypotonia, flat facial profile, upslanting palpebral fissures, single palmar crease, congenital heart defects (~50%), intellectual disability (variable).',
    'Prenatal: cell-free DNA screening, nuchal translucency, quad screen; postnatal: karyotype confirmation. Echocardiogram at birth.',
    'AAP health supervision guidelines: cardiac evaluation, thyroid screening annually, hearing/vision testing, early intervention services, developmental support.',
    'Feeding difficulties, signs of heart failure (fast breathing, poor feeding, sweating), apnea, constipation, behavioral changes.',
    'Tummy time, early intervention therapies from birth, sign language as communication bridge, inclusive education, regular health screenings.',
    'Not preventable; occurs spontaneously. Genetic counseling for families. Maternal age >35 increases risk.',
    'Life expectancy ~60+ years with modern medical care. Many adults live semi-independently, hold jobs, and have meaningful relationships.',
    'Your child is a child first. Connect with other families and Down syndrome support organizations—their guidance is invaluable.',
  ),

  'congenital-heart-defects': pc(
    'congenital-heart-defects', 'Congenital Heart Defects Overview', 'Defectos cardiacos congenitos',
    'neonate', 'genetic-congenital', 'LA8Z',
    '~1% of live births; most common type of birth defect',
    'Variable: murmur, cyanosis, tachypnea, poor feeding, failure to thrive. Critical CHD may present with shock in first days of life.',
    'Pulse oximetry screening (>24h of life), echocardiogram, fetal echocardiography if prenatal concern, ECG, chest X-ray.',
    'Ranges from observation (small VSD) to surgical repair (TOF, TGA, HLHS); prostaglandin E1 for ductal-dependent lesions; catheter interventions.',
    'Cyanosis, rapid breathing at rest, poor feeding with sweating, poor weight gain, failure of pulse-ox screening, absent femoral pulses.',
    'Follow cardiologist feeding/activity recommendations, weigh regularly, learn CPR, recognize heart failure signs, ensure adequate calories.',
    'Folic acid supplementation, avoid teratogens (alcohol, certain medications), manage maternal diabetes, genetic counseling for recurrence risk.',
    'Depends on type. Simple defects (ASD, VSD) excellent prognosis. Complex defects: improved outcomes with modern surgery; most reach adulthood.',
    'Pulse oximetry screening at birth catches many critical heart defects. If your newborn appears dusky or has trouble feeding, speak up immediately.',
  ),

  'cleft-lip-palate': pc(
    'cleft-lip-palate', 'Cleft Lip and Palate', 'Labio leporino y paladar hendido',
    'neonate', 'genetic-congenital', 'LA40',
    '~1 in 700 births (cleft lip/palate); cleft palate alone ~1 in 2,000',
    'Visible cleft of lip (unilateral or bilateral) and/or palate; feeding difficulties, nasal regurgitation, eustachian tube dysfunction.',
    'Physical examination at birth; prenatal ultrasound may detect cleft lip. Evaluate for associated syndromes (Pierre Robin, 22q11.2).',
    'Multidisciplinary team: surgical repair (lip ~3 months, palate ~12 months), specialized feeding (special nipples/bottles), speech therapy, orthodontics, ENT follow-up.',
    'Severe feeding/weight gain problems, recurrent ear infections, aspiration/choking episodes, speech delay beyond expected post-repair timeline.',
    'Special feeding bottles (Haberman, Pigeon), upright feeding position, frequent burping, connect with cleft team before birth if prenatally diagnosed.',
    'Folic acid supplementation pre-conception, avoid smoking/alcohol in pregnancy, genetic counseling if family history.',
    'Excellent with modern surgical repair and multidisciplinary care. Speech outcomes improved with early palate repair. Multiple surgeries may be needed through adolescence.',
    'Connect with your cleft team early—they will guide you through feeding, surgery, and speech milestones. Outcomes are excellent.',
  ),

  // ---- Other (3) ---------------------------------------------------------

  'kawasaki-disease': pc(
    'kawasaki-disease', 'Kawasaki Disease', 'Enfermedad de Kawasaki',
    'toddler', 'other', 'EJ40',
    '~25 per 100,000 children <5 in the US; higher in Asian populations',
    'High fever >5 days, bilateral non-exudative conjunctivitis, polymorphous rash, strawberry tongue/cracked lips, extremity changes (edema, peeling), cervical lymphadenopathy.',
    'Clinical criteria (fever >5 days plus 4/5 features); elevated ESR/CRP; echocardiogram for coronary arteries; incomplete KD algorithm if <4 criteria.',
    'IVIG 2 g/kg + high-dose aspirin within 10 days of fever onset; switch to low-dose aspirin at defervescence; repeat IVIG or add corticosteroids/infliximab if refractory.',
    'Persistent fever after IVIG, chest pain, new onset of irritability, signs of coronary aneurysm on echo, peeling of fingers/toes.',
    'This is a hospital-managed condition. Post-discharge: follow aspirin regimen, keep all cardiology follow-ups, watch for fever recurrence.',
    'No known prevention; prompt diagnosis within 10 days of fever onset reduces coronary complications from 25% to <5%.',
    'Excellent with timely treatment; <5% develop coronary aneurysms with IVIG. Without treatment: 25% coronary aneurysm risk.',
    'Any child with high fever lasting more than 5 days and red eyes, rash, or swollen hands needs same-day evaluation.',
  ),

  'henoch-schonlein-purpura': pc(
    'henoch-schonlein-purpura', 'Henoch-Schonlein Purpura (IgA Vasculitis)', 'Purpura de Henoch-Schonlein (vasculitis IgA)',
    'child', 'other', '4A44.1',
    'Most common vasculitis in children; ~20 per 100,000; peak ages 3–10',
    'Palpable purpura (non-blanching) on buttocks/lower extremities, abdominal pain/vomiting, arthritis/arthralgia (knees/ankles), renal involvement (hematuria/proteinuria).',
    'Clinical diagnosis (EULAR/PRINTO criteria); urinalysis (hematuria, proteinuria); serum IgA may be elevated; renal biopsy if nephrotic-range proteinuria.',
    'Supportive for mild: NSAIDs for joint pain, rest. Corticosteroids for severe abdominal pain, orchitis, or significant renal involvement.',
    'Severe abdominal pain (intussusception risk), bloody stool, scrotal swelling/pain, decreased urine output, edema, persistent hypertension.',
    'Rest during acute phase, hydration, soft diet if abdominal pain, monitor urine for blood (dipstick at home), follow-up urinalysis for 6 months.',
    'No specific prevention; often follows upper respiratory infection. Prompt treatment of strep throat may reduce triggering.',
    'Self-limited in most children (4–6 weeks). 30–50% recur within 6 months. Renal involvement (<5% long-term kidney damage) determines prognosis.',
    'The rash looks alarming but the kidneys are what we watch. Check your child\'s urine with dipsticks as instructed for at least 6 months.',
  ),

  'iron-deficiency-anemia-pediatric': pc(
    'iron-deficiency-anemia-pediatric', 'Iron Deficiency Anemia (Pediatric)', 'Anemia por deficiencia de hierro (pediatrica)',
    'all-pediatric', 'other', '3A00',
    'Most common nutritional deficiency worldwide; ~8% of US toddlers',
    'Pallor, fatigue, irritability, poor appetite, pica (eating non-food items), pagophagia (ice craving), decreased attention/learning problems.',
    'CBC (microcytic hypochromic anemia), low ferritin (<12 ng/mL), low iron, elevated TIBC, low reticulocyte hemoglobin. Screen at 12 months.',
    'Oral ferrous sulfate 3–6 mg/kg/day elemental iron, given with vitamin C between meals; dietary counseling; recheck CBC in 4–8 weeks.',
    'Severe pallor, tachycardia, pica behavior, developmental regression, hemoglobin <7 g/dL, no response to iron after 4 weeks.',
    'Iron-rich foods (fortified cereals, meat, beans, spinach), pair with vitamin C, limit cow\'s milk to <24 oz/day after age 1, cook in cast iron.',
    'Iron-fortified formula/cereal, limit cow\'s milk, iron-rich complementary foods at 6 months, screen at-risk populations.',
    'Excellent with treatment; hemoglobin rises within 2–4 weeks. Continue iron 3 months after normalization to replenish stores.',
    'Too much cow\'s milk (>24 oz/day) is the most common cause in toddlers. Milk fills them up and blocks iron absorption.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single condition by ID. */
export function getPediatricCondition(id: string): PediatricConditionEntry | undefined {
  return PEDIATRIC_CONDITIONS[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchPediatricConditions(query: string): PediatricConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(PEDIATRIC_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.presentation.toLowerCase().includes(q) ||
    c.treatment.toLowerCase().includes(q),
  );
}

/** Filter conditions by age group. */
export function getPediatricByAgeGroup(
  ageGroup: PediatricConditionEntry['ageGroup'],
): PediatricConditionEntry[] {
  return Object.values(PEDIATRIC_CONDITIONS).filter(
    c => c.ageGroup === ageGroup || c.ageGroup === 'all-pediatric',
  );
}

/** Filter conditions by category. */
export function getPediatricByCategory(category: string): PediatricConditionEntry[] {
  return Object.values(PEDIATRIC_CONDITIONS).filter(c => c.category === category);
}

/** Return the total number of pediatric conditions in the database. */
export function getPediatricConditionCount(): number {
  return Object.keys(PEDIATRIC_CONDITIONS).length;
}
