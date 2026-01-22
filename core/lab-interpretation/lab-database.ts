/**
 * Lab Interpretation Database
 *
 * Comprehensive educational database for understanding lab tests.
 * Designed to teach patients what their results mean at a deep level.
 */

import type {
  LabTestEducation,
  LabPanelEducation,
  LabCategory,
} from './types.js';

// ============================================
// Complete Blood Count (CBC) Tests
// ============================================

const HEMOGLOBIN: LabTestEducation = {
  id: 'hemoglobin',
  name: 'Hemoglobin',
  abbreviations: ['Hgb', 'Hb'],
  category: 'hematology',
  specimen: 'whole-blood',
  resultType: 'numeric',

  whatItMeasures: 'Hemoglobin is the protein inside red blood cells that carries oxygen from your lungs to every tissue in your body and returns carbon dioxide back to your lungs. This test measures how much hemoglobin is in your blood.',

  physiologicalBasis: {
    analyte: 'Hemoglobin protein',
    source: 'Produced in bone marrow inside developing red blood cells',
    normalFunction: 'Binds oxygen in the lungs (where O2 is plentiful) and releases it in tissues (where O2 is low). Each hemoglobin molecule can carry 4 oxygen molecules.',
    regulation: 'Erythropoietin (EPO) from kidneys stimulates red blood cell (and thus hemoglobin) production when oxygen delivery is low',
    clearance: 'When red blood cells die (~120 days), hemoglobin is broken down in the spleen and liver. Iron is recycled, and the rest becomes bilirubin.',
    involvedOrgans: ['Bone marrow (production)', 'Kidneys (EPO)', 'Spleen (recycling)', 'Liver (bilirubin processing)'],
    metabolicPathways: ['Heme synthesis', 'Iron metabolism', 'Bilirubin metabolism'],
  },

  referenceRanges: [
    { population: { sex: 'male', ageMin: 18 }, lowValue: 13.5, highValue: 17.5, unit: 'g/dL' },
    { population: { sex: 'female', ageMin: 18 }, lowValue: 12.0, highValue: 16.0, unit: 'g/dL' },
    { population: { sex: 'female', pregnancy: true }, lowValue: 11.0, highValue: 14.0, unit: 'g/dL', notes: 'Lower due to plasma volume expansion' },
    { population: { ageMin: 6, ageMax: 12, ageUnit: 'years' }, lowValue: 11.5, highValue: 15.5, unit: 'g/dL' },
    { population: { ageMax: 6, ageUnit: 'years' }, lowValue: 11.0, highValue: 14.0, unit: 'g/dL' },
  ],

  elevatedInterpretation: {
    generalMeaning: 'Your blood has more oxygen-carrying capacity than typical. This can happen because your body is making more red blood cells (often in response to low oxygen) or because your blood has become concentrated.',

    pathophysiology: 'High hemoglobin can result from: (1) Increased red blood cell production stimulated by low oxygen states (your body compensates), (2) Dehydration concentrating blood components, or (3) Blood disorders causing uncontrolled RBC production.',

    causeCategories: [
      { category: 'Hypoxia Response', description: 'Body compensating for chronic low oxygen', examples: ['High altitude living', 'COPD', 'Sleep apnea', 'Heart failure'] },
      { category: 'Hematologic Disorders', description: 'Bone marrow overproducing cells', examples: ['Polycythemia vera', 'Secondary polycythemia'] },
      { category: 'Dehydration', description: 'Concentrated blood', examples: ['Poor fluid intake', 'Excessive sweating', 'Diarrhea/vomiting'] },
    ],

    commonCauses: [
      { cause: 'Dehydration', mechanism: 'Less plasma volume makes hemoglobin appear concentrated', typicalLevel: 'mild', associatedFindings: ['Elevated hematocrit', 'Elevated BUN/Cr ratio'], clinicalContext: 'History of poor fluid intake, hot weather, illness' },
      { cause: 'Chronic lung disease', mechanism: 'Low oxygen triggers EPO release, increasing RBC production', typicalLevel: 'moderate', associatedFindings: ['Elevated RBC count', 'Elevated hematocrit'], clinicalContext: 'Known COPD, chronic bronchitis, pulmonary fibrosis' },
      { cause: 'Sleep apnea', mechanism: 'Intermittent hypoxia at night triggers compensatory RBC production', typicalLevel: 'mild', associatedFindings: ['May have elevated RBC'], clinicalContext: 'Snoring, daytime fatigue, obesity' },
    ],

    lessCauses: [
      { cause: 'Polycythemia vera', mechanism: 'JAK2 mutation causes uncontrolled RBC production', typicalLevel: 'severe', associatedFindings: ['Very high RBC, may have elevated WBC/platelets', 'Enlarged spleen'], clinicalContext: 'Facial plethora, itching after showers, blood clots' },
      { cause: 'EPO-secreting tumor', mechanism: 'Tumor produces erythropoietin inappropriately', typicalLevel: 'moderate', associatedFindings: ['Elevated EPO level'], clinicalContext: 'Kidney tumors, liver tumors, cerebellar tumors' },
    ],

    severityGuidance: [
      { level: 'mild', range: 'Men: 17.5-18.5, Women: 16-17 g/dL', clinicalSignificance: 'Often due to dehydration or mild chronic hypoxia', typicalCauses: ['Dehydration', 'Mild altitude effect'], urgency: 'routine' },
      { level: 'moderate', range: 'Men: 18.5-20, Women: 17-18.5 g/dL', clinicalSignificance: 'Warrants workup for underlying cause', typicalCauses: ['Chronic lung disease', 'Sleep apnea', 'Early polycythemia'], urgency: 'soon' },
      { level: 'severe', range: '> 20 g/dL', clinicalSignificance: 'Increases blood clot risk significantly', typicalCauses: ['Polycythemia vera', 'Severe chronic hypoxia'], urgency: 'urgent' },
    ],

    worryingFeatures: [
      'Persistent elevation despite hydration',
      'Symptoms like headaches, dizziness, visual changes',
      'History of blood clots',
      'Itching after warm showers (classic for polycythemia vera)',
    ],

    followUpTests: ['Complete blood count with indices', 'EPO level', 'Iron studies', 'Pulse oximetry', 'Sleep study if sleep apnea suspected', 'JAK2 mutation if polycythemia vera suspected'],

    questionsForDoctor: [
      'Is my elevated hemoglobin due to dehydration or something else?',
      'Should I have my oxygen levels checked?',
      'Do I need testing for polycythemia vera?',
      'What symptoms should I watch for?',
    ],
  },

  decreasedInterpretation: {
    generalMeaning: 'Your blood has less oxygen-carrying capacity than typical. This is called anemia. It means your tissues may not be getting as much oxygen as they need, which can cause fatigue and other symptoms.',

    pathophysiology: 'Low hemoglobin results from: (1) Not making enough red blood cells (nutritional deficiency, bone marrow problem), (2) Losing red blood cells (bleeding), or (3) Red blood cells being destroyed too quickly (hemolysis). Your body tries to compensate by increasing heart rate and breathing.',

    causeCategories: [
      { category: 'Decreased Production', description: 'Bone marrow not making enough', examples: ['Iron deficiency', 'B12/folate deficiency', 'Chronic kidney disease', 'Bone marrow disorders'] },
      { category: 'Blood Loss', description: 'Losing blood from body', examples: ['GI bleeding', 'Heavy menstruation', 'Trauma'] },
      { category: 'Increased Destruction', description: 'RBCs destroyed prematurely', examples: ['Autoimmune hemolysis', 'Sickle cell disease', 'Mechanical heart valves'] },
    ],

    commonCauses: [
      { cause: 'Iron deficiency anemia', mechanism: 'Without iron, hemoglobin cant be made. Most common anemia worldwide.', typicalLevel: 'variable', associatedFindings: ['Low MCV (microcytic)', 'Low iron, low ferritin', 'High TIBC'], clinicalContext: 'Heavy periods, GI bleeding, poor diet, pregnancy' },
      { cause: 'Anemia of chronic disease', mechanism: 'Chronic inflammation sequesters iron and suppresses RBC production', typicalLevel: 'mild', associatedFindings: ['Normal or low MCV', 'Normal/high ferritin', 'Low TIBC'], clinicalContext: 'Chronic infections, autoimmune disease, cancer' },
      { cause: 'B12 deficiency', mechanism: 'B12 needed for DNA synthesis in developing RBCs', typicalLevel: 'moderate', associatedFindings: ['High MCV (macrocytic)', 'Low B12 level'], clinicalContext: 'Vegans, pernicious anemia, gastric surgery, metformin use' },
      { cause: 'Chronic kidney disease', mechanism: 'Kidneys dont produce enough EPO', typicalLevel: 'moderate', associatedFindings: ['Elevated creatinine', 'Low EPO level'], clinicalContext: 'Known CKD, diabetes, hypertension' },
    ],

    lessCauses: [
      { cause: 'Aplastic anemia', mechanism: 'Bone marrow failure - cant make any blood cells', typicalLevel: 'severe', associatedFindings: ['Low WBC and platelets too (pancytopenia)'], clinicalContext: 'Drug exposure, viral illness, autoimmune' },
      { cause: 'Hemolytic anemia', mechanism: 'RBCs destroyed faster than produced', typicalLevel: 'variable', associatedFindings: ['High reticulocyte count', 'High LDH', 'High bilirubin', 'Low haptoglobin'], clinicalContext: 'Jaundice, dark urine, splenomegaly' },
      { cause: 'Myelodysplastic syndrome', mechanism: 'Pre-leukemic bone marrow dysfunction', typicalLevel: 'moderate', associatedFindings: ['May have abnormal WBC and platelets'], clinicalContext: 'Usually older adults, prior chemotherapy/radiation' },
    ],

    severityGuidance: [
      { level: 'mild', range: 'Men: 11-13.5, Women: 10-12 g/dL', clinicalSignificance: 'May have minimal symptoms, warrants investigation', typicalCauses: ['Early iron deficiency', 'Chronic disease'], urgency: 'routine' },
      { level: 'moderate', range: '8-10 g/dL', clinicalSignificance: 'Likely symptomatic - fatigue, exertional dyspnea', typicalCauses: ['Significant iron deficiency', 'Chronic kidney disease'], urgency: 'soon' },
      { level: 'severe', range: '< 8 g/dL', clinicalSignificance: 'Significant symptoms, may need transfusion', typicalCauses: ['Active bleeding', 'Severe hemolysis', 'Bone marrow failure'], urgency: 'urgent' },
      { level: 'critical', range: '< 6-7 g/dL', clinicalSignificance: 'Life-threatening, especially if acute', typicalCauses: ['Massive hemorrhage', 'Severe hemolysis'], urgency: 'emergent' },
    ],

    worryingFeatures: [
      'Hemoglobin dropping rapidly over days',
      'Signs of active bleeding (black stools, vomiting blood)',
      'Severe symptoms (chest pain, severe shortness of breath)',
      'Pancytopenia (all cell lines low)',
    ],

    followUpTests: ['Reticulocyte count (is bone marrow responding?)', 'Iron studies (ferritin, iron, TIBC)', 'B12 and folate', 'Peripheral blood smear', 'Hemolysis labs if suspected (LDH, haptoglobin, bilirubin)', 'Consider GI workup for occult bleeding'],

    questionsForDoctor: [
      'What type of anemia do I have?',
      'Is my body making enough new red blood cells?',
      'Do I need iron, B12, or other supplements?',
      'Do I need tests to look for bleeding?',
      'Will I need a blood transfusion?',
    ],
  },

  criticalValues: [
    { direction: 'high', threshold: 20, unit: 'g/dL', immediateRisk: 'Hyperviscosity, stroke, blood clots', requiredAction: 'Urgent hematology evaluation, consider phlebotomy', timeframe: 'Same day' },
    { direction: 'low', threshold: 7, unit: 'g/dL', immediateRisk: 'Cardiac ischemia, multi-organ hypoxia', requiredAction: 'Urgent evaluation, likely transfusion', timeframe: 'Immediate' },
  ],

  relatedTests: [
    { testId: 'hematocrit', testName: 'Hematocrit', relationship: 'complements', whenToOrder: 'Always together in CBC', interpretationContext: 'Hematocrit is roughly 3x hemoglobin' },
    { testId: 'mcv', testName: 'MCV', relationship: 'explains', whenToOrder: 'Part of CBC', interpretationContext: 'Helps classify anemia as microcytic, normocytic, or macrocytic' },
    { testId: 'ferritin', testName: 'Ferritin', relationship: 'explains', whenToOrder: 'To evaluate iron stores', interpretationContext: 'Low suggests iron deficiency, high suggests inflammation or iron overload' },
    { testId: 'reticulocytes', testName: 'Reticulocyte Count', relationship: 'explains', whenToOrder: 'To assess bone marrow response', interpretationContext: 'High = marrow is responding, Low = marrow problem' },
  ],

  associatedConditions: [
    { condition: 'Iron deficiency anemia', direction: 'decreased', typicalPattern: 'Gradual decline, microcytic', sensitivity: 'high', specificity: 'moderate', notes: 'Most common cause of anemia worldwide' },
    { condition: 'Chronic kidney disease', direction: 'decreased', typicalPattern: 'Normocytic, proportional to kidney function', sensitivity: 'moderate', specificity: 'low', notes: 'Due to decreased EPO' },
    { condition: 'Polycythemia vera', direction: 'elevated', typicalPattern: 'Persistently elevated with other cell lines', sensitivity: 'high', specificity: 'moderate', notes: 'JAK2 mutation drives this' },
    { condition: 'COPD', direction: 'elevated', typicalPattern: 'Compensatory elevation', sensitivity: 'moderate', specificity: 'low', notes: 'Response to chronic hypoxia' },
  ],

  interferingFactors: [
    { factor: 'Dehydration', effect: 'falsely-elevated', mechanism: 'Concentrated blood', clinicalRelevance: 'Common in elderly, ill patients', mitigation: 'Recheck after hydration' },
    { factor: 'Recent IV fluids', effect: 'falsely-decreased', mechanism: 'Diluted blood', clinicalRelevance: 'Common in hospitalized patients', mitigation: 'Note IV status when interpreting' },
    { factor: 'High altitude residence', effect: 'falsely-elevated', mechanism: 'Physiologic adaptation', clinicalRelevance: 'Adjust reference ranges for altitude', mitigation: 'Use altitude-adjusted ranges' },
    { factor: 'Pregnancy', effect: 'falsely-decreased', mechanism: 'Plasma volume expansion', clinicalRelevance: 'Normal in pregnancy', mitigation: 'Use pregnancy reference ranges' },
  ],

  temporalPatterns: [
    { scenario: 'Acute blood loss', pattern: 'May be normal initially, drops over 24-48 hours', timeframe: 'Hours to days', clinicalUse: 'Repeat Hgb in 4-6 hours if acute bleeding suspected' },
    { scenario: 'Iron supplementation', pattern: 'Rises ~1 g/dL per month with treatment', timeframe: 'Weeks to months', clinicalUse: 'Check in 1-2 months after starting iron' },
    { scenario: 'EPO therapy', pattern: 'Rises 1-2 g/dL over 2-6 weeks', timeframe: 'Weeks', clinicalUse: 'Monitor every 2-4 weeks' },
  ],

  clinicalPearls: [
    'Hemoglobin can be normal immediately after acute bleeding - the drop comes later as the body pulls in fluid',
    'A normal hemoglobin with low ferritin = early iron deficiency, marrow has depleted iron stores',
    'Hgb 3x Hct is a quick sanity check - if they dont match, consider lab error',
    'Chronic anemia is better tolerated than acute - someone with Hgb 7 from slow bleeding may feel okay, while rapid drop to 9 causes symptoms',
    'MCV is your best friend for classifying anemia: low = iron deficiency/thalassemia, high = B12/folate, normal = chronic disease/acute bleeding',
  ],

  patientQuestions: [
    'How does my hemoglobin compare to normal for my age and sex?',
    'If its low, what could be causing it?',
    'If its high, is it because Im dehydrated or something else?',
    'What symptoms should I watch for with my hemoglobin level?',
    'When should I have this rechecked?',
  ],
};

