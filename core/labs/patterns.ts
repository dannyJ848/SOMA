/**
 * Lab Pattern Recognition
 *
 * Recognizes multi-test patterns that suggest specific conditions,
 * such as different types of anemia, liver patterns, kidney patterns, etc.
 */

import type {
  LabPattern,
  PatternFinding,
  DetectedPattern,
  InterpretedLabResult,
  OrganImplication,
  PanelAnalysisResult,
  LabPanel,
  Urgency,
} from './types';
import { getLabPanel, getLabTest } from './lab-database';

// ============================================
// Pattern Database
// ============================================

export const LAB_PATTERNS: Map<string, LabPattern> = new Map();

// ============================================
// Anemia Patterns
// ============================================

LAB_PATTERNS.set('iron-deficiency-anemia', {
  id: 'iron-deficiency-anemia',
  name: 'Iron Deficiency Anemia',
  description: 'Pattern consistent with iron deficiency as the cause of anemia',
  category: 'anemia',
  findings: [
    { testId: 'hemoglobin', testName: 'Hemoglobin', direction: 'decreased', required: true },
    { testId: 'mcv', testName: 'MCV', direction: 'decreased', required: true },
    { testId: 'ferritin', testName: 'Ferritin', direction: 'decreased', required: true },
    { testId: 'iron', testName: 'Serum Iron', direction: 'decreased', required: false },
    { testId: 'tibc', testName: 'TIBC', direction: 'elevated', required: false },
    { testId: 'transferrin-saturation', testName: 'Transferrin Saturation', direction: 'decreased', required: false },
  ],
  suggestiveOf: ['Iron deficiency anemia'],
  differentialDiagnosis: [
    'Chronic blood loss (GI, menstrual)',
    'Inadequate dietary intake',
    'Malabsorption (celiac disease, gastric surgery)',
    'Pregnancy/lactation',
    'Chronic inflammation',
  ],
  nextSteps: [
    'Identify source of iron loss',
    'Consider GI evaluation if not menstrual',
    'Start iron supplementation',
    'Recheck CBC and iron studies in 1-2 months',
  ],
  urgency: 'routine',
  educationalExplanation: 'Your lab results suggest iron deficiency anemia, the most common type of anemia worldwide. Iron is essential for making hemoglobin, the protein that carries oxygen in red blood cells. Without enough iron, your body makes smaller, paler red blood cells that carry less oxygen. The most common causes are blood loss (heavy periods, GI bleeding), poor dietary intake, or malabsorption. Treatment involves identifying the cause and taking iron supplements.',
  clinicalPearl: 'Low ferritin is specific for iron deficiency, but normal/high ferritin doesnt exclude it if theres concurrent inflammation. Check CRP alongside iron studies.',
});

LAB_PATTERNS.set('b12-deficiency-anemia', {
  id: 'b12-deficiency-anemia',
  name: 'B12 Deficiency Anemia',
  description: 'Pattern consistent with vitamin B12 deficiency causing macrocytic anemia',
  category: 'anemia',
  findings: [
    { testId: 'hemoglobin', testName: 'Hemoglobin', direction: 'decreased', required: true },
    { testId: 'mcv', testName: 'MCV', direction: 'elevated', required: true },
    { testId: 'b12', testName: 'Vitamin B12', direction: 'decreased', required: true },
    { testId: 'homocysteine', testName: 'Homocysteine', direction: 'elevated', required: false },
    { testId: 'mma', testName: 'Methylmalonic Acid', direction: 'elevated', required: false },
  ],
  suggestiveOf: ['Vitamin B12 deficiency'],
  differentialDiagnosis: [
    'Pernicious anemia (autoimmune)',
    'Vegan/vegetarian diet without supplementation',
    'Gastric surgery or gastritis',
    'Metformin use',
    'Crohns disease or ileal resection',
  ],
  nextSteps: [
    'Check intrinsic factor antibodies for pernicious anemia',
    'Start B12 supplementation (oral or injection)',
    'Monitor neurologic symptoms',
    'Recheck levels in 1-2 months',
  ],
  urgency: 'soon',
  educationalExplanation: 'Your labs suggest B12 deficiency anemia. Vitamin B12 is essential for DNA synthesis, and without it, developing red blood cells cant divide properly, becoming abnormally large (macrocytic). B12 is found mainly in animal products and requires a stomach protein (intrinsic factor) for absorption. Causes include vegan diet, pernicious anemia (autoimmune destruction of intrinsic factor), and certain medications. B12 deficiency can also cause neurologic problems if left untreated.',
  clinicalPearl: 'B12 deficiency can cause irreversible neurologic damage (subacute combined degeneration). Check for neurologic symptoms and treat promptly.',
});

