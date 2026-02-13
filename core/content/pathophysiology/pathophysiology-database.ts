// =============================================================================
// Biological Self — Pathophysiology Database
// 30+ entries explaining disease mechanisms at the systems level
// =============================================================================

export type PathophysiologySystem =
  | 'cardiovascular'
  | 'respiratory'
  | 'neurologic'
  | 'endocrine'
  | 'gi'
  | 'renal'
  | 'hematologic'
  | 'musculoskeletal'
  | 'immune'
  | 'multi-system';

export interface PathophysiologyEntry {
  id: string;
  name: string;
  nameEs: string;
  system: PathophysiologySystem;
  summary: string;
  normalPhysiology: string;
  diseaseMechanism: string;
  cascadeEffects: string[];
  clinicalManifestations: string[];
  diagnosticClues: string[];
  treatmentRationale: string;
  relatedConditions: string[];
  keyConceptsLevel1: string;
  keyConceptsLevel5: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------
function pp(entry: PathophysiologyEntry): PathophysiologyEntry {
  return entry;
}

// =============================================================================
// PATHOPHYSIOLOGY_ENTRIES
// =============================================================================

export const PATHOPHYSIOLOGY_ENTRIES: Record<string, PathophysiologyEntry> = {
  // ===========================================================================
  // CARDIOVASCULAR (5)
  // ===========================================================================

  'atherosclerosis-cascade': pp({
    id: 'atherosclerosis-cascade',
    name: 'Atherosclerosis Cascade',
    nameEs: 'Cascada de Aterosclerosis',
    system: 'cardiovascular',
    summary: 'Progressive lipid-driven arterial wall inflammation leading to plaque formation, stenosis, and acute thrombotic events.',
    normalPhysiology: 'Arteries have a smooth endothelial lining that resists thrombosis, regulates tone via nitric oxide, and allows laminar blood flow. The intima, media, and adventitia maintain structural integrity.',
    diseaseMechanism: 'Endothelial injury from hypertension, smoking, or dyslipidemia allows LDL infiltration into the subendothelial space. Oxidized LDL triggers monocyte recruitment and macrophage foam cell formation. Smooth muscle cells migrate and form a fibrous cap over the lipid core. Unstable plaques rupture, exposing thrombogenic material and triggering acute thrombus formation.',
    cascadeEffects: [
      'Progressive luminal narrowing reduces distal perfusion',
      'Plaque rupture triggers platelet aggregation and thrombus',
      'Complete occlusion causes downstream ischemia and infarction',
      'Chronic inflammation promotes further endothelial dysfunction',
      'Vascular remodeling leads to aneurysmal or stenotic changes',
    ],
    clinicalManifestations: [
      'Stable angina with exertion',
      'Acute coronary syndrome (unstable angina, STEMI, NSTEMI)',
      'Transient ischemic attack or stroke',
      'Peripheral artery disease with claudication',
      'Mesenteric ischemia',
    ],
    diagnosticClues: [
      'Elevated LDL, low HDL, high hs-CRP',
      'Coronary artery calcium score on CT',
      'Ankle-brachial index < 0.9',
      'Stress testing with ischemic changes',
      'Carotid intima-media thickness on ultrasound',
    ],
    treatmentRationale: 'Statins reduce LDL and stabilize plaques. Antiplatelet agents prevent thrombosis on disrupted plaques. Antihypertensives reduce shear stress on the endothelium. Lifestyle modifications address modifiable risk factors at the root of endothelial injury.',
    relatedConditions: ['coronary-artery-disease', 'peripheral-artery-disease', 'stroke-ischemia', 'hypertension-pathways'],
    keyConceptsLevel1: 'Arteries can get clogged like pipes. Fatty substances build up inside blood vessel walls over many years. If a chunk breaks off, it can block blood flow and cause a heart attack or stroke.',
    keyConceptsLevel5: 'Atherosclerosis is a chronic inflammatory process initiated by endothelial dysfunction and subintimal LDL oxidation. Macrophage-derived foam cells, T-lymphocyte activation, and smooth muscle cell migration create a necrotic lipid core beneath a fibrous cap. Vulnerable thin-cap fibroatheromas are prone to rupture, exposing tissue factor to the bloodstream and triggering the coagulation cascade, resulting in acute luminal thrombosis.',
  }),

  'heart-failure-pathophysiology': pp({
    id: 'heart-failure-pathophysiology',
    name: 'Heart Failure Pathophysiology',
    nameEs: 'Fisiopatologia de la Insuficiencia Cardiaca',
    system: 'cardiovascular',
    summary: 'The heart fails to pump sufficient blood to meet metabolic demands, triggering neurohormonal compensation that ultimately worsens the disease.',
    normalPhysiology: 'The heart maintains cardiac output (CO = heart rate x stroke volume) through the Frank-Starling mechanism, sympathetic tone, and the renin-angiotensin-aldosterone system (RAAS). Preload, afterload, and contractility are balanced.',
    diseaseMechanism: 'Myocardial injury (ischemia, pressure overload, or toxins) reduces stroke volume. Compensatory mechanisms activate: sympathetic nervous system increases HR and contractility; RAAS retains sodium and water to increase preload; ventricular remodeling (hypertrophy and dilation) occurs. These mechanisms initially maintain CO but chronically cause volume overload, increased wall stress, fibrosis, and progressive pump failure.',
    cascadeEffects: [
      'Neurohormonal activation (SNS, RAAS, ADH) increases afterload and volume',
      'Ventricular remodeling with dilation and wall thinning',
      'Elevated filling pressures cause pulmonary and systemic congestion',
      'Reduced renal perfusion worsens fluid retention',
      'Mitral regurgitation from annular dilation further reduces forward flow',
    ],
    clinicalManifestations: [
      'Dyspnea on exertion and orthopnea',
      'Paroxysmal nocturnal dyspnea',
      'Lower extremity edema',
      'Jugular venous distension',
      'Fatigue and exercise intolerance',
      'S3 gallop on auscultation',
    ],
    diagnosticClues: [
      'Elevated BNP or NT-proBNP',
      'Chest X-ray showing cardiomegaly and pulmonary edema',
      'Echocardiogram with reduced ejection fraction (HFrEF) or diastolic dysfunction (HFpEF)',
      'Elevated jugular venous pressure',
    ],
    treatmentRationale: 'ACE inhibitors/ARBs and ARNI block RAAS to reduce afterload and remodeling. Beta-blockers counter deleterious sympathetic activation. Diuretics relieve congestion. SGLT2 inhibitors reduce preload and have direct cardioprotective effects. Aldosterone antagonists reduce fibrosis. These therapies reverse the maladaptive neurohormonal cascade.',
    relatedConditions: ['atherosclerosis-cascade', 'hypertension-pathways', 'arrhythmia-mechanisms', 'chronic-kidney-disease'],
    keyConceptsLevel1: 'Heart failure means the heart is too weak to pump blood well. The body tries to help by holding extra water and making the heart beat faster, but over time that makes things worse. Fluid backs up into the lungs and legs.',
    keyConceptsLevel5: 'HF is characterized by reduced cardiac output triggering compensatory neurohormonal activation (SNS, RAAS, natriuretic peptides, ADH). Chronic catecholamine excess promotes myocyte apoptosis and beta-receptor downregulation. Angiotensin II and aldosterone drive myocardial fibrosis and adverse remodeling. The GDMT backbone (ACEi/ARNi, beta-blocker, MRA, SGLT2i) targets each maladaptive pathway, improving morbidity and mortality in HFrEF.',
  }),

  'arrhythmia-mechanisms': pp({
    id: 'arrhythmia-mechanisms',
    name: 'Arrhythmia Mechanisms',
    nameEs: 'Mecanismos de Arritmias',
    system: 'cardiovascular',
    summary: 'Abnormal cardiac electrical activity arising from disorders of impulse formation, impulse conduction, or both.',
    normalPhysiology: 'The cardiac conduction system generates impulses at the SA node (60-100 bpm), conducts through the AV node with appropriate delay, then rapidly depolarizes the ventricles via the His-Purkinje system. Ion channels (Na+, K+, Ca2+) orchestrate orderly depolarization and repolarization.',
    diseaseMechanism: 'Arrhythmias arise from three mechanisms: (1) Enhanced automaticity - abnormal pacemaker cells fire spontaneously; (2) Triggered activity - early or delayed afterdepolarizations reach threshold; (3) Re-entry - an electrical circuit forms when unidirectional block and slow conduction create a loop. Structural disease, electrolyte abnormalities, ischemia, and channelopathies provide the substrate.',
    cascadeEffects: [
      'Tachyarrhythmias reduce diastolic filling time and cardiac output',
      'Loss of atrial kick in atrial fibrillation reduces CO by 15-25%',
      'Stasis in fibrillating atria promotes thrombus formation',
      'Bradyarrhythmias cause syncope and end-organ hypoperfusion',
      'Sustained ventricular arrhythmias can degenerate into cardiac arrest',
    ],
    clinicalManifestations: [
      'Palpitations',
      'Lightheadedness or syncope',
      'Dyspnea',
      'Chest discomfort',
      'Sudden cardiac death (ventricular fibrillation)',
    ],
    diagnosticClues: [
      '12-lead ECG pattern (e.g., irregularly irregular for AFib, delta wave for WPW)',
      'Holter or event monitor for paroxysmal episodes',
      'Electrolyte panels (K+, Mg2+, Ca2+)',
      'Echocardiogram for structural substrate',
      'Electrophysiology study for mapping re-entry circuits',
    ],
    treatmentRationale: 'Antiarrhythmics target ion channels to suppress abnormal automaticity and triggered activity. Rate control agents slow AV conduction. Catheter ablation destroys re-entry circuit substrate. Anticoagulation in AFib addresses the thromboembolic risk from atrial stasis. ICDs terminate lethal ventricular arrhythmias.',
    relatedConditions: ['heart-failure-pathophysiology', 'atherosclerosis-cascade', 'stroke-ischemia'],
    keyConceptsLevel1: 'The heart has its own electrical system that tells it when to beat. If those signals go wrong, the heart can beat too fast, too slow, or irregularly. Some arrhythmias are harmless, but others can be dangerous.',
    keyConceptsLevel5: 'Arrhythmogenesis involves enhanced automaticity (phase 4 depolarization in ectopic foci), triggered activity (EADs in prolonged QT from IKr block; DADs from intracellular Ca2+ overload via RyR2 leak), and re-entry (requires unidirectional block plus a conduction path with wavelength shorter than circuit length). Substrate modification (fibrosis, scar, accessory pathways) plus triggers (PVCs, autonomic surges) initiate sustained arrhythmias.',
  }),

  'shock-mechanisms': pp({
    id: 'shock-mechanisms',
    name: 'Shock (Types and Mechanisms)',
    nameEs: 'Choque (Tipos y Mecanismos)',
    system: 'cardiovascular',
    summary: 'Circulatory failure resulting in inadequate tissue perfusion and cellular hypoxia, classified by etiology into distributive, cardiogenic, hypovolemic, and obstructive.',
    normalPhysiology: 'Blood pressure is maintained by cardiac output and systemic vascular resistance (MAP = CO x SVR). Baroreceptors, RAAS, and sympathetic tone rapidly compensate for changes to maintain organ perfusion.',
    diseaseMechanism: 'In hypovolemic shock, volume loss reduces preload and CO. In cardiogenic shock, pump failure directly reduces CO. In distributive shock (septic, anaphylactic, neurogenic), pathologic vasodilation drops SVR. In obstructive shock, mechanical barriers (PE, tamponade, tension pneumothorax) impede cardiac filling or outflow. All converge on inadequate oxygen delivery (DO2) relative to demand.',
    cascadeEffects: [
      'Cellular hypoxia shifts metabolism to anaerobic glycolysis producing lactate',
      'Compensatory tachycardia and vasoconstriction redistribute blood to vital organs',
      'Prolonged hypoperfusion causes end-organ damage (AKI, hepatic ischemia, encephalopathy)',
      'Inflammatory cascade activation in septic shock amplifies capillary leak',
      'Irreversible shock leads to multi-organ failure and death',
    ],
    clinicalManifestations: [
      'Hypotension (MAP < 65 mmHg)',
      'Tachycardia',
      'Altered mental status',
      'Oliguria (< 0.5 mL/kg/hr)',
      'Cool and clammy extremities (except warm in distributive)',
      'Elevated lactate',
    ],
    diagnosticClues: [
      'Lactate > 2 mmol/L',
      'Point-of-care ultrasound (POCUS) for cardiac function, IVC collapse, effusions',
      'CVP and mixed venous O2 saturation for hemodynamic phenotyping',
      'Blood cultures and procalcitonin in suspected sepsis',
      'ECG and troponin for cardiogenic shock',
    ],
    treatmentRationale: 'Fluid resuscitation restores intravascular volume (hypovolemic). Vasopressors increase SVR to maintain MAP (distributive). Inotropes augment contractility (cardiogenic). Mechanical interventions relieve obstruction (obstructive). Early identification of the shock type is critical because the wrong treatment (e.g., fluids in cardiogenic shock) is harmful.',
    relatedConditions: ['heart-failure-pathophysiology', 'sepsis-sirs', 'acute-kidney-injury', 'ards-acute-lung-injury'],
    keyConceptsLevel1: 'Shock means the body is not getting enough blood flow to survive. It can happen from bleeding, heart problems, severe infections, or allergic reactions. Without quick treatment it can damage organs.',
    keyConceptsLevel5: 'Shock is classified hemodynamically: hypovolemic (low preload), cardiogenic (pump failure with elevated filling pressures), distributive (low SVR with high CO), and obstructive (mechanical impedance). Cellular pathophysiology involves mitochondrial dysfunction, oxygen extraction failure, and the oxygen debt concept. Resuscitation targets DO2 optimization using the Fick equation (DO2 = CO x CaO2), guided by dynamic fluid responsiveness assessment and perfusion biomarkers.',
  }),

  'hypertension-pathways': pp({
    id: 'hypertension-pathways',
    name: 'Hypertension Pathways',
    nameEs: 'Vias de la Hipertension',
    system: 'cardiovascular',
    summary: 'Sustained elevation of systemic blood pressure due to increased SVR and/or cardiac output, driven by multifactorial neurohormonal, renal, and vascular mechanisms.',
    normalPhysiology: 'Blood pressure is regulated by the interplay of cardiac output, SVR, RAAS, sympathetic nervous system, renal sodium handling, and endothelial-derived vasoactive substances (nitric oxide, endothelin). Pressure natriuresis adjusts sodium excretion to maintain volume homeostasis.',
    diseaseMechanism: 'In essential hypertension (90-95%), a polygenic predisposition combined with excess sodium, obesity, and sympathetic overactivity shifts the pressure-natriuresis curve rightward, requiring higher pressures for sodium balance. RAAS overactivation, endothelial dysfunction with reduced NO, arterial stiffness, and renal microvascular changes all sustain elevated SVR. Secondary causes include renal artery stenosis, primary aldosteronism, pheochromocytoma, and coarctation.',
    cascadeEffects: [
      'Left ventricular hypertrophy from chronic pressure overload',
      'Accelerated atherosclerosis from endothelial shear stress',
      'Nephrosclerosis and progressive CKD',
      'Retinopathy from arteriolar damage',
      'Increased risk of stroke, MI, heart failure, and aortic dissection',
    ],
    clinicalManifestations: [
      'Usually asymptomatic until end-organ damage occurs',
      'Headache (severe hypertension)',
      'Visual changes (hypertensive retinopathy)',
      'Epistaxis',
      'Dyspnea from LVH or heart failure',
    ],
    diagnosticClues: [
      'Repeated BP readings >= 130/80 mmHg',
      'ECG with LVH voltage criteria',
      'Urine albumin-to-creatinine ratio for nephropathy screening',
      'Fundoscopy for retinopathy grading',
      'Renal artery duplex and aldosterone/renin ratio for secondary causes',
    ],
    treatmentRationale: 'ACE inhibitors/ARBs block RAAS. Calcium channel blockers reduce SVR via arteriolar dilation. Thiazide diuretics promote natriuresis, shifting the pressure-natriuresis curve leftward. Beta-blockers reduce cardiac output and suppress renin. Sodium restriction and weight loss address root pathogenic inputs.',
    relatedConditions: ['atherosclerosis-cascade', 'heart-failure-pathophysiology', 'chronic-kidney-disease', 'stroke-ischemia'],
    keyConceptsLevel1: 'High blood pressure means the force of blood pushing on your artery walls is too strong. Over time it damages the heart, kidneys, eyes, and brain. Eating less salt, exercising, and medications can lower it.',
    keyConceptsLevel5: 'Essential hypertension reflects a rightward shift of the pressure-natriuresis curve from polygenic renal sodium transport variants, sympathetic overactivity, RAAS dysregulation, and endothelial NO deficiency. Vascular remodeling (increased media-to-lumen ratio) sustains elevated SVR. Target organ damage is mediated by mechanical stress, oxidative injury, and RAAS-driven fibrosis. Guideline-directed therapy targets the specific pathogenic pathway predominant in each patient.',
  }),

  // ===========================================================================
  // RESPIRATORY (4)
  // ===========================================================================

  'asthma-bronchospasm': pp({
    id: 'asthma-bronchospasm',
    name: 'Asthma and Bronchospasm',
    nameEs: 'Asma y Broncoespasmo',
    system: 'respiratory',
    summary: 'Chronic airway inflammation with reversible bronchoconstriction, mucus hypersecretion, and airway hyperresponsiveness.',
    normalPhysiology: 'Airways are lined with ciliated epithelium and goblet cells producing a thin mucus layer. Bronchial smooth muscle regulates airway caliber. The immune system in the airway mucosa defends against pathogens without excessive inflammation.',
    diseaseMechanism: 'In genetically predisposed individuals, allergens or irritants trigger a Th2-dominant immune response. IgE-mediated mast cell degranulation releases histamine, leukotrienes, and prostaglandins causing acute bronchospasm (early phase). Eosinophilic infiltration and cytokine release (IL-4, IL-5, IL-13) cause chronic inflammation, goblet cell hyperplasia, and subepithelial fibrosis (late phase/remodeling).',
    cascadeEffects: [
      'Bronchial smooth muscle contraction narrows airways',
      'Mucus plugging further obstructs airflow',
      'Air trapping leads to hyperinflation',
      'Ventilation-perfusion mismatch causes hypoxemia',
      'Chronic remodeling with irreversible airway narrowing',
    ],
    clinicalManifestations: [
      'Episodic wheezing, dyspnea, cough, chest tightness',
      'Symptoms worse at night and with triggers (allergens, exercise, cold air)',
      'Prolonged expiratory phase',
      'Use of accessory muscles in exacerbations',
      'Silent chest in severe status asthmaticus',
    ],
    diagnosticClues: [
      'Spirometry with reversible obstruction (FEV1/FVC < 0.70 improving > 12% post-bronchodilator)',
      'Elevated FeNO (fractional exhaled nitric oxide)',
      'Peripheral eosinophilia, elevated IgE',
      'Peak flow variability > 20%',
    ],
    treatmentRationale: 'Inhaled corticosteroids suppress the Th2 inflammatory cascade. Short-acting beta-agonists relax bronchial smooth muscle for rescue. Long-acting beta-agonists and muscarinic antagonists maintain bronchodilation. Leukotriene modifiers block a key bronchoconstrictor pathway. Biologic agents (anti-IgE, anti-IL5) target specific inflammatory mediators in severe asthma.',
    relatedConditions: ['copd-emphysema', 'ards-acute-lung-injury'],
    keyConceptsLevel1: 'Asthma makes the tubes in your lungs swell and squeeze tight, making it hard to breathe. Triggers like dust, pollen, or exercise set it off. Inhalers open the airways and reduce swelling.',
    keyConceptsLevel5: 'Asthma is a Th2-high (eosinophilic) or Th2-low (neutrophilic/pauci-granulocytic) chronic airway disease. The Th2-high endotype involves IL-4/IL-13-driven IgE class switching, IL-5-mediated eosinophil recruitment, and mast cell activation. Airway hyperresponsiveness reflects smooth muscle hypertrophy and neural M3 muscarinic pathway sensitization. Remodeling includes reticular basement membrane thickening, subepithelial fibrosis, and angiogenesis. Treatable traits and biomarker-guided biologic therapy define modern management.',
  }),

  'copd-emphysema': pp({
    id: 'copd-emphysema',
    name: 'COPD and Emphysema',
    nameEs: 'EPOC y Enfisema',
    system: 'respiratory',
    summary: 'Progressive, largely irreversible airflow limitation due to chronic bronchitis (airway disease) and emphysema (parenchymal destruction).',
    normalPhysiology: 'Alveoli provide a vast surface area for gas exchange. Elastic recoil of lung parenchyma drives passive exhalation. A protease-antiprotease balance (alpha-1 antitrypsin vs. neutrophil elastase) protects the alveolar structure.',
    diseaseMechanism: 'Inhaled irritants (primarily cigarette smoke) cause chronic neutrophilic and macrophage-driven inflammation. Protease-antiprotease imbalance (excess neutrophil elastase, matrix metalloproteinases) destroys alveolar walls (emphysema). Chronic bronchitis involves mucous gland hyperplasia and goblet cell metaplasia obstructing small airways. Oxidative stress amplifies the inflammatory cycle.',
    cascadeEffects: [
      'Loss of elastic recoil causes expiratory airflow limitation and air trapping',
      'Destruction of alveolar capillary bed reduces gas exchange surface area',
      'Chronic hypoxemia triggers pulmonary vasoconstriction and cor pulmonale',
      'Mucus plugging and small airway fibrosis worsen obstruction',
      'Acute exacerbations from infections accelerate decline',
    ],
    clinicalManifestations: [
      'Progressive dyspnea on exertion',
      'Chronic productive cough',
      'Barrel chest from hyperinflation',
      'Pursed-lip breathing',
      'Weight loss and muscle wasting in advanced disease',
    ],
    diagnosticClues: [
      'Spirometry: FEV1/FVC < 0.70 post-bronchodilator (non-reversible)',
      'Chest X-ray with hyperinflation, flattened diaphragms',
      'CT showing emphysematous changes',
      'Elevated residual volume on plethysmography',
      'Low DLCO (impaired gas transfer)',
    ],
    treatmentRationale: 'Bronchodilators (LABA, LAMA) reduce air trapping. Inhaled corticosteroids reduce exacerbation frequency in eosinophilic phenotype. Smoking cessation is the only intervention that slows FEV1 decline. Supplemental O2 improves survival in chronic hypoxemia. Pulmonary rehabilitation improves functional capacity despite fixed obstruction.',
    relatedConditions: ['asthma-bronchospasm', 'pneumonia-consolidation', 'heart-failure-pathophysiology'],
    keyConceptsLevel1: 'COPD is long-term lung damage, usually from smoking. The tiny air sacs in the lungs get destroyed and the airways get swollen and blocked with mucus. Breathing gets harder over time.',
    keyConceptsLevel5: 'COPD encompasses small airway disease (obstructive bronchiolitis) and parenchymal destruction (emphysema). The protease-antiprotease hypothesis (neutrophil elastase/MMP-9 vs. alpha-1 antitrypsin/TIMPs) explains alveolar wall destruction. Oxidant-antioxidant imbalance and NF-kB-driven inflammation perpetuate tissue injury. GOLD classification by FEV1 and exacerbation history guides stepped therapy. Eosinophilic phenotyping identifies ICS-responsive patients.',
  }),

  'pneumonia-consolidation': pp({
    id: 'pneumonia-consolidation',
    name: 'Pneumonia and Consolidation',
    nameEs: 'Neumonia y Consolidacion',
    system: 'respiratory',
    summary: 'Infection of the lung parenchyma causing alveolar filling with inflammatory exudate, impairing gas exchange.',
    normalPhysiology: 'Mucociliary clearance, alveolar macrophages, secretory IgA, and cough reflexes defend against inhaled pathogens. Alveoli remain air-filled, allowing efficient oxygen diffusion into pulmonary capillary blood.',
    diseaseMechanism: 'Pathogens (bacteria, viruses, fungi) overwhelm host defenses and colonize the lower respiratory tract. The innate immune response triggers neutrophilic infiltration, capillary leak, and exudate formation. Alveoli fill with neutrophils, fibrin, and edema fluid (consolidation), creating regions where ventilation is absent but perfusion continues (intrapulmonary shunt).',
    cascadeEffects: [
      'Consolidation creates V/Q mismatch and shunt physiology',
      'Hypoxemia from shunting is poorly responsive to supplemental O2',
      'Inflammatory mediators can spill systemically causing SIRS or sepsis',
      'Pleural involvement leads to parapneumonic effusion or empyema',
      'Necrotizing infections cause lung abscess formation',
    ],
    clinicalManifestations: [
      'Fever, productive cough, dyspnea',
      'Pleuritic chest pain',
      'Crackles and bronchial breath sounds on auscultation',
      'Dullness to percussion over consolidation',
      'Tachypnea and hypoxemia',
    ],
    diagnosticClues: [
      'Chest X-ray with lobar or patchy infiltrate',
      'Leukocytosis with left shift',
      'Elevated procalcitonin (bacterial)',
      'Sputum Gram stain and culture',
      'Blood cultures and urinary antigens (Legionella, Streptococcus pneumoniae)',
    ],
    treatmentRationale: 'Antibiotics target the causative pathogen (empiric initially, then narrowed by culture). Supportive care with oxygen addresses the gas exchange deficit. Early mobilization prevents complications. Drainage of empyema removes infected collections that antibiotics cannot penetrate.',
    relatedConditions: ['ards-acute-lung-injury', 'sepsis-sirs', 'copd-emphysema'],
    keyConceptsLevel1: 'Pneumonia is a lung infection that fills the air sacs with pus and fluid. This makes it hard to breathe and causes fever and cough. Antibiotics kill the germs causing it.',
    keyConceptsLevel5: 'Pneumonia pathogenesis involves microbial virulence factors overwhelming innate defenses (mucociliary apparatus, alveolar macrophages, complement). Consolidation reflects the exudative phase (neutrophil influx, fibrin deposition) analogous to hepatization stages. Intrapulmonary shunt fraction (Qs/Qt) determines the hypoxemia severity. CURB-65 and PSI stratify mortality risk. Empiric therapy targets likely pathogens based on community vs. hospital acquisition and local antibiogram data.',
  }),

  'ards-acute-lung-injury': pp({
    id: 'ards-acute-lung-injury',
    name: 'ARDS / Acute Lung Injury',
    nameEs: 'SDRA / Lesion Pulmonar Aguda',
    system: 'respiratory',
    summary: 'Diffuse alveolar damage from systemic or pulmonary insults causing non-cardiogenic pulmonary edema and refractory hypoxemia.',
    normalPhysiology: 'The alveolar-capillary barrier (type I pneumocytes and capillary endothelium) is selectively permeable, keeping alveoli dry. Surfactant produced by type II pneumocytes reduces surface tension and prevents alveolar collapse.',
    diseaseMechanism: 'A direct (aspiration, pneumonia) or indirect (sepsis, pancreatitis) insult triggers an exaggerated inflammatory response. Neutrophil activation releases proteases and reactive oxygen species that damage the alveolar-capillary membrane. Protein-rich edema floods alveoli. Surfactant is inactivated. Hyaline membranes form. The result is non-compliant, edematous lungs with massive shunt.',
    cascadeEffects: [
      'Diffuse alveolar edema impairs gas exchange',
      'Surfactant loss and atelectasis reduce compliance',
      'Intrapulmonary shunt causes refractory hypoxemia',
      'Pulmonary hypertension from hypoxic vasoconstriction increases RV afterload',
      'Fibroproliferative phase may cause persistent lung dysfunction',
    ],
    clinicalManifestations: [
      'Acute onset of severe dyspnea and hypoxemia',
      'Bilateral pulmonary infiltrates on imaging',
      'Refractory hypoxemia despite high FiO2',
      'Decreased lung compliance on mechanical ventilation',
      'Multi-organ dysfunction in severe cases',
    ],
    diagnosticClues: [
      'Berlin criteria: acute onset, bilateral opacities not explained by effusions/atelectasis, PaO2/FiO2 <= 300 with PEEP >= 5',
      'Absence of cardiogenic pulmonary edema (echocardiogram, PCWP <= 18)',
      'Diffuse bilateral ground-glass opacities on CT',
    ],
    treatmentRationale: 'Low tidal volume ventilation (6 mL/kg IBW) limits ventilator-induced lung injury by reducing alveolar overdistension. PEEP recruits collapsed alveoli, reducing shunt. Prone positioning improves V/Q matching. Conservative fluid management reduces edema. Treatment of the underlying cause (e.g., antibiotics for sepsis) is essential.',
    relatedConditions: ['sepsis-sirs', 'pneumonia-consolidation', 'shock-mechanisms'],
    keyConceptsLevel1: 'ARDS is severe lung inflammation where fluid leaks into the air sacs, making it extremely hard to breathe. It is caused by severe infections, injuries, or other illnesses and usually requires a breathing machine.',
    keyConceptsLevel5: 'ARDS pathophysiology involves neutrophil-mediated alveolar-capillary barrier disruption, with exudative, proliferative, and fibrotic phases. DAD on histology shows hyaline membrane formation, type I pneumocyte necrosis, and later type II hyperplasia. The baby lung concept explains how normal-sized tidal volumes overdistend the small aerated lung fraction. ARDSNet low Vt ventilation, driving pressure limitation, prone positioning, and neuromuscular blockade address the mechanical and physiologic derangements.',
  }),

  // ===========================================================================
  // NEUROLOGIC (4)
  // ===========================================================================

  'stroke-ischemia': pp({
    id: 'stroke-ischemia',
    name: 'Stroke / Ischemia Cascade',
    nameEs: 'Accidente Cerebrovascular / Cascada Isquemica',
    system: 'neurologic',
    summary: 'Acute interruption of cerebral blood flow causing neuronal ischemic injury through excitotoxicity, oxidative stress, and inflammation.',
    normalPhysiology: 'The brain receives 15-20% of cardiac output and depends on continuous aerobic glucose metabolism. Autoregulation maintains cerebral blood flow (CBF) across a range of systemic blood pressures. Neurons have minimal energy reserves.',
    diseaseMechanism: 'Thromboembolic or in-situ occlusion of a cerebral artery reduces regional CBF. Below ~20 mL/100g/min, electrical failure occurs; below ~10, irreversible injury begins. Energy failure disrupts Na+/K+ ATPase, causing depolarization. Glutamate release activates NMDA receptors, leading to Ca2+ influx, mitochondrial dysfunction, free radical generation, and apoptotic/necrotic cell death. An ischemic penumbra surrounds the core infarct as salvageable tissue.',
    cascadeEffects: [
      'Excitotoxic glutamate release causes Ca2+ overload',
      'Mitochondrial failure produces reactive oxygen species',
      'Blood-brain barrier breakdown leads to vasogenic edema',
      'Inflammatory response amplifies secondary injury',
      'Hemorrhagic transformation may occur in reperfused tissue',
    ],
    clinicalManifestations: [
      'Sudden-onset focal neurologic deficit (hemiparesis, aphasia, visual field cut)',
      'NIHSS score quantifies severity',
      'Symptoms depend on vascular territory (MCA, ACA, PCA, posterior circulation)',
      'Large territorial infarcts cause cerebral edema and herniation risk',
    ],
    diagnosticClues: [
      'Non-contrast CT to exclude hemorrhage',
      'CT angiography to identify large vessel occlusion',
      'MRI DWI/ADC for early ischemic changes',
      'CT perfusion to assess core vs. penumbra mismatch',
    ],
    treatmentRationale: 'IV alteplase (tPA) and mechanical thrombectomy restore blood flow to salvage the penumbra before irreversible injury. The narrow time window (4.5 hrs for tPA, up to 24 hrs for thrombectomy with mismatch) reflects the penumbra viability. Secondary prevention targets the stroke mechanism (antiplatelets for atherosclerotic, anticoagulation for cardioembolic).',
    relatedConditions: ['atherosclerosis-cascade', 'arrhythmia-mechanisms', 'hypertension-pathways'],
    keyConceptsLevel1: 'A stroke happens when blood flow to part of the brain is blocked, and brain cells start to die. Acting fast (calling 911) can save brain tissue. The saying is "time is brain."',
    keyConceptsLevel5: 'The ischemic cascade involves bioenergetic failure, excitotoxicity (glutamate-NMDA receptor-Ca2+ axis), peri-infarct depolarizations, oxidative/nitrosative stress, BBB disruption, and neuroinflammation. The core-penumbra concept underpins reperfusion therapy: tissue with CBF < 10 mL/100g/min is irreversibly injured, while the penumbra (oligemia with preserved structural integrity) is the target. Perfusion imaging-based patient selection extends thrombectomy windows (DAWN, DEFUSE-3 paradigm).',
  }),

  'seizure-mechanisms': pp({
    id: 'seizure-mechanisms',
    name: 'Seizure Mechanisms',
    nameEs: 'Mecanismos de Convulsiones',
    system: 'neurologic',
    summary: 'Paroxysmal hypersynchronous neuronal firing from an imbalance of cortical excitation and inhibition.',
    normalPhysiology: 'Cortical neurons maintain a resting membrane potential through ion gradients. Glutamate (excitatory) and GABA (inhibitory) neurotransmitters are precisely balanced. Inhibitory interneurons create surround inhibition that prevents spread of focal excitation.',
    diseaseMechanism: 'Seizures arise when excitation overwhelms inhibition: excess glutamatergic activity, deficient GABAergic inhibition, altered intrinsic neuronal excitability (channelopathies), or loss of surround inhibition (e.g., from cortical injury/gliosis). Focal seizures originate from a discrete epileptogenic zone and may spread (secondary generalization). Primary generalized seizures involve thalamocortical circuits.',
    cascadeEffects: [
      'Excessive metabolic demand can outstrip cerebral oxygen supply',
      'Prolonged seizures (status epilepticus) cause excitotoxic neuronal death',
      'Post-ictal depression reflects neuronal exhaustion and active inhibition',
      'Repeated seizures may kindling-lower seizure threshold',
      'Rhabdomyolysis and aspiration can occur during prolonged convulsions',
    ],
    clinicalManifestations: [
      'Focal: motor (clonic jerking), sensory (aura), dyscognitive (staring, automatisms)',
      'Generalized: tonic-clonic, absence, myoclonic, atonic',
      'Post-ictal confusion and Todd paralysis',
      'Status epilepticus (continuous seizure > 5 min)',
    ],
    diagnosticClues: [
      'EEG showing epileptiform discharges (spikes, sharp waves)',
      'MRI for structural lesion (mesial temporal sclerosis, cortical dysplasia, tumor)',
      'Metabolic workup (glucose, Na+, Ca2+, Mg2+)',
      'Prolactin elevation post-generalized tonic-clonic seizure',
    ],
    treatmentRationale: 'Antiseizure medications work by enhancing GABAergic inhibition (benzodiazepines, phenobarbital), blocking voltage-gated Na+ channels to reduce repetitive firing (phenytoin, carbamazepine, lacosamide), blocking Ca2+ channels (ethosuximide for absence), or modulating glutamate release (levetiracetam via SV2A). Surgery removes the epileptogenic focus when medications fail.',
    relatedConditions: ['stroke-ischemia', 'neurodegeneration-alzheimers'],
    keyConceptsLevel1: 'A seizure happens when brain cells send out too many electrical signals at once. This can cause shaking, staring, or confusion. Medications help calm the brain activity down.',
    keyConceptsLevel5: 'Epileptogenesis involves molecular and network reorganization: upregulation of glutamatergic AMPA/NMDA receptors, loss of GABAergic interneurons, mossy fiber sprouting creating recurrent excitatory circuits, and channelopathy (SCN1A, KCNQ2). Focal seizures propagate when the surround inhibition fails. Generalized spike-wave in absence epilepsy reflects abnormal thalamocortical oscillations (T-type Ca2+ channels). Rational ASM selection targets the predominant mechanism.',
  }),

  'neurodegeneration-alzheimers': pp({
    id: 'neurodegeneration-alzheimers',
    name: 'Neurodegeneration (Alzheimer Disease)',
    nameEs: 'Neurodegeneracion (Enfermedad de Alzheimer)',
    system: 'neurologic',
    summary: 'Progressive cortical neuronal loss driven by amyloid-beta plaque and neurofibrillary tau tangle accumulation, leading to dementia.',
    normalPhysiology: 'Neurons in the hippocampus and association cortex form synaptic networks that underpin memory, language, and executive function. Amyloid precursor protein (APP) is cleaved by alpha-secretase in the non-amyloidogenic pathway. Tau protein stabilizes microtubules for axonal transport.',
    diseaseMechanism: 'In AD, APP is preferentially cleaved by beta- and gamma-secretase, producing amyloid-beta 42 peptides that aggregate into extracellular plaques. Plaques trigger microglial activation and neuroinflammation. Hyperphosphorylated tau dissociates from microtubules, forming intracellular neurofibrillary tangles that disrupt axonal transport. Synaptic loss, cholinergic neuron degeneration, and cortical atrophy follow.',
    cascadeEffects: [
      'Amyloid plaques trigger microglial activation and chronic neuroinflammation',
      'Tau tangles disrupt intracellular transport and cause neuronal death',
      'Cholinergic deficit in nucleus basalis of Meynert impairs memory circuits',
      'Progressive cortical atrophy with ventricular enlargement',
      'Late-stage involvement of basic functions (gait, swallowing)',
    ],
    clinicalManifestations: [
      'Insidious onset of short-term memory loss',
      'Progressive word-finding difficulty and visuospatial disorientation',
      'Executive dysfunction and impaired judgment',
      'Behavioral changes: apathy, agitation, wandering',
      'Late: loss of motor function, incontinence, dysphagia',
    ],
    diagnosticClues: [
      'Clinical: progressive amnestic cognitive decline',
      'MRI: hippocampal and medial temporal lobe atrophy',
      'CSF: low amyloid-beta 42, elevated phospho-tau',
      'Amyloid PET (Pittsburgh compound B) and tau PET positivity',
      'APOE e4 allele as genetic risk factor',
    ],
    treatmentRationale: 'Cholinesterase inhibitors (donepezil) partially compensate for cholinergic loss. NMDA receptor antagonist (memantine) reduces glutamate excitotoxicity. Anti-amyloid monoclonal antibodies (lecanemab, aducanumab) target amyloid clearance at the disease root. Symptomatic management addresses behavioral symptoms. No treatment yet halts progression.',
    relatedConditions: ['seizure-mechanisms', 'stroke-ischemia'],
    keyConceptsLevel1: 'Alzheimer disease slowly destroys brain cells, causing memory loss, confusion, and eventually the inability to care for oneself. Abnormal protein clumps build up in the brain and damage it over many years.',
    keyConceptsLevel5: 'The amyloid cascade hypothesis posits Abeta42 oligomer toxicity as the initiating event, with tau propagation (Braak staging) driving clinical progression. Genetic evidence (APP, PSEN1/2 mutations in early-onset AD; APOE4 risk in LOAD) supports amyloid centrality. Neuroinflammation (TREM2, complement pathway) amplifies neurodegeneration. AT(N) biomarker framework (Amyloid, Tau, Neurodegeneration) enables biological diagnosis. Anti-amyloid immunotherapy demonstrates proof-of-concept but modest clinical benefit.',
  }),

  'neuropathic-pain': pp({
    id: 'neuropathic-pain',
    name: 'Neuropathic Pain Pathways',
    nameEs: 'Vias del Dolor Neuropatico',
    system: 'neurologic',
    summary: 'Chronic pain arising from damage or dysfunction of the somatosensory nervous system, with peripheral and central sensitization.',
    normalPhysiology: 'Nociceptors (A-delta and C fibers) detect tissue injury and transmit signals via the spinothalamic tract to the thalamus and cortex. Descending inhibitory pathways (serotonergic, noradrenergic) from the brainstem modulate pain at the dorsal horn. Pain resolves when tissue heals.',
    diseaseMechanism: 'Nerve injury (diabetic neuropathy, post-herpetic, trauma) causes ectopic firing from damaged axons, upregulation of voltage-gated Na+ channels, and expression of novel ion channels. At the dorsal horn, NMDA receptor activation (wind-up) and loss of inhibitory interneurons produce central sensitization. Descending facilitation replaces inhibition. The result is pain persisting beyond tissue healing.',
    cascadeEffects: [
      'Peripheral sensitization lowers nociceptor thresholds',
      'Ectopic discharges generate spontaneous pain',
      'Central sensitization amplifies signals (hyperalgesia) and recruits Abeta fibers (allodynia)',
      'Microglial activation in the dorsal horn sustains inflammation',
      'Cortical reorganization reinforces chronic pain processing',
    ],
    clinicalManifestations: [
      'Burning, shooting, or electric-shock-like pain',
      'Allodynia (pain from normally non-painful stimuli)',
      'Hyperalgesia (exaggerated pain response)',
      'Numbness and paresthesias in the affected distribution',
      'Sleep disturbance, anxiety, depression',
    ],
    diagnosticClues: [
      'Characteristic descriptors on DN4 or LANSS screening tools',
      'Sensory abnormalities in a neuroanatomically plausible distribution',
      'Nerve conduction studies and EMG for peripheral nerve lesion',
      'MRI for central lesion (spinal cord, thalamic stroke)',
    ],
    treatmentRationale: 'Gabapentinoids (gabapentin, pregabalin) modulate alpha-2-delta Ca2+ channel subunits, reducing excitatory neurotransmitter release. SNRIs (duloxetine) and TCAs (amitriptyline) enhance descending inhibitory noradrenergic and serotonergic pathways. Topical lidocaine blocks peripheral Na+ channels. Opioids are less effective because neuropathic pain has distinct central mechanisms.',
    relatedConditions: ['diabetes-complications', 'seizure-mechanisms'],
    keyConceptsLevel1: 'Nerve damage can cause ongoing pain even after an injury heals. The damaged nerves send false pain signals. This type of pain often feels like burning or electric shocks and needs special medications.',
    keyConceptsLevel5: 'Neuropathic pain reflects maladaptive plasticity: peripheral (Nav1.7/1.8 upregulation, TRPV1 sensitization, ectopic pacemaker activity) and central (NMDA-mediated wind-up, LTP at C-fiber synapses, loss of GABAergic/glycinergic inhibition, microglial BDNF release converting dorsal horn neurons to a facilitated state). First-line agents target alpha-2-delta subunits (gabapentinoids) or descending monoaminergic inhibition (SNRIs/TCAs).',
  }),

  // ===========================================================================
  // ENDOCRINE (4)
  // ===========================================================================

  'insulin-resistance-t2dm': pp({
    id: 'insulin-resistance-t2dm',
    name: 'Insulin Resistance / Type 2 Diabetes',
    nameEs: 'Resistencia a la Insulina / Diabetes Tipo 2',
    system: 'endocrine',
    summary: 'Progressive metabolic disorder where insulin resistance and beta-cell dysfunction lead to hyperglycemia and multi-organ complications.',
    normalPhysiology: 'After eating, blood glucose rises and pancreatic beta cells secrete insulin. Insulin activates receptors on muscle, liver, and adipose tissue, promoting glucose uptake, glycogen synthesis, and lipogenesis. Blood glucose returns to normal (70-100 mg/dL fasting).',
    diseaseMechanism: 'Obesity-driven visceral adiposity releases free fatty acids and inflammatory adipokines (TNF-alpha, IL-6), impairing insulin receptor signaling (PI3K/Akt pathway). Muscle and liver become insulin-resistant, requiring higher insulin levels. Beta cells compensate with hyperinsulinemia but eventually fail (glucolipotoxicity, amyloid deposition, ER stress). Hepatic glucose output rises unchecked. Chronic hyperglycemia ensues.',
    cascadeEffects: [
      'Hyperinsulinemia worsens lipogenesis and fatty liver',
      'Beta-cell exhaustion and apoptosis reduce insulin secretion',
      'Chronic hyperglycemia causes glycation of proteins (elevated HbA1c)',
      'Advanced glycation end-products (AGEs) damage vessels and nerves',
      'Dyslipidemia (high TG, low HDL, small dense LDL) accelerates atherosclerosis',
    ],
    clinicalManifestations: [
      'Often asymptomatic early',
      'Polyuria, polydipsia, polyphagia',
      'Acanthosis nigricans (insulin resistance marker)',
      'Blurred vision from osmotic lens swelling',
      'Recurrent infections and poor wound healing',
    ],
    diagnosticClues: [
      'Fasting glucose >= 126 mg/dL or HbA1c >= 6.5%',
      'Oral glucose tolerance test >= 200 mg/dL at 2 hrs',
      'Elevated fasting insulin and HOMA-IR',
      'Metabolic syndrome features (central obesity, HTN, dyslipidemia)',
    ],
    treatmentRationale: 'Metformin reduces hepatic glucose output and improves insulin sensitivity. GLP-1 receptor agonists enhance glucose-dependent insulin secretion and promote weight loss. SGLT2 inhibitors produce glycosuria, lowering glucose and providing cardiorenal benefits. Thiazolidinediones activate PPAR-gamma to improve insulin sensitivity. Lifestyle modification (weight loss, exercise) addresses the root cause of visceral adiposity.',
    relatedConditions: ['diabetic-ketoacidosis', 'diabetes-complications', 'metabolic-syndrome'],
    keyConceptsLevel1: 'In type 2 diabetes, the body stops responding well to insulin, so sugar builds up in the blood. Over time, high blood sugar damages the eyes, kidneys, nerves, and heart. Healthy eating, exercise, and medication help control it.',
    keyConceptsLevel5: 'T2DM pathophysiology involves the "ominous octet": impaired insulin secretion, increased glucagon secretion, increased hepatic glucose production, decreased muscle glucose uptake, increased lipolysis, decreased incretin effect, increased renal glucose reabsorption, and central appetite dysregulation. Beta-cell failure reflects glucolipotoxicity, ER stress, and IAPP amyloid deposition. Modern therapy targets multiple pathogenic pathways simultaneously (metformin + GLP-1 RA + SGLT2i).',
  }),

  'thyroid-dysfunction': pp({
    id: 'thyroid-dysfunction',
    name: 'Thyroid Dysfunction',
    nameEs: 'Disfuncion Tiroidea',
    system: 'endocrine',
    summary: 'Hyper- or hypothyroidism from disrupted thyroid hormone synthesis or regulation, affecting metabolism, growth, and cardiovascular function.',
    normalPhysiology: 'The hypothalamus releases TRH, stimulating anterior pituitary TSH secretion. TSH stimulates the thyroid to produce T4 and T3 via iodine organification and coupling. T4 is converted to active T3 peripherally. T3 binds nuclear receptors, upregulating metabolic rate. Negative feedback from T3/T4 suppresses TRH and TSH.',
    diseaseMechanism: 'Hypothyroidism: Most commonly autoimmune thyroiditis (Hashimoto) with lymphocytic infiltration and anti-TPO antibodies destroying thyroid tissue, reducing T3/T4 and elevating TSH. Hyperthyroidism: Graves disease involves TSH receptor-stimulating antibodies (TRAb) causing unregulated thyroid hormone production. Other causes include toxic nodules, thyroiditis, and exogenous thyroid hormone.',
    cascadeEffects: [
      'Hypothyroid: decreased metabolic rate, lipid accumulation, myxedema',
      'Hyperthyroid: increased metabolic rate, weight loss, bone resorption',
      'Cardiovascular effects: bradycardia/diastolic HTN (hypo) vs. tachycardia/AFib (hyper)',
      'Neuropsychiatric: cognitive slowing (hypo) vs. anxiety/tremor (hyper)',
      'Severe: myxedema coma (hypo) or thyroid storm (hyper) can be fatal',
    ],
    clinicalManifestations: [
      'Hypothyroid: fatigue, cold intolerance, weight gain, constipation, dry skin, bradycardia',
      'Hyperthyroid: heat intolerance, weight loss, palpitations, tremor, diarrhea',
      'Graves: exophthalmos, pretibial myxedema, diffuse goiter',
      'Hashimoto: firm non-tender goiter',
    ],
    diagnosticClues: [
      'TSH is the primary screening test (elevated in hypo, suppressed in hyper)',
      'Free T4 and free T3 confirm diagnosis',
      'Anti-TPO antibodies (Hashimoto), TRAb (Graves)',
      'Radioactive iodine uptake: diffuse (Graves) vs. focal (toxic nodule) vs. low (thyroiditis)',
    ],
    treatmentRationale: 'Levothyroxine replaces the missing hormone in hypothyroidism, titrated to normalize TSH. In hyperthyroidism, thionamides (methimazole) block TPO enzyme to reduce hormone synthesis. Radioactive iodine ablates overactive tissue. Beta-blockers control adrenergic symptoms while definitive therapy takes effect.',
    relatedConditions: ['adrenal-insufficiency', 'metabolic-syndrome'],
    keyConceptsLevel1: 'The thyroid gland in your neck controls how fast your body works. If it makes too much hormone, everything speeds up (sweating, fast heartbeat). Too little, and everything slows down (tired, cold, weight gain).',
    keyConceptsLevel5: 'Hashimoto thyroiditis is a T-cell-mediated autoimmune destruction with anti-TPO and anti-Tg antibodies as markers. Graves disease involves stimulatory TRAb activating the TSH receptor via Gs-cAMP pathway, causing thyroid hyperplasia and unregulated T3/T4 synthesis. Subclinical disease (abnormal TSH with normal free hormones) represents early or mild dysfunction. Thyroid storm involves catecholamine hypersensitivity and requires multimodal treatment (thionamide, iodine, beta-blocker, glucocorticoid).',
  }),

  'adrenal-insufficiency': pp({
    id: 'adrenal-insufficiency',
    name: 'Adrenal Insufficiency',
    nameEs: 'Insuficiencia Suprarrenal',
    system: 'endocrine',
    summary: 'Deficient cortisol production from adrenal gland destruction (primary/Addison) or impaired ACTH secretion (secondary), causing metabolic and hemodynamic instability.',
    normalPhysiology: 'The HPA axis: hypothalamus releases CRH, stimulating pituitary ACTH, which drives adrenal cortisol synthesis. Cortisol maintains glucose (gluconeogenesis), vascular tone (permissive effect on catecholamines), immune modulation, and stress response. Aldosterone (zona glomerulosa) regulates sodium/potassium via RAAS.',
    diseaseMechanism: 'Primary (Addison): autoimmune destruction of the adrenal cortex (anti-21-hydroxylase antibodies) causes deficiency of cortisol, aldosterone, and androgens. High ACTH from loss of feedback drives hyperpigmentation (MSH co-secretion). Secondary: pituitary or hypothalamic disease reduces ACTH. Tertiary: chronic exogenous glucocorticoid suppresses the HPA axis; abrupt withdrawal causes crisis.',
    cascadeEffects: [
      'Cortisol deficiency impairs gluconeogenesis causing hypoglycemia',
      'Loss of vascular tone permissiveness leads to refractory hypotension',
      'Aldosterone deficiency (primary only) causes hyperkalemia and hyponatremia',
      'Impaired stress response makes minor illness life-threatening (adrenal crisis)',
      'Elevated ACTH causes skin hyperpigmentation in primary disease',
    ],
    clinicalManifestations: [
      'Fatigue, weakness, weight loss',
      'Hyperpigmentation of skin creases, buccal mucosa (primary)',
      'Orthostatic hypotension',
      'Salt craving (primary)',
      'Adrenal crisis: severe hypotension, altered consciousness, abdominal pain',
    ],
    diagnosticClues: [
      'Low morning cortisol (< 3 mcg/dL diagnostic)',
      'ACTH stimulation test: cortisol fails to rise above 18 mcg/dL',
      'ACTH level: elevated in primary, low in secondary',
      'Hyponatremia, hyperkalemia (primary)',
      'Anti-21-hydroxylase antibodies for autoimmune etiology',
    ],
    treatmentRationale: 'Hydrocortisone replaces cortisol, dosed to mimic the diurnal rhythm (higher AM dose). Fludrocortisone replaces aldosterone in primary AI. Stress dosing (doubling or tripling dose) during illness prevents adrenal crisis by meeting the increased cortisol demand. Patient education on sick-day rules and emergency injection is critical.',
    relatedConditions: ['thyroid-dysfunction', 'sepsis-sirs', 'shock-mechanisms'],
    keyConceptsLevel1: 'The adrenal glands make cortisol, a hormone that helps your body handle stress and keep blood pressure steady. If they stop working, you feel exhausted and can get very sick without replacement medication.',
    keyConceptsLevel5: 'Primary AI (Addison) involves autoimmune adrenalitis (APS type 2 association with thyroid/T1DM), with loss of all three adrenal cortical zones. The ACTH stimulation test (250 mcg cosyntropin) is the gold standard. Secondary AI preserves aldosterone (RAAS-driven zona glomerulosa is ACTH-independent). Adrenal crisis is a medical emergency requiring IV hydrocortisone 100 mg bolus and fluid resuscitation. Chronic management requires physiologic glucocorticoid replacement with stress dose protocols.',
  }),

  'diabetic-ketoacidosis': pp({
    id: 'diabetic-ketoacidosis',
    name: 'Diabetic Ketoacidosis',
    nameEs: 'Cetoacidosis Diabetica',
    system: 'endocrine',
    summary: 'Life-threatening metabolic emergency from absolute or relative insulin deficiency causing hyperglycemia, ketosis, and metabolic acidosis.',
    normalPhysiology: 'Insulin suppresses lipolysis, promotes glucose uptake, and inhibits hepatic gluconeogenesis and ketogenesis. In the fed state, glucose is the primary fuel. In fasting, insulin levels drop modestly, permitting controlled lipolysis and mild ketone production.',
    diseaseMechanism: 'Severe insulin deficiency (T1DM, or T2DM under stress) with counter-regulatory hormone excess (glucagon, cortisol, catecholamines) causes unrestrained hepatic gluconeogenesis and glycogenolysis (hyperglycemia) and unrestrained lipolysis. Free fatty acids flood the liver and are converted to ketone bodies (acetoacetate, beta-hydroxybutyrate). Ketoacid accumulation causes high-anion-gap metabolic acidosis. Osmotic diuresis from glycosuria leads to profound dehydration.',
    cascadeEffects: [
      'Hyperglycemia causes osmotic diuresis and dehydration',
      'Ketoacid production overwhelms buffering capacity (pH drops)',
      'Total body potassium depletion despite possible initial hyperkalemia',
      'Severe dehydration reduces GFR, worsening hyperglycemia',
      'Cerebral edema risk during treatment, especially in children',
    ],
    clinicalManifestations: [
      'Polyuria, polydipsia, nausea, vomiting, abdominal pain',
      'Kussmaul respirations (deep, rapid breathing to compensate for acidosis)',
      'Fruity breath odor (acetone)',
      'Dehydration with tachycardia and hypotension',
      'Altered mental status in severe cases',
    ],
    diagnosticClues: [
      'Blood glucose > 250 mg/dL',
      'Arterial pH < 7.3, serum bicarbonate < 18 mEq/L',
      'Elevated anion gap (> 12)',
      'Positive serum ketones or beta-hydroxybutyrate > 3 mmol/L',
      'Elevated serum osmolality',
    ],
    treatmentRationale: 'IV insulin halts lipolysis and ketogenesis (the primary goal) and lowers glucose. Aggressive IV fluids correct dehydration and restore GFR. Potassium replacement is critical because insulin drives K+ intracellularly, unmasking total-body depletion. Bicarbonate is reserved for pH < 6.9. Identifying the precipitant (infection, non-compliance, new-onset T1DM) prevents recurrence.',
    relatedConditions: ['insulin-resistance-t2dm', 'diabetes-complications', 'acute-kidney-injury'],
    keyConceptsLevel1: 'DKA happens when the body has almost no insulin, so it cannot use sugar for energy and starts breaking down fat too quickly. This creates acids in the blood that can be dangerous. It needs emergency treatment with insulin and fluids.',
    keyConceptsLevel5: 'DKA reflects absolute insulin deficiency (or relative deficiency + counter-regulatory excess). The insulin:glucagon ratio determines hepatic metabolic switching. Malonyl-CoA depletion de-represses CPT-1, allowing FFA entry into mitochondria for ketogenesis. Management follows a protocol: isotonic fluids (initial bolus then maintenance), IV insulin infusion (0.1 U/kg/hr), K+ replacement when < 5.3, and transition to subcutaneous insulin with anion gap closure. Euglycemic DKA (SGLT2i-associated) is a diagnostic pitfall.',
  }),

  // ===========================================================================
  // GI (3)
  // ===========================================================================

  'cirrhosis-portal-hypertension': pp({
    id: 'cirrhosis-portal-hypertension',
    name: 'Cirrhosis and Portal Hypertension',
    nameEs: 'Cirrosis e Hipertension Portal',
    system: 'gi',
    summary: 'End-stage liver fibrosis with architectural distortion causing portal hypertension, synthetic failure, and multi-organ complications.',
    normalPhysiology: 'The liver synthesizes albumin, clotting factors, and bile; metabolizes drugs and toxins; stores glycogen; and regulates cholesterol. Portal blood flows through hepatic sinusoids with low resistance. Hepatic stellate cells are quiescent, storing vitamin A.',
    diseaseMechanism: 'Chronic hepatocyte injury (alcohol, hepatitis B/C, NAFLD) activates hepatic stellate cells, which transform into myofibroblasts and deposit collagen. Progressive fibrosis distorts the sinusoidal architecture, increasing intrahepatic resistance. Portal pressure rises (> 5 mmHg gradient). Splanchnic vasodilation (excess NO) worsens portal hypertension via increased portal inflow. Hepatocyte loss reduces synthetic and metabolic capacity.',
    cascadeEffects: [
      'Portal hypertension drives portosystemic collateral formation (varices)',
      'Variceal rupture causes life-threatening GI bleeding',
      'Ascites from portal HTN, low albumin, and splanchnic vasodilation',
      'Hepatorenal syndrome from renal vasoconstriction due to effective hypovolemia',
      'Hepatic encephalopathy from ammonia bypassing liver metabolism',
      'Reduced clotting factor synthesis causes coagulopathy',
    ],
    clinicalManifestations: [
      'Jaundice, ascites, peripheral edema',
      'Spider angiomata, palmar erythema, gynecomastia',
      'Variceal bleeding (hematemesis, melena)',
      'Hepatic encephalopathy (confusion, asterixis)',
      'Hepatorenal syndrome (oliguric renal failure)',
    ],
    diagnosticClues: [
      'Elevated INR, low albumin, elevated bilirubin (Child-Pugh, MELD scores)',
      'Thrombocytopenia from splenic sequestration',
      'Ultrasound showing nodular liver, splenomegaly, ascites',
      'Endoscopy revealing esophageal or gastric varices',
      'Elevated serum ammonia in encephalopathy',
    ],
    treatmentRationale: 'Non-selective beta-blockers reduce portal pressure by decreasing cardiac output and splanchnic blood flow (variceal prophylaxis). Diuretics (spironolactone + furosemide) manage ascites. Lactulose and rifaximin reduce ammonia for encephalopathy. TIPS shunts portal blood to systemic circulation for refractory portal HTN. Liver transplantation is the only definitive cure for end-stage disease.',
    relatedConditions: ['peptic-ulcer-hpylori', 'inflammatory-bowel-disease', 'chronic-kidney-disease'],
    keyConceptsLevel1: 'Cirrhosis is severe scarring of the liver, usually from long-term alcohol use or hepatitis. The scars block blood flow through the liver, causing the belly to swell with fluid and veins to enlarge dangerously.',
    keyConceptsLevel5: 'Cirrhosis pathogenesis involves stellate cell activation, TGF-beta-driven fibrogenesis, and sinusoidal capillarization. Portal hypertension (HVPG > 10 mmHg) drives clinically significant complications. The hyperdynamic circulation (splanchnic NO overproduction, arterial underfilling) activates RAAS and ADH, causing sodium/water retention (ascites). Hepatorenal syndrome (HRS-AKI) reflects extreme renal vasoconstriction. MELD-Na score prioritizes transplant allocation.',
  }),

  'inflammatory-bowel-disease': pp({
    id: 'inflammatory-bowel-disease',
    name: 'Inflammatory Bowel Disease',
    nameEs: 'Enfermedad Inflamatoria Intestinal',
    system: 'gi',
    summary: 'Chronic relapsing immune-mediated intestinal inflammation: Crohn disease (transmural, any GI segment) and ulcerative colitis (mucosal, colon only).',
    normalPhysiology: 'The intestinal immune system maintains tolerance to commensal bacteria and food antigens via regulatory T cells, secretory IgA, and an intact epithelial barrier. The gut microbiome exists in symbiotic balance with the host.',
    diseaseMechanism: 'In genetically susceptible individuals (NOD2/CARD15 in Crohn, HLA associations), environmental triggers (dysbiosis, altered microbiome) disrupt the mucosal barrier. Loss of immune tolerance leads to inappropriate Th1/Th17 (Crohn) or Th2 (UC) responses against commensal flora. Chronic inflammation causes tissue destruction, ulceration, and fibrosis.',
    cascadeEffects: [
      'Mucosal ulceration causes bloody diarrhea and malabsorption',
      'Transmural inflammation in Crohn leads to fistulae, strictures, abscesses',
      'Chronic inflammation increases colorectal cancer risk',
      'Extraintestinal manifestations (arthritis, uveitis, skin lesions)',
      'Nutritional deficiencies from malabsorption (B12, iron, fat-soluble vitamins)',
    ],
    clinicalManifestations: [
      'Crohn: abdominal pain (RLQ), non-bloody diarrhea, weight loss, perianal disease',
      'UC: bloody diarrhea, urgency, tenesmus, continuous colonic inflammation from rectum',
      'Extraintestinal: erythema nodosum, pyoderma gangrenosum, sacroiliitis, sclerosing cholangitis (UC)',
      'Growth failure in pediatric patients',
    ],
    diagnosticClues: [
      'Endoscopy: skip lesions and cobblestoning (Crohn) vs. continuous erythema and pseudopolyps (UC)',
      'Biopsy: non-caseating granulomas (Crohn) vs. crypt abscesses and mucosal inflammation (UC)',
      'Elevated CRP, ESR, fecal calprotectin',
      'MR enterography for small bowel Crohn involvement',
      'p-ANCA (UC) and ASCA (Crohn) serology',
    ],
    treatmentRationale: 'Step-up or top-down therapy targets the inflammatory cascade: 5-ASA for mild UC (topical anti-inflammatory). Corticosteroids induce remission but do not maintain it. Immunomodulators (azathioprine, methotrexate) suppress adaptive immunity. Biologics (anti-TNF, anti-integrin, anti-IL12/23) block specific inflammatory cytokines or leukocyte trafficking. Surgery for complications (strictures, fistulae, refractory disease).',
    relatedConditions: ['cirrhosis-portal-hypertension', 'autoimmune-mechanisms', 'peptic-ulcer-hpylori'],
    keyConceptsLevel1: 'IBD means the immune system mistakenly attacks the lining of the intestines, causing pain, diarrhea, and bleeding. It comes and goes in flares. Medications calm the immune system to reduce damage.',
    keyConceptsLevel5: 'IBD pathogenesis involves genetic susceptibility (163+ loci, NOD2 being the strongest Crohn risk allele), dysbiotic microbiome shifts (reduced Firmicutes diversity), barrier dysfunction, and dysregulated mucosal immunity. Crohn is Th1/Th17-driven (IL-12, IL-23, TNF-alpha, IFN-gamma) while UC is Th2-skewed (IL-5, IL-13). Treat-to-target strategies aim for mucosal healing, guided by fecal calprotectin and endoscopic scoring. Therapeutic drug monitoring optimizes biologic dosing.',
  }),

  'peptic-ulcer-hpylori': pp({
    id: 'peptic-ulcer-hpylori',
    name: 'Peptic Ulcer Disease / H. pylori',
    nameEs: 'Enfermedad Ulcerosa Peptica / H. pylori',
    system: 'gi',
    summary: 'Mucosal defect in the stomach or duodenum from an imbalance between aggressive factors (acid, pepsin, H. pylori, NSAIDs) and protective factors (mucus, bicarbonate, prostaglandins).',
    normalPhysiology: 'Gastric parietal cells secrete HCl via H+/K+ ATPase (proton pump), regulated by gastrin, histamine (H2 receptor), and acetylcholine. The mucus-bicarbonate barrier, prostaglandin-mediated mucosal blood flow, and epithelial cell turnover protect the mucosa from acid digestion.',
    diseaseMechanism: 'H. pylori colonizes the gastric mucus layer, producing urease (creating an alkaline microenvironment for survival) and virulence factors (CagA, VacA) that damage epithelium and trigger chronic gastritis. In the antrum, it increases gastrin secretion and acid output (duodenal ulcers). NSAIDs inhibit COX-1, reducing protective prostaglandin synthesis, impairing mucosal blood flow and mucus/bicarbonate secretion. Acid and pepsin then digest the exposed mucosa.',
    cascadeEffects: [
      'Mucosal erosion progresses to ulceration reaching the muscularis propria',
      'Arterial erosion causes upper GI bleeding (hematemesis, melena)',
      'Posterior duodenal ulcers can erode into the gastroduodenal artery',
      'Anterior ulcer perforation causes peritonitis',
      'Chronic H. pylori infection increases gastric adenocarcinoma and MALT lymphoma risk',
    ],
    clinicalManifestations: [
      'Epigastric burning pain (duodenal: improves with food; gastric: worsens with food)',
      'Nausea, early satiety, bloating',
      'Upper GI bleeding: hematemesis, melena, coffee-ground emesis',
      'Perforation: sudden severe abdominal pain with peritoneal signs',
    ],
    diagnosticClues: [
      'H. pylori testing: urea breath test, stool antigen, or biopsy urease test',
      'Endoscopy with biopsy for ulcer visualization and malignancy exclusion',
      'CBC for anemia from chronic blood loss',
      'Upright abdominal X-ray showing free air under diaphragm (perforation)',
    ],
    treatmentRationale: 'PPIs block the H+/K+ ATPase proton pump, profoundly reducing acid production and allowing mucosal healing. H. pylori eradication (triple or quadruple therapy) removes the underlying infectious cause. Discontinuing NSAIDs eliminates the prostaglandin-inhibiting insult. Misoprostol (prostaglandin analog) can protect the mucosa when NSAIDs are necessary.',
    relatedConditions: ['cirrhosis-portal-hypertension', 'inflammatory-bowel-disease'],
    keyConceptsLevel1: 'Stomach ulcers are sores in the lining of the stomach or small intestine caused by a germ called H. pylori or by painkillers like ibuprofen. Acid-reducing medicines and antibiotics heal them.',
    keyConceptsLevel5: 'H. pylori pathogenesis involves cag pathogenicity island (T4SS injection of CagA, activating SHP-2 oncogenic signaling), VacA pore formation, and NF-kB-mediated IL-8 chemokine induction. Antral-predominant infection increases gastrin and acid (duodenal ulcer phenotype); pangastritis with atrophy reduces acid (gastric ulcer/cancer phenotype). PPI-based triple therapy achieves eradication; bismuth quadruple or vonoprazan-based regimens address clarithromycin resistance.',
  }),

  // ===========================================================================
  // RENAL (3)
  // ===========================================================================

  'chronic-kidney-disease': pp({
    id: 'chronic-kidney-disease',
    name: 'Chronic Kidney Disease Progression',
    nameEs: 'Progresion de Enfermedad Renal Cronica',
    system: 'renal',
    summary: 'Progressive irreversible nephron loss leading to declining GFR, accumulation of uremic toxins, and multi-organ complications.',
    normalPhysiology: 'Each kidney contains approximately 1 million nephrons that filter ~180 L/day (GFR ~120 mL/min). The kidney regulates fluid/electrolyte balance, acid-base status, erythropoietin production, vitamin D activation, and blood pressure (RAAS).',
    diseaseMechanism: 'Initial injury (diabetes, hypertension, glomerulonephritis) destroys nephrons. Remaining nephrons hyperfiltrate to compensate, increasing intraglomerular pressure. This adaptive response becomes maladaptive: hyperfiltration causes glomerular hypertrophy, podocyte stress, proteinuria, and tubulointerstitial fibrosis. Angiotensin II drives efferent arteriolar constriction, fibrosis, and inflammation. Progressive nephron loss follows a self-perpetuating cycle.',
    cascadeEffects: [
      'Declining GFR leads to azotemia (BUN/creatinine rise)',
      'Sodium and water retention causes hypertension and edema',
      'Hyperkalemia from impaired potassium excretion',
      'Metabolic acidosis from reduced ammoniagenesis and bicarbonate reabsorption',
      'Secondary hyperparathyroidism from phosphate retention and vitamin D deficiency',
      'Erythropoietin deficiency causes normocytic anemia',
    ],
    clinicalManifestations: [
      'Often asymptomatic until advanced stages (GFR < 30)',
      'Fatigue (anemia), edema, hypertension',
      'Uremic symptoms: nausea, anorexia, metallic taste, pruritus',
      'Bone pain (renal osteodystrophy)',
      'Pericarditis and encephalopathy in end-stage disease',
    ],
    diagnosticClues: [
      'Persistently reduced eGFR (< 60 mL/min for >= 3 months)',
      'Elevated creatinine and BUN',
      'Proteinuria or albuminuria on urine studies',
      'Renal ultrasound showing small echogenic kidneys (chronic)',
      'Elevated PTH, phosphorus; low calcium, vitamin D',
    ],
    treatmentRationale: 'ACE inhibitors/ARBs reduce intraglomerular pressure by dilating the efferent arteriole, slowing progression. SGLT2 inhibitors reduce hyperfiltration and provide tubuloglomerular feedback-mediated renoprotection. Blood pressure and glucose control address root causes. Treating secondary hyperparathyroidism prevents renal osteodystrophy. ESAs correct anemia. Dialysis or transplant replaces function in ESKD.',
    relatedConditions: ['hypertension-pathways', 'insulin-resistance-t2dm', 'acute-kidney-injury', 'diabetes-complications'],
    keyConceptsLevel1: 'CKD means the kidneys slowly lose their ability to filter waste from the blood. It is usually caused by diabetes or high blood pressure. Medications can slow it down, but severe cases need dialysis or a kidney transplant.',
    keyConceptsLevel5: 'CKD progression reflects the "common final pathway" of nephron loss: compensatory hyperfiltration (increased SNGFR via afferent dilation and efferent constriction) causes podocyte injury, proteinuria, and tubular epithelial-mesenchymal transition driving interstitial fibrosis. RAAS blockade reduces proteinuria and intraglomerular pressure. SGLT2i restore tubuloglomerular feedback (adenosine-mediated afferent constriction), reducing hyperfiltration. KDIGO staging (G1-G5, A1-A3) guides management intensity.',
  }),

  'acute-kidney-injury': pp({
    id: 'acute-kidney-injury',
    name: 'Acute Kidney Injury',
    nameEs: 'Lesion Renal Aguda',
    system: 'renal',
    summary: 'Rapid decline in renal function classified as prerenal (hypoperfusion), intrinsic (parenchymal damage), or postrenal (obstruction).',
    normalPhysiology: 'Renal blood flow (~25% of cardiac output) maintains glomerular filtration. Autoregulation adjusts afferent and efferent arteriolar tone to maintain GFR across a range of perfusion pressures. Tubular cells have high metabolic demand, making the outer medulla vulnerable to ischemia.',
    diseaseMechanism: 'Prerenal: reduced renal perfusion (hypovolemia, heart failure, sepsis) lowers GFR without parenchymal damage; reversible if perfusion is restored promptly. Intrinsic: ischemic or toxic injury to tubular epithelial cells (acute tubular necrosis/ATN) causes cell swelling, cast formation, and backleak of filtrate. Glomerular or interstitial causes are less common. Postrenal: urinary tract obstruction increases retrograde pressure, opposing filtration.',
    cascadeEffects: [
      'Reduced GFR causes acute azotemia and fluid/electrolyte derangement',
      'Prolonged prerenal AKI transitions to ischemic ATN',
      'Tubular cell death and desquamation form obstructing casts',
      'Inflammatory response in ATN worsens tubular and microvascular injury',
      'Persistent AKI promotes CKD transition via maladaptive repair and fibrosis',
    ],
    clinicalManifestations: [
      'Oliguria or anuria (though non-oliguric AKI exists)',
      'Rising creatinine and BUN',
      'Volume overload (edema, pulmonary edema)',
      'Hyperkalemia (cardiac arrhythmia risk)',
      'Metabolic acidosis, uremic symptoms in severe cases',
    ],
    diagnosticClues: [
      'KDIGO criteria: creatinine rise >= 0.3 mg/dL in 48h or >= 1.5x baseline in 7 days',
      'Urine output < 0.5 mL/kg/hr for >= 6 hours',
      'FENa < 1% (prerenal) vs. > 2% (intrinsic/ATN)',
      'Urine microscopy: muddy brown granular casts (ATN), RBC casts (glomerulonephritis)',
      'Renal ultrasound for hydronephrosis (postrenal)',
    ],
    treatmentRationale: 'Prerenal: volume resuscitation restores renal perfusion and GFR. Postrenal: catheterization or nephrostomy relieves obstruction. Intrinsic: supportive care while tubular cells regenerate (ATN typically recovers in 1-3 weeks). Avoid nephrotoxins. Renal replacement therapy (dialysis) for refractory hyperkalemia, acidosis, volume overload, or uremic complications.',
    relatedConditions: ['shock-mechanisms', 'chronic-kidney-disease', 'sepsis-sirs'],
    keyConceptsLevel1: 'AKI means the kidneys suddenly stop working properly. It can be caused by dehydration, blocked urine flow, or direct damage. With quick treatment, the kidneys can often recover.',
    keyConceptsLevel5: 'AKI classification (prerenal/intrinsic/postrenal) guides management. ATN pathophysiology involves S3 segment ischemia (outer medullary hypoxia), sublethally injured cells losing polarity and detaching, forming obstructing casts. The extension phase involves endothelial injury and inflammatory cell infiltration. Biomarkers (NGAL, KIM-1, TIMP-2/IGFBP7) detect injury before creatinine rises. AKI-to-CKD transition involves maladaptive repair with G2/M cell cycle arrest and profibrotic signaling.',
  }),

  'nephrotic-nephritic-syndrome': pp({
    id: 'nephrotic-nephritic-syndrome',
    name: 'Nephrotic vs. Nephritic Syndrome',
    nameEs: 'Sindrome Nefrotico vs. Nefritico',
    system: 'renal',
    summary: 'Two patterns of glomerular disease: nephrotic (massive proteinuria from podocyte injury) vs. nephritic (hematuria and inflammation from glomerular capillary injury).',
    normalPhysiology: 'The glomerular filtration barrier has three layers: fenestrated endothelium, glomerular basement membrane (GBM), and podocyte foot processes with slit diaphragms. This barrier retains albumin and blood cells while permitting water and small solute filtration.',
    diseaseMechanism: 'Nephrotic: Podocyte injury or foot process effacement (minimal change disease, FSGS, membranous nephropathy) disrupts the slit diaphragm, allowing massive albumin loss (> 3.5 g/day). Nephritic: Immune complex deposition or anti-GBM antibodies activate complement and recruit neutrophils, damaging the glomerular capillary wall, allowing RBCs and modest protein into urine. Some diseases show overlap (membranoproliferative GN).',
    cascadeEffects: [
      'Nephrotic: hypoalbuminemia causes edema (reduced oncotic pressure)',
      'Nephrotic: liver compensatory protein synthesis increases lipoprotein (hyperlipidemia)',
      'Nephrotic: loss of antithrombin III causes hypercoagulable state',
      'Nephritic: glomerular inflammation reduces GFR (azotemia)',
      'Nephritic: sodium and water retention causes hypertension and edema',
      'Rapidly progressive GN can cause renal failure in weeks',
    ],
    clinicalManifestations: [
      'Nephrotic: periorbital and peripheral edema, foamy urine, hyperlipidemia',
      'Nephritic: hematuria (cola-colored urine), hypertension, oliguria',
      'Nephrotic: increased infection risk (loss of immunoglobulins)',
      'Nephrotic: thromboembolism (renal vein thrombosis)',
    ],
    diagnosticClues: [
      'Nephrotic: urine protein > 3.5 g/day, albumin < 3 g/dL, lipiduria (Maltese crosses)',
      'Nephritic: RBC casts, dysmorphic RBCs, mild proteinuria (< 3.5 g/day)',
      'Complement levels (low C3 in post-streptococcal GN, MPGN, lupus nephritis)',
      'Serologies: ANA, anti-dsDNA, ANCA, anti-GBM, ASO titer',
      'Renal biopsy for definitive diagnosis (light, immunofluorescence, electron microscopy)',
    ],
    treatmentRationale: 'Nephrotic: corticosteroids for minimal change disease (podocyte response to steroids). Immunosuppressants for membranous/FSGS. ACE inhibitors reduce proteinuria by lowering intraglomerular pressure. Statins for hyperlipidemia. Nephritic: treatment of underlying cause (antibiotics for post-strep, immunosuppression for lupus/ANCA vasculitis, plasma exchange for anti-GBM). Supportive care for volume and BP management.',
    relatedConditions: ['chronic-kidney-disease', 'autoimmune-mechanisms'],
    keyConceptsLevel1: 'Nephrotic syndrome means the kidney filters leak too much protein into the urine, causing swelling. Nephritic syndrome means blood leaks through the filters along with protein. Both need treatment to protect the kidneys.',
    keyConceptsLevel5: 'Nephrotic syndrome reflects podocyte injury: MCD (T-cell-derived permeability factor, dramatic steroid response), FSGS (podocyte loss and sclerosis, often steroid-resistant), membranous (anti-PLA2R antibodies forming subepithelial immune complexes). Nephritic syndrome reflects endocapillary/mesangial inflammation: IgA nephropathy (mesangial IgA deposits), post-infectious GN (subepithelial humps), anti-GBM (linear IgG), ANCA vasculitis (pauci-immune crescentic GN). Biopsy findings on LM/IF/EM are pathognomonic.',
  }),

  // ===========================================================================
  // HEMATOLOGIC (3)
  // ===========================================================================

  'anemia-mechanisms': pp({
    id: 'anemia-mechanisms',
    name: 'Anemia Mechanisms',
    nameEs: 'Mecanismos de Anemia',
    system: 'hematologic',
    summary: 'Reduced red blood cell mass or hemoglobin concentration from decreased production, increased destruction, or blood loss.',
    normalPhysiology: 'Erythropoiesis in the bone marrow produces ~200 billion RBCs daily, regulated by erythropoietin (EPO) from the kidney. Iron, folate, and B12 are essential substrates. RBCs circulate for ~120 days before splenic removal. Hemoglobin delivers oxygen to tissues.',
    diseaseMechanism: 'Decreased production: iron deficiency (most common, impaired heme synthesis), B12/folate deficiency (impaired DNA synthesis with megaloblastic changes), chronic disease (hepcidin-mediated iron sequestration, blunted EPO response), aplastic anemia (stem cell failure). Increased destruction: hemolytic anemias (autoimmune, mechanical, enzymatic, membranopathies). Blood loss: acute hemorrhage or chronic GI/menstrual losses.',
    cascadeEffects: [
      'Reduced oxygen-carrying capacity triggers compensatory tachycardia',
      'Chronic anemia causes high-output cardiac failure',
      'Tissue hypoxia impairs organ function',
      'Iron deficiency additionally causes epithelial changes (koilonychia, glossitis)',
      'Severe B12 deficiency causes subacute combined degeneration of the spinal cord',
    ],
    clinicalManifestations: [
      'Fatigue, weakness, exercise intolerance',
      'Pallor (conjunctivae, palms, nail beds)',
      'Tachycardia, systolic flow murmur',
      'Dyspnea on exertion',
      'Specific signs: pica/pagophagia (iron), neurologic symptoms (B12), jaundice (hemolysis)',
    ],
    diagnosticClues: [
      'CBC: low hemoglobin/hematocrit with MCV classification (microcytic, normocytic, macrocytic)',
      'Reticulocyte count: low (production problem) vs. elevated (destruction/loss with marrow response)',
      'Iron studies: ferritin, serum iron, TIBC, transferrin saturation',
      'Peripheral smear: target cells, schistocytes, hypersegmented neutrophils, spherocytes',
      'Direct Coombs test for autoimmune hemolytic anemia',
    ],
    treatmentRationale: 'Iron supplementation replaces the deficient substrate in iron-deficiency anemia. B12 injections bypass malabsorption in pernicious anemia. EPO-stimulating agents treat anemia of CKD. Corticosteroids suppress antibody production in autoimmune hemolytic anemia. Transfusion provides immediate but temporary oxygen-carrying capacity in severe or symptomatic anemia.',
    relatedConditions: ['chronic-kidney-disease', 'sickle-cell-pathophysiology', 'coagulation-disorders'],
    keyConceptsLevel1: 'Anemia means you do not have enough healthy red blood cells to carry oxygen around your body. You feel tired, weak, and pale. The cause determines the treatment, which could be iron pills, vitamins, or other therapies.',
    keyConceptsLevel5: 'The kinetic approach classifies anemia by reticulocyte production index (RPI): RPI < 2 = hypoproliferative (iron deficiency with low ferritin/sat, ACD with elevated hepcidin/ferritin, megaloblastic with elevated MMA/homocysteine). RPI > 2 = hemolysis/hemorrhage (LDH, haptoglobin, indirect bilirubin, Coombs). Iron-deficiency anemia reflects negative iron balance (absorption < losses); hepcidin is the master iron regulator, elevated in ACD (IL-6) and suppressed in iron deficiency and ineffective erythropoiesis.',
  }),

  'coagulation-disorders': pp({
    id: 'coagulation-disorders',
    name: 'Coagulation Cascade Disorders',
    nameEs: 'Trastornos de la Cascada de Coagulacion',
    system: 'hematologic',
    summary: 'Disorders of primary hemostasis (platelets), secondary hemostasis (coagulation factors), or fibrinolysis causing bleeding or thrombosis.',
    normalPhysiology: 'Hemostasis occurs in stages: (1) vascular injury triggers vasoconstriction; (2) primary hemostasis: platelets adhere (vWF-GPIb), activate, and aggregate (GPIIb/IIIa-fibrinogen) forming a platelet plug; (3) secondary hemostasis: tissue factor activates the extrinsic pathway (VII), amplified by intrinsic factors (VIII, IX, XI), converging on the common pathway (X, V, prothrombin to thrombin, fibrinogen to fibrin); (4) fibrinolysis: plasmin degrades the clot.',
    diseaseMechanism: 'Platelet disorders: thrombocytopenia (ITP: autoimmune destruction; TTP: ADAMTS13 deficiency with microthrombi) or platelet dysfunction (aspirin, uremia). Factor deficiencies: hemophilia A (factor VIII) and B (factor IX) cause impaired thrombin generation. vWD reduces platelet adhesion and factor VIII stability. DIC: systemic activation of coagulation consumes factors and platelets, causing simultaneous thrombosis and bleeding.',
    cascadeEffects: [
      'Platelet disorders cause mucocutaneous bleeding (petechiae, epistaxis)',
      'Factor deficiencies cause deep tissue/joint bleeding (hemarthrosis)',
      'DIC causes microthrombi (organ ischemia) and consumptive bleeding',
      'Thrombophilia (factor V Leiden, prothrombin mutation) predisposes to DVT/PE',
      'Heparin-induced thrombocytopenia causes paradoxical thrombosis',
    ],
    clinicalManifestations: [
      'Mucocutaneous bleeding: petechiae, purpura, epistaxis, menorrhagia (platelet/vWD)',
      'Deep bleeding: hemarthrosis, muscle hematomas, post-surgical (factor deficiency)',
      'DIC: diffuse oozing from lines, purpura fulminans, organ dysfunction',
      'Thrombosis: DVT, PE, stroke in thrombophilia',
    ],
    diagnosticClues: [
      'CBC with platelet count, peripheral smear (schistocytes in TTP/DIC)',
      'PT/INR (extrinsic/common pathway) and PTT (intrinsic/common pathway)',
      'Fibrinogen level and D-dimer (DIC: low fibrinogen, elevated D-dimer)',
      'Mixing study: corrects (factor deficiency) vs. does not correct (inhibitor)',
      'Specific factor levels, vWF antigen and activity, ADAMTS13',
    ],
    treatmentRationale: 'Factor replacement (recombinant VIII/IX) directly corrects the deficiency in hemophilia. DDAVP releases stored vWF and factor VIII for mild vWD and hemophilia A. Platelet transfusions increase count in thrombocytopenia (but contraindicated in TTP). Plasma exchange in TTP replenishes ADAMTS13. Anticoagulants (heparin, warfarin, DOACs) prevent thrombin generation in thrombotic disorders. DIC treatment focuses on the underlying cause.',
    relatedConditions: ['sickle-cell-pathophysiology', 'anemia-mechanisms', 'sepsis-sirs'],
    keyConceptsLevel1: 'Blood clotting is a carefully balanced process. If it does not work right, you can bleed too much or form dangerous clots. Different problems in the clotting chain cause different types of bleeding or clotting disorders.',
    keyConceptsLevel5: 'Hemostatic disorders are classified by the affected component: primary (platelet plug: vWD, ITP, TTP-HUS), secondary (fibrin clot: hemophilia A/B, liver disease, warfarin), combined (DIC: thrombin storm with consumptive coagulopathy, diagnosed by ISTH score). Thrombophilia evaluation (factor V Leiden, prothrombin G20210A, antiphospholipid antibodies, protein C/S, antithrombin deficiency) is indicated for unprovoked VTE. Viscoelastic testing (TEG/ROTEM) guides component therapy in massive transfusion.',
  }),

  'sickle-cell-pathophysiology': pp({
    id: 'sickle-cell-pathophysiology',
    name: 'Sickle Cell Pathophysiology',
    nameEs: 'Fisiopatologia de la Anemia Falciforme',
    system: 'hematologic',
    summary: 'A single glutamic acid to valine mutation in beta-globin causes hemoglobin S polymerization, RBC sickling, vaso-occlusion, and chronic hemolytic anemia.',
    normalPhysiology: 'Adult hemoglobin (HbA) is a tetramer of 2 alpha and 2 beta globin chains. In the deoxygenated state, HbA remains soluble. Normal RBCs are flexible biconcave discs that deform easily through capillaries. RBC lifespan is ~120 days.',
    diseaseMechanism: 'The beta-globin point mutation (Glu6Val) produces HbS. When deoxygenated, HbS polymerizes into rigid fibers that distort RBCs into sickle shapes. Sickled cells are rigid, adhesive, and have shortened lifespan (~20 days, causing chronic hemolysis). Sickle cells adhere to activated endothelium, trigger inflammatory cascades, and cause vaso-occlusion. Free hemoglobin scavenges nitric oxide, causing vasculopathy.',
    cascadeEffects: [
      'Chronic hemolysis: anemia, jaundice, gallstones, elevated LDH',
      'Vaso-occlusion causes ischemia-reperfusion injury in multiple organs',
      'Endothelial activation and inflammation promote a prothrombotic state',
      'NO depletion from free hemoglobin causes pulmonary hypertension',
      'Functional asplenia from splenic infarction increases infection risk',
      'Chronic organ damage: avascular necrosis, renal papillary necrosis, retinopathy',
    ],
    clinicalManifestations: [
      'Vaso-occlusive pain crises (bones, chest, abdomen)',
      'Acute chest syndrome (fever, infiltrate, hypoxia)',
      'Stroke (children)',
      'Splenic sequestration crisis (acute anemia)',
      'Aplastic crisis (parvovirus B19 infection)',
      'Chronic leg ulcers, priapism',
    ],
    diagnosticClues: [
      'Hemoglobin electrophoresis: HbS predominance (HbSS), HbSC, or HbS-beta-thal',
      'CBC: chronic anemia (Hb 6-9 g/dL), reticulocytosis',
      'Peripheral smear: sickle cells, target cells, Howell-Jolly bodies (asplenia)',
      'Elevated LDH, indirect bilirubin, reticulocyte count; low haptoglobin',
    ],
    treatmentRationale: 'Hydroxyurea increases HbF production, which inhibits HbS polymerization. L-glutamine reduces oxidative stress in RBCs. Crizanlizumab (anti-P-selectin) reduces sickle cell adhesion to endothelium. Voxelotor increases HbS oxygen affinity, preventing polymerization. Gene therapy and bone marrow transplant offer curative potential. Supportive care includes penicillin prophylaxis (asplenia), immunizations, and pain management.',
    relatedConditions: ['anemia-mechanisms', 'stroke-ischemia', 'acute-kidney-injury'],
    keyConceptsLevel1: 'Sickle cell disease is an inherited condition where red blood cells become stiff and crescent-shaped. These abnormal cells get stuck in small blood vessels, causing severe pain and organ damage.',
    keyConceptsLevel5: 'SCD pathophysiology extends beyond HbS polymerization to a vasculopathy model: chronic hemolysis releases free Hb that scavenges NO and releases arginase, depleting NO substrate. Sickle cell-endothelial adhesion (P-selectin, VCAM-1, integrin alpha-v-beta-3) initiates vaso-occlusion. Ischemia-reperfusion activates inflammasome pathways and NETosis. Disease-modifying therapies target distinct mechanisms: HbF induction (hydroxyurea), anti-adhesion (crizanlizumab), anti-sickling (voxelotor), and gene therapy (LentiGlobin, CRISPR-Cas9 BCL11A disruption).',
  }),

  // ===========================================================================
  // IMMUNE (2)
  // ===========================================================================

  'autoimmune-mechanisms': pp({
    id: 'autoimmune-mechanisms',
    name: 'Autoimmune Mechanisms',
    nameEs: 'Mecanismos Autoinmunes',
    system: 'immune',
    summary: 'Loss of self-tolerance causing the adaptive immune system to attack host tissues, mediated by autoreactive T cells and/or autoantibodies.',
    normalPhysiology: 'Central tolerance eliminates self-reactive T and B cells during development (thymic negative selection, B-cell receptor editing). Peripheral tolerance is maintained by regulatory T cells (Tregs), anergy, clonal ignorance, and immune checkpoint molecules (CTLA-4, PD-1).',
    diseaseMechanism: 'Genetic susceptibility (HLA associations, AIRE mutations) combined with environmental triggers (infections, molecular mimicry, epitope spreading) disrupts tolerance. Autoreactive lymphocytes escape deletion and attack self-antigens. Mechanisms include: (1) antibody-mediated (type II: anti-receptor, anti-cell surface; type III: immune complex deposition); (2) T-cell-mediated (type IV: CD8+ cytotoxicity, CD4+ Th1/Th17 inflammation); (3) mixed.',
    cascadeEffects: [
      'Chronic inflammation causes progressive tissue destruction',
      'Immune complex deposition damages kidneys, joints, skin, vessels',
      'Cytokine overproduction drives systemic inflammation',
      'Epitope spreading broadens the autoimmune attack over time',
      'Some autoantibodies directly alter cell function (stimulatory in Graves, blocking in myasthenia)',
    ],
    clinicalManifestations: [
      'Organ-specific: Hashimoto (thyroid), T1DM (pancreas), MS (CNS), MG (NMJ)',
      'Systemic: SLE (multi-organ), RA (joints), systemic sclerosis (skin/lungs)',
      'Common features: fatigue, relapsing-remitting course, female predominance',
      'Flares triggered by infection, stress, or hormonal changes',
    ],
    diagnosticClues: [
      'Autoantibody panels: ANA, anti-dsDNA, anti-Smith (SLE); RF, anti-CCP (RA); anti-TPO (Hashimoto)',
      'Elevated ESR, CRP indicating systemic inflammation',
      'Complement levels: low C3/C4 in active SLE',
      'Tissue biopsy showing characteristic inflammation patterns',
      'HLA typing for susceptibility (HLA-B27, HLA-DR4)',
    ],
    treatmentRationale: 'Corticosteroids broadly suppress inflammation for acute flares. DMARDs (methotrexate, mycophenolate) reduce adaptive immune proliferation. Biologics target specific pathways: anti-TNF (RA, IBD), anti-CD20 (B-cell depletion in SLE), anti-IL-17 (psoriasis), CTLA-4-Ig (co-stimulation blockade). The goal is to suppress the autoimmune response while preserving protective immunity.',
    relatedConditions: ['inflammatory-bowel-disease', 'thyroid-dysfunction', 'nephrotic-nephritic-syndrome'],
    keyConceptsLevel1: 'Autoimmune diseases happen when the immune system gets confused and attacks the body own tissues instead of germs. Different diseases affect different organs. Treatment aims to calm down the overactive immune system.',
    keyConceptsLevel5: 'Autoimmunity arises from failed central and peripheral tolerance. Genetic risk (HLA class II, PTPN22, CTLA-4 polymorphisms) determines susceptibility; environmental triggers (EBV for SLE/MS, molecular mimicry, dysbiosis) initiate disease. The Gell-Coombs framework classifies mechanisms (Type II: anti-receptor antibodies in Graves/MG; Type III: immune complexes in SLE nephritis; Type IV: Th1/Th17-mediated in MS/T1DM). Biologic therapies target specific cytokines, cell surface molecules, or signaling pathways (JAK inhibitors).',
  }),

  'sepsis-sirs': pp({
    id: 'sepsis-sirs',
    name: 'Sepsis / SIRS Cascade',
    nameEs: 'Sepsis / Cascada de SIRS',
    system: 'immune',
    summary: 'Life-threatening organ dysfunction from a dysregulated host immune response to infection, progressing from SIRS to sepsis, severe sepsis, and septic shock.',
    normalPhysiology: 'The innate immune system recognizes pathogen-associated molecular patterns (PAMPs) via pattern recognition receptors (TLRs, NOD-like receptors). A proportionate inflammatory response (cytokines, neutrophil recruitment, complement) eliminates the pathogen, then resolves.',
    diseaseMechanism: 'In sepsis, the immune response becomes dysregulated and disproportionate. Excessive pro-inflammatory cytokine release (TNF-alpha, IL-1, IL-6) creates a "cytokine storm." Endothelial activation causes diffuse capillary leak, tissue factor expression (activating DIC), and vasodilation (distributive shock). Simultaneously, immune paralysis (lymphocyte apoptosis, monocyte deactivation) impairs pathogen clearance. Mitochondrial dysfunction reduces cellular oxygen utilization.',
    cascadeEffects: [
      'Vasodilation and capillary leak cause distributive shock',
      'DIC from endothelial tissue factor expression (microthrombosis and consumptive coagulopathy)',
      'Multi-organ dysfunction: AKI, ARDS, hepatic failure, encephalopathy',
      'Immune suppression phase increases susceptibility to secondary infections',
      'Lactate elevation from tissue hypoperfusion and mitochondrial dysfunction',
    ],
    clinicalManifestations: [
      'Fever or hypothermia, tachycardia, tachypnea',
      'Hypotension refractory to fluid resuscitation (septic shock)',
      'Altered mental status',
      'Warm extremities early (vasodilated); cool and mottled late',
      'Organ dysfunction: oliguria, jaundice, coagulopathy, hypoxemia',
    ],
    diagnosticClues: [
      'Sepsis-3 criteria: suspected infection + SOFA score increase >= 2',
      'qSOFA: >= 2 of altered mentation, SBP <= 100, RR >= 22',
      'Lactate > 2 mmol/L (> 4 indicates severe tissue hypoperfusion)',
      'Blood cultures (before antibiotics), procalcitonin',
      'CBC showing leukocytosis or leukopenia, thrombocytopenia (DIC)',
    ],
    treatmentRationale: 'The Surviving Sepsis Campaign hour-1 bundle reflects pathophysiology: broad-spectrum antibiotics target the infection; IV fluid bolus addresses capillary leak and vasodilation; vasopressors maintain MAP >= 65 when fluids are insufficient; lactate-guided resuscitation monitors tissue perfusion. Source control (drainage of abscess, removal of infected device) eliminates the ongoing PAMP stimulus. Hydrocortisone in refractory shock addresses relative adrenal insufficiency.',
    relatedConditions: ['shock-mechanisms', 'ards-acute-lung-injury', 'acute-kidney-injury', 'coagulation-disorders'],
    keyConceptsLevel1: 'Sepsis is when an infection triggers the whole body to become inflamed. The immune system overreacts so much that it starts damaging organs. It is a medical emergency needing fast antibiotics and IV fluids.',
    keyConceptsLevel5: 'Sepsis pathobiology involves PAMPs (LPS, peptidoglycan) and DAMPs (HMGB1, mitochondrial DNA) activating TLR/NF-kB signaling, producing a cytokine storm (TNF-alpha, IL-1beta, IL-6). Endothelial glycocalyx degradation drives capillary leak. Tissue factor-driven DIC causes microvascular thrombosis. iNOS-mediated NO overproduction causes vasoplegic shock. The compensatory anti-inflammatory response (CARS) and immune paralysis (HLA-DR downregulation on monocytes) predispose to secondary infections. Sepsis-3 redefined the syndrome around organ dysfunction (SOFA) rather than SIRS criteria.',
  }),

  // ===========================================================================
  // MULTI-SYSTEM (2)
  // ===========================================================================

  'diabetes-complications': pp({
    id: 'diabetes-complications',
    name: 'Diabetes Complications (Micro/Macrovascular)',
    nameEs: 'Complicaciones de la Diabetes (Micro/Macrovasculares)',
    system: 'multi-system',
    summary: 'Chronic hyperglycemia damages blood vessels through microvascular (retinopathy, nephropathy, neuropathy) and macrovascular (atherosclerosis) pathways.',
    normalPhysiology: 'Endothelial cells, pericytes, mesangial cells, and Schwann cells normally regulate glucose uptake independent of insulin. Under normal glucose conditions, metabolic byproducts are managed without excess oxidative stress.',
    diseaseMechanism: 'Chronic hyperglycemia drives four pathogenic mechanisms in vulnerable cells: (1) Polyol pathway: excess glucose is converted to sorbitol by aldose reductase, causing osmotic stress; (2) AGE formation: glucose non-enzymatically glycates proteins, creating AGEs that cross-link matrix proteins and activate RAGE receptors; (3) PKC activation: elevated diacylglycerol activates protein kinase C, altering vascular permeability and gene expression; (4) Hexosamine pathway: glucosamine modification alters transcription factors. All converge on mitochondrial superoxide overproduction.',
    cascadeEffects: [
      'Retinopathy: pericyte loss, microaneurysms, neovascularization, vitreous hemorrhage',
      'Nephropathy: mesangial expansion, GBM thickening, proteinuria, progressive CKD',
      'Neuropathy: Schwann cell injury, axonal degeneration, distal symmetric polyneuropathy',
      'Macrovascular: accelerated atherosclerosis (2-4x CVD risk), MI, stroke, PAD',
      'Foot complications: neuropathy + PAD + immunopathy leads to ulcers and amputation',
    ],
    clinicalManifestations: [
      'Retinopathy: blurred vision, floaters, eventual blindness',
      'Nephropathy: asymptomatic proteinuria progressing to nephrotic syndrome and ESKD',
      'Neuropathy: numbness, burning pain in stocking-glove distribution, autonomic dysfunction',
      'Macrovascular: chest pain (MI), focal deficits (stroke), claudication (PAD)',
      'Diabetic foot: painless ulcers, Charcot arthropathy',
    ],
    diagnosticClues: [
      'Annual dilated eye exam for retinopathy',
      'Urine albumin-to-creatinine ratio for nephropathy screening',
      'Monofilament testing and ankle reflexes for neuropathy',
      'Lipid panel and coronary risk assessment for macrovascular disease',
      'HbA1c as surrogate for chronic glycemic control',
    ],
    treatmentRationale: 'Intensive glycemic control (HbA1c < 7%) reduces microvascular complications by 25-40%. RAAS blockade is nephroprotective (reduces intraglomerular pressure and proteinuria). SGLT2 inhibitors and GLP-1 RAs provide cardiovascular and renal outcome benefits independent of glucose lowering. Statin therapy reduces macrovascular events. Multifactorial risk factor management (glucose, BP, lipids) yields the greatest benefit.',
    relatedConditions: ['insulin-resistance-t2dm', 'chronic-kidney-disease', 'atherosclerosis-cascade', 'neuropathic-pain'],
    keyConceptsLevel1: 'High blood sugar over many years damages small blood vessels in the eyes, kidneys, and nerves, and large blood vessels in the heart and brain. Controlling blood sugar, blood pressure, and cholesterol protects against these problems.',
    keyConceptsLevel5: 'The unifying hypothesis (Brownlee) posits mitochondrial superoxide overproduction as the common upstream mechanism activating polyol, AGE, PKC, and hexosamine pathways. VEGF upregulation drives proliferative retinopathy. TGF-beta and CTGF mediate mesangial matrix expansion in nephropathy. Metabolic memory (epigenetic modifications from prior hyperglycemia) explains persistent risk despite subsequent control. SGLT2i and GLP-1 RA cardiovascular/renal benefits involve hemodynamic, metabolic, and anti-inflammatory mechanisms beyond glucose lowering.',
  }),

  'metabolic-syndrome': pp({
    id: 'metabolic-syndrome',
    name: 'Metabolic Syndrome',
    nameEs: 'Sindrome Metabolico',
    system: 'multi-system',
    summary: 'A cluster of interconnected cardiometabolic risk factors driven by visceral adiposity and insulin resistance, greatly increasing CVD and T2DM risk.',
    normalPhysiology: 'Adipose tissue is an endocrine organ secreting adipokines (adiponectin, leptin) that regulate insulin sensitivity, appetite, and inflammation. Subcutaneous fat acts as a metabolic buffer. Insulin-sensitive tissues maintain glucose and lipid homeostasis.',
    diseaseMechanism: 'Excess caloric intake leads to visceral fat accumulation. Visceral adipocytes become hypertrophic and dysfunctional, secreting pro-inflammatory cytokines (TNF-alpha, IL-6, resistin) and reducing adiponectin. This creates systemic insulin resistance, ectopic fat deposition (liver, muscle, pancreas), dyslipidemia (elevated VLDL/TG, low HDL, small dense LDL), hyperglycemia, and endothelial dysfunction. Chronic low-grade inflammation and a prothrombotic state amplify cardiovascular risk.',
    cascadeEffects: [
      'Insulin resistance drives hyperinsulinemia and eventual beta-cell failure',
      'Hepatic steatosis (NAFLD/MAFLD) from ectopic fat deposition',
      'Atherogenic dyslipidemia accelerates coronary and cerebrovascular disease',
      'Hypertension from insulin-mediated sodium retention and sympathetic activation',
      'Prothrombotic state (elevated PAI-1, fibrinogen) increases event risk',
      'Chronic inflammation promotes cancer risk (colon, breast, endometrial)',
    ],
    clinicalManifestations: [
      'Central obesity (waist circumference > 102 cm men, > 88 cm women)',
      'Elevated fasting triglycerides (>= 150 mg/dL)',
      'Low HDL (< 40 men, < 50 women)',
      'Elevated fasting glucose (>= 100 mg/dL) or T2DM',
      'Hypertension (>= 130/85 mmHg)',
      'Acanthosis nigricans (marker of insulin resistance)',
    ],
    diagnosticClues: [
      'Diagnosis: >= 3 of 5 ATP III/IDF criteria',
      'HOMA-IR for insulin resistance quantification',
      'Liver enzymes and ultrasound for NAFLD screening',
      'hs-CRP as inflammatory biomarker',
      'Comprehensive metabolic and lipid panel',
    ],
    treatmentRationale: 'Lifestyle modification (caloric restriction, physical activity) is the cornerstone because it directly reduces visceral adiposity, the root cause. Weight loss of 5-10% significantly improves all components. Metformin improves insulin sensitivity. Statins address dyslipidemia. Antihypertensives target BP. GLP-1 RAs and bariatric surgery produce substantial weight loss with cardiometabolic benefits.',
    relatedConditions: ['insulin-resistance-t2dm', 'atherosclerosis-cascade', 'hypertension-pathways', 'diabetes-complications'],
    keyConceptsLevel1: 'Metabolic syndrome means having a combination of belly fat, high blood sugar, high blood pressure, and abnormal cholesterol. Together, these problems greatly increase the chance of heart disease and diabetes. Losing weight and exercising are the best treatments.',
    keyConceptsLevel5: 'Metabolic syndrome reflects adipose tissue dysfunction with ectopic lipid deposition (lipotoxicity hypothesis). Visceral adiposity drives IL-6-hepatic CRP production, TNF-alpha-mediated IRS-1 serine phosphorylation (insulin resistance), and adiponectin deficiency (loss of AMPK activation and insulin-sensitizing effects). NAFLD/MASH is the hepatic manifestation. The "adipose tissue expandability" hypothesis explains why some obese individuals remain metabolically healthy while lean individuals with limited subcutaneous capacity develop metabolic syndrome. Cardiometabolic risk assessment should integrate these interrelated factors.',
  }),
};