const WHITE_BLOOD_CELL_COUNT: LabTestEducation = {
  id: 'wbc',
  name: 'White Blood Cell Count',
  abbreviations: ['WBC', 'Leukocyte count'],
  category: 'hematology',
  specimen: 'whole-blood',
  resultType: 'numeric',

  whatItMeasures: 'White blood cells are your immune system\'s soldiers. This test counts how many are circulating in your blood. Different types of WBCs fight different threats - bacteria, viruses, parasites, and even cancer.',

  physiologicalBasis: {
    analyte: 'White blood cells (leukocytes)',
    source: 'Produced in bone marrow (and thymus for T-cells)',
    normalFunction: 'Defend body against infection and foreign invaders. Different types: neutrophils (bacteria), lymphocytes (viruses), eosinophils (parasites/allergies), monocytes (clean-up), basophils (allergies)',
    regulation: 'Growth factors (G-CSF, GM-CSF) from various tissues, increases dramatically during infection',
    clearance: 'Die after fighting infection (pus = dead WBCs), some live for years (memory cells)',
    involvedOrgans: ['Bone marrow', 'Thymus', 'Lymph nodes', 'Spleen'],
    metabolicPathways: ['Hematopoiesis', 'Immune signaling pathways'],
  },

  referenceRanges: [
    { population: { ageMin: 18 }, lowValue: 4.5, highValue: 11.0, unit: 'K/uL', notes: 'Thousand cells per microliter' },
    { population: { ageMax: 2, ageUnit: 'years' }, lowValue: 6.0, highValue: 17.5, unit: 'K/uL', notes: 'Higher in infants' },
  ],

  elevatedInterpretation: {
    generalMeaning: 'Your body has mobilized more immune cells than usual. This typically means your immune system is fighting something - an infection, inflammation, or sometimes stress. Occasionally it signals a blood cancer.',

    pathophysiology: 'Leukocytosis occurs when: (1) Bone marrow produces more WBCs in response to infection/inflammation, (2) WBCs are released from bone marrow reserves ("left shift"), (3) WBCs redistribute from blood vessel walls to circulation, or (4) Malignant overproduction in leukemia.',

    causeCategories: [
      { category: 'Infection', description: 'Fighting an invader', examples: ['Bacterial infection', 'Some viral infections', 'Abscess'] },
      { category: 'Inflammation', description: 'Non-infectious inflammation', examples: ['Autoimmune disease', 'Tissue injury', 'Burns'] },
      { category: 'Stress Response', description: 'Physiologic stress', examples: ['Severe pain', 'Trauma', 'Exercise', 'Emotional stress'] },
      { category: 'Medications', description: 'Drug effect', examples: ['Steroids', 'Lithium', 'G-CSF'] },
      { category: 'Malignancy', description: 'Blood cancers', examples: ['Leukemia', 'Lymphoma'] },
    ],

    commonCauses: [
      { cause: 'Bacterial infection', mechanism: 'Bone marrow releases neutrophils to fight bacteria', typicalLevel: 'moderate', associatedFindings: ['Elevated neutrophils', 'Possible band forms ("left shift")', 'Elevated CRP'], clinicalContext: 'Fever, localized infection signs' },
      { cause: 'Steroid use', mechanism: 'Steroids cause neutrophils to release from vessel walls and reduce their migration out', typicalLevel: 'mild', associatedFindings: ['Elevated neutrophils, decreased lymphocytes'], clinicalContext: 'Taking prednisone or similar' },
      { cause: 'Physical/emotional stress', mechanism: 'Catecholamines cause demargination of WBCs', typicalLevel: 'mild', associatedFindings: ['Transient', 'Normal differential'], clinicalContext: 'Recent surgery, trauma, anxiety' },
    ],

    lessCauses: [
      { cause: 'Chronic myeloid leukemia (CML)', mechanism: 'BCR-ABL mutation drives uncontrolled WBC production', typicalLevel: 'severe', associatedFindings: ['Very high WBC (50-200K)', 'All stages of neutrophils', 'Low LAP score'], clinicalContext: 'Splenomegaly, fatigue, night sweats' },
      { cause: 'Acute leukemia', mechanism: 'Malignant blast cells fill marrow and blood', typicalLevel: 'variable', associatedFindings: ['Blast cells on smear', 'Often anemia and low platelets'], clinicalContext: 'Rapid onset, bleeding, infections' },
    ],

    severityGuidance: [
      { level: 'mild', range: '11-15 K/uL', clinicalSignificance: 'Common with minor infections, stress', typicalCauses: ['URI', 'Minor bacterial infection', 'Stress'], urgency: 'routine' },
      { level: 'moderate', range: '15-25 K/uL', clinicalSignificance: 'Significant infection or inflammation', typicalCauses: ['Pneumonia', 'Appendicitis', 'Abscess'], urgency: 'soon' },
      { level: 'severe', range: '25-50 K/uL', clinicalSignificance: 'Severe infection or possible leukemoid reaction', typicalCauses: ['Severe sepsis', 'C. diff colitis', 'Leukemoid reaction'], urgency: 'urgent' },
      { level: 'critical', range: '> 50 K/uL', clinicalSignificance: 'Leukemia must be ruled out', typicalCauses: ['CML', 'Acute leukemia', 'Leukemoid reaction'], urgency: 'urgent' },
    ],

    worryingFeatures: [
      'WBC > 50,000 without obvious infection',
      'Blast cells on peripheral smear',
      'Associated anemia and thrombocytopenia',
      'Persistent elevation despite treating infection',
    ],

    followUpTests: ['CBC with differential (which type of WBC is elevated?)', 'Peripheral blood smear', 'CRP or ESR (inflammation markers)', 'Blood cultures if infection suspected', 'Bone marrow biopsy if leukemia suspected'],

    questionsForDoctor: [
      'Which type of white blood cell is elevated?',
      'Is this from infection or something else?',
      'Do I need any imaging to find an infection source?',
      'When should this be rechecked?',
    ],
  },

  decreasedInterpretation: {
    generalMeaning: 'You have fewer immune cells than normal, which can make you more vulnerable to infections. This can happen from certain infections (especially viral), medications, bone marrow problems, or autoimmune conditions.',

    pathophysiology: 'Leukopenia occurs when: (1) Bone marrow production is suppressed (drugs, infection, infiltration), (2) WBCs are being destroyed (autoimmune), (3) WBCs are sequestered in the spleen, or (4) Overwhelming infection consuming WBCs faster than production.',

    causeCategories: [
      { category: 'Infections', description: 'Some infections lower WBC', examples: ['Viral infections (HIV, hepatitis)', 'Overwhelming bacterial sepsis', 'Typhoid'] },
      { category: 'Medications', description: 'Drug-induced suppression', examples: ['Chemotherapy', 'Immunosuppressants', 'Some antibiotics', 'Antithyroid drugs'] },
      { category: 'Bone Marrow Disorders', description: 'Production problems', examples: ['Aplastic anemia', 'Myelodysplastic syndrome', 'Leukemia (early)'] },
      { category: 'Autoimmune', description: 'Immune attack on WBCs', examples: ['Lupus', 'Felty syndrome'] },
    ],

    commonCauses: [
      { cause: 'Viral infection', mechanism: 'Viruses suppress marrow and consume WBCs', typicalLevel: 'mild', associatedFindings: ['Often lymphopenia', 'Self-limited'], clinicalContext: 'Flu-like illness, recent viral syndrome' },
      { cause: 'Medications', mechanism: 'Bone marrow suppression', typicalLevel: 'variable', associatedFindings: ['May affect other cell lines'], clinicalContext: 'Chemotherapy, methotrexate, clozapine, propylthiouracil' },
    ],

    lessCauses: [
      { cause: 'Aplastic anemia', mechanism: 'Bone marrow failure', typicalLevel: 'severe', associatedFindings: ['Pancytopenia', 'Low reticulocytes'], clinicalContext: 'Infections, bleeding, fatigue' },
      { cause: 'HIV', mechanism: 'Destroys CD4 lymphocytes', typicalLevel: 'moderate', associatedFindings: ['Low CD4 count specifically'], clinicalContext: 'Risk factors, opportunistic infections' },
    ],

    severityGuidance: [
      { level: 'mild', range: '3.5-4.5 K/uL', clinicalSignificance: 'Often benign, may be normal for some individuals', typicalCauses: ['Viral infection', 'Benign ethnic neutropenia'], urgency: 'routine' },
      { level: 'moderate', range: '2-3.5 K/uL', clinicalSignificance: 'Warrants investigation', typicalCauses: ['Medication effect', 'Active viral infection'], urgency: 'soon' },
      { level: 'severe', range: '< 2 K/uL (ANC < 1000)', clinicalSignificance: 'Significant infection risk', typicalCauses: ['Chemotherapy', 'Bone marrow failure'], urgency: 'urgent' },
      { level: 'critical', range: 'ANC < 500', clinicalSignificance: 'Neutropenic - high infection risk', typicalCauses: ['Severe chemotherapy effect', 'Marrow failure'], urgency: 'urgent' },
    ],

    worryingFeatures: [
      'ANC (absolute neutrophil count) < 500',
      'Associated fever (neutropenic fever = emergency)',
      'Pancytopenia (all cell lines low)',
      'Progressive decline',
    ],

    followUpTests: ['CBC with differential', 'Peripheral smear', 'Reticulocyte count', 'HIV test', 'Autoimmune workup (ANA)', 'Bone marrow biopsy if unexplained'],

    questionsForDoctor: [
      'Which type of white blood cell is low?',
      'Am I at increased risk for infections?',
      'Should I avoid sick people or crowds?',
      'Is this related to any medication Im taking?',
    ],
  },

  criticalValues: [
    { direction: 'high', threshold: 30, unit: 'K/uL', immediateRisk: 'May indicate serious infection or leukemia', requiredAction: 'Urgent evaluation, peripheral smear', timeframe: 'Same day' },
    { direction: 'low', threshold: 2, unit: 'K/uL', immediateRisk: 'High infection risk, especially if neutrophils low', requiredAction: 'Check ANC, infection precautions', timeframe: 'Same day' },
  ],

  relatedTests: [
    { testId: 'diff', testName: 'Differential', relationship: 'complements', whenToOrder: 'Always with WBC', interpretationContext: 'Shows which WBC type is abnormal' },
    { testId: 'crp', testName: 'CRP', relationship: 'complements', whenToOrder: 'If infection/inflammation suspected', interpretationContext: 'Rising CRP suggests acute inflammation' },
    { testId: 'blood-smear', testName: 'Peripheral Smear', relationship: 'explains', whenToOrder: 'If WBC very high or low', interpretationContext: 'Can show blast cells, toxic granulations' },
  ],

  associatedConditions: [
    { condition: 'Bacterial infection', direction: 'elevated', typicalPattern: 'Neutrophilia with left shift', sensitivity: 'moderate', specificity: 'low', notes: 'More specific when differential examined' },
    { condition: 'Viral infection', direction: 'variable', typicalPattern: 'Often lymphocytosis or leukopenia', sensitivity: 'low', specificity: 'low', notes: 'Pattern varies by virus' },
    { condition: 'Leukemia', direction: 'elevated', typicalPattern: 'Very high or presence of blasts', sensitivity: 'high', specificity: 'moderate', notes: 'Need smear to see blasts' },
  ],

  interferingFactors: [
    { factor: 'Recent exercise', effect: 'falsely-elevated', mechanism: 'Demargination of WBCs', clinicalRelevance: 'Transient effect', mitigation: 'Draw blood at rest' },
    { factor: 'Steroids', effect: 'falsely-elevated', mechanism: 'Demargination and delayed apoptosis', clinicalRelevance: 'Very common', mitigation: 'Note steroid use' },
    { factor: 'Clumped platelets', effect: 'falsely-elevated', mechanism: 'Machine may count clumps as WBCs', clinicalRelevance: 'Lab artifact', mitigation: 'Manual count' },
  ],

  temporalPatterns: [
    { scenario: 'Acute bacterial infection', pattern: 'Rises within hours, peaks at 24-48h', timeframe: 'Hours to days', clinicalUse: 'Track response to antibiotics' },
    { scenario: 'Post-chemotherapy nadir', pattern: 'Lowest point 7-14 days after chemo', timeframe: 'Days to weeks', clinicalUse: 'Plan for neutropenic precautions' },
  ],

  clinicalPearls: [
    'The differential (which types of WBCs) is more informative than total WBC alone',
    'Steroid effect: high WBC, high neutrophils, low lymphocytes - dont confuse with infection',
    '"Left shift" (bands, metamyelocytes) suggests bacterial infection even if WBC normal',
    'Very high WBC (> 50K) without bands/left shift suggests leukemia over infection',
    'Neutropenic fever (fever + ANC < 500) is an emergency requiring immediate antibiotics',
  ],

  patientQuestions: [
    'Is my immune system working normally?',
    'Am I fighting an infection right now?',
    'Should I be taking precautions to avoid getting sick?',
    'Which type of white blood cell is affected?',
  ],
};