LAB_PATTERNS.set('anemia-chronic-disease', {
  id: 'anemia-chronic-disease',
  name: 'Anemia of Chronic Disease',
  description: 'Pattern suggesting anemia related to chronic inflammation or disease',
  category: 'anemia',
  findings: [
    { testId: 'hemoglobin', testName: 'Hemoglobin', direction: 'decreased', required: true },
    { testId: 'mcv', testName: 'MCV', direction: 'normal', required: true },
    { testId: 'ferritin', testName: 'Ferritin', direction: 'normal', required: true },
    { testId: 'iron', testName: 'Serum Iron', direction: 'decreased', required: false },
    { testId: 'tibc', testName: 'TIBC', direction: 'decreased', required: false },
    { testId: 'crp', testName: 'CRP', direction: 'elevated', required: false },
  ],
  suggestiveOf: ['Anemia of chronic disease/inflammation'],
  differentialDiagnosis: [
    'Chronic infection',
    'Autoimmune disease (rheumatoid arthritis, lupus)',
    'Chronic kidney disease',
    'Malignancy',
    'Chronic inflammatory conditions',
  ],
  nextSteps: [
    'Identify and treat underlying condition',
    'Check kidney function (CKD-related)',
    'Consider EPO if due to CKD',
    'Monitor with treatment of underlying disease',
  ],
  urgency: 'routine',
  educationalExplanation: 'Your results suggest anemia of chronic disease, which occurs when your body has a chronic inflammatory condition. During inflammation, your body sequesters iron to prevent bacteria from using it, but this also limits iron available for red blood cell production. The key distinguishing feature is normal or high ferritin (iron stores are present but locked away). Treatment focuses on the underlying condition.',
  clinicalPearl: 'Low iron with normal/high ferritin and low TIBC points to anemia of chronic disease. Low ferritin definitively indicates iron deficiency regardless of other markers.',
});

LAB_PATTERNS.set('hemolytic-anemia', {
  id: 'hemolytic-anemia',
  name: 'Hemolytic Anemia',
  description: 'Pattern suggesting red blood cells are being destroyed prematurely',
  category: 'anemia',
  findings: [
    { testId: 'hemoglobin', testName: 'Hemoglobin', direction: 'decreased', required: true },
    { testId: 'reticulocytes', testName: 'Reticulocyte Count', direction: 'elevated', required: true },
    { testId: 'ldh', testName: 'LDH', direction: 'elevated', required: true },
    { testId: 'haptoglobin', testName: 'Haptoglobin', direction: 'decreased', required: true },
    { testId: 'bilirubin-indirect', testName: 'Indirect Bilirubin', direction: 'elevated', required: false },
  ],
  suggestiveOf: ['Hemolytic anemia'],
  differentialDiagnosis: [
    'Autoimmune hemolytic anemia',
    'Mechanical hemolysis (heart valve, TTP/HUS)',
    'Hereditary spherocytosis or elliptocytosis',
    'G6PD deficiency',
    'Sickle cell disease',
    'Drug-induced hemolysis',
  ],
  nextSteps: [
    'Peripheral blood smear for morphology',
    'Direct Coombs test (for autoimmune)',
    'Haptoglobin confirmation',
    'Consider hemoglobin electrophoresis',
  ],
  urgency: 'urgent',
  educationalExplanation: 'Your labs suggest hemolytic anemia, meaning red blood cells are being destroyed faster than they can be made. Signs include elevated reticulocytes (bone marrow trying to compensate), high LDH and indirect bilirubin (from cell breakdown), and low haptoglobin (protein that binds free hemoglobin is depleted). This requires prompt evaluation to identify the cause, which could be autoimmune, mechanical, inherited, or drug-related.',
  clinicalPearl: 'The triad of low haptoglobin, high LDH, and high reticulocyte count strongly suggests hemolysis. Look at the blood smear for spherocytes (autoimmune) or schistocytes (mechanical/TTP).',
});

// ============================================
// Liver Patterns
// ============================================

