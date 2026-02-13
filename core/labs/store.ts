/**
 * Lab-to-Organ Mapping Data Store
 *
 * Comprehensive database mapping lab tests to organs,
 * body systems, and physiological pathways.
 */

import type {
  StoreLabTest,
  StoreLabPanel,
  LabCategory,
  BodySystem,
  OrganLabMapping,
  LabStatistics,
  StoreLeveledExplanations,
} from './types';

// ============================================================================
// LAB TESTS
// ============================================================================

const labTests = new Map<string, StoreLabTest>();

// ----------------------------------------------------------------------------
// COMPLETE BLOOD COUNT (CBC)
// ----------------------------------------------------------------------------

labTests.set('wbc', {
  id: 'wbc',
  name: 'White Blood Cell Count',
  abbreviation: 'WBC',
  loincCode: '6690-2',
  category: 'cbc',
  specimen: 'whole-blood',
  description: 'Total number of white blood cells (leukocytes) per unit of blood',
  primaryOrgans: ['Bone marrow', 'Spleen', 'Lymph nodes'],
  affectedSystems: ['hematologic', 'immune'],
  relatedPathways: [],
  referenceRange: {
    adult: { general: { low: 4.5, high: 11.0, unit: 'x10³/µL' } },
    criticalLow: 2.0,
    criticalHigh: 30.0,
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Infection (bacterial, viral)',
        'Leukemia/lymphoma',
        'Inflammation',
        'Stress response',
        'Corticosteroid use',
      ],
      additionalTests: ['Differential', 'Peripheral smear', 'Blood cultures'],
    },
    {
      direction: 'low',
      conditions: [
        'Bone marrow suppression',
        'Chemotherapy',
        'Viral infection',
        'Autoimmune (SLE)',
        'Aplastic anemia',
      ],
      urgency: 'urgent',
      additionalTests: ['Differential', 'ANC calculation', 'Bone marrow biopsy'],
    },
  ],
  explanations: {
    level1: 'White blood cells are your body\'s soldiers that fight infections and disease.',
    level2: 'WBC count measures the number of immune cells in your blood. High counts often mean infection or inflammation, while low counts can leave you vulnerable to infections.',
    level3: 'WBC includes neutrophils, lymphocytes, monocytes, eosinophils, and basophils. Leukocytosis (high WBC) suggests infection, inflammation, or malignancy. Leukopenia (low WBC) indicates bone marrow suppression or destruction.',
    level4: 'WBC count reflects bone marrow production balanced against peripheral consumption. Neutrophilia with left shift (bands, metamyelocytes) suggests acute bacterial infection. Lymphocytosis occurs in viral infections and CLL. The differential provides crucial diagnostic information beyond total count.',
    level5: 'Leukocyte kinetics involve marginated and circulating pools. Demargination (stress, epinephrine, corticosteroids) causes rapid WBC increase without true proliferation. G-CSF and GM-CSF regulate granulopoiesis. Reactive leukocytosis shows orderly maturation; leukemia shows maturation arrest. Automated counters may misclassify cells - peripheral smear review essential for abnormal results.',
  },
  keyFacts: [
    'Normal adult range: 4,500-11,000/µL',
    'Neutrophils are most numerous (60-70%)',
    'ANC <500 is severe neutropenia',
    'Left shift indicates immature cells released',
    'Leukemoid reaction mimics leukemia but is reactive',
  ],
  relatedTests: ['differential', 'anc', 'peripheral-smear'],
});

labTests.set('hemoglobin', {
  id: 'hemoglobin',
  name: 'Hemoglobin',
  abbreviation: 'Hgb',
  loincCode: '718-7',
  category: 'cbc',
  specimen: 'whole-blood',
  description: 'Concentration of hemoglobin protein in blood',
  primaryOrgans: ['Bone marrow', 'Spleen', 'Kidney'],
  affectedSystems: ['hematologic', 'cardiovascular', 'respiratory'],
  relatedPathways: [],
  referenceRange: {
    adult: {
      male: { low: 13.5, high: 17.5, unit: 'g/dL' },
      female: { low: 12.0, high: 16.0, unit: 'g/dL' },
    },
    criticalLow: 7.0,
    criticalHigh: 20.0,
    notes: 'Pregnant women may have lower values',
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Polycythemia vera',
        'Chronic hypoxia (COPD, high altitude)',
        'Dehydration (relative)',
        'EPO-producing tumors',
      ],
      additionalTests: ['Hematocrit', 'EPO level', 'JAK2 mutation'],
    },
    {
      direction: 'low',
      conditions: [
        'Iron deficiency anemia',
        'B12/folate deficiency',
        'Chronic disease anemia',
        'Acute blood loss',
        'Hemolysis',
        'Bone marrow failure',
      ],
      urgency: 'urgent',
      additionalTests: ['Reticulocyte count', 'Iron studies', 'B12/folate', 'Peripheral smear'],
    },
  ],
  explanations: {
    level1: 'Hemoglobin is the protein in red blood cells that carries oxygen throughout your body.',
    level2: 'Hemoglobin carries oxygen from your lungs to your tissues. Low hemoglobin (anemia) causes fatigue and shortness of breath. High hemoglobin may indicate too many red blood cells.',
    level3: 'Hemoglobin is a tetramer of globin chains with iron-containing heme groups. Each Hgb can bind 4 O2 molecules. Anemia (low Hgb) classification uses MCV (size) and reticulocyte count (production). Polycythemia may be primary (PV) or secondary (hypoxia, EPO).',
    level4: 'Hemoglobin synthesis requires iron (heme), B6 (heme), and B12/folate (DNA synthesis for RBC production). EPO from kidney stimulates erythropoiesis. Hgb electrophoresis detects variants (HbS, HbC, thalassemias). The oxygen dissociation curve shifts affect O2 delivery (pH, temperature, 2,3-DPG).',
    level5: 'Hemoglobin exists in relaxed (R, high O2 affinity) and tense (T, low O2 affinity) states. Cooperative binding creates sigmoidal O2 dissociation curve. Fetal Hb (α2γ2) has higher O2 affinity. Methemoglobin (Fe³⁺) cannot bind O2. Carboxyhemoglobin has 200x greater CO affinity than O2. Hemoglobin A1c reflects glycation over RBC lifespan.',
  },
  keyFacts: [
    'Each RBC contains ~280 million Hgb molecules',
    'Men have higher Hgb due to testosterone effect',
    'WHO defines anemia: Hgb <13 g/dL (men), <12 g/dL (women)',
    'Hgb <7 g/dL typically requires transfusion',
    'Hgb A1c reflects 3-month glucose average',
  ],
  relatedTests: ['hematocrit', 'mcv', 'reticulocyte-count', 'iron-studies'],
});

labTests.set('platelets', {
  id: 'platelets',
  name: 'Platelet Count',
  abbreviation: 'PLT',
  loincCode: '777-3',
  category: 'cbc',
  specimen: 'whole-blood',
  description: 'Number of platelets (thrombocytes) per unit of blood',
  primaryOrgans: ['Bone marrow', 'Spleen'],
  affectedSystems: ['hematologic', 'cardiovascular'],
  relatedPathways: ['raas'],
  referenceRange: {
    adult: { general: { low: 150, high: 400, unit: 'x10³/µL' } },
    criticalLow: 50,
    criticalHigh: 1000,
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Reactive thrombocytosis (infection, inflammation)',
        'Iron deficiency',
        'Essential thrombocythemia',
        'Polycythemia vera',
        'Post-splenectomy',
      ],
      additionalTests: ['Iron studies', 'Inflammatory markers', 'JAK2 mutation'],
    },
    {
      direction: 'low',
      conditions: [
        'ITP (immune thrombocytopenia)',
        'TTP/HUS',
        'DIC',
        'Bone marrow suppression',
        'Hypersplenism',
        'Heparin-induced (HIT)',
      ],
      urgency: 'urgent',
      additionalTests: ['Peripheral smear', 'Coagulation panel', 'HIT antibody'],
    },
  ],
  explanations: {
    level1: 'Platelets are tiny cell fragments that help your blood clot to stop bleeding.',
    level2: 'Platelets clump together at injury sites to form a plug and stop bleeding. Low platelet counts increase bleeding risk, while very high counts can cause clotting problems.',
    level3: 'Platelets are produced by megakaryocytes in bone marrow under thrombopoietin (TPO) control. Thrombocytopenia (<150K) can be from decreased production, increased destruction, or sequestration. Thrombocytosis (>400K) is usually reactive.',
    level4: 'Platelets have a 7-10 day lifespan. The spleen sequesters ~30% of platelets. ITP involves anti-platelet antibodies causing splenic destruction. TTP involves ADAMTS13 deficiency and ultra-large vWF multimers. DIC causes consumptive thrombocytopenia with coagulation activation.',
    level5: 'Megakaryocyte maturation involves endomitosis (DNA replication without division) creating polyploid cells. TPO binds c-Mpl receptor, activating JAK2-STAT signaling. JAK2 V617F mutation causes constitutive activation in myeloproliferative neoplasms. Platelet activation involves shape change, granule release (ADP, TXA2), and integrin αIIbβ3 activation for fibrinogen binding.',
  },
  keyFacts: [
    'Normal lifespan: 7-10 days',
    'PLT <10,000 high risk for spontaneous bleeding',
    'PLT <50,000 may need transfusion before surgery',
    'Pseudothrombocytopenia: EDTA-induced clumping artifact',
    'Splenectomy raises platelets (removes sequestration)',
  ],
  relatedTests: ['mpv', 'peripheral-smear', 'pt', 'ptt'],
});