const PLATELET_COUNT: LabTestEducation = {
  id: 'platelets',
  name: 'Platelet Count',
  abbreviations: ['Plt', 'PLT', 'Thrombocytes'],
  category: 'hematology',
  specimen: 'whole-blood',
  resultType: 'numeric',

  whatItMeasures: 'Platelets are tiny cell fragments that help your blood clot. When you get a cut, platelets rush to the site, stick together, and form a plug to stop bleeding. This test counts how many platelets are circulating in your blood.',

  physiologicalBasis: {
    analyte: 'Platelets (thrombocytes)',
    source: 'Fragments of megakaryocytes in bone marrow',
    normalFunction: 'First responders to blood vessel injury. They adhere to damaged vessel walls, activate, aggregate together, and form a platelet plug. Also release factors that help coagulation cascade.',
    regulation: 'Thrombopoietin (TPO) from liver stimulates megakaryocyte production. Negative feedback: platelets bind TPO, reducing its availability.',
    clearance: 'Lifespan ~10 days. Old platelets removed by spleen.',
    involvedOrgans: ['Bone marrow (production)', 'Liver (TPO)', 'Spleen (clearance/sequestration)'],
    metabolicPathways: ['Thrombopoiesis', 'Hemostasis pathway'],
  },

  referenceRanges: [
    { population: { ageMin: 18 }, lowValue: 150, highValue: 400, unit: 'K/uL' },
    { population: { ageMax: 18 }, lowValue: 150, highValue: 450, unit: 'K/uL' },
  ],

  elevatedInterpretation: {
    generalMeaning: 'You have more platelets than typical. This can be a reaction to something else going on (reactive thrombocytosis) or, less commonly, a bone marrow problem (primary thrombocytosis). Most cases are reactive and resolve when the underlying cause is treated.',

    pathophysiology: 'Elevated platelets occur when: (1) Bone marrow produces more in response to inflammation, infection, or blood loss (reactive), (2) Bone marrow has a mutation causing autonomous overproduction (essential thrombocythemia, other myeloproliferative neoplasms), or (3) Spleen is removed or not functioning (normally sequesters 1/3 of platelets).',

    causeCategories: [
      { category: 'Reactive (Secondary)', description: 'Response to something else', examples: ['Infection', 'Inflammation', 'Iron deficiency', 'Blood loss', 'Surgery', 'Malignancy'] },
      { category: 'Primary (Bone Marrow)', description: 'Marrow overproduction', examples: ['Essential thrombocythemia', 'Polycythemia vera', 'CML'] },
      { category: 'Asplenia', description: 'No spleen function', examples: ['Splenectomy', 'Functional asplenia'] },
    ],

    commonCauses: [
      { cause: 'Infection/Inflammation', mechanism: 'IL-6 stimulates TPO production', typicalLevel: 'mild', associatedFindings: ['Elevated CRP/ESR', 'Usually resolves with treatment'], clinicalContext: 'Active infection, autoimmune disease flare' },
      { cause: 'Iron deficiency', mechanism: 'TPO and EPO have structural similarities; iron deficiency may stimulate both', typicalLevel: 'mild', associatedFindings: ['Low ferritin', 'Low hemoglobin', 'Microcytic anemia'], clinicalContext: 'Heavy periods, GI blood loss' },
      { cause: 'Post-splenectomy', mechanism: 'Spleen normally sequesters 30% of platelets', typicalLevel: 'moderate', associatedFindings: ['Howell-Jolly bodies on smear', 'History of splenectomy'], clinicalContext: 'Lifelong after spleen removal' },
    ],

    lessCauses: [
      { cause: 'Essential thrombocythemia', mechanism: 'JAK2, CALR, or MPL mutation causing clonal platelet production', typicalLevel: 'severe', associatedFindings: ['Persistently elevated', 'Often > 600K', 'May have abnormal platelet function'], clinicalContext: 'Headaches, visual changes, may have thrombosis or paradoxically bleeding' },
    ],

    severityGuidance: [
      { level: 'mild', range: '400-600 K/uL', clinicalSignificance: 'Usually reactive, low risk', typicalCauses: ['Infection', 'Inflammation', 'Iron deficiency'], urgency: 'routine' },
      { level: 'moderate', range: '600-1000 K/uL', clinicalSignificance: 'Warrants workup for cause', typicalCauses: ['Significant inflammation', 'Post-splenectomy', 'Consider primary cause'], urgency: 'soon' },
      { level: 'severe', range: '> 1000 K/uL', clinicalSignificance: 'Risk of thrombosis (paradoxically, extreme levels can cause bleeding)', typicalCauses: ['Essential thrombocythemia', 'Severe reactive'], urgency: 'urgent' },
    ],

    worryingFeatures: [
      'Platelets > 1 million persistently',
      'Thrombosis or unexplained bleeding',
      'No obvious reactive cause',
      'Associated with elevated RBC or WBC',
    ],

    followUpTests: ['Iron studies', 'CRP/ESR', 'Peripheral smear', 'If primary suspected: JAK2, CALR, MPL mutations', 'Consider bone marrow biopsy'],

    questionsForDoctor: [
      'Is this reactive or could it be a bone marrow problem?',
      'Do I need blood thinners to prevent clots?',
      'Should I have any mutation testing?',
      'When should this be rechecked?',
    ],
  },

  decreasedInterpretation: {
    generalMeaning: 'You have fewer platelets than normal, called thrombocytopenia. This can increase your risk of bleeding. Causes range from benign (your body destroys them faster than normal but keeps you safe) to serious (bone marrow failure).',

    pathophysiology: 'Low platelets occur from: (1) Decreased production (bone marrow problem), (2) Increased destruction (immune-mediated, mechanical), (3) Sequestration in enlarged spleen, or (4) Dilution (massive transfusion).',

    causeCategories: [
      { category: 'Decreased Production', description: 'Bone marrow not making enough', examples: ['Bone marrow failure', 'Chemo/radiation', 'B12/folate deficiency', 'Marrow infiltration'] },
      { category: 'Increased Destruction', description: 'Destroyed faster than made', examples: ['ITP', 'TTP', 'HIT', 'DIC', 'Sepsis'] },
      { category: 'Sequestration', description: 'Trapped in enlarged spleen', examples: ['Cirrhosis', 'Portal hypertension', 'Splenomegaly'] },
      { category: 'Artifact', description: 'Lab error', examples: ['EDTA-induced platelet clumping', 'Giant platelets undercounted'] },
    ],

    commonCauses: [
      { cause: 'Immune thrombocytopenia (ITP)', mechanism: 'Antibodies destroy platelets', typicalLevel: 'moderate', associatedFindings: ['Isolated thrombocytopenia', 'Normal other cell lines', 'Large platelets on smear'], clinicalContext: 'May follow viral illness, often young adults' },
      { cause: 'Liver disease/cirrhosis', mechanism: 'Spleen enlargement sequesters platelets + decreased TPO', typicalLevel: 'mild', associatedFindings: ['Splenomegaly', 'Abnormal liver function tests'], clinicalContext: 'Known liver disease, stigmata of cirrhosis' },
      { cause: 'Medications', mechanism: 'Various - immune or marrow suppression', typicalLevel: 'variable', associatedFindings: ['Temporal relationship to drug'], clinicalContext: 'Common: heparin, quinine, sulfa drugs, chemo' },
      { cause: 'Pseudothrombocytopenia', mechanism: 'EDTA causes platelets to clump, undercounted', typicalLevel: 'mild', associatedFindings: ['Platelet clumps on smear'], clinicalContext: 'No bleeding, recheck in citrate tube' },
    ],

    lessCauses: [
      { cause: 'TTP/HUS', mechanism: 'Microthrombi consume platelets', typicalLevel: 'severe', associatedFindings: ['Microangiopathic hemolytic anemia (schistocytes)', 'Elevated LDH', 'Renal dysfunction'], clinicalContext: 'Medical emergency - fever, neuro changes, anemia' },
      { cause: 'Heparin-induced thrombocytopenia (HIT)', mechanism: 'Antibodies to heparin-PF4 complex', typicalLevel: 'moderate', associatedFindings: ['Recent heparin exposure', '50% drop in platelets', 'Paradoxical thrombosis'], clinicalContext: 'Usually 5-10 days after starting heparin' },
    ],

    severityGuidance: [
      { level: 'mild', range: '100-150 K/uL', clinicalSignificance: 'Low bleeding risk, monitor', typicalCauses: ['ITP', 'Liver disease', 'Drug effect'], urgency: 'routine' },
      { level: 'moderate', range: '50-100 K/uL', clinicalSignificance: 'Increased surgical bleeding risk, minor bleeding possible', typicalCauses: ['ITP', 'Bone marrow problems'], urgency: 'soon' },
      { level: 'severe', range: '20-50 K/uL', clinicalSignificance: 'Significant bleeding risk, spontaneous bruising', typicalCauses: ['ITP', 'Leukemia', 'Sepsis'], urgency: 'urgent' },
      { level: 'critical', range: '< 20 K/uL', clinicalSignificance: 'High risk of spontaneous bleeding including intracranial', typicalCauses: ['Severe ITP', 'TTP', 'Marrow failure'], urgency: 'emergent' },
    ],

    worryingFeatures: [
      'Active bleeding (especially mucosal)',
      'Petechiae (tiny red dots) appearing',
      'Associated schistocytes on smear (TTP/HUS)',
      'New neurologic symptoms with low platelets',
      'Platelets dropping rapidly',
    ],

    followUpTests: ['Peripheral blood smear (LOOK AT IT)', 'Recheck in citrate tube if clumping suspected', 'Hemolysis labs (LDH, haptoglobin) if TTP concern', 'HIV, Hepatitis C (can cause ITP)', 'HIT antibody if on heparin', 'Bone marrow if production problem suspected'],

    questionsForDoctor: [
      'Why are my platelets low?',
      'Am I at risk for dangerous bleeding?',
      'Should I avoid any activities or medications?',
      'Do I need a blood thinner stopped?',
      'Will I need a platelet transfusion?',
    ],
  },

  criticalValues: [
    { direction: 'high', threshold: 1000, unit: 'K/uL', immediateRisk: 'Thrombosis risk; extreme elevations paradoxically cause bleeding', requiredAction: 'Hematology consultation', timeframe: 'Same day' },
    { direction: 'low', threshold: 20, unit: 'K/uL', immediateRisk: 'High risk spontaneous bleeding', requiredAction: 'Urgent evaluation, consider transfusion', timeframe: 'Immediate' },
  ],

  relatedTests: [
    { testId: 'mpv', testName: 'Mean Platelet Volume', relationship: 'complements', whenToOrder: 'Part of CBC', interpretationContext: 'High MPV with low platelets suggests destruction; low MPV suggests production problem' },
    { testId: 'blood-smear', testName: 'Peripheral Smear', relationship: 'explains', whenToOrder: 'Always if unexpected thrombocytopenia', interpretationContext: 'Can show clumping (artifact), large platelets (destruction), schistocytes (TTP)' },
    { testId: 'pt-inr', testName: 'PT/INR', relationship: 'complements', whenToOrder: 'If bleeding concern', interpretationContext: 'Assesses coagulation cascade, separate from platelet function' },
  ],

  associatedConditions: [
    { condition: 'ITP', direction: 'decreased', typicalPattern: 'Isolated thrombocytopenia, large platelets', sensitivity: 'high', specificity: 'moderate', notes: 'Diagnosis of exclusion' },
    { condition: 'TTP', direction: 'decreased', typicalPattern: 'With MAHA, neuro changes, fever', sensitivity: 'high', specificity: 'high', notes: 'Medical emergency' },
    { condition: 'Cirrhosis', direction: 'decreased', typicalPattern: 'Mild decrease with splenomegaly', sensitivity: 'moderate', specificity: 'low', notes: 'Due to splenic sequestration' },
    { condition: 'Essential thrombocythemia', direction: 'elevated', typicalPattern: 'Persistently > 450K', sensitivity: 'high', specificity: 'moderate', notes: 'Check JAK2 mutation' },
  ],

  interferingFactors: [
    { factor: 'EDTA-induced clumping', effect: 'falsely-decreased', mechanism: 'EDTA causes some peoples platelets to clump', clinicalRelevance: 'Common! Check smear', mitigation: 'Recheck in citrate or heparin tube' },
    { factor: 'Giant platelets', effect: 'falsely-decreased', mechanism: 'Large platelets counted as RBCs', clinicalRelevance: 'May occur in destruction states', mitigation: 'Manual count' },
    { factor: 'Recent platelet transfusion', effect: 'variable', mechanism: 'Temporary increase', clinicalRelevance: 'Note transfusion timing', mitigation: 'Check 1-hour and 24-hour post' },
  ],

  temporalPatterns: [
    { scenario: 'ITP treatment response', pattern: 'Rises in 1-2 weeks with steroids', timeframe: 'Weeks', clinicalUse: 'Monitor response to therapy' },
    { scenario: 'HIT', pattern: 'Drops 5-10 days after heparin start, or sooner if prior exposure', timeframe: 'Days', clinicalUse: 'Plot 4Ts score, check antibody' },
    { scenario: 'Post-chemotherapy nadir', pattern: 'Lowest 10-14 days post-chemo, recovery by day 21-28', timeframe: 'Weeks', clinicalUse: 'Plan transfusion needs' },
  ],

  clinicalPearls: [
    'ALWAYS check peripheral smear for low platelets - clumping is common artifact',
    'Isolated thrombocytopenia (other cell lines normal) = destruction or sequestration usually, not production',
    'TTP pentad: thrombocytopenia + MAHA + neuro changes + fever + renal failure (rarely all 5 present)',
    'HIT: 4Ts score helps assess probability before antibody results',
    'ITP is a diagnosis of exclusion - rule out other causes first',
    'Dont transfuse platelets in TTP (makes it worse) or HIT (fuels thrombosis)',
  ],

  patientQuestions: [
    'Do I have a bleeding risk at my current platelet level?',
    'Should I avoid contact sports or activities where I might get injured?',
    'Are there any medications I should avoid (like aspirin)?',
    'What should I watch for as warning signs of bleeding?',
  ],
};