LAB_PATTERNS.set('hepatocellular-injury', {
  id: 'hepatocellular-injury',
  name: 'Hepatocellular Injury Pattern',
  description: 'Pattern suggesting liver cell damage (hepatitis pattern)',
  category: 'liver',
  findings: [
    { testId: 'alt', testName: 'ALT', direction: 'elevated', qualifier: 'markedly', required: true },
    { testId: 'ast', testName: 'AST', direction: 'elevated', qualifier: 'markedly', required: true },
    { testId: 'alp', testName: 'Alkaline Phosphatase', direction: 'normal', required: false },
    { testId: 'bilirubin-total', testName: 'Total Bilirubin', direction: 'any', required: false },
  ],
  suggestiveOf: ['Hepatocellular injury', 'Hepatitis'],
  differentialDiagnosis: [
    'Viral hepatitis (A, B, C, EBV, CMV)',
    'Drug/toxin-induced liver injury',
    'Alcoholic hepatitis',
    'Autoimmune hepatitis',
    'Ischemic hepatitis (shock liver)',
    'Wilsons disease',
  ],
  nextSteps: [
    'Hepatitis A, B, C serologies',
    'Review medication/supplement list',
    'Assess alcohol history',
    'Consider autoimmune markers if negative',
    'Liver ultrasound',
  ],
  urgency: 'soon',
  educationalExplanation: 'Your liver enzymes show a hepatocellular pattern, meaning liver cells are being damaged. ALT is most specific for liver (AST is also in muscle and heart). Common causes include viral hepatitis, medications/supplements, alcohol, and autoimmune conditions. The degree of elevation and your symptoms help determine the cause and urgency.',
  clinicalPearl: 'AST:ALT ratio >2:1 with both elevated suggests alcoholic liver disease. ALT > AST is more typical of viral hepatitis or NAFLD.',
});

LAB_PATTERNS.set('cholestatic-pattern', {
  id: 'cholestatic-pattern',
  name: 'Cholestatic Pattern',
  description: 'Pattern suggesting bile flow obstruction or impairment',
  category: 'liver',
  findings: [
    { testId: 'alp', testName: 'Alkaline Phosphatase', direction: 'elevated', qualifier: 'markedly', required: true },
    { testId: 'ggt', testName: 'GGT', direction: 'elevated', required: false },
    { testId: 'bilirubin-direct', testName: 'Direct Bilirubin', direction: 'elevated', required: false },
    { testId: 'alt', testName: 'ALT', direction: 'normal', required: false },
    { testId: 'ast', testName: 'AST', direction: 'normal', required: false },
  ],
  suggestiveOf: ['Cholestasis', 'Biliary obstruction'],
  differentialDiagnosis: [
    'Gallstone obstruction',
    'Primary biliary cholangitis',
    'Primary sclerosing cholangitis',
    'Drug-induced cholestasis',
    'Pancreatic or biliary malignancy',
    'Bone disease (ALP from bone, not liver)',
  ],
  nextSteps: [
    'Confirm liver origin with GGT',
    'Right upper quadrant ultrasound',
    'MRCP if obstruction suspected',
    'AMA antibodies if PBC suspected',
  ],
  urgency: 'soon',
  educationalExplanation: 'Your labs show a cholestatic pattern, suggesting bile flow is impaired. This can be from blockage (gallstones, tumors) or intrinsic bile duct disease. ALP is elevated but not specific to liver - GGT helps confirm liver origin. Direct (conjugated) bilirubin elevation confirms the liver processed it but it cant get out. An ultrasound is usually the first step.',
  clinicalPearl: 'Elevated ALP with normal GGT suggests bone origin, not liver. Always check GGT to confirm hepatic source of ALP elevation.',
});

LAB_PATTERNS.set('mixed-liver-pattern', {
  id: 'mixed-liver-pattern',
  name: 'Mixed Hepatocellular/Cholestatic Pattern',
  description: 'Pattern with both liver cell damage and cholestasis features',
  category: 'liver',
  findings: [
    { testId: 'alt', testName: 'ALT', direction: 'elevated', required: true },
    { testId: 'ast', testName: 'AST', direction: 'elevated', required: true },
    { testId: 'alp', testName: 'Alkaline Phosphatase', direction: 'elevated', required: true },
    { testId: 'bilirubin-total', testName: 'Total Bilirubin', direction: 'elevated', required: false },
  ],
  suggestiveOf: ['Mixed liver injury'],
  differentialDiagnosis: [
    'Drug-induced liver injury',
    'Viral hepatitis with cholestatic component',
    'Alcoholic liver disease',
    'Autoimmune hepatitis overlap syndromes',
    'Sepsis',
    'Total parenteral nutrition',
  ],
  nextSteps: [
    'Full hepatitis workup',
    'Detailed medication review',
    'Liver ultrasound with Doppler',
    'Consider liver biopsy if unclear',
  ],
  urgency: 'soon',
  educationalExplanation: 'Your liver tests show a mixed pattern with both hepatocellular injury (high ALT/AST) and cholestasis (high ALP). This overlap can occur with drug reactions, viral hepatitis, or more complex liver diseases. A thorough workup is needed to identify the cause.',
});

