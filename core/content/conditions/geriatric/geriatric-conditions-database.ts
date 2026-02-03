/**
 * Geriatric Conditions Database
 *
 * Comprehensive reference of 15 geriatric-specific conditions with
 * clinical summaries, 5 complexity levels, Spanish translations,
 * and ICD-11 codes.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type GeriatricCategory =
  | 'syndrome'
  | 'musculoskeletal'
  | 'neuropsychiatric'
  | 'pharmacologic'
  | 'injury-prevention'
  | 'integumentary'
  | 'genitourinary'
  | 'nutritional'
  | 'psychosocial';

export interface GeriatricComplexityLevel {
  level: 1 | 2 | 3 | 4 | 5;
  label: string;
  description: string;
}

export interface GeriatricConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: GeriatricCategory;
  icd11: string;
  prevalence: string;
  presentation: string;
  diagnosis: string;
  treatment: string;
  prevention: string;
  prognosis: string;
  keyConsideration: string;
  complexityLevels: [
    GeriatricComplexityLevel,
    GeriatricComplexityLevel,
    GeriatricComplexityLevel,
    GeriatricComplexityLevel,
    GeriatricComplexityLevel,
  ];
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function gc(
  id: string, name: string, nameEs: string,
  category: GeriatricCategory, icd11: string,
  prevalence: string, presentation: string, diagnosis: string,
  treatment: string, prevention: string, prognosis: string,
  keyConsideration: string,
  l1: string, l2: string, l3: string, l4: string, l5: string,
): GeriatricConditionEntry {
  return {
    id, name, nameEs, category, icd11,
    prevalence, presentation, diagnosis, treatment,
    prevention, prognosis, keyConsideration,
    complexityLevels: [
      { level: 1, label: '8th Grade', description: l1 },
      { level: 2, label: 'High School', description: l2 },
      { level: 3, label: 'College', description: l3 },
      { level: 4, label: 'Graduate', description: l4 },
      { level: 5, label: 'MD/Professional', description: l5 },
    ],
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const GERIATRIC_CONDITIONS: Record<string, GeriatricConditionEntry> = {

  // ---- Syndromes (3) ------------------------------------------------------

  'frailty-syndrome': gc(
    'frailty-syndrome', 'Frailty Syndrome', 'Sindrome de fragilidad',
    'syndrome', 'MG2A',
    'Affects 10-15% of community-dwelling adults aged 65+; prevalence increases sharply after age 80.',
    'Unintentional weight loss (>10 lbs/year), self-reported exhaustion, low physical activity, slow gait speed, weak grip strength. Fried phenotype requires 3 of 5 criteria.',
    'Fried Frailty Phenotype or Clinical Frailty Scale (CFS); gait speed <0.8 m/s; grip strength by dynamometry; FRAIL questionnaire; sarcopenia screening (SARC-F).',
    'Multicomponent exercise programs (resistance + balance + aerobic), nutritional optimization (protein 1.0-1.2 g/kg/day), vitamin D supplementation, comprehensive geriatric assessment (CGA), medication review to reduce polypharmacy.',
    'Regular physical activity throughout life, adequate protein intake, social engagement, fall prevention programs, routine screening at age 70+.',
    'Progressive without intervention; exercise programs can reverse pre-frailty. Frailty independently predicts falls, hospitalization, disability, and mortality.',
    'Frailty is not an inevitable part of aging. Early identification of pre-frailty allows targeted interventions that can meaningfully restore function.',
    'Frailty is when an older person becomes very weak and tired, loses weight without trying, and moves slowly. Exercise and good nutrition can help prevent and improve it.',
    'Frailty syndrome is a clinical state of increased vulnerability in older adults characterized by declining strength, endurance, and physiological reserves. It is diagnosed using criteria like unintentional weight loss, exhaustion, and slow walking speed.',
    'Frailty is a geriatric syndrome reflecting cumulative decline across multiple organ systems leading to loss of homeostatic reserve. The Fried phenotype model uses five measurable criteria; three or more confirm frailty, while one or two indicate pre-frailty.',
    'Frailty results from dysregulation of the hypothalamic-pituitary-adrenal axis, chronic low-grade inflammation (elevated IL-6, CRP, TNF-alpha), and sarcopenia. The Rockwood deficit accumulation model quantifies frailty as a Frailty Index from 30+ health deficits.',
    'Frailty involves interconnected pathophysiology: immune senescence, neuroendocrine dysregulation, mitochondrial dysfunction, and stem cell exhaustion. Management requires CGA-guided multimodal interventions. Emerging biomarkers (GDF-15, klotho) may improve early detection. Evidence supports structured exercise as the strongest single intervention.',
  ),

  'failure-to-thrive-elderly': gc(
    'failure-to-thrive-elderly', 'Failure to Thrive (Geriatric)', 'Falla de medro (geriatrico)',
    'syndrome', 'MG2Y',
    'Affects 5-35% of community-dwelling older adults; up to 25-40% of nursing home residents.',
    'Progressive weight loss, decreased appetite, declining functional status, social withdrawal, cognitive decline, and depression without single identifiable medical cause.',
    'Comprehensive geriatric assessment; nutritional screening (MNA, MUST); depression screening (GDS-15); cognitive assessment (MMSE/MoCA); functional status (ADLs/IADLs); laboratory workup (CBC, CMP, TSH, B12, albumin/prealbumin).',
    'Address reversible causes (depression, medication side effects, dental problems, dysphagia); nutritional supplementation; appetite stimulants (megestrol, mirtazapine); physical and occupational therapy; social support and mental health treatment.',
    'Routine nutritional and functional screening, depression treatment, social engagement, medication review, dental care, exercise programs.',
    'Poor; 25-40% mortality at 1 year if untreated. Outcomes improve significantly when a treatable underlying cause (depression, medication effects, social isolation) is identified and addressed.',
    'Failure to thrive in the elderly often has multiple overlapping causes. A systematic approach to uncover and treat each contributing factor is essential.',
    'Failure to thrive means an older person is losing weight, becoming weaker, and withdrawing from life without a clear reason. Finding and treating the causes such as sadness, medication problems, or difficulty eating can help.',
    'Geriatric failure to thrive is a syndrome of weight loss, functional decline, and apathy in older adults. It often results from overlapping medical, psychological, and social factors that must be systematically evaluated.',
    'Failure to thrive in the elderly is characterized by unintentional weight loss >5% over 6-12 months, declining ADL function, and psychosocial withdrawal. The mnemonic FAILURE captures common causes: Food, Abuse/neglect, Isolation, Late-life depression, Underlying disease, Rx medications, Elder abuse.',
    'The pathogenesis involves interplay between anorexia of aging (altered ghrelin/leptin signaling), sarcopenia, immune dysregulation, and psychoneuroimmunological decline. The Comprehensive Geriatric Assessment is essential to distinguish reversible from irreversible contributors.',
    'Geriatric FTT requires systematic evaluation using validated tools (MNA-SF, GDS, MMSE) integrated with CGA. Evidence supports multicomponent interventions. Emerging research on ghrelin agonists and myostatin inhibitors may offer future pharmacologic options. Palliative care consultation is appropriate when trajectory suggests end-of-life decline.',
  ),

  'polypharmacy-effects': gc(
    'polypharmacy-effects', 'Polypharmacy Effects', 'Efectos de la polifarmacia',
    'syndrome', 'QC60',
    '40-50% of older adults take 5+ medications; 12% take 10+ (hyperpolypharmacy). Adverse drug events cause 10-30% of hospital admissions in elderly.',
    'Falls, confusion/delirium, dizziness, fatigue, anorexia, urinary retention/incontinence, constipation, bleeding. Symptoms often attributed to aging rather than recognized as drug effects. Drug-drug and drug-disease interactions.',
    'Comprehensive medication reconciliation; Beers Criteria or STOPP/START criteria review; assess anticholinergic burden (ACB scale); review over-the-counter and herbal supplements; pill counts; pharmacy records; evaluate each medication for ongoing indication.',
    'Deprescribing: systematic, supervised reduction or discontinuation of inappropriate medications; prioritize medications using STOPPFrail or deprescribing algorithms; taper gradually (especially CNS-active drugs); patient/family shared decision-making; regular follow-up after changes.',
    'Regular medication reviews (at least annually), single prescriber coordination, electronic prescribing alerts, patient education on risks, pharmacist-led medication therapy management, avoid prescribing cascades, brown bag medication review.',
    'Deprescribing reduces falls by 15-25%, cognitive impairment improves, and hospital readmissions decrease. Patient resistance to deprescribing is common; shared decision-making and trial discontinuation periods help.',
    'Every medication added to an older adult increases adverse event risk. The question is not just "what should we add?" but equally "what can we safely stop?"',
    'Polypharmacy means taking many medicines at once. In older adults this can cause problems like falling, confusion, and stomach trouble. Doctors should regularly check if every medicine is still needed.',
    'Polypharmacy (5+ medications) is common in older adults and significantly increases the risk of adverse drug reactions, falls, cognitive impairment, and hospitalization. Regular medication review and deprescribing are key management strategies.',
    'Polypharmacy is assessed using Beers Criteria (potentially inappropriate medications in older adults) and STOPP/START criteria (medications to stop or start). Anticholinergic burden scoring identifies cognitive risk. Deprescribing follows evidence-based tapering protocols.',
    'Age-related pharmacokinetic changes (reduced renal clearance, hepatic metabolism, increased body fat, decreased albumin) alter drug levels. Pharmacodynamic sensitivity increases for CNS-active and cardiovascular drugs. Prescribing cascades occur when a side effect is treated with another drug, compounding risk.',
    'Deprescribing is supported by RCTs showing reduced mortality in nursing homes and improved cognition. Tools include MedStopper, deprescribing.org algorithms, and the CEASE framework. CYP450 interactions require vigilance when discontinuing enzyme inhibitors/inducers. PPI and benzodiazepine deprescribing have the strongest evidence base. Shared decision-making frameworks improve patient acceptance.',
  ),

  // ---- Musculoskeletal (2) ------------------------------------------------

  'sarcopenia': gc(
    'sarcopenia', 'Sarcopenia', 'Sarcopenia',
    'musculoskeletal', 'FB32.6',
    'Affects 10-27% of community-dwelling adults over 60; prevalence >50% in those over 80.',
    'Progressive loss of skeletal muscle mass and strength; difficulty rising from chair, slow gait, frequent falls, reduced grip strength, fatigue.',
    'EWGSOP2 algorithm: low grip strength (<27 kg men, <16 kg women) confirms probable sarcopenia; low muscle mass (DXA or BIA) confirms diagnosis; low physical performance (gait speed <0.8 m/s) indicates severe sarcopenia.',
    'Resistance exercise training (2-3x/week, progressive overload), protein supplementation (1.2-1.5 g/kg/day, leucine-enriched), vitamin D (800-1000 IU/day if deficient), address underlying causes (malnutrition, inflammation, hormonal deficiency).',
    'Lifelong physical activity including resistance training, adequate dietary protein distributed across meals, vitamin D sufficiency, early mobilization during illness/hospitalization.',
    'Progressive without intervention; resistance exercise can increase muscle mass and strength even in those over 90. Sarcopenia independently increases fall risk, fracture risk, disability, hospitalization length, and mortality.',
    'Sarcopenia is not simply getting old. It is a treatable muscle disease. Resistance exercise is the most effective single intervention at any age.',
    'Sarcopenia is when muscles shrink and get weak as people get older. Lifting weights and eating enough protein can help build muscles back, even in very old adults.',
    'Sarcopenia is the age-related loss of muscle mass and strength that impairs physical function. It is now recognized as a muscle disease with an ICD code, not just normal aging. Exercise and protein intake are the primary treatments.',
    'Sarcopenia involves progressive loss of skeletal muscle mass (>2 SD below young adult mean) and function. The EWGSOP2 consensus defines it by low grip strength plus low muscle mass, with severity graded by physical performance measures.',
    'Sarcopenia pathophysiology involves motor neuron loss, anabolic resistance (mTOR pathway blunting), satellite cell depletion, mitochondrial dysfunction, increased myostatin signaling, and chronic inflammation. Hormonal changes (low testosterone, IGF-1, DHEA-S) contribute. Type II fiber atrophy predominates.',
    'Diagnosis follows the EWGSOP2 find-assess-confirm-severity pathway. Pharmacologic agents (selective androgen receptor modulators, myostatin antibodies, activin receptor antagonists) are in trials. Current evidence strongly supports progressive resistance training plus leucine-enriched protein (0.4 g/kg per meal, 3x daily) as first-line therapy.',
  ),

  'osteoporosis-geriatric': gc(
    'osteoporosis-geriatric', 'Osteoporosis (Geriatric Focus)', 'Osteoporosis (enfoque geriatrico)',
    'musculoskeletal', 'FB83.1',
    '~25% of women and 5% of men over 65; hip fracture risk doubles every 5 years after age 70.',
    'Often asymptomatic until fracture occurs; loss of height (>4 cm), kyphosis, vertebral compression fractures (acute back pain), hip fracture after low-energy fall, wrist fracture.',
    'DXA scan (T-score <= -2.5 at hip or spine); FRAX score for 10-year fracture probability; vertebral fracture assessment; labs to exclude secondary causes (calcium, vitamin D, TSH, PTH, CMP, CBC).',
    'Calcium (1200 mg/day) + vitamin D (800-1000 IU/day); bisphosphonates (alendronate, zoledronic acid) as first-line; denosumab for bisphosphonate-intolerant; anabolic agents (teriparatide, romosozumab) for very high-risk or severe cases; fall prevention program.',
    'Weight-bearing and resistance exercise throughout life, adequate calcium and vitamin D, fall prevention, avoidance of smoking and excessive alcohol, screening DXA for women 65+ and men 70+.',
    'Vertebral and hip fractures significantly increase morbidity and mortality; 20-30% of hip fracture patients die within 1 year. Treatment reduces fracture risk by 40-70%. Bone density can stabilize or modestly improve with therapy.',
    'In geriatric patients, fracture prevention is as important as treating bone density. A comprehensive fall prevention strategy combined with pharmacotherapy yields the best outcomes.',
    'Osteoporosis makes bones thin and fragile so they break easily. In older adults, a broken hip can be very serious. Medicine, calcium, vitamin D, and exercise help keep bones strong.',
    'Osteoporosis is a skeletal disease where bone mineral density is significantly reduced, making fractures more likely from minor falls. In older adults, hip and spine fractures carry high morbidity and mortality, making screening and treatment essential.',
    'Geriatric osteoporosis is diagnosed when DXA T-score is <= -2.5 or a fragility fracture has occurred. The FRAX tool estimates 10-year fracture risk using clinical risk factors. Treatment selection depends on fracture risk severity and includes antiresorptive and anabolic agents.',
    'Pathophysiology involves imbalanced bone remodeling with osteoclastic resorption exceeding osteoblastic formation, driven by estrogen/testosterone deficiency, RANKL upregulation, Wnt pathway suppression, and chronic inflammation. Secondary causes (hyperparathyroidism, glucocorticoids, malabsorption) must be excluded.',
    'Management follows a treat-to-target approach: high fracture risk warrants initial anabolic therapy (teriparatide, romosozumab) followed by antiresorptive consolidation. Drug holidays after 3-5 years of bisphosphonates require reassessment. Atypical femoral fractures and ONJ are rare but monitored. Vertebroplasty/kyphoplasty for refractory pain. Orthogeriatric co-management of fracture patients reduces mortality.',
  ),

  // ---- Neuropsychiatric (5) -----------------------------------------------

  'delirium': gc(
    'delirium', 'Delirium', 'Delirio',
    'neuropsychiatric', '6D70',
    'Affects 10-30% of hospitalized elderly; up to 50-80% in ICU settings; 60% of nursing home residents.',
    'Acute onset, fluctuating attention and awareness, disorganized thinking, altered consciousness; may be hyperactive (agitation), hypoactive (withdrawal/lethargy), or mixed. Develops over hours to days.',
    'CAM (Confusion Assessment Method): acute onset + fluctuating course + inattention + EITHER disorganized thinking OR altered level of consciousness; 4AT rapid screen; identify precipitants (infection, medications, metabolic derangement, pain, urinary retention, constipation).',
    'Treat underlying cause (antibiotics for infection, correct electrolytes, remove offending medications); non-pharmacologic first (reorientation, lighting, sleep hygiene, mobility, hydration, sensory aids); low-dose antipsychotics (haloperidol 0.25-0.5 mg) only for severe agitation threatening safety.',
    'Multicomponent prevention programs (HELP model): orientation protocols, early mobilization, sleep hygiene, hydration, nutrition, vision/hearing aids, medication review, avoid benzodiazepines and anticholinergics.',
    'Most episodes resolve within days to weeks if cause is treated. However, delirium independently increases mortality (up to 30% in-hospital), length of stay, risk of dementia, and institutionalization.',
    'Delirium is a medical emergency, not simply confusion. It signals an acute medical problem. Always identify and treat the underlying cause rather than just sedating the patient.',
    'Delirium is sudden confusion that happens in older adults when they are sick or in the hospital. It comes on quickly and usually goes away when the cause (like an infection or medicine problem) is treated.',
    'Delirium is an acute, fluctuating disturbance in attention and cognition caused by an underlying medical condition. It differs from dementia in its rapid onset, fluctuating course, and potential reversibility. It is especially common in hospitalized elderly patients.',
    'Delirium is diagnosed using the CAM criteria and classified as hyperactive, hypoactive, or mixed. Precipitants include infection, metabolic imbalance, medications (anticholinergics, benzodiazepines, opioids), pain, and environmental factors. Non-pharmacologic multicomponent interventions are first-line prevention and treatment.',
    'Delirium pathophysiology involves cholinergic deficiency, dopaminergic excess, neuroinflammation (microglial activation, BBB disruption), aberrant stress response (cortisol elevation), and network disconnection. The predisposing-precipitating model explains vulnerability: patients with more baseline risk factors (dementia, sensory deficits) require fewer precipitants.',
    'Evidence supports HELP-based protocols reducing delirium incidence by 30-40%. Antipsychotics lack strong evidence for prevention or treatment but may be justified for severe agitation. Dexmedetomidine may be superior in ICU settings. EEG shows diffuse slowing. Subsyndromal delirium carries intermediate prognosis. Delirium superimposed on dementia is underrecognized and worsens cognitive trajectory.',
  ),

  'dementia': gc(
    'dementia', 'Dementia (Alzheimer, Vascular, Lewy Body, Frontotemporal)', 'Demencia (Alzheimer, vascular, cuerpos de Lewy, frontotemporal)',
    'neuropsychiatric', '6D80',
    'Affects ~10% of adults over 65 and ~33% over 85. Alzheimer disease accounts for 60-70%, vascular dementia 15-20%, Lewy body dementia 5-15%, and frontotemporal dementia 5-10%.',
    'Alzheimer: gradual memory loss (especially recent), word-finding difficulty, getting lost. Vascular: stepwise decline, executive dysfunction, gait disturbance. Lewy body: visual hallucinations, REM sleep behavior disorder, parkinsonism, fluctuating cognition. Frontotemporal: personality/behavior changes, disinhibition, language deficits, onset often before age 65.',
    'Cognitive screening (MoCA, MMSE); neuropsychological testing; brain MRI (atrophy patterns, vascular changes); CSF biomarkers (amyloid-beta, tau for AD); PET imaging (amyloid, tau, FDG, DaT for LBD); laboratory workup to exclude reversible causes (B12, TSH, RPR, HIV, metabolic panel).',
    'Alzheimer: cholinesterase inhibitors (donepezil, rivastigmine, galantamine), memantine for moderate-severe; lecanemab/donanemab (anti-amyloid) for early AD. Vascular: control vascular risk factors. Lewy body: cholinesterase inhibitors, cautious antipsychotic use (avoid typical antipsychotics). Frontotemporal: SSRIs for behavioral symptoms, speech therapy. All types: caregiver support, structured routines, safety planning, advance directives.',
    'Cardiovascular risk factor management (hypertension, diabetes, obesity), physical exercise, cognitive engagement, social connection, hearing aid use if hearing loss, moderate alcohol, treat depression, avoid head trauma.',
    'Progressive and ultimately fatal; Alzheimer average survival 8-10 years from diagnosis. Early identification allows advance care planning and access to emerging disease-modifying therapies. Quality of life can be significantly supported through proper care.',
    'Dementia is not one disease but many. Accurate diagnosis of the subtype is essential because treatments, prognosis, and safety considerations differ markedly across types.',
    'Dementia is when the brain is damaged enough that a person cannot remember things, think clearly, or do daily tasks on their own. Alzheimer is the most common type. There is no cure yet, but medicines and support can help.',
    'Dementia is a chronic decline in cognitive function severe enough to interfere with daily activities. The four main types are Alzheimer disease, vascular dementia, Lewy body dementia, and frontotemporal dementia, each with distinct features and management approaches.',
    'Dementia diagnosis requires documented cognitive decline in one or more domains (memory, executive function, language, visuospatial, social cognition) per DSM-5/NIA-AA criteria. Neuroimaging reveals type-specific patterns: hippocampal atrophy in AD, white matter disease in vascular dementia, posterior cortical atrophy in LBD.',
    'Alzheimer pathology features amyloid-beta plaques and neurofibrillary tau tangles via the amyloid cascade hypothesis. Vascular dementia involves cumulative ischemic injury. LBD features alpha-synuclein Lewy bodies in cortical and limbic regions. FTD involves TDP-43, tau, or FUS protein aggregation in frontal/temporal lobes.',
    'Anti-amyloid monoclonal antibodies (lecanemab, donanemab) show modest slowing of early AD progression with ARIA monitoring required. Cholinesterase inhibitors remain standard. LBD patients have neuroleptic sensitivity; quetiapine or pimavanserin preferred. The Lancet Commission identifies 12 modifiable dementia risk factors accounting for 40% of cases. Palliative care principles should be integrated early.',
  ),

  'geriatric-depression': gc(
    'geriatric-depression', 'Geriatric Depression', 'Depresion geriatrica',
    'neuropsychiatric', '6A70',
    'Affects 1-5% of community-dwelling elderly (major depression); 10-15% have significant depressive symptoms; 25-50% of nursing home residents.',
    'Often presents atypically: somatic complaints (pain, fatigue, GI symptoms), cognitive impairment (pseudodementia), social withdrawal, apathy, irritability, anorexia/weight loss, insomnia. May not report sadness. Increased risk of suicide, especially in older white males.',
    'Geriatric Depression Scale (GDS-15 or GDS-5); PHQ-9; screen for medical contributors (hypothyroidism, B12 deficiency, medication effects); cognitive screening to differentiate from dementia; assess suicide risk (direct questioning, Columbia protocol).',
    'SSRIs first-line (sertraline, escitalopram); start low, go slow; psychotherapy (CBT, PST effective in elderly); exercise prescription; social activation; ECT for severe/refractory cases; address contributing medical conditions and medications.',
    'Social engagement and connectedness, regular physical activity, treatment of chronic pain, hearing/vision correction, meaningful activities, screening at annual wellness visits, medication review.',
    'Treatable in most cases; SSRIs effective in 60-70% of older adults. Untreated depression increases mortality, cognitive decline, functional disability, and suicide risk. Pseudodementia from depression may partially or fully reverse with treatment.',
    'Depression in older adults is frequently underdiagnosed because it presents differently than in younger adults. Always screen, always ask about suicide, and always treat.',
    'Depression in older adults can look different than in younger people. Instead of feeling sad, they may have body aches, no appetite, trouble sleeping, or memory problems. Medicine and therapy can help.',
    'Geriatric depression often presents with somatic symptoms, cognitive complaints, and withdrawal rather than overt sadness. It is underdiagnosed and undertreated. Screening tools like the GDS are validated for older adults. Treatment includes antidepressants and psychotherapy.',
    'Late-life depression is associated with vascular brain changes (vascular depression hypothesis), neurodegeneration, chronic inflammation, and psychosocial stressors (bereavement, isolation, functional loss). Pseudodementia describes reversible cognitive impairment caused by depression.',
    'Pathophysiology involves reduced serotonin/norepinephrine neurotransmission, HPA axis dysregulation, hippocampal atrophy, white matter hyperintensities, and neuroinflammation. Pharmacokinetic changes in aging affect drug metabolism. Venlafaxine and mirtazapine are alternatives when SSRIs fail. ECT is highly effective (80-90%) for severe or psychotic depression.',
    'Evidence supports measurement-based care using PHQ-9 for treatment monitoring. Collaborative care models improve outcomes. Augmentation strategies include lithium, aripiprazole, or bupropion. TMS is emerging for treatment-resistant cases. Depression-executive dysfunction syndrome predicts poorer antidepressant response. Suicide risk assessment is paramount given high lethality of attempts in elderly males.',
  ),

  'sundowning': gc(
    'sundowning', 'Sundowning', 'Sindrome del ocaso (sundowning)',
    'neuropsychiatric', '6D86',
    'Affects 20-45% of persons with dementia; more common in moderate-to-advanced stages.',
    'Late afternoon or evening onset of increased confusion, agitation, anxiety, pacing, wandering, aggression, or hallucinations in patients with dementia. Symptoms worsen as daylight fades and often disrupt nighttime sleep.',
    'Clinical diagnosis based on temporal pattern; rule out delirium superimposed on dementia, pain, urinary retention, constipation, medication effects, unmet needs; assess sleep-wake cycle disruption; caregiver history is essential.',
    'Non-pharmacologic first: bright light therapy (2500 lux morning exposure), structured afternoon activities, consistent daily routine, minimize evening stimulation, night lights, melatonin (0.5-3 mg at dusk); avoid caffeine/alcohol afternoon onward. Pharmacologic only if safety threatened: low-dose trazodone, or cautious antipsychotic use.',
    'Structured daily routines, adequate daytime light exposure, regular physical activity, reduced evening stimulation, treat comorbid sleep disorders, caregiver education and respite.',
    'Manageable with consistent non-pharmacologic strategies in most cases. Poorly managed sundowning accelerates caregiver burnout and institutionalization. No single medication reliably treats sundowning.',
    'Sundowning is a behavioral manifestation, not a separate disease. Identifying and addressing triggers (fatigue, overstimulation, unmet needs) is more effective than medication.',
    'Sundowning is when someone with memory problems gets more confused, anxious, or restless in the late afternoon and evening. Keeping a calm routine, good lighting, and regular activities during the day can help.',
    'Sundowning refers to the emergence or worsening of behavioral and psychological symptoms of dementia in the late afternoon to evening. It is thought to relate to disrupted circadian rhythms and is managed primarily through environmental and behavioral strategies.',
    'Sundowning likely involves degeneration of the suprachiasmatic nucleus disrupting circadian melatonin secretion and cortisol rhythms. Contributing factors include sensory overload, unmet physical needs, medication timing, and caregiver fatigue. Bright light therapy and exogenous melatonin target the circadian mechanism.',
    'SCN neuronal loss in Alzheimer disease correlates with circadian disruption severity. Cholinergic depletion impairs arousal regulation. Chronotherapy (timed light exposure, melatonin, activity scheduling) is the evidence-based foundation. Antipsychotic use carries FDA black-box warning for increased mortality in dementia. Trazodone 25-50 mg HS may improve sleep architecture.',
    'Management follows the DICE approach (Describe, Investigate, Create, Evaluate). Actigraphy can objectively quantify circadian disruption. Ramelteon and suvorexant are under study. Caregiver burden assessment (Zarit scale) must be concurrent. Clinical trials of orexin receptor antagonists show promise. Non-pharmacologic interventions have NNT of 3-5 for meaningful behavioral improvement.',
  ),

  // ---- Injury Prevention / Integumentary (2) ------------------------------

  'falls-prevention': gc(
    'falls-prevention', 'Falls and Fall Prevention', 'Caidas y prevencion de caidas',
    'injury-prevention', 'MB00',
    '30% of community-dwelling adults 65+ fall annually; 50% of those over 80. Falls are the leading cause of injury death in adults 65+.',
    'History of falls, unsteady gait, use of assistive devices, fear of falling, bruises or injuries from falling. Risk factors: muscle weakness, gait/balance deficits, polypharmacy, visual impairment, orthostatic hypotension, environmental hazards, cognitive impairment.',
    'Timed Up and Go (TUG) test; 30-second chair stand; Berg Balance Scale; orthostatic blood pressure measurement; vision screening; medication review (especially sedatives, antihypertensives); home safety assessment; foot and footwear evaluation.',
    'Multicomponent interventions: exercise programs emphasizing balance and strength (tai chi, Otago program); medication review and reduction; vision correction; home safety modification (grab bars, lighting, remove rugs); vitamin D supplementation; orthostatic hypotension management; assistive devices; hip protectors for high-risk individuals.',
    'Regular exercise (balance + strength training), home hazard removal, annual vision checks, medication reviews, proper footwear, vitamin D adequacy, treat orthostatic hypotension, avoid excessive alcohol, manage fear of falling.',
    'Multicomponent prevention programs reduce falls by 20-30%. Hip fractures from falls carry 20-30% one-year mortality. Fear of falling can create a vicious cycle of activity avoidance, deconditioning, and further fall risk.',
    'Falls are not an inevitable part of aging. Most falls have identifiable, modifiable risk factors. A single fall should prompt comprehensive assessment.',
    'Falls are the most common cause of serious injury in older adults. Exercises that improve balance and strength, removing tripping hazards at home, and checking vision and medicines can prevent most falls.',
    'Falls in older adults result from multiple interacting risk factors including muscle weakness, balance problems, medications, and home hazards. Evidence supports multicomponent prevention programs that include exercise, medication review, and environmental modification.',
    'Fall risk assessment uses validated tools (TUG, Berg Balance Scale) and evaluates intrinsic factors (gait, cognition, orthostasis, vision) and extrinsic factors (environment, footwear). Tai chi and the Otago exercise program have Level 1 evidence for fall reduction.',
    'Falls result from failure of the postural control system: reduced proprioception, vestibular decline, visual deficits, delayed central processing, and musculoskeletal weakness. Sarcopenia, orthostatic hypotension, and polypharmacy compound risk. The STEADI protocol (CDC) provides a systematic clinical approach.',
    'CDC STEADI algorithm guides screening, assessment, and intervention. Meta-analyses show exercise alone reduces falls by 23% (NNT ~10); multicomponent programs by 25-30%. Vitamin D reduces falls in deficient populations (NNT ~15). Bisphosphonates reduce fracture but not fall incidence. Emerging: wearable sensors for real-time gait analysis and predictive fall detection.',
  ),

  'pressure-ulcers': gc(
    'pressure-ulcers', 'Pressure Ulcers / Decubitus Ulcers', 'Ulceras por presion / Ulceras por decubito',
    'integumentary', 'EH90',
    '2.5 million US patients/year develop pressure ulcers; prevalence 10-18% in acute care, up to 28% in long-term care.',
    'Nonblanchable erythema of intact skin (Stage 1), partial-thickness skin loss with exposed dermis (Stage 2), full-thickness skin loss (Stage 3), full-thickness skin and tissue loss with exposed fascia/muscle/bone (Stage 4). Common sites: sacrum, heels, ischial tuberosities, greater trochanters.',
    'Braden Scale for risk assessment (scores <= 18 indicate risk); clinical staging (NPUAP stages 1-4, unstageable, deep tissue injury); wound assessment (size, depth, tunneling, undermining, exudate, tissue type); nutritional status evaluation; assess for osteomyelitis if bone exposed.',
    'Repositioning every 2 hours; pressure-redistribution surfaces (alternating pressure mattress); nutritional optimization (protein 1.25-1.5 g/kg/day, calories, vitamin C, zinc); wound care per stage (moisture barrier for Stage 1, moist wound healing for Stage 2-3, debridement and VAC therapy for Stage 3-4); manage incontinence; surgical flap repair for refractory Stage 3-4.',
    'Regular repositioning (q2h), support surfaces for at-risk patients, skin inspection (especially bony prominences), moisture management, adequate nutrition, early mobilization, Braden Scale screening on admission and regularly.',
    'Stage 1-2 generally heal with proper care (weeks). Stage 3-4 may take months; Stage 4 has high complication risk (osteomyelitis, sepsis). Pressure ulcers increase mortality 2-5 fold in hospitalized elderly.',
    'Pressure ulcers are largely preventable. A structured prevention protocol (repositioning, nutrition, support surfaces, skin inspection) is far more effective and humane than treatment.',
    'Pressure ulcers are sores that develop when skin and tissue are damaged from staying in one position too long. They often appear on the back, hips, and heels. Regular turning and good nutrition help prevent and heal them.',
    'Pressure ulcers (decubitus ulcers) are localized injuries to the skin and underlying tissue from sustained pressure, often over bony prominences. They are staged 1-4 based on depth. Prevention focuses on repositioning, nutrition, and support surfaces.',
    'The NPUAP staging system classifies pressure injuries. Pathogenesis involves sustained pressure exceeding capillary closing pressure (~32 mmHg), causing tissue ischemia and necrosis. Shear, friction, moisture, and poor nutrition are compounding factors. The Braden Scale assesses six risk domains.',
    'Tissue damage occurs through ischemia-reperfusion injury, direct cellular deformation, and lymphatic impairment. Deep tissue injury starts at the muscle-bone interface and progresses outward (iceberg model). Biofilm formation complicates chronic wounds. Malnutrition (low prealbumin <15 mg/dL) impairs healing.',
    'Evidence-based bundles (SSKIN: Surface, Skin inspection, Keep moving, Incontinence, Nutrition) reduce incidence by 50-70%. Negative-pressure wound therapy (VAC) accelerates granulation in Stage 3-4. CMS considers hospital-acquired Stage 3-4 pressure ulcers a never event. Quality metrics now track institutional rates. Subepidermal moisture measurement enables pre-clinical detection.',
  ),

  // ---- Genitourinary (1) --------------------------------------------------

  'urinary-incontinence-geriatric': gc(
    'urinary-incontinence-geriatric', 'Urinary Incontinence', 'Incontinencia urinaria',
    'genitourinary', 'MF50',
    'Affects 30-50% of community-dwelling women over 65 and 15-30% of men; up to 70% of nursing home residents.',
    'Stress incontinence: leakage with coughing, sneezing, lifting. Urge incontinence: sudden strong need to urinate with leakage. Mixed: features of both. Overflow: dribbling, incomplete emptying, weak stream. Functional: inability to reach toilet in time due to mobility/cognition.',
    'Bladder diary (frequency, volume, leakage); physical exam (pelvic, rectal, prostate); post-void residual by ultrasound; urinalysis (exclude UTI, glycosuria); assess functional and cognitive status; cough stress test; urodynamics if diagnosis unclear.',
    'Behavioral: pelvic floor exercises (Kegels), bladder training, timed voiding, prompted voiding for cognitively impaired. Pharmacologic: antimuscarinics (oxybutynin, tolterodine) or beta-3 agonists (mirabegron) for urge; topical estrogen for atrophic changes. Surgical: sling procedures for refractory stress incontinence; botulinum toxin for refractory urge. Address reversible causes (DIAPPERS mnemonic).',
    'Pelvic floor exercises, healthy weight, adequate fluid intake (not excessive restriction), avoid caffeine/alcohol, treat constipation, manage diabetes, routine screening.',
    'Most types improve significantly with behavioral interventions. Untreated incontinence leads to skin breakdown, UTIs, falls (rushing to bathroom), social isolation, depression, and premature institutionalization.',
    'Incontinence is common but never normal. The reversible causes mnemonic DIAPPERS (Delirium, Infection, Atrophic vaginitis, Pharmaceuticals, Psychological, Excess urine output, Restricted mobility, Stool impaction) guides initial workup.',
    'Urinary incontinence means leaking urine by accident. It is very common in older adults but is not a normal part of aging. Exercises, medicines, and simple habit changes can help most people.',
    'Urinary incontinence in older adults is classified as stress, urge, mixed, overflow, or functional. Reversible causes should be identified first. Behavioral therapies are first-line for most types.',
    'The DIAPPERS mnemonic identifies transient causes. Stress incontinence involves urethral hypermobility or intrinsic sphincter deficiency. Urge incontinence reflects detrusor overactivity. Functional incontinence is due to mobility or cognitive barriers. Post-void residual >200 mL suggests overflow.',
    'Aging changes include decreased bladder capacity, increased uninhibited detrusor contractions, impaired urethral closure pressure, and prostatic enlargement. Anticholinergic medications for urge incontinence carry significant cognitive risk in elderly (cross BBB, worsen dementia). Beta-3 agonists have a better CNS safety profile.',
    'AUA/SUFU guidelines recommend behavioral therapy first (NNT 3-4 for improvement). Anticholinergics are associated with increased dementia risk (cumulative dose-response). Vibegron and mirabegron are preferred pharmacotherapy. Sacral neuromodulation and percutaneous tibial nerve stimulation are third-line. Continence care programs in nursing homes reduce costs and improve quality.',
  ),

  // ---- Nutritional (2) ----------------------------------------------------

  'dysphagia-elderly': gc(
    'dysphagia-elderly', 'Dysphagia in Elderly', 'Disfagia en el adulto mayor',
    'nutritional', 'MD90',
    'Affects 15-40% of community-dwelling elderly; up to 60% of nursing home residents and 50-75% of stroke survivors.',
    'Coughing or choking during meals, wet/gurgly voice after swallowing, food sticking sensation, prolonged mealtimes, recurrent pneumonia, weight loss, avoidance of certain food textures, drooling, nasal regurgitation.',
    'Bedside swallowing evaluation (water swallow test, cough reflex test); videofluoroscopic swallowing study (VFSS/modified barium swallow, gold standard); fiberoptic endoscopic evaluation of swallowing (FEES); screening tools (EAT-10, 3-oz water swallow test).',
    'Speech-language pathology-directed therapy: swallowing exercises (effortful swallow, Mendelsohn maneuver, Shaker exercise), texture-modified diets (IDDSI framework), postural adjustments (chin tuck), thickened liquids, oral hygiene to reduce aspiration pneumonia risk, feeding strategies (small boluses, pacing).',
    'Oral hygiene maintenance, upright eating position, supervised meals for at-risk patients, routine dysphagia screening after stroke and in dementia, dental care, address dry mouth.',
    'Aspiration pneumonia is the most feared complication and a leading cause of death in advanced dementia. Diet modification and swallowing therapy reduce aspiration events. In advanced dementia, feeding tubes do not improve outcomes or survival.',
    'Not every elderly person who coughs while eating has dysphagia, but recurrent pneumonia in an older adult should always raise suspicion. Oral hygiene is a critical but often overlooked component of aspiration prevention.',
    'Dysphagia means difficulty swallowing. In older adults, food or liquids can go down the wrong way into the lungs. Special eating techniques, thicker drinks, and exercises for swallowing muscles can help prevent choking and lung infections.',
    'Dysphagia in the elderly can be oropharyngeal (difficulty initiating swallow) or esophageal (food sticking after swallowing). Common causes include stroke, dementia, Parkinson disease, and sarcopenia of swallowing muscles. Assessment by speech-language pathology is essential.',
    'Oropharyngeal dysphagia involves impaired oral bolus preparation, delayed swallow trigger, or pharyngeal weakness. The IDDSI framework standardizes texture levels. Silent aspiration (no cough reflex) occurs in up to 40% of dysphagic elderly.',
    'Age-related changes include reduced lingual pressure, delayed laryngeal elevation, impaired UES opening, and decreased pharyngeal constriction (presbyphagia). Sarcopenic dysphagia involves loss of swallowing muscle mass/function. Neurogenic dysphagia in stroke involves disruption of the swallowing central pattern generator.',
    'VFSS and FEES provide complementary information; FEES detects pharyngeal residue and laryngeal penetration at bedside. Evidence does not support PEG in advanced dementia (no mortality benefit per Cochrane review). Expiratory muscle strength training improves swallow safety. Capsaicin and TRP channel agonists may enhance swallow reflex in stroke patients.',
  ),

  'malnutrition-elderly': gc(
    'malnutrition-elderly', 'Malnutrition in Elderly', 'Desnutricion en el adulto mayor',
    'nutritional', '5B70',
    'Affects 15-60% of hospitalized elderly, 5-10% of community-dwelling, and 35-65% of institutionalized older adults.',
    'Unintentional weight loss (>5% in 1 month or >10% in 6 months), low BMI (<22 in elderly), muscle wasting, fatigue, poor wound healing, recurrent infections, edema, dry skin, angular cheilitis, brittle nails.',
    'Nutritional screening (MNA-SF, MUST, NRS-2002); anthropometric measures (BMI, calf circumference, mid-arm circumference); laboratory markers (albumin, prealbumin, CRP to distinguish inflammation from malnutrition); dietary intake assessment; oral health evaluation; functional status.',
    'Oral nutritional supplements (ONS: 400-600 kcal/day); fortified foods; protein target 1.0-1.5 g/kg/day; treat underlying causes (depression, dysphagia, dental problems, medication effects); dietitian referral; social dining programs; enteral nutrition only when oral route inadequate and prognosis warrants.',
    'Routine nutritional screening, social dining opportunities, dental care, treat depression, medication review, adaptive eating utensils, nutritional education, community meal programs (Meals on Wheels).',
    'Malnutrition doubles hospital length of stay, triples complication rates, and significantly increases mortality. Nutritional intervention reduces complications and mortality in hospitalized elderly. Early identification through screening is key.',
    'Malnutrition is simultaneously one of the most common and most underdiagnosed conditions in geriatric medicine. A low albumin in an elderly patient may reflect inflammation rather than nutrition alone.',
    'Malnutrition in older adults means not getting enough food or nutrients. It causes weakness, slow healing, and more sickness. Eating enough protein, treating mouth problems, and getting help with meals can improve health.',
    'Malnutrition in the elderly results from reduced food intake, increased nutrient requirements, or impaired absorption. It is screened using validated tools like the MNA. Treatment involves oral nutritional supplements, dietary modification, and addressing underlying causes.',
    'GLIM criteria define malnutrition by phenotypic (weight loss, low BMI, reduced muscle mass) and etiologic (reduced intake, inflammation) criteria. Sarcopenic obesity is increasingly recognized. Refeeding syndrome risk must be assessed before nutritional repletion in severely malnourished patients.',
    'Anorexia of aging involves altered ghrelin, cholecystokinin, and leptin signaling; delayed gastric emptying; reduced taste/smell; and central appetite dysregulation. Chronic inflammation (inflammaging) drives catabolism independent of intake. Micronutrient deficiencies (B12, D, folate, zinc) are common.',
    'ESPEN guidelines recommend MNA-SF screening, ONS providing 400+ kcal with 30g+ protein daily, and resistance exercise to optimize anabolic response. Albumin is an acute-phase reactant, not a reliable nutritional marker; prealbumin tracks acute changes better. Immunonutrition (arginine, omega-3, nucleotides) improves surgical outcomes. Artificial nutrition in end-of-life does not improve survival or comfort per systematic reviews.',
  ),

  // ---- Psychosocial (1) ---------------------------------------------------

  'elder-abuse-neglect': gc(
    'elder-abuse-neglect', 'Elder Abuse and Neglect', 'Abuso y negligencia del adulto mayor',
    'psychosocial', 'QE51',
    'Affects approximately 1 in 10 older adults; estimated 1-2 million cases/year in the US; vastly underreported (only 1 in 24 cases reported).',
    'Physical abuse: unexplained bruises/fractures in various healing stages, burns, restraint marks. Neglect: poor hygiene, malnutrition, untreated medical conditions, pressure ulcers. Psychological: withdrawal, fearfulness, anxiety around caregiver. Financial: sudden changes in finances, missing belongings. Sexual abuse: genital injuries, STIs in elderly.',
    'Clinical suspicion and direct screening (questions asked privately, away from caregiver); Elder Abuse Suspicion Index (EASI); physical examination for injuries inconsistent with explanation; assess for signs of neglect; review financial and living situation; cognitive assessment; mandatory reporting laws apply in all 50 US states.',
    'Ensure immediate safety; report to Adult Protective Services (APS); document injuries with photographs; involve social work; connect with legal resources; address caregiver stress and burnout if contributing; safety planning; long-term monitoring and follow-up; treat injuries and medical neglect consequences.',
    'Screening at routine visits, caregiver support and respite services, financial safeguards (power of attorney oversight), social engagement to reduce isolation, community awareness education, advance care planning.',
    'Without intervention, abuse tends to escalate. Elder abuse increases mortality 3-fold. Neglect is the most common form. Caregiver burden and substance use are significant risk factors. Interdisciplinary approach (medical, social work, legal) is essential.',
    'Healthcare providers are often the only professionals who regularly see vulnerable older adults. Screening should be routine, and reporting is legally mandated. Abuse is never the victim\'s fault.',
    'Elder abuse means hurting, neglecting, or taking advantage of an older person. It includes physical harm, not providing needed care, emotional cruelty, and stealing money. Doctors must report it, and help is available.',
    'Elder abuse encompasses physical, emotional, sexual, and financial abuse, as well as neglect and abandonment. Healthcare providers are mandated reporters. Risk factors include cognitive impairment, social isolation, caregiver burden, and substance abuse.',
    'Screening tools like EASI should be administered privately. Injuries inconsistent with stated mechanisms, delay in seeking care, and caregiver controlling behavior are red flags. Documentation must be detailed. Adult Protective Services investigates and provides intervention.',
    'Risk factors follow an ecological model: victim factors (dementia, functional dependence), perpetrator factors (substance abuse, mental illness, financial dependence on victim), relationship factors (shared living, caregiver stress), and societal factors (ageism, institutional understaffing). Traumatic brain injury from repeated abuse accelerates cognitive decline.',
    'AMA and AGS guidelines recommend routine screening. Forensic markers include patterned injuries, injuries in various healing stages, and subconjunctival hemorrhages without trauma mechanism. Financial exploitation is the fastest-growing form. Interdisciplinary elder abuse teams (I-TEAMS) combining medicine, social work, and law enforcement improve outcomes. Capacity assessment is critical for self-determination vs. protective intervention.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single condition by ID. */
export function getGeriatricCondition(id: string): GeriatricConditionEntry | undefined {
  return GERIATRIC_CONDITIONS[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchGeriatricConditions(query: string): GeriatricConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(GERIATRIC_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.presentation.toLowerCase().includes(q) ||
    c.treatment.toLowerCase().includes(q),
  );
}

/** Filter conditions by category. */
export function getGeriatricByCategory(category: GeriatricCategory): GeriatricConditionEntry[] {
  return Object.values(GERIATRIC_CONDITIONS).filter(c => c.category === category);
}

/** Get the complexity level description for a condition at a specific level. */
export function getGeriatricAtLevel(
  id: string,
  level: 1 | 2 | 3 | 4 | 5,
): GeriatricComplexityLevel | undefined {
  const condition = GERIATRIC_CONDITIONS[id];
  if (!condition) return undefined;
  return condition.complexityLevels.find(l => l.level === level);
}

/** Return the total number of geriatric conditions in the database. */
export function getGeriatricConditionCount(): number {
  return Object.keys(GERIATRIC_CONDITIONS).length;
}
