// =============================================================================
// Geriatrics Specialty Database
// Comprehensive geriatric conditions, syndromes, and clinical references
// =============================================================================

export type GeriatricsCategory =
  | 'falls'
  | 'cognitive'
  | 'functional'
  | 'polypharmacy'
  | 'end-of-life'
  | 'caregiver'
  | 'sensory'
  | 'geriatric-syndrome';

export interface GeriatricsEntry {
  id: string;
  name: string;
  nameEs: string;
  category: GeriatricsCategory;
  description: string;
  riskFactors: string[];
  assessment: string[];
  management: string[];
  prevention: string[];
  patientExplanation: string;
}

type Cat = GeriatricsCategory;

/** Compact helper to build a GeriatricsEntry */
function ger(
  id: string, name: string, nameEs: string, category: Cat,
  description: string, riskFactors: string[], assessment: string[],
  management: string[], prevention: string[], patientExplanation: string,
): GeriatricsEntry {
  return { id, name, nameEs, category, description, riskFactors, assessment,
    management, prevention, patientExplanation };
}

// =============================================================================
// GERIATRICS ENTRIES
// =============================================================================

export const GERIATRICS_ENTRIES: Record<string, GeriatricsEntry> = {

  // ---------------------------------------------------------------------------
  // FALLS (3)
  // ---------------------------------------------------------------------------
  'fall-risk-assessment': ger(
    'fall-risk-assessment', 'Fall Risk Assessment', 'Evaluacion del Riesgo de Caidas', 'falls',
    'Systematic evaluation of intrinsic and extrinsic factors that predispose older adults to falls, the leading cause of injury-related morbidity and mortality in persons over 65.',
    ['Prior falls within 12 months', 'Gait or balance impairment', 'Lower-extremity weakness', 'Use of psychoactive medications', 'Visual impairment', 'Orthostatic hypotension', 'Environmental hazards (rugs, poor lighting)', 'Cognitive impairment'],
    ['Timed Up-and-Go (TUG) test', 'Berg Balance Scale', 'Tinetti Performance-Oriented Mobility Assessment', 'Orthostatic vital signs', 'Visual acuity screening', 'Medication review for fall-risk drugs', 'Home safety evaluation'],
    ['Multifactorial intervention addressing identified risks', 'Physical therapy for gait and balance training', 'Medication reduction or substitution', 'Vision correction', 'Orthostatic hypotension management', 'Home safety modifications', 'Assistive devices as needed'],
    ['Regular exercise including balance and strength training', 'Annual vision checks', 'Home hazard removal', 'Proper footwear', 'Medication review at each visit', 'Vitamin D supplementation if deficient', 'Adequate lighting in living spaces'],
    'Falls are not a normal part of aging. Simple changes like removing loose rugs, improving lighting, staying active, and reviewing medications with your doctor can significantly reduce your fall risk.',
  ),

  'osteoporotic-fractures': ger(
    'osteoporotic-fractures', 'Osteoporotic Fractures', 'Fracturas Osteoporoticas', 'falls',
    'Fragility fractures resulting from low bone mineral density, most commonly affecting the hip, vertebrae, and distal radius. Hip fractures carry one-year mortality of 20-30% in older adults.',
    ['Osteoporosis (T-score <= -2.5)', 'Prior fragility fracture', 'Female sex', 'Advanced age', 'Low body weight', 'Glucocorticoid use', 'Smoking', 'Excessive alcohol use', 'Family history of hip fracture'],
    ['DEXA scan for bone mineral density', 'FRAX score for 10-year fracture risk', 'Vertebral fracture assessment', 'Serum calcium, phosphorus, vitamin D, PTH', 'Basic metabolic panel and CBC', 'Fall risk evaluation'],
    ['Bisphosphonates (alendronate, risedronate) as first-line', 'Denosumab for bisphosphonate-intolerant patients', 'Teriparatide for severe osteoporosis', 'Calcium 1200 mg/day and vitamin D 800-1000 IU/day', 'Surgical fixation for hip fractures within 24-48 hours', 'Post-fracture rehabilitation program'],
    ['Weight-bearing and resistance exercise', 'Adequate calcium and vitamin D intake', 'Fall prevention strategies', 'Avoidance of smoking and excessive alcohol', 'DEXA screening for women over 65 and at-risk men over 70', 'Medication review to minimize bone-loss drugs'],
    'Bones naturally become thinner with age, but osteoporosis goes beyond normal aging. Medications, calcium, vitamin D, and weight-bearing exercise can strengthen bones and reduce fracture risk.',
  ),

  'post-fall-syndrome': ger(
    'post-fall-syndrome', 'Post-Fall Syndrome (Fear of Falling)', 'Sindrome Post-Caida', 'falls',
    'Psychological response to falls characterized by excessive fear of falling that leads to activity restriction, deconditioning, social isolation, and paradoxically increased fall risk.',
    ['History of one or more falls', 'Fall-related injury', 'Female sex', 'Advanced age', 'Depression or anxiety', 'Pre-existing functional limitations', 'Living alone', 'Reduced self-efficacy'],
    ['Falls Efficacy Scale-International (FES-I)', 'Activities-specific Balance Confidence (ABC) Scale', 'Assessment of activity restriction patterns', 'Screening for depression and anxiety', 'Functional mobility evaluation', 'Social support assessment'],
    ['Cognitive behavioral therapy targeting fear avoidance', 'Graded exposure to feared activities', 'Tai Chi or balance-focused exercise programs', 'Physical therapy for confidence building', 'Treatment of underlying depression or anxiety', 'Peer support groups', 'Occupational therapy for safe activity strategies'],
    ['Early mobilization after falls', 'Psychological support following fall events', 'Maintenance of social activities', 'Structured exercise to build confidence', 'Education about realistic fall risk versus perceived risk', 'Address environmental hazards to restore confidence'],
    'Being afraid of falling after a fall is very common and understandable. However, avoiding activity actually increases your risk. Gradual, supervised exercise can safely rebuild your confidence and strength.',
  ),

  // ---------------------------------------------------------------------------
  // COGNITIVE (4)
  // ---------------------------------------------------------------------------
  'mild-cognitive-impairment': ger(
    'mild-cognitive-impairment', 'Mild Cognitive Impairment', 'Deterioro Cognitivo Leve', 'cognitive',
    'Intermediate stage between normal age-related cognitive decline and dementia, with objective cognitive deficits that do not significantly impair daily function. Annual conversion rate to dementia is 10-15%.',
    ['Advanced age', 'Family history of dementia', 'APOE-e4 allele', 'Cardiovascular risk factors', 'Low educational attainment', 'Depression', 'Social isolation', 'Sedentary lifestyle'],
    ['Montreal Cognitive Assessment (MoCA)', 'Mini-Mental State Examination (MMSE)', 'Neuropsychological testing battery', 'MRI brain for structural causes', 'Basic labs (TSH, B12, CBC, CMP)', 'Depression screening (PHQ-9)', 'Functional assessment (ADLs and IADLs)'],
    ['No FDA-approved pharmacotherapy for MCI', 'Address reversible causes (B12 deficiency, hypothyroidism, depression)', 'Aerobic exercise 150 minutes per week', 'Cognitive stimulation and engagement', 'Mediterranean diet', 'Management of cardiovascular risk factors', 'Regular monitoring every 6-12 months for progression'],
    ['Regular physical exercise', 'Cognitive engagement and lifelong learning', 'Social participation', 'Cardiovascular risk factor management', 'Healthy diet (Mediterranean or MIND diet)', 'Adequate sleep', 'Hearing loss correction'],
    'Mild cognitive impairment means some memory or thinking changes beyond what is expected for your age, but you can still manage daily life. Staying physically active, socially engaged, and mentally stimulated may slow progression.',
  ),

  'alzheimer-disease': ger(
    'alzheimer-disease', 'Alzheimer Disease', 'Enfermedad de Alzheimer', 'cognitive',
    'Progressive neurodegenerative disorder accounting for 60-80% of dementia cases, characterized by amyloid plaque and neurofibrillary tangle accumulation leading to neuronal loss and cognitive decline.',
    ['Advanced age (risk doubles every 5 years after 65)', 'Family history', 'APOE-e4 genotype', 'Female sex', 'Down syndrome', 'Traumatic brain injury', 'Cardiovascular risk factors', 'Low educational attainment'],
    ['Clinical history with reliable informant', 'MoCA or MMSE for cognitive screening', 'Neuropsychological testing', 'MRI brain (hippocampal atrophy)', 'PET amyloid imaging when diagnosis uncertain', 'CSF biomarkers (amyloid-beta, tau)', 'Rule out reversible causes (B12, TSH, RPR)'],
    ['Cholinesterase inhibitors (donepezil, rivastigmine, galantamine) for mild-moderate stages', 'Memantine for moderate-severe stages', 'Lecanemab for early Alzheimer disease with confirmed amyloid', 'Non-pharmacological interventions (structured routines, music therapy)', 'Caregiver education and support', 'Safety planning (driving, wandering, finances)', 'Advance care planning early in disease course'],
    ['Regular aerobic exercise', 'Mediterranean or MIND diet', 'Cognitive and social engagement', 'Cardiovascular risk factor control', 'Hearing loss treatment', 'Adequate sleep and sleep apnea management', 'Head injury prevention'],
    'Alzheimer disease gradually affects memory, thinking, and behavior. While there is no cure, medications can help manage symptoms, and early planning allows your family to make important decisions together.',
  ),

  'delirium': ger(
    'delirium', 'Delirium', 'Delirio', 'cognitive',
    'Acute, fluctuating disturbance of attention and cognition caused by an underlying medical condition. It is a medical emergency with in-hospital mortality of 10-26% and often the first sign of serious illness in older adults.',
    ['Advanced age (over 65)', 'Pre-existing dementia', 'Severe illness or surgery', 'Polypharmacy', 'Infection (especially UTI, pneumonia)', 'Dehydration or malnutrition', 'Sensory impairment', 'Physical restraints', 'Urinary catheter', 'Sleep deprivation'],
    ['Confusion Assessment Method (CAM)', '4AT rapid assessment', 'Detailed medication review', 'Infection workup (UA, CBC, CXR, blood cultures)', 'Metabolic panel (electrolytes, glucose, renal function)', 'Oxygen saturation', 'Neuroimaging if focal deficits or unclear etiology', 'Assessment of pain as precipitant'],
    ['Identify and treat underlying cause', 'Non-pharmacological reorientation (clock, calendar, familiar objects)', 'Ensure adequate hydration and nutrition', 'Mobilize early and avoid restraints', 'Correct sensory deficits (glasses, hearing aids)', 'Normalize sleep-wake cycle', 'Low-dose antipsychotics only for severe agitation posing safety risk', 'Avoid benzodiazepines unless alcohol withdrawal'],
    ['Hospital Elder Life Program (HELP)', 'Minimize unnecessary medications', 'Early mobilization post-surgery', 'Maintain hydration and nutrition', 'Reorientation protocols', 'Preserve sleep-wake cycle', 'Ensure sensory aids are available', 'Avoid urinary catheters when possible'],
    'Delirium is sudden confusion caused by a medical problem, not a normal part of aging. It is different from dementia. Finding and treating the cause usually resolves the confusion, though recovery may take days to weeks.',
  ),

  'vascular-dementia': ger(
    'vascular-dementia', 'Vascular Dementia', 'Demencia Vascular', 'cognitive',
    'Second most common cause of dementia, resulting from cerebrovascular disease. Characterized by stepwise cognitive decline with prominent executive dysfunction and preserved memory in early stages.',
    ['Hypertension', 'Diabetes mellitus', 'Atrial fibrillation', 'History of stroke or TIA', 'Hyperlipidemia', 'Smoking', 'Coronary artery disease', 'Advanced age'],
    ['Cognitive testing emphasizing executive function', 'MRI brain with white matter disease or lacunar infarcts', 'Vascular risk factor screening', 'Echocardiogram and carotid ultrasound', 'Hachinski Ischemic Score', 'Neuropsychological testing', 'Assessment of gait and urinary function'],
    ['Aggressive vascular risk factor management', 'Antiplatelet or anticoagulation therapy as indicated', 'Blood pressure optimization', 'Statin therapy', 'Diabetes management', 'Cholinesterase inhibitors may have modest benefit', 'Cognitive rehabilitation', 'Physical therapy and structured exercise'],
    ['Blood pressure control', 'Smoking cessation', 'Diabetes management', 'Lipid management', 'Regular exercise', 'Mediterranean diet', 'Atrial fibrillation screening and treatment', 'Stroke prevention strategies'],
    'Vascular dementia is caused by reduced blood flow to the brain, often from strokes or blood vessel disease. Controlling blood pressure, diabetes, and cholesterol can help prevent further damage.',
  ),

  // ---------------------------------------------------------------------------
  // FUNCTIONAL (3)
  // ---------------------------------------------------------------------------
  'frailty': ger(
    'frailty', 'Frailty Syndrome', 'Sindrome de Fragilidad', 'functional',
    'Age-related biological syndrome of decreased physiologic reserve and increased vulnerability to stressors, associated with falls, disability, hospitalization, and mortality.',
    ['Advanced age (especially over 80)', 'Chronic diseases', 'Malnutrition or unintentional weight loss', 'Sedentary lifestyle', 'Polypharmacy', 'Social isolation', 'Depression', 'Low socioeconomic status'],
    ['Fried Frailty Phenotype (3 of 5: weight loss, exhaustion, low activity, slowness, weakness)', 'Clinical Frailty Scale (Rockwood)', 'Grip strength measurement', 'Gait speed (less than 0.8 m/s)', 'Short Physical Performance Battery (SPPB)', 'Nutritional assessment (MNA)', 'Sarcopenia screening'],
    ['Progressive resistance and aerobic exercise', 'Nutritional optimization (protein 1.0-1.2 g/kg/day)', 'Vitamin D supplementation if deficient', 'Comprehensive geriatric assessment', 'Deprescribing unnecessary medications', 'Treatment of underlying chronic conditions', 'Social engagement and community programs'],
    ['Regular physical activity throughout life', 'Adequate protein intake', 'Maintenance of healthy weight', 'Social engagement', 'Annual wellness visits', 'Vaccinations', 'Management of chronic diseases'],
    'Frailty means your body has less reserve to handle stress like illness or surgery. The good news is that exercise and good nutrition can often improve or even reverse early frailty.',
  ),

  'sarcopenia': ger(
    'sarcopenia', 'Sarcopenia', 'Sarcopenia', 'functional',
    'Progressive and generalized loss of skeletal muscle mass, strength, and physical performance associated with aging. Affects 10-27% of community-dwelling older adults and up to 50% in those over 80.',
    ['Advanced age', 'Physical inactivity', 'Inadequate protein intake', 'Chronic inflammation', 'Hormonal changes (testosterone, growth hormone decline)', 'Chronic diseases (heart failure, COPD, cancer)', 'Malnutrition', 'Prolonged bed rest'],
    ['Handgrip dynamometry for muscle strength', 'Gait speed or chair stand test for physical performance', 'DEXA or bioimpedance analysis for muscle mass', 'SARC-F screening questionnaire', 'Serum albumin and prealbumin', 'Vitamin D levels', 'Assessment of dietary protein intake'],
    ['Resistance exercise training 2-3 times per week', 'Protein supplementation (1.0-1.2 g/kg/day, distributed across meals)', 'Leucine-enriched essential amino acids', 'Vitamin D supplementation if deficient', 'Address underlying causes', 'Combined exercise and nutrition programs', 'Avoid prolonged bed rest during hospitalizations'],
    ['Regular resistance and aerobic exercise', 'Adequate daily protein intake (25-30 g per meal)', 'Vitamin D sufficiency', 'Avoid prolonged inactivity', 'Early mobilization during illness', 'Annual strength and performance monitoring'],
    'Muscles naturally lose some size and strength with age, but too much loss can make daily tasks difficult. Strength exercises and eating enough protein at each meal are the best ways to maintain muscle.',
  ),

  'functional-decline-hospitalization': ger(
    'functional-decline-hospitalization', 'Hospital-Associated Functional Decline', 'Deterioro Funcional Asociado a Hospitalizacion', 'functional',
    'Loss of ability to perform activities of daily living that develops during hospitalization, affecting 30-60% of older inpatients. Often persists after discharge and is associated with institutionalization and death.',
    ['Age over 75', 'Baseline functional impairment', 'Cognitive impairment', 'Delirium during hospitalization', 'Prolonged bed rest', 'Malnutrition', 'Depression', 'Polypharmacy', 'Use of physical restraints', 'Urinary catheter use'],
    ['Baseline ADL and IADL assessment at admission', 'Daily functional status monitoring', 'Delirium screening (CAM)', 'Nutritional risk screening', 'Mobility assessment', 'Assessment of pre-hospital function', 'Discharge planning needs evaluation'],
    ['Early mobilization within 24 hours of admission', 'Physical and occupational therapy consults', 'Minimize tethers (IVs, catheters, telemetry)', 'Adequate nutrition and hydration', 'Delirium prevention protocols', 'Avoid unnecessary bed rest orders', 'Geriatric co-management when available', 'Structured discharge planning with home services'],
    ['Acute Care for Elders (ACE) unit models', 'Hospital Elder Life Program (HELP)', 'Nurse-driven mobility protocols', 'Patient and family education on importance of mobility', 'Minimize potentially inappropriate medications', 'Prompt removal of catheters and restraints'],
    'Staying in bed too long during a hospital stay can cause muscle loss and make it harder to do things you did before. Getting up and moving as much as safely possible during your hospital stay helps you recover faster.',
  ),

  // ---------------------------------------------------------------------------
  // POLYPHARMACY (3)
  // ---------------------------------------------------------------------------
  'polypharmacy-management': ger(
    'polypharmacy-management', 'Polypharmacy Management', 'Manejo de la Polifarmacia', 'polypharmacy',
    'Use of five or more medications concurrently, common in older adults (40-50% of those over 65). Associated with adverse drug events, falls, cognitive impairment, hospitalization, and increased mortality.',
    ['Multiple chronic conditions', 'Multiple prescribers', 'Over-the-counter medication use', 'Herbal or supplement use', 'Transitions of care', 'Cognitive impairment affecting adherence', 'Lack of medication reconciliation', 'Prescribing cascades'],
    ['Comprehensive medication reconciliation (including OTC and supplements)', 'Beers Criteria screening', 'STOPP/START criteria review', 'Medication Appropriateness Index', 'Assessment of renal and hepatic function for dose adjustment', 'Pill burden and adherence evaluation', 'Drug-drug interaction screening'],
    ['Systematic deprescribing using evidence-based protocols', 'Prioritize medications based on goals of care', 'Taper and discontinue medications lacking clear indication', 'Simplify regimens (once-daily dosing, combination pills)', 'Brown bag medication review with pharmacist', 'Single prescriber coordination when possible', 'Patient education on each medication purpose'],
    ['Regular medication reviews at each visit', 'Use of a single pharmacy', 'Medication list maintained by patient or caregiver', 'Avoid prescribing cascades', 'Question each new prescription', 'Non-pharmacological alternatives when appropriate', 'Pharmacist-led medication therapy management'],
    'Taking many medications increases the chance of side effects and interactions. Bring all your medications, including vitamins and supplements, to every doctor visit so your doctor can review what you truly need.',
  ),

  'adverse-drug-reactions-elderly': ger(
    'adverse-drug-reactions-elderly', 'Adverse Drug Reactions in Older Adults', 'Reacciones Adversas a Medicamentos en Adultos Mayores', 'polypharmacy',
    'Older adults experience adverse drug reactions 2-7 times more frequently than younger adults due to altered pharmacokinetics, pharmacodynamics, polypharmacy, and comorbidities. ADRs account for 10-30% of hospital admissions in older adults.',
    ['Age-related decline in renal and hepatic function', 'Polypharmacy', 'Low body weight', 'Altered body composition (increased fat, decreased water)', 'Increased blood-brain barrier permeability', 'Reduced albumin for protein-bound drugs', 'Genetic polymorphisms in drug metabolism', 'Non-adherence or medication errors'],
    ['Naranjo Adverse Drug Reaction Probability Scale', 'Review temporal relationship between drug initiation and symptoms', 'Beers Criteria for potentially inappropriate medications', 'Renal function assessment (Cockcroft-Gault or CKD-EPI)', 'Hepatic function evaluation', 'Serum drug levels when available', 'Screening for common culprits (anticoagulants, hypoglycemics, opioids, NSAIDs)'],
    ['Discontinue or reduce offending agent', 'Start low, go slow with all new medications', 'Adjust doses for renal and hepatic function', 'Use Beers Criteria to avoid high-risk medications', 'Monitor closely after any medication change', 'Pharmacist involvement in medication management', 'Report ADRs for documentation and prevention'],
    ['Age-appropriate prescribing using Beers and STOPP criteria', 'Dose adjustment for renal function', 'Avoid medications with strong anticholinergic properties', 'Minimize benzodiazepines and sedative-hypnotics', 'Regular monitoring after initiating new drugs', 'Patient education on recognizing side effects', 'Use of electronic prescribing with interaction checks'],
    'As we age, our bodies process medications differently, which can increase side effects. Always ask your doctor or pharmacist about proper doses and potential interactions, especially when starting a new medication.',
  ),

  'deprescribing': ger(
    'deprescribing', 'Deprescribing', 'Desprescripcion', 'polypharmacy',
    'Planned, supervised process of dose reduction or discontinuation of medications that may be causing harm or are no longer providing benefit, tailored to the individual patient goals of care and functional status.',
    ['Medications without clear indication', 'Medications for prevention in limited life expectancy', 'Duplicate therapy', 'Prescribing cascades', 'Medications causing adverse effects', 'Patient or caregiver desire to reduce pill burden', 'Change in goals of care', 'Worsening renal or hepatic function'],
    ['Review each medication for ongoing indication', 'Assess time-to-benefit versus life expectancy', 'Identify prescribing cascades', 'Evaluate patient goals and preferences', 'Assess for withdrawal syndromes requiring taper', 'Screen with deprescribing algorithms (e.g., medstopper.com)', 'Shared decision-making with patient and family'],
    ['Prioritize medications to discontinue based on harm-benefit ratio', 'Taper medications that require gradual withdrawal (PPIs, benzodiazepines, SSRIs, beta-blockers)', 'Discontinue one medication at a time when possible', 'Monitor for return of symptoms or withdrawal effects', 'Document rationale for discontinuation', 'Educate patient and caregiver on expected outcomes', 'Follow up within 1-4 weeks after each change'],
    ['Routine medication reviews at transitions of care', 'Align prescribing with goals of care', 'Avoid automatic refills without reassessment', 'Educate prescribers on deprescribing evidence', 'Patient empowerment to question medication necessity', 'Embed pharmacist review in primary care'],
    'Sometimes stopping a medication is just as important as starting one. If a medicine is no longer helping or may be causing problems, your doctor can safely reduce or stop it while watching for any changes.',
  ),

  // ---------------------------------------------------------------------------
  // END-OF-LIFE (3)
  // ---------------------------------------------------------------------------
  'advance-care-planning': ger(
    'advance-care-planning', 'Advance Care Planning', 'Planificacion Anticipada de Atencion', 'end-of-life',
    'Ongoing process of understanding, reflecting on, and discussing future medical care preferences, including designation of healthcare proxy, completion of advance directives, and documentation of goals of care.',
    ['Serious chronic illness', 'Advancing age', 'Recent hospitalization or functional decline', 'Cognitive impairment diagnosis', 'Lack of existing advance directive', 'Family disagreements about care wishes', 'Cultural or religious factors affecting care preferences'],
    ['Assess decisional capacity', 'Review existing advance directives', 'Identify healthcare proxy or surrogate', 'Explore patient values and goals', 'Discuss specific clinical scenarios (CPR, mechanical ventilation, artificial nutrition)', 'POLST form completion when appropriate', 'Documentation in medical record and accessible to emergency personnel'],
    ['Structured conversations using tools like Serious Illness Conversation Guide', 'Complete advance directive documents', 'Designate healthcare proxy with DPOA-HC', 'Complete POLST for seriously ill patients', 'Share documents with all providers', 'Revisit discussions with each change in health status', 'Family meetings to ensure shared understanding'],
    ['Initiate discussions in primary care before crisis', 'Normalize conversations about end-of-life preferences', 'Encourage discussions among family members', 'Make documents accessible (electronic medical record, wallet card)', 'Community education and outreach programs', 'Revisit annually and after major health events'],
    'Advance care planning means making your wishes known before a medical crisis, so your family and doctors can honor what matters most to you. It is a gift to your loved ones, not a sign of giving up.',
  ),

  'palliative-care-geriatrics': ger(
    'palliative-care-geriatrics', 'Palliative Care in Geriatrics', 'Cuidados Paliativos en Geriatria', 'end-of-life',
    'Specialized approach to care focused on relieving suffering and improving quality of life for older adults with serious illness, appropriate at any stage of disease alongside curative treatments.',
    ['Multiple chronic conditions with high symptom burden', 'Frequent hospitalizations', 'Functional decline despite treatment', 'Uncontrolled pain or other symptoms', 'Psychological or spiritual distress', 'Complex care coordination needs', 'Caregiver burnout'],
    ['Edmonton Symptom Assessment Scale', 'Pain assessment using validated geriatric tools', 'Functional status evaluation (Palliative Performance Scale)', 'Prognostication tools (Surprise Question, PPI)', 'Psychosocial and spiritual needs assessment', 'Caregiver burden assessment', 'Goals of care discussion'],
    ['Symptom-focused management (pain, dyspnea, nausea, fatigue)', 'Age-appropriate analgesic prescribing (avoid NSAIDs, cautious opioid dosing)', 'Psychosocial support (counseling, chaplaincy)', 'Interdisciplinary team approach', 'Care coordination across settings', 'Caregiver respite and support', 'Transition to hospice when appropriate'],
    ['Early integration of palliative care in chronic disease management', 'Routine symptom screening at visits', 'Primary palliative care skills training for all geriatricians', 'Goals of care discussions at diagnosis of serious illness', 'Access to palliative care consultation', 'Community palliative care programs'],
    'Palliative care focuses on comfort and quality of life. It is not just for end of life and can be provided alongside other treatments. The goal is to help you feel as good as possible while managing serious illness.',
  ),

  'hospice-care': ger(
    'hospice-care', 'Hospice Care', 'Cuidados de Hospicio', 'end-of-life',
    'Comprehensive comfort-focused care for patients with terminal illness and life expectancy of six months or less, emphasizing dignity, symptom management, and family support. Medicare hospice benefit covers medications, equipment, and interdisciplinary services.',
    ['Terminal illness with prognosis of 6 months or less if disease follows expected course', 'Patient elects comfort-focused care', 'Recurrent hospitalizations for same condition', 'Progressive functional decline', 'Progressive weight loss despite intervention', 'Increasing dependence in ADLs'],
    ['Prognostic assessment using disease-specific criteria', 'Functional status (PPS, Karnofsky)', 'National Hospice Organization guidelines', 'Surprise question: Would I be surprised if this patient died in 12 months?', 'Assessment of patient and family readiness', 'Review of Medicare hospice eligibility criteria'],
    ['Interdisciplinary hospice team (physician, nurse, social worker, chaplain, aide, volunteer)', 'Individualized plan of care focused on comfort', 'Symptom management (pain, dyspnea, anxiety, nausea)', 'Durable medical equipment and supplies', 'Respite care for caregivers (up to 5 days)', 'Bereavement support for family for 13 months after death', 'Continuous care during crisis periods'],
    ['Early referral (ideally months before death, not days)', 'Education about hospice philosophy and services', 'Advance care planning to clarify goals', 'Address misconceptions (hospice does not hasten death)', 'Concurrent care models for smoother transitions', 'Community awareness of hospice availability'],
    'Hospice provides expert care focused on comfort and dignity during the final phase of life. It includes support for the whole family, not just the patient, and services are typically covered by Medicare.',
  ),

  // ---------------------------------------------------------------------------
  // CAREGIVER (3)
  // ---------------------------------------------------------------------------
  'caregiver-burden': ger(
    'caregiver-burden', 'Caregiver Burden and Burnout', 'Carga y Agotamiento del Cuidador', 'caregiver',
    'Physical, emotional, and financial strain experienced by informal caregivers of older adults. Over 53 million Americans serve as caregivers, with increased rates of depression, anxiety, and mortality compared to non-caregivers.',
    ['Caring for a person with dementia', 'High number of caregiving hours (over 20 per week)', 'Lack of social support', 'Financial strain', 'Caregiver health problems', 'Behavioral symptoms in care recipient', 'Living with the care recipient', 'Spousal caregiver', 'Lack of respite care'],
    ['Zarit Burden Interview', 'Caregiver Strain Index', 'PHQ-9 for depression screening', 'GAD-7 for anxiety screening', 'Assessment of physical health and healthcare utilization', 'Evaluation of social support network', 'Financial impact assessment', 'Sleep quality evaluation'],
    ['Respite care (in-home, adult day programs, short-term residential)', 'Caregiver support groups (in-person and online)', 'Individual or family counseling', 'Caregiver education and skill training', 'Community resources and referral (Area Agency on Aging)', 'Financial planning assistance', 'Technology solutions (monitoring, medication management)', 'Healthcare provider attention to caregiver health'],
    ['Early identification and support of caregivers', 'Routine caregiver screening at patient visits', 'Access to respite care services', 'Workplace flexibility policies', 'Financial support programs', 'Building social support networks', 'Self-care education and encouragement'],
    'Taking care of a loved one is important but can be exhausting. You cannot pour from an empty cup. Taking time for your own health, asking for help, and using community resources are not signs of weakness but of wisdom.',
  ),

  'caregiver-education': ger(
    'caregiver-education', 'Caregiver Education and Training', 'Educacion y Capacitacion del Cuidador', 'caregiver',
    'Structured programs to equip informal caregivers with knowledge and skills for safe, effective care provision, covering medication management, mobility assistance, nutrition, and behavioral symptom management.',
    ['New caregiver role', 'Care recipient with complex medical needs', 'Care recipient with behavioral symptoms of dementia', 'Lack of prior healthcare experience', 'Medication management complexity', 'Need for physical assistance with transfers or ADLs', 'Home safety modifications required'],
    ['Caregiver knowledge and skill assessment', 'Learning needs evaluation', 'Health literacy assessment', 'Cultural and language considerations', 'Assessment of care recipient needs', 'Home environment evaluation', 'Caregiver readiness to learn evaluation'],
    ['Disease-specific education programs (e.g., Alzheimer Association)', 'Hands-on training in transfers, bathing, feeding', 'Medication management education', 'Behavioral symptom management strategies (DICE approach)', 'Nutrition and meal preparation guidance', 'Home safety modification training', 'When to call the doctor education', 'Use of medical equipment (walkers, hospital beds, oxygen)'],
    ['Proactive education before caregiving demands escalate', 'Community caregiver training programs', 'Online education resources', 'Written materials in preferred language', 'Return demonstration of skills', 'Follow-up assessment of knowledge retention'],
    'Learning practical caregiving skills can reduce stress and improve the quality of care you provide. Many hospitals, community organizations, and disease-specific groups offer free training programs for family caregivers.',
  ),

  'elder-abuse': ger(
    'elder-abuse', 'Elder Abuse and Neglect', 'Abuso y Negligencia de Personas Mayores', 'caregiver',
    'Intentional or negligent acts by a caregiver or trusted person that cause harm to an older adult. Includes physical, emotional, sexual, and financial abuse, as well as neglect. Affects approximately 1 in 10 older adults.',
    ['Social isolation', 'Dementia or cognitive impairment', 'Functional dependence', 'Caregiver substance abuse or mental illness', 'Caregiver financial dependence on the elder', 'History of domestic violence', 'Shared living situation', 'Lack of social support'],
    ['Direct questioning in private (away from caregiver)', 'Physical examination for unexplained injuries', 'Elder Abuse Suspicion Index (EASI)', 'Screening for financial exploitation', 'Assessment of living conditions', 'Nutritional and hygiene status evaluation', 'Review of medications for over- or under-dosing', 'Cognitive assessment for capacity evaluation'],
    ['Mandatory reporting to Adult Protective Services', 'Safety planning with the patient', 'Involvement of social work and legal services', 'Mental health support for the victim', 'Caregiver intervention when appropriate', 'Guardianship or conservatorship evaluation if needed', 'Connection to community resources (shelters, legal aid)', 'Ongoing monitoring and follow-up'],
    ['Public education and awareness campaigns', 'Social engagement programs to reduce isolation', 'Caregiver support and respite services', 'Financial literacy programs for older adults', 'Trusted contact designation at financial institutions', 'Professional training on recognition and reporting', 'Community watch programs'],
    'Elder abuse can happen to anyone and often goes unreported. If you feel unsafe, threatened, or believe someone is taking advantage of you, help is available. Talk to your doctor, call Adult Protective Services, or dial the Eldercare Locator at 1-800-677-1116.',
  ),

  // ---------------------------------------------------------------------------
  // SENSORY (3)
  // ---------------------------------------------------------------------------
  'age-related-hearing-loss': ger(
    'age-related-hearing-loss', 'Age-Related Hearing Loss (Presbycusis)', 'Perdida Auditiva Relacionada con la Edad', 'sensory',
    'Gradual, bilateral, symmetric sensorineural hearing loss primarily affecting high frequencies. Affects one-third of adults over 65 and two-thirds over 75. Independently associated with cognitive decline, depression, and social isolation.',
    ['Advanced age', 'Cumulative noise exposure', 'Male sex', 'Ototoxic medications (aminoglycosides, cisplatin, loop diuretics)', 'Genetic factors', 'Cardiovascular disease', 'Diabetes mellitus', 'Smoking'],
    ['Whispered voice test or finger rub test', 'Hearing Handicap Inventory for the Elderly (HHIE-S)', 'Pure tone audiometry', 'Speech recognition testing', 'Otoscopy (rule out cerumen impaction)', 'Screening for cognitive impairment', 'Assessment of social engagement and depression'],
    ['Hearing aids (most effective intervention)', 'Over-the-counter hearing amplification devices', 'Cochlear implants for severe-profound loss', 'Cerumen management', 'Assistive listening devices (amplified phones, TV listeners)', 'Communication strategies education', 'Audiologic rehabilitation', 'Treatment of comorbid depression'],
    ['Hearing protection in noisy environments throughout life', 'Avoidance of ototoxic medications when alternatives exist', 'Regular hearing screening starting at age 65', 'Cardiovascular risk factor management', 'Noise exposure education', 'Early amplification to slow cognitive consequences'],
    'Hearing loss is very common with aging and is not something to be embarrassed about. Modern hearing aids are small and effective. Treating hearing loss helps you stay connected and may even protect your brain health.',
  ),

  'age-related-vision-loss': ger(
    'age-related-vision-loss', 'Age-Related Vision Changes', 'Cambios Visuales Relacionados con la Edad', 'sensory',
    'Progressive vision impairment from age-related conditions including cataracts, macular degeneration, glaucoma, and diabetic retinopathy. Visual impairment affects up to 20% of adults over 65 and is a major risk factor for falls, functional decline, and depression.',
    ['Advanced age', 'Family history of eye disease', 'UV light exposure', 'Smoking', 'Diabetes mellitus', 'Hypertension', 'Myopia (for retinal detachment)', 'Corticosteroid use (for cataracts and glaucoma)', 'African or Hispanic descent (for glaucoma)'],
    ['Visual acuity testing (Snellen chart)', 'Comprehensive dilated eye exam', 'Tonometry for intraocular pressure', 'Optical coherence tomography (OCT) for macular degeneration', 'Amsler grid for central vision changes', 'Functional vision assessment in home environment', 'Fall risk evaluation related to vision', 'Depression screening'],
    ['Cataract surgery (most common and effective)', 'Anti-VEGF injections for wet macular degeneration', 'Intraocular pressure-lowering drops or surgery for glaucoma', 'Diabetic retinopathy management (laser, anti-VEGF)', 'Low-vision rehabilitation', 'Magnification devices and large-print materials', 'Home safety modifications (lighting, contrast)', 'Occupational therapy for adaptive strategies'],
    ['Annual comprehensive eye exams after age 65', 'UV-protective sunglasses', 'Smoking cessation', 'Blood sugar and blood pressure control', 'Antioxidant vitamins (AREDS2 formula for macular degeneration)', 'Adequate lighting in living spaces', 'Early detection and treatment of eye conditions'],
    'Many age-related eye conditions can be treated or managed, especially when caught early. Regular eye exams are important even if you think your vision is fine. Good lighting and simple home changes can also help you see and move safely.',
  ),

  'dual-sensory-impairment': ger(
    'dual-sensory-impairment', 'Dual Sensory Impairment', 'Deterioro Sensorial Dual', 'sensory',
    'Combined hearing and vision loss affecting 5-21% of older adults over 70. Associated with significantly greater functional decline, cognitive impairment, depression, and social isolation than either deficit alone.',
    ['Advanced age (especially over 80)', 'Individual hearing or vision impairment', 'Diabetes mellitus', 'Cardiovascular disease', 'Neurodegenerative conditions', 'Institutionalization', 'Low socioeconomic status'],
    ['Combined hearing and vision screening', 'interRAI dual sensory assessment', 'Functional assessment of communication ability', 'Cognitive screening (adjusting for sensory deficits)', 'Depression screening', 'Fall risk evaluation', 'Social isolation assessment', 'Caregiver burden evaluation'],
    ['Simultaneous hearing and vision optimization', 'Tactile communication strategies when needed', 'Occupational therapy for adaptive techniques', 'Environmental modifications (high contrast, optimal lighting, reduced background noise)', 'Assistive technology (voice-activated devices, screen readers)', 'Social work referral for services', 'Specialized rehabilitation programs', 'Caregiver training in communication strategies'],
    ['Regular screening for both hearing and vision', 'Early treatment of individual sensory deficits', 'Diabetes and cardiovascular risk management', 'Environmental optimization in care settings', 'Awareness training for healthcare providers', 'Community support programs for deafblind individuals'],
    'When both hearing and vision are affected, everyday activities can become much harder. Specialized support, assistive devices, and simple home modifications can make a significant difference in maintaining your independence and quality of life.',
  ),

  // ---------------------------------------------------------------------------
  // GERIATRIC SYNDROMES (3)
  // ---------------------------------------------------------------------------
  'urinary-incontinence': ger(
    'urinary-incontinence', 'Urinary Incontinence', 'Incontinencia Urinaria', 'geriatric-syndrome',
    'Involuntary loss of urine affecting 30-50% of community-dwelling older adults and up to 70% in nursing homes. Major cause of social isolation, depression, falls, and institutionalization despite being highly treatable.',
    ['Female sex', 'Parity and vaginal deliveries', 'Menopause and estrogen deficiency', 'Prostate enlargement in men', 'Obesity', 'Chronic cough', 'Diabetes mellitus', 'Neurological conditions', 'Medications (diuretics, alpha-blockers, anticholinergics)', 'Functional or cognitive impairment'],
    ['Voiding diary (3 days)', 'Type classification (stress, urge, overflow, functional, mixed)', 'DIAPERS mnemonic for transient causes', 'Post-void residual measurement', 'Urinalysis', 'Cough stress test', 'Mobility and dexterity assessment', 'Cognitive assessment', 'Medication review for contributing drugs'],
    ['Behavioral: bladder training, timed voiding, pelvic floor exercises', 'Lifestyle: weight loss, fluid management, caffeine reduction', 'Medications: antimuscarinics for urge (use cautiously in elderly), mirabegron, topical estrogen for women', 'Pessary for stress incontinence in women', 'Surgical options when conservative measures fail', 'Absorbent products for symptom management', 'Address reversible causes (DIAPERS: Delirium, Infection, Atrophic vaginitis, Pharmaceuticals, Excess output, Restricted mobility, Stool impaction)'],
    ['Pelvic floor exercises starting in midlife', 'Weight management', 'Smoking cessation', 'Avoidance of bladder irritants', 'Regular toileting schedules', 'Maintaining mobility', 'Prompt treatment of UTIs', 'Medication review'],
    'Bladder leakage is very common but is not a normal part of aging and should not be accepted as inevitable. Many effective treatments exist, from exercises to medications to simple lifestyle changes. Talk to your doctor openly about it.',
  ),

  'pressure-injuries': ger(
    'pressure-injuries', 'Pressure Injuries (Pressure Ulcers)', 'Lesiones por Presion', 'geriatric-syndrome',
    'Localized damage to skin and underlying tissue, usually over bony prominences, from sustained pressure or pressure combined with shear. Affects up to 23% of nursing home residents and 8% of hospitalized older adults.',
    ['Immobility', 'Malnutrition (especially protein deficiency)', 'Urinary or fecal incontinence', 'Impaired sensation', 'Advanced age', 'Low body weight', 'Circulatory impairment', 'Previous pressure injuries', 'Cognitive impairment', 'Critical illness'],
    ['Braden Scale for Pressure Injury Risk', 'Skin assessment with attention to bony prominences', 'NPUAP staging (Stage 1-4, unstageable, deep tissue)', 'Nutritional assessment (albumin, prealbumin)', 'Wound measurement and photography', 'Assessment for infection (cellulitis, osteomyelitis)', 'Pain assessment at wound site', 'Vascular assessment if lower extremity'],
    ['Pressure redistribution (specialty mattress, repositioning every 2 hours)', 'Nutritional optimization (protein 1.25-1.5 g/kg/day, vitamin C, zinc)', 'Moisture management (incontinence care)', 'Wound care based on stage (moist healing environment)', 'Debridement of necrotic tissue when appropriate', 'Infection management', 'Pain management', 'Surgical consultation for Stage 3-4 wounds'],
    ['Risk assessment on admission and regularly thereafter', 'Repositioning schedules with documentation', 'Pressure-redistribution surfaces', 'Skin inspection with every position change', 'Nutritional optimization', 'Moisture barriers for incontinence', 'Patient and caregiver education', 'Early mobilization'],
    'Pressure injuries, sometimes called bedsores, can develop quickly when someone cannot change position easily. Preventing them through repositioning, good nutrition, and skin care is much easier than treating them.',
  ),

  'malnutrition-elderly': ger(
    'malnutrition-elderly', 'Malnutrition in Older Adults', 'Desnutricion en Adultos Mayores', 'geriatric-syndrome',
    'Undernutrition affecting 5-10% of community-dwelling and up to 50% of hospitalized older adults. Associated with impaired immunity, poor wound healing, sarcopenia, increased infection risk, and higher mortality.',
    ['Social isolation and loneliness', 'Depression', 'Poor dentition or oral health', 'Dysphagia', 'Polypharmacy (medications affecting appetite or absorption)', 'Chronic disease (cancer, heart failure, COPD)', 'Cognitive impairment', 'Financial constraints', 'Functional limitations affecting food preparation', 'Altered taste and smell'],
    ['Mini Nutritional Assessment (MNA)', 'Malnutrition Universal Screening Tool (MUST)', 'Unintentional weight loss (more than 5% in 1 month or 10% in 6 months)', 'Body mass index', 'Serum albumin and prealbumin', 'Dietary intake assessment', 'Oral health examination', 'Swallowing evaluation if dysphagia suspected', 'Depression and cognitive screening'],
    ['Dietary counseling with registered dietitian', 'Oral nutritional supplements between meals', 'Fortified foods (adding protein powder, healthy fats)', 'Address underlying causes (treat depression, improve oral health)', 'Medication review for appetite-affecting drugs', 'Social dining programs (Meals on Wheels, congregate meals)', 'Appetite stimulants if appropriate (mirtazapine, megestrol with caution)', 'Enteral nutrition only when consistent with goals of care'],
    ['Regular nutritional screening', 'Social engagement during meals', 'Accessible food preparation (adaptive equipment)', 'Oral health maintenance', 'Community nutrition programs', 'Family and caregiver nutrition education', 'Pleasant mealtime environment', 'Small, frequent, nutrient-dense meals'],
    'Good nutrition is essential for staying strong and healing well. If you have lost weight without trying or have a poor appetite, tell your doctor. Simple changes like eating smaller, more frequent meals and adding protein can make a real difference.',
  ),

  // ---------------------------------------------------------------------------
  // ADDITIONAL ENTRIES (mixed categories to reach ~25)
  // ---------------------------------------------------------------------------
  'orthostatic-hypotension': ger(
    'orthostatic-hypotension', 'Orthostatic Hypotension', 'Hipotension Ortostatica', 'falls',
    'Drop in systolic BP of 20 mmHg or more or diastolic BP of 10 mmHg or more within 3 minutes of standing, affecting 20-30% of community-dwelling older adults. Major contributor to falls, syncope, and cardiovascular events.',
    ['Age-related autonomic decline', 'Antihypertensive medications', 'Diuretics', 'Dehydration', 'Parkinson disease', 'Diabetes with autonomic neuropathy', 'Prolonged bed rest', 'Post-prandial state', 'Adrenal insufficiency', 'Anemia'],
    ['Orthostatic vital signs (supine then standing at 1 and 3 minutes)', 'Medication review for causative agents', 'Volume status assessment', 'Autonomic function testing if indicated', 'Hemoglobin and hematocrit', 'Fasting glucose or HbA1c', 'Adrenal function if suspected', 'Echocardiogram if cardiac cause suspected'],
    ['Medication adjustment or reduction', 'Adequate hydration (1.5-2 L/day unless fluid-restricted)', 'Compression stockings (thigh-high, 20-30 mmHg)', 'Rising slowly in stages (sit before standing)', 'Increased dietary salt if not contraindicated', 'Small frequent meals to reduce post-prandial effect', 'Fludrocortisone or midodrine if non-pharmacological measures insufficient', 'Physical counter-maneuvers (leg crossing, squatting)'],
    ['Regular medication review', 'Adequate daily fluid intake', 'Avoid prolonged standing', 'Use bed elevation at head (10-15 degrees)', 'Avoid large meals and alcohol', 'Exercise to improve vascular tone', 'Educate on symptoms and countermaneuvers'],
    'Feeling dizzy or lightheaded when you stand up is common in older adults and can be caused by medications, dehydration, or other conditions. Standing up slowly and staying well hydrated are simple steps that can help prevent falls.',
  ),

  'sleep-disorders-elderly': ger(
    'sleep-disorders-elderly', 'Sleep Disorders in Older Adults', 'Trastornos del Sueno en Adultos Mayores', 'geriatric-syndrome',
    'Age-related changes in sleep architecture combined with higher prevalence of sleep disorders, affecting over 50% of older adults. Poor sleep is associated with cognitive decline, falls, depression, and increased mortality.',
    ['Age-related reduction in slow-wave and REM sleep', 'Chronic pain', 'Nocturia', 'Medications (beta-blockers, corticosteroids, SSRIs)', 'Depression and anxiety', 'Sleep apnea', 'Restless legs syndrome', 'Circadian rhythm changes (advanced sleep phase)', 'Caffeine and alcohol use', 'Sedentary lifestyle'],
    ['Pittsburgh Sleep Quality Index', 'Epworth Sleepiness Scale', 'Sleep diary for 2 weeks', 'STOP-BANG for obstructive sleep apnea screening', 'Polysomnography when sleep apnea or other primary sleep disorder suspected', 'Medication review', 'Screening for depression, pain, and nocturia', 'Actigraphy for circadian rhythm assessment'],
    ['Cognitive behavioral therapy for insomnia (CBT-I) as first-line', 'Sleep hygiene education', 'Stimulus control and sleep restriction therapy', 'CPAP for obstructive sleep apnea', 'Treat underlying causes (pain, depression, nocturia)', 'Avoid benzodiazepines and non-benzodiazepine hypnotics', 'Low-dose trazodone or melatonin if pharmacotherapy needed', 'Bright light therapy for circadian rhythm disorders'],
    ['Regular sleep schedule', 'Regular daytime physical activity', 'Limit daytime napping to 20-30 minutes', 'Avoid caffeine after noon', 'Reduce evening fluid intake', 'Comfortable sleep environment (cool, dark, quiet)', 'Avoid screens before bedtime', 'Wind-down routine before bed'],
    'Sleep changes with age, but persistent trouble sleeping is not normal and can affect your health. Good sleep habits and non-drug treatments are usually more effective and safer than sleeping pills for older adults.',
  ),

  'dehydration-elderly': ger(
    'dehydration-elderly', 'Dehydration in Older Adults', 'Deshidratacion en Adultos Mayores', 'geriatric-syndrome',
    'Inadequate body water relative to sodium, common in older adults due to decreased thirst sensation, reduced kidney concentrating ability, and medication effects. A frequent cause of confusion, falls, kidney injury, and hospitalization.',
    ['Decreased thirst perception', 'Diuretic use', 'Laxative use', 'Reduced mobility limiting access to fluids', 'Dysphagia', 'Fear of incontinence', 'Cognitive impairment', 'Diabetes mellitus', 'Febrile illness', 'Hot weather', 'Institutionalization'],
    ['Clinical assessment (skin turgor, mucous membranes, axillary moisture)', 'Orthostatic vital signs', 'BUN-to-creatinine ratio (above 20 suggests dehydration)', 'Serum osmolality', 'Urine specific gravity and color', 'Serum sodium', 'Weight change', 'Fluid intake-output monitoring', 'Assessment of barriers to fluid intake'],
    ['Oral rehydration preferred when possible', 'Small frequent sips throughout the day', 'Flavored or preferred beverages to encourage intake', 'Foods with high water content (soups, fruits, gelatin)', 'IV fluid replacement for moderate-severe dehydration', 'Address underlying causes (fever, diarrhea, medication adjustment)', 'Treat any resulting AKI or electrolyte abnormalities', 'Modify medications contributing to fluid loss'],
    ['Structured fluid intake schedule (not relying on thirst)', 'Easily accessible beverages throughout the day', 'Monitor fluid intake in care settings', 'Educate caregivers on dehydration risk', 'Adjust diuretics in hot weather or illness', 'Encourage fluid-rich foods', 'Monitor weight regularly', 'Prompt treatment of acute illness'],
    'Older adults often do not feel thirsty even when they need fluids. Keeping water or other beverages nearby and sipping throughout the day, rather than waiting until you are thirsty, helps prevent dehydration and its complications.',
  ),

  'chronic-pain-elderly': ger(
    'chronic-pain-elderly', 'Chronic Pain Management in Older Adults', 'Manejo del Dolor Cronico en Adultos Mayores', 'geriatric-syndrome',
    'Persistent pain lasting more than 3 months, affecting 25-50% of community-dwelling older adults and up to 80% of nursing home residents. Undertreated due to communication barriers, fear of addiction, and atypical pain presentation.',
    ['Osteoarthritis', 'Neuropathic conditions', 'Spinal stenosis', 'Cancer', 'Previous fractures', 'Peripheral vascular disease', 'Cognitive impairment limiting self-report', 'Depression (bidirectional relationship)', 'Immobility', 'Social isolation'],
    ['Numeric rating scale or verbal descriptor scale', 'PAINAD scale for cognitively impaired patients', 'Abbey Pain Scale for dementia', 'Functional impact assessment', 'Brief Pain Inventory', 'Neuropathic pain screening (DN4)', 'Depression and anxiety screening', 'Medication review', 'Physical examination focused on pain source'],
    ['Multimodal approach combining pharmacological and non-pharmacological therapies', 'Acetaminophen as first-line (up to 3g/day in elderly)', 'Topical agents (lidocaine, diclofenac, capsaicin)', 'Duloxetine or gabapentin for neuropathic pain', 'Opioids only with careful assessment, low starting dose, and close monitoring', 'Avoid NSAIDs long-term (GI, renal, cardiovascular risk)', 'Physical therapy', 'CBT for pain management', 'Acupuncture, massage, heat or cold therapy'],
    ['Regular physical activity appropriate to ability', 'Weight management to reduce joint stress', 'Early treatment of painful conditions', 'Ergonomic adaptations', 'Stress management techniques', 'Social engagement to reduce pain perception', 'Regular reassessment of pain management plan'],
    'Chronic pain is not something you have to just live with as you age. Many safe and effective treatments exist, including non-medication options. Working with your doctor to find the right combination can improve your comfort and quality of life.',
  ),
};

