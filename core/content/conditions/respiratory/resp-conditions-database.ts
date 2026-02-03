/**
 * Biological Self - Respiratory Conditions Database
 * Compact reference of 25+ respiratory conditions across all categories
 */

// --- Types ---

export type RespCategory =
  | 'obstructive' | 'restrictive' | 'infectious' | 'vascular'
  | 'pleural' | 'occupational' | 'sleep' | 'neoplastic';

export interface RespConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: RespCategory;
  icd11: string;
  prevalence: string;
  pathophysiology: string;
  symptoms: string[];
  diagnosis: string;
  treatment: string;
  emergencySigns: string[];
  selfManagement: string;
  prognosis: string;
  patientTip: string;
}

// --- Compact helper ---

function resp(
  id: string, name: string, nameEs: string, category: RespCategory,
  icd11: string, prevalence: string, pathophysiology: string,
  symptoms: string[], diagnosis: string, treatment: string,
  emergencySigns: string[], selfManagement: string,
  prognosis: string, patientTip: string
): RespConditionEntry {
  return {
    id, name, nameEs, category, icd11, prevalence, pathophysiology,
    symptoms, diagnosis, treatment, emergencySigns, selfManagement,
    prognosis, patientTip,
  };
}

// --- Database ---

const respArray: RespConditionEntry[] = [

  // ============================================================
  // OBSTRUCTIVE (5)
  // ============================================================
  resp(
    'asthma', 'Asthma', 'Asma', 'obstructive', 'CA23',
    '~300 million worldwide; 8% of US adults',
    'Chronic airway inflammation with reversible bronchoconstriction, bronchial hyperresponsiveness, and mucus hypersecretion driven by Th2 cytokines (IL-4, IL-5, IL-13) and mast cell degranulation.',
    ['Wheezing', 'Shortness of breath', 'Chest tightness', 'Cough (especially nocturnal)', 'Difficulty exhaling'],
    'Spirometry showing reversible obstruction (FEV1 increase >=12% and >=200 mL post-bronchodilator); FeNO >25 ppb; peak flow variability >20%; methacholine challenge if spirometry normal.',
    'Stepwise therapy per GINA: Step 1-2 low-dose ICS +/- SABA PRN; Step 3 low-dose ICS-LABA; Step 4 medium-dose ICS-LABA; Step 5 high-dose ICS-LABA + biologic (omalizumab, mepolizumab, dupilumab, tezepelumab). Avoid SABA-only regimens.',
    ['Cannot speak in full sentences', 'Silent chest on auscultation', 'SpO2 <92%', 'Peak flow <25% predicted', 'Accessory muscle use', 'Cyanosis'],
    'Identify and avoid triggers; use written asthma action plan; monitor peak flow daily; ensure proper inhaler technique; annual flu vaccination.',
    'Good with proper management; most patients achieve control. Airway remodeling possible with chronic uncontrolled disease. Mortality rare with treatment adherence.',
    'Always carry your rescue inhaler. If you use it more than twice a week, your asthma may not be well controlled -- talk to your doctor about stepping up therapy.'
  ),
  resp(
    'copd', 'Chronic Obstructive Pulmonary Disease (COPD)', 'Enfermedad Pulmonar Obstructiva Cronica', 'obstructive', 'CA22',
    '~380 million worldwide; 3rd leading cause of death globally',
    'Progressive airflow limitation due to chronic inflammation from inhaled irritants (primarily tobacco). Includes emphysema (alveolar destruction, loss of elastic recoil) and chronic bronchitis (mucus hypersecretion, airway remodeling). Protease-antiprotease imbalance and oxidative stress drive parenchymal destruction.',
    ['Progressive dyspnea', 'Chronic productive cough', 'Barrel chest', 'Pursed-lip breathing', 'Frequent respiratory infections', 'Wheezing'],
    'Spirometry with post-bronchodilator FEV1/FVC <0.70 confirms diagnosis. Classify severity by GOLD stage (FEV1 % predicted). CT chest for emphysema assessment; alpha-1 antitrypsin level in early-onset.',
    'Smoking cessation (most important). Bronchodilators: LAMA (tiotropium) and/or LABA. ICS added for frequent exacerbations with eosinophilia. Pulmonary rehabilitation. Supplemental O2 if PaO2 <=55 mmHg. Roflumilast for frequent exacerbations. Lung volume reduction surgery or transplant in select cases.',
    ['Acute exacerbation with respiratory failure', 'Altered mental status', 'Hemodynamic instability', 'SpO2 <88% despite O2', 'Respiratory rate >30'],
    'Complete smoking cessation; pulmonary rehabilitation exercises; annual flu and pneumococcal vaccines; proper inhaler technique; energy conservation techniques for daily activities.',
    'Progressive disease; rate of decline slowed by smoking cessation. Mean survival varies by GOLD stage. Exacerbations accelerate decline and increase mortality.',
    'Quitting smoking is the single most effective thing you can do. Even after years of smoking, stopping will slow the disease progression.'
  ),
  resp(
    'chronic-bronchitis', 'Chronic Bronchitis', 'Bronquitis Cronica', 'obstructive', 'CA20',
    'Affects ~10 million US adults; subset of COPD',
    'Chronic inflammation of bronchial airways with goblet cell hyperplasia, mucus gland hypertrophy, and impaired mucociliary clearance. Defined clinically as productive cough for >=3 months in >=2 consecutive years.',
    ['Persistent productive cough', 'Mucoid or purulent sputum', 'Dyspnea on exertion', 'Wheezing', 'Frequent chest infections'],
    'Clinical diagnosis based on history. Spirometry to assess airflow limitation. Chest X-ray to exclude other causes. Sputum culture during exacerbations.',
    'Smoking cessation; bronchodilators (LAMA, LABA); ICS if eosinophilic; mucolytics (guaifenesin, N-acetylcysteine); antibiotics for acute bacterial exacerbations; pulmonary rehabilitation.',
    ['Severe dyspnea at rest', 'High fever with purulent sputum', 'Hemoptysis', 'Rapid deterioration'],
    'Stop smoking; stay hydrated to thin secretions; use humidifier; practice airway clearance techniques; avoid air pollutants.',
    'Chronic condition; smoking cessation slows progression. Without intervention, progresses to airflow limitation and respiratory failure.',
    'Drinking plenty of water helps thin mucus, making it easier to cough up. Avoid cold, dry air when possible.'
  ),
  resp(
    'bronchiectasis', 'Bronchiectasis', 'Bronquiectasias', 'obstructive', 'CA26',
    '~500,000 US adults; increasing prevalence recognized',
    'Permanent dilation and destruction of bronchial walls from chronic infection and inflammation. Vicious cycle: impaired mucociliary clearance leads to bacterial colonization, chronic inflammation, and progressive airway damage.',
    ['Chronic productive cough with large volumes of purulent sputum', 'Recurrent respiratory infections', 'Hemoptysis', 'Dyspnea', 'Fatigue'],
    'High-resolution CT chest (gold standard) showing bronchial dilation, lack of tapering, signet ring sign. Sputum cultures; immunoglobulin levels; CF testing; ciliary function studies to identify etiology.',
    'Airway clearance techniques (chest physiotherapy, oscillatory PEP devices); long-term rotating antibiotics for chronic colonization; inhaled hypertonic saline; macrolide prophylaxis (azithromycin); bronchodilators; surgical resection for localized disease.',
    ['Massive hemoptysis', 'Acute respiratory failure', 'Sepsis from pulmonary infection'],
    'Daily airway clearance exercises; maintain hydration; prompt treatment of infections; annual vaccinations; regular sputum cultures.',
    'Variable; depends on underlying cause and extent. Pseudomonas colonization associated with worse outcomes. Exacerbation frequency predicts decline.',
    'Daily airway clearance is as important as taking your medications. Consistency with chest physiotherapy makes a real difference.'
  ),
  resp(
    'cystic-fibrosis', 'Cystic Fibrosis', 'Fibrosis Quistica', 'obstructive', 'CA25',
    '~70,000 worldwide; ~30,000 in US; most common lethal genetic disease in Caucasians',
    'Autosomal recessive mutation in CFTR gene (most common: F508del) causing defective chloride/bicarbonate transport. Results in thick, dehydrated secretions in lungs, pancreas, liver, and reproductive tract. Chronic airway infection and neutrophilic inflammation.',
    ['Chronic productive cough', 'Recurrent pneumonia', 'Failure to thrive', 'Steatorrhea', 'Salty-tasting skin', 'Nasal polyps', 'Digital clubbing'],
    'Newborn screening (immunoreactive trypsinogen); sweat chloride test >=60 mmol/L diagnostic; CFTR genetic testing; spirometry for monitoring.',
    'CFTR modulators (elexacaftor/tezacaftor/ivacaftor for F508del -- transformative therapy); aggressive airway clearance; inhaled mucolytics (dornase alfa, hypertonic saline); inhaled antibiotics (tobramycin); pancreatic enzyme replacement; nutritional supplementation; lung transplant for end-stage.',
    ['Massive hemoptysis', 'Pneumothorax', 'Respiratory failure', 'Severe metabolic alkalosis'],
    'Rigorous airway clearance 2-3 times daily; high-calorie diet; pancreatic enzymes with meals; adherence to CFTR modulators; infection prevention measures.',
    'Dramatically improved with CFTR modulators. Median survival now >50 years (previously ~30). Quality of life significantly improved with elexacaftor/tezacaftor/ivacaftor.',
    'CFTR modulators have transformed this disease. Adherence to daily treatments remains critical even when feeling well.'
  ),

  // ============================================================
  // RESTRICTIVE (3)
  // ============================================================
  resp(
    'ipf', 'Idiopathic Pulmonary Fibrosis', 'Fibrosis Pulmonar Idiopatica', 'restrictive', 'CB03.4',
    '~100,000 US patients; incidence 6-16 per 100,000/year',
    'Progressive fibrotic interstitial lung disease of unknown cause. Aberrant wound healing with fibroblast proliferation and excessive collagen deposition in alveolar walls. Usual interstitial pneumonia (UIP) pattern on histology.',
    ['Progressive exertional dyspnea', 'Dry nonproductive cough', 'Bibasilar inspiratory crackles (Velcro-like)', 'Digital clubbing', 'Fatigue'],
    'HRCT showing UIP pattern (basal-predominant honeycombing, traction bronchiectasis, reticulation). Surgical lung biopsy if HRCT indeterminate. PFTs showing restrictive pattern with decreased DLCO. Exclude connective tissue disease.',
    'Antifibrotic agents: pirfenidone or nintedanib (slow decline but do not cure). Supplemental oxygen; pulmonary rehabilitation; lung transplant evaluation early. Avoid immunosuppressants (harmful in IPF per PANTHER trial).',
    ['Acute exacerbation of IPF (rapid deterioration)', 'Severe hypoxemia', 'Right heart failure'],
    'Avoid exposure to lung irritants; supplemental oxygen as prescribed; pulmonary rehabilitation; palliative care discussions early; support groups.',
    'Poor prognosis; median survival 3-5 years from diagnosis. Antifibrotics slow FVC decline by ~50%. Lung transplant only curative option.',
    'Early referral to a pulmonologist and transplant center is important. Antifibrotic medications can slow progression even if they do not reverse damage.'
  ),
  resp(
    'sarcoidosis', 'Sarcoidosis', 'Sarcoidosis', 'restrictive', 'CA80',
    '~200,000 US patients; higher in African Americans and Northern Europeans',
    'Systemic granulomatous disease of unknown etiology. Non-caseating granulomas form in lungs and lymph nodes (90%) but can affect any organ. Th1-mediated immune response with macrophage activation and granuloma formation.',
    ['Dry cough', 'Dyspnea', 'Bilateral hilar lymphadenopathy', 'Erythema nodosum', 'Fatigue', 'Eye inflammation (uveitis)', 'Skin lesions'],
    'CXR staging (0-IV based on lymphadenopathy and infiltrates); tissue biopsy showing non-caseating granulomas; elevated ACE level and calcium; PFTs; exclude TB and fungal infection.',
    'Many cases resolve spontaneously. Systemic corticosteroids for symptomatic or progressive disease. Steroid-sparing agents: methotrexate, azathioprine. Anti-TNF agents for refractory cases. Treat organ-specific complications.',
    ['Cardiac sarcoidosis (arrhythmias, heart block)', 'Neurosarcoidosis', 'Severe hypercalcemia', 'Respiratory failure'],
    'Regular follow-up with PFTs and imaging; sun protection (vitamin D sensitivity); monitor calcium levels; eye exams for uveitis screening.',
    'Variable; ~50% resolve within 2 years. ~30% have chronic progressive disease. Cardiac and neurological involvement worsen prognosis. African Americans have worse outcomes.',
    'Sarcoidosis often improves on its own. Regular monitoring helps determine if and when treatment is needed.'
  ),
  resp(
    'obesity-hypoventilation', 'Obesity Hypoventilation Syndrome', 'Sindrome de Hipoventilacion por Obesidad', 'restrictive', 'CA27.0',
    '~0.4% of general population; up to 20% of obese patients with OSA',
    'BMI >=30 kg/m2 combined with chronic daytime hypercapnia (PaCO2 >45 mmHg) not explained by other conditions. Excess adipose tissue restricts chest wall compliance and diaphragm excursion. Central ventilatory drive impairment and leptin resistance contribute.',
    ['Excessive daytime sleepiness', 'Morning headaches', 'Dyspnea on exertion', 'Peripheral edema', 'Cyanosis', 'Loud snoring'],
    'ABG showing daytime hypercapnia (PaCO2 >45 mmHg); BMI >=30; serum bicarbonate elevated; polysomnography; PFTs showing restrictive pattern; exclude neuromuscular and chest wall diseases.',
    'Positive airway pressure (PAP): CPAP or bilevel PAP (BiPAP); weight loss (bariatric surgery effective); supplemental O2 if needed; avoid sedatives and opioids; phlebotomy for secondary polycythemia.',
    ['Acute hypercapnic respiratory failure', 'Cor pulmonale decompensation', 'Obtundation', 'Cardiac arrhythmias'],
    'Weight loss program; adherence to PAP therapy nightly; avoid sedating medications; sleep hygiene; regular follow-up ABGs.',
    'High mortality without treatment (~23% at 18 months). PAP therapy and weight loss significantly improve outcomes. Bariatric surgery can be curative.',
    'Using your PAP device every night is essential. Weight loss, even modest amounts, can significantly improve your breathing.'
  ),

  // ============================================================
  // INFECTIOUS (5)
  // ============================================================
  resp(
    'cap', 'Community-Acquired Pneumonia', 'Neumonia Adquirida en la Comunidad', 'infectious', 'CA40',
    '~1.5 million US hospitalizations/year; leading infectious cause of death',
    'Infection of lung parenchyma acquired outside healthcare settings. Streptococcus pneumoniae most common typical pathogen. Atypical pathogens include Mycoplasma, Chlamydophila, Legionella. Alveolar exudation and consolidation impair gas exchange.',
    ['Fever and chills', 'Productive cough (purulent sputum)', 'Pleuritic chest pain', 'Dyspnea', 'Tachycardia', 'Crackles on auscultation'],
    'CXR showing infiltrate; blood cultures; sputum Gram stain and culture; urinary antigens for Legionella and pneumococcus; procalcitonin; severity scoring (PSI/CURB-65).',
    'Outpatient: amoxicillin or doxycycline (mild); respiratory fluoroquinolone or beta-lactam + macrolide (comorbidities). Inpatient: beta-lactam + macrolide or respiratory fluoroquinolone. ICU: beta-lactam + macrolide or fluoroquinolone; add MRSA/Pseudomonas coverage if risk factors.',
    ['Sepsis', 'SpO2 <90%', 'Altered mental status', 'Multilobar involvement', 'Systolic BP <90 mmHg', 'Respiratory rate >30'],
    'Complete full antibiotic course; rest and hydrate; avoid smoking; pneumococcal and flu vaccines for prevention.',
    'Overall mortality ~1% outpatient, ~12% inpatient, ~40% ICU. Most patients recover fully in 1-3 weeks. Elderly and immunocompromised at higher risk.',
    'Finish all prescribed antibiotics even if you feel better. Pneumococcal vaccine can prevent the most common cause.'
  ),
  resp(
    'covid-long', 'Long COVID (Post-COVID Condition)', 'COVID Prolongado', 'infectious', 'RA01',
    '~10-30% of COVID-19 survivors; tens of millions globally',
    'Persistent symptoms >=3 months after SARS-CoV-2 infection. Proposed mechanisms: viral persistence, autoimmunity, endothelial dysfunction, microclot formation, autonomic dysregulation, and mitochondrial dysfunction. Multisystem involvement.',
    ['Persistent fatigue', 'Exertional dyspnea', 'Brain fog', 'Post-exertional malaise', 'Chest pain', 'Palpitations', 'Cough', 'Loss of smell/taste'],
    'Clinical diagnosis based on history and exclusion of alternatives. Pulmonary function tests; CT chest; echocardiography; 6-minute walk test; cognitive testing; autonomic function testing; blood work to exclude other causes.',
    'Multidisciplinary rehabilitation; graduated return to activity (pacing); pulmonary rehabilitation for respiratory symptoms; cognitive rehabilitation; treat comorbidities; consider low-dose naltrexone (investigational); antihistamines for mast cell activation symptoms.',
    ['New-onset cardiac symptoms', 'Severe desaturation on exertion', 'Thromboembolic events', 'Severe cognitive decline'],
    'Activity pacing (avoid boom-bust cycles); adequate rest; stress management; support groups; track symptoms to identify patterns and triggers.',
    'Majority improve gradually over 6-12 months. ~15% have persistent symptoms beyond 1 year. Vaccination appears to reduce long COVID risk. Research on targeted treatments ongoing.',
    'Pacing is key -- do not push through fatigue. Gradual, gentle increases in activity are safer than aggressive exercise early on.'
  ),
  resp(
    'tuberculosis', 'Tuberculosis (TB)', 'Tuberculosis', 'infectious', 'KA61',
    '~10 million new cases/year globally; ~25% of world population has latent TB',
    'Mycobacterium tuberculosis infection. Inhaled bacilli phagocytosed by alveolar macrophages; form granulomas (caseating). Latent TB: contained by immune system. Active TB: bacterial proliferation with caseating necrosis, cavitation, and tissue destruction.',
    ['Chronic cough (>2 weeks)', 'Hemoptysis', 'Night sweats', 'Weight loss', 'Low-grade fever', 'Fatigue', 'Upper lobe infiltrates'],
    'Tuberculin skin test (TST) or IGRA for latent TB; sputum AFB smear and culture (gold standard); GeneXpert MTB/RIF for rapid diagnosis; CXR showing upper lobe cavitary lesions; drug susceptibility testing essential.',
    'Latent: 4 months rifampin or 3 months isoniazid-rifapentine (3HP). Active: 2 months RIPE (rifampin, isoniazid, pyrazinamide, ethambutol) then 4 months RI. MDR-TB: individualized regimen with bedaquiline-based combinations. DOT recommended.',
    ['Massive hemoptysis', 'Miliary dissemination', 'TB meningitis symptoms', 'Respiratory failure'],
    'Complete full treatment course (6-9 months); practice respiratory hygiene; contact tracing and screening; adequate nutrition.',
    'Curable with proper treatment (>95% success for drug-sensitive TB). MDR-TB has lower cure rates (~80%). Untreated active TB has ~50% mortality.',
    'TB is curable, but you must complete the full course of treatment even after feeling better. Stopping early creates drug-resistant TB.'
  ),
  resp(
    'influenza-pneumonia', 'Influenza Pneumonia', 'Neumonia por Influenza', 'infectious', 'CA40.0',
    'Seasonal epidemics; ~500,000 global deaths/year from influenza complications',
    'Influenza virus directly damages respiratory epithelium, impairs mucociliary clearance, and can cause primary viral pneumonia or predispose to secondary bacterial pneumonia (S. aureus, S. pneumoniae). Cytokine storm possible in severe cases.',
    ['High fever', 'Severe myalgia', 'Nonproductive cough progressing to productive', 'Dyspnea', 'Tachypnea', 'Bilateral infiltrates', 'Rapid deterioration'],
    'Rapid influenza diagnostic test or RT-PCR; CXR showing bilateral interstitial or alveolar infiltrates; distinguish primary viral from secondary bacterial pneumonia; procalcitonin to guide antibiotics.',
    'Early oseltamivir (within 48h of symptoms, but treat even if later in severe cases); supportive care; antibiotics if secondary bacterial infection suspected; mechanical ventilation for ARDS; ECMO for refractory cases.',
    ['Respiratory failure/ARDS', 'SpO2 <90%', 'Hemodynamic instability', 'Altered consciousness', 'Rapid clinical decline'],
    'Annual influenza vaccination; hand hygiene; stay home when ill; antiviral treatment within 48 hours of symptom onset for high-risk groups.',
    'Most recover fully. Mortality higher in elderly, pregnant women, and immunocompromised. Primary viral pneumonia carries higher mortality than secondary bacterial.',
    'Annual flu vaccination is the best prevention. If you develop flu symptoms and are high-risk, seek antiviral treatment within the first 48 hours.'
  ),
  resp(
    'fungal-pneumonia', 'Fungal Pneumonia', 'Neumonia Fungica', 'infectious', 'CA40.1',
    'Endemic mycoses affect millions; invasive fungal infections rising with immunosuppression',
    'Inhalation of fungal spores causing pulmonary infection. Endemic fungi (Histoplasma, Coccidioides, Blastomyces) can infect immunocompetent hosts. Opportunistic fungi (Aspergillus, Pneumocystis, Cryptococcus) primarily affect immunocompromised. Granulomatous or necrotizing inflammation.',
    ['Chronic cough', 'Fever', 'Night sweats', 'Weight loss', 'Hemoptysis', 'Chest pain', 'Can mimic TB or malignancy'],
    'Serology and antigen testing (urine, serum); fungal cultures (slow growth); histopathology showing organisms; CT chest patterns; beta-D-glucan and galactomannan for invasive aspergillosis; PCP: elevated LDH, ground-glass on CT, induced sputum or BAL.',
    'Histoplasmosis/Blastomycosis: itraconazole (mild-moderate), amphotericin B (severe). Coccidioidomycosis: fluconazole. Aspergillosis: voriconazole. PCP: TMP-SMX + steroids if hypoxemic. Duration varies by pathogen and host immunity.',
    ['Disseminated infection', 'Severe hypoxemia', 'Hemodynamic instability', 'CNS involvement'],
    'Awareness of endemic areas; avoid disturbing soil/bird droppings in endemic regions; PCP prophylaxis for immunocompromised; complete full antifungal course.',
    'Variable; immunocompetent patients with endemic fungi generally recover well. Immunocompromised patients with invasive infections have significant mortality (20-50%).',
    'If you live in or travel to endemic areas (Ohio/Mississippi valleys for histo, Southwest US for cocci), be aware of exposure risks during soil-disturbing activities.'
  ),

  // ============================================================
  // VASCULAR (3)
  // ============================================================
  resp(
    'pulmonary-embolism', 'Pulmonary Embolism', 'Embolia Pulmonar', 'vascular', 'BB00',
    '~900,000 US cases/year; ~100,000 deaths/year',
    'Obstruction of pulmonary arterial vasculature by thrombus (usually from deep vein thrombosis). Causes V/Q mismatch, increased dead space, and right ventricular strain. Massive PE causes hemodynamic collapse from acute cor pulmonale.',
    ['Sudden dyspnea', 'Pleuritic chest pain', 'Tachycardia', 'Tachypnea', 'Hemoptysis', 'Leg swelling (concurrent DVT)', 'Syncope (massive PE)'],
    'D-dimer (rule-out if low pretest probability); CT pulmonary angiography (gold standard); V/Q scan if CT contraindicated; echocardiography for RV strain; troponin and BNP for risk stratification; Wells or Geneva score.',
    'Anticoagulation: heparin bridge to warfarin or direct oral anticoagulants (rivaroxaban, apixaban). Massive PE: systemic thrombolysis (alteplase) or catheter-directed therapy. Surgical embolectomy for refractory cases. IVC filter if anticoagulation contraindicated. Duration: 3-6 months (provoked) or indefinite (unprovoked/recurrent).',
    ['Massive PE with hemodynamic instability', 'Syncope', 'Cardiac arrest', 'Severe RV dysfunction', 'Refractory hypoxemia'],
    'Anticoagulation adherence; compression stockings for DVT; early mobilization after surgery; hydration during travel; know VTE risk factors.',
    'Overall mortality ~2-8% with treatment; massive PE mortality 25-65%. Risk of recurrence ~30% at 10 years. Post-PE syndrome affects ~50%.',
    'Sudden onset of shortness of breath or chest pain warrants immediate medical attention, especially if you have risk factors like recent surgery, immobility, or oral contraceptive use.'
  ),
  resp(
    'pulmonary-hypertension', 'Pulmonary Hypertension', 'Hipertension Pulmonar', 'vascular', 'BB01',
    '~500-1,000 per million adults; WHO Group 1 (PAH): 15-50 per million',
    'Elevated pulmonary artery pressure (mean PAP >20 mmHg at rest). Five WHO groups with different etiologies. PAH: vascular remodeling with intimal fibrosis, medial hypertrophy, and plexiform lesions. Progressive RV failure from chronic pressure overload.',
    ['Progressive exertional dyspnea', 'Fatigue', 'Chest pain', 'Syncope with exertion', 'Peripheral edema', 'Jugular venous distension', 'Loud P2 heart sound'],
    'Echocardiography (screening, estimated RVSP); right heart catheterization (definitive, required for diagnosis); V/Q scan to exclude CTEPH; PFTs; CT chest; autoimmune serologies; vasoreactivity testing for PAH.',
    'Treat underlying cause (WHO group-specific). PAH: calcium channel blockers (if vasoreactive); endothelin receptor antagonists (bosentan, ambrisentan); PDE-5 inhibitors (sildenafil, tadalafil); prostacyclin analogs (epoprostenol, treprostinil); soluble guanylate cyclase stimulators (riociguat). Combination therapy standard. Diuretics for fluid overload. Lung transplant for refractory cases.',
    ['Syncope', 'Acute RV failure', 'Hemoptysis', 'Cardiac arrhythmias', 'Refractory hypoxemia'],
    'Avoid high altitude and strenuous exertion; low-sodium diet; diuretic compliance; avoid pregnancy (high mortality in PAH); supplemental O2 as prescribed.',
    'Variable by WHO group. PAH median survival ~5-7 years with modern therapy (improved from ~2.8 years). CTEPH potentially curable with pulmonary endarterectomy.',
    'Avoid strenuous physical exertion that causes dizziness or fainting. Work closely with a pulmonary hypertension specialist for optimal treatment.'
  ),
  resp(
    'pulmonary-edema', 'Pulmonary Edema', 'Edema Pulmonar', 'vascular', 'CB01',
    'Common; present in ~75% of acute decompensated heart failure cases',
    'Abnormal accumulation of fluid in alveoli and interstitium. Cardiogenic: elevated left atrial pressure (>18 mmHg) from LV failure pushes fluid into alveoli. Non-cardiogenic (ARDS): increased capillary permeability from inflammation. Both impair gas exchange.',
    ['Acute severe dyspnea', 'Orthopnea', 'Paroxysmal nocturnal dyspnea', 'Pink frothy sputum', 'Crackles bilaterally', 'Tachycardia', 'Diaphoresis'],
    'CXR showing cephalization, Kerley B lines, peribronchial cuffing, bilateral alveolar infiltrates (bat-wing pattern); BNP/NT-proBNP elevated in cardiogenic; echocardiography; lung ultrasound (B-lines).',
    'Cardiogenic: IV furosemide, nitroglycerin, oxygen, noninvasive ventilation (CPAP/BiPAP), morphine (cautiously); treat underlying cause (ACS, valvular disease). Non-cardiogenic (ARDS): lung-protective ventilation, treat underlying cause, prone positioning, conservative fluid strategy.',
    ['Severe respiratory distress', 'SpO2 <90% despite O2', 'Hemodynamic shock', 'Altered consciousness', 'Inability to lie flat'],
    'Daily weight monitoring; low-sodium diet; fluid restriction if advised; medication adherence (diuretics, ACE inhibitors); recognize worsening symptoms early.',
    'Depends on underlying cause. Cardiogenic: good if cause treated promptly. ARDS: mortality 30-40%. Recurrence common without addressing root cause.',
    'Weigh yourself every morning. A sudden weight gain of 2-3 pounds overnight usually means fluid retention -- call your doctor promptly.'
  ),

  // ============================================================
  // PLEURAL (3)
  // ============================================================
  resp(
    'pleural-effusion', 'Pleural Effusion', 'Derrame Pleural', 'pleural', 'CB27',
    '~1.5 million new cases/year in US',
    'Abnormal fluid accumulation in pleural space. Transudative: imbalance of hydrostatic/oncotic pressures (heart failure, cirrhosis, nephrotic syndrome). Exudative: increased capillary permeability or impaired lymphatic drainage (infection, malignancy, PE, autoimmune). Light criteria distinguish types.',
    ['Dyspnea (progressive)', 'Pleuritic chest pain', 'Decreased breath sounds', 'Dullness to percussion', 'Decreased tactile fremitus', 'Dry cough'],
    'CXR (blunting of costophrenic angle, >200 mL needed); lateral decubitus film for layering; ultrasound (most sensitive); CT for complex effusions; diagnostic thoracentesis with Light criteria (protein, LDH ratios); fluid cytology, cultures, pH, glucose.',
    'Treat underlying cause. Therapeutic thoracentesis for symptomatic relief (max ~1.5L at once). Chest tube for empyema/complicated parapneumonic. Pleurodesis for recurrent malignant effusions. Indwelling pleural catheter for palliation.',
    ['Large effusion with respiratory compromise', 'Empyema (infected fluid)', 'Tension hydrothorax', 'Rapidly accumulating effusion'],
    'Monitor for recurrence; report increasing dyspnea; manage underlying condition (heart failure, liver disease); follow-up imaging.',
    'Depends on etiology. Heart failure-related: good with diuresis. Malignant: median survival 4-12 months depending on cancer type. Parapneumonic: good with early drainage.',
    'If your shortness of breath is getting gradually worse, or you notice you cannot lie flat comfortably, contact your doctor -- fluid may be reaccumulating.'
  ),
  resp(
    'pneumothorax', 'Pneumothorax', 'Neumotorax', 'pleural', 'CB23',
    'Primary spontaneous: 7-18 per 100,000/year in males; trauma-related common in ER',
    'Air in pleural space causing lung collapse. Primary spontaneous: rupture of apical subpleural blebs (tall, thin young males, smokers). Secondary: underlying lung disease (COPD, CF). Traumatic: penetrating or blunt injury. Tension: one-way valve effect with mediastinal shift and hemodynamic compromise.',
    ['Sudden sharp pleuritic chest pain', 'Acute dyspnea', 'Decreased breath sounds on affected side', 'Hyperresonance to percussion', 'Tachycardia'],
    'CXR (upright, expiratory film may help small pneumothoraces); CT chest most sensitive; ultrasound in trauma (absent lung sliding). Tension pneumothorax is a clinical diagnosis -- do not delay treatment for imaging.',
    'Small primary spontaneous (<2 cm): observation with repeat imaging. Large or symptomatic: needle aspiration or chest tube (tube thoracostomy). Tension: immediate needle decompression (2nd intercostal space, midclavicular line) then chest tube. Recurrence prevention: pleurodesis or VATS with bleb resection.',
    ['Tension pneumothorax (tracheal deviation, hypotension, JVD)', 'Bilateral pneumothorax', 'Hemodynamic instability', 'Rapidly expanding pneumothorax'],
    'Smoking cessation (reduces recurrence by 40%); avoid scuba diving; altitude precautions; avoid extreme Valsalva maneuvers.',
    'Primary spontaneous: recurrence ~30% within 2 years. Surgical intervention reduces recurrence to ~5%. Tension pneumothorax is rapidly fatal without treatment.',
    'If you have had a pneumothorax, stop smoking and avoid scuba diving. Sudden chest pain with breathlessness needs immediate medical evaluation.'
  ),
  resp(
    'empyema', 'Empyema', 'Empiema', 'pleural', 'CB27.0',
    '~65,000 US cases/year; increasing incidence',
    'Infected pleural fluid collection, usually complicating pneumonia (parapneumonic effusion progression). Stages: exudative (simple parapneumonic), fibrinopurulent (complicated with loculations), and organizing (thick peel). Common organisms: streptococci, staphylococci, anaerobes.',
    ['Persistent fever despite antibiotics', 'Pleuritic chest pain', 'Dyspnea', 'Malaise', 'Decreased breath sounds', 'Weight loss'],
    'Pleural fluid analysis: pH <7.2, glucose <40 mg/dL, LDH >1000, positive Gram stain/culture, frank pus. CT showing loculated fluid with pleural enhancement (split pleura sign). Blood cultures.',
    'Systemic antibiotics (broad-spectrum, narrowed by culture); chest tube drainage; intrapleural fibrinolytics (alteplase + DNase) for loculated collections; VATS for failed medical therapy; open decortication for organized empyema with trapped lung.',
    ['Sepsis', 'Respiratory failure', 'Bronchopleural fistula', 'Necrotizing infection'],
    'Complete full antibiotic course; adequate nutrition; follow-up imaging to confirm resolution; pulmonary rehabilitation after recovery.',
    'Mortality ~15-20%; higher in elderly and immunocompromised. Most patients recover with adequate drainage and antibiotics. Delayed treatment worsens outcomes.',
    'Persistent fever despite pneumonia treatment may indicate fluid accumulation that needs drainage. Early intervention leads to better outcomes.'
  ),

  // ============================================================
  // OCCUPATIONAL (2)
  // ============================================================
  resp(
    'asbestosis', 'Asbestosis', 'Asbestosis', 'occupational', 'CA60.0',
    'Declining in developed countries; long latency (15-20 years post-exposure)',
    'Diffuse interstitial pulmonary fibrosis from inhalation of asbestos fibers. Fibers penetrate distal airways, are phagocytosed by macrophages, and trigger chronic inflammation and fibrosis. Lower lobes predominantly affected. Asbestos bodies (ferruginous bodies) are pathognomonic.',
    ['Progressive dyspnea', 'Dry cough', 'Bibasilar crackles', 'Digital clubbing', 'Chest tightness'],
    'History of asbestos exposure; CXR showing bilateral lower lobe interstitial fibrosis and pleural plaques; HRCT (more sensitive); PFTs with restrictive pattern and reduced DLCO; BAL may show asbestos bodies.',
    'No specific cure; supportive care. Supplemental oxygen; pulmonary rehabilitation; smoking cessation (synergistic cancer risk); treat complications. Monitor for mesothelioma and lung cancer. Lung transplant in end-stage.',
    ['Respiratory failure', 'Hemoptysis (concern for malignancy)', 'Rapid decline suggesting complication'],
    'Avoid further asbestos exposure; smoking cessation; regular cancer screening (low-dose CT); annual PFTs; pneumococcal and flu vaccines.',
    'Slowly progressive. Increased risk of lung cancer (especially with smoking -- multiplicative risk) and mesothelioma. No treatment reverses established fibrosis.',
    'If you were exposed to asbestos, quitting smoking dramatically reduces your lung cancer risk. Regular screenings can catch complications early.'
  ),
  resp(
    'silicosis', 'Silicosis', 'Silicosis', 'occupational', 'CA60.1',
    'Millions exposed globally; common in mining, sandblasting, stone cutting',
    'Inhalation of crystalline silica particles (quartz). Particles phagocytosed by alveolar macrophages, which die and release inflammatory mediators. Fibrotic nodules form (whorled pattern of collagen). Progressive massive fibrosis in advanced disease. Impairs macrophage function, increasing TB susceptibility.',
    ['Progressive dyspnea', 'Chronic cough', 'Chest tightness', 'Fatigue', 'Weight loss in advanced disease'],
    'Occupational history essential; CXR showing bilateral upper lobe nodular opacities and eggshell calcification of hilar nodes (pathognomonic); HRCT; PFTs (restrictive, obstructive, or mixed); TB screening (increased susceptibility).',
    'No cure; remove from exposure. Supportive care; supplemental oxygen; pulmonary rehabilitation; treat TB if present (common comorbidity). Whole lung lavage (experimental). Lung transplant for end-stage disease.',
    ['Progressive massive fibrosis', 'Superimposed TB', 'Respiratory failure', 'Cor pulmonale'],
    'Avoid further silica exposure; use proper respiratory protection; regular TB screening; smoking cessation; pulmonary rehabilitation.',
    'Chronic simple silicosis may remain stable if exposure ceases. Accelerated and acute silicosis have poor prognosis. Increased risk of TB, COPD, and autoimmune disease.',
    'Proper respiratory protection at work is essential. Even after leaving exposure, continue regular check-ups as disease can progress.'
  ),

  // ============================================================
  // SLEEP (2)
  // ============================================================
  resp(
    'osa', 'Obstructive Sleep Apnea', 'Apnea Obstructiva del Sueno', 'sleep', 'CA26.0',
    '~1 billion worldwide; ~25% of middle-aged adults; severely underdiagnosed',
    'Recurrent upper airway collapse during sleep due to reduced pharyngeal muscle tone. Causes intermittent hypoxemia, hypercapnia, sleep fragmentation, and sympathetic surges. Associated with obesity, craniofacial anatomy, and neuromuscular factors. Leads to systemic inflammation and oxidative stress.',
    ['Loud snoring', 'Witnessed apneas', 'Excessive daytime sleepiness', 'Morning headaches', 'Nocturia', 'Unrefreshing sleep', 'Impaired concentration'],
    'STOP-BANG questionnaire for screening; polysomnography (gold standard); home sleep apnea testing (HSAT) for uncomplicated cases; AHI >=5 with symptoms or AHI >=15 regardless. Epworth Sleepiness Scale for subjective sleepiness.',
    'CPAP (first-line for moderate-severe); oral appliance/mandibular advancement device (mild-moderate); weight loss; positional therapy; upper airway surgery (UPPP, maxillomandibular advancement); hypoglossal nerve stimulation (Inspire device) for CPAP-intolerant.',
    ['Severe hypoxemia during sleep', 'Cardiac arrhythmias', 'Pulmonary hypertension', 'Drowsy driving accidents'],
    'Weight loss if overweight; sleep on side; avoid alcohol and sedatives before bed; maintain regular sleep schedule; CPAP adherence (>=4 hours/night).',
    'Untreated: increased cardiovascular risk (HTN, MI, stroke, AFib), metabolic syndrome, motor vehicle accidents, cognitive decline. Treated: near-normal life expectancy and quality of life.',
    'CPAP works only if you use it. Even 4 hours per night provides significant benefit. If the mask is uncomfortable, work with your sleep team to find a better fit.'
  ),
  resp(
    'csa', 'Central Sleep Apnea', 'Apnea Central del Sueno', 'sleep', 'CA26.1',
    'Less common than OSA; ~5-10% of sleep apnea cases; common in heart failure',
    'Reduced or absent respiratory effort during sleep due to impaired central ventilatory drive. Common in heart failure (Cheyne-Stokes respiration), opioid use, and high altitude. Failure of brainstem to send appropriate signals to respiratory muscles. Often coexists with OSA (complex/treatment-emergent CSA).',
    ['Observed pauses in breathing without snoring', 'Insomnia', 'Daytime sleepiness', 'Dyspnea', 'Paroxysmal nocturnal dyspnea', 'Poor concentration'],
    'Polysomnography showing central apneas (>=5/hour) with absent respiratory effort; distinguish from OSA (no airflow + no effort = central). Evaluate for heart failure, neurological disease, opioid use, and high-altitude exposure.',
    'Treat underlying cause (optimize heart failure therapy, reduce opioids). Adaptive servo-ventilation (ASV) for idiopathic or treatment-emergent CSA (AVOID in HFrEF per SERVE-HF trial). CPAP for some forms; supplemental O2; phrenic nerve stimulation (remede system); acetazolamide for high-altitude CSA.',
    ['Severe nocturnal desaturation', 'Cardiac arrhythmias', 'Worsening heart failure'],
    'Optimize underlying condition treatment; avoid CNS depressants; maintain good sleep hygiene; follow up regularly with sleep and cardiology teams.',
    'Depends on underlying cause. Heart failure-related CSA associated with increased mortality. Treatment of underlying condition improves CSA and overall prognosis.',
    'Central sleep apnea often improves when the underlying condition (such as heart failure) is better controlled. Work with both your heart and sleep doctors.'
  ),

  // ============================================================
  // NEOPLASTIC (2)
  // ============================================================
  resp(
    'lung-cancer', 'Lung Cancer', 'Cancer de Pulmon', 'neoplastic', 'CA30',
    'Leading cause of cancer death worldwide; ~2.2 million new cases/year globally',
    'Malignant neoplasm arising from bronchial epithelium. Non-small cell lung cancer (NSCLC, ~85%): adenocarcinoma, squamous cell, large cell. Small cell lung cancer (SCLC, ~15%): neuroendocrine origin, aggressive. Key drivers: smoking (85%), radon, asbestos, genetic mutations (EGFR, ALK, ROS1, KRAS, BRAF, PD-L1).',
    ['Persistent cough', 'Hemoptysis', 'Weight loss', 'Chest pain', 'Dyspnea', 'Hoarseness (recurrent laryngeal nerve)', 'Superior vena cava syndrome', 'Pancoast syndrome'],
    'Low-dose CT screening (annual, adults 50-80 with >=20 pack-year history); diagnostic CT and PET-CT; tissue biopsy (bronchoscopy, CT-guided, surgical); molecular/genomic testing (EGFR, ALK, ROS1, KRAS G12C, BRAF, PD-L1); staging with TNM system.',
    'NSCLC early-stage: surgical resection +/- adjuvant chemo/immunotherapy. Locally advanced: concurrent chemoradiation + durvalumab. Advanced: targeted therapy if driver mutation (osimertinib for EGFR, alectinib for ALK, sotorasib for KRAS G12C); immunotherapy (pembrolizumab, nivolumab) +/- chemo for PD-L1+. SCLC: chemo-immunotherapy (etoposide-platinum + atezolizumab); prophylactic cranial irradiation.',
    ['Massive hemoptysis', 'SVC syndrome', 'Spinal cord compression', 'Brain metastases with neurological deficits', 'Hypercalcemia of malignancy'],
    'Smoking cessation (reduces risk even after diagnosis); nutritional support; palliative care integration early; advance care planning; support groups.',
    'Overall 5-year survival ~22%. Stage I: ~60-80%. Stage IV: ~5-8%. Improving with targeted therapies and immunotherapy. SCLC 5-year survival ~7%.',
    'If you are 50-80 with a significant smoking history, ask about annual low-dose CT screening. Early detection dramatically improves survival.'
  ),
  resp(
    'mesothelioma', 'Mesothelioma', 'Mesotelioma', 'neoplastic', 'CB90',
    '~3,000 US cases/year; ~43,000 globally; linked to asbestos (80%)',
    'Malignant tumor arising from mesothelial cells of pleura (most common), peritoneum, or pericardium. Long latency (20-50 years after asbestos exposure). Three histological types: epithelioid (best prognosis), sarcomatoid (worst), biphasic. Grows as sheet-like thickening encasing the lung.',
    ['Dyspnea', 'Chest wall pain (non-pleuritic)', 'Unilateral pleural effusion', 'Weight loss', 'Fatigue', 'Chest wall mass'],
    'CT chest showing unilateral pleural thickening/effusion; PET-CT for staging; thoracoscopic biopsy (definitive); immunohistochemistry (calretinin+, CK5/6+, WT1+); distinguish from adenocarcinoma; staging by TNM (IMIG system).',
    'Multimodal approach for resectable disease: extended pleurectomy/decortication or extrapleural pneumonectomy + chemotherapy (cisplatin-pemetrexed) + radiation. Unresectable: cisplatin-pemetrexed +/- bevacizumab; nivolumab-ipilimumab (CheckMate 743). Clinical trials recommended. Palliative pleurodesis for effusions.',
    ['Respiratory failure', 'Cardiac tamponade (pericardial involvement)', 'Chest wall invasion with pain crisis'],
    'Asbestos exposure awareness; legal resources for occupational exposure claims; palliative care integration; advance care planning; clinical trial participation.',
    'Poor prognosis; median survival 12-18 months. Epithelioid type: ~18-24 months. Sarcomatoid: ~6-8 months. Multimodal therapy in specialized centers may extend survival. Immunotherapy showing promise.',
    'Seek care at a specialized mesothelioma center. Clinical trials may offer access to new treatments. Legal compensation may be available for asbestos exposure.'
  ),
];

// --- Build Record ---

export const RESP_CONDITIONS: Record<string, RespConditionEntry> = {};
for (const entry of respArray) {
  RESP_CONDITIONS[entry.id] = entry;
}

// --- Utility Functions ---

/** Get a single respiratory condition by id */
export function getRespCondition(id: string): RespConditionEntry | undefined {
  return RESP_CONDITIONS[id];
}

/** Search respiratory conditions by text across name, category, symptoms, pathophysiology */
export function searchRespConditions(query: string): RespConditionEntry[] {
  const q = query.toLowerCase();
  return respArray.filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.category.toLowerCase().includes(q) ||
    e.pathophysiology.toLowerCase().includes(q) ||
    e.symptoms.some(s => s.toLowerCase().includes(q)) ||
    e.treatment.toLowerCase().includes(q)
  );
}

/** Get all conditions for a given category */
export function getRespByCategory(category: RespCategory): RespConditionEntry[] {
  return respArray.filter(e => e.category === category);
}

/** Get total number of respiratory conditions in the database */
export function getRespConditionCount(): number {
  return respArray.length;
}