// ============================================
// Kidney Patterns
// ============================================

LAB_PATTERNS.set('acute-kidney-injury', {
  id: 'acute-kidney-injury',
  name: 'Acute Kidney Injury',
  description: 'Pattern suggesting recent rapid decline in kidney function',
  category: 'kidney',
  findings: [
    { testId: 'creatinine', testName: 'Creatinine', direction: 'elevated', qualifier: 'markedly', required: true },
    { testId: 'bun', testName: 'BUN', direction: 'elevated', required: true },
    { testId: 'potassium', testName: 'Potassium', direction: 'elevated', required: false },
    { testId: 'egfr', testName: 'eGFR', direction: 'decreased', required: false },
  ],
  suggestiveOf: ['Acute kidney injury'],
  differentialDiagnosis: [
    'Pre-renal (dehydration, heart failure, blood loss)',
    'Intrinsic renal (ATN, glomerulonephritis, interstitial nephritis)',
    'Post-renal (obstruction)',
    'Contrast nephropathy',
    'Medication toxicity (NSAIDs, aminoglycosides)',
  ],
  nextSteps: [
    'Compare to baseline creatinine',
    'Assess volume status and urine output',
    'Urinalysis with microscopy',
    'Renal ultrasound to rule out obstruction',
    'Review nephrotoxic medications',
  ],
  urgency: 'urgent',
  educationalExplanation: 'Your labs suggest acute kidney injury (AKI), a sudden decline in kidney function. This can be from inadequate blood flow (dehydration, heart failure), direct kidney damage (toxins, medications, inflammation), or obstruction (kidney stones, enlarged prostate). The cause determines treatment, so prompt evaluation is important.',
  clinicalPearl: 'BUN:Creatinine ratio >20:1 suggests pre-renal cause (dehydration, heart failure). Ratio closer to 10:1 suggests intrinsic kidney disease.',
});

LAB_PATTERNS.set('chronic-kidney-disease', {
  id: 'chronic-kidney-disease',
  name: 'Chronic Kidney Disease Pattern',
  description: 'Pattern consistent with long-standing kidney dysfunction',
  category: 'kidney',
  findings: [
    { testId: 'creatinine', testName: 'Creatinine', direction: 'elevated', required: true },
    { testId: 'egfr', testName: 'eGFR', direction: 'decreased', required: true },
    { testId: 'hemoglobin', testName: 'Hemoglobin', direction: 'decreased', required: false },
    { testId: 'calcium', testName: 'Calcium', direction: 'decreased', required: false },
    { testId: 'phosphorus', testName: 'Phosphorus', direction: 'elevated', required: false },
  ],
  suggestiveOf: ['Chronic kidney disease'],
  differentialDiagnosis: [
    'Diabetic nephropathy',
    'Hypertensive nephrosclerosis',
    'Polycystic kidney disease',
    'Glomerulonephritis',
    'Chronic obstruction',
  ],
  nextSteps: [
    'Stage CKD based on eGFR',
    'Check for proteinuria',
    'Assess for complications (anemia, bone disease)',
    'Renal ultrasound',
    'Nephrology referral if eGFR <30',
  ],
  urgency: 'routine',
  educationalExplanation: 'Your labs suggest chronic kidney disease (CKD), meaning your kidneys have reduced function that has developed over time. CKD is staged by eGFR (Stage 1-5). Common causes are diabetes and high blood pressure. Complications can include anemia (kidneys make EPO) and bone disease (kidneys activate vitamin D). Treatment focuses on slowing progression and managing complications.',
  clinicalPearl: 'CKD-associated anemia is typically normocytic. If eGFR <45 with anemia, check EPO level and iron studies.',
});

// ============================================
// Thyroid Patterns
// ============================================

