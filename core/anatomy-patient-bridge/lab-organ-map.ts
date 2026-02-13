/**
 * Lab-to-Organ Mapping
 *
 * Maps 50+ common laboratory tests to their relevant organs and anatomical regions.
 * Used to bridge lab results with anatomical visualization and patient education.
 */

export interface LabOrganMapping {
  labName: string;
  loincCode?: string;
  organ: string;
  regionId: string;
  interpretation: {
    high?: string;
    low?: string;
  };
  relatedLabs?: string[];
}

export const LAB_ORGAN_MAP: Record<string, LabOrganMapping> = {
  // ============================================
  // Liver Function Tests (10+ labs)
  // ============================================
  'ALT': {
    labName: 'Alanine Aminotransferase',
    loincCode: '1742-6',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate liver cell damage from hepatitis, fatty liver disease, medications, or alcohol',
      low: 'Usually not clinically significant; may occur with vitamin B6 deficiency',
    },
    relatedLabs: ['AST', 'ALP', 'GGT', 'bilirubin-total', 'albumin'],
  },
  'AST': {
    labName: 'Aspartate Aminotransferase',
    loincCode: '1920-8',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate liver damage, heart attack, muscle injury, or hemolysis',
      low: 'Usually not clinically significant; may occur with vitamin B6 deficiency',
    },
    relatedLabs: ['ALT', 'ALP', 'GGT', 'CK', 'troponin-I'],
  },
  'ALP': {
    labName: 'Alkaline Phosphatase',
    loincCode: '6768-6',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate bile duct obstruction, bone disease, or liver disease',
      low: 'May occur in malnutrition, hypothyroidism, or zinc deficiency',
    },
    relatedLabs: ['GGT', 'bilirubin-direct', 'bilirubin-total'],
  },
  'GGT': {
    labName: 'Gamma-Glutamyl Transferase',
    loincCode: '2324-2',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate liver disease, bile duct problems, or alcohol use',
      low: 'Usually not clinically significant',
    },
    relatedLabs: ['ALP', 'ALT', 'AST'],
  },
  'bilirubin-total': {
    labName: 'Total Bilirubin',
    loincCode: '1975-2',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate liver disease, bile duct blockage, or increased red blood cell breakdown (hemolysis)',
      low: 'Usually not clinically significant',
    },
    relatedLabs: ['bilirubin-direct', 'bilirubin-indirect', 'ALT', 'AST'],
  },
  'bilirubin-direct': {
    labName: 'Direct (Conjugated) Bilirubin',
    loincCode: '1968-7',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate bile duct obstruction or liver disease affecting bile flow',
      low: 'Usually not clinically significant',
    },
    relatedLabs: ['bilirubin-total', 'bilirubin-indirect', 'ALP', 'GGT'],
  },
  'bilirubin-indirect': {
    labName: 'Indirect (Unconjugated) Bilirubin',
    loincCode: '1971-1',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate hemolysis, Gilbert syndrome, or ineffective erythropoiesis',
      low: 'Usually not clinically significant',
    },
    relatedLabs: ['bilirubin-total', 'bilirubin-direct', 'reticulocytes', 'haptoglobin'],
  },
  'albumin': {
    labName: 'Albumin',
    loincCode: '1751-7',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate dehydration',
      low: 'May indicate liver disease, malnutrition, kidney disease, or inflammation',
    },
    relatedLabs: ['total-protein', 'prealbumin', 'ALT', 'AST'],
  },
  'total-protein': {
    labName: 'Total Protein',
    loincCode: '2885-2',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate dehydration, chronic infection, or multiple myeloma',
      low: 'May indicate liver disease, malnutrition, or protein loss',
    },
    relatedLabs: ['albumin', 'globulins'],
  },
  'PT': {
    labName: 'Prothrombin Time',
    loincCode: '5902-2',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate liver disease, vitamin K deficiency, or warfarin therapy',
      low: 'Usually not clinically significant',
    },
    relatedLabs: ['INR', 'PTT', 'fibrinogen'],
  },
  'INR': {
    labName: 'International Normalized Ratio',
    loincCode: '6301-6',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate liver disease, vitamin K deficiency, or anticoagulant therapy',
      low: 'May increase risk of blood clots',
    },
    relatedLabs: ['PT', 'PTT'],
  },

  // ============================================
  // Kidney Function Tests (10+ labs)
  // ============================================
  'creatinine': {
    labName: 'Creatinine',
    loincCode: '2160-0',
    organ: 'kidneys',
    regionId: 'body.torso.abdomen.kidneys',
    interpretation: {
      high: 'May indicate decreased kidney function, dehydration, or muscle breakdown',
      low: 'May indicate decreased muscle mass or pregnancy',
    },
    relatedLabs: ['BUN', 'GFR', 'cystatin-C'],
  },
  'BUN': {
    labName: 'Blood Urea Nitrogen',
    loincCode: '3094-0',
    organ: 'kidneys',
    regionId: 'body.torso.abdomen.kidneys',
    interpretation: {
      high: 'May indicate kidney disease, dehydration, high protein diet, or GI bleeding',
      low: 'May indicate liver disease, malnutrition, or overhydration',
    },
    relatedLabs: ['creatinine', 'GFR', 'BUN-creatinine-ratio'],
  },
  'GFR': {
    labName: 'Glomerular Filtration Rate (estimated)',
    loincCode: '33914-3',
    organ: 'kidneys',
    regionId: 'body.torso.abdomen.kidneys',
    interpretation: {
      high: 'Generally not a concern; may indicate hyperfiltration in early diabetes',
      low: 'Indicates decreased kidney function; severity staged by level',
    },
    relatedLabs: ['creatinine', 'BUN', 'cystatin-C'],
  },
  'cystatin-C': {
    labName: 'Cystatin C',
    loincCode: '33863-2',
    organ: 'kidneys',
    regionId: 'body.torso.abdomen.kidneys',
    interpretation: {
      high: 'May indicate decreased kidney function',
      low: 'Usually not clinically significant',
    },
    relatedLabs: ['creatinine', 'GFR', 'BUN'],
  },
  'potassium': {
    labName: 'Potassium',
    loincCode: '2823-3',
    organ: 'kidneys',
    regionId: 'body.torso.abdomen.kidneys',
    interpretation: {
      high: 'May indicate kidney disease, medication effects, or cell breakdown; can affect heart rhythm',
      low: 'May indicate diuretic use, vomiting/diarrhea, or hormonal disorders; can affect heart rhythm',
    },
    relatedLabs: ['sodium', 'chloride', 'bicarbonate', 'magnesium'],
  },
  'sodium': {
    labName: 'Sodium',
    loincCode: '2951-2',
    organ: 'kidneys',
    regionId: 'body.torso.abdomen.kidneys',
    interpretation: {
      high: 'May indicate dehydration, diabetes insipidus, or excess sodium intake',
      low: 'May indicate overhydration, SIADH, diuretics, or adrenal insufficiency',
    },
    relatedLabs: ['potassium', 'chloride', 'osmolality'],
  },
  'chloride': {
    labName: 'Chloride',
    loincCode: '2075-0',
    organ: 'kidneys',
    regionId: 'body.torso.abdomen.kidneys',
    interpretation: {
      high: 'May indicate dehydration or metabolic acidosis',
      low: 'May indicate metabolic alkalosis from vomiting or diuretics',
    },
    relatedLabs: ['sodium', 'potassium', 'bicarbonate'],
  },
  'bicarbonate': {
    labName: 'Bicarbonate (CO2)',
    loincCode: '1963-8',
    organ: 'kidneys',
    regionId: 'body.torso.abdomen.kidneys',
    interpretation: {
      high: 'May indicate metabolic alkalosis or compensation for respiratory acidosis',
      low: 'May indicate metabolic acidosis or kidney disease',
    },
    relatedLabs: ['anion-gap', 'pH', 'pCO2'],
  },
  'phosphorus': {
    labName: 'Phosphorus',
    loincCode: '2777-1',
    organ: 'kidneys',
    regionId: 'body.torso.abdomen.kidneys',
    interpretation: {
      high: 'May indicate kidney disease, hypoparathyroidism, or excessive intake',
      low: 'May indicate malnutrition, vitamin D deficiency, or hyperparathyroidism',
    },
    relatedLabs: ['calcium', 'PTH', 'vitamin-D'],
  },
  'uric-acid': {
    labName: 'Uric Acid',
    loincCode: '3084-1',
    organ: 'kidneys',
    regionId: 'body.torso.abdomen.kidneys',
    interpretation: {
      high: 'May indicate gout, kidney disease, or high purine diet',
      low: 'May indicate liver disease or low purine diet',
    },
    relatedLabs: ['creatinine', 'BUN', 'GFR'],
  },

  // ============================================
  // Cardiac Markers (8+ labs)
  // ============================================
  'troponin-I': {
    labName: 'Troponin I',
    loincCode: '10839-9',
    organ: 'heart',
    regionId: 'body.torso.thorax.heart',
    interpretation: {
      high: 'May indicate heart muscle damage from heart attack, myocarditis, or other cardiac stress',
      low: 'Usually normal; indicates no detectable heart muscle damage',
    },
    relatedLabs: ['troponin-T', 'CK-MB', 'BNP', 'myoglobin'],
  },
  'troponin-T': {
    labName: 'Troponin T',
    loincCode: '6598-7',
    organ: 'heart',
    regionId: 'body.torso.thorax.heart',
    interpretation: {
      high: 'May indicate heart muscle damage from heart attack or other cardiac conditions',
      low: 'Usually normal',
    },
    relatedLabs: ['troponin-I', 'CK-MB', 'BNP'],
  },
  'BNP': {
    labName: 'B-type Natriuretic Peptide',
    loincCode: '30934-4',
    organ: 'heart',
    regionId: 'body.torso.thorax.heart',
    interpretation: {
      high: 'May indicate heart failure or cardiac stress',
      low: 'Usually normal; makes heart failure less likely',
    },
    relatedLabs: ['NT-proBNP', 'troponin-I', 'echocardiogram'],
  },
  'NT-proBNP': {
    labName: 'N-terminal pro-BNP',
    loincCode: '33762-6',
    organ: 'heart',
    regionId: 'body.torso.thorax.heart',
    interpretation: {
      high: 'May indicate heart failure or cardiac stress',
      low: 'Makes heart failure less likely',
    },
    relatedLabs: ['BNP', 'troponin-I'],
  },
  'CK-MB': {
    labName: 'Creatine Kinase-MB',
    loincCode: '13969-1',
    organ: 'heart',
    regionId: 'body.torso.thorax.heart',
    interpretation: {
      high: 'May indicate heart muscle damage; less specific than troponin',
      low: 'Usually normal',
    },
    relatedLabs: ['troponin-I', 'CK-total', 'myoglobin'],
  },
  'CK-total': {
    labName: 'Creatine Kinase (Total)',
    loincCode: '2157-6',
    organ: 'heart',
    regionId: 'body.torso.thorax.heart',
    interpretation: {
      high: 'May indicate muscle damage from heart, skeletal muscle, or brain',
      low: 'Usually not clinically significant',
    },
    relatedLabs: ['CK-MB', 'troponin-I', 'myoglobin'],
  },
  'LDH': {
    labName: 'Lactate Dehydrogenase',
    loincCode: '2532-0',
    organ: 'heart',
    regionId: 'body.torso.thorax.heart',
    interpretation: {
      high: 'Non-specific; may indicate tissue damage from many sources',
      low: 'Usually not clinically significant',
    },
    relatedLabs: ['AST', 'ALT', 'CK'],
  },
  'homocysteine': {
    labName: 'Homocysteine',
    loincCode: '2028-9',
    organ: 'heart',
    regionId: 'body.torso.thorax.heart',
    interpretation: {
      high: 'May indicate increased cardiovascular risk, B12/folate deficiency',
      low: 'Usually not clinically significant',
    },
    relatedLabs: ['vitamin-B12', 'folate', 'lipid-panel'],
  },

  // ============================================
  // Pancreas/Diabetes Labs (6+ labs)
  // ============================================
  'glucose': {
    labName: 'Glucose (Fasting)',
    loincCode: '1558-6',
    organ: 'pancreas',
    regionId: 'body.torso.abdomen.pancreas',
    interpretation: {
      high: 'May indicate diabetes, prediabetes, or stress response',
      low: 'May indicate hypoglycemia from medications, excess insulin, or other causes',
    },
    relatedLabs: ['HbA1c', 'insulin', 'C-peptide'],
  },
  'HbA1c': {
    labName: 'Hemoglobin A1c',
    loincCode: '4548-4',
    organ: 'pancreas',
    regionId: 'body.torso.abdomen.pancreas',
    interpretation: {
      high: 'May indicate diabetes or prediabetes; reflects average blood sugar over 2-3 months',
      low: 'May indicate hypoglycemia, hemolytic anemia, or recent blood loss',
    },
    relatedLabs: ['glucose', 'fructosamine', 'insulin'],
  },
  'insulin': {
    labName: 'Insulin (Fasting)',
    loincCode: '2484-4',
    organ: 'pancreas',
    regionId: 'body.torso.abdomen.pancreas',
    interpretation: {
      high: 'May indicate insulin resistance, insulinoma, or early type 2 diabetes',
      low: 'May indicate type 1 diabetes or late type 2 diabetes',
    },
    relatedLabs: ['glucose', 'C-peptide', 'HOMA-IR'],
  },
  'C-peptide': {
    labName: 'C-Peptide',
    loincCode: '1986-9',
    organ: 'pancreas',
    regionId: 'body.torso.abdomen.pancreas',
    interpretation: {
      high: 'May indicate insulin resistance or insulinoma',
      low: 'May indicate type 1 diabetes or beta cell failure',
    },
    relatedLabs: ['insulin', 'glucose', 'HbA1c'],
  },
  'lipase': {
    labName: 'Lipase',
    loincCode: '3040-3',
    organ: 'pancreas',
    regionId: 'body.torso.abdomen.pancreas',
    interpretation: {
      high: 'May indicate pancreatitis or other pancreatic disease',
      low: 'May indicate pancreatic insufficiency or chronic pancreatitis',
    },
    relatedLabs: ['amylase', 'triglycerides'],
  },
  'amylase': {
    labName: 'Amylase',
    loincCode: '1798-8',
    organ: 'pancreas',
    regionId: 'body.torso.abdomen.pancreas',
    interpretation: {
      high: 'May indicate pancreatitis, salivary gland disease, or bowel obstruction',
      low: 'May indicate pancreatic insufficiency',
    },
    relatedLabs: ['lipase', 'triglycerides'],
  },

  // ============================================
  // Thyroid Labs (6+ labs)
  // ============================================
  'TSH': {
    labName: 'Thyroid Stimulating Hormone',
    loincCode: '3016-3',
    organ: 'thyroid',
    regionId: 'body.neck.thyroid',
    interpretation: {
      high: 'May indicate hypothyroidism (underactive thyroid)',
      low: 'May indicate hyperthyroidism (overactive thyroid) or pituitary disorder',
    },
    relatedLabs: ['T4-free', 'T3-free', 'T4-total', 'thyroid-antibodies'],
  },
  'T4-free': {
    labName: 'Free Thyroxine (T4)',
    loincCode: '3024-7',
    organ: 'thyroid',
    regionId: 'body.neck.thyroid',
    interpretation: {
      high: 'May indicate hyperthyroidism',
      low: 'May indicate hypothyroidism',
    },
    relatedLabs: ['TSH', 'T3-free', 'T4-total'],
  },
  'T4-total': {
    labName: 'Total Thyroxine (T4)',
    loincCode: '3026-2',
    organ: 'thyroid',
    regionId: 'body.neck.thyroid',
    interpretation: {
      high: 'May indicate hyperthyroidism or increased binding proteins',
      low: 'May indicate hypothyroidism or decreased binding proteins',
    },
    relatedLabs: ['TSH', 'T4-free', 'T3-total'],
  },
  'T3-free': {
    labName: 'Free Triiodothyronine (T3)',
    loincCode: '3051-0',
    organ: 'thyroid',
    regionId: 'body.neck.thyroid',
    interpretation: {
      high: 'May indicate hyperthyroidism, especially T3 toxicosis',
      low: 'May indicate hypothyroidism or non-thyroidal illness',
    },
    relatedLabs: ['TSH', 'T4-free'],
  },
  'T3-total': {
    labName: 'Total Triiodothyronine (T3)',
    loincCode: '3053-6',
    organ: 'thyroid',
    regionId: 'body.neck.thyroid',
    interpretation: {
      high: 'May indicate hyperthyroidism',
      low: 'May indicate hypothyroidism or non-thyroidal illness',
    },
    relatedLabs: ['TSH', 'T4-total', 'T3-free'],
  },
  'thyroid-peroxidase-ab': {
    labName: 'Thyroid Peroxidase Antibodies',
    loincCode: '5382-7',
    organ: 'thyroid',
    regionId: 'body.neck.thyroid',
    interpretation: {
      high: 'May indicate Hashimoto thyroiditis or Graves disease',
      low: 'Usually normal',
    },
    relatedLabs: ['TSH', 'thyroglobulin-ab', 'TSI'],
  },

  // ============================================
  // Blood/Bone Marrow Labs (10+ labs)
  // ============================================
  'hemoglobin': {
    labName: 'Hemoglobin',
    loincCode: '718-7',
    organ: 'bone-marrow',
    regionId: 'body.skeletal.bone-marrow',
    interpretation: {
      high: 'May indicate polycythemia, dehydration, or chronic lung disease',
      low: 'May indicate anemia from many causes including blood loss, deficiency, or bone marrow problems',
    },
    relatedLabs: ['hematocrit', 'RBC', 'MCV', 'MCH', 'MCHC', 'RDW'],
  },
  'hematocrit': {
    labName: 'Hematocrit',
    loincCode: '4544-3',
    organ: 'bone-marrow',
    regionId: 'body.skeletal.bone-marrow',
    interpretation: {
      high: 'May indicate polycythemia or dehydration',
      low: 'May indicate anemia',
    },
    relatedLabs: ['hemoglobin', 'RBC'],
  },
  'RBC': {
    labName: 'Red Blood Cell Count',
    loincCode: '789-8',
    organ: 'bone-marrow',
    regionId: 'body.skeletal.bone-marrow',
    interpretation: {
      high: 'May indicate polycythemia',
      low: 'May indicate anemia',
    },
    relatedLabs: ['hemoglobin', 'hematocrit', 'reticulocytes'],
  },
  'WBC': {
    labName: 'White Blood Cell Count',
    loincCode: '6690-2',
    organ: 'bone-marrow',
    regionId: 'body.skeletal.bone-marrow',
    interpretation: {
      high: 'May indicate infection, inflammation, leukemia, or steroid use',
      low: 'May indicate bone marrow suppression, viral infection, or autoimmune condition',
    },
    relatedLabs: ['neutrophils', 'lymphocytes', 'monocytes', 'eosinophils', 'basophils'],
  },
  'platelets': {
    labName: 'Platelet Count',
    loincCode: '777-3',
    organ: 'bone-marrow',
    regionId: 'body.skeletal.bone-marrow',
    interpretation: {
      high: 'May indicate inflammation, infection, iron deficiency, or myeloproliferative disorder',
      low: 'May indicate bone marrow suppression, ITP, medication effect, or liver disease',
    },
    relatedLabs: ['MPV', 'WBC', 'hemoglobin'],
  },
  'MCV': {
    labName: 'Mean Corpuscular Volume',
    loincCode: '787-2',
    organ: 'bone-marrow',
    regionId: 'body.skeletal.bone-marrow',
    interpretation: {
      high: 'May indicate B12/folate deficiency, alcohol use, or liver disease',
      low: 'May indicate iron deficiency or thalassemia',
    },
    relatedLabs: ['hemoglobin', 'MCH', 'MCHC', 'iron', 'vitamin-B12', 'folate'],
  },
  'MCH': {
    labName: 'Mean Corpuscular Hemoglobin',
    loincCode: '785-6',
    organ: 'bone-marrow',
    regionId: 'body.skeletal.bone-marrow',
    interpretation: {
      high: 'May indicate macrocytic anemia',
      low: 'May indicate iron deficiency or thalassemia',
    },
    relatedLabs: ['MCV', 'MCHC', 'hemoglobin'],
  },
  'reticulocytes': {
    labName: 'Reticulocyte Count',
    loincCode: '17849-1',
    organ: 'bone-marrow',
    regionId: 'body.skeletal.bone-marrow',
    interpretation: {
      high: 'May indicate bone marrow responding to anemia (hemolysis, blood loss)',
      low: 'May indicate bone marrow suppression or nutritional deficiency',
    },
    relatedLabs: ['hemoglobin', 'bilirubin-indirect', 'haptoglobin', 'LDH'],
  },
  'ferritin': {
    labName: 'Ferritin',
    loincCode: '2276-4',
    organ: 'bone-marrow',
    regionId: 'body.skeletal.bone-marrow',
    interpretation: {
      high: 'May indicate iron overload, inflammation, liver disease, or hemochromatosis',
      low: 'May indicate iron deficiency',
    },
    relatedLabs: ['iron', 'TIBC', 'transferrin-saturation'],
  },
  'iron': {
    labName: 'Serum Iron',
    loincCode: '2498-4',
    organ: 'bone-marrow',
    regionId: 'body.skeletal.bone-marrow',
    interpretation: {
      high: 'May indicate iron overload, hemolysis, or liver disease',
      low: 'May indicate iron deficiency or chronic disease',
    },
    relatedLabs: ['ferritin', 'TIBC', 'transferrin-saturation', 'hemoglobin'],
  },

  // ============================================
  // Lipid Panel - Cardiovascular Risk (5 labs)
  // ============================================
  'cholesterol-total': {
    labName: 'Total Cholesterol',
    loincCode: '2093-3',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate increased cardiovascular risk',
      low: 'May indicate malnutrition, liver disease, or hyperthyroidism',
    },
    relatedLabs: ['LDL', 'HDL', 'triglycerides'],
  },
  'LDL': {
    labName: 'Low-Density Lipoprotein',
    loincCode: '13457-7',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'Major risk factor for cardiovascular disease; "bad cholesterol"',
      low: 'Generally favorable, unless very low',
    },
    relatedLabs: ['cholesterol-total', 'HDL', 'triglycerides', 'apoB'],
  },
  'HDL': {
    labName: 'High-Density Lipoprotein',
    loincCode: '2085-9',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'Generally protective; "good cholesterol"',
      low: 'May indicate increased cardiovascular risk',
    },
    relatedLabs: ['cholesterol-total', 'LDL', 'triglycerides'],
  },
  'triglycerides': {
    labName: 'Triglycerides',
    loincCode: '2571-8',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate increased cardiovascular risk; very high levels can cause pancreatitis',
      low: 'Usually not clinically significant',
    },
    relatedLabs: ['cholesterol-total', 'LDL', 'HDL', 'glucose'],
  },
  'VLDL': {
    labName: 'Very Low-Density Lipoprotein',
    loincCode: '13458-5',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate increased cardiovascular risk',
      low: 'Usually not clinically significant',
    },
    relatedLabs: ['triglycerides', 'LDL'],
  },

  // ============================================
  // Inflammatory Markers (4 labs)
  // ============================================
  'CRP': {
    labName: 'C-Reactive Protein',
    loincCode: '1988-5',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate infection, inflammation, or tissue injury',
      low: 'Usually normal',
    },
    relatedLabs: ['ESR', 'procalcitonin', 'WBC'],
  },
  'hs-CRP': {
    labName: 'High-Sensitivity C-Reactive Protein',
    loincCode: '30522-7',
    organ: 'liver',
    regionId: 'body.torso.abdomen.liver',
    interpretation: {
      high: 'May indicate increased cardiovascular risk or low-grade inflammation',
      low: 'Lower cardiovascular risk',
    },
    relatedLabs: ['CRP', 'lipid-panel'],
  },
  'ESR': {
    labName: 'Erythrocyte Sedimentation Rate',
    loincCode: '4537-7',
    organ: 'blood',
    regionId: 'body.circulatory.blood',
    interpretation: {
      high: 'May indicate inflammation, infection, or autoimmune disease',
      low: 'Usually normal',
    },
    relatedLabs: ['CRP', 'WBC'],
  },
  'procalcitonin': {
    labName: 'Procalcitonin',
    loincCode: '33959-8',
    organ: 'thyroid',
    regionId: 'body.neck.thyroid',
    interpretation: {
      high: 'May indicate bacterial infection or sepsis',
      low: 'Usually normal; suggests viral rather than bacterial infection',
    },
    relatedLabs: ['CRP', 'WBC', 'lactate'],
  },

  // ============================================
  // Vitamins and Minerals (6 labs)
  // ============================================
  'vitamin-D': {
    labName: 'Vitamin D (25-hydroxy)',
    loincCode: '1989-3',
    organ: 'bones',
    regionId: 'body.skeletal.bones',
    interpretation: {
      high: 'May indicate vitamin D toxicity (rare)',
      low: 'May indicate vitamin D deficiency; common cause of bone and muscle issues',
    },
    relatedLabs: ['calcium', 'PTH', 'phosphorus'],
  },
  'vitamin-B12': {
    labName: 'Vitamin B12',
    loincCode: '2132-9',
    organ: 'stomach',
    regionId: 'body.torso.abdomen.stomach',
    interpretation: {
      high: 'May indicate liver disease or myeloproliferative disorders',
      low: 'May indicate pernicious anemia, malabsorption, or dietary deficiency',
    },
    relatedLabs: ['folate', 'MCV', 'homocysteine', 'methylmalonic-acid'],
  },
  'folate': {
    labName: 'Folate (Folic Acid)',
    loincCode: '2284-8',
    organ: 'small-intestine',
    regionId: 'body.torso.abdomen.small-intestine',
    interpretation: {
      high: 'Usually not harmful; may mask B12 deficiency',
      low: 'May indicate dietary deficiency or malabsorption; risk of anemia',
    },
    relatedLabs: ['vitamin-B12', 'MCV', 'homocysteine'],
  },
  'calcium': {
    labName: 'Calcium (Total)',
    loincCode: '17861-6',
    organ: 'parathyroid',
    regionId: 'body.neck.parathyroid',
    interpretation: {
      high: 'May indicate hyperparathyroidism, malignancy, or excess vitamin D',
      low: 'May indicate hypoparathyroidism, vitamin D deficiency, or kidney disease',
    },
    relatedLabs: ['PTH', 'vitamin-D', 'albumin', 'magnesium', 'phosphorus'],
  },
  'magnesium': {
    labName: 'Magnesium',
    loincCode: '2601-3',
    organ: 'kidneys',
    regionId: 'body.torso.abdomen.kidneys',
    interpretation: {
      high: 'May indicate kidney failure or excess supplementation',
      low: 'May indicate malnutrition, alcoholism, or medication effects',
    },
    relatedLabs: ['calcium', 'potassium', 'phosphorus'],
  },
  'PTH': {
    labName: 'Parathyroid Hormone',
    loincCode: '2731-8',
    organ: 'parathyroid',
    regionId: 'body.neck.parathyroid',
    interpretation: {
      high: 'May indicate hyperparathyroidism or secondary response to low calcium/vitamin D',
      low: 'May indicate hypoparathyroidism or hypercalcemia from other causes',
    },
    relatedLabs: ['calcium', 'vitamin-D', 'phosphorus'],
  },

  // ============================================
  // Prostate (2 labs)
  // ============================================
  'PSA': {
    labName: 'Prostate-Specific Antigen',
    loincCode: '2857-1',
    organ: 'prostate',
    regionId: 'body.torso.pelvis.prostate',
    interpretation: {
      high: 'May indicate prostate cancer, BPH, prostatitis, or recent manipulation',
      low: 'Usually normal',
    },
    relatedLabs: ['free-PSA', 'PSA-density'],
  },
  'free-PSA': {
    labName: 'Free PSA',
    loincCode: '10886-0',
    organ: 'prostate',
    regionId: 'body.torso.pelvis.prostate',
    interpretation: {
      high: 'Higher percentage suggests benign condition',
      low: 'Lower percentage suggests higher cancer risk',
    },
    relatedLabs: ['PSA'],
  },

  // ============================================
  // Lung/Respiratory (2 labs)
  // ============================================
  'pO2': {
    labName: 'Partial Pressure of Oxygen',
    loincCode: '2703-7',
    organ: 'lungs',
    regionId: 'body.torso.thorax.lungs',
    interpretation: {
      high: 'May indicate hyperventilation or supplemental oxygen',
      low: 'May indicate respiratory failure, lung disease, or inadequate ventilation',
    },
    relatedLabs: ['pCO2', 'oxygen-saturation', 'pH'],
  },
  'pCO2': {
    labName: 'Partial Pressure of Carbon Dioxide',
    loincCode: '2019-8',
    organ: 'lungs',
    regionId: 'body.torso.thorax.lungs',
    interpretation: {
      high: 'May indicate respiratory failure or hypoventilation',
      low: 'May indicate hyperventilation or metabolic compensation',
    },
    relatedLabs: ['pO2', 'pH', 'bicarbonate'],
  },

  // ============================================
  // Spleen/Immune (2 labs)
  // ============================================
  'lymphocytes': {
    labName: 'Lymphocytes',
    loincCode: '731-0',
    organ: 'spleen',
    regionId: 'body.torso.abdomen.spleen',
    interpretation: {
      high: 'May indicate viral infection, CLL, or lymphoma',
      low: 'May indicate HIV, immunosuppression, or steroid use',
    },
    relatedLabs: ['WBC', 'neutrophils', 'CD4-count'],
  },
  'neutrophils': {
    labName: 'Neutrophils',
    loincCode: '751-8',
    organ: 'bone-marrow',
    regionId: 'body.skeletal.bone-marrow',
    interpretation: {
      high: 'May indicate bacterial infection, inflammation, or steroid use',
      low: 'May indicate bone marrow suppression, severe infection, or autoimmune disease',
    },
    relatedLabs: ['WBC', 'lymphocytes', 'bands'],
  },
};

