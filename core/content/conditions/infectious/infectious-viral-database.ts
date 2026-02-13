/**
 * Viral Infectious Disease Conditions Database
 *
 * Comprehensive reference of viral infectious conditions with clinical
 * summaries, diagnostics, treatment, and patient education.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type InfectiousViralCategory = 'viral-systemic' | 'viral-hepatic' | 'viral-respiratory' | 'viral-vector-borne';

export interface InfectiousViralConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: InfectiousViralCategory;
  icd11: string;
  description: string;
  descriptionEs: string;
  riskFactors: string[];
  pathophysiology: string;
  pathophysiologyEs: string;
  symptoms: string[];
  diagnostics: {
    tests: string[];
    imaging: string[];
    criteria: string[];
  };
  treatment: {
    medications: string[];
    procedures: string[];
    lifestyle: string[];
  };
  emergencySigns: string[];
  patientExplanation: string;
  patientExplanationEs: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function viral(
  id: string,
  name: string,
  nameEs: string,
  category: InfectiousViralCategory,
  icd11: string,
  description: string,
  descriptionEs: string,
  riskFactors: string[],
  pathophysiology: string,
  pathophysiologyEs: string,
  symptoms: string[],
  tests: string[],
  imaging: string[],
  criteria: string[],
  medications: string[],
  procedures: string[],
  lifestyle: string[],
  emergencySigns: string[],
  patientExplanation: string,
  patientExplanationEs: string,
): InfectiousViralConditionEntry {
  return {
    id, name, nameEs, category, icd11, description, descriptionEs,
    riskFactors, pathophysiology, pathophysiologyEs, symptoms,
    diagnostics: { tests, imaging, criteria },
    treatment: { medications, procedures, lifestyle },
    emergencySigns, patientExplanation, patientExplanationEs,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const INFECTIOUS_VIRAL_CONDITIONS: Record<string, InfectiousViralConditionEntry> = {

  'hiv-aids': viral(
    'hiv-aids', 'HIV/AIDS', 'VIH/SIDA',
    'viral-systemic', '1C62',
    'Human Immunodeficiency Virus causes progressive immune system failure, eventually leading to Acquired Immunodeficiency Syndrome when CD4 count falls below 200 or opportunistic infections develop. Transmitted through blood, sexual contact, and vertical transmission.',
    'El Virus de Inmunodeficiencia Humana causa fallo progresivo del sistema inmune, eventualmente llevando al Síndrome de Inmunodeficiencia Adquirida cuando el conteo de CD4 cae por debajo de 200 o se desarrollan infecciones oportunistas.',
    ['Unprotected sexual contact', 'Injection drug use with shared needles', 'Blood transfusion (rare in screened blood)', 'Vertical transmission (mother to child)', 'Occupational exposure (healthcare workers)', 'Multiple sexual partners'],
    'HIV infects and destroys CD4+ T-lymphocytes by binding to CD4 receptors and CCR5/CXCR4 co-receptors. Viral RNA is reverse-transcribed into DNA and integrated into the host genome. Progressive CD4 depletion leads to immunodeficiency, allowing opportunistic infections and malignancies.',
    'El VIH infecta y destruye linfocitos T CD4+ al unirse a receptores CD4 y correceptores CCR5/CXCR4. El ARN viral se transcribe inversamente a ADN e integra en el genoma del huésped, causando depleción progresiva de CD4 e inmunodeficiencia.',
    ['Acute HIV: fever, pharyngitis, rash, lymphadenopathy (2-4 weeks post-exposure)', 'Chronic phase: often asymptomatic for years', 'AIDS: recurrent infections, oral thrush, weight loss, chronic diarrhea', 'Night sweats and fatigue', 'Opportunistic infections (PCP, CMV, toxoplasmosis, TB)'],
    ['HIV antibody/antigen combo test (4th generation—detects at 2-4 weeks)', 'HIV-1/HIV-2 differentiation', 'HIV RNA viral load (quantitative PCR)', 'CD4+ T-cell count', 'Resistance testing before starting ART', 'Screen for STIs, hepatitis B/C, TB'],
    ['Chest X-ray if respiratory symptoms (PCP, TB)', 'CT head if neurologic symptoms (toxoplasmosis, CNS lymphoma)', 'Abdominal imaging if indicated'],
    ['CDC AIDS definition: CD4 <200 cells/μL or AIDS-defining illness', 'WHO clinical staging system'],
    ['Antiretroviral therapy (ART): combination of 3+ drugs from 2+ classes', 'Integrase inhibitor-based (dolutegravir or bictegravir) + 2 NRTIs (tenofovir/emtricitabine)', 'Protease inhibitor-based or NNRTI-based alternatives', 'Pre-exposure prophylaxis (PrEP) for high-risk individuals', 'Post-exposure prophylaxis within 72 hours of exposure'],
    ['Opportunistic infection prophylaxis: TMP-SMX for PCP if CD4 <200', 'Azithromycin for MAC if CD4 <50', 'Vaccinations (pneumococcal, influenza, hepatitis A/B)', 'Regular monitoring of viral load and CD4 count'],
    ['Strict medication adherence (>95% for viral suppression)', 'Safe sex practices (condoms, PrEP for partners)', 'Avoid sharing needles', 'Nutritious diet and regular exercise', 'Mental health support', 'Substance use treatment if needed'],
    ['Severe opportunistic infection symptoms', 'CD4 count <50 cells/μL', 'New neurologic symptoms (confusion, seizures, focal deficits)', 'Persistent fever with cough and dyspnea', 'Severe diarrhea with dehydration', 'Vision changes'],
    'HIV is a virus that weakens your immune system over time by attacking the cells that fight infections. With modern antiretroviral therapy (ART), people with HIV can live long, healthy lives with normal life expectancy. The key is taking medications every day as prescribed—this keeps the virus suppressed and prevents progression to AIDS. When the viral load becomes undetectable, you cannot transmit HIV to sexual partners (U=U: undetectable equals untransmittable). Regular follow-ups with your HIV specialist are essential to monitor your immune system and adjust treatment as needed.',
    'El VIH es un virus que debilita el sistema inmune atacando células que combaten infecciones. Con terapia antirretroviral moderna, las personas con VIH pueden vivir vidas largas y saludables con expectativa de vida normal. La clave es tomar medicamentos diariamente—esto mantiene el virus suprimido y previene progresión a SIDA.',
  ),

  'hepatitis-b': viral(
    'hepatitis-b', 'Hepatitis B', 'Hepatitis B',
    'viral-hepatic', '1E50',
    'Hepatitis B virus causes acute and chronic liver inflammation transmitted through blood and body fluids. Chronic infection significantly increases risk of cirrhosis and hepatocellular carcinoma.',
    'El virus de Hepatitis B causa inflamación hepática aguda y crónica transmitida por sangre y fluidos corporales. La infección crónica aumenta significativamente el riesgo de cirrosis y carcinoma hepatocelular.',
    ['Unprotected sexual contact', 'Injection drug use', 'Vertical transmission (mother to infant)', 'Needle stick injury', 'Household contact with chronic HBV carrier', 'Hemodialysis', 'Born in endemic regions (Asia, Africa)'],
    'HBV is a DNA virus that infects hepatocytes. Viral replication causes immune-mediated hepatocyte injury and inflammation. Chronicity depends on age at infection—90% of neonates versus <5% of adults develop chronic infection. Chronic inflammation leads to fibrosis, cirrhosis, and hepatocellular carcinoma through oncogenic integration.',
    'El VHB es un virus ADN que infecta hepatocitos. La replicación viral causa lesión hepatocítica mediada inmunológicamente. La cronicidad depende de la edad—90% de neonatos versus <5% de adultos desarrollan infección crónica.',
    ['Acute: jaundice, dark urine, right upper quadrant pain', 'Fatigue and malaise', 'Nausea, vomiting, anorexia', 'Chronic: often asymptomatic until cirrhosis develops', 'Arthralgias in 10-20%'],
    ['HBsAg (surface antigen—indicates active infection)', 'Anti-HBs (surface antibody—indicates immunity)', 'Anti-HBc IgM/IgG (core antibody—differentiates acute vs chronic)', 'HBeAg and anti-HBe (markers of replication)', 'HBV DNA viral load (quantitative PCR)', 'Liver function tests (ALT, AST, bilirubin)', 'CBC, INR, albumin'],
    ['Abdominal ultrasound (assess liver echotexture, cirrhosis, HCC screening)', 'FibroScan (transient elastography for fibrosis staging)', 'CT or MRI abdomen if mass lesion suspected'],
    ['Chronic HBV: HBsAg positive >6 months', 'Treatment indication: HBV DNA >2000 IU/mL + elevated ALT or significant fibrosis'],
    ['Acute: supportive care (most resolve spontaneously)', 'Chronic active: entecavir or tenofovir (nucleos(t)ide analogues—indefinite therapy)', 'Peginterferon alfa-2a (alternative for selected patients)', 'Liver transplant for decompensated cirrhosis'],
    ['HCC surveillance: ultrasound ± AFP every 6 months if cirrhotic or high-risk', 'Screen household and sexual contacts', 'Hepatitis B vaccination for contacts', 'Liver biopsy if treatment decision unclear'],
    ['No alcohol (accelerates liver damage)', 'Avoid hepatotoxic medications (acetaminophen >2g/day)', 'Healthy diet and weight management', 'Screen for HIV and hepatitis C co-infection', 'Family planning counseling (vertical transmission prevention)'],
    ['Jaundice with confusion or bleeding (acute liver failure)', 'Ascites or leg swelling (decompensated cirrhosis)', 'Vomiting blood or black tarry stools (variceal bleeding)', 'Severe abdominal pain (spontaneous bacterial peritonitis)', 'New right upper quadrant mass (HCC)'],
    'Hepatitis B is a viral infection of the liver that can be acute (short-term) or chronic (lifelong). Many people with chronic hepatitis B have no symptoms for years, but the virus slowly damages the liver, potentially leading to cirrhosis or liver cancer. Fortunately, effective antiviral medications (entecavir or tenofovir) can suppress the virus and prevent complications. If you have chronic hepatitis B, you need lifelong monitoring with blood tests and ultrasounds to catch any problems early. Vaccination can protect your close contacts. Avoid alcohol completely, as it accelerates liver damage.',
    'La Hepatitis B es una infección viral del hígado que puede ser aguda o crónica. Muchas personas con hepatitis B crónica no tienen síntomas por años, pero el virus daña lentamente el hígado. Medicamentos antivirales efectivos pueden suprimir el virus y prevenir complicaciones.',
  ),

  'hepatitis-c': viral(
    'hepatitis-c', 'Hepatitis C', 'Hepatitis C',
    'viral-hepatic', '1E51',
    'Hepatitis C virus causes chronic liver inflammation transmitted primarily through blood. Unlike hepatitis B, hepatitis C is curable with direct-acting antiviral therapy.',
    'El virus de Hepatitis C causa inflamación hepática crónica transmitida principalmente por sangre. A diferencia de hepatitis B, hepatitis C es curable con terapia antiviral de acción directa.',
    ['Injection drug use (most common)', 'Blood transfusion before 1992', 'Needle stick injury', 'Tattoos or piercings with unsterile equipment', 'Hemodialysis', 'Born between 1945-1965 (baby boomers)', 'HIV co-infection'],
    'HCV is an RNA virus that replicates in hepatocytes causing chronic inflammation. Unlike HBV, 75-85% of acute infections become chronic. Chronic infection leads to progressive fibrosis and cirrhosis over 20-30 years. HCV does not integrate into host DNA, making cure possible with viral eradication.',
    'El VHC es un virus ARN que se replica en hepatocitos causando inflamación crónica. A diferencia del VHB, 75-85% de infecciones agudas se vuelven crónicas. El VHC no se integra en ADN del huésped, haciendo posible la cura con erradicación viral.',
    ['Most asymptomatic until advanced liver disease', 'Fatigue (most common symptom)', 'Jaundice rare except in cirrhosis', 'Arthralgias', 'Signs of cirrhosis: ascites, variceal bleeding, encephalopathy'],
    ['Anti-HCV antibody (screening test)', 'HCV RNA viral load (confirms active infection)', 'HCV genotype (guides treatment choice)', 'Liver function tests (ALT, AST, bilirubin, albumin, INR)', 'CBC with platelets', 'Screen for HIV, hepatitis B co-infection'],
    ['FibroScan (transient elastography—non-invasive fibrosis assessment)', 'Abdominal ultrasound (assess for cirrhosis, HCC)', 'CT or MRI if cirrhosis or HCC suspected'],
    ['Chronic HCV: HCV RNA positive', 'Cirrhosis assessment: clinical, labs (low platelets, albumin), imaging'],
    ['Direct-acting antivirals (DAA): pan-genotypic regimens cure >95%', 'Sofosbuvir/velpatasvir 12 weeks (first-line for most)', 'Glecaprevir/pibrentasvir 8-16 weeks', 'Ledipasvir/sofosbuvir (genotype 1)', 'Treatment duration depends on genotype, cirrhosis status, prior treatment'],
    ['Sustained virologic response (SVR) check: HCV RNA at 12 weeks post-treatment', 'HCC surveillance if cirrhotic (ultrasound ± AFP every 6 months)', 'Endoscopy for varices if cirrhotic', 'Liver transplant evaluation if decompensated'],
    ['No alcohol (accelerates fibrosis)', 'Avoid sharing razors, toothbrushes, needles', 'Maintain healthy weight (prevent fatty liver)', 'Medication adherence critical for cure', 'Post-cure: continued HCC surveillance if cirrhotic'],
    ['Signs of liver failure (jaundice, confusion, bleeding)', 'Vomiting blood (variceal bleeding)', 'Tense ascites or fever (spontaneous bacterial peritonitis)', 'Severe fatigue with declining liver function'],
    'Hepatitis C is a viral infection of the liver transmitted through blood contact. The good news is that hepatitis C is now curable—over 95% of people are cured with 8-12 weeks of oral medications called direct-acting antivirals. These medications have few side effects and work by stopping the virus from multiplying. Once cured (confirmed by undetectable virus 12 weeks after treatment), you are no longer infectious and your liver can begin to heal. However, if you already have cirrhosis, you still need ongoing monitoring for liver cancer. Avoid alcohol completely to protect your liver.',
    'La Hepatitis C es una infección viral del hígado transmitida por contacto con sangre. La buena noticia es que hepatitis C ahora es curable—más del 95% se curan con 8-12 semanas de medicamentos orales. Una vez curado, ya no eres infeccioso.',
  ),

  'influenza': viral(
    'influenza', 'Influenza', 'Influenza (Gripe)',
    'viral-respiratory', '1E30',
    'Seasonal influenza is an acute respiratory illness caused by influenza A or B viruses. Highly contagious with potential for severe complications in high-risk populations.',
    'La influenza estacional es una enfermedad respiratoria aguda causada por virus influenza A o B. Altamente contagiosa con potencial para complicaciones severas en poblaciones de alto riesgo.',
    ['Age <5 years or >65 years', 'Pregnancy', 'Chronic medical conditions (asthma, COPD, diabetes, heart disease)', 'Immunosuppression', 'Obesity (BMI ≥40)', 'Healthcare or long-term care facility residents'],
    'Influenza virus enters respiratory epithelium via hemagglutinin binding. Viral neuraminidase cleaves sialic acid, allowing viral spread. Cytokine release causes systemic symptoms. Antigenic drift (minor changes) causes seasonal epidemics; antigenic shift (major changes) causes pandemics.',
    'El virus influenza entra al epitelio respiratorio vía unión de hemaglutinina. La neuraminidasa viral libera ácido siálico permitiendo propagación viral. La liberación de citoquinas causa síntomas sistémicos.',
    ['Abrupt onset of fever (38-40°C)', 'Severe myalgias and headache', 'Dry cough', 'Sore throat', 'Nasal congestion', 'Extreme fatigue lasting weeks', 'Gastrointestinal symptoms more common in children'],
    ['Clinical diagnosis (during flu season)', 'Rapid influenza diagnostic test (RIDT—moderate sensitivity)', 'PCR for influenza A/B (gold standard)', 'Viral culture (rarely needed)', 'Chest X-ray if pneumonia suspected'],
    ['Chest X-ray (if pneumonia suspected—bacterial superinfection common)'],
    ['Influenza-like illness (ILI): fever + cough or sore throat', 'Confirmed influenza: positive PCR or culture'],
    ['Oseltamivir 75mg PO BID × 5 days (start within 48h of symptom onset)', 'Zanamivir, peramivir, or baloxavir alternatives', 'Antibiotics if bacterial superinfection (S. pneumoniae, S. aureus)', 'Antipyretics and analgesics (acetaminophen, ibuprofen)', 'Avoid aspirin in children (Reye syndrome risk)'],
    ['Hospitalization for severe cases (hypoxemia, dehydration, altered mental status)', 'ICU admission for respiratory failure or septic shock', 'Mechanical ventilation if ARDS develops'],
    ['Supportive care: rest, hydration, humidified air', 'Isolation for 5-7 days or until fever resolves', 'Annual influenza vaccination (best prevention)', 'Hand hygiene and respiratory etiquette', 'Antiviral chemoprophylaxis for close contacts if high-risk'],
    ['Difficulty breathing or shortness of breath', 'Persistent chest pain or pressure', 'Confusion or inability to wake', 'Persistent vomiting', 'Cyanosis (bluish lips or face)', 'Fever returning after improvement (bacterial superinfection)'],
    'Influenza (the flu) is a viral respiratory infection that comes on suddenly with high fever, severe body aches, cough, and exhaustion. It is much more severe than the common cold. Most healthy people recover in 1-2 weeks with rest and fluids, but it can be dangerous for young children, older adults, and people with chronic conditions. Antiviral medications like oseltamivir (Tamiflu) can shorten the illness if started within 48 hours of symptoms. The best prevention is the annual flu vaccine, which reduces your risk of infection and severe complications. Seek medical care if you develop difficulty breathing, chest pain, or confusion.',
    'La influenza (gripe) es una infección respiratoria viral que aparece súbitamente con fiebre alta, dolores corporales severos, tos y agotamiento. La mayoría se recupera en 1-2 semanas, pero puede ser peligrosa para niños pequeños, adultos mayores y personas con condiciones crónicas.',
  ),

  'covid-19': viral(
    'covid-19', 'COVID-19', 'COVID-19',
    'viral-respiratory', '1D6Y',
    'Coronavirus disease 2019 caused by SARS-CoV-2 ranges from asymptomatic infection to severe respiratory failure and multi-organ dysfunction. Highly transmissible with ongoing variants.',
    'La enfermedad por coronavirus 2019 causada por SARS-CoV-2 varía desde infección asintomática hasta fallo respiratorio severo y disfunción multiorgánica. Altamente transmisible con variantes continuas.',
    ['Age >65 years', 'Obesity', 'Diabetes', 'Cardiovascular disease', 'Chronic lung disease', 'Immunosuppression', 'Cancer', 'Unvaccinated status'],
    'SARS-CoV-2 binds ACE2 receptors on respiratory epithelium and enters via TMPRSS2. Viral replication causes direct cytopathic effects. Severe disease involves dysregulated immune response (cytokine storm), endothelial damage, and microthrombi leading to ARDS, organ failure, and coagulopathy.',
    'SARS-CoV-2 se une a receptores ACE2 en epitelio respiratorio. La replicación viral causa efectos citopáticos directos. Enfermedad severa involucra respuesta inmune desregulada (tormenta de citoquinas), daño endotelial y microtrombos.',
    ['Fever or chills', 'Cough (usually dry)', 'Dyspnea', 'Fatigue', 'Loss of taste or smell (anosmia, ageusia)', 'Sore throat, headache, myalgias', 'Gastrointestinal symptoms (nausea, diarrhea)', 'Range: asymptomatic to critical illness'],
    ['RT-PCR (gold standard—detects viral RNA)', 'Rapid antigen test (lower sensitivity)', 'D-dimer, ferritin, CRP, LDH (elevated in severe disease)', 'CBC (lymphopenia common)', 'Liver and kidney function tests', 'Troponin if cardiac involvement suspected'],
    ['Chest X-ray (bilateral infiltrates)', 'CT chest (ground-glass opacities, crazy-paving pattern)', 'Pulse oximetry (monitor oxygen saturation)'],
    ['Mild: no dyspnea, SpO2 ≥94%', 'Moderate: dyspnea, SpO2 90-94%', 'Severe: SpO2 <90%, respiratory rate >30', 'Critical: respiratory failure, shock, multi-organ dysfunction'],
    ['Mild-moderate outpatient: nirmatrelvir/ritonavir (Paxlovid) within 5 days if high-risk', 'Remdesivir (hospitalized patients)', 'Dexamethasone 6mg daily (severe/critical cases requiring oxygen)', 'Baricitinib or tocilizumab (IL-6 inhibitor) if progressing on steroids', 'Anticoagulation (prophylactic or therapeutic based on severity)'],
    ['Supplemental oxygen (nasal cannula to high-flow)', 'Non-invasive or invasive mechanical ventilation', 'Prone positioning for ARDS', 'ECMO for refractory hypoxemia', 'Monoclonal antibodies if eligible (variant-dependent)'],
    ['Isolation 5-10 days based on symptoms and test results', 'Vaccination (primary series + boosters—reduces severe disease)', 'Masking in crowded indoor settings during surges', 'Hand hygiene', 'Long COVID management: multidisciplinary care for persistent symptoms', 'Monitor for post-COVID complications (pulmonary fibrosis, cardiac involvement)'],
    ['Difficulty breathing or shortness of breath', 'Persistent chest pain or pressure', 'New confusion or inability to wake', 'Cyanosis (bluish lips or face)', 'SpO2 <90% on room air'],
    'COVID-19 is caused by a coronavirus that primarily affects the lungs but can impact other organs. Most people have mild illness with fever, cough, and fatigue lasting 1-2 weeks. Some lose their sense of taste or smell temporarily. However, older adults and people with underlying conditions are at risk for severe disease requiring hospitalization. Antiviral medications like Paxlovid can prevent progression if started early. Vaccines are highly effective at preventing severe disease, hospitalization, and death—stay up to date with boosters. Some people develop "long COVID" with persistent fatigue, brain fog, or shortness of breath lasting months; multidisciplinary care can help manage these symptoms. Use a pulse oximeter at home to monitor oxygen levels if you have risk factors.',
    'COVID-19 es causada por un coronavirus que afecta principalmente los pulmones. La mayoría tiene enfermedad leve con fiebre, tos y fatiga durando 1-2 semanas. Sin embargo, adultos mayores y personas con condiciones subyacentes están en riesgo de enfermedad severa.',
  ),

  'dengue-fever': viral(
    'dengue-fever', 'Dengue Fever', 'Fiebre del Dengue',
    'viral-vector-borne', '1D2Z.0',
    'Mosquito-borne viral infection endemic to tropical regions causing acute febrile illness. Can progress to severe dengue with plasma leakage, hemorrhage, and organ impairment.',
    'Infección viral transmitida por mosquitos endémica en regiones tropicales causando enfermedad febril aguda. Puede progresar a dengue severo con fuga plasmática, hemorragia y disfunción orgánica.',
    ['Living in or travel to endemic areas (Southeast Asia, Latin America, Africa, Pacific)', 'Aedes aegypti or Aedes albopictus mosquito exposure', 'Prior dengue infection (increases severe dengue risk)', 'Age extremes (infants, elderly)', 'Chronic diseases (diabetes, asthma)'],
    'Dengue virus (4 serotypes: DENV 1-4) transmitted by Aedes mosquitoes. Virus replicates in dendritic cells, macrophages, and endothelium. Antibody-dependent enhancement (ADE) in secondary heterologous infection increases viral uptake, causing cytokine storm, capillary leak, and hemorrhage.',
    'El virus del dengue (4 serotipos) es transmitido por mosquitos Aedes. Replicación viral en células dendríticas, macrófagos y endotelio. Amplificación dependiente de anticuerpos en infección secundaria heteróloga aumenta captación viral.',
    ['Sudden high fever (40°C, "breakbone fever")', 'Severe headache (retro-orbital pain)', 'Myalgias and arthralgias', 'Rash (maculopapular, appears 3-5 days after fever)', 'Mild bleeding (petechiae, gum bleeding, epistaxis)', 'Nausea, vomiting', 'Leucopenia and thrombocytopenia'],
    ['NS1 antigen (early detection—days 1-5)', 'Dengue IgM/IgG serology (after day 5)', 'PCR for dengue RNA (acute phase)', 'CBC (thrombocytopenia <100k, leukopenia, hemoconcentration)', 'Liver enzymes (AST/ALT—often elevated)', 'Coagulation studies if bleeding'],
    ['Chest X-ray (pleural effusion if severe dengue)', 'Abdominal ultrasound (ascites, gallbladder wall thickening)', 'Imaging not routine unless severe dengue suspected'],
    ['Dengue without warning signs: fever + 2 of: nausea, rash, aches, leukopenia, positive tourniquet test', 'Dengue with warning signs: abdominal pain, persistent vomiting, mucosal bleeding, lethargy, hepatomegaly, rising hematocrit with falling platelets', 'Severe dengue: plasma leakage (shock, fluid accumulation), severe bleeding, organ impairment'],
    ['No specific antiviral available', 'Acetaminophen for fever and pain (avoid NSAIDs/aspirin—bleeding risk)', 'Dengue vaccine (Dengvaxia) for seropositive individuals in endemic areas'],
    ['Fluid resuscitation (IV crystalloids for shock)', 'Blood transfusion for severe hemorrhage', 'ICU monitoring for severe dengue', 'Close platelet and hematocrit monitoring'],
    ['Oral or IV hydration (critical during critical phase days 3-7)', 'Rest and mosquito bite prevention (use nets, repellent)', 'Monitor for warning signs (severe abdominal pain, persistent vomiting, bleeding)', 'Avoid mosquito bites while viremic (first 5 days—prevent transmission)', 'Vector control: eliminate standing water, use insecticide'],
    ['Severe abdominal pain or persistent vomiting', 'Bleeding from nose, gums, or in vomit/stool', 'Difficulty breathing or rapid breathing', 'Cold or clammy skin (shock)', 'Extreme fatigue or restlessness', 'Blood in urine', 'Platelet count <20,000'],
    'Dengue fever is a mosquito-borne viral infection common in tropical areas. Most people have flu-like symptoms with high fever, severe headache, body aches (often called "breakbone fever"), and rash. The illness typically lasts 5-7 days. The critical phase is days 3-7 when fever drops—this is when severe dengue can develop with dangerous fluid shifts and bleeding. Stay well-hydrated and watch for warning signs: severe abdominal pain, persistent vomiting, or bleeding. Avoid aspirin and ibuprofen, which increase bleeding risk—use acetaminophen only. If you have had dengue before, you are at higher risk for severe disease with a different dengue strain. Prevent mosquito bites with repellent, long sleeves, and eliminating standing water around your home.',
    'El dengue es una infección viral transmitida por mosquitos común en áreas tropicales. La mayoría tiene síntomas similares a gripe con fiebre alta, dolor de cabeza severo, dolores corporales y erupción. La fase crítica es días 3-7 cuando baja la fiebre.',
  ),

};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single viral condition by ID. */
export function getInfectiousViralConditionById(id: string): InfectiousViralConditionEntry | undefined {
  return INFECTIOUS_VIRAL_CONDITIONS[id];
}