// ============================================
// Metabolic Panel Tests
// ============================================

const CREATININE: LabTestEducation = {
  id: 'creatinine',
  name: 'Creatinine',
  abbreviations: ['Cr', 'Creat'],
  category: 'renal',
  specimen: 'serum',
  resultType: 'numeric',

  whatItMeasures: 'Creatinine is a waste product from normal muscle metabolism. Your kidneys filter it out of your blood and excrete it in urine. This test measures how well your kidneys are filtering.',

  physiologicalBasis: {
    analyte: 'Creatinine',
    source: 'Breakdown product of creatine phosphate in muscle',
    normalFunction: 'Waste product with no physiologic function - simply a marker of muscle mass and kidney function',
    regulation: 'Production is fairly constant based on muscle mass. Clearance depends on kidney filtration (GFR).',
    clearance: 'Freely filtered by glomeruli, not reabsorbed, small amount secreted by tubules',
    involvedOrgans: ['Muscles (production)', 'Kidneys (clearance)'],
    metabolicPathways: ['Creatine-phosphate energy system'],
  },

  referenceRanges: [
    { population: { sex: 'male', ageMin: 18 }, lowValue: 0.7, highValue: 1.3, unit: 'mg/dL' },
    { population: { sex: 'female', ageMin: 18 }, lowValue: 0.6, highValue: 1.1, unit: 'mg/dL' },
    { population: { ageMax: 18 }, lowValue: 0.3, highValue: 1.0, unit: 'mg/dL', notes: 'Varies with age/muscle mass' },
  ],

  elevatedInterpretation: {
    generalMeaning: 'Your kidneys may not be filtering blood as efficiently as they should. Creatinine builds up when kidney function declines. However, elevated creatinine can also reflect high muscle mass or dehydration.',

    pathophysiology: 'Creatinine rises when: (1) Kidney filtration decreases (fewer functioning nephrons, decreased blood flow), (2) More creatinine is produced (increased muscle mass, rhabdomyolysis), or (3) Certain drugs block tubular secretion of creatinine (trimethoprim, cimetidine).',

    causeCategories: [
      { category: 'Decreased GFR', description: 'Kidney function impairment', examples: ['Acute kidney injury', 'Chronic kidney disease', 'Obstruction'] },
      { category: 'Increased Production', description: 'More creatinine made', examples: ['High muscle mass', 'Rhabdomyolysis', 'High protein diet'] },
      { category: 'Decreased Secretion', description: 'Drug interference', examples: ['Trimethoprim', 'Cimetidine', 'Cobicistat'] },
    ],

    commonCauses: [
      { cause: 'Chronic kidney disease', mechanism: 'Progressive loss of nephrons over years', typicalLevel: 'variable', associatedFindings: ['Elevated BUN', 'Abnormal urinalysis', 'Small kidneys on imaging'], clinicalContext: 'Diabetes, hypertension, family history' },
      { cause: 'Acute kidney injury', mechanism: 'Sudden drop in kidney function', typicalLevel: 'variable', associatedFindings: ['Rising creatinine over hours-days', 'Decreased urine output possible'], clinicalContext: 'Recent illness, surgery, contrast, new medications' },
      { cause: 'Dehydration/prerenal', mechanism: 'Decreased blood flow to kidneys', typicalLevel: 'mild', associatedFindings: ['BUN/Cr ratio > 20:1', 'Concentrated urine'], clinicalContext: 'Poor intake, vomiting, diarrhea' },
    ],

    lessCauses: [
      { cause: 'Rhabdomyolysis', mechanism: 'Massive muscle breakdown releases creatinine', typicalLevel: 'severe', associatedFindings: ['Very high CK (thousands)', 'Myoglobinuria', 'Muscle pain'], clinicalContext: 'Trauma, statins, extreme exercise, drugs of abuse' },
      { cause: 'Obstruction', mechanism: 'Blocked urine outflow causes back-pressure', typicalLevel: 'variable', associatedFindings: ['Hydronephrosis on ultrasound', 'May have anuria'], clinicalContext: 'BPH, stones, pelvic mass' },
    ],

    severityGuidance: [
      { level: 'mild', range: '1.3-2.0 mg/dL', clinicalSignificance: 'May represent mild CKD or acute change', typicalCauses: ['Early CKD', 'Dehydration', 'Drug effect'], urgency: 'routine' },
      { level: 'moderate', range: '2.0-4.0 mg/dL', clinicalSignificance: 'Significant kidney dysfunction', typicalCauses: ['Moderate CKD', 'AKI'], urgency: 'soon' },
      { level: 'severe', range: '4.0-8.0 mg/dL', clinicalSignificance: 'Severe dysfunction, electrolyte derangements likely', typicalCauses: ['Severe CKD', 'Severe AKI'], urgency: 'urgent' },
      { level: 'critical', range: '> 8-10 mg/dL', clinicalSignificance: 'May need dialysis', typicalCauses: ['ESRD', 'Severe AKI'], urgency: 'emergent' },
    ],

    worryingFeatures: [
      'Rapidly rising creatinine (doubling over days)',
      'Decreased urine output',
      'Associated hyperkalemia',
      'Volume overload (shortness of breath, edema)',
    ],

    followUpTests: ['BUN (calculate BUN/Cr ratio)', 'Urinalysis', 'Renal ultrasound', 'eGFR calculation', 'Urine sodium/creatinine if AKI', 'Kidney biopsy if unexplained'],

    questionsForDoctor: [
      'Is this acute or chronic kidney disease?',
      'What is my eGFR (estimated kidney function)?',
      'Do I need to see a nephrologist?',
      'Should any medications be adjusted for my kidney function?',
      'Do I need any imaging of my kidneys?',
    ],
  },

  decreasedInterpretation: {
    generalMeaning: 'Low creatinine is rarely a problem. It usually reflects low muscle mass (elderly, malnutrition, muscle disease) or sometimes pregnancy.',

    pathophysiology: 'Low creatinine occurs when: (1) Less muscle mass = less creatinine produced, (2) Increased GFR clears creatinine faster (pregnancy, early diabetes), or (3) Dilutional from fluid overload.',

    causeCategories: [
      { category: 'Low Muscle Mass', description: 'Less creatinine production', examples: ['Elderly', 'Malnutrition', 'Muscle wasting diseases', 'Amputees'] },
      { category: 'Increased Clearance', description: 'Kidneys filtering more', examples: ['Pregnancy', 'Early diabetic nephropathy'] },
    ],

    commonCauses: [
      { cause: 'Low muscle mass', mechanism: 'Less creatine phosphate in muscles', typicalLevel: 'mild', associatedFindings: ['Low body weight', 'Sarcopenia'], clinicalContext: 'Elderly, chronic illness, malnutrition' },
      { cause: 'Pregnancy', mechanism: 'Increased blood volume and GFR', typicalLevel: 'mild', associatedFindings: ['Other pregnancy changes'], clinicalContext: 'Normal in pregnancy' },
    ],

    lessCauses: [
      { cause: 'Severe liver disease', mechanism: 'Liver produces creatine precursors', typicalLevel: 'mild', associatedFindings: ['Abnormal liver function'], clinicalContext: 'Advanced cirrhosis' },
    ],

    severityGuidance: [
      { level: 'mild', range: '0.4-0.6 mg/dL', clinicalSignificance: 'Usually reflects body composition, not disease', typicalCauses: ['Low muscle mass', 'Pregnancy'], urgency: 'routine' },
    ],

    worryingFeatures: [
      'Usually no concerning features from low creatinine itself',
      'Consider why muscle mass may be low (malnutrition, disease)',
    ],

    followUpTests: ['Consider nutritional assessment if malnutrition suspected'],

    questionsForDoctor: [
      'Is my low creatinine due to my body composition?',
      'Does this affect how you interpret my kidney function?',
    ],
  },

  criticalValues: [
    { direction: 'high', threshold: 10, unit: 'mg/dL', immediateRisk: 'Uremia, electrolyte abnormalities, may need dialysis', requiredAction: 'Urgent evaluation for dialysis needs', timeframe: 'Immediate' },
  ],

  relatedTests: [
    { testId: 'bun', testName: 'BUN', relationship: 'complements', whenToOrder: 'Together in metabolic panel', interpretationContext: 'BUN/Cr ratio helps distinguish prerenal from intrinsic kidney disease' },
    { testId: 'egfr', testName: 'eGFR', relationship: 'complements', whenToOrder: 'Calculated from creatinine', interpretationContext: 'Better estimate of actual kidney function than creatinine alone' },
    { testId: 'cystatin-c', testName: 'Cystatin C', relationship: 'confirms', whenToOrder: 'When creatinine may be unreliable', interpretationContext: 'Not affected by muscle mass' },
    { testId: 'urinalysis', testName: 'Urinalysis', relationship: 'explains', whenToOrder: 'Always with kidney evaluation', interpretationContext: 'Shows proteinuria, casts, blood' },
  ],

  associatedConditions: [
    { condition: 'Chronic kidney disease', direction: 'elevated', typicalPattern: 'Gradually rising over months-years', sensitivity: 'high', specificity: 'moderate', notes: 'eGFR is staged by level' },
    { condition: 'Acute kidney injury', direction: 'elevated', typicalPattern: 'Rises over hours to days', sensitivity: 'high', specificity: 'moderate', notes: 'Need baseline for comparison' },
    { condition: 'Rhabdomyolysis', direction: 'elevated', typicalPattern: 'Acute rise with very high CK', sensitivity: 'high', specificity: 'low', notes: 'CK is more specific' },
  ],

  interferingFactors: [
    { factor: 'Muscle mass', effect: 'variable', mechanism: 'More muscle = more creatinine', clinicalRelevance: 'Bodybuilders may have higher normal, elderly lower', mitigation: 'Use cystatin C or creatinine clearance' },
    { factor: 'Trimethoprim', effect: 'falsely-elevated', mechanism: 'Blocks tubular secretion', clinicalRelevance: 'Increases Cr by ~0.2-0.4 without true GFR change', mitigation: 'Note medication use' },
    { factor: 'Creatine supplements', effect: 'falsely-elevated', mechanism: 'More creatine = more creatinine', clinicalRelevance: 'Common in athletes', mitigation: 'Ask about supplements' },
    { factor: 'Ketosis', effect: 'falsely-elevated', mechanism: 'Ketones interfere with some assays', clinicalRelevance: 'DKA patients', mitigation: 'Use enzymatic assay' },
  ],

  temporalPatterns: [
    { scenario: 'AKI from dehydration', pattern: 'Rises then normalizes with fluids in 24-72 hours', timeframe: 'Days', clinicalUse: 'Monitor with fluid resuscitation' },
    { scenario: 'Post-contrast AKI', pattern: 'Peaks 48-72 hours post-contrast', timeframe: 'Days', clinicalUse: 'Check at 48-72 hours post-procedure' },
    { scenario: 'CKD progression', pattern: 'Gradual rise over months-years', timeframe: 'Months to years', clinicalUse: 'Track trajectory to predict ESRD timing' },
  ],

  clinicalPearls: [
    'A "normal" creatinine in an elderly frail person may actually indicate significant kidney disease',
    'Creatinine is a lagging indicator - GFR must drop ~50% before Cr rises',
    'eGFR is more useful than creatinine alone - accounts for age, sex, race',
    'BUN/Cr ratio > 20:1 suggests prerenal (dehydration); < 10:1 suggests liver disease or malnutrition',
    'In rhabdomyolysis, Cr rises out of proportion to BUN (muscle releases creatinine)',
    'Stable CKD creatinine that suddenly rises: think obstruction, new medication, contrast exposure',
  ],

  patientQuestions: [
    'What is my estimated kidney function (eGFR)?',
    'Is this change acute or has it been this way?',
    'Are there medications I should avoid?',
    'Should I limit protein in my diet?',
    'Do I need to see a kidney specialist?',
  ],
};

