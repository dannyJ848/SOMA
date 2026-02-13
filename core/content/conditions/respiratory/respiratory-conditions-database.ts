/**
 * Respiratory Conditions Database
 *
 * Comprehensive reference of 70+ respiratory conditions with
 * clinical summaries, patient education, and lifestyle guidance.
 * Sources: OpenStax Anatomy & Physiology, Harrison's Principles of
 * Internal Medicine (summaries), Robbins & Cotran Pathologic Basis
 * of Disease (summaries).
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type RespCategory =
  | 'obstructive'
  | 'restrictive'
  | 'infectious'
  | 'neoplastic'
  | 'vascular'
  | 'pleural'
  | 'upper-airway'
  | 'congenital'
  | 'occupational'
  | 'other';

export interface RespConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: RespCategory;
  icd11: string;
  description: string;
  riskFactors: string[];
  pathophysiology: string;
  symptoms: string[];
  diagnostics: string[];
  treatment: string;
  lifestyle: string;
  emergencySigns: string[];
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function r(
  id: string, name: string, nameEs: string,
  category: RespCategory, icd11: string, description: string,
  riskFactors: string[], pathophysiology: string,
  symptoms: string[], diagnostics: string[],
  treatment: string, lifestyle: string,
  emergencySigns: string[], patientExplanation: string,
): RespConditionEntry {
  return {
    id, name, nameEs, category, icd11, description,
    riskFactors, pathophysiology, symptoms, diagnostics,
    treatment, lifestyle, emergencySigns, patientExplanation,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const RESP_CONDITIONS: Record<string, RespConditionEntry> = {

  // ==========================================================================
  // OBSTRUCTIVE CONDITIONS (6)
  // ==========================================================================

  'asthma': r(
    'asthma', 'Asthma', 'Asma',
    'obstructive', 'CA23',
    'Chronic inflammatory airway disease with reversible bronchoconstriction, bronchial hyperresponsiveness, and mucus hypersecretion.',
    ['Atopy/allergies', 'Family history', 'Childhood respiratory infections', 'Tobacco smoke exposure', 'Occupational irritants', 'Obesity', 'Air pollution'],
    'Th2-mediated chronic airway inflammation driven by IL-4, IL-5, and IL-13. Mast cell degranulation releases histamine and leukotrienes causing bronchospasm, edema, and mucus plugging. Eosinophilic infiltration damages epithelium. Chronic inflammation leads to airway remodeling with subepithelial fibrosis and smooth muscle hypertrophy.',
    ['Episodic wheezing', 'Shortness of breath', 'Chest tightness', 'Nocturnal or early-morning cough', 'Symptoms triggered by exercise, allergens, cold air, or infections'],
    ['Spirometry showing reversible obstruction (FEV1 increase >=12% and >=200 mL post-bronchodilator)', 'FeNO >25 ppb suggests eosinophilic inflammation', 'Peak flow variability >20%', 'Methacholine challenge if spirometry normal', 'Allergy testing (skin prick or specific IgE)', 'CBC with eosinophil count', 'Chest X-ray to exclude other diagnoses'],
    'Stepwise therapy per GINA guidelines: Step 1-2 low-dose ICS +/- SABA PRN; Step 3 low-dose ICS-LABA; Step 4 medium/high-dose ICS-LABA; Step 5 add biologic (omalizumab, mepolizumab, benralizumab, dupilumab, tezepelumab). Rescue: SABA or low-dose ICS-formoterol PRN. Avoid SABA-only treatment. Acute exacerbation: systemic corticosteroids, nebulized bronchodilators, supplemental O2.',
    'Identify and avoid triggers (dust mites, mold, pet dander, smoke). Use written asthma action plan. Monitor peak flow daily. Ensure proper inhaler technique. Annual influenza vaccination. Regular exercise once controlled. Maintain healthy weight. HEPA air filters in bedroom.',
    ['Cannot speak in full sentences', 'Silent chest on auscultation', 'SpO2 <92%', 'Peak flow <25% predicted', 'Accessory muscle use or intercostal retractions', 'Cyanosis', 'Altered mental status'],
    'Asthma means the airways in your lungs are inflamed and overly sensitive. When triggered by allergens, exercise, or irritants, the airways narrow, making it hard to breathe. Think of it like squeezing a straw -- air cannot flow freely. / El asma significa que las vias respiratorias de sus pulmones estan inflamadas y son demasiado sensibles. Cuando se activan por alergenos, ejercicio o irritantes, las vias se estrechan y dificultan la respiracion.'
  ),

  'copd-emphysema': r(
    'copd-emphysema', 'COPD - Emphysema', 'EPOC - Enfisema',
    'obstructive', 'CA22.0',
    'Progressive destruction of alveolar walls leading to permanent airspace enlargement, loss of elastic recoil, and air trapping.',
    ['Cigarette smoking (primary)', 'Alpha-1 antitrypsin deficiency', 'Occupational dust/chemical exposure', 'Biomass fuel smoke', 'Air pollution', 'Aging'],
    'Cigarette smoke activates alveolar macrophages and neutrophils, releasing proteases (neutrophil elastase, MMP-9, MMP-12) that overwhelm antiprotease defenses (alpha-1 antitrypsin). Oxidative stress from smoke further inactivates antiproteases. Progressive destruction of alveolar septa leads to enlarged airspaces, reduced surface area for gas exchange, loss of elastic recoil, and expiratory airflow limitation. Centriacinar pattern (upper lobes) typical in smokers; panacinar pattern (lower lobes) in alpha-1 antitrypsin deficiency.',
    ['Progressive dyspnea on exertion', 'Barrel chest', 'Pursed-lip breathing', 'Hyperinflation', 'Decreased breath sounds', 'Weight loss in advanced disease', 'Prolonged expiration'],
    ['Post-bronchodilator spirometry FEV1/FVC <0.70', 'CT chest showing low-attenuation areas of lung destruction', 'DLCO reduced', 'ABG showing hypoxemia, possible hypercapnia', 'Alpha-1 antitrypsin level in patients <50 or with lower-lobe predominance', 'CXR hyperinflation, flattened diaphragms'],
    'Smoking cessation (most impactful intervention). Bronchodilators: LAMA (tiotropium, umeclidinium) +/- LABA (salmeterol, indacaterol). Add ICS only if eosinophils >=300 or frequent exacerbations. Pulmonary rehabilitation. Supplemental O2 if PaO2 <=55 mmHg or SpO2 <=88%. Lung volume reduction surgery for upper-lobe-predominant disease. Lung transplant in select advanced cases. Roflumilast for frequent exacerbations with chronic bronchitis phenotype.',
    'Absolute smoking cessation. Pulmonary rehabilitation exercises (endurance + strength). Annual influenza and pneumococcal vaccines. Energy conservation techniques. Nutritional support (high-calorie diet if underweight). Avoid cold air and air pollution. Pursed-lip breathing and diaphragmatic breathing techniques.',
    ['Acute exacerbation with worsening dyspnea', 'SpO2 <88% on supplemental O2', 'Altered mental status or confusion', 'Hemodynamic instability', 'Respiratory rate >30', 'Accessory muscle use with fatigue'],
    'Emphysema means the tiny air sacs in your lungs are being destroyed, like holes forming in a sponge. This makes it harder to get oxygen into your blood and to push air out. Quitting smoking is the single most important thing you can do to slow this process. / El enfisema significa que los pequenos sacos de aire de sus pulmones estan siendo destruidos. Dejar de fumar es lo mas importante que puede hacer para retrasar este proceso.'
  ),

  'copd-chronic-bronchitis': r(
    'copd-chronic-bronchitis', 'COPD - Chronic Bronchitis', 'EPOC - Bronquitis Cronica',
    'obstructive', 'CA22.1',
    'Chronic productive cough for at least 3 months in 2 consecutive years, with airway mucus hypersecretion and inflammation.',
    ['Cigarette smoking', 'Occupational dust/fume exposure', 'Air pollution', 'Recurrent respiratory infections', 'Biomass fuel smoke'],
    'Chronic irritant exposure causes goblet cell hyperplasia, submucosal mucus gland hypertrophy (Reid index >0.5), and squamous metaplasia of bronchial epithelium. Impaired mucociliary clearance and chronic neutrophilic inflammation lead to airway wall thickening, luminal mucus plugging, and recurrent infections. Small airway fibrosis contributes to irreversible airflow limitation.',
    ['Persistent productive cough', 'Copious mucoid or purulent sputum', 'Dyspnea on exertion', 'Wheezing', 'Frequent respiratory infections', 'Cyanosis in advanced cases (blue bloater phenotype)'],
    ['Spirometry FEV1/FVC <0.70', 'Clinical diagnosis: productive cough >=3 months/year for >=2 years', 'Chest CT showing airway wall thickening', 'Sputum culture during exacerbations', 'CXR may show increased bronchovascular markings', 'ABG may show chronic hypoxemia and hypercapnia'],
    'Smoking cessation. Bronchodilators (LAMA, LABA). ICS-LABA if frequent exacerbations. Roflumilast (PDE4 inhibitor) for frequent exacerbations despite maximal inhaler therapy. Mucolytics (N-acetylcysteine) may reduce exacerbation frequency. Antibiotics for acute exacerbations (amoxicillin-clavulanate, azithromycin, doxycycline). Azithromycin prophylaxis in select patients. Supplemental O2 as indicated.',
    'Smoking cessation. Adequate hydration to thin secretions. Airway clearance techniques (huffing, postural drainage). Pulmonary rehabilitation. Influenza and pneumococcal vaccination. Avoid irritants and crowded settings during flu season.',
    ['Increasing sputum purulence with fever', 'Worsening dyspnea unresponsive to rescue inhaler', 'SpO2 <90%', 'Confusion or drowsiness (CO2 retention)', 'Hemoptysis'],
    'Chronic bronchitis means the airways in your lungs are constantly inflamed and produce too much mucus, causing a persistent cough. Smoking is the main cause, and quitting is the best treatment. / La bronquitis cronica significa que las vias respiratorias estan constantemente inflamadas y producen demasiada mucosidad. Dejar de fumar es el mejor tratamiento.'
  ),

  'bronchiectasis': r(
    'bronchiectasis', 'Bronchiectasis', 'Bronquiectasias',
    'obstructive', 'CA26',
    'Permanent abnormal dilation and destruction of bronchial walls, leading to chronic infection, impaired mucus clearance, and progressive lung damage.',
    ['Prior severe pneumonia', 'Cystic fibrosis', 'Primary ciliary dyskinesia', 'Immunodeficiency (CVID, HIV)', 'Allergic bronchopulmonary aspergillosis', 'Autoimmune conditions (RA)', 'Mycobacterial infection', 'Aspiration'],
    'Vicious cycle of infection, inflammation, and airway damage. Initial insult (infection, obstruction, or immune defect) damages bronchial walls. Impaired mucociliary clearance leads to bacterial colonization (Pseudomonas aeruginosa, H. influenzae). Chronic neutrophilic inflammation releases proteases that further destroy elastic and muscular components of the bronchial wall, causing irreversible dilation.',
    ['Chronic productive cough with large volumes of purulent sputum', 'Hemoptysis (sometimes massive)', 'Recurrent pneumonia', 'Dyspnea on exertion', 'Pleuritic chest pain', 'Fatigue', 'Coarse crackles on auscultation'],
    ['HRCT chest (gold standard): airway dilation (signet ring sign), lack of tapering, visible airways in lung periphery', 'Sputum culture and sensitivity', 'Spirometry (obstructive pattern)', 'Immunoglobulin levels', 'CF sweat test in younger patients', 'Aspergillus-specific IgE and IgG', 'Ciliary function studies if indicated'],
    'Airway clearance therapy (chest physiotherapy, oscillatory PEP devices, postural drainage) is cornerstone. Inhaled hypertonic saline to mobilize secretions. Long-term macrolide (azithromycin) to reduce exacerbation frequency. Targeted antibiotics for exacerbations based on sputum cultures. Inhaled tobramycin for Pseudomonas colonization. Bronchodilators if reversible component present. Surgery (lobectomy) for localized refractory disease. Embolization for massive hemoptysis.',
    'Daily airway clearance routine (morning and evening). Adequate hydration. Regular exercise (swimming particularly beneficial). Influenza and pneumococcal vaccination. Prompt treatment of infections. Avoid smoking and secondhand smoke. Sputum monitoring for color and volume changes.',
    ['Massive hemoptysis (>300 mL in 24h)', 'Acute respiratory failure', 'High fever with increasing sputum suggesting severe exacerbation', 'New pleuritic chest pain (empyema risk)'],
    'Bronchiectasis means parts of your airways have been permanently stretched and damaged, like a worn-out garden hose that has developed bulges. Mucus gets trapped in these widened areas and breeds bacteria. Daily airway clearance exercises are essential to keep mucus moving out. / Las bronquiectasias significan que partes de sus vias respiratorias se han estirado y danado permanentemente. Los ejercicios diarios de limpieza de vias respiratorias son esenciales.'
  ),

  'alpha-1-antitrypsin-deficiency': r(
    'alpha-1-antitrypsin-deficiency', 'Alpha-1 Antitrypsin Deficiency', 'Deficiencia de Alfa-1 Antitripsina',
    'obstructive', 'CA22.2',
    'Genetic disorder causing deficient alpha-1 antitrypsin protein, leading to early-onset panacinar emphysema and liver disease.',
    ['ZZ or SZ genotype (autosomal codominant)', 'Cigarette smoking (accelerates lung destruction dramatically)', 'Occupational dust exposure', 'Northern European ancestry'],
    'Alpha-1 antitrypsin (AAT), produced by the liver, is the primary inhibitor of neutrophil elastase in the lungs. In ZZ homozygotes, misfolded AAT protein polymerizes in hepatocytes (causing liver disease) and serum levels fall below protective threshold (<57 mg/dL). Unopposed neutrophil elastase destroys alveolar walls, producing panacinar emphysema predominantly in lung bases. Smoking dramatically accelerates destruction.',
    ['Early-onset dyspnea (age 30-50)', 'Basilar-predominant emphysema', 'Family history of early COPD or liver disease', 'Panniculitis (rare skin manifestation)', 'Hepatomegaly or cirrhosis', 'Bronchiectasis features'],
    ['Serum alpha-1 antitrypsin level (<57 mg/dL diagnostic)', 'AAT phenotyping (Pi typing) or genotyping (identifies ZZ, SZ, MZ)', 'Spirometry (obstructive pattern)', 'CT chest showing basilar-predominant panacinar emphysema', 'Liver function tests', 'Liver biopsy showing PAS-positive diastase-resistant globules in hepatocytes'],
    'IV augmentation therapy (pooled human AAT, 60 mg/kg weekly) slows FEV1 decline. Standard COPD therapies (bronchodilators, ICS if indicated, pulmonary rehabilitation). Absolute smoking avoidance. Lung transplant for end-stage disease. Liver transplant for end-stage liver disease (curative for deficiency). Gene therapy under investigation.',
    'Absolute smoking avoidance. Avoid occupational dust and fume exposure. Pulmonary rehabilitation. Genetic counseling for family members. Hepatitis A and B vaccination to protect liver. Moderate alcohol use or abstinence. Regular liver and lung function monitoring.',
    ['Rapid FEV1 decline despite augmentation', 'Signs of liver failure (jaundice, ascites)', 'Acute respiratory failure', 'Massive hemoptysis'],
    'Alpha-1 antitrypsin deficiency is a genetic condition where your body does not make enough of a protective protein for your lungs. Without this protein, enzymes from white blood cells damage lung tissue over time. Smoking makes this dramatically worse. IV infusion therapy can help replace the missing protein. / La deficiencia de alfa-1 antitripsina es una condicion genetica donde su cuerpo no produce suficiente proteina protectora para los pulmones.'
  ),

  'bronchiolitis': r(
    'bronchiolitis', 'Bronchiolitis', 'Bronquiolitis',
    'obstructive', 'CA40',
    'Acute viral infection of the bronchioles, primarily affecting infants and young children, causing wheezing and respiratory distress.',
    ['Age <2 years (peak 2-6 months)', 'Prematurity', 'Congenital heart disease', 'Immunodeficiency', 'No breastfeeding', 'Daycare attendance', 'Tobacco smoke exposure', 'Winter seasonality'],
    'Respiratory syncytial virus (RSV, ~75%) or other viruses (rhinovirus, metapneumovirus, parainfluenza) infect bronchiolar epithelium. Epithelial necrosis, peribronchiolar inflammation, and mucus plugging cause small airway obstruction. Air trapping, atelectasis, and ventilation-perfusion mismatch lead to hypoxemia. Immune response (not the virus itself) drives most pathology.',
    ['Rhinorrhea and cough (initial)', 'Progressive wheezing', 'Tachypnea', 'Nasal flaring and intercostal retractions', 'Poor feeding', 'Apnea (especially in premature infants)', 'Low-grade fever', 'Fine crackles on auscultation'],
    ['Clinical diagnosis based on history and physical exam', 'Pulse oximetry (key for management)', 'RSV rapid antigen test or PCR (for cohorting, not required for diagnosis)', 'CXR only if diagnosis uncertain (shows hyperinflation, peribronchial thickening)', 'Blood gas only if severe respiratory distress'],
    'Primarily supportive: supplemental O2 if SpO2 <90% (AAP guideline), nasal suctioning, ensure adequate hydration (oral or IV). High-flow nasal cannula for moderate-severe cases. CPAP or mechanical ventilation for respiratory failure. Nebulized hypertonic saline (3%) may help admitted patients. Bronchodilators, corticosteroids, and antibiotics are NOT routinely recommended. Palivizumab (anti-RSV monoclonal) for high-risk infant prophylaxis. Nirsevimab now available for all infants in first RSV season.',
    'Frequent gentle nasal suctioning. Upright positioning. Small frequent feeds. Adequate hydration. Hand hygiene to prevent spread. Avoid smoke exposure. Monitor for worsening breathing or poor feeding.',
    ['Apnea episodes', 'Severe retractions or grunting', 'SpO2 <90% persistently', 'Poor feeding or dehydration', 'Lethargy or decreased responsiveness', 'Respiratory rate >70 in infants'],
    'Bronchiolitis is a common lung infection in babies caused by a virus (usually RSV). It inflames the smallest airways, causing wheezing and difficulty breathing. Most cases are mild and resolve with supportive care at home. Watch for signs of worsening such as rapid breathing, poor feeding, or blue lips. / La bronquiolitis es una infeccion pulmonar comun en bebes causada por un virus. La mayoria de los casos se resuelven con cuidados de apoyo en casa.'
  ),

  // ==========================================================================
  // INFECTIOUS CONDITIONS (12)
  // ==========================================================================

  'pneumonia-cap': r(
    'pneumonia-cap', 'Community-Acquired Pneumonia (CAP)', 'Neumonia Adquirida en la Comunidad (NAC)',
    'infectious', 'CA40.0',
    'Acute infection of the lung parenchyma acquired outside the hospital, the leading infectious cause of death worldwide.',
    ['Age >65', 'Smoking', 'COPD or chronic lung disease', 'Diabetes', 'Heart failure', 'Immunosuppression', 'Alcoholism', 'Recent viral URI', 'Dysphagia/aspiration risk'],
    'Pathogens (Streptococcus pneumoniae most common, also Haemophilus influenzae, Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella, respiratory viruses) reach alveoli via inhalation or microaspiration. Alveolar macrophage defenses overwhelmed. Inflammatory exudate fills alveoli (consolidation), impairing gas exchange. Lobar pattern: entire lobe consolidated. Bronchopneumonia: patchy peribronchial pattern. Atypical: interstitial inflammation.',
    ['Cough (productive or dry)', 'Fever and chills', 'Dyspnea', 'Pleuritic chest pain', 'Tachypnea', 'Crackles/rales on auscultation', 'Dullness to percussion over consolidation', 'Elderly may present with confusion and without fever'],
    ['Chest X-ray (infiltrate confirms diagnosis)', 'CBC with differential', 'BMP, hepatic panel', 'Blood cultures (before antibiotics if admitted)', 'Sputum Gram stain and culture', 'Pneumococcal and Legionella urinary antigens', 'Procalcitonin to guide antibiotic therapy', 'CURB-65 or PSI/PORT score for severity assessment', 'CT chest if CXR equivocal'],
    'Outpatient (healthy, no comorbidities): amoxicillin or doxycycline. Outpatient (comorbidities): amoxicillin-clavulanate or cephalosporin + macrolide, or respiratory fluoroquinolone. Inpatient: beta-lactam (ceftriaxone, ampicillin-sulbactam) + macrolide (azithromycin), or respiratory fluoroquinolone alone. ICU: beta-lactam + macrolide (or fluoroquinolone); add anti-MRSA (vancomycin/linezolid) and anti-Pseudomonal coverage if risk factors. Duration: 5-7 days minimum, continue until afebrile 48-72h and clinically improving.',
    'Smoking cessation. Pneumococcal vaccination (PCV20 or PCV15 + PPSV23). Annual influenza vaccination. Good oral hygiene. Aspiration precautions if dysphagia. Hand hygiene. Adequate nutrition and hydration during recovery. Gradual return to activity.',
    ['Respiratory rate >30', 'SpO2 <90%', 'Systolic BP <90 mmHg', 'Multilobar infiltrates', 'Confusion', 'BUN >20 mg/dL', 'Need for mechanical ventilation', 'Septic shock'],
    'Community-acquired pneumonia is a lung infection caught outside the hospital, most commonly from bacteria. It causes inflammation and fluid buildup in the air sacs, making it hard to breathe. Most people recover fully with antibiotics, but it can be serious in older adults and those with other health conditions. Vaccination against pneumococcus and flu is key prevention. / La neumonia adquirida en la comunidad es una infeccion pulmonar. La mayoria se recupera con antibioticos, pero puede ser grave en adultos mayores.'
  ),

  'pneumonia-hap': r(
    'pneumonia-hap', 'Hospital-Acquired Pneumonia (HAP)', 'Neumonia Adquirida en el Hospital (NAH)',
    'infectious', 'CA40.1',
    'Pneumonia developing >=48 hours after hospital admission, not incubating at time of admission. Includes ventilator-associated pneumonia (VAP).',
    ['Mechanical ventilation (greatest risk)', 'Prolonged hospitalization', 'Prior antibiotic use', 'ICU stay', 'Supine positioning', 'Nasogastric tube', 'Immunosuppression', 'Recent surgery', 'Altered consciousness'],
    'Hospital-acquired organisms (MRSA, Pseudomonas aeruginosa, Acinetobacter, Klebsiella, Enterobacter) colonize the oropharynx and are aspirated into the lower respiratory tract. Endotracheal tubes bypass natural defenses and provide direct conduit for bacteria. Biofilm formation on ETT surface harbors organisms. Impaired cough, sedation, and mucociliary dysfunction in hospitalized patients further increase risk.',
    ['New or worsening fever', 'Purulent sputum or increased secretions', 'New or progressive infiltrate on CXR', 'Leukocytosis or leukopenia', 'Worsening oxygenation', 'New-onset confusion in elderly'],
    ['Chest X-ray or CT showing new infiltrate', 'Blood cultures', 'Endotracheal aspirate or BAL cultures (quantitative)', 'Sputum Gram stain and culture', 'Procalcitonin', 'CPIS (Clinical Pulmonary Infection Score) for VAP', 'Local antibiogram for resistance patterns'],
    'Empiric broad-spectrum coverage based on local antibiograms. Standard: piperacillin-tazobactam or cefepime or meropenem. Add MRSA coverage (vancomycin or linezolid) if risk factors or high local prevalence. De-escalate based on culture results. Duration: 7 days typically. VAP bundles: head-of-bed elevation 30-45 degrees, daily sedation interruption, DVT and peptic ulcer prophylaxis, daily assessment for extubation, oral chlorhexidine.',
    'Early mobilization. Aspiration precautions. Oral care every 4-6 hours. Head-of-bed elevation. Minimize sedation. Early removal of invasive devices. Hand hygiene compliance.',
    ['Septic shock', 'Acute respiratory failure requiring escalation of respiratory support', 'Bacteremia', 'Empyema development', 'Multiorgan dysfunction'],
    'Hospital-acquired pneumonia is a lung infection that develops during a hospital stay, often caused by more resistant bacteria than typical pneumonia. Patients on breathing machines are at highest risk. Treatment requires stronger antibiotics, and prevention focuses on careful hygiene and early removal of breathing tubes. / La neumonia hospitalaria es una infeccion pulmonar que se desarrolla durante una estancia hospitalaria, causada por bacterias mas resistentes.'
  ),

  'pneumonia-aspiration': r(
    'pneumonia-aspiration', 'Aspiration Pneumonia', 'Neumonia por Aspiracion',
    'infectious', 'CA40.2',
    'Lung infection caused by inhalation of oropharyngeal or gastric contents into the lower respiratory tract.',
    ['Dysphagia (stroke, neuromuscular disease)', 'Altered consciousness (sedation, alcohol, anesthesia)', 'GERD', 'Esophageal disorders', 'Poor dentition', 'Elderly/nursing home residents', 'Seizures', 'Endotracheal intubation'],
    'Aspiration of colonized oropharyngeal secretions or gastric contents introduces bacteria (often mixed anaerobes and aerobes) into dependent lung segments. Chemical pneumonitis from gastric acid (Mendelson syndrome) precedes bacterial superinfection. Aspiration localizes to posterior segments of upper lobes (recumbent) or basilar segments of lower lobes (upright). Mixed anaerobic-aerobic infection may progress to necrotizing pneumonia or abscess.',
    ['Cough after eating or drinking', 'Foul-smelling sputum', 'Fever', 'Dyspnea', 'Pleuritic chest pain', 'Weight loss', 'Crackles in dependent lung zones', 'May have indolent presentation'],
    ['CXR showing infiltrate in dependent lung segments', 'CT chest (more sensitive, may show cavity/abscess)', 'Sputum culture (anaerobes difficult to culture)', 'Blood cultures', 'Swallow evaluation (speech-language pathology)', 'Modified barium swallow or FEES'],
    'Antibiotics: amoxicillin-clavulanate, or clindamycin if penicillin-allergic, or piperacillin-tazobactam for severe cases. Cover anaerobes. Meropenem for hospital-acquired aspiration. Duration 7-14 days (longer if abscess). Treat underlying cause of aspiration. NPO and IV fluids if active aspiration risk. Speech therapy for swallow rehabilitation.',
    'Swallowing therapy and safe swallow strategies. Upright positioning during and 30 minutes after meals. Thickened liquids or modified diet texture as recommended. Good oral hygiene and dental care. Avoid sedating medications when possible. Elevate head of bed.',
    ['Lung abscess formation', 'Empyema', 'Respiratory failure', 'Sepsis', 'Recurrent aspiration events'],
    'Aspiration pneumonia occurs when food, drink, or saliva goes down the wrong pipe into the lungs instead of the stomach, causing infection. People with swallowing problems or decreased consciousness are most at risk. Speech therapists can help with safe swallowing techniques. / La neumonia por aspiracion ocurre cuando alimentos o liquidos entran a los pulmones en lugar del estomago, causando una infeccion.'
  ),

  'pneumonia-viral': r(
    'pneumonia-viral', 'Viral Pneumonia', 'Neumonia Viral',
    'infectious', 'CA40.3',
    'Lung parenchymal infection caused by viruses, ranging from mild illness to severe ARDS.',
    ['Age extremes (<5 or >65)', 'Immunosuppression', 'Chronic cardiopulmonary disease', 'Pregnancy', 'Influenza season', 'Close-contact settings', 'Lack of vaccination'],
    'Respiratory viruses (influenza A/B, RSV, SARS-CoV-2, parainfluenza, adenovirus, hMPV) infect respiratory epithelium, causing direct cytopathic damage and triggering intense inflammatory response. Diffuse alveolar damage with hyaline membrane formation in severe cases. Interstitial and alveolar edema impair gas exchange. Secondary bacterial superinfection is common. COVID-19 additionally causes endotheliitis, microvascular thrombosis, and cytokine storm.',
    ['Dry cough', 'Fever and myalgias', 'Dyspnea (progressive in severe cases)', 'Headache', 'Fatigue', 'Bilateral interstitial infiltrates on imaging', 'GI symptoms (some viruses)', 'Loss of taste/smell (COVID-19)'],
    ['CXR or CT chest (bilateral interstitial/ground-glass opacities)', 'Respiratory viral panel (multiplex PCR)', 'Influenza rapid antigen or PCR', 'SARS-CoV-2 PCR or rapid antigen', 'CBC (lymphopenia common)', 'Procalcitonin (low helps distinguish from bacterial)', 'D-dimer, ferritin, CRP, LDH (COVID-19 severity markers)'],
    'Influenza: oseltamivir (within 48h of symptom onset), baloxavir. COVID-19: nirmatrelvir-ritonavir (Paxlovid) for high-risk outpatients; dexamethasone + remdesivir for hospitalized hypoxic patients; tocilizumab or baricitinib for severe inflammation. RSV: ribavirin in select immunocompromised patients. Supportive care: supplemental O2, IV fluids, antipyretics. Antibiotics only if bacterial superinfection suspected. Prone positioning and lung-protective ventilation for ARDS.',
    'Annual influenza vaccination. COVID-19 vaccination and boosters. Hand hygiene and respiratory etiquette. Adequate rest during recovery. Gradual return to activity. Monitor for worsening symptoms days 5-10.',
    ['Rapidly progressive dyspnea', 'SpO2 <94% on room air', 'Respiratory rate >30', 'Bilateral infiltrates with increasing O2 requirements', 'Hemodynamic instability', 'Altered mental status'],
    'Viral pneumonia is a lung infection caused by viruses like influenza or COVID-19. Unlike bacterial pneumonia, antibiotics do not help. Specific antiviral medications are available for some viruses. Most cases are mild but can become severe in older adults and those with weakened immune systems. Vaccination is the best prevention. / La neumonia viral es una infeccion pulmonar causada por virus. A diferencia de la bacteriana, los antibioticos no ayudan. La vacunacion es la mejor prevencion.'
  ),

  'pneumonia-fungal': r(
    'pneumonia-fungal', 'Fungal Pneumonia', 'Neumonia Fungica',
    'infectious', 'CA40.4',
    'Pulmonary infection caused by fungi, including endemic mycoses and opportunistic infections in immunocompromised patients.',
    ['Immunosuppression (HIV/AIDS, transplant, chemotherapy)', 'Geographic exposure (histoplasmosis: Ohio/Mississippi River valleys; coccidioidomycosis: Southwest US; blastomycosis: Great Lakes)', 'CD4 <200 (Pneumocystis jirovecii)', 'Corticosteroid use', 'Diabetes', 'Spelunking or excavation (Histoplasma)', 'Organ transplant recipients'],
    'Endemic fungi (Histoplasma, Coccidioides, Blastomyces) cause granulomatous infection in immunocompetent hosts via inhaled spores. Cell-mediated immunity normally contains infection. Opportunistic fungi (Aspergillus, Pneumocystis, Cryptococcus, Mucor) cause severe invasive disease in immunocompromised patients. Pneumocystis jirovecii causes diffuse alveolar damage with foamy eosinophilic exudate filling alveoli. Aspergillus causes angioinvasive disease with hemorrhagic infarction in neutropenic patients.',
    ['Cough (often dry in PCP)', 'Fever', 'Night sweats', 'Weight loss', 'Dyspnea (insidious onset in PCP)', 'Hemoptysis (Aspergillus)', 'Skin lesions (Blastomyces, Coccidioides)', 'Chest pain'],
    ['CXR and CT chest (varied patterns: cavitary, nodular, diffuse ground-glass in PCP)', 'Fungal cultures (blood, sputum, BAL)', 'Histoplasma/Coccidioides serology and urine antigen', 'Beta-D-glucan (elevated in PCP and many fungi)', 'Galactomannan (Aspergillus)', 'BAL with silver stain or PCR for Pneumocystis', 'Biopsy with GMS/PAS staining', 'Cryptococcal antigen'],
    'Histoplasmosis: itraconazole (mild-moderate), amphotericin B then itraconazole (severe). Coccidioidomycosis: fluconazole or itraconazole; amphotericin B for severe/disseminated. Blastomycosis: itraconazole (mild-moderate), amphotericin B (severe). PCP: TMP-SMX (first-line) + prednisone if PaO2 <70; alternatives include pentamidine, atovaquone, dapsone-TMP. Aspergillosis: voriconazole (first-line), isavuconazole, or amphotericin B. PCP prophylaxis: TMP-SMX for CD4 <200.',
    'Avoid high-risk exposures (caves, construction sites in endemic areas). Wear N95 masks in high-risk environments. PCP prophylaxis adherence for immunocompromised patients. ART adherence for HIV patients. Monitor for drug interactions with azole antifungals.',
    ['Rapidly progressive respiratory failure', 'Disseminated disease (meningitis, skin, bone)', 'Hemoptysis from angioinvasive aspergillosis', 'Severe hypoxemia in PCP', 'Mucormycosis with tissue necrosis'],
    'Fungal pneumonia is a lung infection caused by fungi. Some fungi live in specific geographic areas and anyone can be infected by breathing in spores. Others mainly affect people with weakened immune systems. Treatment requires antifungal medications, sometimes for months. / La neumonia fungica es una infeccion pulmonar causada por hongos. El tratamiento requiere medicamentos antimicoticos, a veces durante meses.'
  ),

  'tuberculosis': r(
    'tuberculosis', 'Tuberculosis (TB)', 'Tuberculosis (TB)',
    'infectious', 'KA61.0',
    'Chronic granulomatous infection caused by Mycobacterium tuberculosis, primarily affecting the lungs, with worldwide impact.',
    ['Close contact with active TB', 'HIV coinfection (highest risk)', 'Immigration from endemic areas', 'Homelessness', 'Incarceration', 'Immunosuppression (TNF inhibitors, transplant)', 'Healthcare workers', 'Diabetes', 'Malnutrition', 'Substance abuse'],
    'Inhaled M. tuberculosis bacilli reach alveoli and are phagocytosed by alveolar macrophages. Bacteria survive intracellularly by preventing phagosome-lysosome fusion. Cell-mediated immunity (CD4+ T cells, macrophages) forms caseating granulomas (Ghon focus in lung, Ghon complex with hilar lymph node). Latent TB: contained within granulomas. Active TB: granulomas liquefy, creating cavities with high bacillary burden. Cavitary disease is highly infectious. Hematogenous spread causes miliary TB.',
    ['Chronic cough >3 weeks', 'Hemoptysis', 'Night sweats', 'Fever (often low-grade)', 'Unintentional weight loss', 'Fatigue', 'Anorexia', 'Upper lobe cavitary lesions on imaging'],
    ['Tuberculin skin test (TST/Mantoux)', 'Interferon-gamma release assay (IGRA: QuantiFERON, T-SPOT)', 'CXR (upper lobe infiltrates, cavitation, miliary pattern)', 'Sputum AFB smear (3 morning specimens)', 'Sputum mycobacterial culture (gold standard, 2-8 weeks)', 'GeneXpert MTB/RIF (rapid PCR, also detects rifampin resistance)', 'CT chest for complex cases', 'Biopsy showing caseating granulomas'],
    'Active TB (drug-susceptible): RIPE regimen -- Rifampin + Isoniazid + Pyrazinamide + Ethambutol for 2 months (intensive phase), then Rifampin + Isoniazid for 4 months (continuation phase). Total 6 months. Directly observed therapy (DOT) recommended. MDR-TB: individualized regimen with bedaquiline, pretomanid, linezolid (BPaL regimen). Latent TB: isoniazid 9 months, or rifampin 4 months, or isoniazid-rifapentine 12 weekly doses (3HP).',
    'Medication adherence is critical (DOT if needed). Respiratory isolation until non-infectious (negative AFB smears on treatment). Contact tracing. Nutritional support. Avoid alcohol (hepatotoxicity risk with TB meds). Monitor liver function during treatment. Pyridoxine (B6) supplementation with isoniazid.',
    ['Massive hemoptysis', 'Severe weight loss and malnutrition', 'Miliary spread (disseminated TB)', 'TB meningitis symptoms (headache, confusion, neck stiffness)', 'Respiratory failure', 'Drug-resistant TB without appropriate treatment'],
    'Tuberculosis is a bacterial infection that primarily affects the lungs. It spreads through the air when an infected person coughs. Many people carry the TB germ without being sick (latent TB). Active TB requires 6 months of multiple antibiotics taken consistently. TB is curable with proper treatment. / La tuberculosis es una infeccion bacteriana que afecta los pulmones. Se transmite por el aire. La TB activa requiere 6 meses de antibioticos tomados de manera constante. Es curable con tratamiento adecuado.'
  ),

  'ntm-infection': r(
    'ntm-infection', 'Non-Tuberculous Mycobacterial (NTM) Infection', 'Infeccion por Micobacterias No Tuberculosas',
    'infectious', 'KA62',
    'Pulmonary infection caused by environmental mycobacteria other than M. tuberculosis, increasingly recognized worldwide.',
    ['Structural lung disease (bronchiectasis, COPD, prior TB)', 'Thin body habitus', 'Female sex', 'Age >50', 'Immunosuppression', 'Pectus excavatum or scoliosis', 'GERD with aspiration', 'Cystic fibrosis'],
    'NTM species (M. avium complex most common, also M. kansasii, M. abscessus) are environmental organisms found in soil and water. They do not spread person-to-person. Infection occurs via inhalation or aspiration. Two patterns: fibrocavitary (upper lobe cavities, similar to TB, in older males with COPD) and nodular bronchiectatic (middle lobe/lingula nodules and bronchiectasis, in thin elderly women -- Lady Windermere syndrome). Biofilm formation aids persistence.',
    ['Chronic cough', 'Fatigue', 'Low-grade fever', 'Night sweats', 'Weight loss', 'Hemoptysis', 'Dyspnea', 'Nodular infiltrates on imaging'],
    ['ATS/IDSA diagnostic criteria: clinical + radiographic + microbiologic', 'CT chest (nodular bronchiectatic or fibrocavitary pattern)', 'Sputum AFB cultures (need 2+ positive cultures from sputum or 1 from BAL)', 'AFB smear', 'Species identification and susceptibility testing', 'Rule out M. tuberculosis'],
    'MAC: azithromycin (or clarithromycin) + ethambutol + rifampin. Add injectable aminoglycoside (amikacin) for cavitary disease. M. kansasii: isoniazid + rifampin + ethambutol. M. abscessus: most difficult -- IV amikacin + imipenem or cefoxitin + oral macrolide (induction), then oral macrolide-based maintenance. Treatment duration: 12 months beyond culture conversion (often 18+ months total). Surgery (lobectomy) for localized refractory disease.',
    'Airway clearance techniques daily. Maintain body weight with adequate nutrition. Avoid hot tubs and shower aerosols if susceptible. Medication adherence through long treatment course. Regular monitoring of hearing (aminoglycosides) and vision (ethambutol). Support groups for prolonged treatment.',
    ['Progressive respiratory failure', 'Disseminated disease in immunocompromised', 'Drug-resistant NTM with treatment failure', 'Massive hemoptysis'],
    'NTM infection is a lung infection caused by bacteria found in the environment, not spread from person to person. Unlike TB, it requires much longer treatment, often 18 months or more with multiple antibiotics. Patience and strict medication adherence are essential for cure. / La infeccion por MNT es una infeccion pulmonar causada por bacterias del medio ambiente. Requiere tratamiento prolongado de 18 meses o mas.'
  ),

  'pertussis': r(
    'pertussis', 'Pertussis (Whooping Cough)', 'Tos Ferina (Pertussis)',
    'infectious', 'KA35',
    'Highly contagious respiratory infection caused by Bordetella pertussis, characterized by severe paroxysmal coughing fits.',
    ['Incomplete or waning vaccination', 'Close contact with infected person', 'Infants <6 months (highest morbidity/mortality)', 'Pregnancy (risk to neonate)', 'Healthcare workers'],
    'Bordetella pertussis adheres to ciliated respiratory epithelium via filamentous hemagglutinin and pertactin. Pertussis toxin causes lymphocytosis by inhibiting Gi protein signaling. Tracheal cytotoxin damages ciliated epithelium, impairing mucociliary clearance. Three phases: catarrhal (1-2 weeks, most infectious, URI symptoms), paroxysmal (2-8 weeks, severe coughing fits with inspiratory whoop, posttussive vomiting), and convalescent (weeks to months, gradual resolution).',
    ['Severe paroxysmal coughing fits', 'Inspiratory whoop (classic in children)', 'Posttussive vomiting or syncope', 'Cough lasting >2 weeks', 'Infants: apnea, cyanosis, poor feeding', 'Adults: prolonged cough without whoop'],
    ['Nasopharyngeal swab PCR for B. pertussis (most sensitive)', 'Nasopharyngeal culture on Bordet-Gengou or Regan-Lowe medium', 'CBC showing marked lymphocytosis (up to 60,000/uL)', 'Pertussis serology (IgG anti-PT) in later stages', 'CXR may show perihilar infiltrates or atelectasis'],
    'Macrolide antibiotics: azithromycin (5 days) or clarithromycin (7 days) or erythromycin (14 days). TMP-SMX if macrolide-intolerant. Antibiotics given in catarrhal phase shorten illness; given in paroxysmal phase primarily reduce transmission. Supportive care: gentle suctioning in infants, O2 supplementation, IV fluids if unable to feed. ICU admission for infants with apnea or respiratory failure. Post-exposure prophylaxis for close contacts.',
    'Vaccination: DTaP series for children, Tdap booster for adolescents/adults and every pregnancy (27-36 weeks). Isolate for 5 days after starting antibiotics. Hand hygiene. Protect infants through cocooning (vaccinate all household contacts). Monitor infants closely for apnea.',
    ['Apnea in infants', 'Cyanosis during coughing paroxysms', 'Inability to feed or dehydration', 'Seizures', 'Pneumonia', 'Severe leukocytosis >100,000 (exchange transfusion may be needed)', 'Respiratory failure'],
    'Whooping cough is a highly contagious bacterial infection that causes severe coughing fits. The cough can last for weeks to months. Vaccination is the best prevention and is especially important during pregnancy to protect newborns. / La tos ferina es una infeccion bacteriana altamente contagiosa que causa ataques severos de tos. La vacunacion es la mejor prevencion, especialmente durante el embarazo.'
  ),

  'lung-abscess': r(
    'lung-abscess', 'Lung Abscess', 'Absceso Pulmonar',
    'infectious', 'CA41',
    'Localized area of suppurative necrosis within the lung parenchyma, forming a cavity containing purulent material.',
    ['Aspiration (alcoholism, seizures, altered consciousness)', 'Poor dentition/periodontal disease', 'Immunosuppression', 'Bronchial obstruction (tumor)', 'Septic emboli (endocarditis, IV drug use)', 'Necrotizing pneumonia'],
    'Aspiration of oropharyngeal anaerobic bacteria (Fusobacterium, Peptostreptococcus, Prevotella, Bacteroides) is the most common mechanism. Initial pneumonitis progresses to tissue necrosis over 1-2 weeks. Liquefactive necrosis creates a cavity that may drain into a bronchus (air-fluid level on imaging). Hematogenous seeding from distant infection (septic emboli) causes multiple abscesses. Secondary abscess may complicate necrotizing pneumonia or bronchial obstruction.',
    ['Indolent cough with foul-smelling purulent sputum', 'Fever and night sweats', 'Weight loss', 'Hemoptysis', 'Pleuritic chest pain', 'Putrid breath', 'Clubbing (chronic cases)'],
    ['CXR showing cavitary lesion with air-fluid level', 'CT chest (better defines cavity, wall thickness, location)', 'Sputum culture (anaerobes difficult to grow)', 'Blood cultures', 'Bronchoscopy to exclude obstructing lesion and obtain cultures', 'CBC showing leukocytosis'],
    'Prolonged antibiotic therapy: clindamycin, or amoxicillin-clavulanate, or ampicillin-sulbactam for 4-6 weeks (until cavity resolves or becomes stable small residual). IV initially then step down to oral. Bronchoscopy if obstruction suspected. Percutaneous drainage for large abscesses (>6 cm) or those failing medical therapy. Surgical resection (lobectomy) for refractory cases, massive hemoptysis, or suspected malignancy.',
    'Address underlying aspiration risk. Dental care and oral hygiene. Nutrition support. Avoid alcohol abuse. Completion of full antibiotic course is essential. Follow-up imaging to confirm resolution.',
    ['Massive hemoptysis', 'Rupture into pleural space (empyema)', 'Respiratory failure', 'Sepsis', 'Failure to improve after 7-10 days of appropriate antibiotics'],
    'A lung abscess is a pocket of pus that forms inside the lung, usually after bacteria from the mouth are breathed into the lungs. It requires weeks of antibiotics to heal. Good dental hygiene and treating swallowing problems help prevent recurrence. / Un absceso pulmonar es una bolsa de pus dentro del pulmon. Requiere semanas de antibioticos. La buena higiene dental ayuda a prevenirlo.'
  ),

  'aspergilloma': r(
    'aspergilloma', 'Aspergilloma (Fungus Ball)', 'Aspergiloma (Bola de Hongos)',
    'infectious', 'CA41.1',
    'Mass of Aspergillus hyphae colonizing a pre-existing lung cavity, without tissue invasion.',
    ['Pre-existing lung cavity (TB, sarcoidosis, bronchiectasis, emphysema)', 'History of prior pulmonary TB (most common)', 'Immunocompetent status (non-invasive form)'],
    'Aspergillus fumigatus spores colonize a pre-existing pulmonary cavity. Fungal hyphae proliferate within the cavity, forming a mobile ball (fungus ball) of hyphae, fibrin, and inflammatory debris. The fungus does not invade surrounding tissue (distinguishes from invasive aspergillosis). Erosion of bronchial blood vessels within the cavity wall causes hemoptysis, which can be life-threatening.',
    ['Often asymptomatic (incidental finding)', 'Hemoptysis (most common symptom, can be massive)', 'Chronic cough', 'Mild constitutional symptoms', 'Weight loss (if underlying chronic lung disease)'],
    ['CXR showing round mass within a cavity (Monod sign: crescent of air around mass)', 'CT chest (mobile intracavitary mass, dependent positioning changes with patient position)', 'Aspergillus-specific IgG (elevated in >90%)', 'Sputum culture for Aspergillus', 'Bronchoscopy if diagnosis uncertain'],
    'Observation if asymptomatic. For hemoptysis: bronchial artery embolization (acute massive hemoptysis). Surgical resection (lobectomy) is definitive treatment for recurrent or life-threatening hemoptysis if patient has adequate pulmonary reserve. Antifungal therapy (itraconazole, voriconazole) has limited efficacy for simple aspergilloma but used for chronic pulmonary aspergillosis. Intracavitary instillation of amphotericin B (rarely used). Tranexamic acid for mild hemoptysis.',
    'Avoid environments with high mold exposure. Monitor for hemoptysis. Regular follow-up imaging. Address underlying lung disease. Report any hemoptysis promptly.',
    ['Massive hemoptysis (>300 mL/24h)', 'Respiratory compromise from bleeding', 'Progression to chronic pulmonary aspergillosis or invasive disease'],
    'An aspergilloma is a ball of fungus that grows inside an existing hole in the lung, often from old tuberculosis. It may not cause symptoms but can lead to coughing up blood. Surgery may be needed if bleeding is severe. / Un aspergiloma es una bola de hongo que crece dentro de un hueco existente en el pulmon. Puede causar sangrado al toser y requerir cirugia.'
  ),

  'invasive-aspergillosis': r(
    'invasive-aspergillosis', 'Invasive Pulmonary Aspergillosis', 'Aspergilosis Pulmonar Invasiva',
    'infectious', 'CA41.2',
    'Life-threatening fungal infection with Aspergillus invasion of lung tissue and blood vessels, occurring almost exclusively in immunocompromised patients.',
    ['Prolonged neutropenia (AML chemotherapy)', 'Hematopoietic stem cell transplant', 'Solid organ transplant', 'High-dose corticosteroids', 'Advanced HIV/AIDS', 'CGD (chronic granulomatous disease)', 'Severe influenza or COVID-19 (emerging risk)'],
    'In immunocompromised hosts, inhaled Aspergillus conidia germinate and hyphae invade pulmonary tissue and blood vessels (angioinvasion). Vascular invasion causes hemorrhagic infarction and tissue necrosis. Hyphae branch at 45-degree angles (dichotomous branching). Hematogenous dissemination to brain, skin, and other organs may occur. In neutropenic patients, absence of neutrophil defense allows rapid fungal proliferation.',
    ['Fever unresponsive to broad-spectrum antibiotics', 'Pleuritic chest pain', 'Hemoptysis', 'Cough', 'Dyspnea', 'Disseminated: skin lesions, CNS involvement (brain abscess)'],
    ['CT chest: halo sign (ground-glass surrounding nodule, early), air-crescent sign (later, indicates recovery)', 'Serum galactomannan (sensitivity ~70-80% in neutropenic patients)', 'BAL galactomannan (higher sensitivity)', 'Serum beta-D-glucan', 'BAL culture and cytology', 'Tissue biopsy showing septate hyphae with 45-degree branching (gold standard)', 'Blood cultures rarely positive'],
    'Voriconazole (first-line, IV then oral). Alternatives: isavuconazole (similar efficacy, fewer side effects), liposomal amphotericin B. Salvage: caspofungin or other echinocandin, or combination therapy. Duration: minimum 6-12 weeks, until immunosuppression resolves. Surgical resection for localized disease near great vessels or refractory to medical therapy. Reduce immunosuppression if possible. Prophylaxis: posaconazole for high-risk patients during neutropenia.',
    'Avoid construction sites, gardening, or moldy environments during immunosuppression. HEPA-filtered rooms for transplant patients. Prophylactic antifungal adherence. Monitor galactomannan twice weekly during high-risk periods. Prompt reporting of fever or respiratory symptoms.',
    ['Massive hemoptysis from vascular invasion', 'CNS dissemination (brain abscess, seizures)', 'Respiratory failure', 'Disseminated disease with multiorgan failure', 'Breakthrough infection on prophylaxis'],
    'Invasive aspergillosis is a serious fungal infection that occurs when the immune system is severely weakened, usually during chemotherapy or transplant. The fungus invades lung tissue and blood vessels. Early antifungal treatment is critical for survival. / La aspergilosis invasiva es una infeccion fungica grave que ocurre cuando el sistema inmunologico esta muy debilitado. El tratamiento antimicotico temprano es critico.'
  ),

  // ==========================================================================
  // NEOPLASTIC CONDITIONS (5)
  // ==========================================================================

  'nsclc-adenocarcinoma': r(
    'nsclc-adenocarcinoma', 'NSCLC - Adenocarcinoma', 'CPNM - Adenocarcinoma',
    'neoplastic', 'XH2PS3',
    'Most common type of lung cancer, arising from glandular epithelium, typically in lung periphery. Most common in non-smokers.',
    ['Cigarette smoking', 'Radon exposure', 'Asbestos', 'Air pollution', 'Prior radiation therapy', 'Family history', 'Driver mutations (EGFR, ALK, ROS1, KRAS) -- some unrelated to smoking'],
    'Arises from mucin-secreting glandular cells of the peripheral airways. Most common NSCLC subtype (~40%). Progresses from atypical adenomatous hyperplasia (AAH) through adenocarcinoma in situ (AIS) to minimally invasive and invasive adenocarcinoma (lepidic, acinar, papillary, micropapillary, solid patterns). Frequent driver mutations: KRAS G12C (~25%), EGFR (~15% Caucasian, ~50% Asian), ALK rearrangement (~5%), ROS1, BRAF, MET, RET, HER2. Hematogenous and lymphatic spread common.',
    ['Persistent cough', 'Hemoptysis', 'Dyspnea', 'Chest pain', 'Weight loss and anorexia', 'Fatigue', 'Recurrent pneumonia', 'Bone pain or neurological symptoms if metastatic', 'Often asymptomatic in early stages'],
    ['Low-dose CT screening (USPSTF: age 50-80, >=20 pack-year history)', 'CT-guided or bronchoscopic biopsy', 'PET-CT for staging', 'Brain MRI for staging', 'Molecular testing (EGFR, ALK, ROS1, KRAS G12C, BRAF, PD-L1 expression, NTRK, MET, RET, HER2)', 'Pulmonary function tests (surgical candidacy)', 'Mediastinoscopy or EBUS for nodal staging'],
    'Stage I-II: Surgical resection (lobectomy preferred, segmentectomy for small tumors or limited function) +/- adjuvant chemotherapy (cisplatin-based) +/- osimertinib (EGFR+). Stage III: Concurrent chemoradiation +/- durvalumab consolidation, or neoadjuvant chemoimmunotherapy + surgery. Stage IV: Targeted therapy based on molecular profile (osimertinib for EGFR, alectinib/lorlatinib for ALK, sotorasib/adagrasib for KRAS G12C, entrectinib for ROS1). Immunotherapy (pembrolizumab, nivolumab, atezolizumab) for PD-L1+ or in combination with chemotherapy. Palliative care integration from diagnosis.',
    'Smoking cessation (reduces risk of second primary). Nutritional support. Psychosocial support and survivorship programs. Exercise as tolerated. Advance care planning. Clinical trial participation. Radon testing at home. Lung cancer screening for eligible individuals.',
    ['Massive hemoptysis', 'Superior vena cava syndrome (facial swelling, dyspnea)', 'Malignant pericardial effusion with tamponade', 'Spinal cord compression', 'Brain metastases with neurological deterioration', 'Pathological fractures'],
    'Lung adenocarcinoma is the most common type of lung cancer. It can occur in smokers and non-smokers. Modern treatment includes molecular testing to find genetic changes that can be targeted with specific medications. Early detection through screening saves lives. / El adenocarcinoma pulmonar es el tipo mas comun de cancer de pulmon. El tratamiento moderno incluye pruebas moleculares para encontrar cambios geneticos que pueden ser tratados con medicamentos especificos.'
  ),

  'nsclc-squamous': r(
    'nsclc-squamous', 'NSCLC - Squamous Cell Carcinoma', 'CPNM - Carcinoma Epidermoide',
    'neoplastic', 'XH7PB8',
    'Lung cancer arising from squamous epithelium, strongly associated with smoking, typically central in location.',
    ['Cigarette smoking (strongest association)', 'Occupational carcinogens', 'Radon', 'Prior radiation'],
    'Arises from squamous metaplasia of bronchial epithelium induced by chronic smoke exposure. Progresses through dysplasia to carcinoma in situ and invasive carcinoma. Tends to be centrally located (main/lobar bronchi). Keratin pearl formation and intercellular bridges on histology. May cause hypercalcemia via PTHrP secretion (paraneoplastic). Fewer targetable driver mutations than adenocarcinoma. PD-L1 often highly expressed.',
    ['Cough', 'Hemoptysis (common due to central, endobronchial location)', 'Post-obstructive pneumonia', 'Dyspnea', 'Chest pain', 'Weight loss', 'Hypercalcemia symptoms (confusion, polyuria, constipation)', 'Pancoast syndrome (superior sulcus tumor)'],
    ['CT chest with contrast', 'PET-CT for staging', 'Bronchoscopy with biopsy (central tumors)', 'CT-guided biopsy (peripheral)', 'Immunohistochemistry: p40+, CK5/6+, TTF-1 negative', 'PD-L1 testing', 'Brain MRI', 'PFTs for surgical planning'],
    'Stage I-II: Surgical resection + adjuvant chemotherapy if indicated. Stage III: Concurrent chemoradiation (carboplatin-paclitaxel or cisplatin-etoposide) + durvalumab. Stage IV: Immunotherapy (pembrolizumab monotherapy if PD-L1 >=50%, or pembrolizumab + carboplatin-paclitaxel/nab-paclitaxel). Few targetable mutations (FGFR1 amplification, PIK3CA -- limited options). Palliative radiation for hemoptysis or obstruction. Endobronchial therapies (laser, stent) for central obstruction.',
    'Smoking cessation. Nutritional and psychological support. Exercise as tolerated. Palliative care integration. Cancer support groups. Advance care planning.',
    ['Massive hemoptysis from central tumor erosion', 'Post-obstructive sepsis', 'SVC syndrome', 'Hypercalcemic crisis', 'Airway obstruction'],
    'Squamous cell lung cancer is strongly linked to smoking and usually grows in the central airways. It may cause coughing up blood or block airways. Immunotherapy has improved outcomes significantly. Quitting smoking remains the most important prevention. / El cancer epidermoide de pulmon esta muy ligado al tabaquismo. La inmunoterapia ha mejorado significativamente los resultados.'
  ),

  'nsclc-large-cell': r(
    'nsclc-large-cell', 'NSCLC - Large Cell Carcinoma', 'CPNM - Carcinoma de Celulas Grandes',
    'neoplastic', 'XH46A4',
    'Undifferentiated non-small cell lung carcinoma lacking features of adenocarcinoma or squamous cell carcinoma, often aggressive.',
    ['Cigarette smoking', 'Occupational carcinogens', 'Genetic predisposition'],
    'Undifferentiated malignant epithelial neoplasm by exclusion (lacks glandular, squamous, or neuroendocrine differentiation on light microscopy and IHC). Large pleomorphic cells with prominent nucleoli, abundant cytoplasm. Tends to be peripheral. Rapid growth and early metastasis. Large cell neuroendocrine carcinoma (LCNEC) is a variant with neuroendocrine features and very aggressive behavior (treated more like SCLC).',
    ['Cough', 'Dyspnea', 'Chest pain', 'Hemoptysis', 'Weight loss', 'Often presents as large peripheral mass', 'Gynecomastia (rare paraneoplastic, beta-hCG secretion)'],
    ['CT chest and PET-CT', 'Biopsy with immunohistochemistry (negative for TTF-1, p40, neuroendocrine markers in classic type)', 'Molecular testing', 'Brain MRI', 'PFTs'],
    'Stage I-II: Surgical resection + adjuvant chemotherapy. Stage III: Chemoradiation + durvalumab. Stage IV: Platinum-based chemotherapy + immunotherapy (treated similarly to other NSCLC). LCNEC variant: consider SCLC-type regimens (platinum-etoposide). Molecular profiling may reveal actionable targets.',
    'Smoking cessation. Comprehensive cancer support. Nutritional optimization. Exercise program. Advance care planning.',
    ['Rapid clinical deterioration', 'Brain metastases', 'SVC syndrome', 'Massive hemoptysis'],
    'Large cell lung carcinoma is an aggressive type of lung cancer that tends to grow quickly. Treatment involves surgery when possible, combined with chemotherapy and immunotherapy. Molecular testing may reveal specific targets for treatment. / El carcinoma de celulas grandes es un tipo agresivo de cancer de pulmon. El tratamiento combina cirugia, quimioterapia e inmunoterapia.'
  ),

  'sclc': r(
    'sclc', 'Small Cell Lung Cancer (SCLC)', 'Cancer Pulmonar de Celulas Pequenas',
    'neoplastic', 'XH48G2',
    'Highly aggressive neuroendocrine lung cancer with rapid doubling time, early widespread metastasis, and strong association with smoking.',
    ['Cigarette smoking (virtually all cases)', 'Radon exposure', 'Asbestos', 'Heavy metals'],
    'Arises from neuroendocrine (Kulchitsky) cells of the bronchial epithelium. Small cells with scant cytoplasm, salt-and-pepper chromatin, high mitotic rate. Very rapid doubling time (~30 days). Early hematogenous and lymphatic dissemination. Strong association with paraneoplastic syndromes: SIADH (ectopic ADH), Cushing syndrome (ectopic ACTH), Lambert-Eaton myasthenic syndrome (anti-VGCC antibodies), cerebellar degeneration (anti-Hu). Staged as limited (one radiation field) vs extensive.',
    ['Rapidly growing central mass', 'Cough and hemoptysis', 'Dyspnea', 'Chest pain', 'SVC syndrome (facial swelling, JVD)', 'Paraneoplastic: hyponatremia (SIADH), proximal weakness (LEMS), Cushingoid features', 'Weight loss', 'Often extensive disease at presentation'],
    ['CT chest and abdomen with contrast', 'PET-CT', 'Brain MRI (high rate of brain metastases)', 'Biopsy: small cells with neuroendocrine markers (chromogranin, synaptophysin, CD56), high Ki-67 (>80%), TTF-1+', 'CBC, BMP (hyponatremia?)', 'LDH', 'Bone scan if PET not available'],
    'Limited stage: Concurrent chemoradiation (cisplatin/carboplatin + etoposide, 4-6 cycles) + prophylactic cranial irradiation (PCI) if good response. Extensive stage: Platinum-etoposide + atezolizumab or durvalumab (immunotherapy -- first-line). PCI or MRI surveillance for brain metastases. Second-line: topotecan or lurbinectedin. Surgery only for very rare T1-2N0 limited stage. Highly chemosensitive initially, but almost universally recurs.',
    'Smoking cessation. Comprehensive support services. Psychosocial support. Symptom management focus. Advance care planning early. Clinical trial participation.',
    ['SVC syndrome (emergency radiation)', 'Massive hemoptysis', 'Brain metastases with herniation', 'Spinal cord compression', 'Severe paraneoplastic crises (hyponatremia, Cushing)', 'Tumor lysis syndrome with initial chemo'],
    'Small cell lung cancer is an aggressive cancer almost always caused by smoking. It grows and spreads very quickly but initially responds well to chemotherapy and radiation. Immunotherapy has improved survival. Early and honest conversations about goals of care are important. / El cancer de celulas pequenas es un cancer agresivo casi siempre causado por el tabaquismo. Responde inicialmente a la quimioterapia pero tiende a regresar.'
  ),

  'mesothelioma': r(
    'mesothelioma', 'Malignant Mesothelioma', 'Mesotelioma Maligno',
    'neoplastic', 'XH2W15',
    'Malignant tumor of mesothelial cells, most commonly of the pleura, strongly associated with asbestos exposure.',
    ['Asbestos exposure (80%+, latency 20-50 years)', 'Erionite exposure (Turkey)', 'Prior radiation therapy', 'SV40 virus (controversial)', 'BAP1 germline mutation'],
    'Asbestos fibers (amphibole type most carcinogenic) are inhaled and translocate to pleural surface. Chronic inflammation, reactive oxygen species, and direct genotoxicity drive malignant transformation of mesothelial cells over decades. Three histological types: epithelioid (best prognosis, ~60%), sarcomatoid (worst prognosis, ~20%), biphasic (mixed, ~20%). Grows as diffuse pleural thickening encasing the lung. Local invasion predominates over distant metastasis.',
    ['Dyspnea (most common)', 'Non-pleuritic chest wall pain', 'Unilateral pleural effusion', 'Weight loss', 'Fatigue', 'Chest wall mass (late)', 'Dry cough'],
    ['CT chest showing unilateral pleural thickening/effusion', 'PET-CT for staging', 'Thoracoscopic (VATS) biopsy (preferred -- adequate tissue for IHC)', 'Immunohistochemistry: calretinin+, WT1+, CK5/6+, D2-40+ (distinguishes from adenocarcinoma)', 'Occupational/exposure history critical', 'Staging by IMIG TNM system'],
    'Multimodal approach for resectable disease: extended pleurectomy/decortication (P/D) or extrapleural pneumonectomy (EPP, declining use) + cisplatin-pemetrexed chemotherapy +/- radiation. Unresectable: cisplatin-pemetrexed first-line; nivolumab + ipilimumab (CheckMate 743 -- OS benefit in non-epithelioid). Clinical trials strongly recommended. Palliative talc pleurodesis or indwelling pleural catheter for effusions. Tumor treating fields (TTFields) as maintenance. BAP1 status may guide prognosis and immunotherapy response.',
    'Seek care at a specialized mesothelioma center. Legal resources for occupational asbestos exposure claims. Asbestos awareness and avoidance. Palliative care integration early. Advance care planning. Support groups. Clinical trial participation.',
    ['Respiratory failure from lung entrapment', 'Cardiac tamponade (pericardial extension)', 'Chest wall invasion with severe pain', 'Contralateral pleural spread'],
    'Mesothelioma is a cancer of the lining around the lungs, almost always caused by past asbestos exposure, often decades earlier. Treatment at a specialized center offers the best outcomes. Immunotherapy has improved survival, especially for certain subtypes. Legal compensation may be available. / El mesotelioma es un cancer del revestimiento pulmonar causado por exposicion al asbesto. El tratamiento en un centro especializado ofrece los mejores resultados.'
  ),

  'carcinoid-tumor': r(
    'carcinoid-tumor', 'Pulmonary Carcinoid Tumor', 'Tumor Carcinoide Pulmonar',
    'neoplastic', 'XH9UT8',
    'Low- to intermediate-grade neuroendocrine lung tumor, classified as typical (low-grade) or atypical (intermediate-grade).',
    ['No strong smoking association', 'MEN1 syndrome (rare)', 'Family history'],
    'Well-differentiated neuroendocrine neoplasms from Kulchitsky cells. Typical carcinoid: <2 mitoses/2 mm2, no necrosis, 5-year survival ~90%. Atypical: 2-10 mitoses/2 mm2 and/or necrosis, 5-year survival ~60%. Usually central (80%), highly vascular. Carcinoid syndrome (flushing, diarrhea from serotonin) rare in pulmonary carcinoids (<5%) unless liver metastases.',
    ['Recurrent pneumonia from obstruction', 'Hemoptysis', 'Cough', 'Unilateral wheezing', 'Often asymptomatic', 'Carcinoid syndrome rare'],
    ['CT chest: well-circumscribed endobronchial or peripheral nodule', 'Bronchoscopy (cherry-red vascular mass)', 'Ga-68 DOTATATE PET or OctreoScan', 'Biopsy: neuroendocrine markers positive, low Ki-67', '24-hour urine 5-HIAA if syndrome suspected', 'Chromogranin A'],
    'Surgical resection: lobectomy or sleeve resection. Atypical carcinoid: lobectomy with lymph node dissection. Metastatic: somatostatin analogs (octreotide, lanreotide), everolimus, PRRT (177Lu-DOTATATE). Chemotherapy generally less effective than in SCLC.',
    'Regular follow-up imaging (recurrence possible years later). Nutritional support. Long-term surveillance essential.',
    ['Carcinoid crisis during surgery (IV octreotide)', 'Airway obstruction', 'Hemoptysis'],
    'Pulmonary carcinoid tumors are slow-growing neuroendocrine tumors, usually not related to smoking. Surgery is the main treatment and most patients do very well. / Los tumores carcinoides pulmonares son de crecimiento lento. La cirugia es el tratamiento principal.'
  ),

  // ==========================================================================
  // VASCULAR CONDITIONS (5)
  // ==========================================================================

  'pulmonary-embolism': r(
    'pulmonary-embolism', 'Pulmonary Embolism (PE)', 'Embolia Pulmonar (EP)',
    'vascular', 'BB00',
    'Obstruction of pulmonary arteries by thrombus, most commonly from deep veins of the legs, causing V/Q mismatch and potentially right heart failure.',
    ['Recent surgery or immobilization', 'DVT', 'Malignancy', 'Oral contraceptives/HRT', 'Pregnancy', 'Thrombophilia (Factor V Leiden, antiphospholipid)', 'Obesity', 'Smoking', 'Long-haul travel', 'Prior VTE'],
    'Virchow triad: stasis, endothelial injury, hypercoagulability. Thrombus from deep veins embolizes to pulmonary vasculature. Mechanical obstruction and vasoactive mediators increase PVR. Acute RV pressure overload causes RV dilation, decreased LV filling, and hemodynamic compromise. Massive PE (>50% vascular bed) causes obstructive shock.',
    ['Acute dyspnea', 'Pleuritic chest pain', 'Tachycardia', 'Tachypnea', 'Hemoptysis', 'Syncope (massive PE)', 'Unilateral leg swelling', 'Hypoxemia'],
    ['CTPA (gold standard)', 'D-dimer (rule out in low probability)', 'Wells or Geneva score', 'V/Q scan if CT contraindicated', 'Echo (RV dilation, McConnell sign)', 'Troponin and BNP for risk stratification', 'Lower extremity duplex US', 'ABG'],
    'Anticoagulation: DOAC (rivaroxaban, apixaban preferred) or heparin bridged to warfarin. Duration: 3 months (provoked), indefinite (unprovoked/recurrent). Massive PE: systemic thrombolysis (alteplase), catheter-directed therapy, or surgical embolectomy. Submassive: anticoagulation + monitoring. IVC filter if anticoagulation contraindicated. ECMO for refractory shock.',
    'Early ambulation after surgery. Compression stockings for travel. Stay hydrated. Avoid prolonged immobility. Anticoagulant adherence. INR monitoring if on warfarin.',
    ['Massive PE with SBP <90', 'Syncope', 'Cardiac arrest (PEA)', 'Rapidly worsening dyspnea', 'Right heart failure signs'],
    'A pulmonary embolism is a blood clot that travels to the lungs. It is a medical emergency requiring immediate treatment with blood thinners. Call 911 for sudden shortness of breath with chest pain. / La embolia pulmonar es un coagulo que viaja a los pulmones. Es una emergencia medica. Llame al 911 ante dificultad respiratoria subita.'
  ),

  'pulmonary-hypertension': r(
    'pulmonary-hypertension', 'Pulmonary Hypertension (All WHO Groups)', 'Hipertension Pulmonar (Todos los Grupos OMS)',
    'vascular', 'BB01',
    'Elevated mean pulmonary artery pressure >20 mmHg at rest, classified into 5 WHO groups, leading to progressive right heart failure.',
    ['Group 1 PAH: idiopathic, heritable (BMPR2), drugs, CTD (scleroderma), HIV, portal HTN, CHD', 'Group 2: left heart disease', 'Group 3: lung disease/hypoxia (COPD, ILD)', 'Group 4: CTEPH', 'Group 5: miscellaneous (sarcoidosis, myeloproliferative)'],
    'Group 1: Endothelial dysfunction with imbalance of vasoconstrictors (endothelin, thromboxane) over vasodilators (NO, prostacyclin). Progressive vascular remodeling with plexiform lesions. Group 2: Passive congestion from elevated LA pressure. Group 3: Hypoxic vasoconstriction. Group 4: Organized thromboembolic obstruction. All cause increased RV afterload, RV hypertrophy, and eventual RV failure.',
    ['Progressive exertional dyspnea', 'Fatigue', 'Chest pain', 'Exertional syncope', 'Peripheral edema', 'Loud P2', 'JVD and hepatomegaly', 'Raynaud phenomenon (CTD)'],
    ['Right heart catheterization (gold standard): mPAP >20 mmHg', 'Echo (RVSP, RV function)', 'V/Q scan (rule out CTEPH)', 'PFTs and DLCO', 'CT chest', 'Autoimmune panel', '6-minute walk test', 'NT-proBNP', 'Vasoreactivity testing'],
    'Group 1: ERA (ambrisentan, macitentan) + PDE5i (sildenafil, tadalafil) or sGC stimulator (riociguat). Prostacyclin agents (IV epoprostenol, SC treprostinil, selexipag). Sotatercept (activin inhibitor, new). CCB if vasoreactive. Group 2: Treat left heart disease. Group 3: Treat lung disease + O2; inhaled treprostinil for PH-ILD. Group 4: Pulmonary endarterectomy (curative if operable), BPA, riociguat. Lung transplant for refractory.',
    'Supervised exercise. Fluid/sodium restriction. Avoid pregnancy. Supplemental O2 for hypoxemia. Avoid high altitude. Influenza/pneumococcal vaccination.',
    ['Exertional syncope', 'Acute right heart failure', 'New arrhythmia', 'Hemoptysis', 'Progressive dyspnea with edema'],
    'Pulmonary hypertension means high blood pressure in the lung arteries, making the right heart work too hard. Identifying the cause is key to treatment. Specialized medications can slow progression. Avoid pregnancy and high altitudes. / La hipertension pulmonar significa presion alta en las arterias pulmonares. Identificar la causa es clave para el tratamiento.'
  ),

  'pulmonary-avm': r(
    'pulmonary-avm', 'Pulmonary Arteriovenous Malformation', 'Malformacion Arteriovenosa Pulmonar',
    'vascular', 'LA80',
    'Abnormal direct connection between pulmonary arteries and veins, bypassing capillary bed, causing right-to-left shunt.',
    ['HHT/Osler-Weber-Rendu (80-90%)', 'Hepatopulmonary syndrome', 'Congenital sporadic'],
    'Abnormal communication between pulmonary artery and vein through thin-walled sac. Blood bypasses gas exchange (anatomic shunt), causing hypoxemia unresponsive to O2. Loss of capillary filtration allows paradoxical emboli (stroke, brain abscess). Most common in lower lobes.',
    ['Often asymptomatic', 'Dyspnea', 'Platypnea-orthodeoxia', 'Epistaxis (HHT)', 'Hemoptysis', 'Cyanosis', 'Clubbing', 'Brain abscess or stroke'],
    ['Contrast echo (bubble study -- bubbles in LA after 3-6 cycles)', 'CT pulmonary angiography (definitive)', 'Pulse oximetry (does not correct with 100% O2)', 'Genetic testing for HHT', 'Brain MRI (screen cerebral AVMs)'],
    'Embolotherapy (coil/plug) for feeding artery >=2-3 mm. Surgery if not amenable to embolization. Antibiotic prophylaxis before dental procedures. Screen HHT family members. Long-term CT follow-up for reperfusion.',
    'Antibiotic prophylaxis before dental work. Avoid scuba diving. Regular follow-up imaging. HHT: genetic counseling, family screening. Iron supplementation for chronic blood loss.',
    ['Massive hemoptysis', 'Stroke from paradoxical embolism', 'Brain abscess', 'Rupture during pregnancy'],
    'A pulmonary AVM is an abnormal connection between arteries and veins in the lungs. It can cause low oxygen and stroke risk. Treatment blocks the abnormal connection with coils. / Una MAV pulmonar es una conexion anormal entre arterias y venas pulmonares. El tratamiento bloquea la conexion con espirales.'
  ),

  'pulmonary-edema-cardiogenic': r(
    'pulmonary-edema-cardiogenic', 'Pulmonary Edema (Cardiogenic)', 'Edema Pulmonar (Cardiogenico)',
    'vascular', 'BB01.1',
    'Fluid accumulation in lungs from elevated left heart filling pressures.',
    ['Heart failure', 'Acute MI', 'Severe hypertension', 'Valvular disease', 'Arrhythmia', 'Volume overload', 'Medication nonadherence'],
    'Elevated left atrial pressure (PCWP >18 mmHg) transmitted to pulmonary capillaries. Starling forces favor transudation. Fluid fills interstitium then alveoli, impairing gas exchange. Flash pulmonary edema from acute hypertension or acute mitral regurgitation.',
    ['Acute dyspnea', 'Orthopnea', 'PND', 'Pink frothy sputum', 'Bilateral crackles', 'S3 gallop', 'Elevated JVP', 'Diaphoresis'],
    ['CXR: cephalization, Kerley B lines, bat-wing opacities, effusions', 'BNP/NT-proBNP elevated', 'Echo', 'ECG', 'Troponin', 'Lung ultrasound (B-lines)'],
    'Sit upright. O2 or NIV (CPAP/BiPAP). IV furosemide. IV nitroglycerin if SBP >90. Treat cause (ACS, arrhythmia). Long-term: optimize HF therapy (ARNI, beta-blocker, MRA, SGLT2i).',
    'Daily weight. Fluid restriction 1.5-2L/day. Low-sodium diet <2g/day. Medication adherence. Avoid NSAIDs.',
    ['Pink frothy sputum with respiratory distress', 'SpO2 <90%', 'Hypotension (cardiogenic shock)', 'Altered mental status'],
    'Cardiogenic pulmonary edema means fluid is backing up into the lungs because the heart is not pumping well. Sitting upright and water pills help quickly. Weigh yourself daily and limit salt. / El edema pulmonar cardiogenico significa que se acumula liquido en los pulmones. Pesarse diariamente y limitar la sal ayuda a prevenirlo.'
  ),

  'pulmonary-edema-noncardiogenic': r(
    'pulmonary-edema-noncardiogenic', 'Pulmonary Edema (Non-Cardiogenic)', 'Edema Pulmonar (No Cardiogenico)',
    'vascular', 'BB01.2',
    'Fluid in lungs from increased capillary permeability with normal cardiac filling pressures.',
    ['Sepsis', 'Pneumonia', 'Aspiration', 'Pancreatitis', 'Trauma', 'TRALI', 'Toxic inhalation', 'Neurogenic (head injury)', 'Drug overdose (opioids)'],
    'Damage to alveolar-capillary membrane increases permeability, allowing protein-rich exudate despite normal PCWP (<18 mmHg). Direct injury (aspiration, pneumonia) or indirect (sepsis, pancreatitis). Neurogenic pulmonary edema from massive sympathetic surge. TRALI from donor antibodies activating neutrophils.',
    ['Acute dyspnea', 'Tachypnea', 'Refractory hypoxemia', 'Bilateral crackles', 'No typical HF signs'],
    ['CXR: bilateral infiltrates without cardiomegaly', 'Normal BNP', 'Normal echo', 'PaO2/FiO2 ratio', 'Identify underlying cause'],
    'Treat underlying cause. Lung-protective ventilation (6 mL/kg IBW, Pplat <30). Conservative fluid management. Prone positioning for severe hypoxemia. ECMO for refractory cases.',
    'Prevent underlying causes. Lung-protective ventilation. Blood product stewardship. Aspiration precautions.',
    ['PaO2/FiO2 <100', 'Refractory hypoxemia', 'Hemodynamic instability', 'Multiorgan failure'],
    'Non-cardiogenic pulmonary edema is fluid in the lungs from damaged blood vessels, not a weak heart. Treatment targets the underlying cause while supporting breathing. / El edema pulmonar no cardiogenico es causado por vasos danados. El tratamiento se enfoca en la causa subyacente.'
  ),

  // ==========================================================================
  // PLEURAL CONDITIONS (6)
  // ==========================================================================

  'pneumothorax-spontaneous': r(
    'pneumothorax-spontaneous', 'Spontaneous Pneumothorax', 'Neumotorax Espontaneo',
    'pleural', 'CB20.0',
    'Air in the pleural space without trauma. Primary (no underlying disease) or secondary (underlying lung disease).',
    ['Primary: tall thin young males, smoking, Marfan', 'Secondary: COPD, CF, PCP, TB, cancer, LAM', 'Catamenial (endometriosis-related)'],
    'Primary: rupture of apical subpleural blebs. Secondary: diseased lung rupture. Air disrupts negative intrapleural pressure, lung collapses. V/Q mismatch causes hypoxemia. Recurrence 30-50% after first episode.',
    ['Sudden pleuritic chest pain', 'Acute dyspnea', 'Decreased breath sounds', 'Hyperresonance', 'Tachycardia'],
    ['CXR (visceral pleural line)', 'CT chest (quantify, identify blebs)', 'Lung ultrasound (absent lung sliding)', 'ABG if hypoxemic'],
    'Small primary (<2 cm, asymptomatic): observation + supplemental O2. Large/symptomatic: needle aspiration or chest tube. Secondary: chest tube even if small. Recurrent: VATS with bleb resection and pleurodesis.',
    'Smoking cessation (reduces recurrence 40%). Avoid scuba diving permanently. Avoid unpressurized flight until resolved.',
    ['Tension pneumothorax', 'Bilateral pneumothorax', 'Respiratory failure', 'Persistent air leak >5 days'],
    'A pneumothorax is air leaking around the lung causing collapse. Small ones may heal alone; larger ones need a tube. Quit smoking to reduce recurrence. / Un neumotorax es aire alrededor del pulmon. Dejar de fumar reduce la recurrencia.'
  ),

  'pneumothorax-tension': r(
    'pneumothorax-tension', 'Tension Pneumothorax', 'Neumotorax a Tension',
    'pleural', 'CB20.1',
    'Life-threatening pneumothorax with progressive pressure buildup causing mediastinal shift and cardiovascular collapse.',
    ['Mechanical ventilation', 'Trauma', 'Failed central line', 'CPR', 'Progression of simple pneumothorax'],
    'One-way valve: air enters but cannot exit pleural space. Progressive pressure collapses ipsilateral lung, shifts mediastinum, kinks great veins. Decreased venous return causes obstructive shock. Fatal if not decompressed.',
    ['Severe respiratory distress', 'Hypotension', 'Tracheal deviation (late)', 'Absent breath sounds', 'JVD', 'Tachycardia progressing to PEA'],
    ['CLINICAL DIAGNOSIS -- do NOT delay for imaging', 'Ultrasound (absent lung sliding) if immediately available', 'CXR only if stable'],
    'IMMEDIATE needle decompression: 14-16 gauge in 2nd ICS midclavicular line or 4th-5th ICS anterior axillary line. Follow with chest tube. Do NOT delay for imaging.',
    'Careful central line technique. Lung-protective ventilation. Chest tube before positive-pressure ventilation in known pneumothorax.',
    ['This IS the emergency -- immediate decompression', 'Cardiac arrest (PEA)', 'Cardiovascular collapse'],
    'Tension pneumothorax is a life-threatening emergency where trapped air squeezes the heart. It requires immediate needle decompression. / El neumotorax a tension es una emergencia que requiere descompresion inmediata con aguja.'
  ),

  'pneumothorax-traumatic': r(
    'pneumothorax-traumatic', 'Traumatic Pneumothorax', 'Neumotorax Traumatico',
    'pleural', 'CB20.2',
    'Pneumothorax from penetrating or blunt chest trauma or iatrogenic procedures.',
    ['Penetrating trauma', 'Blunt trauma', 'Rib fractures', 'Iatrogenic (central line, thoracentesis, biopsy)', 'Blast injury'],
    'Penetrating trauma introduces air directly. Blunt trauma: rib fractures puncture pleura. May coexist with hemothorax. Risk of tension if air accumulates.',
    ['Chest pain at injury site', 'Dyspnea', 'Decreased breath sounds', 'Subcutaneous emphysema', 'Open wound with air movement'],
    ['CXR', 'CT chest (most sensitive, standard in trauma)', 'eFAST', 'Lung ultrasound'],
    'Open pneumothorax: three-sided occlusive dressing, then chest tube. Tube thoracostomy for most cases. Small occult (CT only): observe if no ventilation needed. VATS for persistent air leak.',
    'Seatbelt use. Follow-up imaging. Activity restrictions during recovery.',
    ['Tension physiology', 'Massive hemothorax', 'Bilateral pneumothorax', 'Open sucking wound'],
    'A traumatic pneumothorax occurs when injury allows air around the lung. A tube drains the air so the lung re-expands. Most heal completely. / Un neumotorax traumatico ocurre por lesion. Un tubo drena el aire para que el pulmon se reexpanda.'
  ),

  'hemothorax': r(
    'hemothorax', 'Hemothorax', 'Hemotorax',
    'pleural', 'CB21',
    'Blood accumulation in the pleural space, most commonly from trauma.',
    ['Chest trauma (most common)', 'Iatrogenic', 'Malignancy', 'PE with infarction', 'Aortic dissection', 'Anticoagulation', 'Rib fractures'],
    'Blood from intercostal vessels, internal mammary, or parenchyma fills pleural space. Each hemithorax holds up to 3L. Massive hemothorax (>1500 mL) causes hemorrhagic shock. Retained blood may organize into fibrothorax or become infected.',
    ['Chest pain', 'Dyspnea', 'Decreased breath sounds', 'Dullness to percussion', 'Tachycardia', 'Hypotension if massive', 'Flat neck veins (hypovolemia)'],
    ['CXR (costophrenic blunting)', 'CT chest', 'eFAST/lung ultrasound', 'Pleural fluid hematocrit >50% of serum', 'CBC, coags, type and cross'],
    'Chest tube (large-bore 28-36 Fr). Massive (>1500 mL initial or >200 mL/hr): emergent thoracotomy. Autotransfusion. Retained hemothorax: VATS within 72h. Correct coagulopathy.',
    'Trauma prevention. Post-chest tube monitoring. Chest PT during recovery. Follow-up imaging.',
    ['Massive hemothorax with shock', 'Ongoing hemorrhage', 'Bilateral hemothorax', 'Great vessel injury'],
    'Hemothorax is blood around the lung, usually from injury. A tube drains the blood. Large blood loss may need surgery and transfusions. / El hemotorax es sangre alrededor del pulmon. Se coloca un tubo para drenar la sangre.'
  ),

  'pleural-effusion': r(
    'pleural-effusion', 'Pleural Effusion', 'Derrame Pleural',
    'pleural', 'CB22',
    'Abnormal fluid accumulation in the pleural space, classified as transudative or exudative by Light criteria.',
    ['Transudative: CHF, cirrhosis, nephrotic syndrome', 'Exudative: pneumonia, malignancy, TB, PE, autoimmune', 'Drug-induced: nitrofurantoin, amiodarone'],
    'Transudate: Starling force imbalance (increased hydrostatic or decreased oncotic pressure). Exudate: increased permeability from inflammation/infection/malignancy. Light criteria: exudative if protein ratio >0.5, LDH ratio >0.6, or pleural LDH >2/3 upper normal.',
    ['Dyspnea', 'Pleuritic pain (inflammatory)', 'Cough', 'Decreased breath sounds', 'Dullness to percussion', 'Egophony at upper margin'],
    ['CXR (meniscus sign)', 'Lung ultrasound (guides thoracentesis)', 'CT chest', 'Thoracentesis with Light criteria', 'Fluid: cell count, glucose, pH, LDH, protein, cytology, culture', 'ADA for TB', 'Pleural biopsy if undiagnosed'],
    'Treat underlying cause. Transudative: diuretics, sodium restriction. Exudative: cause-specific therapy. Therapeutic thoracentesis (limit 1-1.5L). Recurrent malignant: IPC or talc pleurodesis. Chylothorax: MCT diet, thoracic duct ligation.',
    'Monitor for recurrence. Treat underlying condition. Low-sodium diet if transudative. Follow-up imaging.',
    ['Respiratory distress from massive effusion', 'Empyema', 'Tension hydrothorax', 'Unexplained exudative effusion'],
    'A pleural effusion is fluid buildup around the lung. The cause determines treatment. Draining the fluid improves breathing. / Un derrame pleural es acumulacion de liquido alrededor del pulmon. Drenar el liquido mejora la respiracion.'
  ),

  'empyema': r(
    'empyema', 'Empyema (Pleural Infection)', 'Empiema (Infeccion Pleural)',
    'pleural', 'CB23',
    'Pus in the pleural space, usually complicating pneumonia, requiring drainage and antibiotics.',
    ['Pneumonia', 'Thoracic surgery', 'Esophageal perforation', 'Chest trauma', 'Immunosuppression', 'Diabetes', 'Alcoholism'],
    'Three stages: exudative (sterile), fibrinopurulent (bacterial invasion, loculations), organized (fibroblast peel traps lung). Common organisms: S. pneumoniae, S. milleri, S. aureus, anaerobes.',
    ['Persistent fever despite pneumonia antibiotics', 'Pleuritic pain', 'Dyspnea', 'Malaise', 'Night sweats'],
    ['Thoracentesis: purulent fluid, pH <7.2, glucose <60, LDH >1000', 'Gram stain and culture', 'Blood cultures', 'CT (split pleura sign)', 'Lung ultrasound (septated effusion)'],
    'Antibiotics (IV 2-4 weeks, total 4-6 weeks): ceftriaxone + metronidazole or piperacillin-tazobactam. Drainage essential: chest tube. Intrapleural fibrinolytics (tPA + DNase) for loculated. VATS decortication if fibrinolytics fail.',
    'Complete antibiotic course. Nutritional support. Chest physiotherapy. Address underlying conditions.',
    ['Sepsis', 'Bronchopleural fistula', 'Trapped lung', 'Empyema necessitatis'],
    'Empyema is pus around the lung, usually from pneumonia. It needs both antibiotics and drainage. / El empiema es pus alrededor del pulmon. Necesita antibioticos y drenaje.'
  ),

  'chylothorax': r(
    'chylothorax', 'Chylothorax', 'Quilotorax',
    'pleural', 'CB24',
    'Lymphatic fluid (chyle) in the pleural space from thoracic duct disruption or obstruction.',
    ['Thoracic surgery (most common)', 'Lymphoma (most common non-traumatic)', 'Trauma', 'Central venous thrombosis', 'LAM'],
    'Thoracic duct carries 1.5-2.5L chyle/day. Disruption or obstruction causes chyle to leak into pleural space (usually left). Chyle rich in triglycerides, lymphocytes, immunoglobulins. Persistent loss causes malnutrition and immunodeficiency.',
    ['Progressive dyspnea', 'Unilateral effusion (usually left)', 'No pleuritic pain', 'Weight loss', 'Lymphopenia'],
    ['Thoracentesis: milky fluid, triglycerides >110 mg/dL', 'Lymphocyte-predominant', 'CT chest/abdomen', 'Lymphangiography'],
    'Conservative (2 weeks): NPO with TPN or MCT diet. Octreotide. If fails (>1L/day for >5 days): thoracic duct ligation or embolization. Treat underlying cause.',
    'MCT diet. Nutritional monitoring. IV immunoglobulin if severe lymphocyte depletion.',
    ['High-output not responding to conservative measures', 'Severe malnutrition/immunodeficiency', 'Respiratory compromise'],
    'Chylothorax is lymphatic fluid around the lung. Treatment starts with diet changes; surgery may be needed if it persists. / El quilotorax es liquido linfatico alrededor del pulmon. El tratamiento comienza con dieta; puede necesitar cirugia.'
  ),

  // ==========================================================================
  // ACUTE LUNG INJURY / ARDS / RESPIRATORY FAILURE (4)
  // ==========================================================================

  'ards': r(
    'ards', 'Acute Respiratory Distress Syndrome (ARDS)', 'Sindrome de Dificultad Respiratoria Aguda (SDRA)',
    'other', 'CB00',
    'Acute diffuse inflammatory lung injury causing non-cardiogenic pulmonary edema, refractory hypoxemia, and bilateral infiltrates.',
    ['Sepsis (most common)', 'Pneumonia', 'Aspiration', 'Pancreatitis', 'Trauma/burns', 'Transfusion (TRALI)', 'Near-drowning', 'Toxic inhalation', 'COVID-19'],
    'Insult triggers diffuse alveolar damage (DAD). Exudative phase (days 1-7): neutrophilic inflammation, capillary leak, hyaline membrane formation, type I pneumocyte necrosis. Proliferative phase (weeks 1-3): type II pneumocyte proliferation, fibroblast infiltration. Fibrotic phase: collagen deposition (some patients). Severe V/Q mismatch and shunt cause refractory hypoxemia. Decreased compliance from edematous, atelectatic lung.',
    ['Acute onset dyspnea (within 1 week of insult)', 'Refractory hypoxemia', 'Tachypnea', 'Bilateral crackles', 'Cyanosis', 'Accessory muscle use'],
    ['Berlin criteria: acute onset, bilateral opacities on CXR/CT not fully explained by effusions/atelectasis, respiratory failure not fully explained by cardiac failure, PaO2/FiO2 ratio (mild 200-300, moderate 100-200, severe <100) on PEEP >=5', 'ABG', 'Echo to exclude cardiogenic edema', 'BNP (normal/low)'],
    'Lung-protective ventilation: low tidal volume (6 mL/kg IBW), plateau pressure <30 cmH2O, adequate PEEP. Conservative fluid strategy. Prone positioning 16+ hours/day for moderate-severe (PaO2/FiO2 <150). Neuromuscular blockade for severe refractory hypoxemia (early, 48h). No proven pharmacotherapy. VV-ECMO for refractory hypoxemia. Dexamethasone may be considered. Treat underlying cause aggressively.',
    'ICU-level care. Early mobilization when stable. Nutritional support (enteral preferred). DVT prophylaxis. Stress ulcer prophylaxis. Post-ARDS: pulmonary rehabilitation, screen for PTSD and cognitive dysfunction.',
    ['PaO2/FiO2 <100 despite optimal ventilation', 'Refractory hypoxemia needing ECMO', 'Multiorgan failure', 'Barotrauma (pneumothorax)', 'Hemodynamic instability'],
    'ARDS is a severe inflammatory reaction in the lungs that fills them with fluid, making it extremely hard to breathe. It requires intensive care with a ventilator. Treatment focuses on gentle breathing support and fixing the underlying cause. Recovery can take weeks to months. / El SDRA es una reaccion inflamatoria severa que llena los pulmones de liquido. Requiere cuidados intensivos con ventilador.'
  ),

  'acute-lung-injury': r(
    'acute-lung-injury', 'Acute Lung Injury (ALI)', 'Lesion Pulmonar Aguda (LPA)',
    'other', 'CB00.1',
    'Acute inflammatory lung injury representing the milder spectrum of ARDS (now classified as mild ARDS under Berlin criteria).',
    ['Same as ARDS: sepsis, pneumonia, aspiration, trauma, pancreatitis, transfusion'],
    'Same pathophysiology as ARDS but less severe. Diffuse alveolar damage with capillary leak and inflammatory exudate. PaO2/FiO2 200-300 (previously ALI; now mild ARDS per Berlin definition). May progress to moderate-severe ARDS.',
    ['Dyspnea', 'Tachypnea', 'Hypoxemia responsive to moderate O2', 'Bilateral infiltrates', 'Cough'],
    ['Berlin criteria with PaO2/FiO2 200-300 on PEEP >=5', 'CXR bilateral opacities', 'Echo to exclude cardiac cause', 'ABG'],
    'Supplemental O2 or high-flow nasal cannula. NIV (CPAP/BiPAP) may be appropriate. Lung-protective ventilation if intubated. Conservative fluid strategy. Treat underlying cause. Close monitoring for progression to moderate-severe ARDS.',
    'Close monitoring. Early mobilization. Adequate nutrition. DVT prophylaxis.',
    ['Progression to moderate-severe ARDS', 'Increasing O2 requirements', 'Need for intubation', 'Hemodynamic instability'],
    'Acute lung injury is a milder form of ARDS where inflammation causes fluid leakage in the lungs. With proper treatment, many patients recover without needing a ventilator. Close monitoring is important to catch worsening early. / La lesion pulmonar aguda es una forma mas leve de SDRA. Con tratamiento adecuado, muchos se recuperan sin ventilador.'
  ),

  'respiratory-failure-type1': r(
    'respiratory-failure-type1', 'Respiratory Failure - Type 1 (Hypoxemic)', 'Insuficiencia Respiratoria Tipo 1 (Hipoxemica)',
    'other', 'CB01',
    'Failure of gas exchange with PaO2 <60 mmHg on room air and normal or low PaCO2.',
    ['Pneumonia', 'ARDS', 'Pulmonary embolism', 'Pulmonary edema', 'Interstitial lung disease', 'Pneumothorax', 'Atelectasis', 'Pulmonary hemorrhage'],
    'V/Q mismatch (most common mechanism), intrapulmonary shunt, diffusion impairment, or low inspired O2. In V/Q mismatch, some lung areas are perfused but poorly ventilated. Shunt: blood passes through unventilated alveoli (does not respond to supplemental O2). Diffusion impairment: thickened alveolar-capillary membrane. PaCO2 normal or low due to compensatory hyperventilation.',
    ['Dyspnea', 'Tachypnea', 'Tachycardia', 'Cyanosis', 'Confusion', 'Restlessness', 'Use of accessory muscles'],
    ['ABG: PaO2 <60 mmHg, PaCO2 normal or low, elevated A-a gradient', 'Pulse oximetry <90%', 'CXR or CT chest to identify cause', 'Response to supplemental O2 (helps distinguish V/Q mismatch from shunt)', 'Focused workup for underlying cause'],
    'Supplemental O2 (nasal cannula, face mask, high-flow). NIV for select causes (pulmonary edema, immunocompromised pneumonia). Intubation and mechanical ventilation if refractory. Treat underlying cause. PEEP for shunt physiology. ECMO for refractory cases.',
    'Address underlying cause. Monitor closely for progression. Respiratory support as needed.',
    ['PaO2 <60 despite supplemental O2', 'Respiratory fatigue', 'Altered mental status', 'Hemodynamic instability', 'Need for intubation'],
    'Type 1 respiratory failure means your lungs cannot get enough oxygen into your blood. It can result from many conditions like pneumonia or blood clots. Supplemental oxygen and treating the underlying cause are the main treatments. / La insuficiencia respiratoria tipo 1 significa que los pulmones no pueden obtener suficiente oxigeno. El oxigeno suplementario y tratar la causa son los tratamientos principales.'
  ),

  'respiratory-failure-type2': r(
    'respiratory-failure-type2', 'Respiratory Failure - Type 2 (Hypercapnic)', 'Insuficiencia Respiratoria Tipo 2 (Hipercapnica)',
    'other', 'CB01.1',
    'Ventilatory failure with PaCO2 >45 mmHg, often with concurrent hypoxemia.',
    ['COPD exacerbation (most common)', 'Obesity hypoventilation', 'Neuromuscular disease (ALS, myasthenia, Guillain-Barre)', 'Chest wall deformity (kyphoscoliosis)', 'Drug overdose (opioids, benzodiazepines)', 'Central sleep apnea', 'Severe asthma', 'Upper airway obstruction'],
    'Failure of ventilatory pump to eliminate CO2 adequately. Mechanisms: decreased central drive (drugs, central apnea), neuromuscular weakness (cannot generate adequate respiratory force), chest wall restriction, or increased dead space with airflow obstruction. Acute hypercapnia causes respiratory acidosis. Chronic hypercapnia leads to renal compensation (elevated bicarbonate). Acute-on-chronic: decompensation of compensated chronic type 2.',
    ['Dyspnea', 'Headache (especially morning -- CO2 retention)', 'Confusion and drowsiness', 'Tremor (CO2 flap/asterixis)', 'Warm flushed skin (vasodilation)', 'Papilledema (severe)', 'Tachycardia'],
    ['ABG: PaCO2 >45 mmHg with acidosis (acute) or compensated pH (chronic)', 'Pulse oximetry', 'CXR', 'PFTs (if stable)', 'Neuromuscular evaluation if indicated', 'Toxicology screen if overdose suspected', 'Capnography'],
    'NIV (BiPAP) is first-line for COPD exacerbation with type 2 failure (reduces intubation and mortality). Careful O2 supplementation targeting SpO2 88-92% in COPD (avoid suppressing hypoxic drive). Intubation if NIV fails, severe acidosis (pH <7.20), or altered consciousness. Drug overdose: naloxone (opioids), flumazenil (benzodiazepines -- caution). Treat underlying cause. Respiratory stimulants (doxapram -- rarely used). Long-term NIV for chronic type 2 (OHS, neuromuscular disease).',
    'Medication adherence. Avoid sedating medications. Smoking cessation. Weight management for OHS. NIV compliance (home BiPAP). Pulmonary rehabilitation. Recognize early warning signs of exacerbation.',
    ['Severe acidosis pH <7.20', 'Decreasing level of consciousness', 'NIV failure (worsening pH, PaCO2, or clinical status after 1-2h)', 'Respiratory arrest', 'Hemodynamic instability'],
    'Type 2 respiratory failure means your lungs cannot blow off enough carbon dioxide, which builds up in the blood. BiPAP (a breathing mask) is very effective for this. If you have COPD, never use too much oxygen without medical guidance. / La insuficiencia respiratoria tipo 2 significa que los pulmones no pueden eliminar suficiente CO2. El BiPAP es muy efectivo para esto.'
  ),

  // ==========================================================================
  // INTERSTITIAL LUNG DISEASE (10)
  // ==========================================================================

  'ipf': r(
    'ipf', 'Idiopathic Pulmonary Fibrosis (IPF)', 'Fibrosis Pulmonar Idiopatica (FPI)',
    'restrictive', 'CA70.0',
    'Progressive fibrosing interstitial pneumonia of unknown cause with usual interstitial pneumonia (UIP) pattern, leading to irreversible lung scarring.',
    ['Age >50', 'Male sex', 'Cigarette smoking', 'GERD', 'Genetic predisposition (MUC5B, TERT, TERC)', 'Environmental dust exposure'],
    'Aberrant wound healing response: recurrent alveolar epithelial injury activates fibroblasts and myofibroblasts. Excessive extracellular matrix (collagen) deposition replaces normal lung architecture. UIP pattern: temporal and spatial heterogeneity with fibroblastic foci at interface of normal and scarred lung, honeycomb change, and traction bronchiectasis. Progressive loss of gas exchange surface area. TGF-beta is key mediator.',
    ['Progressive exertional dyspnea', 'Dry nonproductive cough', 'Bibasilar Velcro-like crackles', 'Digital clubbing (50%)', 'Fatigue', 'Weight loss (late)'],
    ['HRCT: UIP pattern (basilar-predominant honeycombing, traction bronchiectasis, reticulation, minimal GGO)', 'PFTs: restrictive pattern (reduced FVC, TLC), reduced DLCO', 'Surgical lung biopsy only if HRCT indeterminate', 'BAL: may help exclude other causes', '6-minute walk test with desaturation', 'Exclude connective tissue disease (autoantibodies)'],
    'Antifibrotic therapy: pirfenidone or nintedanib (both slow FVC decline ~50%). Supplemental O2 for exertional hypoxemia. Pulmonary rehabilitation. Lung transplant evaluation for progressive disease. Treat GERD aggressively. Acute exacerbations: high-dose corticosteroids (controversial, high mortality). NO role for immunosuppression (PANTHER trial showed harm). Palliative care for symptom management.',
    'Pulmonary rehabilitation (improves quality of life). Supplemental O2 as prescribed. Annual influenza and pneumococcal vaccination. GERD management. Avoid smoking. Support groups. Advance care planning early.',
    ['Acute exacerbation (rapid worsening of dyspnea with new bilateral GGO on CT)', 'Progressive hypoxemia', 'Pulmonary hypertension', 'Right heart failure', 'Lung cancer (increased risk)'],
    'IPF is a progressive scarring disease of the lungs without a known cause. While there is no cure, antifibrotic medications can significantly slow the scarring. Lung transplant is an option for advanced cases. Pulmonary rehabilitation helps maintain quality of life. / La FPI es una enfermedad de cicatrizacion progresiva de los pulmones. Los medicamentos antifibroticos pueden retardar la cicatrizacion significativamente.'
  ),

  'nsip': r(
    'nsip', 'Nonspecific Interstitial Pneumonia (NSIP)', 'Neumonia Intersticial No Especifica (NINE)',
    'restrictive', 'CA70.1',
    'Diffuse interstitial lung disease with temporally uniform inflammation and/or fibrosis, often associated with connective tissue disease.',
    ['Connective tissue disease (most common association -- scleroderma, polymyositis, RA)', 'Drug-induced', 'HIV', 'Idiopathic', 'Hypersensitivity pneumonitis (fibrotic)'],
    'Unlike UIP, NSIP shows temporal homogeneity (lesions at same stage). Two subtypes: cellular (predominantly inflammation, better prognosis) and fibrotic (more fibrosis, worse prognosis). Diffuse interstitial inflammation with or without fibrosis. Fibrotic NSIP is the most common ILD pattern in connective tissue disease.',
    ['Progressive dyspnea', 'Dry cough', 'Fatigue', 'Bibasilar crackles', 'Signs of underlying CTD (Raynaud, skin changes, joint symptoms)'],
    ['HRCT: bilateral GGO with reticulation, subpleural sparing (distinguishes from UIP), traction bronchiectasis in fibrotic NSIP, NO honeycombing', 'PFTs: restrictive, reduced DLCO', 'Autoimmune serologies (ANA, anti-Scl-70, anti-Jo1, RF, CCP)', 'Surgical lung biopsy if diagnosis uncertain', 'BAL: lymphocytosis common'],
    'Cellular NSIP: corticosteroids (good response, 1mg/kg prednisone tapered). Fibrotic NSIP: corticosteroids + steroid-sparing agent (mycophenolate, azathioprine). Treat underlying CTD. Antifibrotics (nintedanib) for progressive fibrosing phenotype. Pulmonary rehabilitation. Supplemental O2. Lung transplant for progressive disease.',
    'Medication adherence. Pulmonary rehabilitation. Manage underlying CTD. Vaccination. Bone density monitoring on steroids. Sun protection on immunosuppressants.',
    ['Progressive respiratory failure', 'Acute exacerbation', 'Drug side effects (immunosuppression complications)'],
    'NSIP is a type of lung scarring that is often related to autoimmune conditions. Unlike IPF, it often responds to anti-inflammatory medications. Identifying and treating any underlying autoimmune disease is important. / La NINE es un tipo de cicatrizacion pulmonar frecuentemente relacionada con enfermedades autoinmunes. A menudo responde a medicamentos antiinflamatorios.'
  ),

  'cop': r(
    'cop', 'Cryptogenic Organizing Pneumonia (COP)', 'Neumonia Organizada Criptogenica (NOC)',
    'restrictive', 'CA70.2',
    'Inflammatory lung disease with granulation tissue plugs (Masson bodies) filling alveolar ducts and alveoli, idiopathic form of organizing pneumonia.',
    ['Often idiopathic', 'Post-infectious', 'Drug-induced', 'Connective tissue disease', 'Radiation therapy', 'Organ transplant'],
    'Organizing pneumonia represents an aberrant repair response. Inflammatory exudate in alveoli organizes into granulation tissue plugs (Masson bodies) composed of fibroblasts and connective tissue. These fill alveolar ducts and alveoli, sometimes bronchioles. Unlike pulmonary fibrosis, the lung architecture is preserved. Excellent response to corticosteroids because the process is inflammatory, not fibrotic.',
    ['Subacute cough (weeks to months)', 'Dyspnea', 'Fever and malaise (flu-like)', 'Weight loss', 'Crackles', 'Does not respond to antibiotics (often treated as CAP initially)'],
    ['HRCT: bilateral patchy consolidation (often migratory), GGO, perilobular pattern, reversed halo sign (atoll sign -- characteristic)', 'PFTs: restrictive or mixed', 'BAL: mixed cellularity, lymphocytes and neutrophils', 'Transbronchial or surgical lung biopsy (Masson bodies on pathology)', 'Exclude infection and malignancy'],
    'Corticosteroids: prednisone 0.75-1 mg/kg/day for 1 month, then taper over 6-12 months. Excellent initial response (80%+). Relapse common (25-50%) with rapid taper -- re-treat successfully. Steroid-sparing agents (azathioprine, mycophenolate) for relapsing disease. Macrolides (clarithromycin) for mild cases or steroid adjunct.',
    'Slow steroid taper (avoid rapid reduction to prevent relapse). Monitor for steroid side effects. Calcium and vitamin D supplementation. Glucose monitoring. Bone density testing.',
    ['No response to steroids (reconsider diagnosis)', 'Severe respiratory failure at presentation', 'Progressive disease despite treatment'],
    'COP is a lung condition where inflammation causes tissue plugs to form in the air sacs. The good news is that it usually responds very well to steroid medications. It can relapse when steroids are tapered too quickly. / La NOC es una condicion donde la inflamacion forma tapones en los sacos de aire. Responde muy bien a los esteroides.'
  ),

  'hypersensitivity-pneumonitis': r(
    'hypersensitivity-pneumonitis', 'Hypersensitivity Pneumonitis', 'Neumonitis por Hipersensibilidad',
    'restrictive', 'CA71',
    'Immune-mediated inflammatory lung disease caused by repeated inhalation of organic antigens or chemicals.',
    ['Bird keeping (bird fancier lung)', 'Moldy hay (farmer lung)', 'Hot tub use (hot tub lung -- NTM)', 'Contaminated humidifiers/AC', 'Feather bedding', 'Metalworking fluids', 'Isocyanates', 'Mushroom farming'],
    'Type III (immune complex) and type IV (cell-mediated) hypersensitivity to inhaled antigens. Acute: neutrophilic and lymphocytic alveolitis. Subacute: non-caseating granulomas in peribronchiolar distribution. Chronic/fibrotic: progressive fibrosis indistinguishable from UIP, with or without ongoing exposure. Key distinction from IPF: upper/mid-lung predominance, air trapping, and exposure history.',
    ['Acute: fever, cough, dyspnea 4-8h after exposure (resolves with avoidance)', 'Subacute: progressive cough, dyspnea, weight loss over weeks-months', 'Chronic: progressive fibrosis with dyspnea, cough, clubbing', 'Squeaky crackles on auscultation'],
    ['HRCT: acute/subacute -- diffuse GGO, centrilobular nodules, mosaic attenuation, air trapping on expiratory images; chronic -- fibrosis, honeycombing (upper/mid lung predominance)', 'BAL: lymphocytosis >40% (highly suggestive)', 'Serum precipitins (IgG) to specific antigens (sensitivity limited)', 'PFTs: restrictive (or mixed), reduced DLCO', 'Detailed exposure history (most important diagnostic step)', 'Surgical lung biopsy if needed (poorly formed granulomas, bronchiolocentric inflammation)'],
    'Antigen avoidance (most critical intervention). Acute: remove from exposure, supportive care. Subacute: corticosteroids if persistent. Chronic fibrotic: corticosteroids + mycophenolate or azathioprine. Antifibrotics (nintedanib) if progressive fibrosing phenotype despite immunosuppression. Pulmonary rehabilitation. Lung transplant for end-stage.',
    'Strict antigen avoidance (may require environmental remediation, bird removal, job change). Respirator use if exposure unavoidable. Air filtration. Pulmonary rehabilitation. Regular PFT monitoring.',
    ['Progressive fibrosis despite avoidance', 'Acute severe episode with respiratory failure', 'Chronic fibrotic HP progressing to end-stage'],
    'Hypersensitivity pneumonitis is a lung reaction to inhaled substances like mold or bird proteins. The most important treatment is identifying and avoiding the trigger. If caught early, the disease can be reversible. / La neumonitis por hipersensibilidad es una reaccion pulmonar a sustancias inhaladas. Identificar y evitar el desencadenante es lo mas importante.'
  ),

  'sarcoidosis-pulmonary': r(
    'sarcoidosis-pulmonary', 'Pulmonary Sarcoidosis', 'Sarcoidosis Pulmonar',
    'restrictive', 'CA72',
    'Multisystem granulomatous disease of unknown etiology, most commonly affecting lungs and lymph nodes.',
    ['Age 25-40', 'African American (3x higher incidence, more severe)', 'Northern European descent', 'Scandinavian ancestry', 'Female sex'],
    'Non-caseating granulomas (distinguishes from TB) form in affected organs. CD4+ Th1 cells and macrophages orchestrate granuloma formation. Activated macrophages secrete 1,25-dihydroxyvitamin D (causes hypercalcemia/hypercalciuria). Elevated ACE from granuloma epithelioid cells. Stages: I bilateral hilar lymphadenopathy (BHL) only; II BHL + pulmonary infiltrates; III pulmonary infiltrates without BHL; IV pulmonary fibrosis.',
    ['Dry cough', 'Dyspnea', 'Chest pain', 'Erythema nodosum (good prognostic sign)', 'Lofgren syndrome (BHL + erythema nodosum + fever + polyarthralgia)', 'Fatigue', 'Eye symptoms (uveitis)', 'Skin lesions (lupus pernio)'],
    ['CXR staging (I-IV)', 'HRCT: perilymphatic nodules, BHL, upper lobe predominance', 'Serum ACE (elevated in ~60%, not specific)', 'Calcium (hypercalcemia in 10%)', '24h urine calcium (hypercalciuria more common)', 'PFTs: restrictive, reduced DLCO (or obstructive from endobronchial granulomas)', 'BAL: CD4/CD8 ratio >3.5 suggestive', 'Tissue biopsy: non-caseating granulomas (rule out TB, fungal)', 'Eye exam (slit lamp)'],
    'Many patients need no treatment (spontaneous remission, especially Stage I: 60-80%). Indications for treatment: progressive pulmonary disease, hypercalcemia, cardiac/neuro/eye involvement. First-line: prednisone 20-40mg/day tapered over 6-12 months. Steroid-sparing: methotrexate, azathioprine, mycophenolate. Refractory: infliximab, adalimumab. Hydroxychloroquine for skin and joint involvement.',
    'Medication adherence. Sun protection and adequate hydration (hypercalcemia/calciuria). Calcium monitoring. Regular eye exams. Exercise as tolerated. Avoid excessive vitamin D supplementation. Support groups.',
    ['Cardiac sarcoidosis (arrhythmias, heart block, cardiomyopathy)', 'Neurosarcoidosis (cranial neuropathy, meningitis)', 'Severe hypercalcemia', 'Progressive pulmonary fibrosis', 'Pulmonary hypertension'],
    'Sarcoidosis causes small clusters of inflammatory cells (granulomas) in the lungs and other organs. Many people recover without treatment. When treatment is needed, steroids and other immune-suppressing medications are effective. Regular monitoring is important. / La sarcoidosis causa celulas inflamatorias en los pulmones. Muchos se recuperan sin tratamiento. Cuando se necesita, los esteroides son efectivos.'
  ),

  'asbestosis': r(
    'asbestosis', 'Asbestosis', 'Asbestosis',
    'occupational', 'CA73',
    'Diffuse pulmonary fibrosis caused by inhalation of asbestos fibers, with long latency period.',
    ['Occupational asbestos exposure (mining, insulation, shipbuilding, construction, brake repair)', 'Duration and intensity of exposure', 'Smoking (synergistic with asbestos for lung cancer risk)'],
    'Inhaled asbestos fibers (amphibole > chrysotile) reach alveoli and are phagocytosed by macrophages. Fibers are durable and resist digestion, causing persistent inflammation. Asbestos bodies form (iron-coated fibers, golden-brown, dumbbell-shaped). Progressive interstitial fibrosis begins in lower lobes and subpleural areas. Dose-response relationship: higher exposure = worse fibrosis. Latency 15-20 years.',
    ['Progressive dyspnea on exertion', 'Dry cough', 'Bibasilar crackles', 'Digital clubbing', 'Pleural plaques often coexist'],
    ['Exposure history (essential)', 'HRCT: bilateral lower lobe subpleural reticulation, honeycombing, pleural plaques (hallmark of asbestos exposure but not asbestosis itself)', 'PFTs: restrictive, reduced DLCO', 'BAL: asbestos bodies (not required for diagnosis)', 'Biopsy rarely needed (exposure + imaging + PFTs sufficient)'],
    'No specific treatment reverses fibrosis. Supportive: supplemental O2, pulmonary rehabilitation. Smoking cessation (critical -- asbestos + smoking synergistically increases lung cancer risk 50-80x). Treat complications (pulmonary hypertension, respiratory failure). Monitor for malignancy (lung cancer, mesothelioma). Lung transplant for end-stage disease.',
    'Smoking cessation (critical). Pulmonary rehabilitation. Remove from ongoing exposure. Annual low-dose CT for lung cancer screening. Legal and occupational health resources. Pneumococcal and influenza vaccination.',
    ['Progressive respiratory failure', 'Development of lung cancer', 'Development of mesothelioma', 'Pulmonary hypertension'],
    'Asbestosis is lung scarring from past asbestos exposure, taking 15-20 years to develop. There is no cure, but quitting smoking is critical since the combination dramatically increases cancer risk. Regular screening for lung cancer and mesothelioma is important. / La asbestosis es cicatrizacion pulmonar por exposicion al asbesto. Dejar de fumar es critico ya que la combinacion aumenta dramaticamente el riesgo de cancer.'
  ),

  'silicosis': r(
    'silicosis', 'Silicosis', 'Silicosis',
    'occupational', 'CA74',
    'Occupational lung disease caused by inhalation of crystalline silica dust, causing nodular fibrosis.',
    ['Mining (gold, coal, tin)', 'Sandblasting', 'Stone cutting', 'Tunneling', 'Foundry work', 'Ceramic/pottery manufacturing', 'Denim sandblasting'],
    'Inhaled crystalline silica (quartz) particles are phagocytosed by alveolar macrophages. Silica is directly cytotoxic to macrophages, causing release of inflammatory mediators and fibrogenic factors (IL-1, TNF-alpha, TGF-beta). Classic silicotic nodules: concentric whorled collagen fibers with birefringent silica particles visible under polarized light. Simple silicosis: small nodules (<1 cm). Complicated/PMF: coalescent masses >1 cm. Increased risk of TB (impaired macrophage function).',
    ['Often asymptomatic in simple form', 'Progressive dyspnea', 'Cough', 'Simple silicosis: may be incidental on CXR', 'PMF: severe dyspnea, cor pulmonale', 'Increased susceptibility to TB'],
    ['Occupational exposure history', 'CXR: upper lobe small rounded opacities (simple); large opacities >1 cm (PMF); eggshell calcification of hilar lymph nodes (pathognomonic)', 'CT chest: upper lobe nodules, PMF masses, eggshell calcification', 'PFTs: mixed restrictive and obstructive; reduced DLCO', 'TB screening (annual, given increased risk)'],
    'No specific treatment. Remove from silica exposure (most important). Supportive: supplemental O2, pulmonary rehabilitation. Annual TB screening and aggressive treatment if positive (prolonged course recommended). Treat complications. Whole lung lavage controversial (acute silicosis/silicoproteinosis). Lung transplant for end-stage PMF.',
    'Remove from silica exposure. Respiratory protection (N95 or PAPR). Wet drilling and dust suppression. Annual TB screening. Smoking cessation. Regular PFT monitoring. Legal/occupational health resources.',
    ['Progressive massive fibrosis', 'TB superinfection', 'Respiratory failure', 'Cor pulmonale', 'Increased risk of lung cancer (IARC Group 1 carcinogen)'],
    'Silicosis is caused by breathing in silica dust at work. It causes permanent lung scarring. The most important step is to stop further exposure. Regular TB testing is needed because silicosis weakens lung defenses. / La silicosis es causada por inhalar polvo de silice. Lo mas importante es detener la exposicion. Se necesitan pruebas regulares de TB.'
  ),

  'coal-workers-pneumoconiosis': r(
    'coal-workers-pneumoconiosis', 'Coal Workers Pneumoconiosis', 'Neumoconiosis de los Trabajadores del Carbon',
    'occupational', 'CA75',
    'Lung disease from inhalation of coal dust, ranging from simple (coal macules) to complicated (progressive massive fibrosis).',
    ['Coal mining (underground > surface)', 'Duration of exposure (dose-response)', 'Anthracite coal (higher risk than bitite)'],
    'Coal dust particles (1-5 microns) deposited in respiratory bronchioles. Coal macules form: dust-laden macrophages surrounded by reticulin fibers. Simple CWP: coal macules and nodules without significant fibrosis. Complicated CWP/PMF: coalescent fibrotic masses >1 cm, typically in upper lobes. Caplan syndrome: CWP + RA with necrobiotic nodules. Melanoptysis: black sputum (pathognomonic).',
    ['Often asymptomatic (simple CWP)', 'Cough with black sputum (melanoptysis)', 'Progressive dyspnea (PMF)', 'Cor pulmonale in advanced disease'],
    ['Occupational history', 'CXR: small rounded opacities upper lobes (simple); large opacities (PMF)', 'CT chest', 'PFTs: may be normal (simple) or mixed pattern (PMF)', 'Exclude TB and lung cancer'],
    'No specific treatment. Remove from coal dust exposure. Supportive care: supplemental O2, bronchodilators if obstructive component, pulmonary rehabilitation. Treat complications. Federal Black Lung Program benefits (US).',
    'Remove from exposure. Dust suppression in mines. Respiratory protection. Regular chest imaging surveillance. Smoking cessation. Exercise program.',
    ['Progressive massive fibrosis', 'Respiratory failure', 'Cor pulmonale', 'TB superinfection (less than silicosis but increased)'],
    'Coal workers pneumoconiosis is a lung disease from breathing coal dust over years. Simple forms may cause no symptoms, but progressive massive fibrosis can lead to severe breathing problems. Stopping exposure is most important. / La neumoconiosis del carbon es por inhalar polvo de carbon. Detener la exposicion es lo mas importante.'
  ),

  'berylliosis': r(
    'berylliosis', 'Berylliosis (Chronic Beryllium Disease)', 'Beriliosis (Enfermedad Cronica por Berilio)',
    'occupational', 'CA76',
    'Granulomatous lung disease from beryllium exposure, clinically and pathologically resembling sarcoidosis.',
    ['Aerospace industry', 'Nuclear weapons/reactor work', 'Electronics manufacturing', 'Dental alloy work', 'Ceramics', 'Genetic susceptibility (HLA-DPB1 Glu69)'],
    'Cell-mediated (type IV) hypersensitivity to beryllium. Beryllium acts as a hapten, binding to HLA-DP molecules and activating CD4+ T cells. Chronic granulomatous inflammation with non-caseating granulomas indistinguishable from sarcoidosis. Beryllium lymphocyte proliferation test (BeLPT) distinguishes from sarcoidosis. Can develop after minimal exposure in genetically susceptible individuals.',
    ['Progressive dyspnea', 'Dry cough', 'Fatigue', 'Weight loss', 'Chest pain', 'Skin granulomas at exposure sites', 'Clinically identical to sarcoidosis'],
    ['Beryllium lymphocyte proliferation test (BeLPT) from blood and/or BAL (positive confirms sensitization/disease)', 'Occupational exposure history', 'HRCT: similar to sarcoidosis (upper lobe nodules, GGO, lymphadenopathy)', 'BAL: lymphocytosis with positive BeLPT', 'Biopsy: non-caseating granulomas (cannot distinguish from sarcoidosis by pathology alone)', 'PFTs: restrictive, reduced DLCO'],
    'Remove from beryllium exposure. Corticosteroids for symptomatic or progressive disease (similar to sarcoidosis treatment). Steroid-sparing agents (methotrexate, azathioprine) for chronic disease. Supplemental O2. Pulmonary rehabilitation. Workplace surveillance programs.',
    'Strict removal from beryllium exposure. Engineering controls and respiratory protection in workplace. Medical surveillance for exposed workers (BeLPT screening). Workers compensation and disability claims.',
    ['Progressive pulmonary fibrosis', 'Cor pulmonale', 'Respiratory failure'],
    'Berylliosis is a lung disease from beryllium exposure at work that looks like sarcoidosis. The BeLPT blood test confirms the diagnosis. Removing exposure and steroid treatment are the mainstays. / La beriliosis es una enfermedad pulmonar por exposicion al berilio. Remover la exposicion y los esteroides son el tratamiento principal.'
  ),

  // ==========================================================================
  // CONGENITAL / GENETIC (2)
  // ==========================================================================

  'cystic-fibrosis': r(
    'cystic-fibrosis', 'Cystic Fibrosis', 'Fibrosis Quistica',
    'congenital', 'CA25',
    'Autosomal recessive disorder caused by CFTR gene mutations, producing thick secretions affecting lungs, pancreas, and other organs.',
    ['CFTR gene mutations (F508del most common, ~70%)', 'Autosomal recessive inheritance', 'Caucasian descent (highest prevalence: 1/2500-3000)'],
    'CFTR protein is a chloride channel on epithelial cells. Mutations cause defective chloride and bicarbonate transport. In airways: reduced ASL volume and impaired mucociliary clearance. Thick, dehydrated mucus plugs airways, creating niche for chronic bacterial infection (Pseudomonas aeruginosa, Staphylococcus aureus, Burkholderia cepacia). Chronic neutrophilic inflammation causes bronchiectasis. Pancreatic duct obstruction leads to exocrine insufficiency. Elevated sweat chloride (>60 mEq/L) is diagnostic hallmark.',
    ['Chronic productive cough', 'Recurrent pulmonary infections', 'Bronchiectasis', 'Hemoptysis', 'Nasal polyps and chronic sinusitis', 'Malabsorption and steatorrhea', 'Failure to thrive in children', 'Male infertility (CBAVD)', 'Meconium ileus (neonatal)', 'Digital clubbing', 'CF-related diabetes'],
    ['Newborn screening (IRT)', 'Sweat chloride test (>60 mEq/L diagnostic)', 'CFTR genotyping (identifies specific mutations -- critical for CFTR modulator selection)', 'PFTs (obstructive pattern, FEV1 is key prognostic marker)', 'Sputum culture (track colonization)', 'CT chest (bronchiectasis, mucus plugging)', 'Fecal elastase (pancreatic insufficiency)'],
    'CFTR modulators (transformative therapy): ivacaftor (G551D), lumacaftor-ivacaftor, tezacaftor-ivacaftor, elexacaftor-tezacaftor-ivacaftor (Trikafta -- for F508del, ~90% of patients). Airway clearance: chest physiotherapy, PEP devices, vest therapy, inhaled hypertonic saline, dornase alfa (Pulmozyme). Inhaled antibiotics (tobramycin, aztreonam) for Pseudomonas. Oral azithromycin chronically. Pancreatic enzyme replacement. Fat-soluble vitamin supplementation (ADEK). CFRD management. Lung transplant for end-stage.',
    'Daily airway clearance (2-3 sessions). High-calorie, high-fat diet (>120% normal caloric needs). Pancreatic enzyme replacement with meals. Exercise (improves mucociliary clearance). Avoid cross-infection (CF patient segregation). Hand hygiene. Annual influenza vaccination. Transition to adult CF care.',
    ['Massive hemoptysis', 'Pneumothorax', 'Acute severe exacerbation with FEV1 decline', 'Allergic bronchopulmonary aspergillosis', 'Respiratory failure', 'B. cepacia syndrome (fulminant sepsis)'],
    'Cystic fibrosis is a genetic condition that causes thick, sticky mucus in the lungs and digestive system. New CFTR modulator medications (like Trikafta) have dramatically improved outcomes for many patients. Daily airway clearance and good nutrition are essential. / La fibrosis quistica es una condicion genetica. Los nuevos medicamentos moduladores del CFTR han mejorado dramaticamente los resultados para muchos pacientes.'
  ),

  'alpha1-antitrypsin': r(
    'alpha1-antitrypsin', 'Alpha-1 Antitrypsin Deficiency', 'Deficiencia de Alfa-1 Antitripsina',
    'congenital', 'CA22.2',
    'Genetic disorder with deficient AAT protein causing early-onset emphysema and liver disease.',
    ['ZZ or SZ genotype (autosomal codominant)', 'Smoking (dramatically accelerates disease)', 'Northern European ancestry'],
    'AAT (from liver) inhibits neutrophil elastase in lungs. ZZ homozygotes: misfolded protein polymerizes in hepatocytes (liver disease) and serum levels fall below protective threshold (<57 mg/dL). Unopposed elastase destroys alveolar walls causing panacinar, basilar-predominant emphysema. Smoking dramatically accelerates destruction.',
    ['Early-onset emphysema (30-50 years)', 'Basilar-predominant COPD', 'Family history of early COPD/liver disease', 'Hepatomegaly or cirrhosis', 'Panniculitis (rare)'],
    ['Serum AAT level (<57 mg/dL)', 'Pi typing or genotyping', 'Spirometry (obstructive)', 'CT chest (basilar panacinar emphysema)', 'Liver function tests'],
    'IV augmentation therapy (pooled human AAT, 60 mg/kg weekly). Standard COPD therapy. Absolute smoking avoidance. Lung transplant for end-stage. Liver transplant for liver failure (curative). Gene therapy investigational.',
    'Absolute smoking avoidance. Avoid occupational dust/fumes. Pulmonary rehabilitation. Genetic counseling. Hepatitis A/B vaccination. Limit alcohol.',
    ['Rapid FEV1 decline', 'Liver failure signs', 'Acute respiratory failure'],
    'Alpha-1 antitrypsin deficiency is a genetic condition where a protective lung protein is missing. Smoking makes it dramatically worse. Weekly IV infusions replace the missing protein. / La deficiencia de alfa-1 antitripsina es genetica. Fumar lo empeora dramaticamente. Infusiones IV semanales reemplazan la proteina.'
  ),

  // ==========================================================================
  // UPPER AIRWAY CONDITIONS (8)
  // ==========================================================================

  'laryngitis': r(
    'laryngitis', 'Laryngitis', 'Laringitis',
    'upper-airway', 'CA10',
    'Inflammation of the larynx causing hoarseness, most commonly from viral infection or voice overuse.',
    ['Viral URI (most common)', 'Voice overuse or misuse', 'GERD', 'Smoking', 'Inhaled corticosteroids', 'Environmental irritants', 'Allergies'],
    'Acute: viral infection (rhinovirus, influenza, parainfluenza) or bacterial superinfection causes laryngeal mucosal edema, erythema, and impaired vocal cord vibration. Chronic: persistent irritation from GERD, smoking, voice abuse, or inhaled steroids causes epithelial changes, polypoid degeneration, or contact ulcers. Reinke edema from smoking causes polypoid changes in superficial lamina propria.',
    ['Hoarseness or voice changes', 'Sore throat', 'Dry cough', 'Throat clearing', 'Globus sensation', 'Voice fatigue', 'Aphonia in severe cases'],
    ['Clinical diagnosis based on history', 'Laryngoscopy if symptoms >3 weeks (rule out malignancy, vocal cord lesion)', 'Stroboscopy for detailed vocal cord assessment', 'Consider GERD workup if chronic'],
    'Acute viral: supportive care -- voice rest, hydration, humidified air, analgesics. Avoid whispering (more strain than soft voice). Antibiotics only if bacterial suspected. GERD-related: PPI therapy. Voice misuse: speech therapy. Smoking-related: smoking cessation. ICS-related: rinse mouth after use, spacer device. Chronic: treat underlying cause. Surgery for vocal cord polyps/nodules refractory to therapy.',
    'Voice rest (reduce volume, avoid shouting). Hydration (8+ glasses water daily). Humidify air. Avoid caffeine and alcohol (dehydrating). Smoking cessation. Rinse mouth after ICS. GERD precautions.',
    ['Stridor or difficulty breathing', 'Hoarseness >3 weeks (rule out malignancy)', 'Hemoptysis', 'Dysphagia', 'Weight loss'],
    'Laryngitis is inflammation of the voice box causing hoarseness. Most cases are from viruses or voice overuse and resolve with rest and hydration. See a doctor if hoarseness lasts more than 3 weeks. / La laringitis es inflamacion de la laringe. La mayoria se resuelve con reposo de voz e hidratacion. Consulte si la ronquera dura mas de 3 semanas.'
  ),

  'epiglottitis': r(
    'epiglottitis', 'Epiglottitis', 'Epiglotitis',
    'upper-airway', 'CA11',
    'Acute life-threatening infection/inflammation of the epiglottis and supraglottic structures, can cause rapid airway obstruction.',
    ['Previously: H. influenzae type b (children) -- now rare with Hib vaccine', 'Adults: S. pneumoniae, S. aureus, Streptococcus spp., H. influenzae (non-typeable)', 'Immunocompromised', 'Thermal/caustic injury', 'Crack cocaine inhalation'],
    'Infection causes rapid edema of epiglottis and aryepiglottic folds. Swollen epiglottis acts as ball-valve, progressively obstructing airway. Can progress from sore throat to complete obstruction in hours. In children: classic cherry-red swollen epiglottis. Adults: may have more indolent course but still risk sudden obstruction. Cellulitis can spread to deep neck spaces.',
    ['Severe sore throat out of proportion to exam', 'Dysphagia and drooling', 'Muffled "hot potato" voice', 'Stridor (late, ominous sign)', 'Tripod position (sitting upright, leaning forward, neck extended)', 'High fever', 'Respiratory distress', 'Anxiety'],
    ['Lateral neck X-ray: thumbprint sign (swollen epiglottis)', 'DO NOT examine pharynx in children with suspected epiglottitis (may precipitate complete obstruction)', 'Flexible nasopharyngoscopy in adults (in controlled setting)', 'CT neck if diagnosis uncertain (adults)', 'Blood cultures', 'Epiglottic cultures if intubated'],
    'Airway management is PRIORITY. Children: to OR for controlled intubation with ENT/anesthesia standby for surgical airway. Adults: close monitoring in ICU, intubation if signs of obstruction. IV antibiotics: ceftriaxone or ampicillin-sulbactam + vancomycin if MRSA suspected. Corticosteroids (dexamethasone) may reduce edema (debated). Racemic epinephrine nebulization. Keep patient calm and in position of comfort. Do NOT separate child from parent.',
    'Hib vaccination (virtually eliminated childhood epiglottitis). Prompt medical attention for severe sore throat with drooling or voice changes. Keep vaccinations current.',
    ['Stridor (indicates critical narrowing)', 'Complete airway obstruction', 'Respiratory arrest', 'Inability to swallow secretions', 'Rapid clinical deterioration'],
    'Epiglottitis is a dangerous swelling of the flap that covers the windpipe. It can block breathing rapidly. This is a medical emergency requiring hospital care. The Hib vaccine has made this much rarer in children. / La epiglotitis es una inflamacion peligrosa que puede bloquear la respiracion rapidamente. Es una emergencia medica.'
  ),

  'croup': r(
    'croup', 'Croup (Laryngotracheobronchitis)', 'Crup (Laringotraqueobronquitis)',
    'upper-airway', 'CA12',
    'Viral infection causing subglottic inflammation and edema, primarily in children 6 months to 3 years.',
    ['Age 6 months to 3 years', 'Fall and winter seasonality', 'Male sex (1.5:1)', 'Parainfluenza virus type 1 (most common)', 'Prior episodes'],
    'Parainfluenza virus (types 1 and 3 most common), also RSV, influenza, adenovirus. Infection causes inflammation and edema of the subglottic area (narrowest part of pediatric airway). Subglottic swelling of 1mm reduces cross-sectional area by 44% in infants. Produces characteristic barking cough and inspiratory stridor. Typically preceded by URI prodrome. Spasmodic croup: recurrent episodes without URI, possibly allergic.',
    ['Barking "seal-like" cough', 'Inspiratory stridor', 'Hoarse voice', 'Low-grade fever', 'URI prodrome (rhinorrhea, cough)', 'Symptoms worse at night', 'Substernal retractions in moderate-severe'],
    ['Clinical diagnosis', 'AP neck X-ray: steeple sign (subglottic narrowing) -- often not needed', 'Westley croup score for severity assessment', 'Pulse oximetry', 'Differentiate from epiglottitis (no drooling, no toxic appearance, gradual onset)'],
    'Mild (no stridor at rest): dexamethasone single dose 0.6 mg/kg PO/IM (reduces severity, return visits, hospitalization). Cool mist humidifier (traditional, evidence limited). Moderate (stridor at rest): dexamethasone + nebulized racemic epinephrine (observe 3-4h for rebound). Severe: nebulized epinephrine, dexamethasone, supplemental O2, consider ICU. Heliox (helium-oxygen mixture) for severe cases. Intubation rarely needed (use tube 0.5-1mm smaller than age-calculated).',
    'Cool mist humidifier at bedside. Keep child calm (crying worsens obstruction). Comfort measures. Adequate fluids. Return if stridor at rest, retractions worsen, or child appears distressed.',
    ['Stridor at rest that does not improve with epinephrine', 'Severe retractions and respiratory distress', 'Cyanosis', 'Altered mental status', 'Drooling (consider epiglottitis instead)'],
    'Croup is a viral infection that causes swelling below the voice box, creating a barking cough and sometimes noisy breathing. A single dose of steroid medicine is very effective. Most children recover in 3-5 days. Seek emergency care if your child has difficulty breathing or turns blue. / El crup causa tos perruna e inflamacion. Una dosis de esteroide es muy efectiva. Busque emergencia si su hijo tiene dificultad para respirar.'
  ),

  'tracheitis': r(
    'tracheitis', 'Bacterial Tracheitis', 'Traqueitis Bacteriana',
    'upper-airway', 'CA13',
    'Severe bacterial infection of the trachea, often following viral croup, causing toxic appearance with high-grade airway obstruction.',
    ['Prior viral croup or URI', 'Age 6 months to 8 years', 'S. aureus (most common pathogen)', 'Also: Streptococcus, Moraxella, H. influenzae'],
    'Bacterial superinfection of tracheal mucosa following viral injury. Thick mucopurulent exudate and pseudomembranes form within the trachea, causing progressive airway obstruction. Unlike croup, does not respond to standard croup treatment. Subglottic edema plus intraluminal purulent debris. Can be rapidly progressive.',
    ['Toxic appearance with high fever', 'Barking cough (like croup but worsening)', 'Stridor not responding to epinephrine/dexamethasone', 'Thick purulent secretions', 'Progressive respiratory distress'],
    ['Clinical suspicion: croup not responding to standard therapy with toxic appearance', 'Laryngoscopy/bronchoscopy (diagnostic and therapeutic -- purulent tracheal secretions, pseudomembranes)', 'Tracheal cultures', 'CXR may show subglottic narrowing with irregular tracheal margins', 'Blood cultures', 'CBC with marked leukocytosis'],
    'Airway management: may need intubation (30-60%). IV antibiotics: anti-staphylococcal (cefazolin, nafcillin) + broad-spectrum (ceftriaxone). Add vancomycin if MRSA suspected. Frequent suctioning of tracheal secretions. Bronchoscopic debridement if thick pseudomembranes. ICU monitoring. Duration: IV antibiotics 10-14 days.',
    'Recognition that croup not responding to standard treatment may be bacterial tracheitis. Prompt escalation. ICU care.',
    ['Complete airway obstruction', 'Respiratory failure', 'Toxic shock from S. aureus', 'Pneumonia from aspiration of purulent secretions'],
    'Bacterial tracheitis is a serious infection of the windpipe that can look like severe croup. Unlike croup, it does not respond to standard treatments and needs strong antibiotics and often a breathing tube. Prompt recognition is critical. / La traqueitis bacteriana es una infeccion seria de la traquea. A diferencia del crup, necesita antibioticos fuertes y a menudo intubacion.'
  ),

  'allergic-rhinitis': r(
    'allergic-rhinitis', 'Allergic Rhinitis', 'Rinitis Alergica',
    'upper-airway', 'CA08',
    'IgE-mediated inflammation of the nasal mucosa triggered by inhaled allergens.',
    ['Family history of atopy', 'Exposure to allergens (pollen, dust mites, mold, pet dander)', 'Early childhood antibiotic use (debated)', 'Urban environment'],
    'IgE-mediated type I hypersensitivity. Initial sensitization: allergen presentation to Th2 cells drives IgE production by B cells. IgE binds mast cell surface FcepsilonRI receptors. Re-exposure: allergen cross-links IgE, triggering mast cell degranulation. Early phase (minutes): histamine, leukotrienes, prostaglandins cause vasodilation, edema, rhinorrhea, sneezing. Late phase (4-8h): eosinophils and Th2 cells sustain inflammation, nasal congestion predominates.',
    ['Sneezing (paroxysmal)', 'Clear rhinorrhea', 'Nasal congestion', 'Nasal and ocular pruritus', 'Watery eyes', 'Allergic shiners (dark circles under eyes)', 'Allergic salute (upward nose rubbing)', 'Nasal crease', 'Pale, boggy turbinates', 'Postnasal drip'],
    ['Clinical diagnosis based on history and exam', 'Skin prick testing (identifies specific allergens)', 'Serum specific IgE (ImmunoCAP)', 'Total IgE (may be elevated)', 'Nasal cytology (eosinophils)', 'Anterior rhinoscopy/nasal endoscopy'],
    'Allergen avoidance measures. Intranasal corticosteroids (fluticasone, mometasone) -- most effective single therapy. Second-generation antihistamines (cetirizine, loratadine, fexofenadine). Intranasal antihistamines (azelastine). Leukotriene receptor antagonist (montelukast -- less effective, use if asthma coexists). Intranasal cromolyn for mild symptoms. Ipratropium nasal spray for rhinorrhea-predominant. Nasal saline irrigation. Allergen immunotherapy (subcutaneous or sublingual) for refractory cases: modifies disease course.',
    'Allergen avoidance (HEPA filters, dust mite covers, keep windows closed during pollen season, shower after outdoor activity, remove carpets). Nasal saline irrigation daily. Exercise (may temporarily improve congestion). Monitor pollen counts.',
    ['Rarely emergent', 'Complications: sinusitis, otitis media, asthma exacerbation', 'Sleep disturbance and impaired quality of life', 'Anaphylaxis (rare, with immunotherapy injections)'],
    'Allergic rhinitis is caused by your immune system overreacting to things like pollen or dust. Nasal steroid sprays are the most effective treatment. Avoiding your triggers and using nasal saline washes also help significantly. / La rinitis alergica es una reaccion exagerada del sistema inmunologico. Los aerosoles nasales con esteroides son el tratamiento mas efectivo.'
  ),

  'sinusitis-acute': r(
    'sinusitis-acute', 'Acute Sinusitis', 'Sinusitis Aguda',
    'upper-airway', 'CA09.0',
    'Inflammation of paranasal sinuses lasting <4 weeks, most commonly viral with bacterial superinfection in a minority.',
    ['Viral URI (most common preceding event)', 'Allergic rhinitis', 'Nasal polyps', 'Deviated septum', 'Dental infection', 'Immunodeficiency', 'Smoking', 'Swimming/diving'],
    'Viral sinusitis (90-98%): viral URI causes mucosal edema, impaired mucociliary clearance, and sinus ostia obstruction. Retained mucus in obstructed sinuses. Most resolve spontaneously. Bacterial sinusitis (2-10%): secondary bacterial infection (S. pneumoniae, H. influenzae, M. catarrhalis) develops when sinus drainage is impaired. Diagnosed when symptoms persist >10 days, severe onset (high fever + purulent discharge for 3-4 days), or biphasic illness (worsening after initial improvement).',
    ['Facial pain/pressure over affected sinuses', 'Nasal congestion and obstruction', 'Purulent nasal discharge', 'Postnasal drip', 'Anosmia/hyposmia', 'Headache', 'Cough (especially at night)', 'Fever', 'Dental pain (maxillary sinusitis)'],
    ['Clinical diagnosis (imaging not needed for uncomplicated acute)', 'CT sinuses if: complications suspected, recurrent, or pre-surgical planning', 'Sinus transillumination (limited utility)', 'Nasal endoscopy (purulent discharge from middle meatus)', 'Sinus culture (endoscopically-guided) for refractory or complicated cases'],
    'Viral sinusitis: symptomatic care -- nasal saline irrigation, intranasal decongestant (oxymetazoline, max 3 days), oral decongestant (pseudoephedrine), analgesics, intranasal corticosteroids. Bacterial sinusitis: first-line amoxicillin or amoxicillin-clavulanate (5-7 days). Second-line: respiratory fluoroquinolone or doxycycline. Watchful waiting appropriate for mild bacterial sinusitis. Intranasal corticosteroids as adjunct.',
    'Nasal saline irrigation (neti pot or squeeze bottle). Hydration. Steam inhalation. Avoid irritants and smoke. Treat underlying allergic rhinitis. Hand hygiene to prevent URIs.',
    ['Orbital complications (periorbital cellulitis, orbital abscess -- eye swelling, proptosis, visual changes)', 'Intracranial complications (meningitis, brain abscess, cavernous sinus thrombosis)', 'Frontal bone osteomyelitis (Pott puffy tumor)', 'Severe headache with high fever'],
    'Acute sinusitis is inflammation of the sinuses, usually from a viral cold. Most cases resolve without antibiotics in 7-10 days. Saline nasal rinses are very helpful. Antibiotics are only needed if symptoms last more than 10 days or are very severe. / La sinusitis aguda usualmente se resuelve sin antibioticos. Los enjuagues nasales con solucion salina son muy utiles.'
  ),

  'sinusitis-chronic': r(
    'sinusitis-chronic', 'Chronic Sinusitis', 'Sinusitis Cronica',
    'upper-airway', 'CA09.1',
    'Sinus inflammation lasting >=12 weeks despite treatment, classified with or without nasal polyps.',
    ['Allergic rhinitis', 'Nasal polyps', 'Asthma (especially AERD/Samter triad)', 'Immunodeficiency', 'CF', 'Ciliary dyskinesia', 'GERD', 'Environmental pollutants', 'Dental disease', 'Aspirin-exacerbated respiratory disease'],
    'Two phenotypes: CRSwNP (with nasal polyps -- Th2/eosinophilic, associated with asthma/AERD) and CRSsNP (without polyps -- Th1/neutrophilic). Persistent mucosal inflammation, impaired mucociliary clearance, biofilm formation, and osteitic bone changes. Samter triad: nasal polyps + asthma + aspirin/NSAID sensitivity (COX-1 inhibition shifts to leukotriene pathway). Biofilms make bacteria resistant to antibiotics.',
    ['Nasal congestion (primary symptom)', 'Purulent or mucopurulent drainage', 'Facial pain/pressure', 'Anosmia/hyposmia (especially with polyps)', 'Postnasal drip', 'Cough', 'Fatigue', 'Headache'],
    ['CT sinuses (gold standard imaging): mucosal thickening, opacification, polyps', 'Nasal endoscopy (polyps, purulent discharge)', 'Must have >=2 cardinal symptoms + objective evidence (endoscopy or CT) for >=12 weeks', 'Allergy testing', 'Consider: CF sweat test, immunoglobulins, ciliary biopsy if refractory', 'Tissue biopsy if unilateral (rule out malignancy, fungal ball)'],
    'CRSsNP: saline irrigations, intranasal corticosteroids, short course antibiotics (culture-directed, 3-4 weeks). CRSwNP: intranasal corticosteroids (high-volume rinse delivery), short burst oral steroids, biologic therapy (dupilumab, omalizumab, mepolizumab for refractory). Aspirin desensitization for AERD. FESS (functional endoscopic sinus surgery) for refractory cases or complications. Maximal medical therapy before surgery. Postoperative: continued medical therapy essential to prevent recurrence.',
    'Daily high-volume saline irrigation. Intranasal steroid adherence. Allergen avoidance. Avoid aspirin/NSAIDs if AERD. Humidify air. Exercise. Smoking cessation.',
    ['Unilateral symptoms or bloody discharge (rule out malignancy)', 'Orbital complications', 'Intracranial complications', 'Vision changes', 'Severe headache'],
    'Chronic sinusitis is persistent sinus inflammation lasting more than 12 weeks. Daily saline nasal rinses and nasal steroid sprays are the foundation of treatment. Surgery may help when medications are not enough. New biologic medications offer hope for severe cases with polyps. / La sinusitis cronica dura mas de 12 semanas. Los enjuagues nasales y esteroides nasales son la base del tratamiento.'
  ),

  'nasal-polyps': r(
    'nasal-polyps', 'Nasal Polyps', 'Polipos Nasales',
    'upper-airway', 'CA09.2',
    'Benign, edematous growths from the nasal and sinus mucosa, associated with chronic inflammation.',
    ['Chronic rhinosinusitis', 'Asthma', 'Aspirin-exacerbated respiratory disease (AERD/Samter triad)', 'Cystic fibrosis', 'Allergic fungal sinusitis', 'Eosinophilic granulomatosis with polyangiitis'],
    'Type 2 (Th2) inflammation drives eosinophilic infiltration and IL-4/IL-5/IL-13 production. Edema and prolapse of sinus mucosa into nasal cavity. Arise most commonly from ethmoid sinuses via middle meatus. Bilateral polyps are inflammatory; unilateral polyp should raise concern for inverted papilloma or malignancy. Antrochoanal polyp: single polyp from maxillary sinus, more common in children.',
    ['Nasal obstruction', 'Anosmia/hyposmia (hallmark)', 'Rhinorrhea', 'Postnasal drip', 'Facial pressure', 'Snoring', 'Mouth breathing'],
    ['Nasal endoscopy (direct visualization)', 'CT sinuses (polyp opacification, assess extent)', 'Biopsy if unilateral (rule out malignancy)', 'Allergy testing', 'Aspirin challenge if AERD suspected', 'CF testing in children'],
    'Intranasal corticosteroids (first-line: mometasone, fluticasone -- high-dose delivery via rinse or spray). Short course oral corticosteroids for severe obstruction. Biologics for refractory CRSwNP: dupilumab (anti-IL-4/13), omalizumab (anti-IgE), mepolizumab (anti-IL-5). Polypectomy/FESS for refractory cases (recurrence common without medical maintenance). Aspirin desensitization after surgery for AERD.',
    'Daily nasal saline irrigation. Intranasal steroid adherence (lifelong). Allergen avoidance. Avoid aspirin/NSAIDs if AERD. Regular ENT follow-up.',
    ['Complete nasal obstruction', 'Orbital complications', 'Unilateral polyp (biopsy to rule out malignancy)', 'Mucocele formation'],
    'Nasal polyps are non-cancerous growths in the nose that cause congestion and loss of smell. Steroid nasal sprays are the main treatment. New biologic injections can shrink polyps significantly. Surgery may be needed but polyps often recur without ongoing medication. / Los polipos nasales son crecimientos no cancerosos. Los esteroides nasales son el tratamiento principal. Los biologicos pueden reducirlos significativamente.'
  ),

// === PLACEHOLDER_SPLIT_2 ===
};