LAB_PATTERNS.set('primary-hypothyroidism', {
  id: 'primary-hypothyroidism',
  name: 'Primary Hypothyroidism',
  description: 'Pattern of underactive thyroid due to thyroid gland dysfunction',
  category: 'thyroid',
  findings: [
    { testId: 'tsh', testName: 'TSH', direction: 'elevated', required: true },
    { testId: 'free-t4', testName: 'Free T4', direction: 'decreased', required: true },
    { testId: 'tpo-antibody', testName: 'TPO Antibody', direction: 'elevated', required: false },
  ],
  suggestiveOf: ['Primary hypothyroidism'],
  differentialDiagnosis: [
    'Hashimotos thyroiditis (autoimmune)',
    'Post-thyroidectomy or radioiodine',
    'Medications (lithium, amiodarone)',
    'Iodine deficiency or excess',
    'Subacute thyroiditis (recovery phase)',
  ],
  nextSteps: [
    'Check TPO antibodies if not done',
    'Start levothyroxine replacement',
    'Check lipids (often elevated in hypothyroidism)',
    'Follow TSH in 6-8 weeks',
  ],
  urgency: 'routine',
  educationalExplanation: 'Your labs show primary hypothyroidism - your thyroid gland is underactive. High TSH means your pituitary is trying hard to stimulate the thyroid, but T4 remains low. The most common cause is Hashimotos thyroiditis (autoimmune). Symptoms include fatigue, weight gain, cold intolerance, and dry skin. Treatment is thyroid hormone replacement (levothyroxine).',
  clinicalPearl: 'Check cholesterol in new hypothyroidism - it often improves with treatment. Some patients with subclinical hypothyroidism (high TSH, normal T4) may not need treatment.',
});

LAB_PATTERNS.set('primary-hyperthyroidism', {
  id: 'primary-hyperthyroidism',
  name: 'Primary Hyperthyroidism',
  description: 'Pattern of overactive thyroid due to thyroid gland overproduction',
  category: 'thyroid',
  findings: [
    { testId: 'tsh', testName: 'TSH', direction: 'decreased', required: true },
    { testId: 'free-t4', testName: 'Free T4', direction: 'elevated', required: true },
    { testId: 'free-t3', testName: 'Free T3', direction: 'elevated', required: false },
  ],
  suggestiveOf: ['Primary hyperthyroidism'],
  differentialDiagnosis: [
    'Graves disease (autoimmune)',
    'Toxic multinodular goiter',
    'Toxic adenoma',
    'Thyroiditis (destructive release)',
    'Excessive thyroid hormone intake',
  ],
  nextSteps: [
    'Check TSI (thyroid-stimulating immunoglobulin) for Graves',
    'Thyroid uptake and scan',
    'Consider beta-blocker for symptoms',
    'Endocrinology referral',
  ],
  urgency: 'soon',
  educationalExplanation: 'Your labs show hyperthyroidism - your thyroid is overactive. Low TSH means your pituitary is suppressed because theres too much thyroid hormone. Symptoms include weight loss, rapid heartbeat, anxiety, tremor, and heat intolerance. The most common cause is Graves disease (autoimmune). Treatment options include medication, radioactive iodine, or surgery.',
  clinicalPearl: 'In elderly patients, hyperthyroidism may present atypically with apathy, weight loss, and heart problems rather than the classic hyperactive symptoms (apathetic thyrotoxicosis).',
});

// ============================================
// Diabetes/Metabolic Patterns
// ============================================

LAB_PATTERNS.set('diabetes-mellitus', {
  id: 'diabetes-mellitus',
  name: 'Diabetes Mellitus',
  description: 'Pattern consistent with diabetes',
  category: 'metabolic',
  findings: [
    { testId: 'hba1c', testName: 'HbA1c', direction: 'elevated', required: true },
    { testId: 'glucose', testName: 'Fasting Glucose', direction: 'elevated', required: false },
    { testId: 'triglycerides', testName: 'Triglycerides', direction: 'elevated', required: false },
  ],
  suggestiveOf: ['Diabetes mellitus'],
  differentialDiagnosis: [
    'Type 2 diabetes (most common in adults)',
    'Type 1 diabetes (if young, thin, rapid onset)',
    'LADA (latent autoimmune diabetes in adults)',
    'Secondary diabetes (steroids, pancreatitis)',
  ],
  nextSteps: [
    'Confirm diagnosis if new',
    'Check lipid panel and kidney function',
    'Urine albumin-to-creatinine ratio',
    'Eye exam for retinopathy',
    'Diabetes education and management plan',
  ],
  urgency: 'soon',
  educationalExplanation: 'Your labs are consistent with diabetes mellitus. HbA1c >=6.5% or fasting glucose >=126 mg/dL confirms the diagnosis. Diabetes means your body has difficulty regulating blood sugar, which can damage blood vessels over time if not controlled. Treatment includes lifestyle changes (diet, exercise) and often medications. Regular monitoring of blood sugar, blood pressure, cholesterol, and kidney function is important.',
  clinicalPearl: 'HbA1c can be inaccurate with hemoglobinopathies, anemia, or recent blood transfusion. Use fructosamine for shorter-term assessment in these cases.',
});