labTests.set('mcv', {
  id: 'mcv',
  name: 'Mean Corpuscular Volume',
  abbreviation: 'MCV',
  loincCode: '787-2',
  category: 'cbc',
  specimen: 'whole-blood',
  description: 'Average volume of red blood cells',
  primaryOrgans: ['Bone marrow'],
  affectedSystems: ['hematologic'],
  relatedPathways: [],
  referenceRange: {
    adult: { general: { low: 80, high: 100, unit: 'fL' } },
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'B12 deficiency',
        'Folate deficiency',
        'Alcoholism',
        'Liver disease',
        'Hypothyroidism',
        'Reticulocytosis',
        'MDS',
      ],
      additionalTests: ['B12', 'Folate', 'Reticulocyte count', 'TSH'],
    },
    {
      direction: 'low',
      conditions: [
        'Iron deficiency',
        'Thalassemia trait',
        'Chronic disease',
        'Lead poisoning',
        'Sideroblastic anemia',
      ],
      additionalTests: ['Iron studies', 'Hgb electrophoresis', 'Lead level'],
    },
  ],
  explanations: {
    level1: 'MCV tells us if your red blood cells are the right size.',
    level2: 'MCV measures red blood cell size. Small cells (low MCV) often indicate iron deficiency. Large cells (high MCV) can indicate B12 or folate deficiency.',
    level3: 'MCV categorizes anemia: microcytic (<80 fL), normocytic (80-100 fL), or macrocytic (>100 fL). Iron deficiency and thalassemia cause microcytosis. B12/folate deficiency causes macrocytosis. Combined deficiencies may normalize MCV.',
    level4: 'MCV reflects cytoplasmic (Hgb) and nuclear (DNA) maturation. Iron deficiency impairs Hgb synthesis → small cells. B12/folate deficiency impairs DNA synthesis → nuclear-cytoplasmic asynchrony → large cells. RDW helps distinguish: high in iron deficiency (varied sizes), normal in thalassemia trait.',
    level5: 'MCV is calculated as Hct/RBC count. Reticulocytes are larger, so reticulocytosis increases MCV. Cold agglutinins cause spurious macrocytosis (RBC clumping). Thalassemia trait has low MCV but normal iron studies and elevated RBC count. Mentzer index (MCV/RBC) helps distinguish: <13 suggests thalassemia, >13 suggests iron deficiency.',
  },
  keyFacts: [
    'Microcytic: <80 fL (iron deficiency, thalassemia)',
    'Normocytic: 80-100 fL (chronic disease, acute blood loss)',
    'Macrocytic: >100 fL (B12/folate, liver disease, alcohol)',
    'RDW helps differentiate causes',
    'MCV can be normal with mixed deficiencies',
  ],
  relatedTests: ['iron-studies', 'b12', 'folate', 'rdw', 'hemoglobin-electrophoresis'],
});

// ----------------------------------------------------------------------------
// COMPREHENSIVE METABOLIC PANEL (CMP)
// ----------------------------------------------------------------------------

labTests.set('glucose', {
  id: 'glucose',
  name: 'Blood Glucose',
  abbreviation: 'Glucose',
  loincCode: '2345-7',
  category: 'cmp',
  specimen: 'serum',
  description: 'Concentration of glucose in blood',
  primaryOrgans: ['Pancreas', 'Liver', 'Adipose tissue'],
  affectedSystems: ['endocrine', 'hepatic', 'cardiovascular'],
  relatedPathways: ['glucose-insulin'],
  referenceRange: {
    adult: { general: { low: 70, high: 100, unit: 'mg/dL' } },
    criticalLow: 50,
    criticalHigh: 400,
    notes: 'Fasting values; random glucose may be higher',
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Diabetes mellitus',
        'Stress/illness',
        'Cushing syndrome',
        'Pancreatitis',
        'Medications (steroids)',
      ],
      additionalTests: ['HbA1c', 'Fasting glucose', 'OGTT', 'C-peptide'],
    },
    {
      direction: 'low',
      conditions: [
        'Insulin overdose',
        'Insulinoma',
        'Adrenal insufficiency',
        'Liver failure',
        'Sepsis',
        'Alcohol',
      ],
      urgency: 'critical',
      additionalTests: ['Insulin level', 'C-peptide', 'Cortisol', 'Sulfonylurea screen'],
    },
  ],
  explanations: {
    level1: 'Glucose is the sugar in your blood that gives your cells energy.',
    level2: 'Blood glucose is your body\'s main energy source. Insulin helps cells use glucose. High glucose over time (diabetes) damages blood vessels and organs.',
    level3: 'Fasting glucose >126 mg/dL or random >200 mg/dL with symptoms diagnoses diabetes. Prediabetes is 100-125 mg/dL fasting. Glucose homeostasis involves insulin (lowers) and counter-regulatory hormones (glucagon, cortisol, epinephrine) that raise it.',
    level4: 'Glucose enters cells via GLUT transporters. Insulin stimulates GLUT4 translocation in muscle and fat. The liver maintains fasting glucose via glycogenolysis and gluconeogenesis. HbA1c reflects average glucose over 2-3 months by glycating hemoglobin.',
    level5: 'Glucose sensing in pancreatic beta cells involves GLUT2 uptake, glucokinase-mediated metabolism, ATP/ADP ratio change, KATP channel closure, calcium influx, and insulin vesicle exocytosis. Incretin effect (GLP-1, GIP) potentiates GSIS. Glucose toxicity involves oxidative stress, AGE formation, and polyol pathway flux. SGLT2 in proximal tubule reabsorbs filtered glucose (threshold ~180 mg/dL).',
  },
  keyFacts: [
    'Normal fasting: 70-100 mg/dL',
    'Prediabetes: fasting 100-125 mg/dL',
    'Diabetes: fasting ≥126 mg/dL',
    'Hypoglycemia symptoms at <50-60 mg/dL',
    'Renal threshold ~180 mg/dL (glucosuria above this)',
  ],
  relatedTests: ['hba1c', 'c-peptide', 'insulin', 'ogtt'],
});

labTests.set('creatinine', {
  id: 'creatinine',
  name: 'Creatinine',
  abbreviation: 'Cr',
  loincCode: '2160-0',
  category: 'cmp',
  specimen: 'serum',
  description: 'Waste product from muscle metabolism filtered by kidneys',
  primaryOrgans: ['Kidney', 'Skeletal muscle'],
  affectedSystems: ['renal', 'musculoskeletal'],
  relatedPathways: ['raas'],
  referenceRange: {
    adult: {
      male: { low: 0.7, high: 1.3, unit: 'mg/dL' },
      female: { low: 0.6, high: 1.1, unit: 'mg/dL' },
    },
    criticalHigh: 10.0,
    notes: 'Lower in elderly due to reduced muscle mass',
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Acute kidney injury',
        'Chronic kidney disease',
        'Dehydration',
        'Rhabdomyolysis',
        'ACE inhibitor initiation',
        'Urinary obstruction',
      ],
      urgency: 'urgent',
      additionalTests: ['BUN', 'GFR calculation', 'Urinalysis', 'Renal ultrasound'],
    },
    {
      direction: 'low',
      conditions: [
        'Low muscle mass (cachexia)',
        'Pregnancy',
        'Liver disease (decreased creatine production)',
      ],
    },
  ],
  explanations: {
    level1: 'Creatinine is a waste product from your muscles that your kidneys filter out. High levels mean your kidneys may not be working well.',
    level2: 'Creatinine is produced at a constant rate from muscle metabolism and filtered by the kidneys. When kidney function declines, creatinine builds up in the blood.',
    level3: 'Creatinine is derived from creatine phosphate in muscle. It is freely filtered at the glomerulus with minimal tubular reabsorption/secretion, making it useful for estimating GFR. Serum creatinine rises when GFR falls below ~50% of normal.',
    level4: 'eGFR equations (CKD-EPI, MDRD) use creatinine, age, sex, and race to estimate kidney function. Creatinine is a late marker - significant kidney damage occurs before creatinine rises. Cystatin C is an alternative marker independent of muscle mass.',
    level5: 'Creatinine has ~10% tubular secretion via organic cation transporters. Cimetidine and trimethoprim block secretion, raising creatinine without affecting true GFR. Muscle mass variations affect creatinine independent of kidney function. Creatinine-based GFR estimates may be inaccurate in extremes of muscle mass, acute kidney injury, or rapidly changing function.',
  },
  keyFacts: [
    'Creatinine production ~20 mg/kg/day (proportional to muscle mass)',
    'Creatinine clearance approximates GFR',
    'Serum creatinine insensitive to early kidney disease',
    'Creatinine doubles = ~50% GFR reduction',
    'eGFR <60 mL/min/1.73m² = CKD stage 3+',
  ],
  relatedTests: ['bun', 'egfr', 'cystatin-c', 'urinalysis'],
});

