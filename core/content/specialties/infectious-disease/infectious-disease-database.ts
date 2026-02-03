/**
 * Biological Self — Infectious Disease Specialty Database
 * 48 entries covering bacterial, viral, fungal, parasitic, mycobacterial,
 * HIV, STI, zoonotic, travel-medicine, and antimicrobial stewardship topics.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type InfectiousDiseaseCategory =
  | 'bacterial' | 'viral' | 'fungal' | 'parasitic' | 'mycobacterial'
  | 'hiv' | 'sti' | 'zoonotic' | 'travel-medicine' | 'antimicrobial';

export interface InfectiousDiseaseEntry {
  id: string;
  name: string;
  nameEs: string;
  category: InfectiousDiseaseCategory;
  icd11: string;
  description: string;
  microbiology: string;
  transmission: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  prevention: string[];
  complications: string[];
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const id = (
  id: string, name: string, nameEs: string, category: InfectiousDiseaseCategory,
  icd11: string, description: string, microbiology: string, transmission: string,
  clinicalFeatures: string[], diagnostics: string[], treatment: string[],
  prevention: string[], complications: string[], patientExplanation: string,
): InfectiousDiseaseEntry => ({
  id, name, nameEs, category, icd11, description, microbiology, transmission,
  clinicalFeatures, diagnostics, treatment, prevention, complications, patientExplanation,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const INFECTIOUS_DISEASE_ENTRIES: Record<string, InfectiousDiseaseEntry> = {

  // ===== BACTERIAL (12) =====================================================

  'sepsis': id(
    'sepsis', 'Sepsis & Septic Shock', 'Sepsis y choque séptico', 'bacterial',
    '1G40', 'Life-threatening organ dysfunction caused by a dysregulated host response to infection.',
    'Polymicrobial or single-organism bacteremia; most common: E. coli, S. aureus, S. pneumoniae, Klebsiella spp.',
    'Hematogenous spread from primary focus (lung, urinary, abdominal, skin/soft tissue).',
    ['Fever or hypothermia', 'Tachycardia and tachypnea', 'Hypotension refractory to fluids (septic shock)', 'Altered mental status', 'Elevated lactate >2 mmol/L'],
    ['Blood cultures ×2 before antibiotics', 'Serum lactate', 'CBC, BMP, LFTs, coagulation panel', 'Procalcitonin', 'Source-directed imaging (CXR, CT, UA)'],
    ['Broad-spectrum empiric antibiotics within 1 hour', 'IV crystalloid bolus 30 mL/kg for hypotension', 'Vasopressors (norepinephrine first-line) if MAP <65', 'Source control (drainage, debridement)', 'De-escalate antibiotics based on cultures'],
    ['Early recognition using qSOFA/SOFA criteria', 'Vaccination (pneumococcal, influenza)', 'Aseptic technique for invasive devices', 'Prompt treatment of infections'],
    ['Multi-organ failure', 'DIC', 'ARDS', 'Acute kidney injury', 'Death (mortality 25–40% in septic shock)'],
    'Sepsis is when an infection causes your body to overreact, which can damage organs. It is a medical emergency—fast antibiotics and IV fluids are critical.',
  ),

  'community-acquired-pneumonia': id(
    'community-acquired-pneumonia', 'Community-Acquired Pneumonia (CAP)', 'Neumonía adquirida en la comunidad', 'bacterial',
    'CA40.0', 'Acute lower respiratory infection acquired outside the hospital setting.',
    'S. pneumoniae (most common), H. influenzae, M. pneumoniae, C. pneumoniae, Legionella; viruses in up to 30%.',
    'Inhalation of respiratory droplets or aspiration of oropharyngeal flora.',
    ['Productive cough with purulent sputum', 'Fever and chills', 'Pleuritic chest pain', 'Dyspnea', 'Crackles on auscultation'],
    ['Chest X-ray (lobar consolidation)', 'CBC, BMP, procalcitonin', 'Sputum culture and Gram stain if hospitalized', 'Blood cultures if severe', 'Urinary antigens (Legionella, pneumococcal)'],
    ['Outpatient: amoxicillin or doxycycline; macrolide if atypical suspected', 'Inpatient: beta-lactam + macrolide or respiratory fluoroquinolone', 'ICU: beta-lactam + macrolide ± vancomycin/linezolid if MRSA risk', 'Duration 5–7 days (minimum 5, afebrile ≥48 h)', 'Corticosteroids if severe CAP'],
    ['Pneumococcal and influenza vaccination', 'Smoking cessation', 'Aspiration precautions in at-risk patients'],
    ['Parapneumonic effusion/empyema', 'Lung abscess', 'ARDS', 'Bacteremia', 'Sepsis'],
    'Pneumonia is a lung infection that causes cough, fever, and difficulty breathing. Most people recover with antibiotics, but hospitalization may be needed for severe cases.',
  ),

  'hospital-acquired-pneumonia': id(
    'hospital-acquired-pneumonia', 'Hospital-Acquired / Ventilator-Associated Pneumonia', 'Neumonía nosocomial / asociada al ventilador', 'bacterial',
    'CA40.1', 'Pneumonia developing ≥48 h after hospital admission or ≥48 h after intubation (VAP).',
    'MRSA, Pseudomonas aeruginosa, Klebsiella, Acinetobacter, Enterobacter; often MDR organisms.',
    'Aspiration of colonized oropharyngeal or gastric secretions; contaminated respiratory equipment.',
    ['New or progressive pulmonary infiltrate', 'Fever and leukocytosis', 'Purulent tracheal secretions', 'Worsening oxygenation', 'Hemodynamic instability'],
    ['Chest X-ray or CT', 'Endotracheal aspirate or BAL culture', 'Blood cultures', 'MRSA nasal PCR to guide coverage', 'Procalcitonin'],
    ['Empiric: anti-pseudomonal beta-lactam + vancomycin or linezolid if MRSA risk', 'Adjust based on local antibiogram', 'De-escalate to narrowest effective agent', 'Duration 7 days', 'Consider inhaled antibiotics for MDR gram-negatives'],
    ['Head-of-bed elevation ≥30°', 'Daily sedation vacation and spontaneous breathing trials', 'Oral chlorhexidine care', 'Minimize duration of intubation', 'Hand hygiene'],
    ['Septic shock', 'Empyema', 'Prolonged mechanical ventilation', 'MDR superinfection', 'Death (mortality 20–50%)'],
    'Hospital-acquired pneumonia is a lung infection that develops during a hospital stay, often in patients on ventilators. It requires strong antibiotics targeting resistant bacteria.',
  ),

  'urinary-tract-infection': id(
    'urinary-tract-infection', 'Urinary Tract Infection (UTI)', 'Infección del tracto urinario', 'bacterial',
    'GC08', 'Infection of the urinary system—cystitis (bladder) or pyelonephritis (kidney).',
    'E. coli (75–95% uncomplicated), Klebsiella, Proteus, Enterococcus, S. saprophyticus in young women.',
    'Ascending infection from periurethral flora; catheter-associated in hospital settings.',
    ['Dysuria and urinary frequency/urgency', 'Suprapubic pain (cystitis)', 'Flank pain, fever, CVA tenderness (pyelonephritis)', 'Hematuria', 'Cloudy or malodorous urine'],
    ['Urinalysis (pyuria, nitrites, leukocyte esterase)', 'Urine culture if complicated, recurrent, or pyelonephritis', 'Blood cultures if systemic signs', 'CT abdomen/pelvis if suspected obstruction or abscess'],
    ['Uncomplicated cystitis: nitrofurantoin 5 days, TMP-SMX 3 days, or fosfomycin single dose', 'Pyelonephritis: fluoroquinolone 5–7 days or TMP-SMX 14 days', 'Complicated/septic: IV ceftriaxone or piperacillin-tazobactam', 'Remove/replace catheter if CAUTI'],
    ['Adequate hydration', 'Post-coital voiding', 'Cranberry products (limited evidence)', 'Remove unnecessary urinary catheters early', 'Vaginal estrogen for postmenopausal recurrence'],
    ['Renal abscess', 'Urosepsis', 'Chronic pyelonephritis/scarring', 'Recurrent infections', 'Emphysematous pyelonephritis (diabetics)'],
    'A UTI is a bladder or kidney infection causing painful urination and urgency. Most clear quickly with antibiotics. Drink plenty of water and see a doctor if you develop fever or back pain.',
  ),

  'cellulitis': id(
    'cellulitis', 'Cellulitis & Erysipelas', 'Celulitis y erisipela', 'bacterial',
    '1B70', 'Acute bacterial infection of the skin and subcutaneous tissue.',
    'Purulent: MRSA or MSSA. Non-purulent: Group A Streptococcus (most common), Group G/C Strep.',
    'Entry through skin breaks (trauma, ulcers, tinea pedis, eczema); lymphatic spread.',
    ['Erythema, warmth, swelling, tenderness', 'Rapidly advancing margins', 'Fever and lymphangitic streaking', 'Bullae in severe cases', 'Erysipelas: sharply demarcated, raised edges'],
    ['Clinical diagnosis primarily', 'Blood cultures if systemic toxicity', 'Ultrasound to rule out abscess', 'CBC, CRP', 'Mark borders with pen to track progression'],
    ['Non-purulent mild: oral cephalexin or dicloxacillin', 'Non-purulent severe: IV cefazolin or nafcillin', 'Purulent/MRSA: TMP-SMX or doxycycline; IV vancomycin if severe', 'I&D if abscess present', 'Elevate affected extremity'],
    ['Treat tinea pedis and interdigital maceration', 'Skin moisturization', 'Compression stockings for chronic edema', 'Prophylactic penicillin for recurrent episodes'],
    ['Abscess formation', 'Necrotizing fasciitis', 'Bacteremia/sepsis', 'Lymphedema', 'Recurrence (up to 30%)'],
    'Cellulitis is a skin infection that causes redness, swelling, and warmth. Keep the area elevated, take all your antibiotics, and see a doctor immediately if it spreads quickly or you develop high fever.',
  ),

  'osteomyelitis': id(
    'osteomyelitis', 'Osteomyelitis', 'Osteomielitis', 'bacterial',
    'FA80', 'Infection of bone, classified as acute hematogenous, contiguous, or chronic.',
    'S. aureus (most common overall), Salmonella (sickle cell), Pseudomonas (puncture wounds), coagulase-negative Staph (prosthetic).',
    'Hematogenous seeding (children, IVDU), contiguous spread from soft tissue, or direct inoculation (trauma/surgery).',
    ['Localized bone pain and tenderness', 'Overlying erythema and swelling', 'Fever (may be absent in chronic)', 'Draining sinus tract (chronic)', 'Limited range of motion'],
    ['MRI (gold standard imaging)', 'ESR and CRP (elevated; follow for response)', 'Blood cultures', 'Bone biopsy with culture and histology (definitive)', 'Plain X-rays (changes lag 10–14 days)'],
    ['Empiric: vancomycin + ceftriaxone pending cultures', 'MSSA: nafcillin or cefazolin IV 4–6 weeks', 'MRSA: vancomycin or daptomycin IV 4–6 weeks', 'Surgical debridement for chronic or hardware-associated', 'PO step-down after initial IV if good response'],
    ['Diabetic foot care', 'Prompt wound management', 'Glycemic control', 'Smoking cessation'],
    ['Chronic osteomyelitis', 'Pathologic fracture', 'Septic arthritis', 'Amputation in refractory cases', 'Squamous cell carcinoma in chronic sinus tract'],
    'Osteomyelitis is a bone infection that requires weeks of antibiotics and sometimes surgery. It is important to finish the entire course of treatment to prevent it from becoming chronic.',
  ),

  'infective-endocarditis': id(
    'infective-endocarditis', 'Infective Endocarditis', 'Endocarditis infecciosa', 'bacterial',
    'BB41', 'Infection of the heart valves or endocardial surface, forming vegetations.',
    'Native valve: Viridans strep, S. aureus, Enterococcus. IVDU: S. aureus (tricuspid). Prosthetic early: coagulase-negative Staph. Culture-negative: HACEK, Bartonella, Coxiella.',
    'Bacteremia with seeding of damaged or prosthetic valve endothelium.',
    ['Fever (most common finding)', 'New or changing heart murmur', 'Janeway lesions, Osler nodes, splinter hemorrhages', 'Embolic phenomena (stroke, septic pulmonary emboli)', 'Splenomegaly'],
    ['Modified Duke criteria (2 major or 1 major + 3 minor or 5 minor)', 'Blood cultures ×3 from separate sites', 'Transthoracic echocardiography (TTE) then TEE if negative/prosthetic', 'CBC, ESR, CRP, rheumatoid factor', 'CT/MRI for embolic complications'],
    ['Native valve strep: penicillin G or ceftriaxone 4 weeks ± gentamicin 2 weeks', 'Native valve staph: nafcillin 6 weeks + gentamicin 3–5 days; vancomycin if MRSA', 'Enterococcal: ampicillin + gentamicin or ampicillin + ceftriaxone 6 weeks', 'Prosthetic: vancomycin + gentamicin + rifampin', 'Surgery for HF, uncontrolled infection, large vegetations, emboli'],
    ['Dental hygiene and prophylaxis for high-risk patients', 'Avoid IV drug use', 'Antibiotic prophylaxis before dental procedures in prosthetic valves/prior IE'],
    ['Heart failure (most common indication for surgery)', 'Embolic stroke', 'Mycotic aneurysm', 'Perivalvular abscess', 'Glomerulonephritis'],
    'Endocarditis is a heart valve infection. It needs weeks of IV antibiotics and sometimes heart surgery. Tell your doctors about any prosthetic valves before dental or surgical procedures.',
  ),

  'bacterial-meningitis': id(
    'bacterial-meningitis', 'Bacterial Meningitis', 'Meningitis bacteriana', 'bacterial',
    '1D00', 'Acute infection of the meninges; a medical emergency with high mortality if untreated.',
    'Neonates: GBS, E. coli, Listeria. Children: N. meningitidis, S. pneumoniae. Adults: S. pneumoniae, N. meningitidis. Elderly/immunocompromised: add Listeria.',
    'Hematogenous spread from nasopharyngeal colonization; contiguous (sinusitis, otitis); post-neurosurgical.',
    ['Headache, fever, neck stiffness (classic triad)', 'Photophobia', 'Altered mental status', 'Petechial/purpuric rash (meningococcal)', 'Kernig and Brudzinski signs'],
    ['Lumbar puncture (elevated WBC/protein, low glucose, positive Gram stain/culture)', 'Blood cultures before LP', 'CSF PCR (multiplex meningitis panel)', 'CT head before LP if focal deficits, papilledema, or immunocompromised', 'Serum procalcitonin'],
    ['Do NOT delay antibiotics for imaging', 'Empiric: vancomycin + ceftriaxone; add ampicillin if Listeria risk', 'Dexamethasone before or with first antibiotic dose (S. pneumoniae benefit)', 'Adjust based on CSF culture/sensitivities', 'Duration 7–21 days depending on organism'],
    ['Meningococcal vaccination (MenACWY, MenB)', 'Pneumococcal vaccination', 'Chemoprophylaxis for close contacts of meningococcal cases (rifampin, cipro, or ceftriaxone)', 'Hib vaccination for children'],
    ['Cerebral edema and herniation', 'Seizures', 'Hearing loss', 'Subdural empyema', 'Cognitive impairment and disability'],
    'Bacterial meningitis is a brain infection that requires emergency treatment. Seek immediate medical care for severe headache with fever and stiff neck. Vaccines can prevent many cases.',
  ),

  'clostridioides-difficile': id(
    'clostridioides-difficile', 'Clostridioides difficile Infection', 'Infección por Clostridioides difficile', 'bacterial',
    '1A03', 'Toxin-mediated colitis caused by C. difficile, often following antibiotic exposure.',
    'Clostridioides difficile, a Gram-positive anaerobic spore-forming bacillus producing toxins A (enterotoxin) and B (cytotoxin).',
    'Fecal-oral via spores; nosocomial spread on surfaces and hands; disrupted gut flora from antibiotics.',
    ['Watery diarrhea (≥3 unformed stools/24 h)', 'Lower abdominal cramping', 'Fever and leukocytosis', 'Toxic megacolon in fulminant disease', 'Ileus may mask diarrhea in severe cases'],
    ['Stool PCR for toxin gene (sensitive) or GDH + toxin EIA (two-step)', 'Do not test formed stools or asymptomatic patients', 'CT abdomen if severe (colonic wall thickening, thumbprinting)', 'WBC (leukemoid reaction >15 000 in severe)', 'Serum creatinine and lactate if fulminant'],
    ['Stop inciting antibiotic if possible', 'Initial non-severe: oral vancomycin 125 mg QID × 10 days or fidaxomicin', 'Severe: oral vancomycin 125 mg QID', 'Fulminant: vancomycin 500 mg QID PO + IV metronidazole ± rectal vancomycin', 'Recurrence: fidaxomicin, vancomycin taper/pulse, or fecal microbiota transplant'],
    ['Antibiotic stewardship', 'Contact precautions and hand washing with soap (alcohol gel ineffective against spores)', 'Environmental cleaning with sporicidal agents', 'Bezlotoxumab for high-risk recurrence prevention'],
    ['Toxic megacolon', 'Colonic perforation', 'Recurrence (20–25% after first episode)', 'Sepsis and multi-organ failure', 'Death (fulminant 30–50% mortality)'],
    'C. diff causes severe diarrhea usually after taking antibiotics. Wash hands with soap and water (not just hand sanitizer). Tell your doctor immediately if you develop watery diarrhea during or after antibiotics.',
  ),

  'mrsa-infection': id(
    'mrsa-infection', 'MRSA Infection', 'Infección por SARM', 'bacterial',
    '1C46', 'Infection caused by methicillin-resistant Staphylococcus aureus, both community and healthcare-associated.',
    'S. aureus carrying mecA gene encoding PBP2a, conferring resistance to all beta-lactams. CA-MRSA typically carries SCCmec IV and PVL toxin.',
    'Direct contact with infected wound or colonized person; fomites; healthcare exposure for HA-MRSA.',
    ['Skin abscesses ("spider bite" appearance)', 'Purulent cellulitis', 'Necrotizing pneumonia (PVL-producing)', 'Bacteremia and endocarditis', 'Bone and joint infections'],
    ['Wound culture and sensitivity', 'MRSA nasal PCR (screening)', 'Blood cultures if systemic', 'D-test for clindamycin inducible resistance', 'Imaging as directed by infection site'],
    ['SSTIs: I&D ± TMP-SMX or doxycycline', 'Severe: IV vancomycin (target AUC/MIC 400-600)', 'Bacteremia: vancomycin or daptomycin; NOT daptomycin for pneumonia', 'Bone/joint: vancomycin ± rifampin', 'Alternatives: linezolid, ceftaroline, TMP-SMX'],
    ['Hand hygiene', 'Contact precautions for hospitalized patients', 'Decolonization (mupirocin nasal + chlorhexidine baths) for recurrent SSTIs', 'Do not share personal items'],
    ['Metastatic infection (endocarditis, osteomyelitis)', 'Septic thrombophlebitis', 'Treatment failure from heteroresistance', 'Vancomycin nephrotoxicity', 'Linezolid myelosuppression with prolonged use'],
    'MRSA is a staph infection resistant to many common antibiotics. Keep wounds covered, wash hands often, and do not share towels or razors. It is treatable with special antibiotics.',
  ),

  'necrotizing-fasciitis': id(
    'necrotizing-fasciitis', 'Necrotizing Fasciitis', 'Fascitis necrosante', 'bacterial',
    '1B71', 'Rapidly progressive, life-threatening infection of fascia and subcutaneous tissue requiring emergent surgery.',
    'Type I: polymicrobial (aerobes + anaerobes). Type II: Group A Streptococcus (most feared) or S. aureus. Type III: Vibrio vulnificus (saltwater/raw oysters).',
    'Entry through skin break, surgical wound, or minor trauma; hematogenous spread rarely.',
    ['Pain out of proportion to exam (hallmark)', 'Rapidly spreading erythema with dusky discoloration', 'Crepitus (gas in tissue)', 'Hemorrhagic bullae', 'Systemic toxicity, septic shock'],
    ['Clinical diagnosis—do not delay surgery for imaging', 'LRINEC score (WBC, Hb, Na, glucose, creatinine, CRP)', 'CT with contrast if diagnosis uncertain (fascial gas, fluid tracking)', 'Surgical exploration is diagnostic and therapeutic', 'Blood cultures, wound cultures at surgery'],
    ['Emergent surgical debridement (re-explore every 24–48 h)', 'Broad-spectrum: vancomycin + piperacillin-tazobactam or carbapenem', 'Add clindamycin for toxin suppression (GAS)', 'ICU-level supportive care', 'IVIG for streptococcal toxic shock (controversial)'],
    ['Prompt wound care', 'Avoid saltwater/raw shellfish exposure with liver disease (Vibrio)', 'Diabetic foot surveillance', 'Early evaluation of disproportionate pain with skin changes'],
    ['Limb amputation', 'Multi-organ failure', 'Death (mortality 20–40%, higher with delayed surgery)', 'Extensive disfigurement', 'Long-term rehabilitation needs'],
    'Necrotizing fasciitis ("flesh-eating bacteria") is a surgical emergency. Seek immediate care for severe pain with rapidly spreading redness, especially if the skin becomes dusky or blistered.',
  ),

  'tetanus': id(
    'tetanus', 'Tetanus', 'Tétanos', 'bacterial',
    '1C13', 'Acute neuromuscular disease caused by Clostridium tetani exotoxin (tetanospasmin).',
    'Clostridium tetani, Gram-positive obligate anaerobe forming terminal spores. Produces tetanospasmin that blocks inhibitory neurotransmitter release (glycine, GABA).',
    'Contaminated wounds (soil, rust, feces); neonatal tetanus from unclean umbilical cord care.',
    ['Trismus (lockjaw)', 'Risus sardonicus (facial muscle spasm)', 'Opisthotonus (back arching)', 'Generalized muscle spasms and rigidity', 'Autonomic dysfunction (tachycardia, labile BP)'],
    ['Clinical diagnosis (no confirmatory lab test)', 'Wound culture (low sensitivity)', 'Spatula test (reflex jaw clamp on spatula)', 'Check immunization history', 'Serum antitoxin level <0.01 IU/mL suggests susceptibility'],
    ['Human tetanus immunoglobulin (TIG) 500 IU IM', 'Metronidazole 500 mg IV q8h × 7–10 days (preferred over penicillin)', 'Wound debridement', 'Benzodiazepines for spasm control', 'ICU with mechanical ventilation if severe'],
    ['Tdap/Td vaccination series and boosters every 10 years', 'Wound prophylaxis (TIG + Td for dirty wounds in unimmunized)', 'Neonatal: maternal vaccination and clean delivery practices'],
    ['Respiratory failure from laryngospasm', 'Fractures from severe spasms', 'Aspiration pneumonia', 'Autonomic crisis', 'Death (10–20% even with treatment)'],
    'Tetanus causes severe muscle spasms from a toxin in dirty wounds. It is preventable with vaccination—keep your tetanus shots up to date every 10 years.',
  ),

  'botulism': id(
    'botulism', 'Botulism', 'Botulismo', 'bacterial',
    '1C14', 'Neuroparalytic illness from Clostridium botulinum toxin blocking acetylcholine release.',
    'Clostridium botulinum, Gram-positive anaerobe producing botulinum toxin (7 types A–G; A, B, E most common in humans). Most potent biological toxin known.',
    'Foodborne (improperly canned foods), wound (IVDU, black tar heroin), infant (honey, soil ingestion), iatrogenic (botulinum toxin injection).',
    ['Descending symmetric flaccid paralysis', 'Diplopia, dysarthria, dysphagia (bulbar symptoms first)', 'Dry mouth and constipation', 'Dilated unreactive pupils', 'NO sensory deficits (motor only)'],
    ['Clinical diagnosis confirmed by toxin assay', 'Mouse bioassay or ELISA for botulinum toxin in serum/stool/food', 'EMG: incremental response to rapid repetitive stimulation', 'Stool culture for C. botulinum (infant)', 'LP normal (distinguishes from Guillain-Barré)'],
    ['Equine-derived heptavalent antitoxin (adults)', 'BabyBIG (botulism immune globulin) for infant botulism', 'Supportive care and mechanical ventilation', 'Wound debridement + antibiotics for wound botulism', 'Do NOT give aminoglycosides (worsen blockade)'],
    ['Proper food canning (pressure cooking ≥121°C)', 'No honey for infants <1 year', 'Wound care for IVDU', 'Report to public health immediately'],
    ['Respiratory failure requiring prolonged ventilation', 'Aspiration pneumonia', 'Prolonged weakness (months)', 'Death if untreated (60% → 5% with modern ICU care)', 'Secondary infections'],
    'Botulism causes progressive muscle weakness from a toxin, starting with vision changes and difficulty swallowing. Avoid home-canned foods that look or smell off, and never give honey to babies under 1 year.',
  ),

  // ===== VIRAL (11) =========================================================

  'influenza': id(
    'influenza', 'Influenza', 'Influenza (gripe)', 'viral',
    '1E30', 'Acute respiratory illness caused by influenza A or B viruses with seasonal epidemics.',
    'Influenza A (H1N1, H3N2) and B viruses; RNA orthomyxovirus with segmented genome allowing antigenic shift (A only) and drift.',
    'Respiratory droplets and aerosols; fomites; highly contagious 1 day before to 5–7 days after symptom onset.',
    ['Abrupt onset high fever, myalgias, headache', 'Nonproductive cough and sore throat', 'Fatigue and malaise', 'GI symptoms more common in children', 'Elderly may present atypically'],
    ['Rapid influenza diagnostic test (moderate sensitivity)', 'RT-PCR (gold standard)', 'Clinical diagnosis during peak season', 'CXR if pneumonia suspected'],
    ['Oseltamivir (Tamiflu) within 48 h of symptom onset', 'Baloxavir marboxil (single dose, ≥12 years)', 'Supportive care: antipyretics, hydration', 'Hospitalized/severe: oseltamivir regardless of timing', 'Peramivir IV for those unable to take PO'],
    ['Annual influenza vaccination', 'Respiratory hygiene and hand washing', 'Post-exposure prophylaxis with oseltamivir for high-risk contacts', 'Stay home when symptomatic'],
    ['Secondary bacterial pneumonia (S. aureus, S. pneumoniae)', 'Myocarditis', 'Encephalitis', 'Rhabdomyolysis', 'Reye syndrome (aspirin + influenza in children)'],
    'Flu is a common but serious respiratory virus. Get your flu shot every year, wash your hands, and see a doctor early if you are high-risk, as antivirals work best within 48 hours.',
  ),

  'covid-19': id(
    'covid-19', 'COVID-19', 'COVID-19', 'viral',
    'RA01', 'Disease caused by SARS-CoV-2 ranging from asymptomatic to severe ARDS and multi-organ failure.',
    'SARS-CoV-2, enveloped RNA betacoronavirus binding ACE2 receptors via spike protein. Variants of concern alter transmissibility and immune evasion.',
    'Respiratory aerosols and droplets (primary); fomite and fecal-oral (minor). Incubation 2–14 days.',
    ['Fever, cough, dyspnea', 'Anosmia and ageusia', 'Fatigue and myalgias', 'Hypoxemia out of proportion to symptoms ("happy hypoxia")', 'GI symptoms in 10–20%'],
    ['RT-PCR (nasopharyngeal swab)', 'Rapid antigen test', 'CXR/CT (ground-glass opacities, bilateral)', 'CBC (lymphopenia), D-dimer, ferritin, CRP, LDH', 'IL-6 levels in severe disease'],
    ['Mild: supportive care; nirmatrelvir-ritonavir (Paxlovid) within 5 days if high-risk', 'Moderate/hypoxic: dexamethasone 6 mg × 10 days + remdesivir', 'Severe: add tocilizumab or baricitinib if rapid decompensation', 'Anticoagulation: prophylactic (ICU) or therapeutic (medical floor with elevated D-dimer)', 'Prone positioning for refractory hypoxemia'],
    ['Vaccination (mRNA or updated boosters)', 'Masking in high-risk settings', 'Ventilation and air filtration', 'Pre-exposure prophylaxis for immunocompromised'],
    ['ARDS', 'Thromboembolic events (PE, stroke)', 'MIS-C (children), MIS-A (adults)', 'Long COVID (fatigue, brain fog, dysautonomia)', 'Cardiac complications (myocarditis, arrhythmias)'],
    'COVID-19 is a respiratory illness that ranges from mild cold-like symptoms to severe pneumonia. Stay up to date on vaccinations and see a doctor promptly if you are high-risk.',
  ),

  'rsv-infection': id(
    'rsv-infection', 'Respiratory Syncytial Virus (RSV)', 'Virus sincitial respiratorio (VSR)', 'viral',
    'CA40.0', 'Leading cause of bronchiolitis and pneumonia in infants; significant morbidity in elderly.',
    'RSV, enveloped single-stranded RNA paramyxovirus. F protein mediates fusion and is the target of monoclonal antibodies.',
    'Respiratory droplets and direct contact with secretions; fomite survival up to 6 hours. Peak season: fall/winter.',
    ['Infants: bronchiolitis with wheezing, tachypnea, retractions', 'Coryza and low-grade fever', 'Apnea in premature infants', 'Adults/elderly: URI progressing to pneumonia', 'Feeding difficulty in infants'],
    ['Clinical diagnosis in typical bronchiolitis', 'RSV rapid antigen or RT-PCR (nasal wash/aspirate)', 'CXR: hyperinflation, peribronchial thickening', 'Pulse oximetry (hypoxemia)', 'Respiratory viral panel'],
    ['Supportive: nasal suctioning, supplemental O2, IV fluids', 'High-flow nasal cannula for moderate respiratory distress', 'Ribavirin (rarely used, immunocompromised)', 'No role for bronchodilators or steroids in typical bronchiolitis', 'Nirsevimab for prevention in eligible infants'],
    ['Palivizumab (monthly IM) for high-risk premature infants', 'Nirsevimab (single dose) for all infants entering first RSV season', 'RSV vaccine for adults ≥60 and pregnant individuals (maternal antibodies)', 'Hand hygiene and contact precautions'],
    ['Respiratory failure requiring intubation', 'Apnea', 'Secondary bacterial infection', 'Recurrent wheezing/asthma association', 'Dehydration'],
    'RSV is a common virus causing cold symptoms in adults but can cause serious breathing problems in babies and elderly. Wash hands before touching infants and ask your doctor about preventive treatments.',
  ),

  'ebv-mononucleosis': id(
    'ebv-mononucleosis', 'Infectious Mononucleosis (EBV)', 'Mononucleosis infecciosa (VEB)', 'viral',
    '1E80', 'Self-limited illness caused by EBV, characterized by fever, pharyngitis, and lymphadenopathy.',
    'Epstein-Barr virus (HHV-4), gamma-herpesvirus infecting B lymphocytes and oropharyngeal epithelium. Establishes lifelong latency.',
    'Saliva ("kissing disease"); rarely blood transfusion. Peak incidence ages 15–25.',
    ['Fever, severe pharyngitis, tonsillar exudates', 'Posterior cervical lymphadenopathy', 'Splenomegaly (50%)', 'Fatigue lasting weeks to months', 'Maculopapular rash if given amoxicillin/ampicillin'],
    ['Heterophile antibody (Monospot) test', 'EBV-specific antibodies (VCA IgM/IgG, EBNA)', 'CBC: lymphocytosis with atypical lymphocytes (>10%)', 'LFTs mildly elevated in 80%', 'Peripheral smear: reactive (atypical) lymphocytes'],
    ['Supportive: rest, hydration, antipyretics/analgesics', 'Avoid contact sports for 3–4 weeks (splenic rupture risk)', 'Short-course corticosteroids only for airway obstruction or severe thrombocytopenia', 'Avoid amoxicillin/ampicillin (rash)', 'Acyclovir not effective for uncomplicated mono'],
    ['Avoid sharing utensils and drinks', 'No vaccine available', 'Hand hygiene'],
    ['Splenic rupture', 'Airway obstruction from tonsillar hypertrophy', 'Hemolytic anemia (cold agglutinins)', 'Hepatitis', 'EBV-associated malignancies (Burkitt lymphoma, nasopharyngeal carcinoma, PTLD)'],
    'Mono is a viral infection causing sore throat, swollen glands, and fatigue. Rest, stay hydrated, and avoid sports for at least 3–4 weeks to protect your spleen.',
  ),

  'cmv-infection': id(
    'cmv-infection', 'Cytomegalovirus (CMV) Infection', 'Infección por citomegalovirus (CMV)', 'viral',
    '1D82', 'Ubiquitous herpesvirus causing significant disease in immunocompromised and congenital infection.',
    'CMV (HHV-5), double-stranded DNA beta-herpesvirus. Establishes lifelong latency in myeloid progenitor cells. Reactivates with immunosuppression.',
    'Bodily fluids (saliva, urine, breast milk, sexual contact, blood transfusion); vertical transmission (congenital).',
    ['Immunocompetent: mono-like syndrome, self-limited', 'Congenital: sensorineural hearing loss, microcephaly, petechiae ("blueberry muffin")', 'Transplant: pneumonitis, colitis, hepatitis, retinitis', 'HIV/AIDS: retinitis (CD4 <50), colitis, esophagitis', 'Fever and cytopenias in immunocompromised'],
    ['CMV PCR viral load (quantitative)', 'CMV IgM/IgG serology', 'Tissue biopsy: owl-eye intranuclear inclusions', 'Fundoscopy for retinitis (pizza-pie appearance)', 'CMV antigenemia assay (pp65)'],
    ['Immunocompetent: supportive care', 'Immunocompromised: IV ganciclovir or oral valganciclovir', 'Retinitis: intravitreal ganciclovir + systemic therapy', 'Foscarnet or cidofovir for ganciclovir-resistant CMV', 'Immune reconstitution (ART for HIV, reduce immunosuppression in transplant)'],
    ['CMV-negative blood products for seronegative transplant recipients', 'Universal prophylaxis or preemptive monitoring post-transplant', 'Hand hygiene for pregnant women (avoid toddler saliva/urine)', 'Leukoreduced blood products'],
    ['Ganciclovir-resistant CMV', 'Blindness from retinitis', 'Sensorineural hearing loss (congenital)', 'Graft rejection in transplant', 'Bone marrow suppression from treatment'],
    'CMV is a very common virus that usually causes no symptoms in healthy people but can be serious for transplant patients, people with HIV, and unborn babies. Pregnant women should wash hands after diaper changes.',
  ),

  'herpes-simplex': id(
    'herpes-simplex', 'Herpes Simplex Virus (HSV) Infections', 'Infecciones por virus del herpes simple (VHS)', 'viral',
    '1F00', 'Recurrent mucocutaneous infections caused by HSV-1 (primarily orolabial) and HSV-2 (primarily genital).',
    'HSV-1 and HSV-2, double-stranded DNA alpha-herpesviruses. Establish latency in sensory ganglia (trigeminal for HSV-1, sacral for HSV-2).',
    'Direct contact with active lesions or asymptomatic shedding; vertical transmission during delivery.',
    ['Grouped vesicles on erythematous base ("dewdrop on rose petal")', 'Painful genital ulcers', 'Gingivostomatitis (primary HSV-1)', 'Herpes labialis (cold sores)', 'HSV encephalitis: fever, altered mental status, temporal lobe focus'],
    ['PCR of lesion swab (preferred)', 'Viral culture', 'Tzanck smear (multinucleated giant cells—low sensitivity)', 'Type-specific HSV IgG serology', 'CSF PCR for encephalitis; MRI temporal lobe changes'],
    ['Primary/recurrence: acyclovir, valacyclovir, or famciclovir', 'Suppressive therapy: valacyclovir 500 mg–1 g daily for frequent recurrences', 'HSV encephalitis: IV acyclovir 10 mg/kg q8h × 14–21 days', 'Neonatal HSV: IV acyclovir 20 mg/kg q8h × 14–21 days', 'Ensure adequate hydration (acyclovir nephrotoxicity)'],
    ['Condom use and disclosure to partners', 'Suppressive therapy reduces transmission by ~50%', 'C-section if active genital lesions at delivery', 'Avoid contact with lesions'],
    ['HSV encephalitis (mortality 70% untreated)', 'Neonatal HSV (disseminated, CNS, or skin/eye/mouth)', 'Erythema multiforme', 'HSV keratitis (corneal scarring)', 'Eczema herpeticum in atopic dermatitis'],
    'Herpes causes recurring blisters on the mouth or genitals. Antiviral medicine can shorten outbreaks and reduce spread. It is very common and manageable with treatment.',
  ),

  'varicella-zoster': id(
    'varicella-zoster', 'Varicella-Zoster Virus (VZV)', 'Virus varicela-zóster (VVZ)', 'viral',
    '1E90', 'Primary infection causes varicella (chickenpox); reactivation causes herpes zoster (shingles).',
    'VZV (HHV-3), alpha-herpesvirus. Establishes latency in dorsal root ganglia. Reactivates with aging or immunosuppression.',
    'Highly contagious via airborne and direct contact with vesicular fluid. Contagious 48 h before rash until all lesions crusted.',
    ['Varicella: pruritic vesicular rash in different stages ("crops"), fever', 'Zoster: dermatomal painful vesicular eruption', 'Prodromal pain/tingling before zoster rash', 'Disseminated zoster in immunocompromised', 'Hutchinson sign: V1 involvement → ocular risk'],
    ['Clinical diagnosis usually sufficient', 'PCR of vesicle fluid (definitive)', 'DFA of lesion scraping', 'VZV IgM/IgG serology', 'CSF PCR if meningoencephalitis suspected'],
    ['Varicella (healthy child): supportive, avoid aspirin (Reye syndrome)', 'Varicella (adults/immunocompromised): oral or IV acyclovir', 'Zoster: valacyclovir 1 g TID × 7 days (within 72 h of rash)', 'Postherpetic neuralgia: gabapentin, pregabalin, TCAs, lidocaine patches', 'Zoster ophthalmicus: urgent ophthalmology + antivirals'],
    ['Varicella vaccine (2 doses, children)', 'Shingrix recombinant zoster vaccine (2 doses, adults ≥50 or immunocompromised ≥19)', 'Post-exposure: varicella vaccine within 3–5 days or VZIG for high-risk'],
    ['Postherpetic neuralgia (most common zoster complication)', 'Bacterial superinfection of lesions', 'Pneumonia (varicella—adults)', 'Encephalitis/cerebellar ataxia', 'Herpes zoster ophthalmicus (vision loss)'],
    'Chickenpox and shingles are caused by the same virus. Vaccines prevent both. If you develop a painful rash on one side of your body, see a doctor within 72 hours for antiviral treatment.',
  ),

  'viral-hepatitis': id(
    'viral-hepatitis', 'Viral Hepatitis (A, B, C)', 'Hepatitis viral (A, B, C)', 'viral',
    'DB90', 'Liver inflammation caused by hepatotropic viruses: HAV (acute), HBV (acute/chronic), HCV (chronic).',
    'HAV: RNA picornavirus (fecal-oral). HBV: DNA hepadnavirus (blood/sexual). HCV: RNA flavivirus (blood). HBV/HCV establish chronicity; HAV does not.',
    'HAV: fecal-oral (contaminated food/water). HBV: sexual, percutaneous, perinatal. HCV: percutaneous (IVDU, needlestick), rarely sexual or perinatal.',
    ['Jaundice, dark urine, pale stools', 'RUQ pain and hepatomegaly', 'Fatigue, nausea, anorexia', 'HBV/HCV may be asymptomatic for years', 'Extrahepatic: polyarteritis nodosa (HBV), cryoglobulinemia (HCV)'],
    ['Hepatitis serologic panel (HAV IgM/IgG, HBsAg, anti-HBs, HBcAb, HCV Ab)', 'HBV DNA and HCV RNA (viral load)', 'LFTs (ALT/AST elevation)', 'HCV genotype if treatment planned', 'FibroScan or liver biopsy for fibrosis staging'],
    ['HAV: supportive care; self-limited', 'HBV chronic: tenofovir or entecavir (first-line); PEG-IFN option', 'HCV: direct-acting antivirals (sofosbuvir-velpatasvir pan-genotypic) → 95% cure rate', 'Avoid alcohol and hepatotoxic drugs', 'Monitor for HCC in chronic HBV/HCV (US every 6 months)'],
    ['HAV: vaccination (2 doses), food/water hygiene', 'HBV: vaccination (3 doses), HBIG for neonates of HBsAg+ mothers', 'HCV: no vaccine; harm reduction, needle exchange, IVDU treatment', 'Universal screening: HCV for all adults ≥18, HBV for all adults ≥18'],
    ['Acute liver failure (rare in HAV/HBV)', 'Cirrhosis (HBV/HCV chronic)', 'Hepatocellular carcinoma', 'HBV reactivation with immunosuppression', 'Cryoglobulinemic vasculitis (HCV)'],
    'Hepatitis viruses attack the liver. Hepatitis A is spread through food; B and C through blood. Vaccines prevent A and B. Hepatitis C is now curable with 8–12 weeks of oral medication.',
  ),

  'rabies': id(
    'rabies', 'Rabies', 'Rabia', 'viral',
    '1D82.0', 'Almost universally fatal viral encephalitis transmitted through the bite of an infected animal.',
    'Rabies virus, RNA rhabdovirus (Lyssavirus genus). Travels via peripheral nerves to CNS at ~1 cm/day. Causes Negri bodies (eosinophilic inclusions) in neurons.',
    'Bite or scratch from infected animal (dogs worldwide, bats/raccoons/skunks in US); rarely aerosolized in bat caves or transplant-transmitted.',
    ['Prodrome: fever, paresthesia at bite site', 'Furious (encephalitic) rabies: hydrophobia, aerophobia, agitation', 'Paralytic (dumb) rabies: ascending paralysis', 'Fluctuating consciousness', 'Coma and death within days of symptom onset'],
    ['Clinical suspicion based on exposure history', 'Direct fluorescent antibody (DFA) of nuchal skin biopsy', 'Saliva RT-PCR for rabies RNA', 'Serum and CSF rabies antibodies', 'Brain biopsy/necropsy (Negri bodies—post-mortem)'],
    ['Post-exposure prophylaxis (PEP): wound washing + rabies immunoglobulin (RIG) + 4-dose vaccine series', 'Pre-exposure prophylaxis: 3-dose vaccine for high-risk individuals', 'Once symptomatic: virtually 100% fatal—supportive/palliative care', 'Milwaukee protocol (induced coma)—extremely rare survival'],
    ['Avoid contact with wild/stray animals', 'Vaccinate domestic animals', 'Pre-exposure vaccination for veterinarians, travelers, cave explorers', 'Immediate wound cleansing with soap and water after bite'],
    ['Death (near 100% once symptomatic)', 'Encephalitis', 'Autonomic dysfunction', 'Respiratory failure'],
    'Rabies is nearly always fatal once symptoms appear but completely preventable with prompt treatment after an animal bite. Wash the wound with soap and water immediately and seek emergency care right away.',
  ),

  'dengue': id(
    'dengue', 'Dengue Fever', 'Dengue', 'viral',
    '1D20', 'Mosquito-borne viral illness endemic in tropics; second infection risks severe hemorrhagic disease.',
    'Dengue virus (DENV 1–4), RNA flavivirus. Antibody-dependent enhancement (ADE) on reinfection with different serotype increases severity.',
    'Aedes aegypti and A. albopictus mosquitoes; peridomestic day-biting. No person-to-person transmission. Endemic in >100 countries.',
    ['High fever, severe headache, retro-orbital pain', 'Myalgias and arthralgias ("breakbone fever")', 'Maculopapular rash (appears with defervescence)', 'Hemorrhagic manifestations: petechiae, mucosal bleeding', 'Severe: plasma leakage, shock (dengue hemorrhagic fever)'],
    ['NS1 antigen (early, days 1–5)', 'Dengue IgM/IgG serology (after day 5)', 'RT-PCR for dengue RNA', 'CBC: leukopenia, thrombocytopenia, hemoconcentration', 'Warning signs: abdominal pain, persistent vomiting, rising hematocrit'],
    ['Supportive: oral/IV hydration, acetaminophen', 'Avoid NSAIDs and aspirin (bleeding risk)', 'Careful fluid management in severe dengue (avoid overhydration)', 'Platelet transfusion only for active hemorrhage, not for counts', 'Monitor for critical phase at defervescence (days 3–7)'],
    ['Mosquito control (eliminate standing water)', 'DEET or picaridin insect repellent', 'Long sleeves and mosquito nets', 'Dengvaxia vaccine (seropositive individuals only; risk of ADE in seronegative)', 'Newer vaccines (TAK-003/Qdenga) approved in some regions'],
    ['Dengue hemorrhagic fever', 'Dengue shock syndrome', 'Organ failure (liver, myocarditis)', 'Encephalitis', 'Death (severe dengue mortality 2–5% with treatment, 20% without)'],
    'Dengue is a mosquito-borne fever common in tropical areas. Use insect repellent and eliminate standing water. Seek medical care if you develop severe abdominal pain or bleeding after a fever breaks.',
  ),

  'zika': id(
    'zika', 'Zika Virus', 'Virus del Zika', 'viral',
    '1D48', 'Mosquito-borne flavivirus with major teratogenic effects (microcephaly) in pregnancy.',
    'Zika virus, RNA flavivirus. Neurotropic; crosses the placenta and targets neural progenitor cells.',
    'Aedes mosquito bite; sexual transmission; vertical (congenital); blood transfusion. 80% of infections asymptomatic.',
    ['Low-grade fever, maculopapular rash', 'Conjunctivitis (non-purulent)', 'Arthralgias (especially small joints)', 'Mild and self-limited in most adults', 'Congenital Zika syndrome: microcephaly, ocular defects, arthrogryposis'],
    ['Zika RT-PCR (serum, urine—best within 14 days)', 'Zika IgM ELISA (cross-reacts with dengue)', 'Plaque reduction neutralization test (PRNT) for confirmation', 'Prenatal ultrasound for fetal microcephaly', 'Amniocentesis PCR if maternal infection confirmed'],
    ['Supportive: rest, fluids, acetaminophen', 'No specific antiviral therapy', 'Avoid aspirin/NSAIDs until dengue excluded', 'Close fetal monitoring if pregnant', 'Developmental follow-up for congenital Zika'],
    ['Mosquito avoidance (DEET, nets, long sleeves)', 'Avoid travel to endemic areas during pregnancy', 'Condom use for 3 months (men) or 2 months (women) after travel/infection', 'Eliminate mosquito breeding sites', 'No approved vaccine yet'],
    ['Congenital Zika syndrome', 'Guillain-Barré syndrome', 'Meningoencephalitis', 'Myelitis', 'Miscarriage or stillbirth'],
    'Zika is a mild illness for most adults but can cause severe birth defects. Pregnant women should avoid travel to Zika areas and use mosquito repellent. Use condoms after returning from endemic areas.',
  ),

  // ===== FUNGAL (6) =========================================================

  'candidiasis': id(
    'candidiasis', 'Candidiasis (Mucocutaneous & Invasive)', 'Candidiasis (mucocutánea e invasiva)', 'fungal',
    '1F23', 'Spectrum from superficial thrush to life-threatening candidemia and deep-organ infection.',
    'Candida species (C. albicans most common; C. auris emerging MDR threat). Dimorphic yeast forming pseudohyphae. Normal flora of GI/GU tract.',
    'Endogenous (gut translocation, mucosal overgrowth) or exogenous (contaminated catheters, healthcare worker hands). Risk: antibiotics, immunosuppression, central lines, TPN.',
    ['Oral thrush: white plaques on buccal mucosa', 'Esophageal: odynophagia, dysphagia (AIDS-defining)', 'Vulvovaginal: pruritus, thick white discharge', 'Candidemia: fever unresponsive to antibiotics, may be asymptomatic', 'Disseminated: endophthalmitis, hepatosplenic candidiasis'],
    ['Blood cultures (sensitivity 50–75% for candidemia)', 'Beta-D-glucan assay (pan-fungal marker)', 'T2Candida panel (rapid molecular)', 'Tissue biopsy with GMS/PAS stain', 'Dilated eye exam for all candidemia (rule out endophthalmitis)'],
    ['Oral thrush: nystatin swish-and-swallow or oral fluconazole', 'Esophageal: fluconazole 14–21 days', 'Candidemia: echinocandin (micafungin, caspofungin) first-line', 'Step-down to fluconazole if susceptible and clinically improved', 'Remove central venous catheters in candidemia'],
    ['Antifungal stewardship', 'Minimize unnecessary antibiotics', 'Early CVC removal', 'Chlorhexidine bathing in ICU', 'C. auris: strict contact precautions, environmental decontamination'],
    ['Endophthalmitis (vision loss)', 'Endocarditis', 'Osteomyelitis', 'C. auris outbreaks (pan-resistant)', 'Mortality 30–40% for candidemia'],
    'Candida is a yeast that normally lives in the body but can overgrow causing thrush or serious bloodstream infections, especially in hospital patients. Oral thrush is treated with antifungal mouth rinse or pills.',
  ),

  'aspergillosis': id(
    'aspergillosis', 'Aspergillosis', 'Aspergilosis', 'fungal',
    '1F21', 'Spectrum of disease from allergic (ABPA) to invasive pulmonary aspergillosis in immunocompromised.',
    'Aspergillus fumigatus (most common), A. niger, A. flavus. Ubiquitous mold with septate hyphae branching at 45° (V-shaped).',
    'Inhalation of airborne conidia (spores) from environment. No person-to-person. Risk: neutropenia, steroids, organ transplant, CGD.',
    ['Invasive: fever, pleuritic pain, hemoptysis, halo sign on CT', 'ABPA: asthma, eosinophilia, mucoid impaction', 'Aspergilloma: hemoptysis from fungal ball in cavity', 'Chronic pulmonary: weight loss, cough in structural lung disease', 'Sinusitis in immunocompromised'],
    ['CT chest: halo sign (early), air crescent sign (recovery)', 'Serum galactomannan (Aspergillus-specific)', 'Beta-D-glucan (nonspecific)', 'BAL culture and galactomannan', 'Biopsy: 45° branching septate hyphae (definitive)'],
    ['Invasive: voriconazole (first-line); isavuconazole alternative', 'Salvage: liposomal amphotericin B or echinocandins', 'ABPA: oral corticosteroids ± itraconazole', 'Aspergilloma: observation or surgical resection if hemoptysis', 'Therapeutic drug monitoring of voriconazole (trough 1–5.5 µg/mL)'],
    ['HEPA filtration for neutropenic patients', 'Posaconazole prophylaxis in prolonged neutropenia', 'Avoid construction areas during immunosuppression', 'Antifungal prophylaxis post-transplant'],
    ['Fatal invasive aspergillosis (mortality 30–95%)', 'Massive hemoptysis (aspergilloma)', 'CNS aspergillosis', 'Voriconazole toxicity (visual, hepatic, phototoxicity)', 'Bronchiectasis in ABPA'],
    'Aspergillus is a mold found everywhere in the environment. It rarely affects healthy people but can cause serious lung infections in those with weakened immune systems. Avoid moldy environments if immunosuppressed.',
  ),

  'cryptococcosis': id(
    'cryptococcosis', 'Cryptococcosis', 'Criptococosis', 'fungal',
    '1F26', 'Opportunistic fungal infection primarily causing meningitis in HIV/AIDS (CD4 <100).',
    'Cryptococcus neoformans (pigeon droppings, worldwide) and C. gattii (tree exposure, Pacific NW). Encapsulated yeast; polysaccharide capsule is major virulence factor.',
    'Inhalation of desiccated yeast from environment. No person-to-person. Hematogenous spread to CNS.',
    ['Meningitis: subacute headache, fever, altered mental status', 'Elevated intracranial pressure (papilledema, CN VI palsy)', 'Pulmonary: cough, dyspnea (may be subclinical)', 'Skin: umbilicated papules mimicking molluscum (disseminated)', 'Indolent course over weeks'],
    ['CSF: India ink (budding yeast with halo), cryptococcal antigen (CrAg) titer', 'Serum CrAg (highly sensitive screening)', 'CSF opening pressure (often >25 cm H2O)', 'Fungal blood and CSF cultures', 'CT/MRI brain (rule out mass lesion before LP)'],
    ['Induction: amphotericin B liposomal + flucytosine × 2 weeks', 'Consolidation: fluconazole 400 mg/day × 8 weeks', 'Maintenance: fluconazole 200 mg/day until immune reconstitution', 'Serial LPs for elevated ICP (therapeutic drainage to <20 cm H2O)', 'Delay ART 4–6 weeks to avoid IRIS'],
    ['Screen serum CrAg in HIV patients with CD4 <100', 'Fluconazole preemptive therapy if CrAg+ and asymptomatic', 'ART for immune reconstitution', 'Avoid pigeon roosts if severely immunocompromised'],
    ['Fatal if untreated', 'Elevated ICP causing brain herniation', 'IRIS with ART initiation', 'Hearing loss', 'Cognitive impairment'],
    'Cryptococcal meningitis is a serious brain infection mainly affecting people with advanced HIV. It causes headaches, fever, and confusion. Starting HIV treatment and antifungal drugs together, with proper timing, is critical.',
  ),

  'histoplasmosis': id(
    'histoplasmosis', 'Histoplasmosis', 'Histoplasmosis', 'fungal',
    '1F28', 'Endemic mycosis of the Ohio and Mississippi River valleys; ranges from asymptomatic to disseminated disease.',
    'Histoplasma capsulatum, dimorphic fungus (mold at 25°C, yeast at 37°C). Found in soil enriched with bat/bird droppings. Intracellular yeast in macrophages.',
    'Inhalation of microconidia from disturbed soil (cave exploration, demolition, chicken coops). No person-to-person.',
    ['Acute pulmonary: flu-like illness, cough, fever', 'Chronic pulmonary: mimics TB in COPD patients', 'Disseminated: hepatosplenomegaly, pancytopenia, oral ulcers, adrenal insufficiency', 'Mediastinal granuloma or fibrosing mediastinitis', 'Immunocompromised: progressive disseminated (AIDS-defining if CD4 <150)'],
    ['Urine and serum Histoplasma antigen (most sensitive for disseminated)', 'Histoplasma antibody (complement fixation, immunodiffusion)', 'Fungal culture (slow—2–4 weeks)', 'Tissue biopsy: small intracellular yeast in macrophages', 'CXR: hilar lymphadenopathy, diffuse infiltrates'],
    ['Mild/moderate acute: observation or itraconazole 6–12 weeks', 'Severe/disseminated: liposomal amphotericin B induction → itraconazole 12 months', 'Chronic pulmonary: itraconazole 12–24 months', 'Lifelong suppressive itraconazole if unable to achieve immune reconstitution', 'Itraconazole TDM (trough >1 µg/mL)'],
    ['Avoid high-risk exposures (caves, bird roosts)', 'Respiratory protection (N95) during soil disruption in endemic areas', 'Itraconazole prophylaxis for severely immunocompromised in endemic areas'],
    ['Fibrosing mediastinitis (rare, devastating)', 'Pericarditis', 'Adrenal insufficiency (disseminated)', 'IRIS in HIV patients starting ART', 'Death in untreated disseminated disease'],
    'Histoplasmosis is a fungal infection from breathing in spores found in soil with bat or bird droppings, common in the Ohio/Mississippi River valleys. Most people recover on their own, but immunocompromised patients need treatment.',
  ),

  'coccidioidomycosis': id(
    'coccidioidomycosis', 'Coccidioidomycosis (Valley Fever)', 'Coccidioidomicosis (fiebre del valle)', 'fungal',
    '1F27', 'Endemic mycosis of the southwestern US and Latin America; 60% asymptomatic, can disseminate.',
    'Coccidioides immitis/posadasii, dimorphic fungus. Arthroconidia (mold form) in soil; spherules with endospores in tissue.',
    'Inhalation of arthroconidia from disturbed desert soil. No person-to-person. Endemic in Arizona, California Central Valley, Mexico.',
    ['Acute pulmonary: cough, fever, chest pain, arthralgias ("desert rheumatism")', 'Erythema nodosum or erythema multiforme (good prognosis)', 'Pulmonary cavitation or nodules', 'Disseminated: skin, bone, meningitis (basilar)', 'Risk for dissemination: immunosuppressed, Filipino, African American, pregnant (3rd trimester)'],
    ['Coccidioides IgM/IgG serology (complement fixation, immunodiffusion)', 'CSF complement fixation titer (meningitis)', 'Tissue: spherules with endospores on biopsy', 'Fungal culture (highly infectious—biosafety level 3)', 'CXR/CT: nodules, cavities, hilar adenopathy'],
    ['Mild: observation and follow-up (60% self-resolve)', 'Moderate/prolonged: fluconazole or itraconazole 3–6 months', 'Severe/disseminated: liposomal amphotericin B → azole step-down', 'Meningitis: lifelong fluconazole (intrathecal amphotericin B if refractory)', 'Pregnant: amphotericin B (azoles teratogenic)'],
    ['Avoid dust exposure in endemic areas during windstorms', 'N95 mask for soil-disturbing activities in endemic regions', 'No vaccine available', 'Preemptive fluconazole for solid organ transplant recipients in endemic areas'],
    ['Chronic pulmonary cavitation with hemoptysis', 'Basilar meningitis (hydrocephalus)', 'Vertebral osteomyelitis', 'Relapse after therapy discontinuation', 'Death in disseminated/meningeal disease if untreated'],
    'Valley Fever is a fungal infection from breathing in desert dust in the southwestern US. Most people get better on their own, but some need antifungal medication, especially if immunocompromised.',
  ),

  'pneumocystis-pneumonia': id(
    'pneumocystis-pneumonia', 'Pneumocystis jirovecii Pneumonia (PJP)', 'Neumonía por Pneumocystis jirovecii (PCP)', 'fungal',
    '1F22', 'Opportunistic fungal pneumonia in immunocompromised, classically in HIV/AIDS (CD4 <200).',
    'Pneumocystis jirovecii, atypical fungus (cannot be cultured). Classified as fungus by rRNA but has unique cell membrane (no ergosterol—resistant to amphotericin B).',
    'Person-to-person via respiratory route. Reactivation of latent infection or new acquisition in immunosuppressed host.',
    ['Gradual onset dyspnea over days to weeks', 'Dry nonproductive cough', 'Fever', 'Hypoxemia, especially with exertion', 'Exam often benign (clear lungs despite severe hypoxia)'],
    ['CXR: bilateral diffuse ground-glass opacities', 'CT: ground-glass opacities, may spare apices', 'LDH elevated (nonspecific but sensitive)', 'Beta-D-glucan elevated', 'Induced sputum or BAL with DFA or PCR for P. jirovecii (definitive)'],
    ['TMP-SMX (first-line) 21 days for HIV, 14 days for non-HIV', 'Adjunctive prednisone if PaO2 <70 mmHg or A-a gradient >35', 'Alternatives: pentamidine IV, atovaquone, dapsone + TMP, clindamycin + primaquine', 'Supplemental oxygen', 'Start or optimize ART (after 2 weeks of PJP treatment)'],
    ['TMP-SMX prophylaxis when CD4 <200 or CD4% <14% in HIV', 'Prophylaxis for transplant, prolonged corticosteroids, chemotherapy', 'Alternatives: dapsone, atovaquone, aerosolized pentamidine', 'Immune reconstitution with ART—discontinue prophylaxis when CD4 >200 for 3+ months'],
    ['Respiratory failure', 'Pneumothorax', 'IRIS on ART initiation', 'Treatment failure (TMP-SMX allergy management)', 'Death (HIV: 10–20%; non-HIV: 30–60%)'],
    'PJP is a lung infection seen in people with very weakened immune systems, especially untreated HIV. Preventive antibiotics and HIV treatment are highly effective at stopping this infection.',
  ),

  // ===== MYCOBACTERIAL (3) ==================================================

  'pulmonary-tuberculosis': id(
    'pulmonary-tuberculosis', 'Pulmonary Tuberculosis', 'Tuberculosis pulmonar', 'mycobacterial',
    '1B10', 'Chronic granulomatous infection of the lungs by M. tuberculosis; leading infectious cause of death globally.',
    'Mycobacterium tuberculosis, acid-fast bacillus (AFB). Slow-growing obligate aerobe with mycolic acid-rich cell wall. Intracellular pathogen surviving in macrophages.',
    'Airborne droplet nuclei (1–5 µm). Prolonged close contact needed. Latent TB is NOT contagious.',
    ['Chronic cough >2–3 weeks', 'Hemoptysis', 'Night sweats and weight loss', 'Fever and fatigue', 'Upper lobe cavitary disease on imaging'],
    ['CXR: upper lobe infiltrates, cavitation, hilar adenopathy', 'Sputum AFB smear and culture ×3 (gold standard)', 'GeneXpert MTB/RIF (rapid PCR with rifampin resistance)', 'Tuberculin skin test (TST/PPD) or IGRA for latent TB', 'CT chest for unclear cases; lymph node biopsy if extrapulmonary'],
    ['Active: RIPE therapy (rifampin, isoniazid, pyrazinamide, ethambutol) × 2 months → RI × 4 months', 'DOT (directly observed therapy) recommended', 'INH + vitamin B6 (prevent peripheral neuropathy)', 'MDR-TB: individualized regimen based on susceptibilities (bedaquiline-based)', 'Respiratory isolation until 3 negative sputum AFB smears on treatment'],
    ['Latent TB treatment: 4 months rifampin (preferred) or 3 months INH + rifapentine (3HP) or 9 months INH', 'BCG vaccine (neonates in endemic countries—not routinely used in US)', 'Contact investigation for all active cases', 'Airborne precautions in healthcare settings'],
    ['Drug-resistant TB (MDR, XDR)', 'Hemoptysis/Rasmussen aneurysm', 'Aspergilloma in cavities', 'Miliary/disseminated TB', 'Drug hepatotoxicity (INH, PZA)'],
    'TB is a serious lung infection that spreads through the air. It requires months of multiple antibiotics taken consistently. Latent TB (no symptoms) can be treated to prevent future disease.',
  ),

  'extrapulmonary-tb': id(
    'extrapulmonary-tb', 'Extrapulmonary Tuberculosis', 'Tuberculosis extrapulmonar', 'mycobacterial',
    '1B12', 'TB involving organs outside the lungs; more common in immunocompromised and children.',
    'Mycobacterium tuberculosis spreading hematogenously or via lymphatics from primary pulmonary focus.',
    'Initial pulmonary acquisition then dissemination. Not directly contagious unless concurrent pulmonary TB or draining lesion.',
    ['TB lymphadenitis: painless cervical node (scrofula)', 'Skeletal: vertebral (Pott disease), cold abscess', 'TB meningitis: cranial nerve palsies, basilar enhancement', 'Pleural TB: lymphocytic exudative effusion', 'Miliary TB: diffuse millet-seed pattern, multi-organ failure'],
    ['Site-specific sampling (biopsy, aspirate, CSF, pleural fluid)', 'AFB smear and culture of specimen', 'GeneXpert MTB/RIF on tissue/fluid', 'Caseating granulomas on histopathology', 'ADA (adenosine deaminase) elevated in TB pleural/peritoneal/CSF fluid'],
    ['Same RIPE regimen as pulmonary TB', 'TB meningitis: extend to 9–12 months + adjunctive dexamethasone', 'Bone/joint: extend to 6–9 months; surgical debridement if needed', 'Pericardial TB: consider adjunctive steroids', 'Drain abscesses and effusions as indicated'],
    ['Same as pulmonary TB', 'Screen and treat latent TB in immunocompromised', 'ART for HIV to prevent dissemination'],
    ['Hydrocephalus (TB meningitis)', 'Spinal cord compression (Pott disease)', 'Constrictive pericarditis', 'Paradoxical worsening on treatment (IRIS)', 'Adrenal insufficiency (adrenal TB)'],
    'TB can affect organs beyond the lungs including lymph nodes, spine, and brain. It requires a longer course of the same medications used for lung TB. Early diagnosis improves outcomes.',
  ),

  'mac-infection': id(
    'mac-infection', 'Mycobacterium avium Complex (MAC)', 'Complejo Mycobacterium avium (MAC)', 'mycobacterial',
    '1B11', 'Non-tuberculous mycobacterial infection; disseminated in AIDS (CD4 <50) or pulmonary in structural lung disease.',
    'Mycobacterium avium and M. intracellulare. Slow-growing, ubiquitous environmental organism found in water, soil, and biofilms.',
    'Environmental acquisition (water, soil); no person-to-person. Inhalation or ingestion in immunocompromised.',
    ['Disseminated (AIDS): fever, night sweats, weight loss, diarrhea, hepatosplenomegaly', 'Pulmonary (non-AIDS): chronic cough, fibrocavitary or nodular bronchiectatic pattern', 'Lady Windermere syndrome: middle lobe/lingula nodular bronchiectasis in elderly women', 'Lymphadenitis in children', 'Anemia and elevated alkaline phosphatase'],
    ['AFB blood culture (isolator lysis centrifugation) for disseminated', 'Sputum AFB culture (requires ATS criteria: clinical + radiographic + microbiologic)', 'CT chest: tree-in-bud nodules, bronchiectasis, cavitation', 'Lymph node or tissue biopsy with AFB culture', 'Must distinguish from M. tuberculosis by speciation'],
    ['Disseminated: clarithromycin + ethambutol + rifabutin; treat until immune reconstitution', 'Pulmonary nodular/bronchiectatic: azithromycin + ethambutol + rifampin (3× weekly)', 'Pulmonary cavitary: daily therapy same agents', 'Treat for 12 months after culture conversion', 'Start ART for HIV (delay to avoid IRIS if severely ill)'],
    ['Azithromycin prophylaxis if CD4 <50 and not on ART (less common now with early ART)', 'Immune reconstitution with ART (best prevention)', 'No environmental avoidance is practical'],
    ['Immune reconstitution inflammatory syndrome (IRIS)', 'Drug interactions (rifabutin with PIs/NNRTIs)', 'Macrolide resistance from monotherapy or prophylaxis', 'Optic neuritis from ethambutol', 'Persistent infection despite treatment'],
    'MAC is a bacterial infection from the environment that mainly affects people with very low immune systems (advanced HIV) or those with chronic lung conditions. It needs months of combination antibiotics.',
  ),

  // ===== HIV (5) ============================================================

  'acute-hiv': id(
    'acute-hiv', 'Acute HIV Infection', 'Infección aguda por VIH', 'hiv',
    '1C60', 'Symptomatic primary HIV infection occurring 2–4 weeks after exposure; high viral load and transmissibility.',
    'HIV-1 (most common) or HIV-2, lentivirus (retrovirus). Infects CD4+ T cells, macrophages, and dendritic cells via gp120/gp41 binding to CD4 and CCR5/CXCR4 coreceptors.',
    'Sexual contact (most common), percutaneous (needlestick, IVDU), perinatal, breast milk. Acute phase has extremely high viral load.',
    ['Acute retroviral syndrome (50–90%): fever, pharyngitis, lymphadenopathy, rash', 'Maculopapular rash on trunk', 'Mucocutaneous ulcers', 'Myalgias, headache, diarrhea', 'Resembles mononucleosis'],
    ['4th-generation HIV Ag/Ab combo test (p24 antigen + HIV-1/2 antibodies)', 'HIV RNA viral load (detectable before antibodies)', 'If Ag/Ab positive → HIV-1/2 differentiation assay', 'CBC: lymphopenia then lymphocytosis with atypical lymphocytes', 'CD4 count (may be transiently depressed)'],
    ['Start ART immediately (same day if possible)', 'Preferred: integrase inhibitor-based regimen (bictegravir/TAF/FTC or dolutegravir + TAF/FTC)', 'Genotype resistance testing at diagnosis (do not wait for results to start ART)', 'Treatment as prevention (U=U: undetectable = untransmittable)', 'Link to comprehensive HIV care'],
    ['Pre-exposure prophylaxis (PrEP) for high-risk: TDF/FTC or TAF/FTC daily or injectable cabotegravir', 'Post-exposure prophylaxis (PEP) within 72 hours: TDF/FTC + dolutegravir × 28 days', 'Condom use', 'Needle exchange and harm reduction', 'Routine opt-out HIV screening'],
    ['Rapid CD4 decline', 'Opportunistic infections during seroconversion (rare)', 'Establishment of viral reservoirs', 'Increased transmission risk during acute viremia', 'Immune activation and inflammation'],
    'Acute HIV infection causes a flu-like illness 2–4 weeks after exposure. Early testing and immediate treatment are critical. Modern HIV treatment allows a near-normal life and prevents transmission to others.',
  ),

  'chronic-hiv': id(
    'chronic-hiv', 'Chronic HIV Infection', 'Infección crónica por VIH', 'hiv',
    '1C62.0', 'Clinical latency phase of HIV with gradual CD4 decline over years if untreated.',
    'HIV-1 establishes latent reservoirs in resting CD4+ T cells, lymphoid tissue. Ongoing low-level replication despite clinical latency. Average 8–10 years to AIDS without treatment.',
    'Ongoing transmission risk proportional to viral load; undetectable viral load eliminates transmission.',
    ['Often asymptomatic for years', 'Generalized lymphadenopathy', 'Recurrent herpes zoster', 'Oral hairy leukoplakia', 'Thrombocytopenia, constitutional symptoms'],
    ['HIV viral load monitoring (every 3–6 months)', 'CD4 count (every 3–6 months, less often if stable)', 'HIV genotype and tropism testing', 'Metabolic panel, lipids (ART side effects)', 'Screening: STIs, hepatitis, TB, cervical/anal cancer'],
    ['ART for ALL patients regardless of CD4 count', 'Preferred: INSTI-based regimen (bictegravir/TAF/FTC)', 'Goal: undetectable viral load (<50 copies/mL) by 6 months', 'Adherence counseling is critical', 'Switch regimens for virologic failure (>200 copies/mL on 2 tests) with resistance testing'],
    ['ART adherence and retention in care', 'U=U counseling', 'PrEP for HIV-negative partners', 'Regular STI screening', 'Substance use treatment'],
    ['Progression to AIDS if untreated', 'ART-associated metabolic syndrome', 'Cardiovascular disease (accelerated)', 'HIV-associated neurocognitive disorder', 'Non-AIDS malignancies'],
    'Living with HIV is manageable with daily medication. Taking your medicine every day keeps the virus undetectable, protects your health, and prevents transmission to partners.',
  ),

  'aids': id(
    'aids', 'AIDS (Acquired Immunodeficiency Syndrome)', 'SIDA (síndrome de inmunodeficiencia adquirida)', 'hiv',
    '1C62.1', 'Advanced HIV disease defined by CD4 <200 cells/µL or an AIDS-defining illness.',
    'Profound immune depletion from HIV allows opportunistic infections and malignancies. CD4 <200: increased risk; CD4 <100: severe risk; CD4 <50: highest risk.',
    'Same as HIV. Severely immunocompromised state, not a separate infectious agent.',
    ['Opportunistic infections (PJP, toxo, MAC, CMV, crypto)', 'Wasting syndrome (>10% body weight loss)', 'AIDS-defining malignancies (Kaposi sarcoma, CNS lymphoma, cervical cancer)', 'HIV encephalopathy/dementia', 'Chronic diarrhea'],
    ['CD4 count <200 or AIDS-defining condition', 'Opportunistic infection workup based on presentation', 'HIV viral load (often very high)', 'Imaging guided by symptoms', 'Biopsy for masses or unexplained findings'],
    ['Start ART (timing depends on specific OI)', 'Treat active opportunistic infection first', 'OI prophylaxis based on CD4: <200 PJP, <100 toxo, <50 MAC', 'Nutritional support', 'Management of AIDS-related malignancies'],
    ['Early HIV diagnosis and ART initiation', 'Retention in care and adherence support', 'OI prophylaxis per CD4 thresholds', 'Regular screening for opportunistic infections', 'Partner notification and prevention'],
    ['Death from opportunistic infections', 'Immune reconstitution inflammatory syndrome (IRIS)', 'Progressive multifocal leukoencephalopathy (PML)', 'CMV retinitis and blindness', 'Wasting and malnutrition'],
    'AIDS is the most advanced stage of HIV. With modern treatment, many people recover their immune function and live full lives. The key is starting HIV treatment and staying on it.',
  ),

  'opportunistic-infections': id(
    'opportunistic-infections', 'HIV Opportunistic Infections', 'Infecciones oportunistas del VIH', 'hiv',
    '1C62.2', 'Infections that occur with increased frequency or severity due to HIV-related immunosuppression.',
    'Various pathogens exploiting immune deficiency. Risk stratified by CD4 count: <200 PJP/Candida; <100 Toxoplasma/Crypto; <50 MAC/CMV.',
    'Varies by pathogen: reactivation of latent infection (Toxoplasma, CMV, TB) or new acquisition (Crypto, PJP, MAC).',
    ['CD4 <200: PJP (dyspnea, dry cough), esophageal candidiasis', 'CD4 <100: cerebral toxoplasmosis (ring-enhancing lesions), cryptococcal meningitis', 'CD4 <50: CMV retinitis, disseminated MAC', 'Any CD4: TB, Kaposi sarcoma (HHV-8), lymphoma', 'Multiple concurrent OIs possible'],
    ['CD4 count and viral load', 'Blood cultures (fungal, mycobacterial)', 'Serum CrAg, beta-D-glucan, galactomannan', 'Imaging: CT/MRI brain, CT chest', 'LP for meningitis workup; tissue biopsy for mass lesions'],
    ['Treat specific OI with targeted therapy', 'Initiate ART (timing varies: 2 weeks for most OIs, 4–6 weeks for crypto meningitis/TB meningitis)', 'OI prophylaxis per guidelines', 'Discontinue prophylaxis when CD4 recovers >200 for 3+ months on ART', 'Monitor for IRIS'],
    ['Early ART before severe immunosuppression', 'Routine CD4 monitoring and OI prophylaxis', 'Latent TB screening and treatment', 'Toxoplasma IgG at diagnosis to assess reactivation risk', 'CMV IgG at diagnosis'],
    ['IRIS (paradoxical worsening after ART)', 'Multi-organ failure', 'Permanent neurologic deficits', 'Blindness (CMV retinitis)', 'Death'],
    'Opportunistic infections happen when HIV weakens the immune system. They are preventable with HIV treatment and prophylactic medications. Regular doctor visits and blood tests help catch problems early.',
  ),

  'art-principles': id(
    'art-principles', 'Antiretroviral Therapy (ART) Principles', 'Principios de la terapia antirretroviral (TAR)', 'hiv',
    'XM4BK5', 'Foundation of HIV management: combination therapy to achieve viral suppression and immune reconstitution.',
    'ART targets HIV lifecycle: entry (maraviroc), reverse transcription (NRTIs, NNRTIs), integration (INSTIs), proteolysis (PIs). Combination prevents resistance.',
    'N/A (therapeutic intervention).',
    ['Goal: undetectable viral load and rising CD4', 'Pill burden reduction with single-tablet regimens', 'Drug interactions (CYP3A4, UGT)', 'Metabolic side effects (weight gain with INSTIs, renal with TDF, lipids with PIs)', 'Adherence is critical for success'],
    ['HIV genotype before starting ART', 'HLA-B*5701 before abacavir (hypersensitivity risk)', 'Hepatitis B status (TDF/TAF treat both)', 'Renal function and bone density (TDF caution)', 'Baseline viral load and CD4 count'],
    ['Preferred initial: bictegravir/TAF/FTC (Biktarvy) or dolutegravir + TAF/FTC', 'Alternative: dolutegravir/lamivudine (2-drug regimen) if HBV-negative, VL <500k', 'Long-acting: cabotegravir + rilpivirine IM every 2 months', 'Salvage: darunavir/ritonavir + optimized backbone + ibalizumab/fostemsavir/lenacapavir', 'Switch for simplification, side effects, or drug interactions'],
    ['ART for all regardless of CD4', 'PrEP for high-risk negatives', 'PEP within 72 hours of exposure', 'Treatment as prevention (U=U)', 'Rapid ART start programs'],
    ['Drug resistance from non-adherence', 'IRIS on ART initiation', 'Metabolic syndrome and cardiovascular risk', 'Renal tubular dysfunction (TDF)', 'Osteoporosis and fragility fractures'],
    'HIV treatment uses a combination of medicines (usually one pill daily) to control the virus. Taking your medicine every day is the most important thing you can do. An undetectable viral load means you cannot transmit HIV.',
  ),

  // ===== STI (6) ============================================================

  'syphilis': id(
    'syphilis', 'Syphilis', 'Sífilis', 'sti',
    '1A60', 'Systemic STI caused by Treponema pallidum with distinct clinical stages.',
    'Treponema pallidum, spirochete bacterium. Cannot be cultured in vitro. Penetrates intact mucosa and disseminates hematogenously.',
    'Sexual contact (vaginal, anal, oral); vertical (congenital); rarely blood transfusion.',
    ['Primary: painless chancre at inoculation site', 'Secondary: diffuse maculopapular rash (palms/soles), condylomata lata, mucous patches', 'Latent: asymptomatic with positive serology', 'Tertiary: gummas, aortitis, tabes dorsalis, general paresis', 'Congenital: Hutchinson teeth, saddle nose, interstitial keratitis'],
    ['Non-treponemal: RPR or VDRL (screening, quantitative for monitoring)', 'Treponemal: FTA-ABS or TP-PA (confirmatory, stays positive for life)', 'Reverse algorithm: treponemal first → reflex RPR', 'Darkfield microscopy of chancre (primary)', 'CSF VDRL for neurosyphilis; LP if neurologic/ocular symptoms or treatment failure'],
    ['Primary/secondary/early latent: benzathine penicillin G 2.4 MU IM × 1', 'Late latent/unknown duration: benzathine penicillin G 2.4 MU IM weekly × 3', 'Neurosyphilis/ocular/otic: aqueous penicillin G IV × 10–14 days', 'Penicillin allergy: desensitize (no substitute for neurosyphilis or pregnancy)', 'Jarisch-Herxheimer reaction within 24 h of treatment (self-limited fever/rigors)'],
    ['Condom use', 'Regular STI screening for high-risk populations', 'Partner notification and treatment', 'Prenatal syphilis screening (all pregnancies, first trimester)', 'Doxycycline post-exposure prophylaxis (doxy-PEP) in high-risk MSM'],
    ['Neurosyphilis (meningitis, cranial nerve palsies, dementia)', 'Cardiovascular syphilis (aortitis, aortic regurgitation)', 'Gummatous disease', 'Congenital syphilis (stillbirth, hydrops, multisystem disease)', 'Ocular syphilis (uveitis, vision loss)'],
    'Syphilis is a curable STI that progresses through stages. A single shot of penicillin cures early syphilis. Get tested regularly if sexually active, and always complete treatment and follow-up blood tests.',
  ),

  'gonorrhea': id(
    'gonorrhea', 'Gonorrhea', 'Gonorrea', 'sti',
    '1A70', 'Common bacterial STI; rising antimicrobial resistance is a major public health concern.',
    'Neisseria gonorrhoeae, Gram-negative intracellular diplococcus. Antigenic variation of pili and Opa proteins evades immunity. Infects columnar epithelium.',
    'Sexual contact (genital, anal, oral, pharyngeal); vertical (ophthalmia neonatorum).',
    ['Males: urethritis with purulent discharge, dysuria', 'Females: often asymptomatic; cervicitis, vaginal discharge, abnormal bleeding', 'Pharyngeal: usually asymptomatic', 'Rectal: proctitis with discharge, tenesmus', 'Disseminated gonococcal infection (DGI): petechial rash, tenosynovitis, septic arthritis'],
    ['NAAT (nucleic acid amplification test) of urine, cervical/urethral/pharyngeal/rectal swab', 'Gram stain of urethral discharge (GNIDCs—males only, not reliable for other sites)', 'Culture with sensitivities (critical for resistance monitoring)', 'Test all potentially exposed sites (genital, pharyngeal, rectal)', 'Co-test for chlamydia, syphilis, HIV'],
    ['Uncomplicated: ceftriaxone 500 mg IM × 1 (1 g if ≥150 kg)', 'If chlamydia not excluded: add doxycycline 100 mg BID × 7 days', 'DGI: ceftriaxone 1 g IV/IM daily until improved → PO cefixime', 'Pharyngeal: test of cure at 7–14 days (harder to eradicate)', 'Treat partners (EPT: expedited partner therapy)'],
    ['Condom use', 'Regular screening: sexually active women <25, MSM every 3–12 months', 'Partner notification and treatment', 'Erythromycin eye ointment for neonatal prophylaxis', 'Doxy-PEP for high-risk MSM'],
    ['PID and tubal infertility (females)', 'Epididymitis (males)', 'Disseminated gonococcal infection', 'Ophthalmia neonatorum', 'Antibiotic-resistant gonorrhea (emerging global threat)'],
    'Gonorrhea is a common curable STI that can cause discharge and pain. It is treated with an antibiotic injection. Both you and your partner need treatment. Get tested regularly if sexually active.',
  ),

  'chlamydia': id(
    'chlamydia', 'Chlamydia', 'Clamidia', 'sti',
    '1A80', 'Most commonly reported bacterial STI; major cause of preventable infertility.',
    'Chlamydia trachomatis serovars D–K (genital), L1–L3 (lymphogranuloma venereum). Obligate intracellular bacterium with unique biphasic lifecycle (elementary/reticulate bodies).',
    'Sexual contact; vertical (neonatal conjunctivitis, pneumonia). Incubation 7–21 days.',
    ['Often asymptomatic (70% women, 50% men)', 'Mucopurulent cervicitis or urethritis', 'Dysuria and urethral discharge (males)', 'Rectal: proctitis (LGV)', 'Reactive arthritis (Reiter syndrome): arthritis, urethritis, conjunctivitis'],
    ['NAAT of urine or swab (gold standard)', 'Self-collected vaginal swab (equally sensitive)', 'Test pharyngeal and rectal sites in MSM', 'Co-test for gonorrhea', 'Screen annually: all sexually active women <25, MSM, pregnant women'],
    ['Doxycycline 100 mg BID × 7 days (preferred over azithromycin due to resistance)', 'Alternative: azithromycin 1 g single dose', 'Pregnancy: azithromycin 1 g single dose', 'LGV: doxycycline × 21 days', 'Test of cure at 4 weeks in pregnancy; retest all patients at 3 months'],
    ['Condom use', 'Annual screening for women <25 and other high-risk groups', 'Expedited partner therapy (EPT)', 'Prenatal screening', 'Doxy-PEP for high-risk MSM'],
    ['PID (15–30% if untreated)', 'Tubal factor infertility and ectopic pregnancy', 'Chronic pelvic pain', 'Perihepatitis (Fitz-Hugh-Curtis syndrome)', 'Neonatal conjunctivitis and pneumonia'],
    'Chlamydia is the most common bacterial STI and often has no symptoms. Annual screening is recommended for young women. It is easily cured with antibiotics—make sure your partner is treated too.',
  ),

  'hpv-infection': id(
    'hpv-infection', 'Human Papillomavirus (HPV)', 'Virus del papiloma humano (VPH)', 'sti',
    '1A95', 'Most common STI worldwide; certain strains cause genital warts, others cause cervical and other cancers.',
    'HPV, small non-enveloped DNA virus (>200 types). Low-risk: 6, 11 (warts). High-risk: 16, 18 (70% cervical cancers), 31, 33, 45, etc. Infects basal epithelial cells.',
    'Skin-to-skin/mucosal contact (sexual or non-sexual). Condoms reduce but do not eliminate risk. Most infections transient (90% clear within 2 years).',
    ['Genital warts (condylomata acuminata): flesh-colored papules/cauliflower', 'Cervical dysplasia (often asymptomatic)', 'Oropharyngeal cancer (HPV-16)', 'Anal intraepithelial neoplasia', 'Recurrent respiratory papillomatosis (vertical transmission)'],
    ['Clinical diagnosis for warts', 'Cervical cytology (Pap smear) and HPV co-testing', 'HPV genotyping (16/18)', 'Colposcopy and biopsy for abnormal Pap', 'Anal Pap for high-risk MSM and HIV+'],
    ['Genital warts: patient-applied (imiquimod, podofilox) or provider-applied (cryotherapy, TCA)', 'CIN 1: observation', 'CIN 2/3: excisional procedure (LEEP) or ablation', 'No antiviral therapy for HPV', 'Cancer: standard oncologic management'],
    ['HPV vaccination (9-valent Gardasil 9): ages 9–26 (up to 45 shared decision)', 'Regular cervical cancer screening (Pap + HPV co-testing every 5 years ages 30–65)', 'Condom use (partial protection)', 'Smoking cessation (impairs HPV clearance)'],
    ['Cervical cancer', 'Oropharyngeal cancer (rising incidence)', 'Anal cancer', 'Vulvar and penile cancer', 'Recurrent respiratory papillomatosis'],
    'HPV is extremely common—most sexually active people get it. The HPV vaccine prevents the cancer-causing types and is recommended for preteens. Regular Pap smears detect cervical changes early.',
  ),

  'genital-herpes': id(
    'genital-herpes', 'Genital Herpes', 'Herpes genital', 'sti',
    '1A91', 'Chronic recurrent STI caused by HSV-2 (most) or HSV-1; lifelong infection with episodic reactivation.',
    'HSV-2 (majority of genital herpes) and HSV-1 (increasing proportion). Establishes latency in sacral ganglia. Reactivation triggered by stress, illness, immunosuppression.',
    'Direct genital-genital or oral-genital contact; asymptomatic shedding accounts for majority of transmission.',
    ['Primary: multiple painful vesicles/ulcers, inguinal lymphadenopathy, systemic symptoms', 'Recurrent: prodromal tingling → fewer, milder lesions', 'Atypical: fissures, erythema without vesicles', 'Neonatal herpes via birth canal', 'Asymptomatic shedding common'],
    ['PCR of lesion swab (preferred)', 'Viral culture of vesicular fluid', 'Type-specific HSV IgG serology (not IgM—unreliable)', 'Distinguish HSV-1 vs HSV-2 for prognosis counseling', 'Screen HSV-serodiscordant couples'],
    ['Primary: valacyclovir 1 g BID × 7–10 days', 'Episodic recurrence: valacyclovir 500 mg BID × 3 days', 'Suppressive: valacyclovir 500 mg–1 g daily (reduces recurrence 70–80% and transmission ~50%)', 'C-section if active lesions at delivery', 'Acyclovir IV for severe/disseminated'],
    ['Daily suppressive therapy reduces transmission', 'Condom use (50% risk reduction)', 'Disclosure to sexual partners', 'Avoid intercourse during outbreaks and prodromal symptoms', 'Suppressive therapy from 36 weeks gestation to prevent neonatal exposure'],
    ['Neonatal herpes (high morbidity/mortality)', 'HSV meningitis (Mollaret meningitis—recurrent lymphocytic)', 'Urinary retention from sacral radiculitis', 'Psychological impact and stigma', 'Increased HIV acquisition risk (3-fold)'],
    'Genital herpes is very common and manageable. Antiviral medicine can reduce outbreaks and transmission. Many people have mild or no symptoms. Talk openly with your doctor and partner about management.',
  ),

  'trichomoniasis': id(
    'trichomoniasis', 'Trichomoniasis', 'Tricomoniasis', 'sti',
    '1A92', 'Most common curable non-viral STI worldwide, caused by a flagellated protozoan.',
    'Trichomonas vaginalis, motile flagellated protozoan. Adheres to squamous epithelium via adhesins. Cytotoxic to vaginal epithelial cells.',
    'Sexual contact; rarely fomites (moist towels). Incubation 5–28 days. Men often asymptomatic carriers.',
    ['Women: frothy yellow-green malodorous vaginal discharge, vulvar irritation', 'Strawberry cervix (colpitis macularis) on exam', 'Vaginal pH >4.5', 'Men: usually asymptomatic; mild urethritis', 'Dysuria and dyspareunia'],
    ['NAAT (most sensitive, now preferred)', 'Wet mount: motile trichomonads (60–70% sensitive)', 'Rapid antigen or DNA probe test', 'Vaginal pH (>4.5)', 'Screen all HIV+ women annually'],
    ['Metronidazole 500 mg BID × 7 days (preferred in women) or 2 g single dose', 'Tinidazole 2 g single dose (alternative)', 'Treat sexual partners concurrently', 'Test of cure at 3 months (high reinfection rate)', 'Metronidazole-resistant: tinidazole higher dose or intravaginal'],
    ['Condom use', 'Partner treatment', 'Screen HIV+ women and high-risk populations', 'Retest at 3 months post-treatment'],
    ['Preterm birth and low birth weight', 'Increased HIV acquisition and transmission', 'PID (with other coinfections)', 'Recurrent/resistant infection', 'Psychosocial impact'],
    'Trich is a very common curable STI. It often causes discharge with odor in women but no symptoms in men. Both partners must be treated at the same time. Use condoms to prevent reinfection.',
  ),

  // ===== PARASITIC (5) ======================================================

  'malaria': id(
    'malaria', 'Malaria', 'Malaria (paludismo)', 'parasitic',
    '1F40', 'Mosquito-borne parasitic disease; leading infectious cause of death in sub-Saharan Africa.',
    'Plasmodium species: P. falciparum (severe, most deaths), P. vivax (most widespread, relapse), P. ovale (relapse), P. malariae (chronic), P. knowlesi (SE Asia, simian). Intraerythrocytic lifecycle.',
    'Female Anopheles mosquito bite (dusk to dawn). Rarely: blood transfusion, needlestick, congenital.',
    ['Cyclical fevers with rigors (tertian/quartan)', 'Headache, myalgias, malaise', 'Splenomegaly', 'Severe (P. falciparum): cerebral malaria, severe anemia, ARDS, renal failure', 'Thrombocytopenia common'],
    ['Thick and thin blood smears (gold standard: species ID and parasitemia %)', 'Rapid diagnostic test (HRP2 antigen for P. falciparum)', 'CBC (anemia, thrombocytopenia)', 'Metabolic panel (hypoglycemia, acidosis in severe)', 'LDH, haptoglobin (hemolysis markers)'],
    ['Uncomplicated P. falciparum: ACT (artemisinin-based combination therapy, e.g., artemether-lumefantrine)', 'Severe: IV artesunate (drug of choice) → ACT when able to take PO', 'P. vivax/ovale: chloroquine + primaquine 14 days (check G6PD first for hemolysis)', 'Chloroquine-resistant areas: ACT', 'Exchange transfusion if parasitemia >10% (severe falciparum)'],
    ['Chemoprophylaxis for travelers: atovaquone-proguanil, doxycycline, or mefloquine', 'DEET insect repellent and permethrin-treated bed nets', 'Indoor residual spraying', 'RTS,S/AS01 (Mosquirix) and R21/Matrix-M vaccines in endemic areas', 'Avoid dusk-to-dawn outdoor exposure'],
    ['Cerebral malaria (seizures, coma)', 'Severe malarial anemia', 'Acute kidney injury and blackwater fever', 'Hypoglycemia (from disease and quinine)', 'Death (P. falciparum mortality 15–20% if severe)'],
    'Malaria is a serious tropical disease spread by mosquitoes. Use insect repellent, sleep under treated bed nets, and take preventive medicine when traveling to malaria areas. Seek care immediately for fever after travel.',
  ),

  'toxoplasmosis': id(
    'toxoplasmosis', 'Toxoplasmosis', 'Toxoplasmosis', 'parasitic',
    '1F50', 'Common parasitic infection; severe in immunocompromised (brain abscess) and congenital infection.',
    'Toxoplasma gondii, obligate intracellular protozoan. Cats are definitive host (oocysts in feces). Tissue cysts persist lifelong in brain and muscle.',
    'Ingestion of oocysts (cat feces, contaminated soil/water), tissue cysts (undercooked meat), or vertical (congenital).',
    ['Immunocompetent: usually asymptomatic or mild cervical lymphadenopathy', 'AIDS (CD4 <100): cerebral toxoplasmosis—headache, focal neurologic deficits, seizures', 'Congenital: chorioretinitis, hydrocephalus, intracranial calcifications', 'Ocular: retinochoroiditis', 'Disseminated in transplant recipients'],
    ['Toxoplasma IgG/IgM serology', 'MRI brain: multiple ring-enhancing lesions (basal ganglia) in AIDS', 'Empiric treatment trial for cerebral toxo in AIDS (clinical/radiographic improvement in 2 weeks)', 'PCR of CSF or tissue', 'Brain biopsy if no response to empiric therapy'],
    ['Cerebral toxo: pyrimethamine + sulfadiazine + leucovorin × 6 weeks then maintenance', 'Alternative: TMP-SMX', 'Immunocompetent: usually self-limited; treat if severe/prolonged', 'Congenital: pyrimethamine + sulfadiazine + leucovorin × 12 months', 'Reduce immunosuppression in transplant'],
    ['Cook meat thoroughly (>67°C)', 'Wash fruits and vegetables', 'Avoid cat litter if pregnant or immunocompromised', 'TMP-SMX prophylaxis in HIV if CD4 <100 and Toxo IgG+', 'Screen pregnant women in endemic areas'],
    ['Brain herniation', 'Permanent neurologic deficits', 'Congenital blindness and intellectual disability', 'Relapse without maintenance therapy in AIDS', 'Chorioretinitis with vision loss'],
    'Toxoplasmosis is a common parasite infection. Most healthy people have no symptoms. Pregnant women and immunocompromised individuals should avoid cat litter and undercooked meat. It is treatable.',
  ),

  'giardiasis': id(
    'giardiasis', 'Giardiasis', 'Giardiasis', 'parasitic',
    '1A31', 'Most common intestinal parasitic infection in the US; causes chronic diarrhea and malabsorption.',
    'Giardia lamblia (G. duodenalis/intestinalis), flagellated protozoan. Trophozoites (pear-shaped, "face" appearance) colonize duodenum/jejunum. Cysts survive in water.',
    'Fecal-oral: contaminated water (streams, lakes), food, person-to-person (daycare, MSM). Cysts resist chlorination.',
    ['Watery, foul-smelling, greasy diarrhea (steatorrhea)', 'Bloating, flatulence, cramps', 'Nausea and anorexia', 'Weight loss', 'No blood or mucus in stool (non-invasive)'],
    ['Stool antigen test (EIA—preferred)', 'Stool ova and parasites ×3 (trophozoites or cysts)', 'Stool PCR', 'Duodenal aspirate or biopsy (rarely needed)', 'String test (Entero-test) historical'],
    ['Tinidazole 2 g single dose (preferred) or metronidazole 250 mg TID × 5–7 days', 'Nitazoxanide (alternative, pediatric-friendly)', 'Refractory: combination metronidazole + quinacrine or albendazole', 'Lactose-free diet during recovery (secondary lactase deficiency)', 'Treat symptomatic contacts'],
    ['Water purification (boiling, filtration) when hiking/camping', 'Hand hygiene, especially in daycare settings', 'Food safety', 'Avoid swallowing recreational water'],
    ['Chronic diarrhea and malabsorption', 'Failure to thrive in children', 'Lactose intolerance (secondary)', 'IBS-like symptoms post-infection', 'Rarely: reactive arthritis'],
    'Giardia is a waterborne parasite causing diarrhea, bloating, and greasy stools. Avoid drinking untreated stream or lake water. It is easily treated with antiparasitic medication.',
  ),

  'cryptosporidiosis': id(
    'cryptosporidiosis', 'Cryptosporidiosis', 'Criptosporidiosis', 'parasitic',
    '1A32', 'Waterborne protozoal diarrhea; self-limited in immunocompetent but severe/chronic in AIDS.',
    'Cryptosporidium parvum/hominis, obligate intracellular protozoan. Oocysts are immediately infectious and resistant to chlorine disinfection.',
    'Fecal-oral: contaminated water (recreational and drinking), person-to-person, animal contact. Major cause of waterborne outbreaks.',
    ['Profuse watery diarrhea (10–15 L/day in AIDS)', 'Abdominal cramping and nausea', 'Low-grade fever', 'Immunocompetent: self-limited in 1–2 weeks', 'AIDS: chronic, debilitating, potentially fatal (biliary involvement)'],
    ['Modified acid-fast stain of stool (oocysts)', 'Stool antigen (DFA or EIA)', 'Stool PCR (most sensitive)', 'Standard O&P may miss—request specific crypto testing', 'CD4 count in HIV+ patients'],
    ['Immunocompetent: supportive hydration; nitazoxanide 500 mg BID × 3 days', 'AIDS: immune reconstitution with ART is the most effective treatment', 'Nitazoxanide less effective in severe immunosuppression', 'Aggressive fluid and electrolyte replacement', 'Antiretroviral therapy to achieve CD4 >100'],
    ['Water filtration and boiling', 'Avoid swallowing recreational water', 'Hand hygiene after animal contact', 'ART to maintain immune function in HIV', 'Exclude infected individuals from swimming pools'],
    ['Severe dehydration and electrolyte disturbance', 'Sclerosing cholangitis (AIDS)', 'Chronic malnutrition and wasting', 'Pancreatitis', 'Death in untreated AIDS patients'],
    'Crypto is a waterborne parasite causing watery diarrhea. Healthy people recover in 1–2 weeks, but it can be life-threatening in people with weakened immune systems. Avoid swallowing pool or lake water.',
  ),

  'chagas-disease': id(
    'chagas-disease', 'Chagas Disease', 'Enfermedad de Chagas', 'parasitic',
    '1F51', 'Vector-borne protozoal disease endemic to Latin America; leading cause of cardiomyopathy in endemic areas.',
    'Trypanosoma cruzi, flagellated protozoan. Intracellular amastigotes in cardiac and GI smooth muscle. Triatomine ("kissing bug") vector.',
    'Triatomine bug bite (feces rubbed into bite/mucosa); congenital; blood transfusion; organ transplant; oral (contaminated food). Endemic in Central/South America.',
    ['Acute: Romaña sign (unilateral periorbital edema), chagoma at bite site, fever', 'Indeterminate: asymptomatic for decades (60–70%)', 'Chronic cardiac: dilated cardiomyopathy, conduction abnormalities, apical aneurysm', 'Chronic GI: megaesophagus, megacolon', 'Reactivation in immunocompromised (meningoencephalitis)'],
    ['Acute: Giemsa-stained blood smear (trypomastigotes), PCR', 'Chronic: 2 different serologic tests (ELISA, IFA, or immunoblot) both positive', 'ECG: RBBB, left anterior fascicular block (early cardiac)', 'Echocardiography for cardiomyopathy', 'Barium swallow/enema for GI involvement'],
    ['Acute/congenital: benznidazole × 60 days (first-line) or nifurtimox', 'Children and young adults with chronic disease: treat (higher cure rate)', 'Older adults with chronic: treat on case-by-case basis', 'Cardiac: standard HF management, antiarrhythmics, pacemaker/ICD', 'Megaesophagus/megacolon: surgical management'],
    ['Vector control (insecticide-treated housing)', 'Blood supply screening', 'Congenital screening of infants born to seropositive mothers', 'Screen immigrants from endemic areas', 'No vaccine available'],
    ['Dilated cardiomyopathy and sudden cardiac death', 'Complete heart block', 'Stroke from mural thrombi', 'Megaesophagus (aspiration)', 'Reactivation in transplant/HIV'],
    'Chagas disease is caused by a parasite transmitted by "kissing bugs" in Latin America. It can damage the heart decades later. If you lived in an endemic area, ask your doctor about screening.',
  ),

  // ===== ANTIMICROBIAL (3) ==================================================

  'antibiotic-stewardship-principles': id(
    'antibiotic-stewardship-principles', 'Antibiotic Stewardship', 'Uso racional de antibióticos', 'antimicrobial',
    'XM9AX5', 'Systematic approach to optimizing antimicrobial use to improve outcomes while minimizing resistance and adverse effects.',
    'N/A (programmatic intervention). Addresses the ecological impact of antibiotics on microbiome and resistome.',
    'N/A. Focuses on appropriate prescribing, de-escalation, and duration optimization.',
    ['Prospective audit and feedback', 'Formulary restriction and preauthorization', 'Antibiogram-guided empiric therapy', 'De-escalation from broad to narrow spectrum', 'Shortest effective duration (procalcitonin-guided)'],
    ['Local antibiogram review', 'Procalcitonin-guided antibiotic duration', 'Rapid diagnostics (MALDI-TOF, PCR panels) for targeted therapy', 'Pharmacy-driven dose optimization', 'Tracking antimicrobial utilization (DOT/1000 patient-days)'],
    ['Implement ASP (antimicrobial stewardship program) in all hospitals', 'Education on appropriate prescribing', 'IV-to-PO conversion protocols', 'Avoid antibiotics for viral infections', 'Culture before starting antibiotics when possible'],
    ['Stewardship programs reduce resistance emergence', 'Reduce healthcare costs', 'Decrease C. difficile infections', 'Vaccine programs reduce antibiotic need', 'Public education on appropriate antibiotic use'],
    ['Antimicrobial resistance (AMR) from overuse', 'C. difficile infection from broad-spectrum antibiotics', 'Drug adverse effects and toxicities', 'Microbiome disruption', 'Increased healthcare costs'],
    'Antibiotic stewardship means using antibiotics wisely—the right drug, right dose, right duration. This helps antibiotics keep working for everyone. Never take antibiotics for colds or flu.',
  ),

  'resistance-mechanisms': id(
    'resistance-mechanisms', 'Antimicrobial Resistance Mechanisms', 'Mecanismos de resistencia antimicrobiana', 'antimicrobial',
    'XM6AT6', 'Genetic and biochemical mechanisms by which microorganisms evade antimicrobial killing.',
    'Intrinsic or acquired resistance via mutation or horizontal gene transfer (plasmids, transposons, integrons). ESKAPE pathogens: Enterococcus, S. aureus, Klebsiella, Acinetobacter, Pseudomonas, Enterobacter.',
    'N/A. Resistance genes spread via plasmids (conjugation), bacteriophages (transduction), or free DNA (transformation).',
    ['Enzymatic inactivation: beta-lactamases (ESBLs, KPC, NDM, OXA-48)', 'Target modification: PBP2a (MRSA mecA), ribosomal methylation (erm)', 'Efflux pumps: MDR phenotype (tetracyclines, fluoroquinolones)', 'Permeability changes: porin loss (carbapenems in Gram-negatives)', 'Target bypass: vanA/vanB (VRE), altered DHFR (TMP resistance)'],
    ['Culture and susceptibility testing', 'Molecular resistance gene detection (mecA, vanA, KPC, NDM PCR)', 'Phenotypic tests: D-test (inducible clindamycin resistance), modified carbapenem inactivation method', 'Whole-genome sequencing for outbreak investigation', 'Institutional antibiogram tracking'],
    ['ESBL producers: carbapenems (not cephalosporins even if susceptible in vitro)', 'MRSA: vancomycin, daptomycin, linezolid, ceftaroline', 'CRE: ceftazidime-avibactam (KPC), meropenem-vaborbactam, cefiderocol', 'VRE: daptomycin or linezolid', 'MDR Pseudomonas: ceftolozane-tazobactam, cefiderocol, combination therapy'],
    ['Antibiotic stewardship', 'Infection control (hand hygiene, contact precautions)', 'Surveillance cultures for MDR organisms', 'Development of novel antibiotics', 'Phage therapy research'],
    ['Treatment failure and mortality', 'Healthcare outbreaks', 'Pan-drug-resistant organisms (C. auris, XDR TB)', 'Limited therapeutic options', 'Global health crisis (estimated 1.3 million deaths/year attributable to AMR)'],
    'Antibiotic resistance happens when bacteria evolve to survive antibiotics. Using antibiotics only when needed and finishing the full course helps prevent resistance. This is one of the biggest threats to global health.',
  ),

  'drug-allergy-management': id(
    'drug-allergy-management', 'Antimicrobial Drug Allergies', 'Alergias a antimicrobianos', 'antimicrobial',
    'QC44', 'Management of reported drug allergies to ensure safe and optimal antimicrobial prescribing.',
    'N/A. True IgE-mediated penicillin allergy in <1% of those labeled; 90% of "penicillin-allergic" patients tolerate penicillin on testing.',
    'N/A. Drug allergy labels lead to use of broader-spectrum, less effective, more costly alternatives.',
    ['Type I (immediate): urticaria, angioedema, anaphylaxis (within 1 hour)', 'Type IV (delayed): maculopapular rash (most common drug rash)', 'Severe cutaneous: SJS/TEN, DRESS, AGEP', 'GI intolerance is NOT allergy', 'Family history alone does NOT contraindicate use'],
    ['Detailed allergy history (reaction type, timing, severity)', 'Penicillin skin testing (PPL, penicillin G, MDM)', 'Graded dose challenge (if skin test negative)', 'Oral amoxicillin challenge (direct if low-risk history)', 'Cross-reactivity assessment: penicillin → cephalosporin ~1–2%, carbapenem <1%'],
    ['Penicillin skin test negative → use penicillin freely', 'Low-risk history (non-severe, remote, or GI only) → direct oral challenge', 'Cephalosporin generally safe if penicillin allergy non-severe (different side chain)', 'Desensitization for true allergy when drug is essential (e.g., penicillin for syphilis in pregnancy)', 'De-label allergy in medical record after negative testing'],
    ['Allergy assessment and de-labeling programs', 'Accurate documentation of true allergies vs. intolerances', 'Antibiotic stewardship integration', 'Pre-operative penicillin allergy assessment', 'Patient education on true allergy vs. side effect'],
    ['Unnecessary use of vancomycin, fluoroquinolones, aztreonam (suboptimal alternatives)', 'Increased C. difficile and resistant organism risk', 'Worse surgical outcomes with alternative prophylaxis', 'Higher healthcare costs', 'Delayed or suboptimal treatment'],
    'Many people labeled "penicillin-allergic" are not truly allergic. Allergy testing is safe and simple. If you have a penicillin allergy on your chart, ask about testing—it could open up better treatment options for you.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

export function getInfectiousDiseaseEntry(entryId: string): InfectiousDiseaseEntry | undefined {
  return INFECTIOUS_DISEASE_ENTRIES[entryId];
}

export function searchInfectiousDisease(query: string): InfectiousDiseaseEntry[] {
  const q = query.toLowerCase();
  return Object.values(INFECTIOUS_DISEASE_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.category.includes(q) ||
    e.clinicalFeatures.some(f => f.toLowerCase().includes(q)) ||
    e.diagnostics.some(d => d.toLowerCase().includes(q)),
  );
}

export function getInfectiousDiseaseByCategory(cat: InfectiousDiseaseCategory): InfectiousDiseaseEntry[] {
  return Object.values(INFECTIOUS_DISEASE_ENTRIES).filter(e => e.category === cat);
}

export function getInfectiousDiseaseCount(): number {
  return Object.keys(INFECTIOUS_DISEASE_ENTRIES).length;
}
