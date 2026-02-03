/**
 * Occupational Medicine Database
 *
 * Comprehensive database of occupational medicine conditions, regulatory
 * frameworks, and evaluation protocols for medical education, covering
 * respiratory diseases, musculoskeletal disorders, toxic exposures,
 * infectious hazards, environmental injuries, psychological conditions,
 * regulatory standards, and fitness/disability evaluations.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type OccupationalCategory =
  | 'respiratory'
  | 'musculoskeletal'
  | 'toxic-exposure'
  | 'infectious-occupational'
  | 'environmental'
  | 'regulatory'
  | 'evaluation'
  | 'psychological';

export interface OccupationalMedicineEntry {
  id: string;
  name: string;
  category: OccupationalCategory;
  description: string;
  exposure: string;
  clinicalFeatures: string[];
  diagnosis: string[];
  management: string[];
  prevention: string[];
  legalAspects: string[];
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const OCCUPATIONAL_MEDICINE_ENTRIES: Record<string, OccupationalMedicineEntry> = {
  // =========================================================================
  // RESPIRATORY
  // =========================================================================
  asbestosis: {
    id: 'asbestosis',
    name: 'Asbestosis',
    category: 'respiratory',
    description: 'Diffuse interstitial pulmonary fibrosis caused by inhalation of asbestos fibers, typically after prolonged exposure with a latency of 15-20 years.',
    exposure: 'Mining, shipbuilding, insulation work, construction, brake lining manufacture. Chrysotile (white), amosite (brown), and crocidolite (blue) fibers. Crocidolite is most carcinogenic.',
    clinicalFeatures: [
      'Progressive exertional dyspnea and dry cough',
      'Bibasilar end-inspiratory crackles (velcro rales)',
      'Digital clubbing in advanced disease',
      'Restrictive pattern on PFTs with decreased DLCO',
      'Bilateral lower-lobe reticular opacities and pleural plaques on imaging',
    ],
    diagnosis: [
      'History of significant asbestos exposure with appropriate latency (15-20 years)',
      'HRCT showing bilateral lower-lobe fibrosis, honeycombing, and pleural plaques',
      'Restrictive PFTs with reduced DLCO',
      'BAL showing asbestos bodies (ferruginous bodies) is supportive but not required',
      'Biopsy rarely needed if exposure history and imaging are consistent',
    ],
    management: [
      'No curative treatment; supportive care only',
      'Smoking cessation (synergistic cancer risk with asbestos)',
      'Supplemental oxygen for hypoxemia',
      'Pulmonary rehabilitation',
      'Lung transplantation in select end-stage cases',
      'Surveillance for mesothelioma and lung cancer',
    ],
    prevention: [
      'Elimination/substitution of asbestos-containing materials',
      'Engineering controls: encapsulation, ventilation, wet methods',
      'Respiratory protection (HEPA-filtered respirators)',
      'OSHA PEL: 0.1 fibers/cc (8-hour TWA)',
      'Medical surveillance per OSHA 1910.1001/1926.1101',
      'Asbestos abatement by licensed professionals only',
    ],
    legalAspects: [
      'Reportable occupational disease in most jurisdictions',
      'Workers compensation benefits for lost wages and medical care',
      'Third-party litigation against asbestos manufacturers common',
      'Asbestos trust funds established by bankrupt manufacturers',
      'OSHA standards mandate exposure monitoring and medical surveillance',
    ],
  },

  mesothelioma: {
    id: 'mesothelioma',
    name: 'Mesothelioma',
    category: 'respiratory',
    description: 'Aggressive malignant neoplasm of mesothelial surfaces, most commonly pleural, strongly associated with asbestos exposure. Latency period typically 20-50 years.',
    exposure: 'Asbestos (all fiber types; crocidolite highest risk). Even brief or indirect exposure (paraoccupational: family members of exposed workers) can be sufficient. Erionite (zeolite mineral) is another cause.',
    clinicalFeatures: [
      'Insidious onset of chest pain and dyspnea',
      'Unilateral pleural effusion (often bloody)',
      'Weight loss, fatigue, night sweats',
      'Pleural thickening encasing the lung on imaging',
      'Peritoneal mesothelioma presents with ascites and abdominal pain',
    ],
    diagnosis: [
      'CT showing nodular pleural thickening with or without effusion',
      'Thoracoscopic or CT-guided pleural biopsy for histologic confirmation',
      'Immunohistochemistry: calretinin+, WT-1+, CK5/6+ (epithelioid subtype)',
      'Three histologic subtypes: epithelioid (best prognosis), sarcomatoid (worst), biphasic',
      'Staging via IMIG TNM system',
    ],
    management: [
      'Multimodal therapy for resectable disease: surgery (EPP or P/D) + chemotherapy + radiation',
      'Pemetrexed/cisplatin first-line chemotherapy',
      'Immune checkpoint inhibitors (nivolumab + ipilimumab) for unresectable disease',
      'Palliative pleurodesis for recurrent effusions',
      'Median survival 12-18 months; 5-year survival < 10%',
    ],
    prevention: [
      'Strict asbestos exposure control and elimination',
      'Same prevention measures as asbestosis',
      'No proven role for screening in asbestos-exposed populations',
      'Smoking does NOT increase mesothelioma risk (unlike lung cancer with asbestos)',
    ],
    legalAspects: [
      'Strong medico-legal association with asbestos exposure',
      'Billions in litigation settlements and trust fund payouts',
      'Latency period creates statute-of-limitations challenges (discovery rule applied)',
      'Workers compensation and third-party lawsuits often pursued simultaneously',
      'Expert causation testimony typically required',
    ],
  },

  silicosis: {
    id: 'silicosis',
    name: 'Silicosis',
    category: 'respiratory',
    description: 'Fibrotic lung disease caused by inhalation of crystalline silica (SiO2) dust. Three forms: chronic (10-30 years), accelerated (5-10 years), and acute (weeks-months of massive exposure).',
    exposure: 'Mining, sandblasting, stone cutting, tunneling, foundry work, ceramic/glass manufacturing, engineered stone countertop fabrication (emerging epidemic). Quartz is the most common form of crystalline silica.',
    clinicalFeatures: [
      'Chronic: progressive dyspnea, cough; upper-lobe predominant nodules',
      'Accelerated: similar to chronic but faster progression',
      'Acute silicoproteinosis: rapidly progressive dyspnea, ground-glass opacities (resembles PAP)',
      'Eggshell calcification of hilar lymph nodes is pathognomonic',
      'Increased risk of TB (silico-tuberculosis), lung cancer, and autoimmune disease',
    ],
    diagnosis: [
      'Occupational history of silica exposure plus compatible imaging',
      'CXR/CT: small rounded opacities (upper lobes), progressive massive fibrosis (PMF)',
      'Eggshell calcification of hilar nodes',
      'PFTs: mixed or restrictive pattern',
      'Biopsy showing silicotic nodules (whorled collagen with birefringent particles) if needed',
    ],
    management: [
      'No curative treatment; removal from further exposure',
      'TB screening (annual PPD/IGRA) due to markedly increased susceptibility',
      'Whole-lung lavage for acute silicoproteinosis',
      'Pulmonary rehabilitation and supplemental oxygen',
      'Lung transplantation for end-stage disease',
    ],
    prevention: [
      'Engineering controls: wet drilling, ventilation, enclosed processes',
      'Respiratory protection with appropriate APF',
      'OSHA PEL: 50 mcg/m3 respirable crystalline silica (8-hour TWA)',
      'OSHA silica standard (29 CFR 1926.1153) mandates exposure assessment, medical surveillance',
      'Substitution: use non-silica abrasives for blasting',
    ],
    legalAspects: [
      'Reportable occupational disease',
      'Workers compensation available in all US states',
      'OSHA silica rule (2016) significantly lowered PELs',
      'Emerging litigation related to engineered stone countertops',
      'Employers required to provide medical surveillance for exposed workers',
    ],
  },

  coal_workers_pneumoconiosis: {
    id: 'coal_workers_pneumoconiosis',
    name: "Coal Workers' Pneumoconiosis",
    category: 'respiratory',
    description: 'Lung disease caused by inhalation of coal mine dust, ranging from simple CWP (coal macules/nodules) to complicated CWP (progressive massive fibrosis).',
    exposure: 'Underground coal mining (especially cutting, drilling, roof bolting). Risk correlates with cumulative dust exposure and coal rank (higher rank = higher risk). Mixed dust includes silica.',
    clinicalFeatures: [
      'Simple CWP: often asymptomatic; small rounded opacities on CXR',
      'Complicated CWP/PMF: progressive dyspnea, productive cough, cor pulmonale',
      'Caplan syndrome: CWP + rheumatoid arthritis with large necrobiotic lung nodules',
      'Coal macules are the earliest pathologic finding',
      'Black sputum (melanoptysis) occasionally seen',
    ],
    diagnosis: [
      'Occupational history of coal dust exposure plus compatible CXR',
      'ILO classification of CXR for pneumoconiosis profusion and type',
      'Simple CWP: small opacities (p, q, r); PMF: large opacities > 1 cm',
      'PFTs: normal in simple CWP; mixed/restrictive in PMF',
      'B-reader certification required for medicolegal CXR interpretation',
    ],
    management: [
      'Removal from further coal dust exposure',
      'Supportive care: bronchodilators, supplemental oxygen, pulmonary rehab',
      'Monitoring for progression to PMF',
      'Lung transplantation for end-stage PMF',
      'Treatment of concurrent COPD and cor pulmonale',
    ],
    prevention: [
      'Dust suppression in mines: water sprays, ventilation, enclosed cabs',
      'MSHA respirable dust standard: 1.5 mg/m3 (mine operator) with CPDM monitoring',
      'NIOSH recommended 1.0 mg/m3',
      'Periodic medical surveillance with CXR (NIOSH Coal Workers X-ray Surveillance Program)',
      'Respiratory protection when engineering controls are insufficient',
    ],
    legalAspects: [
      'Federal Black Lung Benefits Act provides compensation to disabled miners',
      'Black Lung Disability Trust Fund (excise tax funded)',
      'MSHA enforces mine safety standards (separate from OSHA)',
      'Presumption of disability for miners with 15+ years of exposure and total disability',
      'Survivors benefits available for dependents',
    ],
  },

  occupational_asthma: {
    id: 'occupational_asthma',
    name: 'Occupational Asthma',
    category: 'respiratory',
    description: 'New-onset asthma caused by workplace exposures to sensitizers (immunologic) or irritants (non-immunologic/RADS). Most common occupational lung disease in industrialized countries.',
    exposure: 'Sensitizers: isocyanates (most common high-MW cause), flour/grain dust (bakers), laboratory animals, wood dust (western red cedar), latex. Irritants: chlorine, ammonia, acids (RADS/Brooks syndrome from single high-level exposure).',
    clinicalFeatures: [
      'Wheezing, dyspnea, cough, chest tightness temporally related to work',
      'Symptoms improve on weekends/vacations, worsen on return to work',
      'Latency period for sensitizer-induced OA (weeks to years of exposure before symptoms)',
      'RADS: acute onset within 24 hours of single high-level irritant exposure',
      'May persist after removal from exposure (especially if prolonged exposure before diagnosis)',
    ],
    diagnosis: [
      'Serial peak flow monitoring (work vs. away from work) showing > 20% variability',
      'Specific IgE or skin prick testing to suspected occupational allergens',
      'Specific inhalation challenge (gold standard, performed in specialized centers)',
      'Methacholine challenge showing work-related change in PC20',
      'Distinguish from work-exacerbated asthma (pre-existing asthma worsened by work)',
    ],
    management: [
      'Complete removal from causal exposure (most important intervention)',
      'Standard asthma pharmacotherapy (ICS, SABA, LABA)',
      'Early removal from exposure improves prognosis',
      'Continued exposure after diagnosis leads to worse outcomes',
      'Immunotherapy not generally effective for occupational allergens',
    ],
    prevention: [
      'Substitution of sensitizing agents where possible',
      'Engineering controls: ventilation, enclosed processes',
      'Medical surveillance: spirometry, symptom questionnaires for exposed workers',
      'Pre-placement evaluation (not to exclude, but to establish baseline)',
      'Worker education on early symptom recognition',
    ],
    legalAspects: [
      'Most common occupational lung disease for compensation claims',
      'Workers compensation covers medical care and wage replacement',
      'Employer must accommodate or reassign worker away from exposure',
      'OSHA general duty clause applies when no specific PEL exists',
      'Failure to diagnose may constitute medical negligence',
    ],
  },

  farmers_lung: {
    id: 'farmers_lung',
    name: "Farmer's Lung",
    category: 'respiratory',
    description: 'Hypersensitivity pneumonitis caused by inhalation of thermophilic actinomycetes (Saccharopolyspora rectivirgula) from moldy hay, grain, or silage. Classic example of occupational HP.',
    exposure: 'Farming: exposure to moldy hay, grain, straw, or silage. Thermophilic actinomycetes thrive in decomposing organic material at 40-60 degrees C. Highest risk in winter months when stored hay is disturbed.',
    clinicalFeatures: [
      'Acute: fever, chills, dyspnea, cough 4-8 hours after exposure (flu-like)',
      'Subacute: progressive cough, dyspnea, malaise over weeks-months',
      'Chronic: insidious fibrosis with irreversible restrictive disease',
      'Bibasilar crackles; no wheezing (unlike asthma)',
      'CXR: diffuse ground-glass/nodular opacities; chronic form shows upper-lobe fibrosis',
    ],
    diagnosis: [
      'Compatible exposure history plus clinical syndrome',
      'Serum precipitins (IgG antibodies) to thermophilic actinomycetes',
      'HRCT: ground-glass opacities, centrilobular nodules, air trapping (acute/subacute)',
      'BAL lymphocytosis (> 50% lymphocytes)',
      'Biopsy (rarely needed): non-caseating granulomas, giant cells, interstitial inflammation',
    ],
    management: [
      'Antigen avoidance is paramount',
      'Systemic corticosteroids for acute/subacute episodes',
      'Immunosuppressants (mycophenolate, azathioprine) for chronic progressive disease',
      'Supplemental oxygen and pulmonary rehab for chronic fibrotic HP',
      'Lung transplantation for end-stage disease',
    ],
    prevention: [
      'Proper hay drying and storage to prevent mold growth',
      'Adequate barn ventilation',
      'Use of HEPA-filtered or powered air-purifying respirators',
      'Mechanical handling of hay to reduce personal exposure',
      'Crop preservatives to inhibit microbial growth',
    ],
    legalAspects: [
      'Workers compensation for agricultural workers (coverage varies by state)',
      'Agricultural exemptions from OSHA in many jurisdictions',
      'May qualify for disability if chronic fibrotic stage develops',
      'Documentation of exposure history critical for claims',
      'Return-to-work possible with adequate exposure controls',
    ],
  },

  berylliosis: {
    id: 'berylliosis',
    name: 'Berylliosis (Chronic Beryllium Disease)',
    category: 'respiratory',
    description: 'Granulomatous lung disease caused by cell-mediated immune response to inhaled beryllium. Clinically and pathologically mimics sarcoidosis.',
    exposure: 'Aerospace, nuclear weapons production, electronics manufacturing, dental alloy work, ceramics. Beryllium-copper alloys widely used. Even low-level exposure can cause disease in genetically susceptible individuals (HLA-DPB1 Glu69+).',
    clinicalFeatures: [
      'Insidious onset of dyspnea, cough, fatigue, weight loss',
      'Non-caseating granulomas indistinguishable from sarcoidosis on biopsy',
      'Hilar lymphadenopathy on imaging',
      'Skin involvement (granulomatous dermatitis) possible',
      'Genetic susceptibility: HLA-DPB1 Glu69 variant (present in ~30% of population)',
    ],
    diagnosis: [
      'Beryllium lymphocyte proliferation test (BeLPT): blood and/or BAL',
      'Abnormal BeLPT with compatible clinical disease confirms CBD',
      'Beryllium sensitization = abnormal BeLPT without clinical disease',
      'Biopsy: non-caseating granulomas (indistinguishable from sarcoidosis)',
      'Must differentiate from sarcoidosis by exposure history and BeLPT',
    ],
    management: [
      'Removal from beryllium exposure',
      'Systemic corticosteroids for symptomatic/progressive disease',
      'Methotrexate or other immunosuppressants as steroid-sparing agents',
      'Pulmonary rehabilitation',
      'Regular monitoring of PFTs and imaging',
    ],
    prevention: [
      'OSHA beryllium standard (29 CFR 1910.1024): PEL 0.2 mcg/m3 (8-hr TWA)',
      'Engineering controls: ventilation, enclosed processes, wet methods',
      'Medical surveillance with BeLPT for exposed workers',
      'Genetic testing for HLA-DPB1 is NOT recommended for employment decisions',
      'Workplace hygiene: prevent take-home contamination on clothing',
    ],
    legalAspects: [
      'DOE Chronic Beryllium Disease Prevention Program for federal facilities',
      'Energy Employees Occupational Illness Compensation Program Act (EEOICPA)',
      'Workers compensation in private sector',
      'OSHA beryllium standard (2017) significantly lowered PEL from 2.0 to 0.2 mcg/m3',
      'Beryllium sensitization (without disease) may trigger medical removal protection',
    ],
  },

  // =========================================================================
  // TOXIC EXPOSURE
  // =========================================================================
  lead_poisoning: {
    id: 'lead_poisoning',
    name: 'Lead Poisoning (Occupational)',
    category: 'toxic-exposure',
    description: 'Systemic toxicity from occupational lead exposure affecting hematologic, neurologic, renal, and reproductive systems. Most common cause: inorganic lead inhalation or ingestion.',
    exposure: 'Battery manufacturing/recycling, smelting, radiator repair, construction/demolition (lead paint), firing ranges, stained glass work. Inorganic lead (most common) vs. organic lead (tetraethyl lead in leaded gasoline, now rare).',
    clinicalFeatures: [
      'Abdominal colic, constipation, nausea ("lead colic")',
      'Peripheral neuropathy: wrist drop (radial nerve), foot drop',
      'Encephalopathy at high levels (rare in adults, BLL > 100 mcg/dL)',
      'Microcytic anemia with basophilic stippling on blood smear',
      'Burton lines (blue-black gingival lines) at the gum-tooth junction',
      'Nephropathy and gout (saturnine gout)',
    ],
    diagnosis: [
      'Venous blood lead level (BLL) is the primary test',
      'OSHA action level: BLL >= 50 mcg/dL triggers medical removal (general industry)',
      'Free erythrocyte protoporphyrin (FEP) or zinc protoporphyrin (ZPP) elevated',
      'Basophilic stippling on peripheral smear',
      'Lead inhibits delta-aminolevulinic acid dehydratase (ALAD) and ferrochelatase',
      'CBC, BUN/creatinine, uric acid for systemic assessment',
    ],
    management: [
      'Remove from lead exposure (medical removal per OSHA standard)',
      'Chelation therapy for BLL > 50-70 mcg/dL with symptoms (DMSA or CaNa2-EDTA)',
      'BAL (dimercaprol) + CaNa2-EDTA for encephalopathy',
      'Monitor BLL serially until < 40 mcg/dL for return to work consideration',
      'Iron supplementation if deficient (iron deficiency increases lead absorption)',
    ],
    prevention: [
      'OSHA lead standards: 29 CFR 1910.1025 (general industry), 1926.62 (construction)',
      'PEL: 50 mcg/m3 (8-hr TWA); Action level: 30 mcg/m3',
      'Biological monitoring: periodic BLL testing per OSHA schedule',
      'Engineering controls: ventilation, enclosed processes, wet methods',
      'Hygiene facilities: separate eating areas, hand washing, clean clothing',
      'Medical removal protection at BLL >= 50 mcg/dL (general industry)',
    ],
    legalAspects: [
      'OSHA lead standard includes medical removal protection (MRP) with rate retention',
      'Employer must maintain worker wages/benefits during medical removal',
      'Workers compensation for lead-related illness',
      'Employer cannot discriminate based on BLL or medical removal',
      'Periodic medical surveillance required for workers above action level',
    ],
  },

  mercury_poisoning: {
    id: 'mercury_poisoning',
    name: 'Mercury Poisoning (Occupational)',
    category: 'toxic-exposure',
    description: 'Toxicity from occupational exposure to elemental, inorganic, or organic mercury compounds. Target organs depend on mercury form: CNS (organic/elemental vapor), kidneys (inorganic salts).',
    exposure: 'Elemental mercury: thermometer/barometer manufacturing, dental amalgam, chlor-alkali plants. Inorganic mercury: laboratory reagents, batteries. Organic (methylmercury): primarily dietary/environmental, not occupational. "Mad hatter disease" from mercuric nitrate in felt hat making.',
    clinicalFeatures: [
      'Elemental vapor: tremor ("hatter\'s shakes"), gingivitis, erethism (irritability, insomnia, shyness)',
      'Acrodynia (pink disease): painful pink hands/feet (historical, children)',
      'Chronic: memory impairment, personality changes, tremor, peripheral neuropathy',
      'Inorganic salts: caustic GI injury, acute renal tubular necrosis',
      'Organic: paresthesias, visual field constriction, ataxia, hearing loss (Minamata disease)',
    ],
    diagnosis: [
      'Urine mercury level (spot or 24-hour): best for elemental/inorganic exposure',
      'Whole blood mercury: best for organic mercury exposure',
      'Normal urine mercury: < 20 mcg/L; BEI (ACGIH): 35 mcg/g creatinine',
      'Neuropsychological testing for cognitive and behavioral effects',
      'Nerve conduction studies for peripheral neuropathy',
    ],
    management: [
      'Remove from exposure immediately',
      'Chelation: DMSA (succimer) or unithiol (DMPS) for symptomatic inorganic/elemental',
      'BAL (dimercaprol) for severe acute poisoning',
      'Supportive care for GI and renal injury (inorganic salts)',
      'Neurologic recovery may be incomplete, especially for organic mercury',
    ],
    prevention: [
      'OSHA PEL: 0.1 mg/m3 ceiling (elemental mercury vapor)',
      'ACGIH TLV: 0.025 mg/m3 TWA (elemental mercury)',
      'Enclosed processes, local exhaust ventilation',
      'Mercury spill kits and proper cleanup procedures',
      'Substitution with non-mercury alternatives where possible',
      'Biological monitoring (urine mercury) for exposed workers',
    ],
    legalAspects: [
      'Reportable occupational disease',
      'Workers compensation for mercury-related illness',
      'EPA regulates mercury under Clean Air Act and RCRA',
      'Minamata Convention on Mercury (2013): international treaty',
      'Environmental cleanup liability under CERCLA/Superfund',
    ],
  },

  // =========================================================================
  // MUSCULOSKELETAL
  // =========================================================================
  carpal_tunnel_syndrome: {
    id: 'carpal_tunnel_syndrome',
    name: 'Carpal Tunnel Syndrome',
    category: 'musculoskeletal',
    description: 'Median nerve compression at the wrist due to repetitive hand motions, vibration, or forceful gripping. Most common occupational peripheral neuropathy.',
    exposure: 'Repetitive wrist flexion/extension, forceful gripping, vibrating tools, keyboard/mouse use, assembly line work. Also associated with pregnancy, hypothyroidism, diabetes, rheumatoid arthritis (non-occupational causes must be considered).',
    clinicalFeatures: [
      'Numbness/tingling in thumb, index, middle, and radial half of ring finger',
      'Pain worse at night; patients shake hand for relief (flick sign)',
      'Thenar atrophy and weakness of thumb opposition/abduction in advanced cases',
      'Positive Tinel sign (tapping over carpal tunnel) and Phalen maneuver (wrist flexion)',
      'Two-point discrimination loss and grip strength reduction',
    ],
    diagnosis: [
      'Clinical history and physical examination often sufficient',
      'Nerve conduction studies/EMG: gold standard for confirming and grading severity',
      'Prolonged median nerve distal sensory and motor latencies',
      'Ultrasound: median nerve cross-sectional area > 10 mm2 at carpal tunnel',
      'Must exclude cervical radiculopathy (C6-C7) and double-crush phenomenon',
    ],
    management: [
      'Conservative: wrist splinting in neutral position (especially at night)',
      'Activity modification and ergonomic workplace adjustments',
      'Corticosteroid injection into carpal tunnel (short-term relief)',
      'Carpal tunnel release surgery for persistent or severe symptoms',
      'Physical/occupational therapy for post-surgical rehabilitation',
    ],
    prevention: [
      'Ergonomic workstation design: neutral wrist position, proper keyboard/mouse placement',
      'Job rotation to reduce repetitive strain',
      'Tool design: vibration dampening, proper handle sizing',
      'Stretch breaks and micropauses during repetitive tasks',
      'Pre-placement assessment to establish baseline nerve function',
    ],
    legalAspects: [
      'Most frequently filed occupational musculoskeletal disorder claim',
      'Burden of proof: must demonstrate work relatedness vs. personal risk factors',
      'AMA Guides to the Evaluation of Permanent Impairment used for disability rating',
      'Compensable under workers compensation in most jurisdictions',
      'Employer must provide reasonable accommodations per ADA if substantial limitation',
    ],
  },

  rotator_cuff_tendinopathy: {
    id: 'rotator_cuff_tendinopathy',
    name: 'Rotator Cuff Tendinopathy',
    category: 'musculoskeletal',
    description: 'Degenerative and/or inflammatory condition of rotator cuff tendons, particularly supraspinatus, from repetitive overhead work and forceful shoulder movements.',
    exposure: 'Overhead work: painting, welding, construction, mechanics, assembly line. Repetitive shoulder abduction/flexion above 60 degrees, forceful pushing/pulling, vibration. Age is a strong cofactor.',
    clinicalFeatures: [
      'Gradual onset of shoulder pain, worse with overhead activities',
      'Night pain interfering with sleep (lying on affected side)',
      'Painful arc: 60-120 degrees of abduction',
      'Positive impingement signs (Neer, Hawkins-Kennedy)',
      'Weakness of external rotation (infraspinatus) or abduction (supraspinatus) suggests tear',
    ],
    diagnosis: [
      'Clinical examination: impingement signs, strength testing, range of motion',
      'MRI: gold standard for soft tissue evaluation, tear detection, and surgical planning',
      'Ultrasound: dynamic assessment, comparable sensitivity for full-thickness tears',
      'Lidocaine injection test: improved strength after subacromial injection suggests impingement without tear',
      'X-ray: may show acromial morphology, calcification, superior migration of humeral head',
    ],
    management: [
      'Conservative first: activity modification, physical therapy (strengthening and stretching)',
      'NSAIDs and ice for pain control',
      'Subacromial corticosteroid injection (limit to 3 per year)',
      'Surgical repair for full-thickness tears or failure of 3-6 months conservative treatment',
      'Post-operative rehabilitation: 4-6 months for return to full duty',
    ],
    prevention: [
      'Ergonomic redesign to minimize overhead work',
      'Mechanical assists for lifting above shoulder height',
      'Job rotation and task variety',
      'Shoulder conditioning programs for at-risk workers',
      'Early reporting and treatment of shoulder symptoms',
    ],
    legalAspects: [
      'Workers compensation: must demonstrate occupational causation vs. degenerative aging',
      'Apportionment may reduce compensation if pre-existing degeneration is present',
      'Functional capacity evaluation (FCE) for return-to-work determination',
      'AMA Guides used for permanent impairment rating',
      'May require permanent work restrictions (no overhead lifting)',
    ],
  },

  low_back_pain_occupational: {
    id: 'low_back_pain_occupational',
    name: 'Low Back Pain (Occupational)',
    category: 'musculoskeletal',
    description: 'Work-related lumbar spine pain from heavy lifting, repetitive bending, prolonged sitting/standing, whole-body vibration, or acute injury. Leading cause of disability and workers compensation claims.',
    exposure: 'Heavy manual labor, repetitive lifting/bending/twisting, whole-body vibration (trucking, heavy equipment), prolonged static postures, patient handling in healthcare. NIOSH lifting equation defines recommended weight limits.',
    clinicalFeatures: [
      'Localized low back pain with or without radiculopathy',
      'Pain worse with activity, improved with rest (mechanical pattern)',
      'Red flags: progressive neurologic deficit, cauda equina syndrome, fracture, infection, malignancy',
      'Positive straight leg raise suggests disc herniation with radiculopathy',
      'Most episodes are nonspecific and self-limiting (90% resolve within 6 weeks)',
    ],
    diagnosis: [
      'Clinical evaluation: history, physical examination, red flag screening',
      'Imaging NOT recommended in first 4-6 weeks without red flags (ACP/APS guidelines)',
      'MRI for persistent symptoms > 6 weeks, neurologic deficits, or red flags',
      'EMG/NCS for suspected radiculopathy when clinical exam is equivocal',
      'Beware incidental imaging findings (disc bulges common in asymptomatic individuals)',
    ],
    management: [
      'Activity modification (avoid strict bed rest; early return to modified activity)',
      'NSAIDs and acetaminophen for acute pain',
      'Physical therapy: core stabilization, McKenzie method, functional restoration',
      'Cognitive behavioral therapy for chronic pain and fear-avoidance behavior',
      'Surgery only for specific indications (cauda equina, progressive deficit, intractable radiculopathy)',
      'Opioids: avoid for chronic non-cancer pain; short-course only if severe acute pain',
    ],
    prevention: [
      'NIOSH lifting equation for job design and risk assessment',
      'Mechanical lifting aids and patient handling equipment',
      'Back belts: evidence does NOT support routine use for prevention',
      'Pre-employment functional capacity testing (establishes baseline)',
      'Worker education on safe lifting techniques (limited evidence for effectiveness alone)',
      'Ergonomic redesign of workstations',
    ],
    legalAspects: [
      'Most costly occupational condition for workers compensation',
      'Causation determination can be challenging (degenerative vs. occupational)',
      'Independent medical examination (IME) commonly requested',
      'Maximum medical improvement (MMI) determination triggers impairment rating',
      'AMA Guides DRE method or ROM method for lumbar impairment rating',
      'Return-to-work programs reduce disability duration and costs',
    ],
  },

  vibration_white_finger: {
    id: 'vibration_white_finger',
    name: 'Vibration White Finger (HAVS)',
    category: 'musculoskeletal',
    description: 'Hand-arm vibration syndrome characterized by vascular (white finger), sensorineural, and musculoskeletal components from prolonged use of vibrating hand tools.',
    exposure: 'Pneumatic drills, chain saws, grinders, sanders, rivet guns, jackhammers. Risk increases with vibration magnitude, duration, grip force, and cold exposure. Latency typically 1-5 years.',
    clinicalFeatures: [
      'Vascular: episodic finger blanching (white) triggered by cold, then cyanosis (blue), then hyperemia (red)',
      'Sensorineural: numbness, tingling, reduced fine touch and temperature sensation',
      'Musculoskeletal: reduced grip strength, hand/forearm pain, joint stiffness',
      'Typically affects index and middle fingers first; thumbs usually spared',
      'Stockholm Workshop Scale grades vascular and sensorineural components separately',
    ],
    diagnosis: [
      'Clinical history of vibrating tool exposure plus characteristic symptoms',
      'Cold provocation test: digital plethysmography before and after cold challenge',
      'Quantitative sensory testing (vibrotactile thresholds, thermal thresholds)',
      'Grip and pinch strength dynamometry',
      'Allen test to assess digital artery patency',
      'Differential: primary Raynaud, thoracic outlet syndrome, hypothyroidism',
    ],
    management: [
      'Reduce or eliminate vibration exposure',
      'Keep hands warm; avoid cold exposure',
      'Smoking cessation (vasoconstriction worsens symptoms)',
      'Calcium channel blockers (nifedipine) for severe vascular symptoms',
      'No specific treatment reverses sensorineural damage',
    ],
    prevention: [
      'Anti-vibration tools and gloves (limited effectiveness)',
      'EU Physical Agents Directive: EAV 2.5 m/s2, ELV 5.0 m/s2 (A(8))',
      'Limit daily vibration exposure duration',
      'Job rotation to reduce cumulative exposure',
      'Health surveillance for exposed workers: symptom questionnaires, staged assessment',
    ],
    legalAspects: [
      'Prescribed industrial disease in UK (PD A11)',
      'Workers compensation in most jurisdictions',
      'Industrial Injuries Disablement Benefit (UK) based on Stockholm scale',
      'Employer duty to assess and reduce vibration risk',
      'Disability rating based on vascular and sensorineural components',
    ],
  },

  // =========================================================================
  // INFECTIOUS-OCCUPATIONAL
  // =========================================================================
  needlestick_injury: {
    id: 'needlestick_injury',
    name: 'Needlestick Injury Protocol',
    category: 'infectious-occupational',
    description: 'Standardized response to percutaneous exposure to blood or body fluids in healthcare settings, addressing risk of HIV, HBV, and HCV transmission.',
    exposure: 'Hollow-bore needles (highest risk), solid needles, scalpels, broken glass. Healthcare workers: nurses, surgeons, phlebotomists, lab technicians. Estimated 385,000 sharps injuries annually in US hospitals.',
    clinicalFeatures: [
      'HIV transmission risk: 0.3% percutaneous, 0.09% mucous membrane',
      'HBV transmission risk: up to 30% (if source HBeAg+) in unvaccinated',
      'HCV transmission risk: approximately 1.8% percutaneous',
      'Deep injury, hollow-bore needle, visible blood on device, and source with high viral load increase risk',
      'Most seroconversions occur within 6 months',
    ],
    diagnosis: [
      'Baseline testing of exposed worker: HIV, HBV (anti-HBs if vaccinated), HCV',
      'Source patient testing: HIV (rapid test preferred), HBsAg, anti-HCV',
      'Follow-up testing at 6 weeks, 12 weeks, and 6 months post-exposure',
      'HIV RNA or 4th-gen Ag/Ab test for early detection',
      'HCV RNA at 4-6 weeks (antibody may not appear for months)',
    ],
    management: [
      'Immediate wound care: wash with soap and water (do NOT squeeze or milk the wound)',
      'HIV PEP: start within 72 hours (preferably within 2 hours); 28-day course',
      'Preferred HIV PEP: tenofovir/emtricitabine + raltegravir (or dolutegravir)',
      'HBV: HBIG + vaccine series if unvaccinated/non-responder; booster if anti-HBs < 10',
      'HCV: no PEP available; monitor for seroconversion; early treatment with DAAs if infected',
      'Document exposure details per OSHA bloodborne pathogen standard',
    ],
    prevention: [
      'Standard precautions for all patient contact',
      'Safety-engineered sharps devices (needleless systems, retractable needles)',
      'Sharps disposal containers at point of use',
      'HBV vaccination for all healthcare workers (OSHA mandated, employer-provided)',
      'OSHA Bloodborne Pathogen Standard (29 CFR 1910.1030)',
      'Never recap needles using two-handed technique',
    ],
    legalAspects: [
      'OSHA Bloodborne Pathogen Standard mandates exposure control plan',
      'Needlestick Safety and Prevention Act (2000) requires safety-engineered devices',
      'Employer must provide free HBV vaccination and post-exposure evaluation',
      'Exposure incident must be documented and reported',
      'Workers compensation covers post-exposure treatment and seroconversion',
      'Source patient testing may require consent (varies by jurisdiction)',
    ],
  },

  // =========================================================================
  // ENVIRONMENTAL
  // =========================================================================
  radiation_exposure: {
    id: 'radiation_exposure',
    name: 'Radiation Exposure Management',
    category: 'environmental',
    description: 'Occupational exposure to ionizing radiation in medical, nuclear, and industrial settings. Effects are stochastic (cancer, genetic) at low doses and deterministic (tissue injury) at high doses.',
    exposure: 'Healthcare: diagnostic radiology, interventional procedures, radiation therapy, nuclear medicine. Industrial: nuclear power, radiography, well logging. Emergency: nuclear accidents, terrorism. ALARA principle governs all occupational exposure.',
    clinicalFeatures: [
      'Acute radiation syndrome (ARS): > 1 Gy whole body; prodromal N/V, hematopoietic, GI, neurovascular phases',
      'Hematopoietic syndrome: 1-6 Gy; lymphopenia, pancytopenia, infection, hemorrhage',
      'GI syndrome: 6-10 Gy; mucosal denudation, sepsis',
      'Stochastic effects: increased lifetime cancer risk (no threshold assumed, linear model)',
      'Deterministic: skin erythema (> 2 Gy), cataract (> 0.5 Gy cumulative), sterility',
      'Absolute lymphocyte count at 48 hours is best early predictor of ARS severity',
    ],
    diagnosis: [
      'Personal dosimetry (film badge, TLD, OSL) for chronic exposure monitoring',
      'Biodosimetry: serial CBC with differential (lymphocyte kinetics) for acute exposure',
      'Chromosomal aberration (dicentric) assay: gold standard for acute dose estimation',
      'Time to emesis correlates with dose (< 1 hour = > 4 Gy)',
      'Clinical assessment per REMM (Radiation Emergency Medical Management) guidelines',
    ],
    management: [
      'Decontamination: remove clothing (reduces contamination 80-90%), wash skin',
      'ARS: supportive care, cytokines (G-CSF, GM-CSF), antibiotics, transfusions',
      'Internal contamination: Prussian blue (Cs-137), DTPA (plutonium, americium), KI (I-131)',
      'Potassium iodide for thyroid protection within 24 hours of radioiodine exposure',
      'Stem cell transplant considered for > 7-10 Gy whole body without significant GI injury',
    ],
    prevention: [
      'ALARA principle: As Low As Reasonably Achievable',
      'NRC occupational dose limits: 50 mSv/year whole body, 150 mSv/year lens of eye',
      'ICRP recommends 20 mSv/year averaged over 5 years',
      'Time, distance, shielding: minimize time, maximize distance, use appropriate shielding',
      'Personal dosimetry mandatory for radiation workers',
      'Declared pregnant workers: 5 mSv total dose equivalent to embryo/fetus',
    ],
    legalAspects: [
      'NRC (Nuclear Regulatory Commission) regulates nuclear materials and power',
      'State radiation control programs regulate X-ray equipment',
      'OSHA defers to NRC for radiation standards in NRC-licensed facilities',
      'Workers compensation for occupational radiation injury/cancer',
      'NIOSH dose reconstruction for energy workers (EEOICPA)',
      'Radiation exposure records must be maintained for duration of employment + 30 years',
    ],
  },

  chemical_burn: {
    id: 'chemical_burn',
    name: 'Chemical Burn Management',
    category: 'environmental',
    description: 'Tissue injury from contact with corrosive chemicals in occupational settings. Acids cause coagulation necrosis; alkalis cause liquefactive necrosis (deeper penetration, more severe).',
    exposure: 'Industrial cleaning, manufacturing, laboratory work, agriculture (pesticides). Common agents: sulfuric acid, hydrochloric acid, sodium hydroxide (lye), hydrofluoric acid, cement (calcium hydroxite). Eyes, skin, and respiratory tract are primary targets.',
    clinicalFeatures: [
      'Skin: erythema, blistering, tissue destruction; severity depends on agent, concentration, duration',
      'Alkali burns: progressive, deeper than initial appearance (liquefactive necrosis)',
      'Acid burns: self-limiting coagulation necrosis (eschar limits penetration)',
      'Hydrofluoric acid: may appear benign initially; causes deep tissue necrosis and fatal hypocalcemia',
      'Eye chemical burns: ophthalmologic emergency; alkali causes worst outcomes',
      'Inhalation: upper airway edema, chemical pneumonitis, ARDS',
    ],
    diagnosis: [
      'Clinical assessment: agent identification, concentration, duration, body area affected',
      'TBSA estimation for skin burns using rule of nines',
      'pH testing of affected area (target pH 7.0 with irrigation)',
      'HF acid: serum calcium, magnesium, potassium (cardiac monitoring for QT prolongation)',
      'Ocular: pH testing (normal 7.0-7.4), slit lamp exam, fluorescein staining',
      'SDS (Safety Data Sheet) review for specific agent management',
    ],
    management: [
      'Immediate copious water irrigation (20-30 minutes minimum; 2 hours for alkali)',
      'Remove contaminated clothing during irrigation',
      'HF acid: topical calcium gluconate gel; intradermal/intra-arterial calcium for digits; IV calcium for systemic toxicity',
      'Eye: continuous irrigation until pH normalizes (minimum 30 minutes); emergent ophthalmology',
      'Cement burns: prolonged irrigation due to calcium hydroxide alkali pH',
      'Standard burn management for skin: wound care, pain management, tetanus prophylaxis',
    ],
    prevention: [
      'SDS (Safety Data Sheet) availability for all chemicals',
      'PPE: chemical-resistant gloves, splash goggles, face shields, aprons',
      'Emergency eyewash stations and safety showers within 10 seconds of chemical use',
      'OSHA Hazard Communication Standard (29 CFR 1910.1200): GHS labeling, SDS, training',
      'Chemical-specific emergency procedures and spill response plans',
      'Proper chemical storage and incompatibility segregation',
    ],
    legalAspects: [
      'OSHA Hazard Communication Standard requires chemical hazard training',
      'Employer must provide appropriate PPE at no cost to worker',
      'Workers compensation for occupational chemical burns',
      'OSHA recordable injury requiring incident documentation',
      'Potential OSHA citations for inadequate PPE, training, or emergency equipment',
      'Product liability claims against chemical manufacturers for inadequate warnings',
    ],
  },

  heat_stroke: {
    id: 'heat_stroke',
    name: 'Heat Stroke/Exhaustion',
    category: 'environmental',
    description: 'Spectrum of heat-related illness from heat exhaustion (volume depletion, core temp < 40C) to heat stroke (thermoregulatory failure, core temp >= 40C with CNS dysfunction). Leading cause of occupational environmental death.',
    exposure: 'Outdoor labor (agriculture, construction, roofing), foundry/smelting work, firefighting, military training. Risk factors: high ambient temperature/humidity, heavy physical exertion, lack of acclimatization, PPE/heavy clothing, dehydration, medications (anticholinergics, diuretics, stimulants).',
    clinicalFeatures: [
      'Heat exhaustion: fatigue, headache, nausea, dizziness, heavy sweating, tachycardia, temp < 40C',
      'Heat stroke (classic): hot dry skin, AMS, temp >= 40C, often in elderly',
      'Heat stroke (exertional): may still be sweating, altered consciousness, temp >= 40C',
      'Complications: rhabdomyolysis, DIC, acute kidney injury, hepatic failure, ARDS',
      'Exertional heat stroke mortality: 10% with rapid cooling; > 50% if cooling delayed',
    ],
    diagnosis: [
      'Core temperature measurement (rectal preferred; not oral/axillary/tympanic)',
      'Heat stroke: core temp >= 40C (104F) PLUS CNS dysfunction (confusion, seizure, coma)',
      'Labs: CBC, CMP, CK, coagulation studies, urinalysis for myoglobin',
      'Elevated CK and myoglobinuria indicate rhabdomyolysis',
      'Rule out other causes of hyperthermia: infection, NMS, serotonin syndrome, thyroid storm',
    ],
    management: [
      'Heat exhaustion: move to cool environment, oral rehydration, rest',
      'Heat stroke: IMMEDIATE aggressive cooling (target core temp < 39C within 30 min)',
      'Cold water immersion (CWI) is gold standard for exertional heat stroke',
      'Evaporative cooling (mist + fan) if CWI not available',
      'IV fluids: isotonic saline for volume resuscitation',
      'Avoid antipyretics (ineffective; thermoregulation is reset, not elevated set-point)',
      'Monitor and treat rhabdomyolysis, DIC, organ failure',
    ],
    prevention: [
      'OSHA has proposed a Heat Injury and Illness Prevention standard (pending)',
      'Acclimatization: gradual increase in heat exposure over 7-14 days',
      'Work-rest cycles based on WBGT (wet bulb globe temperature) and workload',
      'Adequate hydration: 8 oz water every 15-20 minutes during heavy exertion in heat',
      'Buddy system and supervisory monitoring for heat illness symptoms',
      'Emergency action plan with cooling supplies on-site',
    ],
    legalAspects: [
      'OSHA general duty clause applies for heat hazards (no final specific standard yet)',
      'Several states have heat-specific standards (California, Washington, Oregon)',
      'Workers compensation for heat-related illness and death',
      'OSHA can cite employers under general duty clause for known heat hazards',
      'NIOSH criteria document recommends REL for heat stress',
    ],
  },

  decompression_sickness: {
    id: 'decompression_sickness',
    name: 'Decompression Sickness',
    category: 'environmental',
    description: 'Bubble formation in tissues and blood from dissolved nitrogen coming out of solution during rapid decompression. Affects divers, caisson workers, and aviators.',
    exposure: 'Commercial and military diving, tunnel/caisson construction (compressed air), high-altitude aviation/spaceflight, hyperbaric chamber work. Risk increases with depth, bottom time, rate of ascent, and repetitive dives.',
    clinicalFeatures: [
      'Type I (mild): joint pain ("the bends"), skin mottling, pruritus, lymphedema',
      'Type II (serious): spinal cord (most common neurological), cerebral, inner ear, pulmonary',
      'Spinal DCS: back pain, paraplegia, urinary retention (thoracolumbar cord most affected)',
      'Cerebral DCS: confusion, hemiplegia, visual disturbance, seizures',
      'Pulmonary DCS ("the chokes"): substernal chest pain, cough, dyspnea (rare, severe)',
      'Arterial gas embolism (AGE): catastrophic; stroke-like symptoms within minutes of surfacing',
    ],
    diagnosis: [
      'Clinical diagnosis based on exposure history and symptom timing',
      'Symptoms typically within 6 hours of decompression (90% within 1 hour for AGE)',
      'Response to recompression is diagnostic and therapeutic',
      'MRI may show spinal cord or brain lesions but should not delay treatment',
      'Differential: immersion pulmonary edema, inner ear barotrauma, stroke',
    ],
    management: [
      'Immediate 100% oxygen via tight-fitting mask (reduces bubble size via nitrogen gradient)',
      'Hyperbaric oxygen therapy: US Navy Treatment Table 6 (2.8 ATA for 285 min) is standard',
      'IV fluids for volume resuscitation (dehydration worsens bubble formation)',
      'Supine or left lateral position (for AGE: prevent further cerebral embolization)',
      'Delayed recompression still beneficial even hours-days after symptom onset',
      'Contact DAN (Divers Alert Network) for emergency consultation',
    ],
    prevention: [
      'Adherence to dive tables or dive computer decompression algorithms',
      'Controlled ascent rate (no faster than 30 feet/minute)',
      'Safety stops at 15 feet for 3-5 minutes',
      'Adequate surface interval between repetitive dives',
      'Fly-after-diving guidelines: minimum 12-24 hours surface interval',
      'Pre-dive medical fitness evaluation for commercial divers',
    ],
    legalAspects: [
      'OSHA commercial diving standards (29 CFR 1910 Subpart T)',
      'USCG regulations for commercial diving operations',
      'Workers compensation for occupational DCS',
      'Disability evaluation for residual neurological deficits',
      'Employer must provide recompression chamber access for commercial dive operations',
    ],
  },

  // =========================================================================
  // PSYCHOLOGICAL
  // =========================================================================
  shift_work_sleep_disorder: {
    id: 'shift_work_sleep_disorder',
    name: 'Shift Work Sleep Disorder',
    category: 'psychological',
    description: 'Circadian rhythm disruption from non-standard work schedules (night shifts, rotating shifts), causing insomnia during daytime sleep and excessive sleepiness during nighttime work.',
    exposure: 'Night shift, early morning shift, rotating shifts. Healthcare, transportation, manufacturing, emergency services, military. Approximately 20% of US workforce engages in shift work.',
    clinicalFeatures: [
      'Insomnia when attempting to sleep during daytime',
      'Excessive sleepiness during night shift work',
      'Reduced total sleep time (1-4 hours less per 24 hours)',
      'Increased risk: cardiovascular disease, metabolic syndrome, GI disorders, depression',
      'Impaired cognitive performance and increased accident risk',
      'Possible increased cancer risk (IARC classifies night shift work as "probably carcinogenic")',
    ],
    diagnosis: [
      'Clinical history: shift work schedule plus insomnia and/or excessive sleepiness for >= 3 months',
      'Sleep diary or actigraphy for at least 14 days documenting sleep-wake patterns',
      'Polysomnography to exclude other sleep disorders (OSA, narcolepsy)',
      'ICSD-3 diagnostic criteria: work schedule during usual sleep time, symptoms for >= 3 months',
      'Epworth Sleepiness Scale for quantifying daytime sleepiness',
    ],
    management: [
      'Strategic napping before or during shift (20-30 min improves alertness)',
      'Bright light exposure during early part of night shift (circadian resetting)',
      'Melatonin (0.5-3 mg) before desired daytime sleep period',
      'Modafinil/armodafinil FDA-approved for shift work disorder (promotes wakefulness during shift)',
      'Sleep hygiene: dark, quiet, cool bedroom; consistent sleep schedule on days off',
      'Clockwise shift rotation (morning to evening to night) preferred over counter-clockwise',
    ],
    prevention: [
      'Forward (clockwise) shift rotation schedules',
      'Limit consecutive night shifts to 3-4 maximum',
      'Allow at least 11 hours between shifts',
      'Provide rest/nap facilities for shift workers',
      'Employer education on fatigue risk management',
      'Screen for sleep disorders in safety-sensitive occupations (transportation, healthcare)',
    ],
    legalAspects: [
      'FMCSA hours-of-service rules for commercial drivers',
      'FAA flight-time/duty-time limitations for aviation',
      'ACGME duty hour restrictions for medical residents',
      'Workers compensation for shift-work-related illness (limited recognition)',
      'Employer liability for fatigue-related workplace accidents',
    ],
  },

  burnout_syndrome: {
    id: 'burnout_syndrome',
    name: 'Burnout Syndrome',
    category: 'psychological',
    description: 'Occupational phenomenon (ICD-11) characterized by emotional exhaustion, depersonalization/cynicism, and reduced personal accomplishment resulting from chronic workplace stress.',
    exposure: 'Healthcare workers (physician burnout 40-60%), teachers, social workers, first responders, service industry. Contributing factors: excessive workload, loss of autonomy, inadequate reward, values conflict, lack of fairness, poor community.',
    clinicalFeatures: [
      'Emotional exhaustion: feeling drained, unable to cope, lack of energy',
      'Depersonalization/cynicism: detachment from patients/clients, negative attitudes',
      'Reduced personal accomplishment: sense of inefficacy, incompetence',
      'Physical symptoms: insomnia, headaches, GI disturbance, frequent illness',
      'Increased absenteeism, presenteeism, and intention to leave profession',
      'Physician burnout associated with medical errors and decreased patient safety',
    ],
    diagnosis: [
      'Maslach Burnout Inventory (MBI): gold standard measurement tool',
      'Three subscales: emotional exhaustion, depersonalization, personal accomplishment',
      'Copenhagen Burnout Inventory (CBI) as an alternative',
      'ICD-11 classifies burnout as occupational phenomenon (QD85), NOT a medical condition',
      'Must differentiate from major depression, adjustment disorder, and chronic fatigue syndrome',
    ],
    management: [
      'Individual: cognitive behavioral therapy, mindfulness, stress management',
      'Organizational: workload reduction, increased autonomy, schedule flexibility',
      'Peer support programs and Schwartz Center Rounds',
      'Professional coaching and career counseling',
      'Treatment of comorbid depression or anxiety if present',
      'Sabbatical or extended leave for severe cases',
    ],
    prevention: [
      'Organizational interventions more effective than individual-only approaches',
      'Reduce administrative burden and EHR documentation demands',
      'Adequate staffing and equitable workload distribution',
      'Culture of wellness: destigmatize help-seeking, promote work-life integration',
      'Wellness committees and chief wellness officers in healthcare organizations',
      'Regular assessment with validated burnout instruments',
    ],
    legalAspects: [
      'ICD-11 recognizes burnout as occupational phenomenon (not disease)',
      'Limited workers compensation coverage (most states do not recognize as compensable injury)',
      'FMLA may apply if burnout results in qualifying medical condition (depression)',
      'ADA reasonable accommodation if burnout causes substantial limitation',
      'Employer liability for hostile work environment contributing to burnout',
      'Organizational duty of care increasingly recognized in healthcare settings',
    ],
  },

  // =========================================================================
  // TOXIC EXPOSURE (continued)
  // =========================================================================
  latex_allergy: {
    id: 'latex_allergy',
    name: 'Latex Allergy',
    category: 'toxic-exposure',
    description: 'Immunologic hypersensitivity to natural rubber latex proteins, ranging from contact dermatitis (Type IV) to anaphylaxis (Type I IgE-mediated). Major occupational health issue for healthcare workers.',
    exposure: 'Natural rubber latex gloves, medical devices, dental dams, catheters. Healthcare workers (highest risk: 8-17% sensitization), rubber industry workers, patients with spina bifida (frequent latex exposure from birth). Cross-reactivity with banana, avocado, kiwi, chestnut (latex-fruit syndrome).',
    clinicalFeatures: [
      'Type I (IgE-mediated): urticaria, rhinitis, asthma, anaphylaxis within minutes of exposure',
      'Type IV (delayed): contact dermatitis 24-48 hours after exposure (more common)',
      'Irritant contact dermatitis (non-immune): most common hand dermatitis from gloves (not true allergy)',
      'Aerosolized latex from powdered gloves can trigger respiratory symptoms',
      'Latex-fruit syndrome: cross-reactive allergies to banana, avocado, kiwi, chestnut',
    ],
    diagnosis: [
      'Skin prick test with latex extract (most sensitive; risk of systemic reaction)',
      'Serum-specific IgE to Hevea brasiliensis (blood test, safer but less sensitive)',
      'Patch testing for Type IV delayed hypersensitivity',
      'Glove-use provocation test in controlled setting',
      'Must distinguish Type I (IgE), Type IV (delayed), and irritant dermatitis',
    ],
    management: [
      'Complete avoidance of natural rubber latex products',
      'Substitute with nitrile, vinyl, or neoprene gloves',
      'Latex-safe or latex-free perioperative environment for sensitized patients/workers',
      'Medical alert identification for Type I latex allergy',
      'Epinephrine auto-injector for Type I reactions',
      'Pre-treatment protocols for unavoidable latex exposure (diphenhydramine, corticosteroids)',
    ],
    prevention: [
      'Switch to non-latex gloves institution-wide (most effective measure)',
      'Powder-free gloves reduce aerosolized latex protein exposure',
      'Low-protein latex gloves if latex must be used',
      'NIOSH Alert: preventing allergic reactions to natural rubber latex (97-135)',
      'Pre-placement screening for atopic history in healthcare workers',
      'Education on cross-reactive foods (latex-fruit syndrome)',
    ],
    legalAspects: [
      'OSHA does not have a specific latex standard but general duty clause applies',
      'Workers compensation for occupational latex allergy',
      'ADA: latex allergy may be a disability requiring reasonable accommodation',
      'Employer must provide appropriate non-latex alternatives',
      'NIOSH recommendations for healthcare facilities',
    ],
  },

  contact_dermatitis_occupational: {
    id: 'contact_dermatitis_occupational',
    name: 'Contact Dermatitis (Occupational)',
    category: 'toxic-exposure',
    description: 'Inflammatory skin reaction from workplace exposure to irritants (80% of cases) or allergens (20%). Most common occupational skin disease; hands are most frequently affected.',
    exposure: 'Irritant: wet work (healthcare, food service, cleaning), solvents, detergents, cutting fluids, cement. Allergic: epoxy resins, chromate (cement), nickel, rubber additives (thiurams, carbamates), formaldehyde, preservatives (isothiazolinones). Hairdressing, healthcare, construction, and metalworking are high-risk occupations.',
    clinicalFeatures: [
      'Irritant: erythema, dryness, fissuring, scaling at contact site; dose-dependent',
      'Allergic: pruritic, vesicular, eczematous eruption; may extend beyond contact area',
      'Distribution pattern reflects exposure pattern (hands, forearms, face)',
      'Chronic: lichenification, hyperkeratosis, fissuring',
      'Differential: atopic dermatitis (pre-existing), psoriasis, fungal infection, scabies',
    ],
    diagnosis: [
      'Detailed occupational and exposure history is essential',
      'Patch testing (TRUE test or extended series) for allergic contact dermatitis',
      'Standard series + occupation-specific allergens',
      'Repeated open application test (ROAT) for equivocal patch test results',
      'Workplace visit may be necessary to identify causative agents',
      'SDS review for chemical ingredients',
    ],
    management: [
      'Identify and eliminate/reduce contact with causative agent',
      'Barrier creams (limited evidence) and emollients for skin protection',
      'Topical corticosteroids for acute inflammation',
      'Topical calcineurin inhibitors for maintenance (avoid steroid atrophy)',
      'Severe/widespread: short course systemic corticosteroids',
      'Skin care education: gentle cleansing, frequent moisturizing, proper glove use',
    ],
    prevention: [
      'Substitution of sensitizing chemicals with safer alternatives',
      'Appropriate PPE: chemical-resistant gloves matched to specific agent',
      'Cotton liner gloves under occlusive gloves to reduce moisture',
      'Skin care programs: pre-work creams, gentle cleansers, post-work emollients',
      'Worker education on hazardous substances and early symptom recognition',
      'Minimize wet work duration and frequency',
    ],
    legalAspects: [
      'Most common occupational skin disease for compensation claims',
      'Workers compensation for medical treatment and lost wages',
      'Employer must provide appropriate PPE and hazard information',
      'OSHA Hazard Communication Standard requires chemical labeling and SDS',
      'May qualify for disability if unable to continue occupation',
      'Return to work may require permanent restrictions or job change',
    ],
  },

  // =========================================================================
  // REGULATORY
  // =========================================================================
  osha_regulations: {
    id: 'osha_regulations',
    name: 'OSHA Regulations',
    category: 'regulatory',
    description: 'Occupational Safety and Health Administration (OSHA) standards and enforcement mechanisms for workplace safety and health. Created by OSH Act of 1970.',
    exposure: 'All private sector employers and workers (some exceptions: self-employed, family farms, state/local government in non-state-plan states). OSHA covers approximately 130 million workers at 8 million worksites.',
    clinicalFeatures: [
      'OSHA sets and enforces Permissible Exposure Limits (PELs) for ~500 substances',
      'General Duty Clause (Section 5(a)(1)): employer must provide a workplace free from recognized hazards',
      'OSHA standards: general industry (29 CFR 1910), construction (1926), maritime (1915-1918)',
      'Recordkeeping: OSHA 300 Log for work-related injuries and illnesses',
      'Employer must report: fatality within 8 hours; amputation/loss of eye/inpatient hospitalization within 24 hours',
    ],
    diagnosis: [
      'N/A - Regulatory framework, not a medical condition',
    ],
    management: [
      'Compliance with applicable OSHA standards',
      'Written safety programs (Hazard Communication, Respiratory Protection, LOTO, etc.)',
      'Employee training on hazards and protective measures',
      'Medical surveillance programs per specific standards',
      'Recordkeeping and reporting per 29 CFR 1904',
      'Voluntary Protection Programs (VPP) for exemplary safety management',
    ],
    prevention: [
      'Hierarchy of controls: elimination > substitution > engineering > administrative > PPE',
      'Job hazard analysis (JHA) for identifying workplace risks',
      'Safety and health management systems (OSHA recommends, not mandates)',
      'OSHA consultation program: free, confidential on-site assistance for small businesses',
      'Whistleblower protections under Section 11(c) for workers reporting hazards',
    ],
    legalAspects: [
      'OSHA citations: willful, serious, other-than-serious, de minimis, repeat',
      'Maximum penalties: $156,259 per willful violation (2023 adjusted)',
      'Employee right to file complaint and request inspection (Section 8(f))',
      'Multi-employer worksite doctrine: host, controlling, correcting, creating employers',
      'State OSHA plans must be at least as effective as federal OSHA',
      'NIOSH (research) vs. OSHA (regulation): separate agencies with complementary roles',
      'OSHRC (Occupational Safety and Health Review Commission) adjudicates contested citations',
    ],
  },

  workers_compensation: {
    id: 'workers_compensation',
    name: "Workers' Compensation",
    category: 'regulatory',
    description: 'State-mandated no-fault insurance system providing medical treatment, wage replacement, and disability benefits for work-related injuries and illnesses. Exclusive remedy: employees generally cannot sue employers.',
    exposure: 'Applies to all work-related injuries and occupational diseases. Each state has its own workers compensation statute (except federal employees: FECA). Key elements: no-fault (negligence not required), exclusive remedy (bars tort action against employer), and employer-funded.',
    clinicalFeatures: [
      'N/A - Legal/administrative system, not a medical condition',
    ],
    diagnosis: [
      'Work-relatedness determination: injury/illness arising out of and in the course of employment',
      'Occupational disease: must demonstrate causation (exposure + medical evidence)',
      'Aggravation/exacerbation of pre-existing condition may be compensable',
      'Authorized treating physician (ATP) determines treatment and work status',
      'Independent medical examination (IME) for disputed claims',
    ],
    management: [
      'First Report of Injury filed by employer',
      'Medical treatment authorized through workers compensation insurer',
      'Temporary total/partial disability benefits for lost wages',
      'Maximum medical improvement (MMI) determination by treating physician',
      'Permanent impairment rating (AMA Guides or state-specific method)',
      'Vocational rehabilitation for workers unable to return to prior occupation',
    ],
    prevention: [
      'Workplace safety programs reduce claims frequency and severity',
      'Early return-to-work programs with modified/transitional duty',
      'Case management to coordinate care and expedite recovery',
      'Claims management to prevent unnecessary delays',
      'Loss prevention and ergonomic programs',
    ],
    legalAspects: [
      'No-fault system: employee does not need to prove employer negligence',
      'Exclusive remedy doctrine: bars most tort claims against employer',
      'Exceptions to exclusive remedy: intentional harm, dual capacity doctrine',
      'Statute of limitations varies by state (typically 1-2 years from injury/discovery)',
      'Contested claims adjudicated by state workers compensation board/commission',
      'Third-party lawsuits (e.g., against equipment manufacturer) remain available',
      'Fraud penalties for false claims by employees or employers',
    ],
  },

  // =========================================================================
  // EVALUATION
  // =========================================================================
  fitness_for_duty: {
    id: 'fitness_for_duty',
    name: 'Fitness-for-Duty Evaluation',
    category: 'evaluation',
    description: 'Medical assessment to determine whether an employee can safely perform essential job functions with or without accommodation. Balances worker safety, public safety, and employment rights.',
    exposure: 'Safety-sensitive positions: commercial drivers (DOT), pilots (FAA), law enforcement, firefighters, nuclear workers (NRC), healthcare workers. Also triggered by observed behavior changes, workplace incidents, return from medical leave, or reasonable suspicion.',
    clinicalFeatures: [
      'N/A - Evaluation process, not a medical condition',
    ],
    diagnosis: [
      'Review essential job functions and physical/cognitive demands (job description, JDA)',
      'Comprehensive medical history and physical examination',
      'Functional capacity evaluation (FCE) for physical demands',
      'Neuropsychological testing for cognitive demands',
      'Drug and alcohol testing per DOT or employer protocol',
      'Specialist referrals as indicated (cardiology, neurology, psychiatry)',
    ],
    management: [
      'Determination: fit for duty, fit with restrictions/accommodations, temporarily unfit, permanently unfit',
      'Conditional clearance with specific work restrictions',
      'Reasonable accommodation analysis per ADA/ADAAA',
      'Interactive process with employer to identify feasible accommodations',
      'Follow-up evaluation timeline for temporary conditions',
      'Referral for treatment if medical condition identified',
    ],
    prevention: [
      'Pre-placement medical evaluation (establishes baseline and capability)',
      'Periodic surveillance examinations for safety-sensitive positions',
      'Employee assistance programs (EAP) for substance abuse and mental health',
      'Clear policies for reporting medical conditions that may affect safety',
      'Training supervisors to recognize impairment and initiate referrals',
    ],
    legalAspects: [
      'ADA: medical exams must be job-related and consistent with business necessity',
      'ADA: cannot require pre-offer medical exams; post-offer exams must apply to all',
      'DOT physical examination requirements for CMV operators (49 CFR 391)',
      'GINA: cannot use genetic information in employment decisions',
      'Confidentiality: medical records separate from personnel file',
      'Physician must avoid disability discrimination while ensuring safety',
      'Direct threat standard: significant risk of substantial harm that cannot be eliminated by accommodation',
    ],
  },

  return_to_work: {
    id: 'return_to_work',
    name: 'Return-to-Work Assessment',
    category: 'evaluation',
    description: 'Structured evaluation and planning process to facilitate safe and timely return to employment following injury, illness, or surgery. Evidence supports early return to modified/transitional duty.',
    exposure: 'Applies after any work-related injury/illness, non-occupational disability, surgery, or prolonged medical leave. Early return-to-work programs improve outcomes and reduce long-term disability.',
    clinicalFeatures: [
      'N/A - Assessment process, not a medical condition',
    ],
    diagnosis: [
      'Assess current functional capabilities vs. essential job demands',
      'Review medical records, treatment plan, and prognosis',
      'Functional capacity evaluation (FCE) if objective measurement needed',
      'Job demands analysis (JDA) documenting physical, cognitive, and environmental requirements',
      'Consider psychological readiness (especially after traumatic injury or mental health leave)',
    ],
    management: [
      'Graduated return: transitional duty with progressive increase in demands',
      'Modified duty: temporary adjustment of job tasks, hours, or physical demands',
      'Specific work restrictions clearly communicated (lifting limits, standing duration, etc.)',
      'Timeline for full-duty release with defined milestones',
      'Coordination between treating physician, employer, and workers compensation',
      'Physical/occupational therapy to address functional deficits',
    ],
    prevention: [
      'Pre-injury: workplace safety programs and ergonomic design',
      'Post-injury: early communication between physician, worker, and employer',
      'Employer-based transitional duty programs ready before injuries occur',
      'Stay-at-work programs for minor injuries (avoid unnecessary absence)',
      'Address psychosocial yellow flags (fear avoidance, catastrophizing, secondary gain)',
    ],
    legalAspects: [
      'ADA requires reasonable accommodation for qualified individuals with disabilities',
      'FMLA provides 12 weeks unpaid leave with job protection for qualifying conditions',
      'Workers compensation: employer may require return to modified duty',
      'Refusal of reasonable modified duty may affect workers compensation benefits',
      'Physician work status reports are legal documents with medicolegal weight',
      'ADA interactive process to determine reasonable accommodation',
    ],
  },

  disability_evaluation: {
    id: 'disability_evaluation',
    name: 'Disability Evaluation',
    category: 'evaluation',
    description: 'Medical assessment of impairment and its impact on work capacity, performed for workers compensation, Social Security Disability (SSDI), long-term disability insurance, or ADA determinations.',
    exposure: 'Requested after maximum medical improvement (MMI) for work injuries, or when a medical condition prevents gainful employment. Different systems use different definitions of disability.',
    clinicalFeatures: [
      'N/A - Evaluation process, not a medical condition',
    ],
    diagnosis: [
      'Impairment: objective anatomical or physiological abnormality (physician determines)',
      'Disability: inability to perform specific activities due to impairment (administrative/legal determination)',
      'AMA Guides to the Evaluation of Permanent Impairment (6th edition): standard reference',
      'Whole-person impairment rating combines regional impairments using combined values chart',
      'SSDI: five-step sequential evaluation (SGA, severity, listings, RFC, past/other work)',
      'Workers compensation: state-specific rating systems (some use AMA Guides, some do not)',
    ],
    management: [
      'Comprehensive medical record review',
      'Detailed history and physical examination',
      'Objective testing (imaging, EMG, PFTs, etc.) as indicated',
      'Apportionment: allocating impairment between work-related and pre-existing causes',
      'Causation analysis: reasonable medical probability (more likely than not, >50%)',
      'Written report: diagnosis, impairment rating, work restrictions, prognosis',
    ],
    prevention: [
      'Early and appropriate medical treatment reduces permanent impairment',
      'Aggressive rehabilitation and return-to-work programs',
      'Address psychosocial barriers to recovery',
      'Prevent deconditioning through activity and exercise prescription',
      'Avoid iatrogenic disability from excessive work restrictions or opioid prescribing',
    ],
    legalAspects: [
      'Impairment is medical; disability is administrative/legal',
      'AMA Guides are mandated in many states but not universally',
      'SSDI uses own medical listings and residual functional capacity (RFC) assessment',
      'Physician role: provide medical evidence; adjudicator determines disability',
      'Independent medical examination (IME) standards and ethical obligations',
      'Treating physician vs. IME physician: different roles and perspectives',
      'Daubert/Frye standards for expert testimony admissibility',
    ],
  },
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Get all entries as an array. */
export const getAllOccupationalEntries = (): OccupationalMedicineEntry[] =>
  Object.values(OCCUPATIONAL_MEDICINE_ENTRIES);