labTests.set('bun', {
  id: 'bun',
  name: 'Blood Urea Nitrogen',
  abbreviation: 'BUN',
  loincCode: '3094-0',
  category: 'cmp',
  specimen: 'serum',
  description: 'Nitrogen portion of urea, a waste product from protein metabolism',
  primaryOrgans: ['Kidney', 'Liver'],
  affectedSystems: ['renal', 'hepatic'],
  relatedPathways: [],
  referenceRange: {
    adult: { general: { low: 7, high: 20, unit: 'mg/dL' } },
    criticalHigh: 100,
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Renal failure',
        'Dehydration',
        'High protein diet',
        'GI bleeding',
        'Catabolic states',
        'Heart failure',
      ],
      additionalTests: ['Creatinine', 'BUN/Cr ratio', 'Urinalysis'],
    },
    {
      direction: 'low',
      conditions: [
        'Liver failure',
        'Malnutrition',
        'SIADH (dilution)',
        'Pregnancy',
      ],
      additionalTests: ['LFTs', 'Albumin', 'Ammonia'],
    },
  ],
  explanations: {
    level1: 'BUN measures waste in your blood from breaking down protein. High BUN can mean kidney problems or dehydration.',
    level2: 'BUN is a waste product created when the liver breaks down protein. Kidneys normally remove it. High BUN can indicate kidney problems, dehydration, or high protein intake.',
    level3: 'Urea is synthesized in the liver from ammonia (via urea cycle) and excreted by kidneys. BUN rises with decreased renal function, increased protein catabolism, or decreased renal perfusion (prerenal azotemia).',
    level4: 'BUN/creatinine ratio helps differentiate: >20:1 suggests prerenal (dehydration, bleeding, CHF) or increased catabolism; <10:1 suggests liver disease or malnutrition. Urea has 40-50% tubular reabsorption (concentration-dependent), making BUN less specific for GFR than creatinine.',
    level5: 'Urea is freely filtered and passively reabsorbed in collecting ducts (ADH-dependent). In low-flow states, increased reabsorption raises BUN disproportionately (prerenal azotemia). GI bleeding provides protein load that increases hepatic urea synthesis. Severe liver failure impairs urea cycle, causing low BUN and elevated ammonia.',
  },
  keyFacts: [
    'BUN/Cr ratio >20:1 suggests prerenal azotemia',
    'BUN/Cr ratio <10:1 suggests liver disease',
    'GI bleeding increases BUN (digested blood = protein load)',
    'BUN varies with protein intake and hydration',
    'Less specific for kidney function than creatinine',
  ],
  relatedTests: ['creatinine', 'bun-cr-ratio', 'urinalysis'],
});

labTests.set('sodium', {
  id: 'sodium',
  name: 'Sodium',
  abbreviation: 'Na',
  loincCode: '2951-2',
  category: 'cmp',
  specimen: 'serum',
  description: 'Primary extracellular cation regulating fluid balance',
  primaryOrgans: ['Kidney', 'Adrenal gland'],
  affectedSystems: ['renal', 'endocrine', 'neurological', 'cardiovascular'],
  relatedPathways: ['raas'],
  referenceRange: {
    adult: { general: { low: 136, high: 145, unit: 'mEq/L' } },
    criticalLow: 120,
    criticalHigh: 160,
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Dehydration (free water loss)',
        'Diabetes insipidus',
        'Hyperaldosteronism',
        'Hypertonic saline administration',
      ],
      urgency: 'urgent',
      additionalTests: ['Serum osmolality', 'Urine osmolality', 'ADH level'],
    },
    {
      direction: 'low',
      conditions: [
        'SIADH',
        'Heart failure',
        'Cirrhosis',
        'Diuretics',
        'Adrenal insufficiency',
        'Psychogenic polydipsia',
      ],
      urgency: 'urgent',
      additionalTests: ['Serum osmolality', 'Urine sodium', 'Urine osmolality', 'TSH', 'Cortisol'],
    },
  ],
  explanations: {
    level1: 'Sodium is a salt in your blood that helps control how much water is in your body.',
    level2: 'Sodium is the main electrolyte outside cells and regulates water balance. Low sodium can cause confusion and seizures. High sodium indicates dehydration.',
    level3: 'Sodium concentration reflects water balance, not total body sodium. Hyponatremia is usually dilutional (excess water relative to sodium). Hypernatremia indicates water deficit. SIADH causes hyponatremia from inappropriate water retention.',
    level4: 'Sodium homeostasis involves ADH (water retention), aldosterone (sodium retention), and thirst. Hyponatremia evaluation requires assessing volume status and urine sodium/osmolality. Acute symptomatic hyponatremia requires careful correction to avoid osmotic demyelination.',
    level5: 'Hyponatremia causes cerebral edema as water shifts into cells. Brain adapts by extruding osmolytes over hours-days. Rapid correction risks osmotic demyelination syndrome (formerly central pontine myelinolysis). Target correction <10-12 mEq/L in 24h, slower if chronic. SIADH criteria: euvolemic hyponatremia, urine osmolality >100, urine Na >30, normal thyroid/adrenal function.',
  },
  keyFacts: [
    'Serum Na reflects water balance, not sodium content',
    'Hyponatremia is the most common electrolyte disorder',
    'Symptoms occur with Na <120 mEq/L (acute) or <110 mEq/L (chronic)',
    'Correct chronic hyponatremia slowly (<10 mEq/L per 24h)',
    'Pseudohyponatremia: artifact from high lipids/proteins',
  ],
  relatedTests: ['serum-osmolality', 'urine-sodium', 'urine-osmolality', 'adh'],
});

labTests.set('potassium', {
  id: 'potassium',
  name: 'Potassium',
  abbreviation: 'K',
  loincCode: '2823-3',
  category: 'cmp',
  specimen: 'serum',
  description: 'Primary intracellular cation critical for cardiac and nerve function',
  primaryOrgans: ['Kidney', 'Adrenal gland'],
  affectedSystems: ['renal', 'cardiovascular', 'endocrine', 'musculoskeletal'],
  relatedPathways: ['raas'],
  referenceRange: {
    adult: { general: { low: 3.5, high: 5.0, unit: 'mEq/L' } },
    criticalLow: 2.5,
    criticalHigh: 6.5,
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Renal failure',
        'ACE inhibitors/ARBs',
        'K-sparing diuretics',
        'Addison disease',
        'Rhabdomyolysis',
        'Tumor lysis syndrome',
        'Hemolysis (artifact)',
      ],
      urgency: 'critical',
      additionalTests: ['ECG', 'Repeat if hemolyzed', 'Renal function'],
    },
    {
      direction: 'low',
      conditions: [
        'Diuretics (loop, thiazide)',
        'Vomiting/diarrhea',
        'Hyperaldosteronism',
        'Insulin administration',
        'Refeeding syndrome',
      ],
      urgency: 'urgent',
      additionalTests: ['ECG', 'Magnesium', 'Urine potassium'],
    },
  ],
  explanations: {
    level1: 'Potassium is an important mineral that helps your heart and muscles work properly.',
    level2: 'Potassium is essential for heart rhythm and muscle function. Both high and low potassium can cause dangerous heart rhythms. The kidneys regulate potassium levels.',
    level3: 'Potassium is 98% intracellular, maintained by Na-K-ATPase. Serum K represents <2% of total body K. Small shifts between compartments cause large serum changes. Hyperkalemia causes peaked T waves and arrhythmias; hypokalemia causes U waves and weakness.',
    level4: 'Renal K excretion occurs in collecting duct principal cells (ROMK channels) driven by aldosterone. Insulin and β2-agonists shift K intracellularly. Transcellular shifts explain why insulin/glucose and albuterol treat hyperkalemia. Magnesium deficiency impairs K repletion (fix Mg first).',
    level5: 'Hyperkalemia depolarizes RMP, initially increasing excitability then causing inexcitability. ECG progression: peaked T → PR prolongation → QRS widening → sine wave → asystole. Calcium stabilizes membrane but doesn\'t lower K. Sodium bicarbonate shifts K in acidosis. Hemodialysis definitively removes K. Hypokalemia impairs insulin secretion and causes nephrogenic DI (decreased AQP2).',
  },
  keyFacts: [
    '98% of potassium is intracellular',
    'ECG changes occur before critical levels',
    'Hemolysis causes pseudohyperkalemia',
    'Magnesium deficiency impairs potassium correction',
    'Calcium gluconate is first-line for cardiac protection',
  ],
  relatedTests: ['ecg', 'magnesium', 'renal-function', 'aldosterone'],
});

