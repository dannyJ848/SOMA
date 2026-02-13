/**
 * Infectious Conditions Database
 *
 * Comprehensive structured database of ~30 infectious disease conditions
 * organized by anatomical/clinical category for the SOMA medical education app.
 *
 * Categories: respiratory, urinary, skin-soft-tissue, cns, bloodstream,
 * bone-joint, gi, sexually-transmitted
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type InfectiousCondCategory =
  | 'respiratory'
  | 'urinary'
  | 'skin-soft-tissue'
  | 'cns'
  | 'bloodstream'
  | 'bone-joint'
  | 'gi'
  | 'sexually-transmitted';

export interface InfectiousConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: InfectiousCondCategory;
  icd11: string;
  organism: string;
  description: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
  emergencySigns: string[];
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const ic = (
  id: string,
  name: string,
  nameEs: string,
  category: InfectiousCondCategory,
  icd11: string,
  organism: string,
  description: string,
  clinicalFeatures: string[],
  diagnostics: string[],
  treatment: string[],
  complications: string[],
  patientExplanation: string,
  emergencySigns: string[],
): InfectiousConditionEntry => ({
  id,
  name,
  nameEs,
  category,
  icd11,
  organism,
  description,
  clinicalFeatures,
  diagnostics,
  treatment,
  complications,
  patientExplanation,
  emergencySigns,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const INFECTIOUS_CONDITIONS: Record<string, InfectiousConditionEntry> = {

  // =========================================================================
  // RESPIRATORY (5)
  // =========================================================================

  'community-acquired-pneumonia': ic(
    'community-acquired-pneumonia',
    'Community-Acquired Pneumonia',
    'Neumonía adquirida en la comunidad',
    'respiratory',
    'CA40',
    'Streptococcus pneumoniae, Haemophilus influenzae, Mycoplasma pneumoniae, viruses',
    'Infection of the lung parenchyma acquired outside of a healthcare facility, ranging from mild outpatient illness to severe sepsis requiring ICU admission.',
    ['Productive cough', 'Fever and chills', 'Pleuritic chest pain', 'Dyspnea', 'Crackles or bronchial breath sounds on auscultation', 'Tachycardia'],
    ['Chest X-ray (lobar consolidation or diffuse infiltrates)', 'CBC with differential', 'Blood cultures (if hospitalized)', 'Sputum Gram stain and culture', 'Procalcitonin level', 'Pneumonia severity index (PSI) or CURB-65 score'],
    ['Outpatient: amoxicillin or doxycycline', 'Outpatient with comorbidities: amoxicillin-clavulanate plus a macrolide, or a respiratory fluoroquinolone', 'Inpatient: beta-lactam plus macrolide, or respiratory fluoroquinolone', 'ICU: beta-lactam plus macrolide or fluoroquinolone; add MRSA coverage if risk factors'],
    ['Parapneumonic effusion or empyema', 'Lung abscess', 'Sepsis and septic shock', 'ARDS', 'Respiratory failure'],
    'Pneumonia is a lung infection that causes cough, fever, and difficulty breathing. Most people recover well with antibiotics, but it can be serious in older adults or those with other health problems.',
    ['Severe shortness of breath or inability to speak in full sentences', 'Confusion or altered mental status', 'Systolic blood pressure below 90 mmHg', 'Respiratory rate above 30 breaths per minute', 'Cyanosis (bluish lips or fingertips)'],
  ),

  'influenza': ic(
    'influenza',
    'Influenza',
    'Gripe / Influenza',
    'respiratory',
    'CA08.0',
    'Influenza A and B viruses',
    'Acute viral respiratory illness caused by influenza viruses, characterized by sudden onset of systemic and respiratory symptoms with seasonal epidemic patterns.',
    ['Abrupt onset of high fever', 'Myalgia and body aches', 'Headache', 'Dry cough', 'Sore throat', 'Fatigue and malaise', 'Rhinorrhea'],
    ['Rapid influenza diagnostic test (RIDT)', 'RT-PCR for influenza (gold standard)', 'Clinical diagnosis during peak season', 'Chest X-ray if pneumonia suspected'],
    ['Oseltamivir (Tamiflu) within 48 hours of symptom onset', 'Baloxavir marboxil (single-dose option)', 'Supportive care: fluids, antipyretics, rest', 'Annual influenza vaccination for prevention'],
    ['Secondary bacterial pneumonia', 'Myocarditis', 'Encephalitis', 'Rhabdomyolysis', 'Exacerbation of chronic conditions (COPD, asthma, heart failure)'],
    'The flu is a viral infection that causes fever, body aches, cough, and fatigue. It usually resolves in 1-2 weeks. Antiviral medicines work best if started within the first 2 days. Annual flu shots help prevent it.',
    ['Difficulty breathing or persistent chest pain', 'Confusion or inability to arouse', 'Severe vomiting preventing fluid intake', 'Symptoms that improve then return with worsening fever and cough'],
  ),

  'tuberculosis': ic(
    'tuberculosis',
    'Tuberculosis',
    'Tuberculosis',
    'respiratory',
    'CA01',
    'Mycobacterium tuberculosis',
    'Chronic granulomatous infection primarily affecting the lungs, transmitted via airborne droplets, with potential for latent infection reactivation years after initial exposure.',
    ['Chronic productive cough lasting more than 3 weeks', 'Hemoptysis', 'Night sweats', 'Unintentional weight loss', 'Low-grade fever', 'Upper lobe cavitary lesions on imaging'],
    ['Tuberculin skin test (TST / PPD)', 'Interferon-gamma release assay (IGRA)', 'Sputum acid-fast bacilli (AFB) smear and culture', 'Chest X-ray or CT', 'GeneXpert MTB/RIF for rapid molecular detection', 'Drug susceptibility testing'],
    ['Active TB: RIPE regimen (rifampin, isoniazid, pyrazinamide, ethambutol) for 2 months, then isoniazid and rifampin for 4 months', 'Latent TB: isoniazid for 9 months, or rifampin for 4 months, or isoniazid-rifapentine weekly for 12 weeks', 'DOT (directly observed therapy) recommended', 'MDR-TB requires individualized regimen with second-line agents'],
    ['Miliary (disseminated) tuberculosis', 'TB meningitis', 'Pott disease (spinal TB)', 'Massive hemoptysis', 'Bronchiectasis'],
    'Tuberculosis is a bacterial lung infection that spreads through the air when an infected person coughs. It can stay dormant for years. Treatment requires taking multiple medicines for at least 6 months to fully cure the infection.',
    ['Coughing up large amounts of blood', 'Severe headache with neck stiffness (possible TB meningitis)', 'Extreme weight loss and debility', 'Signs of respiratory distress'],
  ),

  'covid-19': ic(
    'covid-19',
    'COVID-19',
    'COVID-19',
    'respiratory',
    'RA01',
    'SARS-CoV-2',
    'Respiratory illness caused by the SARS-CoV-2 coronavirus, ranging from asymptomatic infection to severe pneumonia, ARDS, and multiorgan failure.',
    ['Fever or chills', 'Cough', 'Dyspnea', 'Fatigue', 'Anosmia or ageusia', 'Sore throat', 'Myalgia', 'GI symptoms (nausea, diarrhea)'],
    ['RT-PCR nasopharyngeal swab', 'Rapid antigen test', 'Chest CT (ground-glass opacities)', 'D-dimer, CRP, ferritin, LDH (severity markers)', 'Pulse oximetry'],
    ['Mild: supportive care, symptom management', 'Moderate-severe: dexamethasone, remdesivir', 'Anticoagulation for hospitalized patients', 'Nirmatrelvir-ritonavir (Paxlovid) for high-risk outpatients within 5 days', 'Vaccination for prevention'],
    ['ARDS', 'Venous thromboembolism', 'Myocarditis', 'Multisystem inflammatory syndrome (MIS)', 'Long COVID (post-acute sequelae)'],
    'COVID-19 is a respiratory virus infection. Most people have mild symptoms, but it can be serious. Vaccines greatly reduce the risk of severe illness. If you are high-risk, antiviral treatment started early can help.',
    ['Oxygen saturation below 94% on room air', 'Severe difficulty breathing', 'Persistent chest pain or pressure', 'Confusion', 'Cyanosis'],
  ),

  'acute-bronchitis': ic(
    'acute-bronchitis',
    'Acute Bronchitis',
    'Bronquitis aguda',
    'respiratory',
    'CA20',
    'Rhinovirus, influenza, parainfluenza, RSV, coronavirus; rarely Bordetella pertussis or Mycoplasma',
    'Self-limited inflammation of the tracheobronchial tree, predominantly viral in etiology, characterized by cough lasting up to 3 weeks without evidence of pneumonia.',
    ['Cough (may be productive or dry)', 'Low-grade fever', 'Chest discomfort or soreness with coughing', 'Wheezing or rhonchi', 'Fatigue', 'Upper respiratory prodrome (rhinorrhea, sore throat)'],
    ['Clinical diagnosis (no routine imaging needed)', 'Chest X-ray only if pneumonia suspected', 'Pertussis testing if cough exceeds 2 weeks with paroxysms', 'Influenza testing during flu season'],
    ['Supportive: hydration, rest, honey for cough', 'NSAIDs or acetaminophen for discomfort', 'Albuterol inhaler if significant wheezing', 'Antibiotics generally NOT indicated', 'Antitussives (dextromethorphan) for symptomatic relief'],
    ['Post-infectious cough lasting weeks', 'Secondary bacterial pneumonia (uncommon)', 'Exacerbation of asthma or COPD'],
    'Acute bronchitis is a chest cold caused by a virus. The main symptom is a cough that can last up to 3 weeks. Antibiotics do not help because it is viral. Rest, fluids, and cough medicine usually suffice.',
    ['High fever above 39 C persisting beyond 3 days', 'Bloody sputum', 'Severe dyspnea or worsening respiratory status'],
  ),

  // =========================================================================
  // URINARY (3)
  // =========================================================================

  'urinary-tract-infection': ic(
    'urinary-tract-infection',
    'Urinary Tract Infection (Cystitis)',
    'Infeccion de vias urinarias (Cistitis)',
    'urinary',
    'GC08',
    'Escherichia coli (75-95%), Klebsiella pneumoniae, Staphylococcus saprophyticus, Proteus mirabilis',
    'Bacterial infection of the lower urinary tract (bladder) presenting with dysuria, frequency, and urgency; one of the most common bacterial infections, especially in women.',
    ['Dysuria (painful urination)', 'Urinary frequency and urgency', 'Suprapubic pain or pressure', 'Hematuria', 'Cloudy or malodorous urine', 'Absence of vaginal discharge distinguishes from vaginitis'],
    ['Urinalysis (pyuria, leukocyte esterase, nitrites)', 'Urine culture and sensitivity (if complicated or recurrent)', 'Clinical diagnosis acceptable for uncomplicated cases in young women'],
    ['Uncomplicated: nitrofurantoin 100 mg BID x 5 days, or trimethoprim-sulfamethoxazole DS BID x 3 days, or fosfomycin single dose', 'Complicated: fluoroquinolone or broader-spectrum agent guided by culture', 'Phenazopyridine for symptomatic dysuria relief', 'Behavioral: adequate hydration, post-coital voiding'],
    ['Pyelonephritis (ascending infection)', 'Recurrent UTIs', 'Urosepsis', 'Renal abscess (rare)'],
    'A UTI is a bladder infection that causes burning when you urinate and the need to go frequently. It is very common, especially in women. A short course of antibiotics clears the infection. Drink plenty of water.',
    ['High fever with flank pain (suggests pyelonephritis)', 'Rigors or signs of sepsis', 'Inability to keep fluids or medications down'],
  ),

  'pyelonephritis': ic(
    'pyelonephritis',
    'Acute Pyelonephritis',
    'Pielonefritis aguda',
    'urinary',
    'GB10',
    'Escherichia coli (most common), Klebsiella, Proteus, Enterococcus',
    'Upper urinary tract infection involving the renal parenchyma and collecting system, typically resulting from ascending bacterial infection from the bladder.',
    ['Fever and chills', 'Flank pain or costovertebral angle tenderness', 'Nausea and vomiting', 'Dysuria and frequency (may overlap with cystitis)', 'Malaise and tachycardia'],
    ['Urinalysis (pyuria, bacteriuria, WBC casts)', 'Urine culture and sensitivity', 'Blood cultures if sepsis suspected', 'CBC, BMP, lactate', 'CT abdomen/pelvis with contrast if complicated or no improvement in 48-72 hours (rule out abscess or obstruction)'],
    ['Outpatient: ciprofloxacin 500 mg BID x 7 days or TMP-SMX DS BID x 14 days', 'Inpatient: IV ceftriaxone or fluoroquinolone; add ampicillin if Enterococcus suspected', 'Step down to oral once afebrile 24-48 hours', 'Relieve obstruction urgently if present (e.g., ureteral stent or nephrostomy)'],
    ['Renal abscess or perinephric abscess', 'Urosepsis', 'Emphysematous pyelonephritis (diabetics)', 'Chronic kidney damage with recurrence', 'Papillary necrosis'],
    'Pyelonephritis is a kidney infection, usually spreading up from a bladder infection. It causes high fever, back pain, and feeling very sick. It requires stronger antibiotics than a simple bladder infection and sometimes hospitalization.',
    ['Fever above 39 C with rigors', 'Inability to tolerate oral fluids or medications', 'Signs of sepsis (confusion, low blood pressure, rapid breathing)', 'Known urinary obstruction (kidney stone, pregnancy)'],
  ),

  'catheter-associated-uti': ic(
    'catheter-associated-uti',
    'Catheter-Associated Urinary Tract Infection',
    'Infeccion urinaria asociada a cateter',
    'urinary',
    'GC08.1',
    'E. coli, Klebsiella, Enterococcus, Pseudomonas aeruginosa, Candida species',
    'UTI occurring in a patient with an indwelling urinary catheter or within 48 hours of catheter removal, representing the most common healthcare-associated infection.',
    ['Fever without other identifiable source', 'Suprapubic or flank discomfort', 'New-onset confusion (in elderly)', 'Pyuria with bacteriuria', 'Often lacks classic lower tract symptoms due to catheter'],
    ['Urine culture obtained from freshly placed catheter (not the existing bag)', 'Urinalysis', 'Blood cultures if systemic signs', 'Exclude other infection sources'],
    ['Remove or replace catheter before starting antibiotics', 'Antibiotic choice guided by local antibiogram and culture', 'Duration 7 days (if prompt response) to 14 days', 'Avoid treatment of asymptomatic bacteriuria in catheterized patients', 'Prevention: minimize catheter use, aseptic insertion, daily assessment for removal'],
    ['Urosepsis', 'Catheter encrustation and obstruction', 'Bacteremia', 'Increased antimicrobial resistance'],
    'A catheter-related UTI happens when bacteria enter the bladder through a urinary catheter. The most important step is removing the catheter as soon as possible. Antibiotics treat the infection.',
    ['High fever or rigors', 'Low blood pressure or signs of sepsis', 'Catheter obstruction with no urine output'],
  ),

  // =========================================================================
  // SKIN & SOFT TISSUE (4)
  // =========================================================================

  'cellulitis': ic(
    'cellulitis',
    'Cellulitis',
    'Celulitis',
    'skin-soft-tissue',
    'DA62.0',
    'Streptococcus pyogenes (group A strep), Staphylococcus aureus (including MRSA)',
    'Acute spreading bacterial infection of the dermis and subcutaneous tissue presenting with erythema, warmth, swelling, and tenderness, most commonly affecting the lower extremities.',
    ['Expanding area of erythema with poorly defined borders', 'Warmth and tenderness', 'Edema', 'Fever and chills', 'Lymphangitic streaking', 'Regional lymphadenopathy'],
    ['Clinical diagnosis (imaging and labs rarely needed for uncomplicated cases)', 'Blood cultures if systemic toxicity', 'Ultrasound to evaluate for abscess', 'Wound culture if purulent drainage', 'Outline margin with skin marker to track progression'],
    ['Non-purulent: cephalexin 500 mg QID or dicloxacillin', 'MRSA risk: TMP-SMX DS or doxycycline', 'Severe: IV vancomycin plus piperacillin-tazobactam', 'Elevation of the affected limb', 'Treat underlying risk factors (tinea pedis, edema)'],
    ['Abscess formation', 'Necrotizing fasciitis', 'Bacteremia and sepsis', 'Recurrent cellulitis', 'Lymphedema'],
    'Cellulitis is a skin infection that causes redness, swelling, and warmth, usually on the legs. Bacteria enter through cuts or cracks in the skin. Antibiotics treat it, and keeping the area elevated helps healing.',
    ['Rapidly spreading redness with systemic toxicity', 'Crepitus or dusky discoloration (concerning for necrotizing fasciitis)', 'Pain out of proportion to exam findings', 'High fever with hemodynamic instability'],
  ),

  'abscess': ic(
    'abscess',
    'Skin Abscess',
    'Absceso cutaneo',
    'skin-soft-tissue',
    'DA62.3',
    'Staphylococcus aureus (including CA-MRSA), mixed anaerobes',
    'Localized collection of pus within the dermis or subcutaneous tissue, often arising from minor skin trauma or folliculitis, frequently caused by community-associated MRSA.',
    ['Painful, fluctuant, erythematous nodule', 'Warmth and swelling', 'Pointing or spontaneous drainage', 'Surrounding cellulitis may be present', 'Fever (in larger abscesses)'],
    ['Clinical diagnosis by physical exam', 'Bedside ultrasound to confirm fluid collection and guide drainage', 'Wound culture of purulent material', 'Blood cultures if systemic signs'],
    ['Incision and drainage (I&D) is primary treatment', 'Packing or loop drain for cavity', 'Antibiotics if surrounding cellulitis, systemic signs, or immunocompromised: TMP-SMX or doxycycline', 'Warm compresses for small early abscesses', 'Follow-up wound check in 48 hours'],
    ['Recurrence', 'Extension to deeper tissues', 'Bacteremia', 'MRSA colonization and household spread'],
    'A skin abscess is a pocket of pus under the skin, usually from a staph infection. The main treatment is draining it. Antibiotics alone without drainage are not effective. Keep the area clean and watch for recurrence.',
    ['Large abscess with high fever', 'Abscess near the spine, face, or groin', 'Rapidly worsening despite drainage', 'Signs of sepsis'],
  ),

  'necrotizing-fasciitis': ic(
    'necrotizing-fasciitis',
    'Necrotizing Fasciitis',
    'Fascitis necrotizante',
    'skin-soft-tissue',
    'DA62.5',
    'Type I: polymicrobial (anaerobes + gram-negatives + Enterococcus); Type II: Group A Streptococcus or S. aureus; Type III: Vibrio vulnificus (marine exposure)',
    'Rapidly progressive, life-threatening infection of the deep fascia and subcutaneous tissue with necrosis, requiring emergent surgical debridement. Mortality ranges from 20-40%.',
    ['Pain out of proportion to exam findings (early hallmark)', 'Rapidly spreading erythema and edema', 'Skin changes: dusky, violaceous patches, bullae, or crepitus', 'Systemic toxicity: fever, tachycardia, hypotension', 'Wooden-hard induration of subcutaneous tissue', 'Cutaneous anesthesia over affected area'],
    ['Clinical diagnosis; do NOT delay surgery for imaging', 'LRINEC score (Lab Risk Indicator for Necrotizing Fasciitis)', 'CT with contrast (gas in soft tissues)', 'Surgical exploration is both diagnostic and therapeutic', 'Blood cultures, CBC, CMP, lactate, CK, CRP'],
    ['Emergent surgical debridement (repeat as needed every 24-48 hours)', 'Broad-spectrum IV antibiotics: vancomycin plus piperacillin-tazobactam plus clindamycin', 'Clindamycin added for toxin suppression in streptococcal cases', 'ICU-level resuscitation', 'IVIG considered for streptococcal toxic shock'],
    ['Septic shock and multiorgan failure', 'Limb amputation', 'Extensive disfigurement requiring reconstructive surgery', 'Death (20-40% mortality even with treatment)', 'Long-term physical and psychological sequelae'],
    'Necrotizing fasciitis is a rare but extremely serious infection that destroys tissue under the skin and spreads very fast. It is a surgical emergency. Early surgery to remove dead tissue is the most important treatment.',
    ['Pain that is far worse than the skin looks', 'Rapidly worsening redness or swelling within hours', 'Skin blisters, dark patches, or crackling under the skin', 'High fever with confusion or low blood pressure'],
  ),

  'impetigo': ic(
    'impetigo',
    'Impetigo',
    'Impetigo',
    'skin-soft-tissue',
    'DA62.1',
    'Staphylococcus aureus, Streptococcus pyogenes (group A strep)',
    'Highly contagious superficial bacterial skin infection common in children, presenting as honey-crusted lesions (non-bullous) or fluid-filled blisters (bullous).',
    ['Honey-colored crusted lesions (non-bullous form)', 'Flaccid bullae that rupture easily (bullous form)', 'Erythematous base', 'Commonly on face, around nose and mouth', 'Pruritus', 'Regional lymphadenopathy'],
    ['Clinical diagnosis by appearance', 'Wound culture if treatment failure or recurrent', 'No routine lab work needed'],
    ['Limited disease: topical mupirocin or retapamulin TID x 5 days', 'Extensive disease: oral cephalexin or dicloxacillin x 7 days', 'MRSA suspected: TMP-SMX or doxycycline', 'Gentle cleansing with soap and water', 'Keep child home from school until 24 hours on antibiotics or lesions crusted'],
    ['Ecthyma (deeper ulcerative form)', 'Post-streptococcal glomerulonephritis (rare)', 'Cellulitis', 'Scarring'],
    'Impetigo is a common, contagious skin infection in children that causes crusty, honey-colored sores, often around the nose and mouth. It clears up with antibiotic cream or oral antibiotics. Good handwashing prevents spread.',
    ['Rapidly spreading lesions with fever', 'Signs of deeper infection (swelling, warmth, pain)', 'Dark or cola-colored urine after infection (possible kidney complication)'],
  ),

  // =========================================================================
  // CNS (3)
  // =========================================================================

  'bacterial-meningitis': ic(
    'bacterial-meningitis',
    'Bacterial Meningitis',
    'Meningitis bacteriana',
    'cns',
    'AB02',
    'Neonates: Group B Strep, E. coli, Listeria. Children: Neisseria meningitidis, Strep pneumoniae. Adults: Strep pneumoniae, N. meningitidis. Elderly/immunocompromised: Listeria monocytogenes',
    'Life-threatening infection of the meninges requiring emergent empiric antibiotics. Classic triad of fever, neck stiffness, and altered mental status is present in fewer than half of cases.',
    ['Fever', 'Headache (severe)', 'Nuchal rigidity (neck stiffness)', 'Altered mental status', 'Photophobia', 'Petechial or purpuric rash (meningococcal)', 'Kernig and Brudzinski signs', 'Nausea and vomiting', 'Seizures'],
    ['Lumbar puncture with CSF analysis (elevated WBC with neutrophil predominance, elevated protein, low glucose, positive Gram stain)', 'Blood cultures before antibiotics (but do NOT delay treatment for LP)', 'CSF bacterial culture', 'CSF PCR (multiplex meningitis panel)', 'CT head before LP if focal neurologic deficits, papilledema, or immunocompromised', 'Procalcitonin, CRP, lactate'],
    ['Empiric: vancomycin plus ceftriaxone (add ampicillin if Listeria risk)', 'Dexamethasone before or with first antibiotic dose (reduces mortality in pneumococcal meningitis)', 'Duration: 7-21 days depending on organism', 'Chemoprophylaxis for close contacts of meningococcal cases: rifampin, ciprofloxacin, or ceftriaxone', 'Vaccination: MenACWY, MenB, PCV, Hib'],
    ['Cerebral edema and herniation', 'Hydrocephalus', 'Seizures', 'Hearing loss (especially pneumococcal)', 'Cognitive and neurological deficits', 'Waterhouse-Friderichsen syndrome (adrenal hemorrhage in meningococcal sepsis)', 'Death (15-25% case fatality)'],
    'Bacterial meningitis is a serious infection of the membranes around the brain and spinal cord. It causes high fever, severe headache, and a stiff neck. It is a medical emergency requiring immediate IV antibiotics.',
    ['Severe headache with fever and stiff neck', 'Rash that does not blanch with pressure (purple spots)', 'Confusion, drowsiness, or difficulty waking', 'Seizures', 'Sensitivity to light with high fever'],
  ),

  'viral-encephalitis': ic(
    'viral-encephalitis',
    'Viral Encephalitis',
    'Encefalitis viral',
    'cns',
    'AB00',
    'Herpes simplex virus (HSV-1 most common sporadic cause), arboviruses (West Nile, Eastern equine), enteroviruses, VZV, CMV, EBV',
    'Inflammation of the brain parenchyma caused by viral infection, presenting with altered mental status, fever, and focal neurologic deficits. HSV encephalitis is a treatable emergency.',
    ['Altered mental status or personality changes', 'Fever', 'Seizures (especially temporal lobe in HSV)', 'Focal neurologic deficits', 'Headache', 'Aphasia (HSV predilection for temporal lobe)', 'Movement disorders'],
    ['MRI brain with contrast (temporal lobe involvement suggests HSV)', 'CSF analysis: lymphocytic pleocytosis, elevated protein, normal glucose, RBCs (HSV)', 'CSF PCR for HSV and other viruses', 'EEG (periodic lateralized epileptiform discharges in HSV)', 'Serum and CSF arbovirus serologies if exposure'],
    ['IV acyclovir 10 mg/kg q8h empirically for all suspected encephalitis (do not wait for confirmation)', 'Duration for HSV: 14-21 days', 'Seizure management with antiepileptics', 'ICU monitoring for cerebral edema', 'Supportive care and rehabilitation'],
    ['Permanent neurologic deficits', 'Cognitive impairment and memory loss', 'Behavioral changes', 'Epilepsy', 'Death (untreated HSV encephalitis has 70% mortality)'],
    'Viral encephalitis is an infection of the brain itself, not just the covering. Herpes virus is the most common cause and is treatable with antiviral medicine. It causes confusion, seizures, and fever. Quick treatment is critical.',
    ['New confusion or bizarre behavior with fever', 'Seizures', 'Inability to speak or weakness on one side', 'Rapidly declining consciousness'],
  ),

  'brain-abscess': ic(
    'brain-abscess',
    'Brain Abscess',
    'Absceso cerebral',
    'cns',
    'AB05',
    'Streptococci (most common), Staphylococcus aureus, anaerobes (Bacteroides, Fusobacterium), gram-negatives; Toxoplasma gondii in HIV/AIDS',
    'Focal collection of pus within the brain parenchyma, arising from contiguous spread (sinusitis, otitis), hematogenous seeding, or post-neurosurgical infection.',
    ['Headache (most common symptom)', 'Fever (present in only 50%)', 'Focal neurologic deficits depending on location', 'Seizures', 'Nausea and vomiting (increased ICP)', 'Papilledema', 'Classic triad (headache, fever, focal deficit) present in fewer than 50%'],
    ['CT head with contrast (ring-enhancing lesion)', 'MRI brain with contrast (superior sensitivity; restricted diffusion on DWI)', 'Blood cultures', 'Stereotactic aspiration for culture and sensitivity', 'Source workup: dental exam, ENT evaluation, echocardiogram, CT sinuses'],
    ['Empiric: ceftriaxone plus metronidazole (add vancomycin if post-surgical or MRSA risk)', 'IV antibiotics for 6-8 weeks', 'Stereotactic aspiration or excision for lesions larger than 2.5 cm or failing medical therapy', 'Anticonvulsants if seizures', 'Treat the source (sinusitis, endocarditis, dental infection)'],
    ['Intraventricular rupture (high mortality)', 'Herniation', 'Persistent neurologic deficits', 'Recurrence', 'Hydrocephalus'],
    'A brain abscess is a pocket of infection inside the brain. It can come from sinus or ear infections or from bacteria spreading through the blood. It causes headaches and sometimes seizures. Treatment includes long-term antibiotics and sometimes surgery to drain it.',
    ['Worst headache of life', 'Sudden worsening of consciousness', 'New seizure with fever', 'Signs of brain herniation (unequal pupils, posturing)'],
  ),

  // =========================================================================
  // BLOODSTREAM (3)
  // =========================================================================

  'sepsis': ic(
    'sepsis',
    'Sepsis',
    'Sepsis / Septicemia',
    'bloodstream',
    'MG40',
    'Any bacterial pathogen; most common sources: pneumonia (lungs), UTI (urinary), abdominal, skin/soft tissue. Common organisms: E. coli, S. aureus, Streptococcus pneumoniae, Klebsiella',
    'Life-threatening organ dysfunction caused by a dysregulated host response to infection, defined by the Sepsis-3 criteria (suspected infection plus SOFA score increase of 2 or more).',
    ['Fever or hypothermia', 'Tachycardia', 'Tachypnea', 'Hypotension', 'Altered mental status', 'Warm or mottled skin', 'Oliguria', 'Elevated lactate'],
    ['Blood cultures (at least 2 sets before antibiotics)', 'Serum lactate', 'CBC, CMP, coagulation studies', 'Procalcitonin', 'Source-directed cultures (urine, sputum, wound)', 'Imaging to identify source', 'SOFA and qSOFA scoring'],
    ['Hour-1 bundle: measure lactate, blood cultures, broad-spectrum IV antibiotics, 30 mL/kg crystalloid if hypotensive or lactate 4 or greater', 'Norepinephrine first-line vasopressor if MAP below 65 after fluids', 'Vasopressin as second agent', 'Source control (drain abscess, remove infected device)', 'De-escalate antibiotics based on cultures', 'Stress-dose hydrocortisone for refractory shock'],
    ['Septic shock', 'Multiorgan failure', 'DIC', 'ARDS', 'Acute kidney injury', 'Death (in-hospital mortality 25-30% for septic shock)', 'Post-sepsis syndrome (long-term cognitive and physical impairment)'],
    'Sepsis is when an infection causes your body to have a dangerous overreaction that can damage your organs. It is a medical emergency. Quick treatment with IV antibiotics and fluids is critical. If you or someone you know has an infection with confusion, fast breathing, or feeling extremely ill, call 911.',
    ['Confusion or difficulty waking', 'Systolic blood pressure below 90 mmHg', 'Rapid breathing above 22 breaths per minute', 'Mottled or cold extremities', 'No urine output'],
  ),

  'infective-endocarditis': ic(
    'infective-endocarditis',
    'Infective Endocarditis',
    'Endocarditis infecciosa',
    'bloodstream',
    'BB22',
    'Native valve: Viridans streptococci, S. aureus, Enterococcus. IVDU: S. aureus (tricuspid). Prosthetic early: S. aureus, coagulase-negative staph. Prosthetic late: Viridans strep, Enterococcus',
    'Infection of the endocardial surface of the heart, typically involving the cardiac valves, with vegetations composed of bacteria, fibrin, and platelets.',
    ['Fever (most common)', 'New or changing heart murmur', 'Janeway lesions (painless palmar/plantar macules)', 'Osler nodes (painful fingertip nodules)', 'Splinter hemorrhages', 'Petechiae', 'Splenomegaly', 'Embolic phenomena (stroke, septic pulmonary emboli)'],
    ['Modified Duke criteria for diagnosis', 'Blood cultures: 3 sets from separate sites before antibiotics', 'Transthoracic echocardiogram (TTE); transesophageal (TEE) if TTE negative and suspicion remains or prosthetic valve', 'CBC, ESR, CRP, RF, urinalysis (hematuria)', 'CT or MRI for embolic complications'],
    ['Empiric: vancomycin plus ceftriaxone (pending cultures)', 'Native valve streptococcal: penicillin G or ceftriaxone x 4 weeks', 'Staphylococcal native: nafcillin (MSSA) or vancomycin (MRSA) x 6 weeks', 'IVDU S. aureus right-sided: nafcillin x 2 weeks (if uncomplicated)', 'Surgical indications: heart failure from valvular regurgitation, uncontrolled infection, large vegetations with embolic risk, prosthetic valve endocarditis'],
    ['Heart failure from valvular destruction', 'Embolic stroke', 'Mycotic aneurysm', 'Renal failure (immune complex glomerulonephritis)', 'Septic emboli to lungs (right-sided), brain, kidneys, spleen (left-sided)'],
    'Endocarditis is an infection of the heart valves. Bacteria in the blood settle on damaged or artificial valves and form growths. It causes prolonged fever and can lead to serious complications like stroke. Treatment requires weeks of IV antibiotics and sometimes heart surgery.',
    ['New stroke symptoms (weakness, speech difficulty) with fever', 'Acute heart failure (severe shortness of breath)', 'Persistent fever despite antibiotics', 'Signs of septic shock'],
  ),

  'candidemia': ic(
    'candidemia',
    'Candidemia (Invasive Candidiasis)',
    'Candidemia (Candidiasis invasiva)',
    'bloodstream',
    'AB10.3',
    'Candida albicans (most common), C. glabrata, C. parapsilosis, C. tropicalis, C. auris (emerging multidrug-resistant)',
    'Bloodstream infection caused by Candida species, predominantly occurring in critically ill, immunocompromised, or hospitalized patients with central venous catheters.',
    ['Persistent fever unresponsive to broad-spectrum antibiotics', 'Hemodynamic instability', 'Endophthalmitis (eye involvement)', 'Skin lesions (disseminated candidiasis)', 'Often indistinguishable from bacterial sepsis clinically'],
    ['Blood cultures (sensitivity only 50-75%)', 'Beta-D-glucan assay', 'T2Candida panel (rapid molecular)', 'Ophthalmologic exam (all candidemia patients)', 'Echocardiogram to rule out endocarditis', 'Susceptibility testing (especially for C. auris and C. glabrata)'],
    ['Echinocandin first-line (micafungin, caspofungin, or anidulafungin)', 'Fluconazole step-down if susceptible and clinically stable', 'Remove all central venous catheters if feasible', 'Treat for minimum 14 days after first negative blood culture', 'Source control and daily blood cultures until clearance'],
    ['Endophthalmitis and vision loss', 'Candida endocarditis', 'Hepatosplenic candidiasis', 'Osteomyelitis', 'Mortality 30-40%'],
    'Candidemia is a serious yeast infection in the blood that mainly happens to patients in the hospital who are very sick or have IV lines. It requires antifungal medicine and removal of any infected IV catheters.',
    ['Persistent fever despite antibiotics in an ICU patient', 'New vision changes during candidemia treatment', 'Signs of septic shock', 'Worsening despite antifungal therapy'],
  ),

  // =========================================================================
  // BONE & JOINT (3)
  // =========================================================================

  'osteomyelitis': ic(
    'osteomyelitis',
    'Osteomyelitis',
    'Osteomielitis',
    'bone-joint',
    'FB80',
    'S. aureus (most common at all ages), Salmonella (sickle cell disease), Pseudomonas (puncture wounds through sneakers), coagulase-negative staph (prosthetic joints)',
    'Infection of bone that can occur via hematogenous seeding, contiguous spread (diabetic foot), or direct inoculation (trauma, surgery). Can be acute or chronic.',
    ['Localized bone pain and tenderness', 'Fever', 'Swelling and erythema over affected bone', 'Refusal to bear weight or use extremity (children)', 'Draining sinus tract (chronic osteomyelitis)', 'Non-healing ulcer over bone (diabetic foot)'],
    ['MRI with contrast (gold standard imaging, sensitivity 90-100%)', 'Bone biopsy with culture (gold standard for diagnosis)', 'ESR and CRP (elevated; CRP normalizes faster with treatment)', 'Blood cultures', 'X-ray (may be normal for first 10-14 days)', 'Probe-to-bone test (diabetic foot ulcer; positive predictive value 89%)', 'WBC bone scan or tagged WBC scan if MRI contraindicated'],
    ['Empiric IV antibiotics after bone biopsy culture obtained', 'MSSA: nafcillin or cefazolin', 'MRSA: vancomycin or daptomycin', 'Duration: 4-6 weeks IV (may transition to oral if good bioavailability)', 'Surgical debridement for chronic, necrotic bone (sequestrum), or hardware infection', 'Diabetic foot: offloading, wound care, vascular assessment'],
    ['Chronic osteomyelitis', 'Pathologic fracture', 'Sequestrum formation (dead bone)', 'Sinus tract development', 'Amputation (refractory diabetic foot osteomyelitis)', 'Septic arthritis (spread to adjacent joint)'],
    'Osteomyelitis is a bone infection, usually caused by staph bacteria. It causes bone pain, swelling, and fever. Diagnosis often requires an MRI and bone biopsy. Treatment involves several weeks of antibiotics and sometimes surgery.',
    ['High fever with severe localized bone pain', 'Inability to move or use the affected limb', 'Signs of sepsis', 'Rapidly progressing infection around a prosthetic joint'],
  ),

  'septic-arthritis': ic(
    'septic-arthritis',
    'Septic Arthritis',
    'Artritis septica',
    'bone-joint',
    'FA00',
    'Staphylococcus aureus (most common), Streptococci, Neisseria gonorrhoeae (young sexually active adults), gram-negatives (elderly, immunocompromised)',
    'Infection within a joint space, most commonly the knee, constituting an orthopedic emergency because of rapid cartilage destruction if untreated.',
    ['Acute monoarticular joint pain (knee most common)', 'Joint swelling and effusion', 'Warmth and erythema', 'Severely limited range of motion (pain with passive motion)', 'Fever', 'Inability to bear weight'],
    ['Arthrocentesis with synovial fluid analysis (WBC typically greater than 50,000 with neutrophil predominance)', 'Synovial fluid Gram stain and culture', 'Blood cultures', 'ESR, CRP', 'Gonococcal testing (NAAT of urine, pharynx, rectum) if risk factors', 'X-ray (baseline; widened joint space or periarticular osteopenia)', 'MRI if deep joint (hip, sacroiliac)'],
    ['Empiric: vancomycin (MRSA coverage) plus ceftriaxone (gram-negative coverage)', 'Gonococcal: ceftriaxone 1g IV daily', 'Joint drainage: serial arthrocentesis or surgical irrigation and debridement', 'Prosthetic joint infection often requires implant removal', 'Duration: 2-4 weeks (native joint), 6 weeks or more (prosthetic)'],
    ['Cartilage destruction and joint deformity', 'Osteomyelitis', 'Ankylosis (joint fusion)', 'Sepsis', 'Need for joint replacement'],
    'Septic arthritis is a joint infection that causes severe pain, swelling, and inability to move the joint. It most often affects the knee. It is urgent because bacteria can quickly destroy the cartilage. Treatment requires draining the joint and antibiotics.',
    ['Hot, swollen, extremely painful joint with fever', 'Complete inability to move the joint', 'Signs of systemic infection (rigors, confusion)', 'Prosthetic joint with new pain and fever'],
  ),

  'prosthetic-joint-infection': ic(
    'prosthetic-joint-infection',
    'Prosthetic Joint Infection',
    'Infeccion de protesis articular',
    'bone-joint',
    'FB81',
    'Early (less than 3 months): S. aureus, gram-negatives. Delayed (3-12 months): coagulase-negative staphylococci, Cutibacterium acnes. Late (more than 12 months): hematogenous seeding (S. aureus, streptococci)',
    'Infection of a prosthetic joint implant, classified by time of onset relative to surgery. Biofilm formation on the implant complicates eradication.',
    ['Joint pain (most common and reliable symptom)', 'Joint effusion or swelling', 'Wound drainage or sinus tract', 'Fever (less common in delayed infections)', 'Loosening on imaging', 'Elevated inflammatory markers'],
    ['Joint aspiration with synovial fluid culture (hold antibiotics 2 weeks prior if possible)', 'Synovial WBC count and differential', 'ESR and CRP', 'Alpha-defensin assay (high specificity)', 'Intraoperative tissue cultures (at least 3-5 specimens)', 'X-ray (loosening, periosteal reaction)'],
    ['Early or hematogenous with stable implant: DAIR (debridement, antibiotics, implant retention) with polyethylene exchange', 'Chronic or failed DAIR: two-stage exchange arthroplasty (implant removal, antibiotic spacer, 6-8 weeks antibiotics, reimplantation)', 'One-stage exchange in select cases', 'Organism-directed prolonged antibiotics (rifampin-based for staphylococci with retained implant)', 'Chronic suppressive oral antibiotics if surgery not feasible'],
    ['Implant failure requiring removal', 'Chronic infection', 'Bone loss', 'Limb shortening', 'Amputation (refractory cases)', 'Systemic sepsis'],
    'A prosthetic joint infection is when bacteria infect an artificial hip or knee. It causes pain and swelling around the joint. Treatment often requires surgery to clean or replace the artificial joint, along with weeks of antibiotics.',
    ['Acute onset of severe pain in a prosthetic joint with fever', 'Wound breakdown with purulent drainage', 'Signs of sepsis', 'Rapidly progressive swelling after recent joint replacement surgery'],
  ),

  // =========================================================================
  // GI (4)
  // =========================================================================

  'clostridioides-difficile': ic(
    'clostridioides-difficile',
    'Clostridioides difficile Infection',
    'Infeccion por Clostridioides difficile',
    'gi',
    'CA04',
    'Clostridioides difficile (formerly Clostridium difficile)',
    'Toxin-mediated colitis associated with antibiotic disruption of normal gut flora, representing the most common healthcare-associated infection in US hospitals.',
    ['Watery diarrhea (3 or more loose stools in 24 hours)', 'Abdominal pain and cramping', 'Fever', 'Leukocytosis (WBC may exceed 30,000)', 'Nausea', 'Abdominal distension'],
    ['Stool C. difficile toxin by PCR or EIA (test only loose/watery stools)', 'Two-step testing: GDH screen then toxin EIA', 'CBC (leukocytosis)', 'BMP (renal function, lactate)', 'CT abdomen if severe (colonic wall thickening, toxic megacolon)', 'Do not test for cure; do not test formed stools'],
    ['Non-severe initial episode: fidaxomicin 200 mg BID x 10 days (preferred) or vancomycin 125 mg PO QID x 10 days', 'Severe (WBC over 15,000 or creatinine over 1.5): vancomycin 125 mg PO QID x 10 days', 'Fulminant: vancomycin 500 mg PO/NG QID plus metronidazole 500 mg IV q8h; rectal vancomycin if ileus', 'First recurrence: fidaxomicin or vancomycin taper-pulse', 'Multiple recurrences: fecal microbiota transplant (FMT)', 'Discontinue offending antibiotics if possible'],
    ['Toxic megacolon', 'Bowel perforation', 'Septic shock', 'Recurrence (20-30% after first episode)', 'Death in fulminant cases'],
    'C. diff is an infection that causes severe diarrhea, usually after taking antibiotics. The antibiotics kill normal gut bacteria, allowing C. diff to overgrow and release toxins. Treatment is with specific antibiotics by mouth. Handwashing with soap and water (not hand sanitizer) is essential.',
    ['More than 10 watery stools per day', 'Severe abdominal pain with distension', 'High fever with very high white blood cell count', 'Signs of sepsis or shock', 'Abdominal rigidity (possible perforation)'],
  ),

  'acute-gastroenteritis': ic(
    'acute-gastroenteritis',
    'Acute Infectious Gastroenteritis',
    'Gastroenteritis aguda infecciosa',
    'gi',
    'CA00-CA08',
    'Viral: norovirus (most common), rotavirus. Bacterial: Salmonella, Campylobacter, Shigella, enterotoxigenic E. coli. Parasitic: Giardia, Cryptosporidium',
    'Inflammation of the gastrointestinal tract causing diarrhea and/or vomiting, most commonly viral and self-limited, but bacterial and parasitic causes may require specific treatment.',
    ['Diarrhea (watery or bloody depending on etiology)', 'Nausea and vomiting', 'Abdominal cramping', 'Fever (more common with invasive bacterial pathogens)', 'Dehydration (dry mouth, decreased urine, tachycardia)', 'Myalgia and malaise'],
    ['Clinical diagnosis for most cases', 'Stool culture if bloody diarrhea, fever, or severe illness', 'Stool ova and parasites if more than 14 days or exposure history', 'Multiplex stool PCR panel', 'BMP if concern for dehydration or electrolyte abnormality', 'C. difficile testing if recent antibiotic use'],
    ['Oral rehydration therapy (ORS) is cornerstone', 'IV fluids if severe dehydration or unable to tolerate oral', 'Empiric antibiotics (ciprofloxacin or azithromycin) only if moderate-severe travelers diarrhea or invasive bacterial gastroenteritis', 'Loperamide for symptomatic relief (avoid in bloody diarrhea or suspected C. diff)', 'Antiparasitic therapy if identified (metronidazole for Giardia)', 'Probiotics may shorten duration'],
    ['Severe dehydration', 'Hemolytic uremic syndrome (Shiga toxin-producing E. coli)', 'Reactive arthritis (post-Salmonella, Shigella, Campylobacter)', 'Guillain-Barre syndrome (post-Campylobacter)', 'Post-infectious IBS'],
    'Gastroenteritis (stomach flu) causes diarrhea, vomiting, and stomach cramps, usually from a virus. Most cases resolve on their own in a few days. The most important thing is to stay hydrated with clear fluids and oral rehydration solutions.',
    ['Signs of severe dehydration (no urine for 8+ hours, dizziness, sunken eyes)', 'Bloody diarrhea with high fever', 'Inability to keep any fluids down', 'Severe abdominal pain', 'Symptoms in a very young, elderly, or immunocompromised patient'],
  ),

  'hepatitis-b': ic(
    'hepatitis-b',
    'Hepatitis B',
    'Hepatitis B',
    'gi',
    'DA20.0',
    'Hepatitis B virus (HBV, Hepadnaviridae)',
    'Viral infection of the liver transmitted through blood and body fluids, which may be acute and self-limited or progress to chronic infection with risk of cirrhosis and hepatocellular carcinoma.',
    ['Acute: jaundice, fatigue, nausea, abdominal pain, dark urine, clay-colored stools', 'Many acute infections are subclinical', 'Chronic: often asymptomatic until advanced liver disease', 'Hepatomegaly', 'Extrahepatic: polyarteritis nodosa, membranous nephropathy'],
    ['HBsAg (current infection)', 'Anti-HBs (immunity)', 'Anti-HBc IgM (acute infection) and total (exposure)', 'HBeAg and anti-HBe (replication and infectivity)', 'HBV DNA viral load', 'Liver function tests (ALT, AST, bilirubin, albumin, INR)', 'FibroScan or liver biopsy for fibrosis staging', 'Hepatocellular carcinoma screening: AFP and ultrasound every 6 months'],
    ['Acute: supportive care (95% of adults clear spontaneously)', 'Chronic: antiviral therapy if active disease (elevated ALT, high viral load, fibrosis)', 'First-line: tenofovir (TDF or TAF) or entecavir', 'Treatment is typically long-term or lifelong', 'Prevention: HBV vaccine series (3 doses), HBIG for post-exposure', 'Birth dose vaccine for all neonates; HBIG plus vaccine for infants of HBsAg-positive mothers'],
    ['Chronic hepatitis B', 'Cirrhosis', 'Hepatocellular carcinoma', 'Fulminant hepatic failure (rare, less than 1%)', 'HBV reactivation with immunosuppression'],
    'Hepatitis B is a liver infection caused by a virus spread through blood and body fluids. Many people recover fully, but some develop a lifelong infection that can damage the liver over time. There is a highly effective vaccine. Antiviral medicines can control the virus in chronic infection.',
    ['Severe jaundice with confusion (possible liver failure)', 'Severe abdominal pain with vomiting', 'Signs of liver failure (easy bruising, swelling, confusion)'],
  ),

  'hepatitis-c': ic(
    'hepatitis-c',
    'Hepatitis C',
    'Hepatitis C',
    'gi',
    'DA20.1',
    'Hepatitis C virus (HCV, Flaviviridae)',
    'Bloodborne viral infection of the liver that becomes chronic in approximately 75-85% of cases. Now curable with direct-acting antiviral (DAA) therapy in over 95% of patients.',
    ['Acute: usually asymptomatic; jaundice in 20-30%', 'Chronic: fatigue, often asymptomatic for decades', 'Signs of advanced liver disease: jaundice, ascites, variceal bleeding', 'Extrahepatic: cryoglobulinemia, membranoproliferative glomerulonephritis, porphyria cutanea tarda, non-Hodgkin lymphoma'],
    ['Anti-HCV antibody (screening)', 'HCV RNA PCR (confirms active infection)', 'HCV genotype (guides treatment selection)', 'Liver function tests', 'Fibrosis assessment: FibroScan (transient elastography) or FIB-4 score', 'CBC with platelet count', 'Screen all adults 18 and older at least once (USPSTF)'],
    ['Direct-acting antivirals (DAAs) cure over 95%', 'Common regimens: sofosbuvir-velpatasvir (Epclusa) x 12 weeks (pan-genotypic), glecaprevir-pibrentasvir (Mavyret) x 8-12 weeks', 'Check for drug interactions (especially with HIV meds, PPIs)', 'Assess for decompensated cirrhosis before treatment (some DAAs contraindicated)', 'No vaccine available; prevention through harm reduction and screening'],
    ['Cirrhosis (10-20% over 20 years)', 'Hepatocellular carcinoma', 'End-stage liver disease requiring transplant', 'Cryoglobulinemic vasculitis', 'Reinfection possible after cure'],
    'Hepatitis C is a liver infection spread mainly through blood contact (such as shared needles). Many people do not know they have it for years. The good news is that new medicines can cure it in about 12 weeks with very few side effects. Everyone should be screened at least once.',
    ['Severe jaundice with confusion', 'Vomiting blood or black stools (variceal bleeding)', 'Severe abdominal swelling (ascites)', 'Signs of liver failure'],
  ),

  // =========================================================================
  // SEXUALLY TRANSMITTED (5)
  // =========================================================================

  'chlamydia': ic(
    'chlamydia',
    'Chlamydia',
    'Clamidia',
    'sexually-transmitted',
    'JA04.0',
    'Chlamydia trachomatis (serovars D-K for urogenital; L1-L3 for lymphogranuloma venereum)',
    'Most common reportable bacterial STI. Often asymptomatic, especially in women, but can cause serious reproductive complications if untreated.',
    ['Often asymptomatic (up to 70% of women, 50% of men)', 'Mucopurulent vaginal or urethral discharge', 'Dysuria', 'Intermenstrual or postcoital bleeding', 'Pelvic pain (women)', 'Testicular pain or epididymitis (men)', 'Rectal discharge or pain (proctitis)', 'Pharyngeal infection (usually asymptomatic)'],
    ['Nucleic acid amplification test (NAAT) of urine or genital swab (gold standard)', 'Rectal and pharyngeal NAAT if exposure', 'Screen annually: sexually active women under 25, MSM, HIV-positive individuals', 'Test of cure 4 weeks after treatment if pregnant'],
    ['Uncomplicated: azithromycin 1g single dose or doxycycline 100 mg BID x 7 days (doxycycline preferred for rectal)', 'Pregnant: azithromycin 1g single dose', 'Treat all sexual partners from past 60 days', 'Expedited partner therapy (EPT) where permitted', 'Test for gonorrhea concurrently (frequent co-infection)', 'Rescreen at 3 months'],
    ['Pelvic inflammatory disease (PID)', 'Tubal infertility and ectopic pregnancy', 'Chronic pelvic pain', 'Epididymo-orchitis', 'Reactive arthritis', 'Neonatal conjunctivitis and pneumonia', 'Lymphogranuloma venereum (LGV serovars)'],
    'Chlamydia is the most common bacterial sexually transmitted infection. Most people have no symptoms, which is why screening is important. It is easily cured with antibiotics. If untreated, it can cause infertility in women. Your partner also needs treatment.',
    ['Severe pelvic pain with fever (PID)', 'Testicular swelling with fever (epididymitis)'],
  ),

  'gonorrhea': ic(
    'gonorrhea',
    'Gonorrhea',
    'Gonorrea',
    'sexually-transmitted',
    'JA03.0',
    'Neisseria gonorrhoeae',
    'Bacterial STI with increasing antimicrobial resistance, capable of infecting the urethra, cervix, rectum, pharynx, and conjunctiva. Second most common reportable STI.',
    ['Purulent urethral discharge (men)', 'Dysuria', 'Cervicitis with mucopurulent discharge (women)', 'Often asymptomatic in women', 'Rectal discharge or tenesmus (proctitis)', 'Pharyngeal infection (usually asymptomatic)', 'Disseminated: petechial skin lesions, migratory polyarthralgia, septic arthritis'],
    ['NAAT of urine or genital swab (gold standard)', 'Pharyngeal and rectal NAAT based on exposure', 'Culture with susceptibility testing (for treatment failure or antimicrobial resistance surveillance)', 'Gram stain of urethral discharge (gram-negative intracellular diplococci)', 'Test for chlamydia and syphilis concurrently'],
    ['Ceftriaxone 500 mg IM single dose (weight over 150 kg: 1g)', 'Add doxycycline 100 mg BID x 7 days if chlamydia not excluded', 'Pharyngeal gonorrhea: ceftriaxone is the only reliable single-dose regimen', 'Disseminated: ceftriaxone 1g IV/IM daily until clinical improvement, then step down', 'Test of cure NAAT 14 days after treatment for pharyngeal infections', 'Treat all sexual partners from past 60 days'],
    ['Pelvic inflammatory disease (PID)', 'Tubal infertility and ectopic pregnancy', 'Epididymo-orchitis', 'Disseminated gonococcal infection (DGI)', 'Fitz-Hugh-Curtis syndrome (perihepatitis)', 'Neonatal ophthalmia neonatorum', 'Antimicrobial resistance (emerging global threat)'],
    'Gonorrhea is a common STI that can infect the genitals, rectum, and throat. Men often notice discharge and burning, but women may have no symptoms. A single antibiotic shot usually cures it. Your partner needs treatment too. Untreated gonorrhea can cause serious complications.',
    ['Severe joint pain with fever and skin lesions (disseminated infection)', 'Severe pelvic pain with fever (PID)', 'Eye discharge in a newborn'],
  ),

  'syphilis': ic(
    'syphilis',
    'Syphilis',
    'Sifilis',
    'sexually-transmitted',
    'JA02',
    'Treponema pallidum',
    'Chronic systemic infection with distinct clinical stages (primary, secondary, latent, tertiary) that can affect virtually every organ. Incidence has risen dramatically in recent years.',
    ['Primary: painless chancre at inoculation site (3 weeks after exposure)', 'Secondary (6-8 weeks later): diffuse maculopapular rash including palms and soles, condylomata lata, mucous patches, lymphadenopathy, constitutional symptoms', 'Latent: asymptomatic (early latent less than 1 year; late latent more than 1 year)', 'Tertiary: gummas, aortitis, aortic aneurysm', 'Neurosyphilis (any stage): headache, cranial nerve palsies, meningitis, tabes dorsalis, Argyll Robertson pupils, dementia'],
    ['Non-treponemal screening: RPR or VDRL (quantitative for monitoring)', 'Treponemal confirmatory: FTA-ABS or TP-PA', 'Reverse sequence algorithm: treponemal screen first (EIA/CIA), then RPR', 'Darkfield microscopy of chancre (if available)', 'Lumbar puncture if neurological symptoms or treatment failure', 'HIV testing for all syphilis patients'],
    ['Primary, secondary, or early latent: benzathine penicillin G 2.4 million units IM single dose', 'Late latent or unknown duration: benzathine penicillin G 2.4 million units IM weekly x 3 weeks', 'Neurosyphilis: aqueous crystalline penicillin G 18-24 million units/day IV x 10-14 days', 'Penicillin allergy: doxycycline (except in pregnancy; pregnant patients must be desensitized to penicillin)', 'Jarisch-Herxheimer reaction may occur within 24 hours of treatment', 'Follow RPR titers at 6 and 12 months (expect 4-fold decline)'],
    ['Neurosyphilis at any stage', 'Aortitis and aortic aneurysm', 'Gummatous disease', 'Ocular syphilis (uveitis, vision loss)', 'Congenital syphilis (devastating neonatal outcomes)', 'Increased HIV acquisition risk'],
    'Syphilis is an STI that progresses through stages over years if untreated. It starts as a painless sore, then causes a rash, and can eventually damage the brain, heart, and other organs. A penicillin shot cures early syphilis. Testing is important because symptoms can be subtle.',
    ['Sudden vision changes or eye pain (ocular syphilis)', 'Severe headache with neurologic symptoms', 'Pregnant woman diagnosed with syphilis (risk of congenital transmission)'],
  ),

  'genital-herpes': ic(
    'genital-herpes',
    'Genital Herpes',
    'Herpes genital',
    'sexually-transmitted',
    'JA01.0',
    'Herpes simplex virus type 2 (HSV-2, majority) and HSV-1',
    'Chronic viral STI characterized by recurrent painful genital ulceration. HSV-1 is an increasingly common cause of genital herpes. Asymptomatic viral shedding drives transmission.',
    ['Primary outbreak: multiple painful vesicles and ulcers on erythematous base', 'Bilateral inguinal lymphadenopathy', 'Fever, malaise, myalgia (primary episode)', 'Dysuria', 'Recurrent episodes: usually milder, unilateral, shorter duration', 'Prodrome of tingling or burning before recurrence'],
    ['HSV PCR of lesion swab (most sensitive)', 'Viral culture of vesicular fluid', 'Type-specific serology (HSV-1 and HSV-2 IgG) for diagnosis in absence of active lesion', 'Tzanck smear (multinucleated giant cells; low sensitivity, rarely used)'],
    ['Primary: valacyclovir 1g BID x 7-10 days, or acyclovir 400 mg TID x 7-10 days', 'Recurrent episodes: valacyclovir 500 mg BID x 3 days or 1g daily x 5 days', 'Suppressive therapy (6 or more outbreaks/year): valacyclovir 500 mg-1g daily', 'Suppressive therapy reduces transmission by 50%', 'Counseling: condom use reduces but does not eliminate transmission; avoid sex during outbreaks', 'Pregnancy: suppressive acyclovir from 36 weeks; cesarean if active lesions at delivery'],
    ['Neonatal herpes (devastating; acquired during delivery)', 'Herpes meningitis (Mollaret meningitis)', 'Sacral radiculopathy and urinary retention', 'Erythema multiforme', 'Increased HIV acquisition (2-4 fold)', 'Psychosocial impact'],
    'Genital herpes is a common viral infection that causes painful sores in the genital area. Once infected, the virus stays in the body and sores can come back. Antiviral medicine reduces outbreaks and lowers the chance of spreading it to a partner. It is very manageable with treatment.',
    ['Severe first outbreak with urinary retention', 'Headache with neck stiffness during outbreak (meningitis)', 'Concern for neonatal herpes (vesicles on newborn)', 'Widespread lesions in immunocompromised patient'],
  ),

  'hiv': ic(
    'hiv',
    'HIV/AIDS',
    'VIH/SIDA',
    'sexually-transmitted',
    'BA20',
    'Human immunodeficiency virus (HIV-1 and HIV-2)',
    'Chronic retroviral infection that destroys CD4+ T lymphocytes, leading to progressive immunodeficiency. Without treatment, progresses to AIDS (CD4 below 200 or AIDS-defining illness). Antiretroviral therapy (ART) enables near-normal life expectancy.',
    ['Acute retroviral syndrome (2-4 weeks post-exposure): fever, pharyngitis, maculopapular rash, lymphadenopathy, myalgia', 'Clinical latency: years of asymptomatic infection', 'AIDS-defining conditions: Pneumocystis pneumonia, Kaposi sarcoma, cerebral toxoplasmosis, esophageal candidiasis, CMV retinitis, MAI, cryptococcal meningitis', 'Generalized lymphadenopathy', 'Oral thrush and hairy leukoplakia'],
    ['4th generation HIV-1/2 antigen/antibody combination test (screens p24 antigen plus antibodies)', 'Confirmatory: HIV-1/HIV-2 antibody differentiation assay', 'HIV RNA viral load (acute infection, monitoring)', 'CD4+ T-cell count', 'Resistance genotyping before starting ART', 'Screen all adults 15-65 at least once (USPSTF)', 'Comprehensive baseline labs: CBC, CMP, lipids, hepatitis A/B/C, STI panel, TB screening, toxoplasma IgG'],
    ['Start ART as soon as possible after diagnosis (same day if feasible)', 'Preferred initial regimens: bictegravir-emtricitabine-TAF (Biktarvy) or dolutegravir plus emtricitabine-TAF', 'Long-acting injectable cabotegravir-rilpivirine (Cabenuva) every 2 months', 'Opportunistic infection prophylaxis: TMP-SMX when CD4 below 200 (PCP/toxoplasma), azithromycin when CD4 below 50 (MAI)', 'PrEP for HIV-negative individuals at risk: emtricitabine-TDF, emtricitabine-TAF, or long-acting injectable cabotegravir', 'PEP within 72 hours of exposure'],
    ['Opportunistic infections', 'AIDS-related malignancies (Kaposi sarcoma, lymphoma, cervical cancer)', 'HIV-associated neurocognitive disorder', 'Cardiovascular disease (accelerated)', 'Chronic kidney disease', 'Immune reconstitution inflammatory syndrome (IRIS) upon starting ART'],
    'HIV is a virus that weakens the immune system over time. With modern medicine (antiretroviral therapy), people with HIV can live long, healthy lives and the virus becomes undetectable. Undetectable means untransmittable (U=U). Testing is important because early treatment has the best outcomes. PrEP can prevent HIV.',
    ['Suspected acute HIV (fever, rash, sore throat after exposure)', 'CD4 below 200 with symptoms of opportunistic infection', 'New neurologic symptoms in an HIV-positive patient', 'Severe immune reconstitution syndrome (IRIS)'],
  ),

  // =========================================================================
  // ADDITIONAL CONDITIONS TO REACH ~30
  // =========================================================================

  'herpes-zoster': ic(
    'herpes-zoster',
    'Herpes Zoster (Shingles)',
    'Herpes zoster (Culebrilla)',
    'skin-soft-tissue',
    'DA62.8',
    'Varicella-zoster virus (VZV) reactivation',
    'Reactivation of latent varicella-zoster virus in the dorsal root ganglia, causing a painful vesicular eruption in a dermatomal distribution. Risk increases with age and immunosuppression.',
    ['Prodromal dermatomal pain, burning, or tingling (1-5 days before rash)', 'Grouped vesicles on an erythematous base in a dermatomal distribution', 'Unilateral (does not cross midline)', 'Pain (often severe)', 'Thoracic dermatomes most common', 'Hutchinson sign (vesicles on nose tip = ophthalmic branch, risk of ocular involvement)'],
    ['Clinical diagnosis based on characteristic dermatome pattern', 'PCR of vesicular fluid (if atypical or immunocompromised)', 'Direct fluorescent antibody (DFA)', 'Ophthalmologic exam if ophthalmic distribution'],
    ['Antiviral within 72 hours of rash onset: valacyclovir 1g TID x 7 days (preferred) or acyclovir 800 mg 5x/day x 7 days', 'Pain management: gabapentin, pregabalin, NSAIDs, opioids if needed', 'Postherpetic neuralgia treatment: gabapentin, pregabalin, lidocaine patch, capsaicin', 'Prevention: recombinant zoster vaccine (Shingrix) for adults 50 and older (2-dose series)', 'Immunocompromised: IV acyclovir if disseminated'],
    ['Postherpetic neuralgia (most common; risk increases with age)', 'Herpes zoster ophthalmicus (keratitis, vision loss)', 'Ramsay Hunt syndrome (facial palsy, ear vesicles)', 'Disseminated zoster in immunocompromised', 'Bacterial superinfection', 'Stroke from VZV vasculopathy'],
    'Shingles is caused by the same virus as chickenpox. After chickenpox, the virus hides in nerves and can reactivate years later, causing a painful, blistering rash on one side of the body. Antiviral medicine helps if started early. A vaccine (Shingrix) can prevent it in adults over 50.',
    ['Vesicles on the nose tip or near the eye (risk of eye involvement)', 'Facial weakness with ear vesicles (Ramsay Hunt syndrome)', 'Disseminated rash (more than 2 dermatomes) in immunocompromised patient', 'Severe pain unresponsive to medications'],
  ),

  'malaria': ic(
    'malaria',
    'Malaria',
    'Malaria / Paludismo',
    'bloodstream',
    'BD52',
    'Plasmodium falciparum (most severe), P. vivax, P. ovale, P. malariae, P. knowlesi',
    'Mosquito-borne parasitic infection transmitted by female Anopheles mosquitoes. P. falciparum causes the most severe disease with risk of cerebral malaria and death.',
    ['Cyclic fevers with rigors (every 48-72 hours depending on species)', 'Headache', 'Myalgia and malaise', 'Splenomegaly', 'Anemia (hemolytic)', 'Jaundice', 'Nausea, vomiting, diarrhea'],
    ['Thick and thin blood smears (gold standard; species identification and parasitemia level)', 'Rapid diagnostic test (RDT; HRP2 for P. falciparum)', 'CBC (anemia, thrombocytopenia)', 'CMP, LDH, bilirubin (hemolysis markers)', 'Lactate', 'Consider in any febrile traveler returning from endemic area'],
    ['Uncomplicated P. falciparum: artemisinin-based combination therapy (ACT), e.g., artemether-lumefantrine or atovaquone-proguanil', 'Severe malaria: IV artesunate (drug of choice)', 'P. vivax and P. ovale: chloroquine plus primaquine (14-day hypnozoite eradication; check G6PD first)', 'Chemoprophylaxis for travelers: atovaquone-proguanil, doxycycline, or mefloquine', 'Insecticide-treated bed nets and DEET for prevention'],
    ['Cerebral malaria (seizures, coma)', 'Severe anemia', 'Acute respiratory distress', 'Acute kidney injury', 'Hypoglycemia', 'Death (P. falciparum case fatality 0.1-20% depending on treatment access)', 'P. vivax/ovale relapse from hypnozoites'],
    'Malaria is a parasitic infection spread by mosquitoes in tropical regions. It causes high fevers that come and go, along with chills and body aches. If you travel to an area with malaria, take preventive medicine. Seek immediate medical care for fever after tropical travel.',
    ['High fever with confusion or seizures after travel to endemic area', 'Severe anemia or jaundice', 'Dark urine (blackwater fever)', 'Respiratory distress', 'Parasitemia above 5%'],
  ),

  'infectious-mononucleosis': ic(
    'infectious-mononucleosis',
    'Infectious Mononucleosis',
    'Mononucleosis infecciosa',
    'bloodstream',
    'CA06.0',
    'Epstein-Barr virus (EBV; HHV-4); occasionally CMV',
    'Self-limited lymphoproliferative syndrome predominantly affecting adolescents and young adults, transmitted via saliva. Characterized by fever, pharyngitis, and lymphadenopathy.',
    ['Fever', 'Severe pharyngitis (often with tonsillar exudates)', 'Posterior cervical lymphadenopathy', 'Fatigue (often profound and prolonged)', 'Splenomegaly (50%)', 'Hepatomegaly', 'Maculopapular rash (especially if given amoxicillin)', 'Periorbital edema', 'Palatal petechiae'],
    ['Heterophile antibody test (Monospot; may be negative in first week)', 'EBV-specific antibodies: VCA IgM (acute), VCA IgG, EBNA IgG', 'CBC with differential (lymphocytosis with atypical lymphocytes greater than 10%)', 'Liver function tests (mild transaminitis common)', 'Peripheral smear for atypical lymphocytes'],
    ['Supportive: rest, hydration, antipyretics (acetaminophen, ibuprofen)', 'Avoid aspirin (risk of Reye syndrome)', 'Avoid contact sports for at least 3-4 weeks (splenic rupture risk)', 'Corticosteroids only if airway compromise from tonsillar enlargement', 'No antiviral therapy of proven benefit for uncomplicated mono', 'Avoid amoxicillin/ampicillin (causes rash in 90-100% of EBV patients)'],
    ['Splenic rupture (rare but life-threatening)', 'Airway obstruction from tonsillar hypertrophy', 'Autoimmune hemolytic anemia', 'Thrombocytopenia', 'Hepatitis', 'Guillain-Barre syndrome (rare)', 'EBV-associated malignancies (Burkitt lymphoma, nasopharyngeal carcinoma, PTLD)'],
    'Mono (the "kissing disease") is caused by the Epstein-Barr virus spread through saliva. It causes extreme tiredness, sore throat, swollen glands, and sometimes an enlarged spleen. Most people recover in 2-4 weeks, but fatigue can last longer. Avoid contact sports until the spleen returns to normal size.',
    ['Sudden severe left-sided abdominal pain (possible splenic rupture)', 'Difficulty breathing or swallowing from swollen tonsils', 'Severe abdominal pain', 'Jaundice'],
  ),

  'clostridial-gas-gangrene': ic(
    'clostridial-gas-gangrene',
    'Gas Gangrene (Clostridial Myonecrosis)',
    'Gangrena gaseosa (Mionecrosis clostridial)',
    'skin-soft-tissue',
    'DA63',
    'Clostridium perfringens (most common), C. septicum (associated with GI malignancy)',
    'Rapidly progressive, life-threatening soft tissue infection with gas production and muscle necrosis, often following trauma or surgery. C. septicum gas gangrene can occur spontaneously and is associated with occult colorectal malignancy.',
    ['Sudden onset of severe pain at wound site', 'Rapidly progressive swelling', 'Skin discoloration: bronze then dark', 'Hemorrhagic bullae', 'Crepitus (gas in tissues)', 'Sweet or foul-smelling wound discharge', 'Systemic toxicity (tachycardia, hypotension, altered mental status)', 'Hemolysis and DIC'],
    ['Clinical diagnosis; do NOT delay surgery', 'X-ray or CT showing gas in soft tissues', 'Gram stain of wound: large gram-positive rods with absent leukocytes', 'Blood cultures', 'CBC (hemolysis, leukocytosis), CK, LDH', 'If C. septicum: colonoscopy to evaluate for GI malignancy after stabilization'],
    ['Emergent surgical debridement (wide excision or amputation)', 'IV penicillin G plus clindamycin (clindamycin suppresses toxin production)', 'ICU resuscitation', 'Hyperbaric oxygen therapy (adjunctive, not substitute for surgery)', 'May require multiple return trips to OR for repeat debridement'],
    ['Limb loss (amputation)', 'Septic shock and multiorgan failure', 'DIC', 'Death (mortality 20-30% with treatment, near 100% without)', 'Associated GI malignancy (C. septicum)'],
    'Gas gangrene is a rare but extremely dangerous infection where bacteria produce gas inside the muscles and tissues, usually after a wound. It spreads very fast and is a surgical emergency. The infected tissue must be removed immediately.',
    ['Rapidly worsening wound pain with swelling and skin color changes', 'Crackling feeling under the skin (gas)', 'Foul-smelling wound discharge', 'Signs of shock (rapid heartbeat, confusion, low blood pressure)'],
  ),

  'peritonitis': ic(
    'peritonitis',
    'Peritonitis',
    'Peritonitis',
    'gi',
    'DA94',
    'Secondary: E. coli, Bacteroides fragilis, Enterococcus, Strep (polymicrobial from GI perforation). Spontaneous bacterial (SBP): E. coli, Klebsiella, Strep pneumoniae (monomicrobial)',
    'Inflammation of the peritoneum, either from GI perforation or surgery (secondary) or from spontaneous bacterial infection of ascitic fluid in cirrhotic patients (SBP).',
    ['Severe diffuse abdominal pain', 'Abdominal rigidity and guarding', 'Rebound tenderness', 'Fever', 'Absent bowel sounds', 'Tachycardia and hypotension', 'SBP: may be subtle in cirrhotic patients (fever, encephalopathy, worsening ascites)'],
    ['Secondary: CT abdomen/pelvis with contrast (free air, fluid collection)', 'SBP: diagnostic paracentesis (ascitic fluid PMN count 250 or greater per mm3)', 'Ascitic fluid culture (inoculate blood culture bottles at bedside)', 'Blood cultures', 'Serum and ascitic albumin (SAAG), protein, glucose, LDH', 'Lactic acid, CBC, BMP'],
    ['Secondary: emergent surgical exploration and source control, broad-spectrum antibiotics (piperacillin-tazobactam or meropenem plus vancomycin)', 'SBP: cefotaxime 2g IV q8h or ceftriaxone 2g IV daily x 5 days', 'SBP with renal impairment: IV albumin 1.5 g/kg day 1, 1 g/kg day 3', 'SBP prophylaxis in cirrhosis: daily norfloxacin or TMP-SMX if prior SBP, low ascitic protein, or GI bleed'],
    ['Septic shock', 'Abscess formation (secondary)', 'Recurrence of SBP (70% at 1 year without prophylaxis)', 'Hepatorenal syndrome', 'Death'],
    'Peritonitis is a serious infection of the lining of the abdomen. It can happen if an organ like the appendix bursts, or spontaneously in people with liver disease who have fluid in the abdomen. It causes severe belly pain and requires urgent treatment with antibiotics and often surgery.',
    ['Severe abdominal pain with rigid abdomen', 'Fever with known ascites or cirrhosis', 'Signs of septic shock', 'Abdominal distension with absent bowel sounds'],
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/**
 * Search infectious conditions by name, organism, description, or clinical features.
 * Returns entries whose searchable text includes the query (case-insensitive).
 */