LAB_PATTERNS.set('metabolic-syndrome', {
  id: 'metabolic-syndrome',
  name: 'Metabolic Syndrome Pattern',
  description: 'Pattern of metabolic abnormalities increasing cardiovascular risk',
  category: 'metabolic',
  findings: [
    { testId: 'triglycerides', testName: 'Triglycerides', direction: 'elevated', required: true },
    { testId: 'hdl', testName: 'HDL', direction: 'decreased', required: true },
    { testId: 'glucose', testName: 'Fasting Glucose', direction: 'elevated', required: false },
    { testId: 'crp', testName: 'CRP', direction: 'elevated', required: false },
  ],
  suggestiveOf: ['Metabolic syndrome', 'Insulin resistance'],
  differentialDiagnosis: [
    'Metabolic syndrome',
    'Pre-diabetes',
    'NAFLD/NASH',
    'Polycystic ovary syndrome (in women)',
  ],
  nextSteps: [
    'Check waist circumference and blood pressure',
    'Assess for fatty liver',
    'Intensive lifestyle modification',
    'Consider metformin if pre-diabetic',
  ],
  urgency: 'routine',
  educationalExplanation: 'Your labs suggest metabolic syndrome, a cluster of risk factors that increase your risk of heart disease and diabetes. High triglycerides, low HDL, and elevated blood sugar are part of this pattern, often along with high blood pressure and abdominal obesity. The good news is that lifestyle changes (diet, exercise, weight loss) can significantly improve all of these markers.',
});

// ============================================
// Cardiac Patterns
// ============================================

LAB_PATTERNS.set('acute-mi', {
  id: 'acute-mi',
  name: 'Acute Myocardial Infarction',
  description: 'Pattern suggesting acute heart attack',
  category: 'cardiac',
  findings: [
    { testId: 'troponin-i', testName: 'Troponin I', direction: 'elevated', required: true },
    { testId: 'ck-mb', testName: 'CK-MB', direction: 'elevated', required: false },
    { testId: 'bnp', testName: 'BNP', direction: 'elevated', required: false },
  ],
  suggestiveOf: ['Acute myocardial infarction', 'Acute coronary syndrome'],
  differentialDiagnosis: [
    'STEMI or NSTEMI',
    'Myocarditis',
    'Pulmonary embolism',
    'Takotsubo cardiomyopathy',
    'Severe heart failure',
    'Chronic kidney disease (mildly elevated)',
  ],
  nextSteps: [
    'ECG immediately',
    'Serial troponins q3-6 hours',
    'Cardiology consultation',
    'Consider cardiac catheterization',
  ],
  urgency: 'emergent',
  educationalExplanation: 'Elevated cardiac troponin indicates heart muscle injury. In the context of chest pain, this is highly concerning for a heart attack (myocardial infarction). Troponin is the most sensitive and specific marker for heart damage. This requires immediate medical evaluation.',
  clinicalPearl: 'Troponin can be mildly elevated in CKD, heart failure, and sepsis without acute MI. The pattern of rise and fall, along with clinical context, is key for diagnosis.',
});

LAB_PATTERNS.set('heart-failure', {
  id: 'heart-failure',
  name: 'Heart Failure Pattern',
  description: 'Pattern suggesting heart failure',
  category: 'cardiac',
  findings: [
    { testId: 'bnp', testName: 'BNP', direction: 'elevated', required: true },
    { testId: 'troponin-i', testName: 'Troponin I', direction: 'normal', required: false },
    { testId: 'sodium', testName: 'Sodium', direction: 'decreased', required: false },
  ],
  suggestiveOf: ['Heart failure'],
  differentialDiagnosis: [
    'HFrEF (reduced ejection fraction)',
    'HFpEF (preserved ejection fraction)',
    'Acute decompensation',
    'Chronic stable heart failure',
    'CKD (elevated BNP without HF)',
  ],
  nextSteps: [
    'Echocardiogram',
    'Chest X-ray',
    'Assess volume status',
    'Review medications',
  ],
  urgency: 'soon',
  educationalExplanation: 'Elevated BNP suggests your heart is under strain. BNP is released when the heart stretches due to volume or pressure overload. While it strongly suggests heart failure, it can also be elevated in kidney disease and other conditions. An echocardiogram is needed to assess heart function.',
  clinicalPearl: 'BNP <100 pg/mL has high negative predictive value - heart failure is unlikely. Obesity can falsely lower BNP.',
});

// ============================================
// Pattern Detection Functions
// ============================================

/**
 * Detect patterns from a set of interpreted lab results
 */