// ----------------------------------------------------------------------------
// LIVER FUNCTION TESTS (LFTs)
// ----------------------------------------------------------------------------

labTests.set('alt', {
  id: 'alt',
  name: 'Alanine Aminotransferase',
  abbreviation: 'ALT',
  loincCode: '1742-6',
  category: 'lft',
  specimen: 'serum',
  description: 'Enzyme primarily found in liver, released with hepatocyte injury',
  primaryOrgans: ['Liver'],
  affectedSystems: ['hepatic'],
  relatedPathways: ['enterohepatic-circulation'],
  referenceRange: {
    adult: { general: { low: 7, high: 56, unit: 'U/L' } },
    criticalHigh: 1000,
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Acute hepatitis (viral, drug, toxic)',
        'NAFLD/NASH',
        'Alcoholic liver disease',
        'Ischemic hepatitis (shock liver)',
        'Muscle injury (minor elevation)',
      ],
      additionalTests: ['AST', 'AST/ALT ratio', 'Viral hepatitis panel', 'Liver ultrasound'],
    },
  ],
  explanations: {
    level1: 'ALT is an enzyme from your liver. High ALT means liver cells are being damaged.',
    level2: 'ALT is released when liver cells are injured. It\'s more specific to the liver than AST. Very high levels suggest acute hepatitis; mild elevations may indicate fatty liver disease.',
    level3: 'ALT is more liver-specific than AST. ALT >1000 U/L suggests acute hepatocellular injury (viral hepatitis, drugs, ischemia). NAFLD causes mild elevation (1-3x normal). AST/ALT ratio >2 suggests alcoholic liver disease.',
    level4: 'ALT is a cytoplasmic enzyme released with hepatocyte membrane damage. Half-life ~47 hours. Pattern of elevation helps diagnosis: >10,000 = ischemic or drug-induced; 1,000-10,000 = acute viral; <1,000 = chronic hepatitis, NAFLD. R-factor = (ALT/ULN)/(ALP/ULN) distinguishes hepatocellular (R>5) from cholestatic (R<2).',
    level5: 'ALT is more sensitive for detecting hepatocyte injury but AST is more sensitive for detecting extent of injury. De Ritis ratio (AST/ALT) reflects differential enzyme location: ALT purely cytoplasmic, AST 80% mitochondrial. Alcohol-induced mitochondrial injury preferentially releases AST. Pyridoxine (B6) deficiency may lower aminotransferases despite liver disease.',
  },
  keyFacts: [
    'ALT is more liver-specific than AST',
    'ALT >1000 U/L = acute hepatocellular injury',
    'AST/ALT >2 suggests alcoholic liver disease',
    'NAFLD is most common cause of mild ALT elevation',
    'ALT can be elevated with muscle injury',
  ],
  relatedTests: ['ast', 'alp', 'ggt', 'bilirubin', 'hepatitis-panel'],
});

labTests.set('ast', {
  id: 'ast',
  name: 'Aspartate Aminotransferase',
  abbreviation: 'AST',
  loincCode: '1920-8',
  category: 'lft',
  specimen: 'serum',
  description: 'Enzyme found in liver, heart, muscle; released with cell injury',
  primaryOrgans: ['Liver', 'Heart', 'Skeletal muscle'],
  affectedSystems: ['hepatic', 'cardiovascular', 'musculoskeletal'],
  relatedPathways: ['enterohepatic-circulation'],
  referenceRange: {
    adult: { general: { low: 10, high: 40, unit: 'U/L' } },
    criticalHigh: 1000,
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Hepatitis',
        'Cirrhosis',
        'Alcoholic liver disease',
        'Myocardial infarction',
        'Rhabdomyolysis',
        'Muscle injury',
        'Hemolysis',
      ],
      additionalTests: ['ALT', 'AST/ALT ratio', 'CK', 'Troponin'],
    },
  ],
  explanations: {
    level1: 'AST is an enzyme from your liver, heart, and muscles. High levels can mean damage to any of these.',
    level2: 'AST is released when cells in the liver, heart, or muscles are damaged. Unlike ALT, elevated AST isn\'t specific to liver disease - it can also indicate heart attack or muscle injury.',
    level3: 'AST is found in liver, heart, muscle, kidney, and RBCs. AST/ALT ratio >2:1 with both elevated suggests alcoholic liver disease (AST rarely >300 in alcoholics). Isolated AST elevation may indicate muscle or cardiac origin - check CK and troponin.',
    level4: 'AST has cytoplasmic and mitochondrial isoforms. Mitochondrial AST (mAST) released with severe injury correlates with necrosis. In alcoholic hepatitis, alcohol-induced mitochondrial damage preferentially releases mAST (hence higher AST/ALT ratio). Macro-AST (AST-immunoglobulin complex) causes persistent elevation without disease.',
    level5: 'AST catalyzes transamination of aspartate to oxaloacetate, linking amino acid and carbohydrate metabolism. Pyridoxal phosphate (B6) is a cofactor - deficiency can cause falsely low levels. AST has shorter half-life (~17h) than ALT (~47h), causing faster decline in resolving acute hepatitis.',
  },
  keyFacts: [
    'AST is less liver-specific than ALT',
    'AST/ALT >2 suggests alcoholic liver disease',
    'AST elevation in MI now replaced by troponin',
    'Macro-AST causes persistent benign elevation',
    'Hemolysis causes AST elevation (RBC source)',
  ],
  relatedTests: ['alt', 'ck', 'troponin', 'ggt', 'alp'],
});

labTests.set('alp', {
  id: 'alp',
  name: 'Alkaline Phosphatase',
  abbreviation: 'ALP',
  loincCode: '6768-6',
  category: 'lft',
  specimen: 'serum',
  description: 'Enzyme from liver, bone, and other tissues; elevated in cholestasis and bone disease',
  primaryOrgans: ['Liver', 'Bone', 'Intestine', 'Placenta'],
  affectedSystems: ['hepatic', 'musculoskeletal'],
  relatedPathways: ['enterohepatic-circulation'],
  referenceRange: {
    adult: { general: { low: 44, high: 147, unit: 'U/L' } },
    notes: 'Higher in children (bone growth) and pregnancy',
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Cholestasis (bile duct obstruction)',
        'Primary biliary cholangitis',
        'Bone disease (Paget, fractures, metastases)',
        'Pregnancy (placental source)',
        'Growing children (bone source)',
      ],
      additionalTests: ['GGT (confirms hepatic source)', 'Bilirubin', 'Bone scan', 'ALP isoenzymes'],
    },
  ],
  explanations: {
    level1: 'ALP is an enzyme found in liver and bones. High ALP can mean problems with your bile ducts or bones.',
    level2: 'ALP comes from liver and bone. When elevated, checking GGT helps determine the source - if GGT is also elevated, it\'s likely liver; if GGT is normal, it\'s likely bone.',
    level3: 'ALP is located on hepatocyte canalicular membrane and released with cholestasis. Non-hepatic sources include bone (osteoblasts), placenta, and intestine. GGT elevation confirms hepatic origin. Isolated ALP elevation with normal GGT suggests bone disease.',
    level4: 'Cholestatic pattern: elevated ALP >3x normal with ALT <3x suggests biliary obstruction or infiltrative disease. ALP is induced by bile acids. In bone, ALP is released by active osteoblasts - elevated in Paget disease, bone metastases, healing fractures, and growth.',
    level5: 'ALP isoenzymes can be differentiated by heat stability, electrophoresis, or wheat germ lectin precipitation. Bone ALP is heat-labile; liver ALP is heat-stable. Placental ALP is heat-resistant (Regan isoenzyme may indicate malignancy). Zinc is a cofactor - deficiency (from malnutrition, burns) causes low ALP.',
  },
  keyFacts: [
    'GGT confirms hepatic source of ALP',
    'ALP elevated in children (bone growth)',
    'Cholestatic pattern: high ALP, modest ALT elevation',
    'Isolated ALP elevation = consider bone disease',
    'Paget disease can cause very high ALP',
  ],
  relatedTests: ['ggt', 'bilirubin', 'calcium', 'vitamin-d'],
});