export function searchInfectiousConditions(query: string): InfectiousConditionEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return Object.values(INFECTIOUS_CONDITIONS).filter((entry) => {
    const searchable = [
      entry.name,
      entry.nameEs,
      entry.organism,
      entry.description,
      ...entry.clinicalFeatures,
      ...entry.diagnostics,
      ...entry.treatment,
      ...entry.complications,
    ]
      .join(' ')
      .toLowerCase();

    return searchable.includes(q);
  });
}

/**
 * Filter infectious conditions by category.
 */
export function getInfectiousConditionsByCategory(
  category: InfectiousCondCategory,
): InfectiousConditionEntry[] {
  return Object.values(INFECTIOUS_CONDITIONS).filter(
    (entry) => entry.category === category,
  );
}

/**
 * Retrieve a single infectious condition by its ID.
 * Returns undefined if not found.
 */
export function getInfectiousConditionById(
  id: string,
): InfectiousConditionEntry | undefined {
  return INFECTIOUS_CONDITIONS[id];
}

/**
 * Get all available infectious condition categories with their entry counts.
 */
export function getInfectiousConditionCategoryCounts(): Record<InfectiousCondCategory, number> {
  const counts = {
    respiratory: 0,
    urinary: 0,
    'skin-soft-tissue': 0,
    cns: 0,
    bloodstream: 0,
    'bone-joint': 0,
    gi: 0,
    'sexually-transmitted': 0,
  } as Record<InfectiousCondCategory, number>;

  for (const entry of Object.values(INFECTIOUS_CONDITIONS)) {
    counts[entry.category]++;
  }
  return counts;
}