/** Search entries by query matching id, name, description, exposure, or clinicalFeatures. */
export const searchOccupationalEntries = (query: string): OccupationalMedicineEntry[] => {
  const q = query.toLowerCase();
  return getAllOccupationalEntries().filter((e) => {
    const haystack = [e.id, e.name, e.description, e.exposure, ...e.clinicalFeatures]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
};

/** Filter entries by one or more categories. */
export const filterByOccupationalCategory = (
  categories: OccupationalCategory[],
): OccupationalMedicineEntry[] =>
  getAllOccupationalEntries().filter((e) => categories.includes(e.category));

/** Get a single entry by its id (key in the Record). */
export const getOccupationalEntryById = (
  id: string,
): OccupationalMedicineEntry | undefined => OCCUPATIONAL_MEDICINE_ENTRIES[id];

/** Get all unique categories present in the database. */
export const getOccupationalCategories = (): OccupationalCategory[] => [
  ...new Set(getAllOccupationalEntries().map((e) => e.category)),
];

/** Count entries per category. */
export const countByOccupationalCategory = (): Record<OccupationalCategory, number> => {
  const counts = {} as Record<OccupationalCategory, number>;
  for (const entry of getAllOccupationalEntries()) {
    counts[entry.category] = (counts[entry.category] || 0) + 1;
  }
  return counts;
};