labTests.set('bilirubin', {
  id: 'bilirubin',
  name: 'Total Bilirubin',
  abbreviation: 'TB',
  loincCode: '1975-2',
  category: 'lft',
  specimen: 'serum',
  description: 'Breakdown product of heme metabolism; elevated causes jaundice',
  primaryOrgans: ['Liver', 'Spleen', 'Gallbladder'],
  affectedSystems: ['hepatic', 'hematologic'],
  relatedPathways: ['enterohepatic-circulation'],
  referenceRange: {
    adult: { general: { low: 0.1, high: 1.2, unit: 'mg/dL' } },
    criticalHigh: 15,
    notes: 'Direct bilirubin normally <0.3 mg/dL',
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Hemolysis (unconjugated)',
        'Gilbert syndrome (unconjugated)',
        'Hepatitis (mixed)',
        'Cirrhosis (mixed)',
        'Biliary obstruction (conjugated)',
        'Crigler-Najjar (unconjugated)',
      ],
      additionalTests: ['Direct bilirubin', 'ALT/AST', 'ALP', 'Haptoglobin', 'LDH', 'Reticulocyte count'],
    },
  ],
  explanations: {
    level1: 'Bilirubin is a yellow substance made when old red blood cells break down. High levels turn your skin and eyes yellow (jaundice).',
    level2: 'Bilirubin comes from broken-down red blood cells. The liver processes it for excretion in bile. High bilirubin causes jaundice and can indicate hemolysis, liver disease, or bile duct blockage.',
    level3: 'Unconjugated (indirect) bilirubin is from heme breakdown, transported bound to albumin. The liver conjugates it with glucuronic acid (direct bilirubin) for biliary excretion. Elevated indirect = prehepatic (hemolysis) or hepatic uptake/conjugation defect; elevated direct = hepatic or posthepatic (obstruction).',
    level4: 'Gilbert syndrome is benign unconjugated hyperbilirubinemia from reduced UGT1A1 activity (2-5% of population). Crigler-Najjar is severe UGT1A1 deficiency. Dubin-Johnson and Rotor syndromes are benign conjugated hyperbilirubinemias from excretion defects. Delta bilirubin (albumin-bound conjugated bilirubin) explains prolonged jaundice after resolved obstruction.',
    level5: 'Bilirubin metabolism: heme → biliverdin → bilirubin (in RES) → albumin transport → hepatocyte uptake (OATP1B1/B3) → conjugation (UGT1A1) → canalicular excretion (MRP2) → intestinal bacterial deconjugation → urobilinogen (some enterohepatic recycling, some urinary excretion, most stercobilin in feces).',
  },
  keyFacts: [
    'Jaundice visible at bilirubin >2.5-3 mg/dL',
    'Gilbert syndrome: mild unconjugated elevation, benign',
    'Direct (conjugated) bilirubin elevated = liver disease or obstruction',
    'Indirect (unconjugated) elevated = hemolysis or Gilbert',
    'Neonatal jaundice common due to immature conjugation',
  ],
  relatedTests: ['direct-bilirubin', 'alt', 'ast', 'alp', 'haptoglobin'],
});

// ----------------------------------------------------------------------------
// LIPID PANEL
// ----------------------------------------------------------------------------

labTests.set('total-cholesterol', {
  id: 'total-cholesterol',
  name: 'Total Cholesterol',
  abbreviation: 'TC',
  loincCode: '2093-3',
  category: 'lipid',
  specimen: 'serum',
  description: 'Total amount of cholesterol in blood including all lipoprotein fractions',
  primaryOrgans: ['Liver', 'Intestine'],
  affectedSystems: ['cardiovascular', 'hepatic', 'endocrine'],
  relatedPathways: ['enterohepatic-circulation'],
  referenceRange: {
    adult: { general: { low: 0, high: 200, unit: 'mg/dL' } },
    notes: 'Desirable <200, borderline 200-239, high ≥240',
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Familial hypercholesterolemia',
        'Diet high in saturated fat',
        'Hypothyroidism',
        'Nephrotic syndrome',
        'Obstructive liver disease',
        'Diabetes',
      ],
      additionalTests: ['LDL', 'HDL', 'Triglycerides', 'Lipoprotein(a)', 'TSH'],
    },
    {
      direction: 'low',
      conditions: [
        'Hyperthyroidism',
        'Liver failure',
        'Malabsorption',
        'Malnutrition',
        'Chronic illness',
      ],
    },
  ],
  explanations: {
    level1: 'Cholesterol is a fat in your blood. Too much can clog your arteries and cause heart problems.',
    level2: 'Total cholesterol includes LDL ("bad" cholesterol), HDL ("good" cholesterol), and other fats. High total cholesterol increases heart disease risk, but HDL and LDL levels are more important than total.',
    level3: 'Total cholesterol = LDL + HDL + VLDL (estimated as TG/5). Cholesterol is essential for cell membranes, hormones, and bile acids. Hypercholesterolemia promotes atherosclerosis. Treatment focuses on LDL reduction.',
    level4: 'Liver synthesizes cholesterol (HMG-CoA reductase pathway, target of statins) and clears LDL via LDL receptors. Familial hypercholesterolemia results from LDL receptor mutations. PCSK9 degrades LDL receptors - inhibitors markedly reduce LDL. Non-HDL cholesterol (TC - HDL) predicts CV risk better than LDL in high-TG states.',
    level5: 'Cholesterol homeostasis involves SREBP-2 regulation of HMG-CoA reductase and LDL receptor. Intracellular cholesterol suppresses SREBP-2 cleavage. Statins deplete cellular cholesterol, upregulating LDL receptors. Ezetimibe blocks NPC1L1 intestinal absorption. PCSK9 binds LDL receptor, targeting it for degradation - PCSK9 inhibitors allow more LDL clearance. Lipoprotein(a) is an LDL-like particle conferring independent CV risk.',
  },
  keyFacts: [
    'Desirable total cholesterol <200 mg/dL',
    'LDL is the primary target for treatment',
    'Non-HDL cholesterol useful in hypertriglyceridemia',
    'TC = LDL + HDL + (TG/5)',
    'Fasting may not be required for lipid panel',
  ],
  relatedTests: ['ldl', 'hdl', 'triglycerides', 'non-hdl', 'lipoprotein-a'],
});

labTests.set('ldl', {
  id: 'ldl',
  name: 'Low-Density Lipoprotein Cholesterol',
  abbreviation: 'LDL-C',
  loincCode: '13457-7',
  category: 'lipid',
  specimen: 'serum',
  description: 'Primary atherogenic lipoprotein; main target for cholesterol-lowering therapy',
  primaryOrgans: ['Liver', 'Arterial wall'],
  affectedSystems: ['cardiovascular', 'hepatic'],
  relatedPathways: ['enterohepatic-circulation'],
  referenceRange: {
    adult: { general: { low: 0, high: 100, unit: 'mg/dL' } },
    notes: 'Goals vary by CV risk: <70 for very high risk, <100 for high risk',
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Familial hypercholesterolemia',
        'Diet high in saturated fat',
        'Hypothyroidism',
        'Diabetes',
        'Nephrotic syndrome',
        'Medications (thiazides, cyclosporine)',
      ],
      additionalTests: ['Lipoprotein(a)', 'ApoB', 'TSH', 'hsCRP'],
    },
  ],
  explanations: {
    level1: 'LDL is the "bad" cholesterol that can build up in your arteries and cause heart disease.',
    level2: 'LDL carries cholesterol to arteries where it can accumulate as plaque. Higher LDL means higher heart attack and stroke risk. Statins lower LDL and reduce cardiovascular events.',
    level3: 'LDL is formed from VLDL in circulation. It delivers cholesterol to peripheral tissues and can deposit in arterial walls, initiating atherosclerosis. LDL calculation: TC - HDL - (TG/5). Direct LDL measurement used when TG >400.',
    level4: 'LDL particles vary in size - small, dense LDL is more atherogenic. LDL becomes modified (oxidized) in the arterial intima, taken up by macrophages forming foam cells. Statins inhibit HMG-CoA reductase, upregulating LDL receptors. PCSK9 inhibitors dramatically lower LDL by preventing receptor degradation.',
    level5: 'LDL retention in the subendothelium initiates atherosclerosis (response-to-retention hypothesis). Modified LDL activates endothelium and recruits monocytes. Macrophage uptake of oxidized LDL via scavenger receptors (SR-A, CD36) creates foam cells. LDL particle number (LDL-P, ApoB) may predict risk better than LDL-C, especially with metabolic syndrome.',
  },
  keyFacts: [
    'LDL is primary target for CV risk reduction',
    'LDL calculated: TC - HDL - (TG/5), invalid if TG >400',
    'Very high CV risk: LDL goal <70 mg/dL',
    'Each 39 mg/dL LDL reduction ≈22% CV risk reduction',
    'ApoB and LDL-P may better reflect particle number',
  ],
  relatedTests: ['total-cholesterol', 'hdl', 'triglycerides', 'apob', 'lipoprotein-a'],
});

// ----------------------------------------------------------------------------
// THYROID TESTS
// ----------------------------------------------------------------------------