// =============================================================================
// QUERY FUNCTIONS
// =============================================================================

/** Retrieve a single entry by ID */
export function getGeriatricsEntry(id: string): GeriatricsEntry | undefined {
  return GERIATRICS_ENTRIES[id];
}

/** Search entries by keyword across name, description, risk factors, and management */
export function searchGeriatrics(query: string): GeriatricsEntry[] {
  const q = query.toLowerCase();
  return Object.values(GERIATRICS_ENTRIES).filter(entry =>
    entry.name.toLowerCase().includes(q) ||
    entry.nameEs.toLowerCase().includes(q) ||
    entry.description.toLowerCase().includes(q) ||
    entry.riskFactors.some(r => r.toLowerCase().includes(q)) ||
    entry.assessment.some(a => a.toLowerCase().includes(q)) ||
    entry.management.some(m => m.toLowerCase().includes(q))
  );
}

/** Get all entries for a given category */
export function getGeriatricsByCategory(category: GeriatricsCategory): GeriatricsEntry[] {
  return Object.values(GERIATRICS_ENTRIES).filter(e => e.category === category);
}

/** Get all available categories with their entry counts */
export function getGeriatricsCategoryCounts(): Record<GeriatricsCategory, number> {
  const counts = {} as Record<GeriatricsCategory, number>;
  for (const entry of Object.values(GERIATRICS_ENTRIES)) {
    counts[entry.category] = (counts[entry.category] || 0) + 1;
  }
  return counts;
}

/** Total number of entries */
export function getGeriatricsCount(): number {
  return Object.keys(GERIATRICS_ENTRIES).length;
}