const GLUCOSE: LabTestEducation = {
  id: 'glucose',
  name: 'Glucose (Blood Sugar)',
  abbreviations: ['Glu', 'BG', 'FBG'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',

  whatItMeasures: 'Glucose is the primary fuel for your bodys cells, especially your brain. This test measures how much glucose is circulating in your blood. Levels are regulated by insulin (lowers it) and glucagon (raises it).',

  physiologicalBasis: {
    analyte: 'Glucose (sugar)',
    source: 'Diet (carbohydrates), liver production (gluconeogenesis), breakdown of glycogen (glycogenolysis)',
    normalFunction: 'Primary energy source for cells. Brain requires glucose and cant use fat. Muscles and other tissues can use glucose or fat.',
    regulation: 'Insulin (from pancreatic beta cells) allows glucose into cells and lowers blood sugar. Glucagon, cortisol, epinephrine, and growth hormone raise blood sugar.',
    clearance: 'Taken up by cells via insulin-mediated glucose transporters. Excess stored as glycogen (liver, muscle) or converted to fat.',
    involvedOrgans: ['Pancreas (insulin/glucagon)', 'Liver (production/storage)', 'Muscles (uptake/storage)', 'Fat tissue (storage)'],
    metabolicPathways: ['Glycolysis', 'Gluconeogenesis', 'Glycogenolysis', 'Lipogenesis'],
  },

  referenceRanges: [
    { population: { fasting: true, ageMin: 18 }, lowValue: 70, highValue: 100, unit: 'mg/dL', notes: 'Fasting (8+ hours)' },
    { population: { fasting: false, ageMin: 18 }, lowValue: 70, highValue: 140, unit: 'mg/dL', notes: 'Random (non-fasting)' },
  ],

  elevatedInterpretation: {
    generalMeaning: 'Your blood sugar is higher than typical. This could indicate diabetes, prediabetes, or a stress response. Persistently elevated glucose can damage blood vessels, nerves, and organs over time.',

    pathophysiology: 'Elevated glucose occurs when: (1) Insulin production is insufficient (Type 1 DM), (2) Cells are resistant to insulin (Type 2 DM), (3) Stress hormones (cortisol, epinephrine) raise glucose, or (4) Liver overproduces glucose.',

    causeCategories: [
      { category: 'Diabetes Mellitus', description: 'Chronic metabolic disease', examples: ['Type 1 DM (no insulin)', 'Type 2 DM (insulin resistance)', 'Gestational diabetes'] },
      { category: 'Prediabetes', description: 'Between normal and diabetes', examples: ['Impaired fasting glucose', 'Impaired glucose tolerance'] },
      { category: 'Stress/Illness', description: 'Temporary elevation', examples: ['Acute illness', 'Surgery', 'Trauma', 'Steroids'] },
      { category: 'Endocrine Disorders', description: 'Hormonal causes', examples: ['Cushings syndrome', 'Acromegaly', 'Pheochromocytoma'] },
    ],

    commonCauses: [
      { cause: 'Type 2 Diabetes', mechanism: 'Insulin resistance + eventual beta cell failure', typicalLevel: 'moderate', associatedFindings: ['Elevated HbA1c', 'Often obese', 'Family history'], clinicalContext: 'Gradual onset, often found on routine screening' },
      { cause: 'Stress hyperglycemia', mechanism: 'Cortisol and catecholamines antagonize insulin', typicalLevel: 'mild', associatedFindings: ['Acutely ill patient', 'Normal HbA1c'], clinicalContext: 'Hospital setting, acute illness, surgery' },
      { cause: 'Steroid-induced', mechanism: 'Steroids cause insulin resistance and increase gluconeogenesis', typicalLevel: 'variable', associatedFindings: ['On prednisone or similar'], clinicalContext: 'Typically worst in afternoon with morning steroid dosing' },
    ],

    lessCauses: [
      { cause: 'Type 1 Diabetes', mechanism: 'Autoimmune destruction of beta cells - no insulin', typicalLevel: 'severe', associatedFindings: ['Ketones', 'Often young', 'Weight loss', 'Polyuria/polydipsia'], clinicalContext: 'New diagnosis often presents with DKA' },
      { cause: 'Cushings syndrome', mechanism: 'Cortisol excess antagonizes insulin', typicalLevel: 'moderate', associatedFindings: ['Central obesity', 'Moon face', 'Striae', 'Hypertension'], clinicalContext: 'Consider if other Cushing features present' },
    ],

    severityGuidance: [
      { level: 'mild', range: 'Fasting 100-125 mg/dL', clinicalSignificance: 'Prediabetes range', typicalCauses: ['Prediabetes', 'Early Type 2 DM'], urgency: 'routine' },
      { level: 'moderate', range: 'Fasting 126-200 mg/dL', clinicalSignificance: 'Diabetes diagnosis if confirmed', typicalCauses: ['Type 2 DM'], urgency: 'soon' },
      { level: 'severe', range: '200-400 mg/dL', clinicalSignificance: 'Uncontrolled diabetes, risk of complications', typicalCauses: ['Uncontrolled DM', 'New diagnosis'], urgency: 'urgent' },
      { level: 'critical', range: '> 400-600 mg/dL', clinicalSignificance: 'Risk of HHS or DKA', typicalCauses: ['DKA', 'HHS'], urgency: 'emergent' },
    ],

    worryingFeatures: [
      'Glucose > 250 with ketones (possible DKA)',
      'Altered mental status with high glucose (HHS)',
      'New symptoms: excessive thirst, urination, weight loss',
      'Glucose > 400 mg/dL',
    ],

    followUpTests: ['HbA1c (3-month average)', 'Fasting glucose if random elevated', 'Lipid panel (often abnormal in DM)', 'Urine microalbumin (check for kidney damage)', 'Consider C-peptide and antibodies if Type 1 suspected'],

    questionsForDoctor: [
      'Do I have diabetes or prediabetes?',
      'What is my HbA1c (average blood sugar)?',
      'What should my target blood sugar be?',
      'Do I need medication or can I manage with diet/exercise?',
      'How often should I check my blood sugar?',
    ],
  },

  decreasedInterpretation: {
    generalMeaning: 'Your blood sugar is lower than typical, called hypoglycemia. This can cause symptoms ranging from shakiness and confusion to loss of consciousness if severe. Your brain needs glucose to function.',

    pathophysiology: 'Low glucose occurs when: (1) Too much insulin (from medication or insulin-producing tumor), (2) Inadequate glucose intake (fasting, malnutrition), (3) Liver cant produce glucose (liver failure, alcohol), or (4) Increased glucose use (sepsis).',

    causeCategories: [
      { category: 'Medication-induced', description: 'Diabetes medications', examples: ['Insulin overdose', 'Sulfonylurea excess'] },
      { category: 'Endogenous Hyperinsulinism', description: 'Body makes too much insulin', examples: ['Insulinoma', 'Nesidioblastosis'] },
      { category: 'Inadequate Production', description: 'Liver cant make glucose', examples: ['Liver failure', 'Alcohol', 'Adrenal insufficiency'] },
      { category: 'Reactive', description: 'After eating', examples: ['Post-gastric bypass', 'Early diabetes (delayed insulin)'] },
    ],

    commonCauses: [
      { cause: 'Diabetic medication', mechanism: 'Insulin or sulfonylureas lower glucose too much', typicalLevel: 'variable', associatedFindings: ['Known diabetic on these meds'], clinicalContext: 'Missed meal, increased exercise, wrong dose' },
      { cause: 'Alcohol', mechanism: 'Blocks gluconeogenesis in liver', typicalLevel: 'moderate', associatedFindings: ['Often with poor nutrition'], clinicalContext: 'Binge drinking, especially without eating' },
    ],

    lessCauses: [
      { cause: 'Insulinoma', mechanism: 'Tumor secretes insulin autonomously', typicalLevel: 'moderate', associatedFindings: ['Whipples triad: symptoms + low glucose + resolution with glucose', 'Elevated insulin/C-peptide when hypoglycemic'], clinicalContext: 'Recurrent fasting hypoglycemia in non-diabetic' },
      { cause: 'Adrenal insufficiency', mechanism: 'Cortisol needed for gluconeogenesis', typicalLevel: 'mild', associatedFindings: ['Low cortisol', 'May have hypotension, electrolyte abnormalities'], clinicalContext: 'Addisons disease, stopping steroids abruptly' },
    ],

    severityGuidance: [
      { level: 'mild', range: '55-70 mg/dL', clinicalSignificance: 'May have symptoms, can self-treat', typicalCauses: ['Missed meal', 'Medication timing'], urgency: 'soon' },
      { level: 'moderate', range: '40-55 mg/dL', clinicalSignificance: 'Significant symptoms likely, needs intervention', typicalCauses: ['Medication excess', 'Fasting'], urgency: 'urgent' },
      { level: 'severe', range: '< 40 mg/dL', clinicalSignificance: 'Risk of seizure, coma, death', typicalCauses: ['Severe insulin excess', 'Insulinoma'], urgency: 'emergent' },
    ],

    worryingFeatures: [
      'Altered mental status',
      'Seizure',
      'Recurrent hypoglycemia without clear cause',
      'Hypoglycemia in non-diabetic',
    ],

    followUpTests: ['Blood glucose when symptomatic', 'Insulin and C-peptide when hypoglycemic', 'Cortisol level', 'Liver function tests', '72-hour fast if insulinoma suspected'],

    questionsForDoctor: [
      'Why is my blood sugar low?',
      'How do I treat low blood sugar episodes?',
      'Do I need my diabetes medication adjusted?',
      'Should I be tested for other causes?',
    ],
  },

  criticalValues: [
    { direction: 'high', threshold: 500, unit: 'mg/dL', immediateRisk: 'Hyperosmolar state, DKA', requiredAction: 'Immediate evaluation and treatment', timeframe: 'Immediate' },
    { direction: 'low', threshold: 50, unit: 'mg/dL', immediateRisk: 'Seizure, coma, brain damage', requiredAction: 'Immediate glucose administration', timeframe: 'Immediate' },
  ],

  relatedTests: [
    { testId: 'hba1c', testName: 'HbA1c', relationship: 'complements', whenToOrder: 'For diabetes diagnosis and monitoring', interpretationContext: 'Reflects 3-month average, not affected by recent eating' },
    { testId: 'insulin', testName: 'Insulin Level', relationship: 'explains', whenToOrder: 'If hypoglycemia cause unclear', interpretationContext: 'High insulin + low glucose = excess insulin from medication or tumor' },
    { testId: 'c-peptide', testName: 'C-Peptide', relationship: 'explains', whenToOrder: 'With insulin to distinguish endogenous vs exogenous', interpretationContext: 'Low C-peptide + high insulin = exogenous insulin' },
  ],

  associatedConditions: [
    { condition: 'Type 2 Diabetes', direction: 'elevated', typicalPattern: 'Persistently elevated fasting and post-meal', sensitivity: 'high', specificity: 'moderate', notes: 'HbA1c more reliable for diagnosis' },
    { condition: 'Type 1 Diabetes', direction: 'elevated', typicalPattern: 'Often very high at presentation with ketones', sensitivity: 'high', specificity: 'moderate', notes: 'Check ketones' },
    { condition: 'Insulinoma', direction: 'decreased', typicalPattern: 'Fasting hypoglycemia with high insulin', sensitivity: 'high', specificity: 'high', notes: 'Rare but important' },
  ],

  interferingFactors: [
    { factor: 'Recent meal', effect: 'falsely-elevated', mechanism: 'Postprandial glucose rise is normal', clinicalRelevance: 'Use fasting value for diagnosis', mitigation: 'Note fasting status' },
    { factor: 'Stress/illness', effect: 'falsely-elevated', mechanism: 'Stress hormones raise glucose', clinicalRelevance: 'Common in hospitalized patients', mitigation: 'Recheck when well' },
    { factor: 'IV dextrose', effect: 'falsely-elevated', mechanism: 'Direct glucose infusion', clinicalRelevance: 'In hospital setting', mitigation: 'Note IV contents' },
  ],

  temporalPatterns: [
    { scenario: 'Normal daily variation', pattern: 'Lowest fasting, rises after meals, returns to baseline', timeframe: 'Hours', clinicalUse: 'Fasting value most reliable for diagnosis' },
    { scenario: 'Dawn phenomenon', pattern: 'Rises 4-8 AM due to morning cortisol', timeframe: 'Early morning', clinicalUse: 'Common in diabetics, may need medication adjustment' },
    { scenario: 'Post-meal peak', pattern: 'Peaks 1-2 hours after eating, back to baseline by 3 hours', timeframe: 'Hours', clinicalUse: 'Post-meal > 200 at 2 hours suggests diabetes' },
  ],

  clinicalPearls: [
    'Fasting glucose >= 126 mg/dL on TWO occasions = diabetes',
    'Random glucose >= 200 with symptoms = diabetes (one test enough)',
    'HbA1c >= 6.5% = diabetes',
    'Prediabetes: fasting 100-125 or HbA1c 5.7-6.4%',
    'In hospitalized patients, glucose 140-180 is often acceptable; tighter control increases hypoglycemia risk',
    'Hypoglycemia unawareness develops in long-standing diabetes - patients dont feel low',
  ],

  patientQuestions: [
    'Was this test fasting or not?',
    'What does my blood sugar level mean?',
    'Do I have diabetes or prediabetes?',
    'What should my target blood sugar be?',
    'How can I improve my blood sugar control?',
  ],
};

// ============================================
// Lab Panels
// ============================================

export const CBC_PANEL: LabPanelEducation = {
  id: 'cbc',
  name: 'Complete Blood Count',
  abbreviation: 'CBC',
  category: 'hematology',

  purpose: 'The CBC is one of the most common blood tests. It gives a snapshot of your blood cells - how many you have and whether they look normal. It screens for infections, anemia, bleeding disorders, and blood cancers.',

  includedTests: ['hemoglobin', 'hematocrit', 'wbc', 'platelets', 'mcv', 'mch', 'mchc', 'rdw', 'differential'],

  overallInterpretation: 'Think of the CBC as a census of your blood cells. It tells you if you have enough red cells (oxygen carrying), white cells (infection fighting), and platelets (clotting). The indices tell you about the size and color of your red cells, which helps diagnose the type of anemia.',

  patterns: [
    {
      name: 'Iron Deficiency Anemia Pattern',
      description: 'Classic pattern of iron deficiency - not enough iron to make hemoglobin',
      findings: [
        { test: 'Hemoglobin', direction: 'decreased' },
        { test: 'MCV', direction: 'decreased', qualifier: 'Microcytic (small cells)' },
        { test: 'RDW', direction: 'elevated', qualifier: 'Variable cell sizes' },
        { test: 'Platelets', direction: 'elevated', qualifier: 'Reactive thrombocytosis common' },
      ],
      suggestiveOf: ['Iron deficiency anemia', 'Thalassemia trait (if RDW normal)'],
      nextSteps: ['Iron studies (ferritin, iron, TIBC)', 'Consider GI workup for source of blood loss'],
      educationalContext: 'When iron is low, the bone marrow makes smaller red blood cells with less hemoglobin. The cells also vary more in size (high RDW). Interestingly, platelets often go UP in iron deficiency.',
    },
    {
      name: 'B12/Folate Deficiency Pattern',
      description: 'Pattern of vitamin deficiency affecting DNA synthesis',
      findings: [
        { test: 'Hemoglobin', direction: 'decreased' },
        { test: 'MCV', direction: 'elevated', qualifier: 'Macrocytic (large cells)' },
        { test: 'WBC', direction: 'decreased', qualifier: 'May see hypersegmented neutrophils' },
        { test: 'Platelets', direction: 'decreased', qualifier: 'Mild thrombocytopenia' },
      ],
      suggestiveOf: ['B12 deficiency', 'Folate deficiency', 'Myelodysplastic syndrome'],
      nextSteps: ['B12 and folate levels', 'Peripheral smear for hypersegmented neutrophils', 'MMA and homocysteine if B12 borderline'],
      educationalContext: 'B12 and folate are needed for DNA synthesis. Without them, cells grow larger before dividing. The bone marrow becomes ineffective, and developing cells die before maturing (ineffective hematopoiesis).',
    },
    {
      name: 'Acute Infection Pattern',
      description: 'Classic response to bacterial infection',
      findings: [
        { test: 'WBC', direction: 'elevated' },
        { test: 'Neutrophils', direction: 'elevated' },
        { test: 'Band forms', direction: 'elevated', qualifier: 'Left shift' },
        { test: 'Platelets', direction: 'elevated', qualifier: 'Reactive' },
      ],
      suggestiveOf: ['Bacterial infection', 'Acute inflammation'],
      nextSteps: ['Identify infection source', 'Consider CRP/procalcitonin', 'Blood cultures if systemic infection suspected'],
      educationalContext: 'During infection, the bone marrow releases mature and immature neutrophils (left shift) to fight invaders. The more bands and immature forms, the more serious the infection. Platelets rise as part of the acute phase response.',
    },
    {
      name: 'Pancytopenia Pattern',
      description: 'All cell lines decreased - concerning for bone marrow problem',
      findings: [
        { test: 'Hemoglobin', direction: 'decreased' },
        { test: 'WBC', direction: 'decreased' },
        { test: 'Platelets', direction: 'decreased' },
      ],
      suggestiveOf: ['Bone marrow failure', 'Aplastic anemia', 'Myelodysplastic syndrome', 'Bone marrow infiltration', 'Severe B12 deficiency'],
      nextSteps: ['Peripheral smear', 'Reticulocyte count', 'B12/folate', 'Bone marrow biopsy usually indicated'],
      educationalContext: 'When all three cell lines are low, something is affecting the bone marrow factory itself. This could be failure (aplastic anemia), crowding out by abnormal cells (leukemia, metastases), or nutritional (severe B12 deficiency).',
    },
  ],

  clinicalScenarios: [
    {
      scenario: 'Fatigue in a young woman with heavy periods',
      clinicalContext: 'Menstruating women are at risk for iron deficiency from monthly blood loss',
      expectedResults: [
        { test: 'Hemoglobin', expected: 'decreased', rationale: 'Iron-deficient erythropoiesis' },
        { test: 'MCV', expected: 'decreased', rationale: 'Microcytic anemia' },
        { test: 'Ferritin', expected: 'decreased', rationale: 'Depleted iron stores' },
      ],
      interpretation: 'This pattern of microcytic anemia with low ferritin is classic iron deficiency from menstrual blood loss.',
      teaching: 'Always consider iron deficiency in menstruating women with anemia. Ferritin is the most sensitive test for iron stores.',
    },
    {
      scenario: 'Elderly patient with fatigue and numbness in feet',
      clinicalContext: 'B12 deficiency causes both anemia and neurologic problems',
      expectedResults: [
        { test: 'Hemoglobin', expected: 'decreased', rationale: 'Macrocytic anemia' },
        { test: 'MCV', expected: 'elevated', rationale: 'Large red cells from impaired DNA synthesis' },
        { test: 'B12', expected: 'decreased', rationale: 'Deficiency state' },
      ],
      interpretation: 'Macrocytic anemia with neurologic symptoms is B12 deficiency until proven otherwise.',
      teaching: 'B12 deficiency can cause irreversible nerve damage if untreated. The neurologic symptoms can occur even with mild anemia. Common in elderly due to decreased absorption.',
    },
  ],

  limitations: [
    'Single snapshot in time - trends are more informative',
    'Doesnt explain WHY values are abnormal',
    'Normal CBC doesnt rule out many diseases',
    'Need peripheral smear to see cell morphology',
  ],

  whenToExpand: [
    'If WBC high or low, need differential (which types?)',
    'If anemia, need reticulocyte count and iron studies/B12/folate based on MCV',
    'If platelets abnormal, need peripheral smear',
    'If pancytopenia, need bone marrow evaluation',
  ],
};

export const BASIC_METABOLIC_PANEL: LabPanelEducation = {
  id: 'bmp',
  name: 'Basic Metabolic Panel',
  abbreviation: 'BMP',
  category: 'chemistry',

  purpose: 'The BMP checks your kidney function, blood sugar, and electrolytes. Its a snapshot of your bodys basic chemistry and is commonly ordered to monitor medications, check for dehydration, and screen for diabetes and kidney disease.',

  includedTests: ['glucose', 'bun', 'creatinine', 'sodium', 'potassium', 'chloride', 'bicarbonate', 'calcium'],

  overallInterpretation: 'Think of the BMP as checking the "vital signs" of your blood chemistry. Kidneys (BUN, creatinine), sugar (glucose), and the electrolytes that keep your cells functioning properly (sodium, potassium, etc.).',

  patterns: [
    {
      name: 'Dehydration Pattern',
      description: 'Classic findings of volume depletion',
      findings: [
        { test: 'BUN', direction: 'elevated', qualifier: 'BUN/Cr ratio > 20:1' },
        { test: 'Creatinine', direction: 'elevated', qualifier: 'Mild elevation' },
        { test: 'Sodium', direction: 'elevated', qualifier: 'or normal' },
      ],
      suggestiveOf: ['Dehydration', 'Prerenal kidney injury', 'GI losses'],
      nextSteps: ['IV or oral fluid replacement', 'Recheck labs after hydration', 'Find cause of volume loss'],
      educationalContext: 'When you are dry, blood flow to kidneys decreases. The kidneys hold onto more BUN than creatinine, causing the ratio to rise. Sodium concentrates in the remaining fluid.',
    },
    {
      name: 'Diabetic Ketoacidosis Pattern',
      description: 'Life-threatening complication of diabetes',
      findings: [
        { test: 'Glucose', direction: 'elevated', qualifier: 'Often > 300' },
        { test: 'Bicarbonate', direction: 'decreased', qualifier: 'Metabolic acidosis' },
        { test: 'Potassium', direction: 'elevated', qualifier: 'or normal (but total body depleted)' },
        { test: 'BUN/Cr', direction: 'elevated', qualifier: 'Dehydration component' },
      ],
      suggestiveOf: ['DKA', 'Severe hyperglycemia'],
      nextSteps: ['Check blood gas', 'Check ketones', 'IV fluids and insulin', 'Monitor potassium closely'],
      educationalContext: 'In DKA, lack of insulin forces the body to burn fat, producing ketones (acids). Despite high serum potassium, total body potassium is depleted - as acidosis is corrected, potassium will drop and needs replacement.',
    },
    {
      name: 'Chronic Kidney Disease Pattern',
      description: 'Long-standing kidney damage',
      findings: [
        { test: 'Creatinine', direction: 'elevated', qualifier: 'Stable elevation' },
        { test: 'BUN', direction: 'elevated', qualifier: 'Proportionate to Cr' },
        { test: 'Potassium', direction: 'elevated', qualifier: 'Kidneys excrete less' },
        { test: 'Bicarbonate', direction: 'decreased', qualifier: 'Metabolic acidosis' },
      ],
      suggestiveOf: ['Chronic kidney disease', 'Uremia'],
      nextSteps: ['Calculate eGFR to stage', 'Check urine protein', 'Refer to nephrology', 'Review medications for kidney-safe dosing'],
      educationalContext: 'As kidneys fail, they cant excrete waste (Cr, BUN), regulate potassium, or maintain acid-base balance. The BMP abnormalities worsen as kidney function declines. eGFR staging helps predict when dialysis may be needed.',
    },
  ],

  clinicalScenarios: [
    {
      scenario: 'Elderly patient with vomiting and diarrhea for 3 days',
      clinicalContext: 'GI losses cause dehydration and electrolyte abnormalities',
      expectedResults: [
        { test: 'BUN', expected: 'elevated', rationale: 'Prerenal from dehydration' },
        { test: 'Creatinine', expected: 'elevated', rationale: 'Less elevation than BUN' },
        { test: 'Potassium', expected: 'decreased', rationale: 'GI losses rich in potassium' },
        { test: 'Bicarbonate', expected: 'decreased', rationale: 'Can lose bicarb in diarrhea' },
      ],
      interpretation: 'BUN/Cr > 20 with low potassium and bicarb is classic for GI losses with dehydration.',
      teaching: 'The BUN/Cr ratio is extremely helpful: > 20:1 suggests prerenal (dehydration), < 10:1 suggests liver disease or poor nutrition. GI losses are rich in potassium - always check and replace.',
    },
  ],

  limitations: [
    'Creatinine can be normal with 50% kidney function lost',
    'Single electrolyte values less useful than trends',
    'Doesnt distinguish acute from chronic kidney disease',
    'Need additional tests to find CAUSE of abnormalities',
  ],

  whenToExpand: [
    'If kidney function abnormal, add urinalysis and renal ultrasound',
    'If glucose elevated, add HbA1c',
    'If electrolytes abnormal, may need ABG, urine electrolytes',
    'If calcium abnormal, need albumin, PTH, vitamin D',
  ],
};

// ============================================
// Export Collections
// ============================================

export const LAB_TESTS: Record<string, LabTestEducation> = {
  hemoglobin: HEMOGLOBIN,
  wbc: WHITE_BLOOD_CELL_COUNT,
  platelets: PLATELET_COUNT,
  creatinine: CREATININE,
  glucose: GLUCOSE,
};

export const LAB_PANELS: Record<string, LabPanelEducation> = {
  cbc: CBC_PANEL,
  bmp: BASIC_METABOLIC_PANEL,
};

// ============================================
// Helper Functions
// ============================================

export function getLabTest(id: string): LabTestEducation | undefined {
  return LAB_TESTS[id];
}

export function getLabTestByName(name: string): LabTestEducation | undefined {
  const lower = name.toLowerCase();
  return Object.values(LAB_TESTS).find(
    test =>
      test.name.toLowerCase() === lower ||
      test.abbreviations.some(abbr => abbr.toLowerCase() === lower)
  );
}

export function getLabPanel(id: string): LabPanelEducation | undefined {
  return LAB_PANELS[id];
}

export function getLabTestsByCategory(category: LabCategory): LabTestEducation[] {
  return Object.values(LAB_TESTS).filter(test => test.category === category);
}

export function getAllLabTests(): LabTestEducation[] {
  return Object.values(LAB_TESTS);
}

export function getAllLabPanels(): LabPanelEducation[] {
  return Object.values(LAB_PANELS);
}