labTests.set('tsh', {
  id: 'tsh',
  name: 'Thyroid-Stimulating Hormone',
  abbreviation: 'TSH',
  loincCode: '3016-3',
  category: 'thyroid',
  specimen: 'serum',
  description: 'Pituitary hormone regulating thyroid function; most sensitive test for thyroid dysfunction',
  primaryOrgans: ['Pituitary gland', 'Thyroid gland'],
  affectedSystems: ['endocrine'],
  relatedPathways: ['hpt-axis'],
  referenceRange: {
    adult: { general: { low: 0.4, high: 4.0, unit: 'mIU/L' } },
    notes: 'Range may be narrower (0.5-2.5) in some labs; different in pregnancy',
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Primary hypothyroidism (most common)',
        'TSH-secreting pituitary adenoma (rare)',
        'Thyroid hormone resistance (rare)',
        'Recovery from nonthyroidal illness',
      ],
      additionalTests: ['Free T4', 'Free T3', 'TPO antibodies'],
    },
    {
      direction: 'low',
      conditions: [
        'Primary hyperthyroidism (Graves, toxic nodule)',
        'Secondary hypothyroidism (pituitary disease)',
        'Overtreatment with levothyroxine',
        'Nonthyroidal illness',
        'First trimester pregnancy',
      ],
      additionalTests: ['Free T4', 'Free T3', 'TSI antibodies'],
    },
  ],
  explanations: {
    level1: 'TSH is a hormone that tells your thyroid how much thyroid hormone to make. High TSH means your thyroid is underactive.',
    level2: 'TSH from the pituitary gland controls thyroid hormone production. When thyroid hormones are low, TSH goes up trying to stimulate the thyroid. TSH is the most sensitive test for detecting thyroid problems.',
    level3: 'TSH has an inverse log-linear relationship with free T4: small T4 changes cause large TSH changes, making TSH the most sensitive marker. Primary hypothyroidism: high TSH, low T4. Primary hyperthyroidism: low TSH, high T4.',
    level4: 'TSH secretion is pulsatile with circadian rhythm (peak at night). Negative feedback via T3 at the pituitary (local T4→T3 conversion by D2) is the dominant regulator. Secondary hypothyroidism (low/normal TSH with low T4) indicates pituitary or hypothalamic disease.',
    level5: 'TSH is a glycoprotein hormone sharing an α-subunit with LH, FSH, and hCG (hence hCG can stimulate thyroid in pregnancy). TSH receptor stimulating antibodies (Graves disease) bypass normal feedback. Subclinical disease: TSH abnormal but T4/T3 normal - may warrant treatment based on TSH level, symptoms, and antibodies. TSH reference range is population-based and may not reflect individual optimal level.',
  },
  keyFacts: [
    'TSH is most sensitive test for thyroid dysfunction',
    'High TSH with low T4 = primary hypothyroidism',
    'Low TSH with high T4 = primary hyperthyroidism',
    'Check free T4 to interpret abnormal TSH',
    'TSH varies with circadian rhythm and illness',
  ],
  relatedTests: ['free-t4', 'free-t3', 'tpo-antibodies', 'tsi-antibodies'],
});

labTests.set('free-t4', {
  id: 'free-t4',
  name: 'Free Thyroxine',
  abbreviation: 'FT4',
  loincCode: '3024-7',
  category: 'thyroid',
  specimen: 'serum',
  description: 'Unbound, metabolically active form of T4',
  primaryOrgans: ['Thyroid gland'],
  affectedSystems: ['endocrine', 'cardiovascular', 'neurological'],
  relatedPathways: ['hpt-axis'],
  referenceRange: {
    adult: { general: { low: 0.8, high: 1.8, unit: 'ng/dL' } },
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Hyperthyroidism (Graves, toxic nodule)',
        'Thyroiditis (transient)',
        'Excess levothyroxine',
        'TSH-secreting adenoma',
      ],
      additionalTests: ['TSH', 'Free T3', 'TSI antibodies', 'Thyroid uptake scan'],
    },
    {
      direction: 'low',
      conditions: [
        'Primary hypothyroidism',
        'Secondary hypothyroidism',
        'Nonthyroidal illness',
        'Severe illness',
      ],
      additionalTests: ['TSH', 'TPO antibodies', 'Pituitary function tests'],
    },
  ],
  explanations: {
    level1: 'Free T4 is the active form of thyroid hormone that your body can use right away.',
    level2: 'T4 is the main hormone produced by the thyroid. Most is bound to proteins, but free T4 is the active form. It\'s converted to T3 in tissues where it does its work.',
    level3: 'Free T4 is 0.03% of total T4 (rest is bound to TBG, albumin, transthyretin). T4 is converted to active T3 by deiodinases in peripheral tissues. Free T4 assays directly measure unbound hormone, avoiding binding protein interference.',
    level4: 'T4 is produced exclusively by the thyroid. Peripheral D1/D2 deiodinases convert T4 to T3; D3 converts T4 to inactive rT3. Free T4 is preferred over total T4 because it\'s unaffected by binding protein changes (pregnancy, estrogen, liver disease).',
    level5: 'Free T4 assays use equilibrium dialysis (gold standard), ultrafiltration, or analog immunoassay methods. Analog methods may be affected by altered binding proteins or free fatty acids. In pregnancy, TBG rises, increasing total T4 but free T4 initially rises (hCG effect) then normalizes. In nonthyroidal illness, low T4 with inappropriately normal/low TSH occurs (euthyroid sick syndrome).',
  },
  keyFacts: [
    'Only 0.03% of T4 is free (unbound)',
    'Free T4 preferred over total T4',
    'T4 is converted to active T3 peripherally',
    'Free T4 half-life is 7 days',
    'Binding protein changes affect total but not free T4',
  ],
  relatedTests: ['tsh', 'free-t3', 'total-t4', 'reverse-t3'],
});

// ----------------------------------------------------------------------------
// CARDIAC MARKERS
// ----------------------------------------------------------------------------

labTests.set('troponin', {
  id: 'troponin',
  name: 'Cardiac Troponin',
  abbreviation: 'cTn',
  loincCode: '10839-9',
  category: 'cardiac',
  specimen: 'serum',
  description: 'Cardiac-specific protein released with myocardial injury; gold standard for MI diagnosis',
  primaryOrgans: ['Heart'],
  affectedSystems: ['cardiovascular'],
  relatedPathways: [],
  referenceRange: {
    adult: { general: { low: 0, high: 0.04, unit: 'ng/mL' } },
    criticalHigh: 0.1,
    notes: 'High-sensitivity assays have lower cutoffs; 99th percentile is diagnostic threshold',
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Acute myocardial infarction',
        'Myocarditis',
        'Pulmonary embolism',
        'Heart failure',
        'Sepsis',
        'Renal failure (chronic mild elevation)',
        'Takotsubo cardiomyopathy',
      ],
      urgency: 'critical',
      additionalTests: ['ECG', 'Serial troponins', 'BNP', 'Echocardiogram', 'Coronary angiography'],
    },
  ],
  explanations: {
    level1: 'Troponin is a protein from heart muscle. When your heart is damaged, troponin leaks into your blood.',
    level2: 'Troponin is released when heart muscle is injured. It\'s the best test for heart attack. Levels rise within hours of injury, peak at 24-48 hours, and can stay elevated for 1-2 weeks.',
    level3: 'Cardiac troponin I (cTnI) and T (cTnT) are specific to heart muscle. MI diagnosis requires troponin rise and fall with clinical/ECG evidence of ischemia. High-sensitivity assays detect smaller amounts, enabling earlier diagnosis.',
    level4: 'Troponin is part of the thin filament regulatory complex (with tropomyosin). cTnT and cTnI are released in 3 phases: cytosolic pool (early), ongoing necrosis (main rise), and myofibrillar degradation (prolonged elevation). Serial testing showing rise/fall pattern supports acute injury.',
    level5: 'High-sensitivity troponin assays (hs-cTn) detect 10-fold lower concentrations, enabling rule-out within 1-3 hours using rapid protocols. The 99th percentile of a healthy reference population defines abnormality. Sex-specific thresholds may improve diagnostic accuracy. Chronic troponin elevation in CKD reflects structural heart disease and predicts mortality.',
  },
  keyFacts: [
    'Troponin is the gold standard for MI diagnosis',
    'Rises 3-6 hours after injury, peaks 24-48h',
    'Remains elevated 7-14 days (longer than CK)',
    'High-sensitivity assays enable earlier diagnosis',
    'Elevated troponin requires rise/fall pattern for acute MI',
  ],
  relatedTests: ['ecg', 'bnp', 'ck-mb', 'echocardiogram'],
});

