/**
 * Infectious Bacterial Disease Conditions Database
 *
 * Clinical reference for bacterial infectious diseases with
 * diagnostics, treatment, and patient education.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type InfectiousCategory = 'respiratory' | 'urinary' | 'skin' | 'systemic' | 'cns';

export interface InfectiousConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: InfectiousCategory;
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
// Database
// ---------------------------------------------------------------------------

export const INFECTIOUS_BACTERIAL_CONDITIONS: Record<string, InfectiousConditionEntry> = {

  'tuberculosis': {
    id: 'tuberculosis',
    name: 'Tuberculosis',
    nameEs: 'Tuberculosis',
    category: 'respiratory',
    icd11: '1B10',
    description: 'Chronic bacterial infection caused by Mycobacterium tuberculosis, primarily affecting the lungs. Can spread to other organs and is transmitted through airborne droplets.',
    descriptionEs: 'Infección bacteriana crónica causada por Mycobacterium tuberculosis, que afecta principalmente los pulmones. Puede propagarse a otros órganos y se transmite por gotitas en el aire.',
    riskFactors: ['HIV/AIDS', 'Immunosuppression', 'Malnutrition', 'Close contact with TB patient', 'Homelessness', 'Substance abuse', 'Healthcare workers', 'Diabetes', 'Chronic kidney disease'],
    pathophysiology: 'M. tuberculosis bacteria are inhaled and phagocytosed by alveolar macrophages. In primary infection, bacteria replicate within macrophages, forming granulomas. Latent TB occurs when immune response contains but does not eliminate bacteria. Reactivation leads to active disease with caseous necrosis and cavitation.',
    pathophysiologyEs: 'Las bacterias M. tuberculosis se inhalan y son fagocitadas por macrófagos alveolares. En la infección primaria, las bacterias se replican dentro de los macrófagos, formando granulomas. La TB latente ocurre cuando la respuesta inmune contiene pero no elimina las bacterias. La reactivación conduce a enfermedad activa con necrosis caseosa y cavitación.',
    symptoms: ['Chronic cough >3 weeks', 'Hemoptysis', 'Night sweats', 'Weight loss', 'Fever', 'Fatigue', 'Chest pain', 'Loss of appetite'],
    diagnostics: {
      tests: ['Tuberculin skin test (TST)', 'Interferon-gamma release assay (IGRA)', 'Sputum acid-fast bacilli (AFB) smear', 'Sputum culture (gold standard)', 'GeneXpert MTB/RIF PCR'],
      imaging: ['Chest X-ray (upper lobe infiltrates, cavitation)', 'CT chest for extrapulmonary TB'],
      criteria: ['Positive AFB smear or culture', 'Compatible clinical and radiographic findings', 'Positive molecular testing']
    },
    treatment: {
      medications: ['Intensive phase (2 months): Isoniazid, Rifampin, Pyrazinamide, Ethambutol (RIPE)', 'Continuation phase (4 months): Isoniazid + Rifampin', 'Pyridoxine (vitamin B6) to prevent neuropathy', 'DOT (directly observed therapy) recommended'],
      procedures: ['Respiratory isolation for active pulmonary TB', 'Contact tracing and screening', 'Monitoring liver function tests'],
      lifestyle: ['Complete full treatment course (6-9 months)', 'Ensure adequate nutrition', 'Avoid alcohol', 'Wear mask if active disease', 'Regular follow-up']
    },
    emergencySigns: ['Massive hemoptysis', 'Respiratory failure', 'TB meningitis symptoms', 'Altered mental status', 'Severe hepatotoxicity from medications'],
    patientExplanation: 'Tuberculosis is a bacterial infection that usually affects the lungs. It spreads through the air when someone with active TB coughs. Most people who get infected develop latent TB, where the bacteria are dormant. Active TB causes persistent cough, fever, and weight loss. Treatment requires taking multiple antibiotics for at least 6 months to completely cure the infection.',
    patientExplanationEs: 'La tuberculosis es una infección bacteriana que generalmente afecta los pulmones. Se propaga por el aire cuando alguien con TB activa tose. La mayoría de las personas infectadas desarrollan TB latente, donde las bacterias están inactivas. La TB activa causa tos persistente, fiebre y pérdida de peso. El tratamiento requiere tomar múltiples antibióticos durante al menos 6 meses para curar completamente la infección.'
  },

  'community-acquired-pneumonia': {
    id: 'community-acquired-pneumonia',
    name: 'Community-Acquired Pneumonia',
    nameEs: 'Neumonía Adquirida en la Comunidad',
    category: 'respiratory',
    icd11: 'CA40.0',
    description: 'Acute infection of the lung parenchyma acquired outside of healthcare settings. Caused by various bacteria, most commonly Streptococcus pneumoniae. Can range from mild to life-threatening.',
    descriptionEs: 'Infección aguda del parénquima pulmonar adquirida fuera del entorno sanitario. Causada por varias bacterias, más comúnmente Streptococcus pneumoniae. Puede variar de leve a potencialmente mortal.',
    riskFactors: ['Age >65 or <2 years', 'Chronic lung disease (COPD, asthma)', 'Smoking', 'Immunosuppression', 'Heart failure', 'Diabetes', 'Alcoholism', 'Recent viral infection', 'Aspiration risk'],
    pathophysiology: 'Bacteria reach alveoli through aspiration of oropharyngeal secretions or inhalation. Organisms evade upper airway defenses and multiply in alveolar spaces. Inflammatory response causes alveolar filling with neutrophils, fibrin, and fluid, leading to consolidation. This impairs gas exchange and can progress to sepsis.',
    pathophysiologyEs: 'Las bacterias llegan a los alvéolos a través de la aspiración de secreciones orofaríngeas o inhalación. Los organismos evaden las defensas de las vías respiratorias superiores y se multiplican en los espacios alveolares. La respuesta inflamatoria causa el llenado alveolar con neutrófilos, fibrina y líquido, lo que lleva a consolidación. Esto afecta el intercambio de gases y puede progresar a sepsis.',
    symptoms: ['Productive cough with purulent sputum', 'Fever and chills', 'Pleuritic chest pain', 'Dyspnea', 'Tachypnea', 'Crackles on auscultation', 'Fatigue', 'Confusion (especially elderly)'],
    diagnostics: {
      tests: ['Complete blood count (leukocytosis)', 'Blood cultures (before antibiotics)', 'Sputum Gram stain and culture', 'Procalcitonin', 'Arterial blood gas if severe', 'Urinary antigen tests (S. pneumoniae, Legionella)'],
      imaging: ['Chest X-ray (lobar consolidation, infiltrates)', 'CT chest if complicated or unclear'],
      criteria: ['CURB-65 score for severity (Confusion, Urea, Respiratory rate, BP, age ≥65)', 'Pneumonia Severity Index (PSI)']
    },
    treatment: {
      medications: ['Outpatient: Amoxicillin or doxycycline or macrolide', 'Inpatient non-ICU: Beta-lactam + macrolide OR respiratory fluoroquinolone', 'ICU: Beta-lactam + macrolide OR Beta-lactam + fluoroquinolone', 'Duration: 5-7 days for most cases'],
      procedures: ['Oxygen therapy if hypoxic', 'IV fluids for dehydration', 'Hospitalization if severe (CURB-65 ≥2)', 'ICU admission if respiratory failure'],
      lifestyle: ['Rest and hydration', 'Smoking cessation', 'Vaccination (pneumococcal, influenza)', 'Complete antibiotic course']
    },
    emergencySigns: ['Respiratory distress or failure', 'Oxygen saturation <90%', 'Altered mental status', 'Hypotension (septic shock)', 'Multilobar involvement', 'Severe tachypnea (>30/min)'],
    patientExplanation: 'Community-acquired pneumonia is a lung infection you get in daily life, not from a hospital. Bacteria invade your air sacs, causing them to fill with fluid and pus, making breathing difficult. Symptoms include cough with thick mucus, fever, and chest pain. Most cases can be treated at home with antibiotics, but severe cases need hospitalization for IV antibiotics and oxygen support.',
    patientExplanationEs: 'La neumonía adquirida en la comunidad es una infección pulmonar que se contrae en la vida diaria, no en un hospital. Las bacterias invaden los sacos de aire, haciendo que se llenen de líquido y pus, dificultando la respiración. Los síntomas incluyen tos con moco espeso, fiebre y dolor en el pecho. La mayoría de los casos pueden tratarse en casa con antibióticos, pero los casos graves necesitan hospitalización para antibióticos IV y oxígeno.'
  },

  'urinary-tract-infection': {
    id: 'urinary-tract-infection',
    name: 'Urinary Tract Infection (UTI)',
    nameEs: 'Infección del Tracto Urinario',
    category: 'urinary',
    icd11: 'GC08',
    description: 'Bacterial infection affecting any part of the urinary system including bladder (cystitis), kidneys (pyelonephritis), or urethra. Most commonly caused by Escherichia coli.',
    descriptionEs: 'Infección bacteriana que afecta cualquier parte del sistema urinario, incluyendo vejiga (cistitis), riñones (pielonefritis) o uretra. Causada más comúnmente por Escherichia coli.',
    riskFactors: ['Female sex', 'Sexual activity', 'Pregnancy', 'Urinary catheter', 'Urinary tract obstruction', 'Diabetes', 'Menopause', 'Immunosuppression', 'Recent antibiotic use'],
    pathophysiology: 'Bacteria, typically from gastrointestinal flora, ascend through the urethra into the bladder. In cystitis, bacteria adhere to bladder mucosa, triggering inflammatory response. If bacteria ascend to kidneys via ureters, pyelonephritis develops with renal parenchymal inflammation and potential bacteremia.',
    pathophysiologyEs: 'Las bacterias, típicamente de la flora gastrointestinal, ascienden por la uretra hacia la vejiga. En cistitis, las bacterias se adhieren a la mucosa vesical, desencadenando respuesta inflamatoria. Si las bacterias ascienden a los riñones por los uréteres, se desarrolla pielonefritis con inflamación del parénquima renal y posible bacteriemia.',
    symptoms: ['Dysuria (painful urination)', 'Urinary frequency and urgency', 'Suprapubic pain', 'Hematuria', 'Cloudy or foul-smelling urine', 'Fever and flank pain (pyelonephritis)', 'Nausea and vomiting (pyelonephritis)'],
    diagnostics: {
      tests: ['Urinalysis (pyuria, hematuria, nitrites, leukocyte esterase)', 'Urine culture and sensitivity (gold standard)', 'Complete blood count if pyelonephritis', 'Blood cultures if sepsis suspected'],
      imaging: ['Renal ultrasound (if obstruction or abscess suspected)', 'CT abdomen/pelvis (complicated UTI, pyelonephritis)'],
      criteria: ['≥10^5 CFU/mL on culture (symptomatic)', 'Pyuria (>10 WBC/hpf)', 'Positive nitrite test']
    },
    treatment: {
      medications: ['Uncomplicated cystitis: Nitrofurantoin 5 days or TMP-SMX 3 days', 'Complicated UTI: Fluoroquinolone 7-14 days', 'Pyelonephritis outpatient: Fluoroquinolone 7-14 days', 'Pyelonephritis inpatient: IV ceftriaxone or fluoroquinolone', 'Adjust based on culture results'],
      procedures: ['Remove or replace urinary catheter if present', 'IV fluids for pyelonephritis', 'Hospitalization for severe pyelonephritis or sepsis'],
      lifestyle: ['Increase fluid intake', 'Complete full antibiotic course', 'Urinate after intercourse', 'Avoid irritants (spermicides)', 'Cranberry products may help prevent recurrence']
    },
    emergencySigns: ['High fever with rigors', 'Severe flank pain', 'Persistent vomiting', 'Signs of sepsis', 'Urinary retention', 'Altered mental status'],
    patientExplanation: 'A urinary tract infection occurs when bacteria enter your urinary system, most often affecting the bladder. This causes painful, frequent urination and sometimes blood in urine. Simple bladder infections are treated with a short course of oral antibiotics. If the infection reaches your kidneys (pyelonephritis), you may need stronger antibiotics or hospitalization.',
    patientExplanationEs: 'Una infección del tracto urinario ocurre cuando las bacterias ingresan a su sistema urinario, afectando más comúnmente la vejiga. Esto causa micción dolorosa y frecuente, y a veces sangre en la orina. Las infecciones simples de vejiga se tratan con un curso corto de antibióticos orales. Si la infección llega a los riñones (pielonefritis), puede necesitar antibióticos más fuertes u hospitalización.'
  },

  'cellulitis': {
    id: 'cellulitis',
    name: 'Cellulitis',
    nameEs: 'Celulitis',
    category: 'skin',
    icd11: '1B72',
    description: 'Acute bacterial infection of the dermis and subcutaneous tissue, characterized by spreading erythema, warmth, and swelling. Most commonly caused by Streptococcus pyogenes and Staphylococcus aureus.',
    descriptionEs: 'Infección bacteriana aguda de la dermis y tejido subcutáneo, caracterizada por eritema extendido, calor e hinchazón. Causada más comúnmente por Streptococcus pyogenes y Staphylococcus aureus.',
    riskFactors: ['Skin trauma or wounds', 'Lymphedema', 'Obesity', 'Diabetes', 'Immunosuppression', 'Venous insufficiency', 'Prior episode of cellulitis', 'Tinea pedis (athletes foot)', 'Injection drug use'],
    pathophysiology: 'Bacteria enter through breaks in skin barrier (trauma, ulcers, fissures). Organisms proliferate in dermis and subcutaneous tissue, releasing toxins and triggering robust inflammatory response. This causes vasodilation, increased vascular permeability, and inflammatory cell infiltration, manifesting as erythema, edema, and warmth.',
    pathophysiologyEs: 'Las bacterias ingresan a través de roturas en la barrera cutánea (trauma, úlceras, fisuras). Los organismos proliferan en dermis y tejido subcutáneo, liberando toxinas y desencadenando una respuesta inflamatoria robusta. Esto causa vasodilatación, aumento de permeabilidad vascular e infiltración de células inflamatorias, manifestándose como eritema, edema y calor.',
    symptoms: ['Expanding area of redness and warmth', 'Swelling and tenderness', 'Pain at the site', 'Fever and chills', 'Red streaking (lymphangitis)', 'Regional lymphadenopathy', 'Skin may appear shiny or tight'],
    diagnostics: {
      tests: ['Clinical diagnosis (typically)', 'Blood cultures if systemic toxicity', 'Complete blood count (leukocytosis)', 'Blood glucose', 'Wound culture if purulent drainage'],
      imaging: ['Ultrasound or MRI if abscess suspected', 'X-ray if foreign body or osteomyelitis suspected'],
      criteria: ['Acute onset of erythema', 'Local warmth', 'Swelling', 'Tenderness', 'No other explanation for findings']
    },
    treatment: {
      medications: ['Mild: Oral cephalexin or dicloxacillin 5-10 days', 'MRSA coverage (if risk factors): TMP-SMX or doxycycline', 'Severe: IV cefazolin or vancomycin (if MRSA)', 'Transition to oral when improving'],
      procedures: ['Incision and drainage if abscess present', 'Mark borders to track progression', 'Elevation of affected limb', 'Hospitalization if severe or failed outpatient therapy'],
      lifestyle: ['Keep area clean and dry', 'Elevate affected limb', 'Treat underlying skin conditions (tinea)', 'Proper wound care', 'Compression stockings for lymphedema']
    },
    emergencySigns: ['Rapidly spreading erythema', 'Severe pain out of proportion', 'Skin necrosis or bullae', 'Hypotension or sepsis', 'Crepitus (necrotizing fasciitis)', 'Altered mental status'],
    patientExplanation: 'Cellulitis is a skin infection that affects deeper layers, causing redness, swelling, warmth, and pain. Bacteria enter through small breaks in your skin. Unlike superficial infections, cellulitis can spread quickly and requires antibiotics. Most cases respond well to oral antibiotics at home, but severe infections need IV antibiotics in the hospital. Keep the area elevated and clean.',
    patientExplanationEs: 'La celulitis es una infección cutánea que afecta capas más profundas, causando enrojecimiento, hinchazón, calor y dolor. Las bacterias entran a través de pequeñas roturas en la piel. A diferencia de las infecciones superficiales, la celulitis puede extenderse rápidamente y requiere antibióticos. La mayoría de los casos responden bien a antibióticos orales en casa, pero las infecciones graves necesitan antibióticos IV en el hospital. Mantenga el área elevada y limpia.'
  },

  'sepsis': {
    id: 'sepsis',
    name: 'Sepsis',
    nameEs: 'Sepsis',
    category: 'systemic',
    icd11: '1G40',
    description: 'Life-threatening organ dysfunction caused by dysregulated host response to infection. Represents a continuum from sepsis to septic shock with progressively higher mortality.',
    descriptionEs: 'Disfunción orgánica potencialmente mortal causada por respuesta desregulada del huésped a una infección. Representa un continuo desde sepsis hasta choque séptico con mortalidad progresivamente mayor.',
    riskFactors: ['Immunosuppression', 'Chronic illness (diabetes, cancer, liver disease)', 'Recent surgery or invasive procedures', 'Indwelling devices (catheters, tubes)', 'Extremes of age', 'Malnutrition', 'Burns or trauma'],
    pathophysiology: 'Infection triggers excessive inflammatory response with cytokine release (TNF-α, IL-1, IL-6). This causes widespread endothelial dysfunction, increased vascular permeability, and microvascular thrombosis. Results in tissue hypoperfusion, cellular hypoxia, mitochondrial dysfunction, and multi-organ failure. Septic shock adds profound circulatory and cellular dysfunction.',
    pathophysiologyEs: 'La infección desencadena una respuesta inflamatoria excesiva con liberación de citocinas (TNF-α, IL-1, IL-6). Esto causa disfunción endotelial generalizada, aumento de permeabilidad vascular y trombosis microvascular. Resulta en hipoperfusión tisular, hipoxia celular, disfunción mitocondrial y falla multiorgánica. El choque séptico añade disfunción circulatoria y celular profunda.',
    symptoms: ['Fever or hypothermia', 'Tachycardia', 'Tachypnea', 'Altered mental status', 'Hypotension', 'Decreased urine output', 'Mottled or cool extremities', 'Hyperglycemia'],
    diagnostics: {
      tests: ['Blood cultures (two sets from different sites)', 'Complete blood count', 'Comprehensive metabolic panel', 'Lactate (≥2 mmol/L)', 'Procalcitonin', 'Coagulation studies', 'Arterial blood gas'],
      imaging: ['Chest X-ray', 'CT or ultrasound to identify infection source', 'Echocardiography if indicated'],
      criteria: ['qSOFA ≥2 (altered mentation, SBP ≤100, RR ≥22)', 'SOFA score increase ≥2', 'Septic shock: Sepsis + vasopressor need + lactate >2 despite fluids']
    },
    treatment: {
      medications: ['Broad-spectrum antibiotics within 1 hour', 'Empiric: Piperacillin-tazobactam or carbapenem ± vancomycin', 'Adjust based on cultures and source', 'IV fluids: 30 mL/kg crystalloid within 3 hours', 'Vasopressors (norepinephrine first-line) if hypotensive'],
      procedures: ['Source control (drain abscess, remove infected device)', 'ICU admission for septic shock', 'Central venous access', 'Mechanical ventilation if needed', 'Renal replacement therapy if AKI'],
      lifestyle: ['Prolonged recovery period expected', 'Physical and occupational therapy', 'Monitor for post-sepsis syndrome', 'Address underlying conditions']
    },
    emergencySigns: ['Hypotension not responding to fluids', 'Altered mental status', 'Difficulty breathing', 'Oliguria or anuria', 'Mottled skin', 'Lactate >4 mmol/L'],
    patientExplanation: 'Sepsis is a medical emergency where your body overreacts to an infection, causing widespread inflammation that damages organs. It can progress rapidly from infection to shock and death. Early recognition and treatment with IV antibiotics, fluids, and organ support in the ICU are critical. Even with treatment, recovery can take weeks to months, and some patients experience long-term effects.',
    patientExplanationEs: 'La sepsis es una emergencia médica donde su cuerpo reacciona excesivamente a una infección, causando inflamación generalizada que daña los órganos. Puede progresar rápidamente de infección a choque y muerte. El reconocimiento temprano y tratamiento con antibióticos IV, líquidos y soporte orgánico en UCI son críticos. Incluso con tratamiento, la recuperación puede tomar semanas o meses, y algunos pacientes experimentan efectos a largo plazo.'
  },

  'bacterial-meningitis': {
    id: 'bacterial-meningitis',
    name: 'Meningitis (Bacterial)',
    nameEs: 'Meningitis (Bacteriana)',
    category: 'cns',
    icd11: '1C00.0',
    description: 'Life-threatening infection of the meninges surrounding the brain and spinal cord. Requires immediate diagnosis and treatment to prevent death and neurological sequelae.',
    descriptionEs: 'Infección potencialmente mortal de las meninges que rodean el cerebro y la médula espinal. Requiere diagnóstico y tratamiento inmediatos para prevenir la muerte y secuelas neurológicas.',
    riskFactors: ['Asplenia', 'Complement deficiency', 'Immunosuppression', 'Recent neurosurgery', 'CSF leak', 'Cochlear implant', 'Close quarters living (dorms, barracks)', 'Unvaccinated status'],
    pathophysiology: 'Bacteria reach meninges through hematogenous spread, direct extension (sinusitis, otitis), or trauma. Organisms replicate in CSF, triggering intense inflammatory response. Cytokines and bacterial products cause increased blood-brain barrier permeability, cerebral edema, increased intracranial pressure, and vascular inflammation leading to stroke. Common organisms: S. pneumoniae, N. meningitidis, L. monocytogenes.',
    pathophysiologyEs: 'Las bacterias llegan a las meninges por diseminación hematógena, extensión directa (sinusitis, otitis) o trauma. Los organismos se replican en LCR, desencadenando respuesta inflamatoria intensa. Las citocinas y productos bacterianos causan aumento de permeabilidad de barrera hematoencefálica, edema cerebral, aumento de presión intracraneal e inflamación vascular que conduce a ACV. Organismos comunes: S. pneumoniae, N. meningitidis, L. monocytogenes.',
    symptoms: ['Severe headache', 'Fever', 'Neck stiffness (nuchal rigidity)', 'Altered mental status', 'Photophobia', 'Nausea and vomiting', 'Seizures', 'Petechial or purpuric rash (N. meningitidis)'],
    diagnostics: {
      tests: ['Lumbar puncture with CSF analysis (elevated WBC with neutrophil predominance, low glucose, high protein)', 'CSF Gram stain and culture', 'CSF bacterial PCR/antigen tests', 'Blood cultures', 'Complete blood count, CRP, procalcitonin'],
      imaging: ['CT head before LP if concern for increased ICP or mass effect', 'MRI brain with contrast if complications suspected'],
      criteria: ['Clinical triad: fever, neck stiffness, altered mental status', 'CSF pleocytosis >1000 WBC/μL (>80% neutrophils)', 'CSF glucose <40 mg/dL or CSF:serum glucose <0.4']
    },
    treatment: {
      medications: ['Empiric: Vancomycin + ceftriaxone (or cefotaxime)', 'Add ampicillin if >50 years or immunocompromised (Listeria)', 'Dexamethasone 0.15 mg/kg before or with first antibiotic dose', 'Adjust antibiotics based on culture and sensitivity', 'Duration: 7-14 days depending on organism'],
      procedures: ['Immediate ICU admission', 'Airway protection if altered mental status', 'ICP monitoring if indicated', 'Seizure management', 'Droplet isolation for N. meningitidis'],
      lifestyle: ['Prolonged recovery expected', 'Neurocognitive rehabilitation', 'Hearing assessment', 'Vaccination to prevent future episodes', 'Close contact prophylaxis for N. meningitidis']
    },
    emergencySigns: ['Decreased level of consciousness', 'Seizures', 'Signs of increased ICP (bradycardia, hypertension, irregular respirations)', 'Focal neurological deficits', 'Purpuric rash', 'Shock'],
    patientExplanation: 'Bacterial meningitis is a severe infection of the protective membranes covering your brain and spinal cord. It causes severe headache, high fever, stiff neck, and confusion. This is a medical emergency requiring immediate hospitalization and IV antibiotics. Even with treatment, it can cause permanent complications like hearing loss, brain damage, or death. Vaccination can prevent the most common causes.',
    patientExplanationEs: 'La meningitis bacteriana es una infección grave de las membranas protectoras que cubren el cerebro y la médula espinal. Causa dolor de cabeza severo, fiebre alta, rigidez de cuello y confusión. Esta es una emergencia médica que requiere hospitalización inmediata y antibióticos IV. Incluso con tratamiento, puede causar complicaciones permanentes como pérdida auditiva, daño cerebral o muerte. La vacunación puede prevenir las causas más comunes.'
  }

};

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

export function searchInfectiousBacterialConditions(query: string): InfectiousConditionEntry[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(INFECTIOUS_BACTERIAL_CONDITIONS).filter(condition =>
    condition.name.toLowerCase().includes(lowerQuery) ||
    condition.nameEs.toLowerCase().includes(lowerQuery) ||
    condition.description.toLowerCase().includes(lowerQuery) ||
    condition.symptoms.some(s => s.toLowerCase().includes(lowerQuery))
  );
}

export function getInfectiousBacterialConditionById(id: string): InfectiousConditionEntry | undefined {
  return INFECTIOUS_BACTERIAL_CONDITIONS[id];
}