export function detectPatterns(results: InterpretedLabResult[]): DetectedPattern[] {
  const detectedPatterns: DetectedPattern[] = [];

  for (const pattern of LAB_PATTERNS.values()) {
    const detection = matchPattern(pattern, results);
    if (detection) {
      detectedPatterns.push(detection);
    }
  }

  // Sort by confidence
  return detectedPatterns.sort((a, b) => {
    const confidenceOrder = { high: 0, moderate: 1, possible: 2 };
    return confidenceOrder[a.confidence] - confidenceOrder[b.confidence];
  });
}

function matchPattern(pattern: LabPattern, results: InterpretedLabResult[]): DetectedPattern | null {
  const matchedFindings: string[] = [];
  const missingFindings: string[] = [];
  let requiredMet = true;

  for (const finding of pattern.findings) {
    const result = results.find(r => r.test.id === finding.testId);

    if (!result) {
      if (finding.required) {
        requiredMet = false;
      }
      missingFindings.push(finding.testName);
      continue;
    }

    const matches = checkFindingMatch(result, finding);

    if (matches) {
      matchedFindings.push(`${finding.testName}: ${formatDirection(finding.direction)}`);
    } else if (finding.required) {
      requiredMet = false;
    }
  }

  // Need at least 2 matches and all required findings
  if (matchedFindings.length < 2 || !requiredMet) {
    return null;
  }

  // Calculate confidence
  const confidence = calculateConfidence(matchedFindings.length, missingFindings.length, pattern.findings.length);

  return {
    pattern,
    confidence,
    matchedFindings,
    missingFindings: missingFindings.length > 0 ? missingFindings : undefined,
    educationalExplanation: pattern.educationalExplanation,
    clinicalCorrelation: pattern.clinicalPearl || '',
  };
}

function checkFindingMatch(result: InterpretedLabResult, finding: PatternFinding): boolean {
  const isHigh = result.status === 'high' || result.status === 'critical-high' || result.status === 'borderline-high';
  const isLow = result.status === 'low' || result.status === 'critical-low' || result.status === 'borderline-low';
  const isNormal = result.status === 'normal';

  switch (finding.direction) {
    case 'elevated':
      return isHigh;
    case 'decreased':
      return isLow;
    case 'normal':
      return isNormal;
    case 'any':
      return true;
  }
}

function calculateConfidence(matched: number, missing: number, total: number): 'high' | 'moderate' | 'possible' {
  const matchRate = matched / total;
  const missingRate = missing / total;

  if (matchRate >= 0.8 && missingRate <= 0.2) {
    return 'high';
  }
  if (matchRate >= 0.5) {
    return 'moderate';
  }
  return 'possible';
}

function formatDirection(direction: PatternFinding['direction']): string {
  switch (direction) {
    case 'elevated': return 'elevated';
    case 'decreased': return 'decreased';
    case 'normal': return 'normal';
    case 'any': return 'present';
  }
}

// ============================================
// Organ Implication Analysis
// ============================================

/**
 * Analyze which organ systems are implicated by lab results
 */
export function analyzeOrganImplications(results: InterpretedLabResult[]): OrganImplication[] {
  const implications: Map<string, OrganImplication> = new Map();

  for (const result of results) {
    for (const link of result.test.anatomyLinks) {
      const existing = implications.get(link.organId);

      if (!existing) {
        implications.set(link.organId, {
          organ: link.organName,
          organId: link.organId,
          status: getOrganStatus(result),
          relevantTests: [result.test.name],
          interpretation: generateOrganInterpretation(link, result),
          anatomyLink: link.organId,
        });
      } else {
        existing.relevantTests.push(result.test.name);
        // Upgrade status if this result is more concerning
        const newStatus = getOrganStatus(result);
        if (isMoreConcerning(newStatus, existing.status)) {
          existing.status = newStatus;
        }
      }
    }
  }

  return Array.from(implications.values());
}

function getOrganStatus(result: InterpretedLabResult): OrganImplication['status'] {
  switch (result.status) {
    case 'critical-low':
    case 'critical-high':
      return 'significantly-affected';
    case 'low':
    case 'high':
      return 'likely-affected';
    case 'borderline-low':
    case 'borderline-high':
      return 'possibly-affected';
    default:
      return 'normal';
  }
}

function isMoreConcerning(newStatus: OrganImplication['status'], existingStatus: OrganImplication['status']): boolean {
  const statusOrder = {
    'normal': 0,
    'possibly-affected': 1,
    'likely-affected': 2,
    'significantly-affected': 3,
  };
  return statusOrder[newStatus] > statusOrder[existingStatus];
}