labTests.set('bnp', {
  id: 'bnp',
  name: 'B-type Natriuretic Peptide',
  abbreviation: 'BNP',
  loincCode: '30934-4',
  category: 'cardiac',
  specimen: 'plasma',
  description: 'Neurohormone released by ventricles in response to stretch; marker for heart failure',
  primaryOrgans: ['Heart'],
  affectedSystems: ['cardiovascular', 'renal'],
  relatedPathways: ['raas'],
  referenceRange: {
    adult: { general: { low: 0, high: 100, unit: 'pg/mL' } },
    notes: 'NT-proBNP has different reference ranges; age/sex/renal function affect levels',
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Heart failure (systolic or diastolic)',
        'Acute coronary syndrome',
        'Pulmonary embolism',
        'Atrial fibrillation',
        'Renal failure',
        'Pulmonary hypertension',
        'Sepsis',
      ],
      additionalTests: ['Echocardiogram', 'Troponin', 'Chest X-ray', 'ECG'],
    },
  ],
  explanations: {
    level1: 'BNP is a hormone released when your heart is stretched or working too hard. High BNP usually means heart failure.',
    level2: 'When the heart is under stress (volume or pressure overload), it releases BNP. This helps diagnose heart failure and assess its severity. Higher levels indicate worse heart failure.',
    level3: 'BNP is released from ventricular myocytes in response to wall stress. It causes natriuresis, vasodilation, and RAAS inhibition (counteracting the maladaptive neurohormonal response in heart failure). BNP <100 pg/mL has high negative predictive value for heart failure.',
    level4: 'NT-proBNP is an inactive fragment with longer half-life. BNP <100 and NT-proBNP <300 effectively exclude acute HF. Levels correlate with filling pressures and prognosis. Obesity lowers BNP (adipose tissue clearance); renal failure raises it. Sacubitril inhibits neprilysin which degrades BNP, so BNP rises but NT-proBNP doesn\'t.',
    level5: 'Natriuretic peptides bind NPR-A/B receptors, activating guanylate cyclase and cGMP signaling. Effects include natriuresis (inhibiting ENaC), vasodilation, anti-fibrotic, and RAAS suppression. BNP gene expression is induced by stretch, hypoxia, and neurohormones. Obesity paradox: lower BNP despite HF due to increased clearance by NPR-C in adipose tissue.',
  },
  keyFacts: [
    'BNP <100 pg/mL: HF unlikely (high NPV)',
    'BNP >400 pg/mL: HF likely',
    'Gray zone 100-400 requires clinical judgment',
    'NT-proBNP has longer half-life, different cutoffs',
    'Renal failure increases BNP; obesity decreases it',
  ],
  relatedTests: ['nt-probnp', 'troponin', 'echocardiogram', 'creatinine'],
});

// ----------------------------------------------------------------------------
// COAGULATION
// ----------------------------------------------------------------------------

labTests.set('pt', {
  id: 'pt',
  name: 'Prothrombin Time',
  abbreviation: 'PT',
  loincCode: '5902-2',
  category: 'coagulation',
  specimen: 'plasma',
  description: 'Measures extrinsic and common coagulation pathways; monitors warfarin therapy',
  primaryOrgans: ['Liver'],
  affectedSystems: ['hematologic', 'hepatic'],
  relatedPathways: [],
  referenceRange: {
    adult: { general: { low: 11, high: 13, unit: 'seconds' } },
    notes: 'INR 2-3 for most warfarin indications',
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Warfarin therapy',
        'Vitamin K deficiency',
        'Liver disease',
        'DIC',
        'Factor VII, X, V, II, or fibrinogen deficiency',
      ],
      additionalTests: ['INR', 'PTT', 'Fibrinogen', 'Mixing study', 'Factor levels'],
    },
  ],
  explanations: {
    level1: 'PT measures how quickly your blood clots. It\'s used to monitor blood thinner medications like warfarin.',
    level2: 'PT tests the extrinsic clotting pathway activated by tissue injury. It\'s prolonged by warfarin, liver disease, and vitamin K deficiency. INR standardizes PT results for warfarin monitoring.',
    level3: 'PT measures factors VII, X, V, II (prothrombin), and fibrinogen. INR = (patient PT / control PT)^ISI, standardizing results across different thromboplastin reagents. Factor VII has the shortest half-life (6h), so PT is first to prolong in liver disease or warfarin.',
    level4: 'The extrinsic pathway begins with tissue factor exposure activating factor VII. PT is sensitive to vitamin K-dependent factors (II, VII, IX, X) synthesized in the liver. Warfarin inhibits vitamin K epoxide reductase, preventing factor carboxylation. Mixing study distinguishes factor deficiency (corrects) from inhibitor (doesn\'t correct).',
    level5: 'Vitamin K-dependent factors require γ-carboxylation of glutamate residues for calcium-mediated phospholipid binding. Warfarin inhibits VKORC1, depleting reduced vitamin K. VKORC1 polymorphisms and CYP2C9 variants affect warfarin sensitivity. DOACs (direct oral anticoagulants) affect PT variably - factor Xa inhibitors prolong PT, thrombin inhibitors prolong PTT more.',
  },
  keyFacts: [
    'PT tests extrinsic pathway (tissue factor → common pathway)',
    'INR standardizes PT for warfarin monitoring',
    'Factor VII has shortest half-life (6h) - PT prolongs first',
    'Vitamin K reverses warfarin effect (slowly)',
    'FFP provides immediate reversal',
  ],
  relatedTests: ['inr', 'ptt', 'fibrinogen', 'factor-levels'],
});

labTests.set('ptt', {
  id: 'ptt',
  name: 'Partial Thromboplastin Time',
  abbreviation: 'PTT',
  loincCode: '3173-2',
  category: 'coagulation',
  specimen: 'plasma',
  description: 'Measures intrinsic and common coagulation pathways; monitors heparin therapy',
  primaryOrgans: ['Liver'],
  affectedSystems: ['hematologic', 'hepatic'],
  relatedPathways: [],
  referenceRange: {
    adult: { general: { low: 25, high: 35, unit: 'seconds' } },
    notes: 'Target 1.5-2.5x normal for heparin therapy',
  },
  clinicalInterpretations: [
    {
      direction: 'high',
      conditions: [
        'Heparin therapy',
        'Hemophilia A or B',
        'Factor XI, XII deficiency',
        'von Willebrand disease',
        'Lupus anticoagulant',
        'Liver disease',
        'DIC',
      ],
      additionalTests: ['Mixing study', 'Factor levels', 'vWF studies', 'Lupus anticoagulant panel'],
    },
  ],
  explanations: {
    level1: 'PTT measures how quickly your blood clots using the intrinsic pathway. It\'s used to monitor heparin blood thinner.',
    level2: 'PTT tests the intrinsic pathway (factors XII, XI, IX, VIII) plus the common pathway. It\'s prolonged by heparin, hemophilia, and some clotting disorders. Lupus anticoagulant also prolongs PTT but causes clotting, not bleeding.',
    level3: 'PTT is sensitive to factors XII, XI, IX, VIII, X, V, II, and fibrinogen. Hemophilia A (VIII) and B (IX) prolong PTT with normal PT. Factor XII deficiency prolongs PTT but doesn\'t cause bleeding. Lupus anticoagulant causes PTT prolongation that doesn\'t correct with mixing study.',
    level4: 'The intrinsic pathway begins with contact activation (factor XII on negatively charged surfaces). Factor VIII circulates bound to vWF - vWD can mildly prolong PTT. Mixing study: 1:1 mix with normal plasma - correction suggests factor deficiency; no correction suggests inhibitor (lupus anticoagulant or factor-specific antibody).',
    level5: 'Factor XII activates XI, which activates IX; IXa/VIIIa complex activates X. Factor VIII is a cofactor that increases Xa generation 100,000-fold. Hemophilia A severity correlates with VIII activity: <1% severe, 1-5% moderate, 5-40% mild. Acquired hemophilia A involves autoantibodies against factor VIII - mixing study may show delayed inhibition pattern (time-dependent).',
  },
  keyFacts: [
    'PTT tests intrinsic pathway (contact → common pathway)',
    'Hemophilia A (VIII) and B (IX) prolong PTT',
    'Factor XII deficiency prolongs PTT without bleeding',
    'Lupus anticoagulant: paradoxical clotting with prolonged PTT',
    'Mixing study differentiates deficiency from inhibitor',
  ],
  relatedTests: ['pt', 'fibrinogen', 'factor-viii', 'factor-ix', 'vwf'],
});

// ============================================================================
// LAB PANELS
// ============================================================================

const labPanels = new Map<string, StoreLabPanel>();

labPanels.set('cbc', {
  id: 'cbc',
  name: 'Complete Blood Count',
  abbreviation: 'CBC',
  description: 'Comprehensive evaluation of blood cells including RBCs, WBCs, and platelets',
  tests: ['wbc', 'hemoglobin', 'hematocrit', 'mcv', 'mch', 'mchc', 'rdw', 'platelets', 'differential'],
  commonIndications: [
    'Anemia evaluation',
    'Infection workup',
    'Bleeding disorders',
    'Preoperative assessment',
    'Chemotherapy monitoring',
  ],
  primaryOrgans: ['Bone marrow', 'Spleen'],
  affectedSystems: ['hematologic', 'immune'],
});