/**
 * Get lab mapping by lab ID
 */
export function getLabMapping(labId: string): LabOrganMapping | undefined {
  return LAB_ORGAN_MAP[labId];
}

/**
 * Get all labs for a specific organ
 */
export function getLabsForOrgan(organ: string): LabOrganMapping[] {
  return Object.values(LAB_ORGAN_MAP).filter(lab => lab.organ === organ);
}

/**
 * Get all labs for a specific region ID
 */
export function getLabsForRegion(regionId: string): LabOrganMapping[] {
  return Object.values(LAB_ORGAN_MAP).filter(lab => lab.regionId === regionId);
}

/**
 * Get related labs for a given lab ID
 */
export function getRelatedLabs(labId: string): LabOrganMapping[] {
  const lab = LAB_ORGAN_MAP[labId];
  if (!lab || !lab.relatedLabs) return [];
  return lab.relatedLabs
    .map(id => LAB_ORGAN_MAP[id])
    .filter((l): l is LabOrganMapping => l !== undefined);
}

/**
 * Get all unique organs in the mapping
 */
export function getAllMappedOrgans(): string[] {
  const organs = new Set<string>();
  Object.values(LAB_ORGAN_MAP).forEach(lab => organs.add(lab.organ));
  return Array.from(organs);
}

/**
 * Statistics about the lab-organ mappings
 */
export interface LabOrganMapStats {
  totalLabs: number;
  organCounts: Record<string, number>;
  labsWithLoincCodes: number;
}

export function getLabOrganMapStats(): LabOrganMapStats {
  const labs = Object.values(LAB_ORGAN_MAP);
  const organCounts: Record<string, number> = {};
  let labsWithLoincCodes = 0;

  labs.forEach(lab => {
    organCounts[lab.organ] = (organCounts[lab.organ] || 0) + 1;
    if (lab.loincCode) labsWithLoincCodes++;
  });

  return {
    totalLabs: labs.length,
    organCounts,
    labsWithLoincCodes,
  };
}