function generateOrganInterpretation(link: InterpretedLabResult['test']['anatomyLinks'][0], result: InterpretedLabResult): string {
  const abnormal = result.status !== 'normal';

  if (!abnormal) {
    return `${link.organName} function appears normal based on ${result.test.name}.`;
  }

  return `${result.test.name} results suggest ${link.organName} may be affected. ${link.description || ''}`;
}

// ============================================
// Panel Analysis
// ============================================

/**
 * Analyze a complete lab panel
 */
export function analyzePanel(
  panelId: string,
  results: InterpretedLabResult[]
): PanelAnalysisResult | null {
  const panel = getLabPanel(panelId);
  if (!panel) return null;

  // Filter results to those in this panel
  const panelResults = results.filter(r => panel.includedTests.includes(r.test.id));

  // Detect patterns
  const detectedPatterns = detectPatterns(panelResults);

  // Analyze organ implications
  const organSystemImplications = analyzeOrganImplications(panelResults);

  // Generate overall assessment
  const overallAssessment = generatePanelAssessment(panel, panelResults, detectedPatterns);

  // Generate integrated interpretation
  const integratedInterpretation = generateIntegratedInterpretation(panel, panelResults, detectedPatterns);

  // Priority follow-up
  const priorityFollowUp = getPriorityFollowUp(panelResults, detectedPatterns);

  // Questions for doctor
  const questionsForDoctor = getConsolidatedQuestions(panelResults, detectedPatterns);

  return {
    panelId,
    panelName: panel.name,
    results: panelResults,
    overallAssessment,
    detectedPatterns,
    organSystemImplications,
    integratedInterpretation,
    priorityFollowUp,
    questionsForDoctor,
  };
}

function generatePanelAssessment(
  panel: LabPanel,
  results: InterpretedLabResult[],
  patterns: DetectedPattern[]
): string {
  const abnormalCount = results.filter(r => r.status !== 'normal').length;
  const criticalCount = results.filter(r => r.status === 'critical-low' || r.status === 'critical-high').length;

  if (criticalCount > 0) {
    return `CRITICAL: ${criticalCount} test(s) in your ${panel.name} require immediate medical attention.`;
  }

  if (patterns.length > 0) {
    const topPattern = patterns[0];
    return `Your ${panel.name} shows a pattern consistent with ${topPattern.pattern.name}. ${abnormalCount} of ${results.length} tests are outside normal range.`;
  }

  if (abnormalCount === 0) {
    return `Your ${panel.name} results are all within normal ranges. No concerning patterns detected.`;
  }

  return `Your ${panel.name} shows ${abnormalCount} abnormal result(s) out of ${results.length} tests. Review individual results below for details.`;
}

function generateIntegratedInterpretation(
  panel: LabPanel,
  results: InterpretedLabResult[],
  patterns: DetectedPattern[]
): string {
  if (patterns.length > 0) {
    return patterns.map(p => p.educationalExplanation).join('\n\n');
  }

  const abnormalResults = results.filter(r => r.status !== 'normal');
  if (abnormalResults.length === 0) {
    return panel.overallInterpretation;
  }

  return abnormalResults.map(r => r.interpretation).join(' ');
}

function getPriorityFollowUp(results: InterpretedLabResult[], patterns: DetectedPattern[]): string[] {
  const followUp = new Set<string>();

  // Add pattern-specific next steps
  for (const pattern of patterns) {
    pattern.pattern.nextSteps.forEach(step => followUp.add(step));
  }

  // Add individual result follow-ups for critical/urgent
  for (const result of results) {
    if (result.urgency === 'urgent' || result.urgency === 'emergent') {
      result.suggestedFollowUp.forEach(f => followUp.add(f));
    }
  }

  return Array.from(followUp).slice(0, 5);
}

function getConsolidatedQuestions(results: InterpretedLabResult[], patterns: DetectedPattern[]): string[] {
  const questions = new Set<string>();

  // Add pattern-related questions
  for (const pattern of patterns) {
    questions.add(`What does the ${pattern.pattern.name} pattern mean for me?`);
  }

  // Add urgent result questions
  for (const result of results) {
    if (result.urgency === 'urgent' || result.urgency === 'emergent') {
      result.questionsForDoctor.slice(0, 2).forEach(q => questions.add(q));
    }
  }

  return Array.from(questions).slice(0, 5);
}

// ============================================
// Export all patterns
// ============================================

export function getAllPatterns(): LabPattern[] {
  return Array.from(LAB_PATTERNS.values());
}

export function getPatternsByCategory(category: string): LabPattern[] {
  return Array.from(LAB_PATTERNS.values()).filter(p => p.category === category);
}

export function getPattern(id: string): LabPattern | undefined {
  return LAB_PATTERNS.get(id);
}