labPanels.set('cmp', {
  id: 'cmp',
  name: 'Comprehensive Metabolic Panel',
  abbreviation: 'CMP',
  description: 'Assesses kidney function, liver function, electrolytes, and glucose',
  tests: ['glucose', 'bun', 'creatinine', 'sodium', 'potassium', 'chloride', 'co2', 'calcium', 'total-protein', 'albumin', 'bilirubin', 'alp', 'alt', 'ast'],
  commonIndications: [
    'General health screening',
    'Electrolyte monitoring',
    'Kidney function assessment',
    'Liver function assessment',
    'Medication monitoring',
  ],
  primaryOrgans: ['Kidney', 'Liver'],
  affectedSystems: ['renal', 'hepatic', 'endocrine'],
});

labPanels.set('lft', {
  id: 'lft',
  name: 'Liver Function Tests',
  abbreviation: 'LFTs',
  description: 'Evaluates liver enzymes, synthetic function, and bilirubin',
  tests: ['alt', 'ast', 'alp', 'ggt', 'bilirubin', 'direct-bilirubin', 'albumin', 'total-protein', 'pt'],
  commonIndications: [
    'Hepatitis evaluation',
    'Medication monitoring',
    'Cirrhosis assessment',
    'Jaundice workup',
    'Preoperative assessment',
  ],
  primaryOrgans: ['Liver'],
  affectedSystems: ['hepatic'],
});

labPanels.set('lipid-panel', {
  id: 'lipid-panel',
  name: 'Lipid Panel',
  abbreviation: 'Lipid Panel',
  description: 'Evaluates cardiovascular risk through cholesterol and triglyceride levels',
  tests: ['total-cholesterol', 'ldl', 'hdl', 'triglycerides', 'non-hdl'],
  commonIndications: [
    'Cardiovascular risk assessment',
    'Statin therapy monitoring',
    'Diabetes management',
    'Metabolic syndrome evaluation',
  ],
  primaryOrgans: ['Liver', 'Heart'],
  affectedSystems: ['cardiovascular', 'hepatic'],
});

labPanels.set('thyroid-panel', {
  id: 'thyroid-panel',
  name: 'Thyroid Function Panel',
  abbreviation: 'TFTs',
  description: 'Evaluates thyroid hormone production and regulation',
  tests: ['tsh', 'free-t4', 'free-t3', 'total-t4', 'total-t3'],
  commonIndications: [
    'Hypothyroidism evaluation',
    'Hyperthyroidism evaluation',
    'Thyroid medication monitoring',
    'Fatigue workup',
    'Weight change evaluation',
  ],
  primaryOrgans: ['Thyroid gland', 'Pituitary gland'],
  affectedSystems: ['endocrine'],
});

labPanels.set('coag-panel', {
  id: 'coag-panel',
  name: 'Coagulation Panel',
  abbreviation: 'Coag Panel',
  description: 'Evaluates blood clotting function',
  tests: ['pt', 'inr', 'ptt', 'fibrinogen'],
  commonIndications: [
    'Bleeding disorder evaluation',
    'Anticoagulation monitoring',
    'Preoperative assessment',
    'Liver disease evaluation',
    'DIC workup',
  ],
  primaryOrgans: ['Liver'],
  affectedSystems: ['hematologic', 'hepatic'],
});

// ============================================================================
// ORGAN-TO-LAB MAPPINGS
// ============================================================================

export const ORGAN_LAB_MAPPINGS: OrganLabMapping[] = [
  {
    organId: 'liver',
    organName: 'Liver',
    primaryLabs: ['alt', 'ast', 'alp', 'ggt', 'bilirubin', 'albumin', 'pt'],
    secondaryLabs: ['ammonia', 'total-cholesterol', 'triglycerides'],
    functionTests: ['Synthetic function (albumin, PT)', 'Excretory function (bilirubin)', 'Enzyme leak (ALT, AST)', 'Cholestatic (ALP, GGT)'],
  },
  {
    organId: 'kidney',
    organName: 'Kidney',
    primaryLabs: ['creatinine', 'bun', 'egfr', 'urinalysis'],
    secondaryLabs: ['cystatin-c', 'urine-protein', 'sodium', 'potassium'],
    functionTests: ['Filtration (GFR, creatinine)', 'Tubular function (electrolytes, UA)', 'Concentration (urine osmolality)'],
  },
  {
    organId: 'heart',
    organName: 'Heart',
    primaryLabs: ['troponin', 'bnp', 'ck-mb'],
    secondaryLabs: ['ldl', 'total-cholesterol', 'hscrp', 'lipoprotein-a'],
    functionTests: ['Myocardial injury (troponin)', 'Wall stress (BNP)', 'CV risk (lipids)'],
  },
  {
    organId: 'thyroid',
    organName: 'Thyroid Gland',
    primaryLabs: ['tsh', 'free-t4', 'free-t3'],
    secondaryLabs: ['tpo-antibodies', 'tsi-antibodies', 'thyroglobulin'],
    functionTests: ['Hormone production (T4, T3)', 'Regulation (TSH)', 'Autoimmunity (antibodies)'],
  },
  {
    organId: 'pancreas',
    organName: 'Pancreas',
    primaryLabs: ['glucose', 'hba1c', 'lipase', 'amylase'],
    secondaryLabs: ['c-peptide', 'insulin', 'fecal-elastase'],
    functionTests: ['Endocrine (glucose, insulin)', 'Exocrine (lipase, elastase)'],
  },
  {
    organId: 'bone-marrow',
    organName: 'Bone Marrow',
    primaryLabs: ['wbc', 'hemoglobin', 'platelets', 'mcv'],
    secondaryLabs: ['reticulocyte-count', 'iron-studies', 'b12', 'folate'],
    functionTests: ['Erythropoiesis (RBC indices)', 'Leukopoiesis (WBC, differential)', 'Thrombopoiesis (platelets)'],
  },
  {
    organId: 'adrenal',
    organName: 'Adrenal Gland',
    primaryLabs: ['cortisol', 'acth', 'aldosterone', 'renin'],
    secondaryLabs: ['dhea-s', 'catecholamines', 'metanephrines'],
    functionTests: ['Glucocorticoid (cortisol)', 'Mineralocorticoid (aldosterone)', 'Medullary (catecholamines)'],
  },
];

// ============================================================================
// STATISTICS
// ============================================================================

function calculateLabStatistics(): LabStatistics {
  const categoryCounts = {} as Record<LabCategory, number>;
  const categories: LabCategory[] = [
    'cbc', 'cmp', 'lft', 'lipid', 'thyroid', 'coagulation', 'cardiac',
    'renal', 'inflammatory', 'endocrine', 'tumor-markers', 'urinalysis',
    'blood-gas', 'autoimmune', 'infectious', 'nutritional', 'specialty'
  ];

  categories.forEach(cat => {
    categoryCounts[cat] = Array.from(labTests.values()).filter(t => t.category === cat).length;
  });

  return {
    totalTests: labTests.size,
    totalPanels: labPanels.size,
    categoryCounts,
  };
}

export const LAB_STATISTICS = calculateLabStatistics();

// ============================================================================
// API FUNCTIONS
// ============================================================================

export function getLabTest(id: string): StoreLabTest | undefined {
  return labTests.get(id);
}

export function getAllLabTests(): StoreLabTest[] {
  return Array.from(labTests.values());
}

export function getLabTestsByCategory(category: LabCategory): StoreLabTest[] {
  return Array.from(labTests.values()).filter((t) => t.category === category);
}

export function getLabTestsByOrgan(organName: string): StoreLabTest[] {
  const lowerOrgan = organName.toLowerCase();
  return Array.from(labTests.values()).filter((t) =>
    t.primaryOrgans.some((o) => o.toLowerCase().includes(lowerOrgan))
  );
}

export function getLabTestsBySystem(system: BodySystem): StoreLabTest[] {
  return Array.from(labTests.values()).filter((t) =>
    t.affectedSystems.includes(system)
  );
}

export function getLabTestsByPathway(pathwayId: string): StoreLabTest[] {
  return Array.from(labTests.values()).filter(
    (t) => t.relatedPathways?.includes(pathwayId)
  );
}

export function getLabPanel(id: string): StoreLabPanel | undefined {
  return labPanels.get(id);
}

export function getAllLabPanels(): StoreLabPanel[] {
  return Array.from(labPanels.values());
}

export function searchLabTests(query: string): StoreLabTest[] {
  const q = query.toLowerCase();
  return Array.from(labTests.values()).filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.abbreviation?.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q)
  );
}

export function getLabsForOrgan(organId: string): OrganLabMapping | undefined {
  return ORGAN_LAB_MAPPINGS.find((m) => m.organId === organId);
}

export function getOrgansForLab(labId: string): string[] {
  const test = labTests.get(labId);
  return test?.primaryOrgans ?? [];
}

export function getLabStatistics(): LabStatistics {
  return LAB_STATISTICS;
}

export function getLabExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const test = labTests.get(id);
  if (!test) return undefined;
  const levelKey = `level${level}` as keyof StoreLeveledExplanations;
  return test.explanations[levelKey];
}