/** Search viral conditions by name, description, symptoms, or any text field (case-insensitive). */
export function searchInfectiousViralConditions(query: string): InfectiousViralConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(INFECTIOUS_VIRAL_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.descriptionEs.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.pathophysiologyEs.toLowerCase().includes(q) ||
    c.symptoms.some(s => s.toLowerCase().includes(q)) ||
    c.patientExplanation.toLowerCase().includes(q) ||
    c.patientExplanationEs.toLowerCase().includes(q),
  );
}

/** Filter viral conditions by category. */
export function getInfectiousViralByCategory(category: InfectiousViralCategory): InfectiousViralConditionEntry[] {
  return Object.values(INFECTIOUS_VIRAL_CONDITIONS).filter(c => c.category === category);
}

/** Get all viral conditions with a specific risk factor (case-insensitive). */
export function getInfectiousViralByRiskFactor(riskFactor: string): InfectiousViralConditionEntry[] {
  const rf = riskFactor.toLowerCase();
  return Object.values(INFECTIOUS_VIRAL_CONDITIONS).filter(c =>
    c.riskFactors.some(r => r.toLowerCase().includes(rf)),
  );
}

/** Return the total number of viral conditions in the database. */
export function getInfectiousViralConditionCount(): number {
  return Object.keys(INFECTIOUS_VIRAL_CONDITIONS).length;
}
