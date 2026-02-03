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

// ============================================
// Additional Hematology Tests
// ============================================

const HEMATOCRIT: LabTestEducation = {
  id: 'hematocrit',
  name: 'Hematocrit',
  abbreviations: ['Hct', 'HCT', 'PCV'],
  category: 'hematology',
  specimen: 'whole-blood',
  resultType: 'numeric',
  whatItMeasures: 'The percentage of your blood volume that is made up of red blood cells. If hematocrit is 40%, that means 40% of your blood is red cells and 60% is plasma.',
  physiologicalBasis: {
    analyte: 'Red blood cell volume fraction',
    source: 'Red blood cells produced in bone marrow',
    normalFunction: 'Reflects oxygen-carrying capacity; closely correlates with hemoglobin',
    regulation: 'Same as hemoglobin - EPO from kidneys controls RBC production',
    clearance: 'RBCs removed by spleen after ~120 days',
    involvedOrgans: ['Bone marrow', 'Spleen', 'Kidneys'],
    metabolicPathways: ['Erythropoiesis'],
  },
  referenceRanges: [
    { population: { sex: 'male', ageMin: 18 }, lowValue: 38.8, highValue: 50, unit: '%' },
    { population: { sex: 'female', ageMin: 18 }, lowValue: 34.9, highValue: 44.5, unit: '%' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'A higher percentage of your blood is red cells. This can mean dehydration (less plasma) or true polycythemia (more red cells).',
    pathophysiology: 'Elevated hematocrit increases blood viscosity, which can impair blood flow and increase clot risk.',
    causeCategories: [
      { category: 'Dehydration', description: 'Reduced plasma volume', examples: ['Poor intake', 'Vomiting', 'Burns'] },
      { category: 'Polycythemia', description: 'Increased RBC mass', examples: ['Polycythemia vera', 'Chronic hypoxia', 'EPO-producing tumors'] },
    ],
    commonCauses: [
      { cause: 'Dehydration', mechanism: 'Concentrated blood', typicalLevel: 'mild', associatedFindings: ['Elevated BUN/Cr ratio'], clinicalContext: 'Thirst, dry mucous membranes' },
    ],
    lessCauses: [
      { cause: 'Polycythemia vera', mechanism: 'JAK2 mutation', typicalLevel: 'severe', associatedFindings: ['Elevated all cell lines'], clinicalContext: 'Itching, plethora' },
    ],
    severityGuidance: [
      { level: 'mild', range: '50-54%', clinicalSignificance: 'Mild elevation', typicalCauses: ['Dehydration'], urgency: 'routine' },
      { level: 'severe', range: '>60%', clinicalSignificance: 'High viscosity risk', typicalCauses: ['Polycythemia vera'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Headaches', 'Vision changes', 'Blood clots'],
    followUpTests: ['Hemoglobin', 'RBC count', 'EPO level'],
    questionsForDoctor: ['Is this from dehydration?', 'Do I need further testing?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Less of your blood is red cells - this indicates anemia.',
    pathophysiology: 'Low hematocrit means reduced oxygen delivery to tissues.',
    causeCategories: [
      { category: 'Blood loss', description: 'Acute or chronic bleeding', examples: ['GI bleed', 'Menstruation'] },
      { category: 'Decreased production', description: 'Bone marrow issues', examples: ['Iron deficiency', 'B12 deficiency'] },
    ],
    commonCauses: [
      { cause: 'Iron deficiency anemia', mechanism: 'Cant make hemoglobin without iron', typicalLevel: 'moderate', associatedFindings: ['Low MCV', 'Low ferritin'], clinicalContext: 'Fatigue, heavy periods' },
    ],
    lessCauses: [
      { cause: 'Hemolysis', mechanism: 'RBCs destroyed prematurely', typicalLevel: 'variable', associatedFindings: ['Elevated LDH', 'Low haptoglobin'], clinicalContext: 'Jaundice' },
    ],
    severityGuidance: [
      { level: 'mild', range: '30-35%', clinicalSignificance: 'Mild anemia', typicalCauses: ['Early iron deficiency'], urgency: 'routine' },
      { level: 'severe', range: '<25%', clinicalSignificance: 'May need transfusion', typicalCauses: ['Acute bleeding'], urgency: 'emergent' },
    ],
    worryingFeatures: ['Chest pain', 'Shortness of breath', 'Syncope'],
    followUpTests: ['Iron studies', 'Reticulocyte count', 'B12/folate'],
    questionsForDoctor: ['What is causing my anemia?', 'Do I need iron supplements?'],
  },
  criticalValues: [
    { direction: 'low', threshold: 20, unit: '%', immediateRisk: 'Tissue hypoxia', requiredAction: 'Evaluate for transfusion', timeframe: 'Immediate' },
    { direction: 'high', threshold: 60, unit: '%', immediateRisk: 'Hyperviscosity', requiredAction: 'Phlebotomy evaluation', timeframe: 'Urgent' },
  ],
  relatedTests: [
    { testId: 'hemoglobin', testName: 'Hemoglobin', relationship: 'complements', whenToOrder: 'Always ordered together', interpretationContext: 'Hgb × 3 ≈ Hct' },
  ],
  associatedConditions: [
    { condition: 'Anemia', direction: 'decreased', typicalPattern: 'Parallels hemoglobin', sensitivity: 'high', specificity: 'moderate', notes: 'Non-specific for cause' },
  ],
  interferingFactors: [
    { factor: 'Lipemia', effect: 'falsely-elevated', mechanism: 'Turbidity interference', clinicalRelevance: 'Minor', mitigation: 'Fasting sample' },
  ],
  temporalPatterns: [
    { scenario: 'Acute blood loss', pattern: 'May be normal initially', timeframe: 'Drops over 24-48 hours', clinicalUse: 'Serial monitoring needed' },
  ],
  clinicalPearls: ['Hematocrit lags behind acute blood loss by hours', 'Rule of 3: Hgb × 3 ≈ Hct'],
  patientQuestions: ['Why is my hematocrit different from hemoglobin?', 'What does percentage mean?'],
};

const MCV: LabTestEducation = {
  id: 'mcv',
  name: 'Mean Corpuscular Volume',
  abbreviations: ['MCV'],
  category: 'hematology',
  specimen: 'whole-blood',
  resultType: 'calculated',
  whatItMeasures: 'The average size of your red blood cells in femtoliters (fL). This helps classify the type of anemia you might have.',
  physiologicalBasis: {
    analyte: 'Average RBC volume',
    source: 'Calculated from hematocrit and RBC count',
    normalFunction: 'Normal-sized cells carry oxygen efficiently',
    regulation: 'Cell size depends on hemoglobin synthesis and cell division',
    clearance: 'N/A - calculated value',
    involvedOrgans: ['Bone marrow'],
    metabolicPathways: ['Hemoglobin synthesis', 'DNA synthesis'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 80, highValue: 100, unit: 'fL' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Your red blood cells are larger than normal (macrocytic). This often indicates B12 or folate deficiency, or alcohol use.',
    pathophysiology: 'Large cells result from impaired DNA synthesis - cells grow but cant divide normally.',
    causeCategories: [
      { category: 'Megaloblastic', description: 'B12/folate deficiency', examples: ['Pernicious anemia', 'Dietary deficiency', 'Malabsorption'] },
      { category: 'Non-megaloblastic', description: 'Other causes', examples: ['Alcohol', 'Liver disease', 'Hypothyroidism', 'Reticulocytosis'] },
    ],
    commonCauses: [
      { cause: 'B12 deficiency', mechanism: 'Impaired DNA synthesis', typicalLevel: 'moderate', associatedFindings: ['Low B12', 'Hypersegmented neutrophils'], clinicalContext: 'Neurologic symptoms, glossitis' },
      { cause: 'Alcohol use', mechanism: 'Direct bone marrow toxicity', typicalLevel: 'mild', associatedFindings: ['Elevated GGT', 'Target cells'], clinicalContext: 'History of alcohol use' },
    ],
    lessCauses: [
      { cause: 'MDS', mechanism: 'Dysplastic RBC production', typicalLevel: 'variable', associatedFindings: ['Cytopenias'], clinicalContext: 'Older adults' },
    ],
    severityGuidance: [
      { level: 'mild', range: '100-105 fL', clinicalSignificance: 'Mild macrocytosis', typicalCauses: ['Early B12 deficiency', 'Alcohol'], urgency: 'routine' },
      { level: 'severe', range: '>115 fL', clinicalSignificance: 'Marked macrocytosis', typicalCauses: ['Severe B12/folate deficiency'], urgency: 'soon' },
    ],
    worryingFeatures: ['Neurologic symptoms', 'Pancytopenia'],
    followUpTests: ['B12', 'Folate', 'Reticulocyte count', 'Peripheral smear'],
    questionsForDoctor: ['Do I need B12 testing?', 'Could this be from alcohol?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Your red blood cells are smaller than normal (microcytic). This usually indicates iron deficiency or thalassemia.',
    pathophysiology: 'Small cells result from insufficient hemoglobin production - less hemoglobin means smaller cells.',
    causeCategories: [
      { category: 'Iron deficiency', description: 'Most common cause', examples: ['Blood loss', 'Poor absorption', 'Increased needs'] },
      { category: 'Thalassemia', description: 'Genetic hemoglobin disorder', examples: ['Alpha thalassemia', 'Beta thalassemia'] },
      { category: 'Chronic disease', description: 'Inflammation blocks iron', examples: ['Chronic infection', 'Autoimmune disease'] },
    ],
    commonCauses: [
      { cause: 'Iron deficiency', mechanism: 'Cant make enough hemoglobin', typicalLevel: 'moderate', associatedFindings: ['Low ferritin', 'Low iron', 'High TIBC'], clinicalContext: 'Heavy periods, GI blood loss' },
    ],
    lessCauses: [
      { cause: 'Thalassemia trait', mechanism: 'Genetic - reduced globin chain', typicalLevel: 'mild', associatedFindings: ['Normal ferritin', 'Target cells', 'High RBC count'], clinicalContext: 'Mediterranean/Asian ancestry' },
    ],
    severityGuidance: [
      { level: 'mild', range: '75-80 fL', clinicalSignificance: 'Mild microcytosis', typicalCauses: ['Early iron deficiency', 'Thalassemia trait'], urgency: 'routine' },
      { level: 'severe', range: '<70 fL', clinicalSignificance: 'Marked microcytosis', typicalCauses: ['Severe iron deficiency'], urgency: 'soon' },
    ],
    worryingFeatures: ['Very low MCV with normal ferritin (think thalassemia)', 'Concurrent low platelets'],
    followUpTests: ['Iron studies', 'Ferritin', 'Hemoglobin electrophoresis'],
    questionsForDoctor: ['Do I need iron supplements?', 'Could this be thalassemia?'],
  },
  relatedTests: [
    { testId: 'ferritin', testName: 'Ferritin', relationship: 'explains', whenToOrder: 'When MCV low', interpretationContext: 'Low ferritin confirms iron deficiency' },
  ],
  associatedConditions: [
    { condition: 'Iron deficiency anemia', direction: 'decreased', typicalPattern: 'Low MCV with low ferritin', sensitivity: 'high', specificity: 'moderate', notes: 'Most common cause of microcytosis' },
    { condition: 'B12 deficiency', direction: 'elevated', typicalPattern: 'High MCV with low B12', sensitivity: 'high', specificity: 'moderate', notes: 'Check for neurologic symptoms' },
  ],
  interferingFactors: [
    { factor: 'Reticulocytosis', effect: 'falsely-elevated', mechanism: 'Reticulocytes are larger', clinicalRelevance: 'Moderate', mitigation: 'Check reticulocyte count' },
  ],
  temporalPatterns: [
    { scenario: 'Starting iron therapy', pattern: 'MCV rises slowly', timeframe: 'Weeks to months', clinicalUse: 'Monitor response' },
  ],
  clinicalPearls: ['MCV is key to classifying anemia', 'Mentzer index (MCV/RBC) >13 suggests iron deficiency, <13 suggests thalassemia'],
  patientQuestions: ['What does cell size tell you?', 'Why are my cells small/large?'],
};

const RDW: LabTestEducation = {
  id: 'rdw',
  name: 'Red Cell Distribution Width',
  abbreviations: ['RDW', 'RDW-CV'],
  category: 'hematology',
  specimen: 'whole-blood',
  resultType: 'calculated',
  whatItMeasures: 'How much variation there is in the size of your red blood cells. A high RDW means cells vary a lot in size (anisocytosis).',
  physiologicalBasis: {
    analyte: 'Coefficient of variation of RBC volume',
    source: 'Calculated from RBC size distribution',
    normalFunction: 'Uniform cell size indicates stable production',
    regulation: 'Reflects bone marrow response and nutrient status',
    clearance: 'N/A - calculated value',
    involvedOrgans: ['Bone marrow'],
    metabolicPathways: ['Erythropoiesis'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 11.5, highValue: 14.5, unit: '%' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Your red blood cells vary a lot in size. This often means your bone marrow is responding to something - like making new cells after blood loss or nutrient deficiency.',
    pathophysiology: 'High RDW indicates a mixed population of different-sized cells, often from active bone marrow response.',
    causeCategories: [
      { category: 'Nutritional deficiency', description: 'Iron, B12, or folate', examples: ['Iron deficiency anemia', 'B12 deficiency'] },
      { category: 'Mixed anemia', description: 'Combined deficiencies', examples: ['Iron + B12 deficiency'] },
      { category: 'Recovery', description: 'Bone marrow response', examples: ['Post-treatment', 'Post-transfusion'] },
    ],
    commonCauses: [
      { cause: 'Iron deficiency', mechanism: 'Mix of old normal and new small cells', typicalLevel: 'moderate', associatedFindings: ['Low MCV', 'Low ferritin'], clinicalContext: 'Fatigue, blood loss' },
    ],
    lessCauses: [
      { cause: 'Myelodysplastic syndrome', mechanism: 'Dysplastic cell production', typicalLevel: 'moderate', associatedFindings: ['Cytopenias'], clinicalContext: 'Older adults' },
    ],
    severityGuidance: [
      { level: 'mild', range: '14.5-16%', clinicalSignificance: 'Mild variation', typicalCauses: ['Early deficiency'], urgency: 'routine' },
      { level: 'moderate', range: '>18%', clinicalSignificance: 'Significant anisocytosis', typicalCauses: ['Active disease'], urgency: 'soon' },
    ],
    worryingFeatures: ['Very high RDW with normal MCV (mixed deficiency)', 'Progressive increase'],
    followUpTests: ['Iron studies', 'B12', 'Folate', 'Reticulocyte count'],
    questionsForDoctor: ['What is causing the variation in my cell sizes?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Your red blood cells are very uniform in size. This is usually normal or can be seen in some genetic conditions.',
    pathophysiology: 'Low RDW is rarely clinically significant.',
    causeCategories: [
      { category: 'Normal', description: 'Healthy state', examples: ['Normal finding'] },
    ],
    commonCauses: [
      { cause: 'Normal', mechanism: 'Uniform cell production', typicalLevel: 'mild', associatedFindings: ['Normal CBC'], clinicalContext: 'Healthy individual' },
    ],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'mcv', testName: 'MCV', relationship: 'complements', whenToOrder: 'Always together in CBC', interpretationContext: 'MCV + RDW helps classify anemia' },
  ],
  associatedConditions: [
    { condition: 'Iron deficiency', direction: 'elevated', typicalPattern: 'High RDW early finding', sensitivity: 'high', specificity: 'low', notes: 'RDW rises before MCV falls' },
  ],
  interferingFactors: [],
  temporalPatterns: [
    { scenario: 'Starting iron therapy', pattern: 'RDW increases then normalizes', timeframe: 'Weeks', clinicalUse: 'Early response marker' },
  ],
  clinicalPearls: ['High RDW with normal MCV suggests mixed deficiency or early single deficiency', 'RDW elevated early in iron deficiency before MCV drops'],
  patientQuestions: ['Why do my cells vary in size?'],
};

const RETICULOCYTE_COUNT: LabTestEducation = {
  id: 'reticulocyte-count',
  name: 'Reticulocyte Count',
  abbreviations: ['Retic', 'Retic count'],
  category: 'hematology',
  specimen: 'whole-blood',
  resultType: 'numeric',
  whatItMeasures: 'The percentage of young, immature red blood cells in your blood. This tells us how actively your bone marrow is making new red cells.',
  physiologicalBasis: {
    analyte: 'Immature red blood cells',
    source: 'Released from bone marrow 1-2 days before full maturation',
    normalFunction: 'Indicator of bone marrow red cell production rate',
    regulation: 'EPO stimulates increased reticulocyte release',
    clearance: 'Mature into RBCs within 1-2 days in circulation',
    involvedOrgans: ['Bone marrow', 'Spleen'],
    metabolicPathways: ['Erythropoiesis'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 0.5, highValue: 2.5, unit: '%' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Your bone marrow is actively making red blood cells. This is the appropriate response to anemia from blood loss or hemolysis.',
    pathophysiology: 'High reticulocytes indicate the bone marrow is responding to need for more RBCs.',
    causeCategories: [
      { category: 'Hemolysis', description: 'RBCs being destroyed', examples: ['Autoimmune hemolytic anemia', 'Sickle cell crisis'] },
      { category: 'Blood loss', description: 'Recovering from bleeding', examples: ['Post-hemorrhage', 'Post-surgery'] },
      { category: 'Treatment response', description: 'Response to therapy', examples: ['Iron therapy', 'B12 therapy', 'EPO therapy'] },
    ],
    commonCauses: [
      { cause: 'Hemolytic anemia', mechanism: 'Marrow compensating for destruction', typicalLevel: 'moderate', associatedFindings: ['Low haptoglobin', 'Elevated LDH', 'Elevated bilirubin'], clinicalContext: 'Jaundice, dark urine' },
      { cause: 'Recovery from blood loss', mechanism: 'Marrow regenerating', typicalLevel: 'moderate', associatedFindings: ['History of bleeding'], clinicalContext: 'Post-surgical, trauma' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '2.5-5%', clinicalSignificance: 'Mild elevation', typicalCauses: ['Mild hemolysis', 'Early treatment response'], urgency: 'routine' },
      { level: 'moderate', range: '>10%', clinicalSignificance: 'Brisk response', typicalCauses: ['Active hemolysis', 'Major blood loss'], urgency: 'soon' },
    ],
    worryingFeatures: ['Very high with worsening anemia (cant keep up)'],
    followUpTests: ['LDH', 'Haptoglobin', 'Bilirubin', 'Direct Coombs'],
    questionsForDoctor: ['Is my bone marrow responding appropriately?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Your bone marrow is not making enough new red blood cells. This suggests a production problem rather than blood loss.',
    pathophysiology: 'Low reticulocytes with anemia indicates bone marrow failure or lack of stimulation/nutrients.',
    causeCategories: [
      { category: 'Nutritional deficiency', description: 'Lacking building blocks', examples: ['Iron deficiency', 'B12 deficiency'] },
      { category: 'Bone marrow failure', description: 'Marrow cant produce', examples: ['Aplastic anemia', 'Myelodysplasia', 'Chemotherapy effect'] },
      { category: 'Chronic disease', description: 'Suppressed production', examples: ['Anemia of chronic disease', 'Kidney disease (low EPO)'] },
    ],
    commonCauses: [
      { cause: 'Iron deficiency', mechanism: 'Cant make hemoglobin', typicalLevel: 'mild', associatedFindings: ['Low MCV', 'Low ferritin'], clinicalContext: 'Chronic blood loss' },
      { cause: 'Chronic kidney disease', mechanism: 'Low EPO production', typicalLevel: 'moderate', associatedFindings: ['Elevated creatinine'], clinicalContext: 'Known CKD' },
    ],
    lessCauses: [
      { cause: 'Aplastic anemia', mechanism: 'Bone marrow failure', typicalLevel: 'severe', associatedFindings: ['Pancytopenia'], clinicalContext: 'All cell lines affected' },
    ],
    severityGuidance: [
      { level: 'mild', range: '0.3-0.5%', clinicalSignificance: 'Mildly reduced production', typicalCauses: ['Early deficiency'], urgency: 'routine' },
      { level: 'severe', range: '<0.1%', clinicalSignificance: 'Severely reduced production', typicalCauses: ['Bone marrow failure'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Very low with severe anemia', 'Pancytopenia'],
    followUpTests: ['Iron studies', 'B12', 'Folate', 'EPO level', 'Bone marrow biopsy if severe'],
    questionsForDoctor: ['Why isnt my bone marrow making enough cells?'],
  },
  relatedTests: [
    { testId: 'hemoglobin', testName: 'Hemoglobin', relationship: 'complements', whenToOrder: 'Always with anemia workup', interpretationContext: 'Helps classify anemia as production vs destruction problem' },
  ],
  associatedConditions: [
    { condition: 'Hemolytic anemia', direction: 'elevated', typicalPattern: 'High retics, low Hgb, high LDH', sensitivity: 'high', specificity: 'moderate', notes: 'Appropriate response' },
    { condition: 'Aplastic anemia', direction: 'decreased', typicalPattern: 'Low retics, low all counts', sensitivity: 'high', specificity: 'moderate', notes: 'Marrow failure' },
  ],
  interferingFactors: [],
  temporalPatterns: [
    { scenario: 'Starting B12 for deficiency', pattern: 'Retics peak at 5-7 days', timeframe: '1 week', clinicalUse: 'Confirms diagnosis and response' },
  ],
  clinicalPearls: ['Reticulocyte count is KEY to classifying anemia', 'High retics = destruction/loss problem, Low retics = production problem', 'Retic index corrects for degree of anemia'],
  patientQuestions: ['What does this tell you about my bone marrow?'],
};

const BUN: LabTestEducation = {
  id: 'bun',
  name: 'Blood Urea Nitrogen',
  abbreviations: ['BUN'],
  category: 'renal',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'The amount of urea nitrogen in your blood. Urea is a waste product from protein breakdown that your kidneys filter out.',
  physiologicalBasis: {
    analyte: 'Urea nitrogen',
    source: 'Liver converts ammonia (from protein metabolism) to urea',
    normalFunction: 'Waste product of protein metabolism',
    regulation: 'Affected by protein intake, hydration, kidney function, and liver function',
    clearance: 'Filtered by kidneys into urine',
    involvedOrgans: ['Liver (production)', 'Kidneys (excretion)'],
    metabolicPathways: ['Urea cycle', 'Protein metabolism'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 7, highValue: 20, unit: 'mg/dL' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Your kidneys may not be filtering waste as well, or you may be dehydrated. The BUN/creatinine ratio helps distinguish the cause.',
    pathophysiology: 'BUN rises with reduced kidney filtration, dehydration, high protein intake, or GI bleeding.',
    causeCategories: [
      { category: 'Prerenal', description: 'Reduced blood flow to kidneys', examples: ['Dehydration', 'Heart failure', 'GI bleeding'] },
      { category: 'Renal', description: 'Kidney damage', examples: ['Acute kidney injury', 'Chronic kidney disease'] },
      { category: 'Postrenal', description: 'Urinary obstruction', examples: ['Kidney stones', 'BPH', 'Tumor'] },
    ],
    commonCauses: [
      { cause: 'Dehydration', mechanism: 'Concentrated blood, increased reabsorption', typicalLevel: 'mild', associatedFindings: ['BUN/Cr >20:1'], clinicalContext: 'Poor intake, vomiting' },
      { cause: 'GI bleeding', mechanism: 'Blood protein digested and converted to urea', typicalLevel: 'moderate', associatedFindings: ['BUN/Cr >20:1', 'Anemia'], clinicalContext: 'Melena, hematemesis' },
    ],
    lessCauses: [
      { cause: 'High protein diet', mechanism: 'More substrate for urea production', typicalLevel: 'mild', associatedFindings: ['Normal creatinine'], clinicalContext: 'Diet history' },
    ],
    severityGuidance: [
      { level: 'mild', range: '20-30 mg/dL', clinicalSignificance: 'Mild elevation', typicalCauses: ['Dehydration', 'High protein'], urgency: 'routine' },
      { level: 'severe', range: '>100 mg/dL', clinicalSignificance: 'Severe azotemia', typicalCauses: ['Severe kidney failure'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Rising BUN with rising creatinine', 'Symptoms of uremia'],
    followUpTests: ['Creatinine', 'BUN/Cr ratio', 'Urinalysis', 'Renal ultrasound'],
    questionsForDoctor: ['Is this from dehydration or kidney problems?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low BUN is usually not concerning. It can be seen with low protein intake, liver disease, or overhydration.',
    pathophysiology: 'Low BUN reflects decreased urea production or increased excretion.',
    causeCategories: [
      { category: 'Decreased production', description: 'Liver disease or low protein', examples: ['Liver failure', 'Malnutrition'] },
      { category: 'Increased excretion', description: 'Excess fluid', examples: ['Overhydration', 'SIADH'] },
    ],
    commonCauses: [
      { cause: 'Low protein diet', mechanism: 'Less substrate for urea', typicalLevel: 'mild', associatedFindings: ['Normal liver enzymes'], clinicalContext: 'Vegetarian diet' },
    ],
    lessCauses: [
      { cause: 'Liver failure', mechanism: 'Cant convert ammonia to urea', typicalLevel: 'moderate', associatedFindings: ['Elevated ammonia', 'Abnormal LFTs'], clinicalContext: 'Known liver disease' },
    ],
    severityGuidance: [],
    worryingFeatures: ['Very low with elevated ammonia (liver failure)'],
    followUpTests: ['Liver function tests', 'Ammonia level'],
    questionsForDoctor: ['Should I eat more protein?'],
  },
  criticalValues: [
    { direction: 'high', threshold: 100, unit: 'mg/dL', immediateRisk: 'Uremia', requiredAction: 'Evaluate for dialysis', timeframe: 'Urgent' },
  ],
  relatedTests: [
    { testId: 'creatinine', testName: 'Creatinine', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'BUN/Cr ratio helps identify cause' },
  ],
  associatedConditions: [
    { condition: 'Acute kidney injury', direction: 'elevated', typicalPattern: 'Rising BUN and Cr', sensitivity: 'high', specificity: 'moderate', notes: 'Check BUN/Cr ratio' },
    { condition: 'Dehydration', direction: 'elevated', typicalPattern: 'BUN/Cr >20:1', sensitivity: 'moderate', specificity: 'moderate', notes: 'Prerenal pattern' },
  ],
  interferingFactors: [
    { factor: 'High protein meal', effect: 'falsely-elevated', mechanism: 'More urea production', clinicalRelevance: 'Minor', mitigation: 'Fasting not required but note diet' },
  ],
  temporalPatterns: [
    { scenario: 'IV fluid resuscitation', pattern: 'BUN falls with hydration', timeframe: '24-48 hours', clinicalUse: 'Confirms prerenal cause' },
  ],
  clinicalPearls: ['BUN/Cr ratio >20:1 suggests prerenal cause', 'GI bleeding raises BUN disproportionately (digested blood protein)', 'BUN less reliable than creatinine for kidney function'],
  patientQuestions: ['Why do you check BUN with creatinine?', 'What is the ratio?'],
};

// ============================================
// Electrolytes
// ============================================

const SODIUM: LabTestEducation = {
  id: 'sodium',
  name: 'Sodium',
  abbreviations: ['Na', 'Na+'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'The concentration of sodium in your blood. Sodium is essential for nerve function, muscle contraction, and maintaining fluid balance.',
  physiologicalBasis: {
    analyte: 'Sodium ions',
    source: 'Dietary intake',
    normalFunction: 'Maintains fluid balance, nerve impulses, muscle function',
    regulation: 'ADH controls water retention; aldosterone controls sodium retention',
    clearance: 'Kidneys excrete excess sodium',
    involvedOrgans: ['Kidneys', 'Adrenal glands', 'Brain (hypothalamus)'],
    metabolicPathways: ['RAAS system', 'ADH pathway'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 136, highValue: 145, unit: 'mEq/L' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Hypernatremia usually means you have lost more water than sodium - you are dehydrated.',
    pathophysiology: 'High sodium indicates free water deficit relative to sodium.',
    causeCategories: [
      { category: 'Water loss', description: 'Lost more water than sodium', examples: ['Diarrhea', 'Sweating', 'Diabetes insipidus'] },
      { category: 'Inadequate intake', description: 'Not drinking enough', examples: ['Altered mental status', 'No access to water'] },
    ],
    commonCauses: [
      { cause: 'Dehydration', mechanism: 'Water loss exceeds sodium loss', typicalLevel: 'mild', associatedFindings: ['Thirst', 'Elevated BUN'], clinicalContext: 'Poor intake, illness' },
    ],
    lessCauses: [
      { cause: 'Diabetes insipidus', mechanism: 'Kidneys cant concentrate urine', typicalLevel: 'moderate', associatedFindings: ['Polyuria', 'Dilute urine'], clinicalContext: 'Pituitary or kidney problem' },
    ],
    severityGuidance: [
      { level: 'mild', range: '146-150 mEq/L', clinicalSignificance: 'Mild dehydration', typicalCauses: ['Inadequate fluid intake'], urgency: 'routine' },
      { level: 'severe', range: '>160 mEq/L', clinicalSignificance: 'Risk of brain damage', typicalCauses: ['Severe dehydration'], urgency: 'emergent' },
    ],
    worryingFeatures: ['Confusion', 'Lethargy', 'Seizures'],
    followUpTests: ['Urine osmolality', 'Urine sodium', 'Serum osmolality'],
    questionsForDoctor: ['How should I increase my fluid intake?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Hyponatremia means you have too much water relative to sodium. This is the most common electrolyte abnormality.',
    pathophysiology: 'Low sodium reflects excess water relative to sodium - dilutional.',
    causeCategories: [
      { category: 'Excess water', description: 'Too much free water', examples: ['SIADH', 'Psychogenic polydipsia'] },
      { category: 'Sodium loss', description: 'Losing sodium', examples: ['Diuretics', 'Vomiting', 'Adrenal insufficiency'] },
      { category: 'Dilutional', description: 'Fluid overload states', examples: ['Heart failure', 'Cirrhosis', 'Nephrotic syndrome'] },
    ],
    commonCauses: [
      { cause: 'Thiazide diuretics', mechanism: 'Sodium wasting', typicalLevel: 'moderate', associatedFindings: ['Medication history'], clinicalContext: 'On HCTZ, chlorthalidone' },
      { cause: 'SIADH', mechanism: 'Inappropriate ADH causes water retention', typicalLevel: 'moderate', associatedFindings: ['Low urine output', 'Concentrated urine'], clinicalContext: 'Post-surgery, lung disease, CNS disease' },
    ],
    lessCauses: [
      { cause: 'Adrenal insufficiency', mechanism: 'Lack of aldosterone', typicalLevel: 'moderate', associatedFindings: ['High potassium', 'Hypotension'], clinicalContext: 'Fatigue, hyperpigmentation' },
    ],
    severityGuidance: [
      { level: 'mild', range: '130-135 mEq/L', clinicalSignificance: 'Usually asymptomatic', typicalCauses: ['Mild SIADH', 'Diuretics'], urgency: 'routine' },
      { level: 'severe', range: '<120 mEq/L', clinicalSignificance: 'Risk of seizures, brain edema', typicalCauses: ['Acute water intoxication'], urgency: 'emergent' },
    ],
    worryingFeatures: ['Confusion', 'Nausea', 'Seizures', 'Rapid development'],
    followUpTests: ['Serum osmolality', 'Urine sodium', 'Urine osmolality', 'TSH', 'Cortisol'],
    questionsForDoctor: ['Should I restrict my fluid intake?', 'Is this from my medication?'],
  },
  criticalValues: [
    { direction: 'low', threshold: 120, unit: 'mEq/L', immediateRisk: 'Seizures', requiredAction: 'Careful correction', timeframe: 'Emergent' },
    { direction: 'high', threshold: 160, unit: 'mEq/L', immediateRisk: 'Brain injury', requiredAction: 'Careful rehydration', timeframe: 'Emergent' },
  ],
  relatedTests: [
    { testId: 'potassium', testName: 'Potassium', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'Part of electrolyte panel' },
  ],
  associatedConditions: [
    { condition: 'SIADH', direction: 'decreased', typicalPattern: 'Low Na, concentrated urine, euvolemic', sensitivity: 'high', specificity: 'moderate', notes: 'Diagnosis of exclusion' },
  ],
  interferingFactors: [
    { factor: 'Hyperglycemia', effect: 'falsely-decreased', mechanism: 'Water shifts to blood diluting sodium', clinicalRelevance: 'Important', mitigation: 'Correct sodium for glucose >100' },
  ],
  temporalPatterns: [
    { scenario: 'SIADH treatment', pattern: 'Gradual rise with fluid restriction', timeframe: 'Days', clinicalUse: 'Avoid correcting >8-10 mEq/day' },
  ],
  clinicalPearls: ['Correct sodium 1.6 mEq/L for every 100 mg/dL glucose >100', 'Never correct chronic hyponatremia faster than 8-10 mEq/day (risk of osmotic demyelination)', 'Most hyponatremia is dilutional, not from salt loss'],
  patientQuestions: ['Why is my sodium low?', 'Should I eat more salt?'],
};

const POTASSIUM: LabTestEducation = {
  id: 'potassium',
  name: 'Potassium',
  abbreviations: ['K', 'K+'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'The concentration of potassium in your blood. Potassium is critical for heart rhythm and muscle function.',
  physiologicalBasis: {
    analyte: 'Potassium ions',
    source: 'Dietary intake (fruits, vegetables)',
    normalFunction: 'Maintains cell membrane potential, essential for heart and muscle function',
    regulation: 'Aldosterone increases excretion; insulin shifts K into cells',
    clearance: 'Kidneys excrete ~90% of daily intake',
    involvedOrgans: ['Kidneys', 'Adrenal glands', 'GI tract'],
    metabolicPathways: ['RAAS system', 'Insulin signaling'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 3.5, highValue: 5.0, unit: 'mEq/L' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High potassium (hyperkalemia) is dangerous because it can cause fatal heart arrhythmias.',
    pathophysiology: 'Potassium rises when kidneys cant excrete it, cells release it, or intake is excessive.',
    causeCategories: [
      { category: 'Decreased excretion', description: 'Kidneys cant eliminate K', examples: ['Kidney failure', 'ACE inhibitors', 'K-sparing diuretics'] },
      { category: 'Cell shift', description: 'K leaving cells', examples: ['Acidosis', 'Cell lysis', 'Insulin deficiency'] },
      { category: 'Pseudohyperkalemia', description: 'Lab artifact', examples: ['Hemolysis', 'Prolonged tourniquet'] },
    ],
    commonCauses: [
      { cause: 'Kidney disease', mechanism: 'Cant excrete potassium', typicalLevel: 'moderate', associatedFindings: ['Elevated creatinine'], clinicalContext: 'Known CKD' },
      { cause: 'ACE inhibitors/ARBs', mechanism: 'Block aldosterone effect', typicalLevel: 'mild', associatedFindings: ['Medication history'], clinicalContext: 'On lisinopril, losartan' },
    ],
    lessCauses: [
      { cause: 'Addisons disease', mechanism: 'No aldosterone', typicalLevel: 'moderate', associatedFindings: ['Low sodium', 'Hypotension'], clinicalContext: 'Fatigue, hyperpigmentation' },
    ],
    severityGuidance: [
      { level: 'mild', range: '5.0-5.5 mEq/L', clinicalSignificance: 'Recheck, assess cause', typicalCauses: ['Medication', 'Hemolysis'], urgency: 'soon' },
      { level: 'severe', range: '>6.5 mEq/L', clinicalSignificance: 'Cardiac arrest risk', typicalCauses: ['Renal failure'], urgency: 'emergent' },
    ],
    worryingFeatures: ['ECG changes (peaked T waves)', 'Muscle weakness', 'Palpitations'],
    followUpTests: ['ECG', 'Repeat potassium', 'BUN/Creatinine', 'Review medications'],
    questionsForDoctor: ['Do I need to avoid high-potassium foods?', 'Is my medication causing this?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low potassium (hypokalemia) can cause muscle weakness and dangerous heart rhythms.',
    pathophysiology: 'Potassium falls from GI losses, kidney losses, or shifting into cells.',
    causeCategories: [
      { category: 'GI losses', description: 'Lost through digestive tract', examples: ['Vomiting', 'Diarrhea', 'NG suction'] },
      { category: 'Renal losses', description: 'Kidneys wasting K', examples: ['Diuretics', 'Hyperaldosteronism', 'RTA'] },
      { category: 'Cell shift', description: 'K moving into cells', examples: ['Insulin', 'Beta-agonists', 'Alkalosis'] },
    ],
    commonCauses: [
      { cause: 'Diuretics', mechanism: 'Increase renal K excretion', typicalLevel: 'moderate', associatedFindings: ['Medication history'], clinicalContext: 'On furosemide, HCTZ' },
      { cause: 'Vomiting/Diarrhea', mechanism: 'GI losses', typicalLevel: 'moderate', associatedFindings: ['Metabolic alkalosis (vomiting)', 'Metabolic acidosis (diarrhea)'], clinicalContext: 'Recent illness' },
    ],
    lessCauses: [
      { cause: 'Primary hyperaldosteronism', mechanism: 'Excess aldosterone', typicalLevel: 'moderate', associatedFindings: ['Hypertension', 'Low renin'], clinicalContext: 'Resistant hypertension' },
    ],
    severityGuidance: [
      { level: 'mild', range: '3.0-3.5 mEq/L', clinicalSignificance: 'Usually asymptomatic', typicalCauses: ['Mild diuretic effect'], urgency: 'routine' },
      { level: 'severe', range: '<2.5 mEq/L', clinicalSignificance: 'Risk of arrhythmias', typicalCauses: ['Severe GI losses'], urgency: 'emergent' },
    ],
    worryingFeatures: ['Muscle weakness', 'ECG changes (U waves)', 'Palpitations'],
    followUpTests: ['ECG', 'Magnesium', 'Urine potassium'],
    questionsForDoctor: ['Do I need potassium supplements?', 'Should I eat more bananas?'],
  },
  criticalValues: [
    { direction: 'low', threshold: 2.5, unit: 'mEq/L', immediateRisk: 'Arrhythmia', requiredAction: 'IV potassium', timeframe: 'Emergent' },
    { direction: 'high', threshold: 6.5, unit: 'mEq/L', immediateRisk: 'Cardiac arrest', requiredAction: 'Emergent treatment', timeframe: 'Emergent' },
  ],
  relatedTests: [
    { testId: 'magnesium', testName: 'Magnesium', relationship: 'explains', whenToOrder: 'When K low', interpretationContext: 'Low Mg prevents K repletion' },
  ],
  associatedConditions: [
    { condition: 'Chronic kidney disease', direction: 'elevated', typicalPattern: 'High K with high Cr', sensitivity: 'high', specificity: 'moderate', notes: 'Monitor closely' },
  ],
  interferingFactors: [
    { factor: 'Hemolysis', effect: 'falsely-elevated', mechanism: 'K released from lysed RBCs', clinicalRelevance: 'Very important', mitigation: 'Redraw if hemolyzed' },
  ],
  temporalPatterns: [
    { scenario: 'Post-diuretic dose', pattern: 'K drops 4-6 hours after dose', timeframe: 'Hours', clinicalUse: 'Time blood draw appropriately' },
  ],
  clinicalPearls: ['Always check magnesium when treating hypokalemia - low Mg prevents K repletion', 'Hemolysis is the most common cause of spurious hyperkalemia - redraw if unexpected', 'ECG changes may occur before K reaches critical values'],
  patientQuestions: ['What foods are high in potassium?', 'Can this cause heart problems?'],
};

const AST: LabTestEducation = {
  id: 'ast',
  name: 'Aspartate Aminotransferase',
  abbreviations: ['AST', 'SGOT'],
  category: 'liver',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'An enzyme found in liver, heart, and muscle cells. When these cells are damaged, AST leaks into the blood.',
  physiologicalBasis: {
    analyte: 'AST enzyme',
    source: 'Liver, heart, skeletal muscle, kidneys, brain, RBCs',
    normalFunction: 'Catalyzes amino acid metabolism',
    regulation: 'Released when cells are damaged',
    clearance: 'Half-life ~17 hours',
    involvedOrgans: ['Liver', 'Heart', 'Muscle'],
    metabolicPathways: ['Amino acid metabolism'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 10, highValue: 40, unit: 'U/L' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Elevated AST indicates cell damage, usually liver or muscle. Compare with ALT to help identify the source.',
    pathophysiology: 'AST is released when cells are injured. Its less specific for liver than ALT.',
    causeCategories: [
      { category: 'Liver disease', description: 'Hepatocyte injury', examples: ['Hepatitis', 'Cirrhosis', 'Fatty liver', 'Drug-induced'] },
      { category: 'Muscle damage', description: 'Skeletal or cardiac muscle', examples: ['Rhabdomyolysis', 'Myocardial infarction', 'Intense exercise'] },
      { category: 'Hemolysis', description: 'RBC breakdown', examples: ['Hemolytic anemia'] },
    ],
    commonCauses: [
      { cause: 'Non-alcoholic fatty liver', mechanism: 'Hepatocyte inflammation', typicalLevel: 'mild', associatedFindings: ['ALT > AST', 'Elevated BMI'], clinicalContext: 'Metabolic syndrome' },
      { cause: 'Alcohol-related liver disease', mechanism: 'Direct toxicity', typicalLevel: 'moderate', associatedFindings: ['AST:ALT > 2:1', 'Elevated GGT'], clinicalContext: 'Alcohol history' },
    ],
    lessCauses: [
      { cause: 'Acute viral hepatitis', mechanism: 'Viral cytopathic effect', typicalLevel: 'severe', associatedFindings: ['AST and ALT in thousands'], clinicalContext: 'Acute illness, jaundice' },
    ],
    severityGuidance: [
      { level: 'mild', range: '40-120 U/L', clinicalSignificance: '<3x normal', typicalCauses: ['Fatty liver', 'Medications'], urgency: 'routine' },
      { level: 'moderate', range: '120-400 U/L', clinicalSignificance: '3-10x normal', typicalCauses: ['Chronic hepatitis', 'Alcohol'], urgency: 'soon' },
      { level: 'severe', range: '>1000 U/L', clinicalSignificance: '>25x normal', typicalCauses: ['Acute hepatitis', 'Ischemia', 'Toxin'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Jaundice', 'Coagulopathy', 'Very high levels'],
    followUpTests: ['ALT', 'Bilirubin', 'Alkaline phosphatase', 'GGT', 'Hepatitis serologies'],
    questionsForDoctor: ['Is this from my liver?', 'Could it be from my muscles?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low AST is not clinically significant.',
    pathophysiology: 'Low AST has no clinical meaning.',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'alt', testName: 'ALT', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'AST:ALT ratio helps identify cause' },
  ],
  associatedConditions: [
    { condition: 'Alcoholic liver disease', direction: 'elevated', typicalPattern: 'AST:ALT >2:1', sensitivity: 'moderate', specificity: 'moderate', notes: 'Classic ratio' },
  ],
  interferingFactors: [
    { factor: 'Hemolysis', effect: 'falsely-elevated', mechanism: 'AST in RBCs', clinicalRelevance: 'Moderate', mitigation: 'Redraw if hemolyzed' },
  ],
  temporalPatterns: [
    { scenario: 'Acute hepatitis', pattern: 'Peaks then falls over weeks', timeframe: 'Weeks', clinicalUse: 'Follow for recovery' },
  ],
  clinicalPearls: ['AST:ALT >2:1 suggests alcoholic liver disease', 'AST is less specific for liver than ALT (also in muscle)', 'Very high AST (>10,000) suggests ischemia or toxin'],
  patientQuestions: ['What does AST tell you about my liver?', 'Why check both AST and ALT?'],
};

const ALT: LabTestEducation = {
  id: 'alt',
  name: 'Alanine Aminotransferase',
  abbreviations: ['ALT', 'SGPT'],
  category: 'liver',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'An enzyme found primarily in the liver. When liver cells are damaged, ALT leaks into the blood. Its more specific for liver than AST.',
  physiologicalBasis: {
    analyte: 'ALT enzyme',
    source: 'Primarily liver (small amounts in kidney, heart, muscle)',
    normalFunction: 'Catalyzes amino acid metabolism',
    regulation: 'Released when hepatocytes are damaged',
    clearance: 'Half-life ~47 hours',
    involvedOrgans: ['Liver'],
    metabolicPathways: ['Amino acid metabolism'],
  },
  referenceRanges: [
    { population: { sex: 'male' }, lowValue: 10, highValue: 40, unit: 'U/L' },
    { population: { sex: 'female' }, lowValue: 7, highValue: 35, unit: 'U/L' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Elevated ALT indicates liver cell damage. Its more specific for liver than AST.',
    pathophysiology: 'ALT elevation reflects hepatocyte injury from various causes.',
    causeCategories: [
      { category: 'Hepatocellular injury', description: 'Liver cell damage', examples: ['Viral hepatitis', 'Drug-induced', 'Fatty liver', 'Autoimmune hepatitis'] },
      { category: 'Ischemia', description: 'Lack of blood flow', examples: ['Shock liver', 'Heart failure'] },
    ],
    commonCauses: [
      { cause: 'Non-alcoholic fatty liver disease', mechanism: 'Steatohepatitis', typicalLevel: 'mild', associatedFindings: ['ALT > AST', 'Obesity'], clinicalContext: 'Metabolic syndrome' },
      { cause: 'Medications', mechanism: 'Drug-induced hepatotoxicity', typicalLevel: 'variable', associatedFindings: ['Temporal relationship to medication'], clinicalContext: 'New medication' },
    ],
    lessCauses: [
      { cause: 'Acute viral hepatitis', mechanism: 'Viral injury', typicalLevel: 'severe', associatedFindings: ['Very high transaminases'], clinicalContext: 'Risk factors for hepatitis' },
    ],
    severityGuidance: [
      { level: 'mild', range: '40-120 U/L', clinicalSignificance: '<3x normal', typicalCauses: ['NAFLD', 'Medications'], urgency: 'routine' },
      { level: 'moderate', range: '120-400 U/L', clinicalSignificance: '3-10x normal', typicalCauses: ['Chronic hepatitis'], urgency: 'soon' },
      { level: 'severe', range: '>1000 U/L', clinicalSignificance: '>25x normal', typicalCauses: ['Acute hepatitis', 'Toxin'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Jaundice', 'Coagulopathy', 'Encephalopathy'],
    followUpTests: ['AST', 'Bilirubin', 'Albumin', 'PT/INR', 'Hepatitis panel'],
    questionsForDoctor: ['What could be causing my liver inflammation?', 'Do I need a liver ultrasound?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low ALT is not clinically significant.',
    pathophysiology: 'No clinical significance.',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'ast', testName: 'AST', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'Pattern helps identify cause' },
  ],
  associatedConditions: [
    { condition: 'NAFLD', direction: 'elevated', typicalPattern: 'ALT > AST, mild elevation', sensitivity: 'high', specificity: 'low', notes: 'Most common cause in developed countries' },
  ],
  interferingFactors: [
    { factor: 'BMI', effect: 'variable', mechanism: 'Higher BMI associated with higher ALT', clinicalRelevance: 'Minor', mitigation: 'Consider body habitus' },
  ],
  temporalPatterns: [
    { scenario: 'Drug-induced liver injury', pattern: 'Rises 1-8 weeks after drug start', timeframe: 'Weeks', clinicalUse: 'Check after starting hepatotoxic drugs' },
  ],
  clinicalPearls: ['ALT is more liver-specific than AST', 'ALT > AST ratio suggests NAFLD; AST > ALT suggests alcohol', 'Normal ALT doesnt exclude cirrhosis'],
  patientQuestions: ['Is my liver inflamed?', 'What should I avoid?'],
};

const ALKALINE_PHOSPHATASE: LabTestEducation = {
  id: 'alkaline-phosphatase',
  name: 'Alkaline Phosphatase',
  abbreviations: ['ALP', 'Alk Phos'],
  category: 'liver',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'An enzyme found in liver (bile ducts), bone, intestine, and placenta. Elevated ALP suggests bile duct problems or bone disease.',
  physiologicalBasis: {
    analyte: 'Alkaline phosphatase enzyme',
    source: 'Liver (biliary), bone, intestine, placenta',
    normalFunction: 'Hydrolyzes phosphate esters at alkaline pH',
    regulation: 'Induced by bile duct obstruction, bone formation',
    clearance: 'Half-life 7-10 days',
    involvedOrgans: ['Liver', 'Bone', 'Intestine'],
    metabolicPathways: ['Bile metabolism', 'Bone metabolism'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 44, highValue: 147, unit: 'U/L' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Elevated ALP usually indicates bile duct obstruction or bone disease. GGT helps distinguish liver from bone source.',
    pathophysiology: 'ALP rises with bile duct obstruction (cholestasis) or increased bone turnover.',
    causeCategories: [
      { category: 'Cholestatic liver disease', description: 'Bile duct obstruction', examples: ['Gallstones', 'Primary biliary cholangitis', 'Drug-induced'] },
      { category: 'Bone disease', description: 'Increased bone turnover', examples: ['Pagets disease', 'Bone metastases', 'Fracture healing'] },
      { category: 'Physiologic', description: 'Normal variants', examples: ['Pregnancy', 'Growing children'] },
    ],
    commonCauses: [
      { cause: 'Biliary obstruction', mechanism: 'Bile duct blockage', typicalLevel: 'moderate', associatedFindings: ['Elevated bilirubin', 'Elevated GGT'], clinicalContext: 'RUQ pain, jaundice' },
      { cause: 'Bone metastases', mechanism: 'Tumor in bone', typicalLevel: 'moderate', associatedFindings: ['Normal GGT', 'Bone pain'], clinicalContext: 'Known cancer' },
    ],
    lessCauses: [
      { cause: 'Pagets disease', mechanism: 'Rapid bone turnover', typicalLevel: 'severe', associatedFindings: ['Very high ALP', 'Normal GGT'], clinicalContext: 'Bone pain, deformity' },
    ],
    severityGuidance: [
      { level: 'mild', range: '147-300 U/L', clinicalSignificance: '1-2x normal', typicalCauses: ['Mild cholestasis'], urgency: 'routine' },
      { level: 'severe', range: '>3x normal', clinicalSignificance: 'Significant cholestasis or bone disease', typicalCauses: ['Biliary obstruction', 'Pagets'], urgency: 'soon' },
    ],
    worryingFeatures: ['Jaundice', 'Pruritus', 'Severe bone pain'],
    followUpTests: ['GGT', 'Bilirubin', 'Liver ultrasound', 'Bone-specific ALP if bone suspected'],
    questionsForDoctor: ['Is this from my liver or bones?', 'Do I need imaging?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low ALP is rare and can indicate malnutrition or genetic conditions.',
    pathophysiology: 'Low ALP reflects decreased production.',
    causeCategories: [
      { category: 'Nutritional', description: 'Deficiencies', examples: ['Zinc deficiency', 'Malnutrition'] },
      { category: 'Genetic', description: 'Hypophosphatasia', examples: ['Rare genetic disorder'] },
    ],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: ['Bone pain', 'Fractures'],
    followUpTests: ['Zinc level', 'Nutritional assessment'],
    questionsForDoctor: ['Why is my ALP low?'],
  },
  relatedTests: [
    { testId: 'ggt', testName: 'GGT', relationship: 'explains', whenToOrder: 'When ALP elevated', interpretationContext: 'GGT elevated = liver source; GGT normal = bone source' },
  ],
  associatedConditions: [
    { condition: 'Biliary obstruction', direction: 'elevated', typicalPattern: 'High ALP with high GGT', sensitivity: 'high', specificity: 'moderate', notes: 'Cholestatic pattern' },
  ],
  interferingFactors: [
    { factor: 'Recent meal', effect: 'falsely-elevated', mechanism: 'Intestinal ALP rises after fatty meal', clinicalRelevance: 'Minor', mitigation: 'Fasting preferred' },
  ],
  temporalPatterns: [
    { scenario: 'Biliary obstruction relief', pattern: 'Falls slowly over weeks', timeframe: 'Weeks', clinicalUse: 'Long half-life means slow normalization' },
  ],
  clinicalPearls: ['Check GGT to determine liver vs bone source', 'ALP can be very high (>10x) in cholestasis without much AST/ALT elevation', 'Pregnancy causes physiologic ALP elevation (placental source)'],
  patientQuestions: ['Is this from my liver or bones?'],
};

const TOTAL_BILIRUBIN: LabTestEducation = {
  id: 'total-bilirubin',
  name: 'Total Bilirubin',
  abbreviations: ['T. Bili', 'TBIL'],
  category: 'liver',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Bilirubin is the yellow breakdown product of hemoglobin from old red blood cells. Your liver processes it for excretion. High levels cause jaundice (yellowing of skin/eyes).',
  physiologicalBasis: {
    analyte: 'Bilirubin (unconjugated + conjugated)',
    source: 'Red blood cell breakdown in spleen releases hemoglobin, which is converted to bilirubin',
    normalFunction: 'Waste product that liver conjugates (makes water-soluble) and excretes in bile',
    regulation: 'Liver uptake, conjugation, and biliary excretion',
    clearance: 'Excreted in bile into intestines, converted to urobilinogen/stercobilin',
    involvedOrgans: ['Spleen', 'Liver', 'Gallbladder', 'Intestines'],
    metabolicPathways: ['Heme degradation', 'Bilirubin conjugation', 'Bile metabolism'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 0.1, highValue: 1.2, unit: 'mg/dL' },
    { population: { ageMax: 1, ageUnit: 'months' }, lowValue: 0.1, highValue: 12, unit: 'mg/dL', notes: 'Newborns have physiologic jaundice' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Elevated bilirubin means your body is either producing too much (hemolysis), your liver cant process it fast enough, or bile flow is blocked. Visible jaundice occurs above ~2.5-3 mg/dL.',
    pathophysiology: 'Bilirubin accumulates from: (1) Overproduction from excessive RBC breakdown, (2) Impaired liver uptake/conjugation, or (3) Blocked bile excretion (obstruction).',
    causeCategories: [
      { category: 'Pre-hepatic (hemolysis)', description: 'Too many RBCs breaking down', examples: ['Hemolytic anemia', 'Transfusion reactions', 'G6PD deficiency'] },
      { category: 'Hepatic', description: 'Liver disease', examples: ['Hepatitis', 'Cirrhosis', 'Gilberts syndrome', 'Drug toxicity'] },
      { category: 'Post-hepatic (obstruction)', description: 'Blocked bile flow', examples: ['Gallstones', 'Pancreatic cancer', 'Strictures'] },
    ],
    commonCauses: [
      { cause: 'Gilberts syndrome', mechanism: 'Genetic reduced conjugation enzyme (benign)', typicalLevel: 'mild', associatedFindings: ['Unconjugated predominant', 'Normal liver enzymes'], clinicalContext: 'Rises with fasting/illness, otherwise healthy' },
      { cause: 'Gallstone obstruction', mechanism: 'Stone blocks bile duct', typicalLevel: 'moderate', associatedFindings: ['High ALP', 'High GGT', 'Conjugated predominant'], clinicalContext: 'RUQ pain, jaundice' },
      { cause: 'Alcoholic hepatitis', mechanism: 'Liver inflammation impairs processing', typicalLevel: 'moderate', associatedFindings: ['AST>ALT', 'Elevated GGT'], clinicalContext: 'Heavy alcohol use' },
    ],
    lessCauses: [
      { cause: 'Hemolytic anemia', mechanism: 'Massive RBC breakdown overwhelms liver', typicalLevel: 'moderate', associatedFindings: ['Low hemoglobin', 'High LDH', 'Low haptoglobin'], clinicalContext: 'Anemia symptoms, dark urine' },
      { cause: 'Pancreatic cancer', mechanism: 'Tumor blocks bile duct', typicalLevel: 'severe', associatedFindings: ['Painless jaundice', 'Weight loss', 'Very high ALP'], clinicalContext: 'Older patient, weight loss' },
    ],
    severityGuidance: [
      { level: 'mild', range: '1.2-3 mg/dL', clinicalSignificance: 'May not be visible; often Gilberts or early disease', typicalCauses: ['Gilberts', 'Mild hepatitis'], urgency: 'routine' },
      { level: 'moderate', range: '3-10 mg/dL', clinicalSignificance: 'Visible jaundice; needs evaluation', typicalCauses: ['Hepatitis', 'Bile duct obstruction'], urgency: 'soon' },
      { level: 'severe', range: '>10 mg/dL', clinicalSignificance: 'Significant liver dysfunction or complete obstruction', typicalCauses: ['Severe hepatitis', 'Complete biliary obstruction'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Severe jaundice', 'Dark urine/pale stools (obstruction)', 'Confusion (hepatic encephalopathy)', 'Rapid rise'],
    followUpTests: ['Direct/indirect bilirubin', 'AST/ALT', 'ALP', 'GGT', 'CBC with reticulocyte count', 'LDH', 'Haptoglobin', 'Liver ultrasound'],
    questionsForDoctor: ['Is this from my liver or a blockage?', 'Do I have Gilberts syndrome?', 'Do I need imaging?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low bilirubin is not clinically significant and doesnt indicate disease.',
    pathophysiology: 'Low bilirubin simply reflects efficient processing or low production.',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'direct-bilirubin', testName: 'Direct Bilirubin', relationship: 'explains', whenToOrder: 'When total elevated', interpretationContext: 'Helps determine pre-hepatic vs hepatic vs post-hepatic cause' },
    { testId: 'ast', testName: 'AST', relationship: 'complements', whenToOrder: 'Always with bilirubin', interpretationContext: 'Assesses hepatocellular injury' },
  ],
  associatedConditions: [
    { condition: 'Gilberts syndrome', direction: 'elevated', typicalPattern: 'Mild unconjugated hyperbilirubinemia', sensitivity: 'high', specificity: 'moderate', notes: 'Benign, affects 5-10% of population' },
    { condition: 'Cirrhosis', direction: 'elevated', typicalPattern: 'Progressive rise indicates decompensation', sensitivity: 'moderate', specificity: 'low', notes: 'Part of MELD score' },
  ],
  interferingFactors: [
    { factor: 'Fasting', effect: 'falsely-elevated', mechanism: 'Increases unconjugated bilirubin', clinicalRelevance: 'Important for Gilberts', mitigation: 'Note fasting status' },
    { factor: 'Hemolyzed sample', effect: 'falsely-elevated', mechanism: 'Released hemoglobin', clinicalRelevance: 'Re-draw if suspected', mitigation: 'Proper blood draw technique' },
  ],
  temporalPatterns: [
    { scenario: 'Acute hepatitis', pattern: 'Peaks 1-2 weeks after symptom onset', timeframe: 'Weeks', clinicalUse: 'Follows clinical course' },
    { scenario: 'Biliary obstruction relief', pattern: 'Falls over days after relief', timeframe: 'Days', clinicalUse: 'Confirms successful intervention' },
  ],
  clinicalPearls: ['Visible jaundice requires bilirubin >2.5-3 mg/dL', 'Fractionating into direct/indirect helps localize the problem', 'Gilberts is common and benign - rises with stress/fasting'],
  patientQuestions: ['Why am I yellow?', 'Is this serious?', 'Do I have a blocked bile duct?'],
};

const GGT: LabTestEducation = {
  id: 'ggt',
  name: 'Gamma-Glutamyl Transferase',
  abbreviations: ['GGT', 'GGTP', 'Gamma GT'],
  category: 'liver',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'GGT is an enzyme found primarily in the liver and bile ducts. It helps determine if elevated ALP is from liver or bone, and is very sensitive to alcohol use.',
  physiologicalBasis: {
    analyte: 'Gamma-glutamyl transferase enzyme',
    source: 'Liver (biliary epithelium), kidney, pancreas, intestine',
    normalFunction: 'Transfers gamma-glutamyl groups in glutathione metabolism',
    regulation: 'Induced by alcohol, certain medications, bile duct injury',
    clearance: 'Half-life about 2-3 weeks',
    involvedOrgans: ['Liver', 'Bile ducts', 'Kidney', 'Pancreas'],
    metabolicPathways: ['Glutathione metabolism', 'Drug metabolism'],
  },
  referenceRanges: [
    { population: { sex: 'male', ageMin: 18 }, lowValue: 9, highValue: 48, unit: 'U/L' },
    { population: { sex: 'female', ageMin: 18 }, lowValue: 9, highValue: 36, unit: 'U/L' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Elevated GGT indicates liver or bile duct disease, alcohol use, or enzyme induction by medications. Its very sensitive but not specific.',
    pathophysiology: 'GGT rises from: (1) Biliary disease/cholestasis, (2) Alcohol use (induces enzyme), (3) Medications that induce liver enzymes, (4) Hepatocellular injury.',
    causeCategories: [
      { category: 'Biliary disease', description: 'Bile duct injury/obstruction', examples: ['Gallstones', 'Primary biliary cholangitis', 'Cholangitis'] },
      { category: 'Enzyme induction', description: 'Medications/alcohol increase production', examples: ['Alcohol use', 'Phenytoin', 'Barbiturates', 'Rifampin'] },
      { category: 'Hepatocellular', description: 'Liver cell injury', examples: ['Hepatitis', 'NAFLD', 'Cirrhosis'] },
    ],
    commonCauses: [
      { cause: 'Alcohol use', mechanism: 'Enzyme induction', typicalLevel: 'moderate', associatedFindings: ['AST:ALT >2:1', 'Macrocytosis'], clinicalContext: 'History of alcohol use, even moderate' },
      { cause: 'Fatty liver (NAFLD)', mechanism: 'Hepatic steatosis causes mild injury', typicalLevel: 'mild', associatedFindings: ['ALT>AST', 'Metabolic syndrome'], clinicalContext: 'Obesity, diabetes' },
      { cause: 'Medications', mechanism: 'Enzyme induction', typicalLevel: 'mild', associatedFindings: ['Normal other LFTs', 'Known inducer drug'], clinicalContext: 'Taking phenytoin, carbamazepine, etc.' },
    ],
    lessCauses: [
      { cause: 'Primary biliary cholangitis', mechanism: 'Autoimmune bile duct destruction', typicalLevel: 'moderate', associatedFindings: ['High ALP', 'Positive AMA'], clinicalContext: 'Middle-aged women, pruritus' },
    ],
    severityGuidance: [
      { level: 'mild', range: '1-2x normal', clinicalSignificance: 'Often enzyme induction or fatty liver', typicalCauses: ['Alcohol', 'NAFLD', 'Medications'], urgency: 'routine' },
      { level: 'moderate', range: '2-5x normal', clinicalSignificance: 'Significant liver or biliary disease', typicalCauses: ['Cholestasis', 'Alcoholic liver disease'], urgency: 'soon' },
      { level: 'severe', range: '>5x normal', clinicalSignificance: 'Significant biliary obstruction or disease', typicalCauses: ['Biliary obstruction', 'Cholangitis'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Jaundice', 'Very high with ALP (suggests cholestasis)', 'Progressive rise'],
    followUpTests: ['ALP', 'AST/ALT', 'Bilirubin', 'Liver ultrasound', 'Alcohol history'],
    questionsForDoctor: ['Is this from alcohol or something else?', 'Do I need to stop any medications?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low GGT is not clinically significant.',
    pathophysiology: 'Low levels reflect normal variation.',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'alkaline-phosphatase', testName: 'ALP', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'If ALP high + GGT high = liver source; ALP high + GGT normal = bone source' },
  ],
  associatedConditions: [
    { condition: 'Alcohol use disorder', direction: 'elevated', typicalPattern: 'Elevated even with moderate drinking', sensitivity: 'high', specificity: 'low', notes: 'Very sensitive marker of alcohol use' },
    { condition: 'Cholestasis', direction: 'elevated', typicalPattern: 'High GGT with high ALP', sensitivity: 'high', specificity: 'moderate', notes: 'Confirms hepatic source of ALP' },
  ],
  interferingFactors: [
    { factor: 'Alcohol use', effect: 'falsely-elevated', mechanism: 'Enzyme induction', clinicalRelevance: 'Very important', mitigation: 'Abstain 4+ weeks for accurate baseline' },
    { factor: 'Enzyme-inducing drugs', effect: 'falsely-elevated', mechanism: 'Drug-induced enzyme induction', clinicalRelevance: 'Document medications', mitigation: 'Consider drug effect' },
  ],
  temporalPatterns: [
    { scenario: 'Alcohol cessation', pattern: 'Falls by 50% every 2-3 weeks', timeframe: 'Weeks', clinicalUse: 'Monitor abstinence' },
  ],
  clinicalPearls: ['GGT is the most sensitive marker of alcohol use', 'Use GGT to determine if elevated ALP is liver or bone', 'Many drugs induce GGT without liver damage'],
  patientQuestions: ['Is my GGT high because of alcohol?', 'Could my medications cause this?'],
};

const ALBUMIN: LabTestEducation = {
  id: 'albumin',
  name: 'Albumin',
  abbreviations: ['Alb'],
  category: 'liver',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Albumin is the most abundant protein in your blood, made by your liver. It maintains blood pressure by keeping fluid in blood vessels and transports many substances.',
  physiologicalBasis: {
    analyte: 'Albumin protein',
    source: 'Synthesized exclusively by the liver',
    normalFunction: 'Maintains oncotic pressure (keeps fluid in vessels), transports hormones/drugs/bilirubin/calcium',
    regulation: 'Liver synthetic function; affected by nutrition and inflammation',
    clearance: 'Half-life about 20 days; lost through kidneys if damaged',
    involvedOrgans: ['Liver', 'Kidneys', 'Vascular system'],
    metabolicPathways: ['Protein synthesis', 'Amino acid metabolism'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 3.5, highValue: 5.0, unit: 'g/dL' },
    { population: { ageMin: 65 }, lowValue: 3.4, highValue: 4.8, unit: 'g/dL', notes: 'Slightly lower in elderly' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Elevated albumin is almost always due to dehydration, concentrating the blood. Its not a sign of disease.',
    pathophysiology: 'Dehydration concentrates all blood proteins including albumin.',
    causeCategories: [
      { category: 'Dehydration', description: 'Concentrated blood', examples: ['Inadequate fluid intake', 'Excessive losses'] },
    ],
    commonCauses: [
      { cause: 'Dehydration', mechanism: 'Hemoconcentration', typicalLevel: 'mild', associatedFindings: ['Elevated total protein', 'Elevated hemoglobin'], clinicalContext: 'Poor fluid intake' },
    ],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: ['Signs of severe dehydration'],
    followUpTests: ['Hydration assessment', 'BUN/Creatinine'],
    questionsForDoctor: ['Am I dehydrated?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low albumin indicates your liver isnt making enough protein, youre losing it (kidneys/gut), or inflammation is suppressing production. It causes edema/swelling.',
    pathophysiology: 'Hypoalbuminemia from: (1) Decreased liver synthesis (cirrhosis, malnutrition), (2) Increased losses (nephrotic syndrome, protein-losing enteropathy), (3) Inflammation shifts production to acute phase proteins.',
    causeCategories: [
      { category: 'Decreased synthesis', description: 'Liver cant make enough', examples: ['Cirrhosis', 'Malnutrition', 'Malabsorption'] },
      { category: 'Increased losses', description: 'Losing protein', examples: ['Nephrotic syndrome', 'Burns', 'Protein-losing enteropathy'] },
      { category: 'Inflammation', description: 'Negative acute phase reactant', examples: ['Chronic inflammation', 'Infection', 'Cancer'] },
    ],
    commonCauses: [
      { cause: 'Chronic liver disease', mechanism: 'Impaired hepatic synthesis', typicalLevel: 'moderate', associatedFindings: ['Elevated bilirubin', 'Prolonged PT'], clinicalContext: 'Known liver disease, ascites' },
      { cause: 'Nephrotic syndrome', mechanism: 'Kidneys leak protein', typicalLevel: 'severe', associatedFindings: ['Heavy proteinuria', 'Edema', 'High cholesterol'], clinicalContext: 'Foamy urine, leg swelling' },
      { cause: 'Malnutrition', mechanism: 'Inadequate protein intake', typicalLevel: 'moderate', associatedFindings: ['Weight loss', 'Muscle wasting'], clinicalContext: 'Poor diet, anorexia, alcoholism' },
    ],
    lessCauses: [
      { cause: 'Protein-losing enteropathy', mechanism: 'GI tract leaks protein', typicalLevel: 'moderate', associatedFindings: ['Diarrhea', 'Edema'], clinicalContext: 'IBD, celiac, intestinal lymphangiectasia' },
    ],
    severityGuidance: [
      { level: 'mild', range: '3.0-3.5 g/dL', clinicalSignificance: 'May indicate early liver disease or inflammation', typicalCauses: ['Early cirrhosis', 'Inflammation'], urgency: 'routine' },
      { level: 'moderate', range: '2.5-3.0 g/dL', clinicalSignificance: 'Significant synthetic dysfunction or losses; may have edema', typicalCauses: ['Advanced cirrhosis', 'Nephrotic syndrome'], urgency: 'soon' },
      { level: 'severe', range: '<2.5 g/dL', clinicalSignificance: 'Severe hypoalbuminemia with anasarca risk', typicalCauses: ['Decompensated cirrhosis', 'Severe nephrosis'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Severe edema', 'Ascites', 'Associated coagulopathy', 'Rapid decline'],
    followUpTests: ['Liver function tests', 'Urine protein', 'Prealbumin', 'CRP', 'PT/INR'],
    questionsForDoctor: ['Is my liver making enough protein?', 'Am I losing protein in my urine?', 'Is inflammation causing this?'],
  },
  relatedTests: [
    { testId: 'total-protein', testName: 'Total Protein', relationship: 'complements', whenToOrder: 'Together in CMP', interpretationContext: 'Low albumin with normal total protein suggests increased globulins (inflammation/myeloma)' },
    { testId: 'prealbumin', testName: 'Prealbumin', relationship: 'complements', whenToOrder: 'Assess acute nutritional status', interpretationContext: 'Shorter half-life reflects recent nutrition better' },
  ],
  associatedConditions: [
    { condition: 'Cirrhosis', direction: 'decreased', typicalPattern: 'Progressive decline as liver fails', sensitivity: 'high', specificity: 'moderate', notes: 'Part of Child-Pugh and MELD scores' },
    { condition: 'Nephrotic syndrome', direction: 'decreased', typicalPattern: 'Very low with massive proteinuria', sensitivity: 'high', specificity: 'high', notes: 'Diagnostic criterion' },
  ],
  interferingFactors: [
    { factor: 'Acute inflammation', effect: 'falsely-decreased', mechanism: 'Negative acute phase reactant', clinicalRelevance: 'Important to check CRP', mitigation: 'Check inflammatory markers' },
    { factor: 'IV fluids', effect: 'falsely-decreased', mechanism: 'Dilution', clinicalRelevance: 'Consider in hospitalized patients', mitigation: 'Note IV fluid status' },
  ],
  temporalPatterns: [
    { scenario: 'Acute illness', pattern: 'Falls within days due to inflammation', timeframe: 'Days', clinicalUse: 'Not good for acute nutritional assessment' },
    { scenario: 'Chronic liver disease', pattern: 'Gradual decline over months/years', timeframe: 'Months-years', clinicalUse: 'Tracks synthetic function' },
  ],
  clinicalPearls: ['Albumin has 20-day half-life so reflects chronic not acute status', 'Low albumin + low total protein = decreased production; low albumin + normal protein = increased globulins', 'Inflammation can lower albumin independent of liver function'],
  patientQuestions: ['Is my liver making enough protein?', 'Am I malnourished?', 'Why do I have swelling?'],
};

const TOTAL_PROTEIN: LabTestEducation = {
  id: 'total-protein',
  name: 'Total Protein',
  abbreviations: ['TP'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Total protein measures all proteins in your blood, primarily albumin (60%) and globulins (40%). It reflects liver function, immune status, and nutritional state.',
  physiologicalBasis: {
    analyte: 'Total serum proteins (albumin + globulins)',
    source: 'Albumin from liver; globulins from liver and immune cells',
    normalFunction: 'Albumin maintains oncotic pressure and transports; globulins include antibodies and transport proteins',
    regulation: 'Liver synthesis, immune activation',
    clearance: 'Variable by protein type',
    involvedOrgans: ['Liver', 'Immune system', 'Kidneys'],
    metabolicPathways: ['Protein synthesis', 'Immune response'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 6.0, highValue: 8.3, unit: 'g/dL' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High total protein usually indicates dehydration or increased globulins (inflammation, infection, or plasma cell disorders).',
    pathophysiology: 'Elevated protein from: (1) Dehydration concentrating proteins, (2) Increased globulin production from immune activation or plasma cell disorders.',
    causeCategories: [
      { category: 'Dehydration', description: 'Concentrated blood', examples: ['Poor fluid intake', 'Fluid losses'] },
      { category: 'Increased globulins', description: 'Immune/inflammatory increase', examples: ['Chronic infection', 'Autoimmune disease', 'Multiple myeloma'] },
    ],
    commonCauses: [
      { cause: 'Dehydration', mechanism: 'Hemoconcentration', typicalLevel: 'mild', associatedFindings: ['Elevated albumin', 'Elevated Hgb'], clinicalContext: 'Poor intake, heat exposure' },
      { cause: 'Chronic inflammation', mechanism: 'Increased immunoglobulin production', typicalLevel: 'mild', associatedFindings: ['Normal/low albumin', 'Elevated globulins'], clinicalContext: 'Autoimmune disease, chronic infection' },
    ],
    lessCauses: [
      { cause: 'Multiple myeloma', mechanism: 'Plasma cells produce monoclonal protein', typicalLevel: 'severe', associatedFindings: ['Very high globulins', 'M-spike on SPEP', 'Anemia'], clinicalContext: 'Bone pain, fatigue, recurrent infections' },
    ],
    severityGuidance: [
      { level: 'mild', range: '8.3-9.0 g/dL', clinicalSignificance: 'Often dehydration', typicalCauses: ['Dehydration'], urgency: 'routine' },
      { level: 'severe', range: '>10 g/dL', clinicalSignificance: 'Suggests plasma cell dyscrasia', typicalCauses: ['Multiple myeloma', 'Waldenstrom'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Very elevated (>10)', 'Associated bone pain', 'Anemia', 'Kidney dysfunction'],
    followUpTests: ['Serum protein electrophoresis (SPEP)', 'Immunofixation', 'Free light chains', 'CBC'],
    questionsForDoctor: ['Why are my proteins high?', 'Do I need testing for myeloma?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low total protein indicates malnutrition, protein loss (kidneys/gut), liver disease, or overhydration.',
    pathophysiology: 'Low protein from: (1) Decreased synthesis (liver disease, malnutrition), (2) Protein losses (nephrotic syndrome, burns, enteropathy), (3) Dilution from IV fluids.',
    causeCategories: [
      { category: 'Decreased production', description: 'Liver/nutritional', examples: ['Cirrhosis', 'Malnutrition'] },
      { category: 'Protein loss', description: 'Losing protein from body', examples: ['Nephrotic syndrome', 'Burns', 'Protein-losing enteropathy'] },
      { category: 'Dilution', description: 'Excess fluids', examples: ['IV fluid overload', 'Overhydration'] },
    ],
    commonCauses: [
      { cause: 'Nephrotic syndrome', mechanism: 'Urinary protein loss', typicalLevel: 'moderate', associatedFindings: ['Very low albumin', 'Proteinuria', 'Edema'], clinicalContext: 'Foamy urine, swelling' },
      { cause: 'Chronic liver disease', mechanism: 'Impaired synthesis', typicalLevel: 'moderate', associatedFindings: ['Low albumin', 'Elevated bilirubin'], clinicalContext: 'Known cirrhosis' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '5.5-6.0 g/dL', clinicalSignificance: 'May indicate early loss or mild synthetic dysfunction', typicalCauses: ['Early liver disease', 'Inflammation'], urgency: 'routine' },
      { level: 'severe', range: '<5.0 g/dL', clinicalSignificance: 'Significant protein depletion, risk of edema', typicalCauses: ['Severe nephrosis', 'Advanced cirrhosis'], urgency: 'soon' },
    ],
    worryingFeatures: ['Severe edema', 'Ascites', 'Very low with proteinuria'],
    followUpTests: ['Albumin', 'Urine protein', 'LFTs', 'SPEP'],
    questionsForDoctor: ['Am I losing protein?', 'Is this my liver or kidneys?'],
  },
  relatedTests: [
    { testId: 'albumin', testName: 'Albumin', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'Calculate globulins = TP - albumin' },
    { testId: 'spep', testName: 'Serum Protein Electrophoresis', relationship: 'explains', whenToOrder: 'Abnormal TP or globulins', interpretationContext: 'Identifies specific protein abnormalities' },
  ],
  associatedConditions: [
    { condition: 'Multiple myeloma', direction: 'elevated', typicalPattern: 'High globulins with M-spike', sensitivity: 'moderate', specificity: 'low', notes: 'SPEP needed for diagnosis' },
    { condition: 'Nephrotic syndrome', direction: 'decreased', typicalPattern: 'Low due to urinary losses', sensitivity: 'high', specificity: 'moderate', notes: 'Albumin more affected than globulins' },
  ],
  interferingFactors: [
    { factor: 'Prolonged tourniquet', effect: 'falsely-elevated', mechanism: 'Hemoconcentration', clinicalRelevance: 'Minor', mitigation: 'Proper technique' },
    { factor: 'Lipemia', effect: 'variable', mechanism: 'Interferes with assay', clinicalRelevance: 'Technical', mitigation: 'Fasting sample if severe' },
  ],
  temporalPatterns: [
    { scenario: 'Multiple myeloma treatment', pattern: 'M-protein falls with effective therapy', timeframe: 'Weeks-months', clinicalUse: 'Monitor treatment response' },
  ],
  clinicalPearls: ['Globulin = Total protein - Albumin', 'A/G ratio normally >1; reversed ratio suggests increased globulins', 'Very high protein (>10) should prompt myeloma workup'],
  patientQuestions: ['What makes up total protein?', 'Why might my globulins be high?'],
};

const TSH: LabTestEducation = {
  id: 'tsh',
  name: 'Thyroid Stimulating Hormone',
  abbreviations: ['TSH'],
  category: 'endocrine',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'TSH is a hormone from your pituitary gland that tells your thyroid to make thyroid hormones (T4/T3). Its the best screening test for thyroid function.',
  physiologicalBasis: {
    analyte: 'Thyroid stimulating hormone (thyrotropin)',
    source: 'Anterior pituitary gland',
    normalFunction: 'Stimulates thyroid to produce T4 and T3; regulated by negative feedback',
    regulation: 'TRH from hypothalamus stimulates TSH; T4/T3 inhibit TSH (negative feedback)',
    clearance: 'Half-life about 1 hour',
    involvedOrgans: ['Hypothalamus', 'Pituitary', 'Thyroid'],
    metabolicPathways: ['Hypothalamic-pituitary-thyroid axis'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 0.4, highValue: 4.0, unit: 'mIU/L' },
    { population: { sex: 'female', pregnancy: true }, lowValue: 0.1, highValue: 2.5, unit: 'mIU/L', notes: 'Lower in first trimester' },
    { population: { ageMin: 65 }, lowValue: 0.4, highValue: 5.0, unit: 'mIU/L', notes: 'May be slightly higher in elderly' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High TSH means your pituitary is working hard to stimulate an underactive thyroid. This indicates hypothyroidism (too little thyroid hormone).',
    pathophysiology: 'When thyroid hormone levels are low, the pituitary increases TSH to try to stimulate more production. High TSH = low thyroid function (inverse relationship).',
    causeCategories: [
      { category: 'Primary hypothyroidism', description: 'Thyroid gland failing', examples: ['Hashimotos thyroiditis', 'Post-thyroidectomy', 'Post-radioactive iodine', 'Iodine deficiency'] },
      { category: 'Subclinical hypothyroidism', description: 'Mildly elevated TSH, normal T4', examples: ['Early Hashimotos', 'Recovery from thyroiditis'] },
      { category: 'Secondary (rare)', description: 'Pituitary tumor', examples: ['TSH-secreting adenoma'] },
    ],
    commonCauses: [
      { cause: 'Hashimotos thyroiditis', mechanism: 'Autoimmune thyroid destruction', typicalLevel: 'variable', associatedFindings: ['Positive TPO antibodies', 'Low/normal T4'], clinicalContext: 'Fatigue, weight gain, cold intolerance' },
      { cause: 'Inadequate levothyroxine dose', mechanism: 'Underreplacement in treated patients', typicalLevel: 'mild', associatedFindings: ['On thyroid medication'], clinicalContext: 'Known hypothyroid on treatment' },
      { cause: 'Subclinical hypothyroidism', mechanism: 'Early thyroid failure', typicalLevel: 'mild', associatedFindings: ['Normal T4'], clinicalContext: 'Often asymptomatic' },
    ],
    lessCauses: [
      { cause: 'TSH-secreting adenoma', mechanism: 'Pituitary tumor overproduces TSH', typicalLevel: 'moderate', associatedFindings: ['High T4 with high TSH (inappropriate)'], clinicalContext: 'Very rare, hyperthyroid symptoms' },
    ],
    severityGuidance: [
      { level: 'mild', range: '4.0-10 mIU/L', clinicalSignificance: 'Subclinical hypothyroidism; may not need treatment', typicalCauses: ['Early Hashimotos', 'Subclinical'], urgency: 'routine' },
      { level: 'moderate', range: '10-20 mIU/L', clinicalSignificance: 'Overt hypothyroidism likely; usually treat', typicalCauses: ['Hashimotos', 'Post-treatment'], urgency: 'soon' },
      { level: 'severe', range: '>20 mIU/L', clinicalSignificance: 'Significant hypothyroidism; treatment indicated', typicalCauses: ['Severe primary hypothyroidism'], urgency: 'soon' },
    ],
    worryingFeatures: ['Severe symptoms (myxedema)', 'Pregnancy with elevated TSH', 'TSH >50-100 mIU/L'],
    followUpTests: ['Free T4', 'TPO antibodies', 'Thyroglobulin antibodies', 'Free T3 if indicated'],
    questionsForDoctor: ['Do I have hypothyroidism?', 'Do I need medication?', 'Should I be tested for Hashimotos?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low TSH means your pituitary is being suppressed by excess thyroid hormone. This indicates hyperthyroidism (too much thyroid hormone).',
    pathophysiology: 'Excess thyroid hormone feeds back to suppress TSH production. Low/undetectable TSH = high thyroid function (inverse relationship).',
    causeCategories: [
      { category: 'Primary hyperthyroidism', description: 'Thyroid overproducing', examples: ['Graves disease', 'Toxic nodule', 'Toxic multinodular goiter', 'Thyroiditis'] },
      { category: 'Exogenous thyroid hormone', description: 'Too much medication', examples: ['Levothyroxine overreplacement', 'Factitious hyperthyroidism'] },
      { category: 'Secondary (rare)', description: 'Pituitary/hypothalamic problem', examples: ['Pituitary disease', 'Central hypothyroidism (low TSH + low T4)'] },
    ],
    commonCauses: [
      { cause: 'Graves disease', mechanism: 'Autoantibodies stimulate thyroid', typicalLevel: 'severe', associatedFindings: ['High T4/T3', 'TSH receptor antibodies positive'], clinicalContext: 'Weight loss, tremor, heat intolerance, possible eye changes' },
      { cause: 'Toxic nodule', mechanism: 'Autonomous thyroid hormone production', typicalLevel: 'moderate', associatedFindings: ['High T4', 'Palpable nodule'], clinicalContext: 'Older patient, nodular goiter' },
      { cause: 'Levothyroxine overreplacement', mechanism: 'Exogenous hormone excess', typicalLevel: 'mild', associatedFindings: ['On thyroid medication'], clinicalContext: 'Taking levothyroxine' },
    ],
    lessCauses: [
      { cause: 'Subacute thyroiditis', mechanism: 'Thyroid inflammation releases hormone', typicalLevel: 'variable', associatedFindings: ['Tender thyroid', 'Low radioiodine uptake'], clinicalContext: 'Neck pain, recent viral illness' },
      { cause: 'Central hypothyroidism', mechanism: 'Pituitary/hypothalamic disease', typicalLevel: 'mild', associatedFindings: ['Low T4 with low TSH'], clinicalContext: 'Other pituitary hormone deficiencies' },
    ],
    severityGuidance: [
      { level: 'mild', range: '0.1-0.4 mIU/L', clinicalSignificance: 'Subclinical hyperthyroidism; monitor or treat based on context', typicalCauses: ['Overreplacement', 'Subclinical hyperthyroidism'], urgency: 'routine' },
      { level: 'moderate', range: '0.01-0.1 mIU/L', clinicalSignificance: 'Likely overt hyperthyroidism', typicalCauses: ['Graves', 'Toxic nodule'], urgency: 'soon' },
      { level: 'severe', range: '<0.01 mIU/L (undetectable)', clinicalSignificance: 'Overt hyperthyroidism; treatment needed', typicalCauses: ['Graves disease', 'Severe thyrotoxicosis'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Atrial fibrillation', 'Thyroid storm symptoms', 'Undetectable TSH with symptoms', 'Bone loss'],
    followUpTests: ['Free T4', 'Free T3', 'TSH receptor antibodies', 'Thyroid ultrasound', 'Radioiodine uptake scan'],
    questionsForDoctor: ['Do I have hyperthyroidism?', 'Is my thyroid medication dose too high?', 'Do I have Graves disease?'],
  },
  relatedTests: [
    { testId: 'free-t4', testName: 'Free T4', relationship: 'complements', whenToOrder: 'When TSH abnormal', interpretationContext: 'Confirms overt vs subclinical thyroid disease' },
    { testId: 'free-t3', testName: 'Free T3', relationship: 'complements', whenToOrder: 'Suspected T3 toxicosis', interpretationContext: 'Sometimes elevated when T4 normal in hyperthyroidism' },
    { testId: 'tpo-antibodies', testName: 'TPO Antibodies', relationship: 'explains', whenToOrder: 'High TSH', interpretationContext: 'Positive indicates autoimmune thyroiditis' },
  ],
  associatedConditions: [
    { condition: 'Hashimotos thyroiditis', direction: 'elevated', typicalPattern: 'Progressive TSH elevation as thyroid fails', sensitivity: 'high', specificity: 'moderate', notes: 'Most common cause of hypothyroidism' },
    { condition: 'Graves disease', direction: 'decreased', typicalPattern: 'Suppressed/undetectable TSH', sensitivity: 'high', specificity: 'high', notes: 'Most common cause of hyperthyroidism' },
  ],
  interferingFactors: [
    { factor: 'Biotin supplements', effect: 'variable', mechanism: 'Interferes with immunoassay', clinicalRelevance: 'Can cause falsely low or high TSH', mitigation: 'Stop biotin 48-72 hours before testing' },
    { factor: 'Recent illness', effect: 'variable', mechanism: 'Non-thyroidal illness syndrome', clinicalRelevance: 'TSH may be transiently abnormal', mitigation: 'Recheck after recovery' },
    { factor: 'Steroids', effect: 'falsely-decreased', mechanism: 'Suppress TSH secretion', clinicalRelevance: 'Consider medication effect', mitigation: 'Note steroid use' },
  ],
  temporalPatterns: [
    { scenario: 'Starting levothyroxine', pattern: 'TSH normalizes over 6-8 weeks', timeframe: 'Weeks', clinicalUse: 'Recheck TSH 6-8 weeks after dose change' },
    { scenario: 'Graves disease treatment', pattern: 'TSH may remain suppressed for months', timeframe: 'Months', clinicalUse: 'Follow T4 initially; TSH lags' },
  ],
  clinicalPearls: ['TSH is the best screening test for thyroid function', 'TSH and thyroid hormones have an INVERSE relationship (high TSH = low thyroid, low TSH = high thyroid)', 'Wait 6-8 weeks after dose changes before rechecking TSH', 'Biotin supplements can interfere with TSH assays'],
  patientQuestions: ['Is my thyroid working properly?', 'Do I need thyroid medication?', 'How often should this be checked?'],
};

const FREE_T4: LabTestEducation = {
  id: 'free-t4',
  name: 'Free Thyroxine',
  abbreviations: ['Free T4', 'FT4'],
  category: 'endocrine',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Free T4 measures the unbound, active form of the main thyroid hormone. Its ordered with TSH to confirm thyroid disease.',
  physiologicalBasis: {
    analyte: 'Unbound thyroxine (T4)',
    source: 'Thyroid gland',
    normalFunction: 'Regulates metabolism, growth, development; converted to T3 in tissues',
    regulation: 'TSH stimulates production; negative feedback to pituitary',
    clearance: 'Half-life 7 days; converted to T3 or reverse T3',
    involvedOrgans: ['Thyroid', 'Pituitary', 'All body tissues'],
    metabolicPathways: ['Thyroid hormone synthesis', 'Deiodination to T3'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 0.9, highValue: 1.7, unit: 'ng/dL' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High free T4 with low TSH confirms hyperthyroidism. Your thyroid is producing too much hormone.',
    pathophysiology: 'Excess T4 from autonomous thyroid hormone production (Graves, toxic nodule) or exogenous thyroid hormone.',
    causeCategories: [
      { category: 'Hyperthyroidism', description: 'Thyroid overproduction', examples: ['Graves disease', 'Toxic nodule', 'Thyroiditis'] },
      { category: 'Medication', description: 'Exogenous hormone', examples: ['Levothyroxine excess'] },
    ],
    commonCauses: [
      { cause: 'Graves disease', mechanism: 'Antibodies stimulate thyroid', typicalLevel: 'moderate', associatedFindings: ['Low TSH', 'Positive TSI antibodies'], clinicalContext: 'Weight loss, tremor, palpitations' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '1.7-2.5 ng/dL', clinicalSignificance: 'Mild hyperthyroidism', typicalCauses: ['Early Graves', 'Overreplacement'], urgency: 'routine' },
      { level: 'severe', range: '>4 ng/dL', clinicalSignificance: 'Significant hyperthyroidism; thyroid storm risk', typicalCauses: ['Severe Graves'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Atrial fibrillation', 'Severe tachycardia', 'Thyroid storm symptoms'],
    followUpTests: ['TSH', 'Free T3', 'TSH receptor antibodies'],
    questionsForDoctor: ['Do I have Graves disease?', 'What treatment options do I have?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low free T4 with high TSH confirms hypothyroidism. Your thyroid isnt producing enough hormone.',
    pathophysiology: 'Inadequate T4 production from thyroid gland failure or destruction.',
    causeCategories: [
      { category: 'Primary hypothyroidism', description: 'Thyroid failing', examples: ['Hashimotos', 'Post-thyroidectomy', 'Post-radioiodine'] },
      { category: 'Central hypothyroidism', description: 'Pituitary/hypothalamic disease', examples: ['Pituitary tumor', 'Sheehan syndrome'] },
    ],
    commonCauses: [
      { cause: 'Hashimotos thyroiditis', mechanism: 'Autoimmune destruction', typicalLevel: 'variable', associatedFindings: ['High TSH', 'Positive TPO antibodies'], clinicalContext: 'Fatigue, weight gain, cold intolerance' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '0.7-0.9 ng/dL', clinicalSignificance: 'Mild hypothyroidism', typicalCauses: ['Early disease'], urgency: 'routine' },
      { level: 'severe', range: '<0.5 ng/dL', clinicalSignificance: 'Severe hypothyroidism; myxedema risk', typicalCauses: ['Severe hypothyroidism'], urgency: 'soon' },
    ],
    worryingFeatures: ['Myxedema', 'Severe bradycardia', 'Hypothermia'],
    followUpTests: ['TSH', 'TPO antibodies'],
    questionsForDoctor: ['What dose of thyroid medication do I need?'],
  },
  relatedTests: [
    { testId: 'tsh', testName: 'TSH', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'TSH + FT4 together define thyroid status' },
  ],
  associatedConditions: [
    { condition: 'Hypothyroidism', direction: 'decreased', typicalPattern: 'Low FT4 with high TSH', sensitivity: 'high', specificity: 'high', notes: 'Diagnostic combination' },
    { condition: 'Hyperthyroidism', direction: 'elevated', typicalPattern: 'High FT4 with low TSH', sensitivity: 'high', specificity: 'high', notes: 'Diagnostic combination' },
  ],
  interferingFactors: [
    { factor: 'Biotin supplements', effect: 'variable', mechanism: 'Assay interference', clinicalRelevance: 'Significant', mitigation: 'Stop biotin 48-72 hours before' },
  ],
  temporalPatterns: [
    { scenario: 'Starting levothyroxine', pattern: 'Rises over weeks', timeframe: 'Weeks', clinicalUse: 'Check 6-8 weeks after starting/changing dose' },
  ],
  clinicalPearls: ['Free T4 confirms what TSH suggests', 'Normal FT4 with abnormal TSH = subclinical disease', 'In central hypothyroidism TSH is inappropriately normal/low'],
  patientQuestions: ['How much thyroid hormone is my thyroid making?'],
};

const TOTAL_CHOLESTEROL: LabTestEducation = {
  id: 'total-cholesterol',
  name: 'Total Cholesterol',
  abbreviations: ['TC', 'Chol'],
  category: 'lipid',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Total cholesterol measures all cholesterol in your blood - HDL (good), LDL (bad), and VLDL. Its part of cardiovascular risk assessment.',
  physiologicalBasis: {
    analyte: 'Total cholesterol (all lipoprotein fractions)',
    source: 'Diet and liver synthesis',
    normalFunction: 'Cell membrane component, precursor for hormones/bile acids',
    regulation: 'Liver synthesis (HMG-CoA reductase), dietary absorption, LDL receptor uptake',
    clearance: 'Liver metabolism, bile excretion',
    involvedOrgans: ['Liver', 'Intestines', 'Peripheral tissues'],
    metabolicPathways: ['Cholesterol synthesis', 'Lipoprotein metabolism', 'Bile acid synthesis'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18, fasting: true }, lowValue: 0, highValue: 200, unit: 'mg/dL', notes: 'Desirable <200' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High total cholesterol increases cardiovascular disease risk. Its important to look at the breakdown (LDL, HDL) to assess true risk.',
    pathophysiology: 'Elevated cholesterol accumulates in artery walls, forming plaques (atherosclerosis) that can lead to heart attack and stroke.',
    causeCategories: [
      { category: 'Primary (genetic)', description: 'Inherited lipid disorders', examples: ['Familial hypercholesterolemia', 'Polygenic hypercholesterolemia'] },
      { category: 'Secondary', description: 'Due to other conditions', examples: ['Hypothyroidism', 'Diabetes', 'Nephrotic syndrome', 'Cholestasis'] },
      { category: 'Lifestyle', description: 'Diet and activity', examples: ['High saturated fat diet', 'Sedentary lifestyle', 'Obesity'] },
    ],
    commonCauses: [
      { cause: 'Diet/lifestyle', mechanism: 'Excess saturated fat intake, reduced activity', typicalLevel: 'mild', associatedFindings: ['Elevated LDL', 'May have low HDL'], clinicalContext: 'Poor diet, obesity' },
      { cause: 'Hypothyroidism', mechanism: 'Reduced LDL receptor activity', typicalLevel: 'moderate', associatedFindings: ['High TSH', 'Fatigue'], clinicalContext: 'Check thyroid if unexplained' },
    ],
    lessCauses: [
      { cause: 'Familial hypercholesterolemia', mechanism: 'LDL receptor mutations', typicalLevel: 'severe', associatedFindings: ['LDL >190', 'Family history', 'Xanthomas'], clinicalContext: 'Early heart disease in family' },
    ],
    severityGuidance: [
      { level: 'mild', range: '200-239 mg/dL', clinicalSignificance: 'Borderline high', typicalCauses: ['Diet', 'Mild genetic'], urgency: 'routine' },
      { level: 'moderate', range: '240-300 mg/dL', clinicalSignificance: 'High; treatment usually indicated', typicalCauses: ['Genetic + lifestyle'], urgency: 'routine' },
      { level: 'severe', range: '>300 mg/dL', clinicalSignificance: 'Very high; evaluate for FH', typicalCauses: ['Familial hypercholesterolemia'], urgency: 'soon' },
    ],
    worryingFeatures: ['Very high LDL (>190)', 'Family history of early heart disease', 'Existing cardiovascular disease'],
    followUpTests: ['Lipid panel (LDL, HDL, TG)', 'TSH if unexplained', 'Glucose/A1c', 'Lipoprotein(a) if FH suspected'],
    questionsForDoctor: ['What is my LDL level?', 'Do I need medication?', 'What is my cardiovascular risk?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Very low cholesterol is rare and can indicate malnutrition, malabsorption, liver disease, or hyperthyroidism.',
    pathophysiology: 'Low cholesterol from decreased production (liver disease), malabsorption, or increased metabolism.',
    causeCategories: [
      { category: 'Liver disease', description: 'Reduced synthesis', examples: ['Cirrhosis', 'Acute liver failure'] },
      { category: 'Malnutrition', description: 'Inadequate substrate', examples: ['Severe malnutrition', 'Malabsorption'] },
      { category: 'Hyperthyroidism', description: 'Increased metabolism', examples: ['Graves disease'] },
    ],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: ['Associated with severe illness', 'Very low (<100) without explanation'],
    followUpTests: ['Liver function tests', 'Nutritional assessment', 'TSH'],
    questionsForDoctor: ['Is my low cholesterol concerning?'],
  },
  relatedTests: [
    { testId: 'ldl', testName: 'LDL Cholesterol', relationship: 'complements', whenToOrder: 'Always together in lipid panel', interpretationContext: 'LDL is the primary treatment target' },
    { testId: 'hdl', testName: 'HDL Cholesterol', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'High HDL is protective' },
  ],
  associatedConditions: [
    { condition: 'Atherosclerosis', direction: 'elevated', typicalPattern: 'Elevated LDL component', sensitivity: 'moderate', specificity: 'low', notes: 'Risk factor for ASCVD' },
    { condition: 'Familial hypercholesterolemia', direction: 'elevated', typicalPattern: 'Very high TC and LDL', sensitivity: 'high', specificity: 'moderate', notes: 'Consider if LDL >190' },
  ],
  interferingFactors: [
    { factor: 'Non-fasting', effect: 'falsely-elevated', mechanism: 'Postprandial lipemia', clinicalRelevance: 'Minor for TC', mitigation: 'Fasting preferred but not required' },
  ],
  temporalPatterns: [
    { scenario: 'Statin therapy', pattern: 'Falls 30-50% over 4-6 weeks', timeframe: 'Weeks', clinicalUse: 'Recheck lipids 4-12 weeks after starting statin' },
  ],
  clinicalPearls: ['LDL is the primary target, not total cholesterol', 'Total cholesterol can be misleading if HDL is very high', 'Non-fasting lipid panels are acceptable for screening'],
  patientQuestions: ['What should my cholesterol be?', 'Do I need a statin?'],
};

const LDL_CHOLESTEROL: LabTestEducation = {
  id: 'ldl',
  name: 'LDL Cholesterol',
  abbreviations: ['LDL', 'LDL-C', 'Bad cholesterol'],
  category: 'lipid',
  specimen: 'serum',
  resultType: 'calculated',
  whatItMeasures: 'LDL (low-density lipoprotein) is the "bad" cholesterol that deposits in artery walls. Its the primary target for cardiovascular disease prevention.',
  physiologicalBasis: {
    analyte: 'Low-density lipoprotein cholesterol',
    source: 'Liver produces VLDL, which becomes LDL; also dietary absorption',
    normalFunction: 'Delivers cholesterol to peripheral tissues',
    regulation: 'LDL receptors on liver remove LDL from blood; regulated by intracellular cholesterol',
    clearance: 'Hepatic LDL receptor uptake (main route)',
    involvedOrgans: ['Liver', 'Peripheral tissues', 'Arteries (pathological)'],
    metabolicPathways: ['VLDL to LDL conversion', 'LDL receptor pathway'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18, fasting: true }, lowValue: 0, highValue: 100, unit: 'mg/dL', notes: 'Optimal <100; goal varies by risk' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High LDL is the main driver of atherosclerosis. Lower is better, especially if you have cardiovascular risk factors.',
    pathophysiology: 'LDL particles penetrate artery walls, become oxidized, trigger inflammation, and form atherosclerotic plaques.',
    causeCategories: [
      { category: 'Genetic', description: 'Inherited disorders', examples: ['Familial hypercholesterolemia', 'Polygenic'] },
      { category: 'Diet/lifestyle', description: 'Modifiable factors', examples: ['High saturated fat', 'Trans fats', 'Sedentary lifestyle'] },
      { category: 'Secondary', description: 'Other conditions', examples: ['Hypothyroidism', 'Diabetes', 'Nephrotic syndrome'] },
    ],
    commonCauses: [
      { cause: 'Diet/lifestyle', mechanism: 'Saturated fat increases hepatic cholesterol', typicalLevel: 'mild', associatedFindings: ['Elevated total cholesterol'], clinicalContext: 'Poor diet, obesity' },
      { cause: 'Genetic predisposition', mechanism: 'Reduced LDL receptor function', typicalLevel: 'moderate', associatedFindings: ['Family history'], clinicalContext: 'Family history of high cholesterol' },
    ],
    lessCauses: [
      { cause: 'Familial hypercholesterolemia', mechanism: 'LDL receptor gene mutations', typicalLevel: 'severe', associatedFindings: ['LDL >190 untreated', 'Tendon xanthomas', 'Early CAD'], clinicalContext: 'Very high LDL from childhood' },
    ],
    severityGuidance: [
      { level: 'mild', range: '100-129 mg/dL', clinicalSignificance: 'Near/above optimal', typicalCauses: ['Diet', 'Genetics'], urgency: 'routine' },
      { level: 'moderate', range: '130-189 mg/dL', clinicalSignificance: 'Borderline-high to high', typicalCauses: ['Diet + genetics'], urgency: 'routine' },
      { level: 'severe', range: '>=190 mg/dL', clinicalSignificance: 'Very high; consider FH', typicalCauses: ['Familial hypercholesterolemia'], urgency: 'soon' },
    ],
    worryingFeatures: ['LDL >190', 'Personal or family history of premature ASCVD', 'Diabetes', 'Multiple risk factors'],
    followUpTests: ['10-year ASCVD risk calculation', 'Coronary calcium score if intermediate risk', 'Lp(a)', 'ApoB'],
    questionsForDoctor: ['What is my LDL goal?', 'Do I need a statin?', 'Could I have familial hypercholesterolemia?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low LDL is generally good for cardiovascular health. Very low LDL from aggressive treatment is safe.',
    pathophysiology: 'Low LDL reduces atherosclerosis progression. No lower limit for cardiovascular benefit.',
    causeCategories: [
      { category: 'Treatment', description: 'Lipid-lowering therapy', examples: ['Statins', 'PCSK9 inhibitors', 'Ezetimibe'] },
      { category: 'Genetic', description: 'Inherited low LDL', examples: ['PCSK9 loss-of-function', 'Hypobetalipoproteinemia'] },
    ],
    commonCauses: [
      { cause: 'Statin therapy', mechanism: 'Increases LDL receptor expression', typicalLevel: 'moderate', associatedFindings: ['On statin medication'], clinicalContext: 'Expected with treatment' },
    ],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: ['Is my LDL low enough?'],
  },
  relatedTests: [
    { testId: 'total-cholesterol', testName: 'Total Cholesterol', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'LDL typically calculated from TC, HDL, TG' },
    { testId: 'hdl', testName: 'HDL', relationship: 'contrasts', whenToOrder: 'Always together', interpretationContext: 'HDL is protective; LDL is harmful' },
  ],
  associatedConditions: [
    { condition: 'Coronary artery disease', direction: 'elevated', typicalPattern: 'Elevated LDL promotes atherosclerosis', sensitivity: 'moderate', specificity: 'low', notes: 'Major modifiable risk factor' },
  ],
  interferingFactors: [
    { factor: 'Non-fasting', effect: 'variable', mechanism: 'Calculation affected by elevated TG', clinicalRelevance: 'Direct LDL more accurate if TG high', mitigation: 'Fasting or direct LDL measurement' },
    { factor: 'Very high triglycerides', effect: 'falsely-decreased', mechanism: 'Friedewald equation inaccurate if TG>400', clinicalRelevance: 'Use direct LDL', mitigation: 'Direct LDL measurement' },
  ],
  temporalPatterns: [
    { scenario: 'Statin initiation', pattern: 'LDL drops 30-50% by 4 weeks', timeframe: 'Weeks', clinicalUse: 'Recheck 4-12 weeks after starting' },
  ],
  clinicalPearls: ['LDL is THE primary lipid target', 'Lower LDL = lower cardiovascular events', 'LDL >190 suggests familial hypercholesterolemia', 'Consider non-HDL-C if TG elevated'],
  patientQuestions: ['What is my LDL goal?', 'How much can diet lower my LDL?'],
};

const HDL_CHOLESTEROL: LabTestEducation = {
  id: 'hdl',
  name: 'HDL Cholesterol',
  abbreviations: ['HDL', 'HDL-C', 'Good cholesterol'],
  category: 'lipid',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'HDL (high-density lipoprotein) is the "good" cholesterol that removes cholesterol from arteries and returns it to the liver. Higher levels are protective.',
  physiologicalBasis: {
    analyte: 'High-density lipoprotein cholesterol',
    source: 'Liver and intestines produce HDL particles',
    normalFunction: 'Reverse cholesterol transport - removes cholesterol from peripheral tissues and atherosclerotic plaques',
    regulation: 'Exercise, alcohol (modest), genetics; reduced by obesity, smoking, high carbs',
    clearance: 'Delivers cholesterol to liver for excretion',
    involvedOrgans: ['Liver', 'Intestines', 'Peripheral tissues'],
    metabolicPathways: ['Reverse cholesterol transport', 'HDL remodeling'],
  },
  referenceRanges: [
    { population: { sex: 'male', ageMin: 18 }, lowValue: 40, highValue: 999, unit: 'mg/dL', notes: 'Low if <40' },
    { population: { sex: 'female', ageMin: 18 }, lowValue: 50, highValue: 999, unit: 'mg/dL', notes: 'Low if <50' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High HDL is generally cardioprotective. Very high HDL (>100) may sometimes be less protective due to HDL dysfunction.',
    pathophysiology: 'HDL removes cholesterol from artery walls (reverse cholesterol transport), reducing atherosclerosis.',
    causeCategories: [
      { category: 'Lifestyle', description: 'Positive behaviors', examples: ['Regular exercise', 'Moderate alcohol', 'Weight loss'] },
      { category: 'Genetic', description: 'Inherited high HDL', examples: ['CETP deficiency', 'Familial hyperalphalipoproteinemia'] },
    ],
    commonCauses: [
      { cause: 'Exercise', mechanism: 'Increases HDL production', typicalLevel: 'mild', associatedFindings: ['Active lifestyle'], clinicalContext: 'Regular aerobic exercise' },
      { cause: 'Moderate alcohol', mechanism: 'Increases HDL synthesis', typicalLevel: 'mild', associatedFindings: ['Moderate alcohol intake'], clinicalContext: '1-2 drinks/day' },
    ],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: ['Is my HDL protective?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low HDL increases cardiovascular disease risk. Its often part of metabolic syndrome with obesity, diabetes, and high triglycerides.',
    pathophysiology: 'Low HDL impairs reverse cholesterol transport, allowing cholesterol to accumulate in arteries.',
    causeCategories: [
      { category: 'Metabolic syndrome', description: 'Insulin resistance cluster', examples: ['Obesity', 'Type 2 diabetes', 'High triglycerides'] },
      { category: 'Lifestyle', description: 'Modifiable factors', examples: ['Smoking', 'Sedentary lifestyle', 'High carbohydrate diet'] },
      { category: 'Genetic', description: 'Inherited low HDL', examples: ['Tangier disease', 'LCAT deficiency'] },
      { category: 'Medications', description: 'Drug-induced', examples: ['Beta-blockers', 'Anabolic steroids', 'Progestins'] },
    ],
    commonCauses: [
      { cause: 'Metabolic syndrome', mechanism: 'Insulin resistance increases TG, decreases HDL', typicalLevel: 'moderate', associatedFindings: ['High triglycerides', 'Central obesity', 'High glucose'], clinicalContext: 'Obesity, prediabetes/diabetes' },
      { cause: 'Smoking', mechanism: 'Reduces HDL levels', typicalLevel: 'mild', associatedFindings: ['Tobacco use'], clinicalContext: 'Smoker' },
      { cause: 'Sedentary lifestyle', mechanism: 'Lack of exercise reduces HDL', typicalLevel: 'mild', associatedFindings: ['Low activity'], clinicalContext: 'Inactive lifestyle' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: 'Men: 35-40, Women: 45-50 mg/dL', clinicalSignificance: 'Borderline low', typicalCauses: ['Lifestyle', 'Metabolic'], urgency: 'routine' },
      { level: 'severe', range: '<30 mg/dL', clinicalSignificance: 'Very low; increased CV risk', typicalCauses: ['Severe metabolic syndrome', 'Genetic'], urgency: 'routine' },
    ],
    worryingFeatures: ['Very low HDL (<30)', 'Combined with high LDL and TG', 'Metabolic syndrome features'],
    followUpTests: ['Triglycerides', 'Glucose/A1c', 'Metabolic syndrome evaluation'],
    questionsForDoctor: ['How can I raise my HDL?', 'Do I have metabolic syndrome?'],
  },
  relatedTests: [
    { testId: 'ldl', testName: 'LDL', relationship: 'contrasts', whenToOrder: 'Always together', interpretationContext: 'Low HDL + high LDL = high atherogenic risk' },
    { testId: 'triglycerides', testName: 'Triglycerides', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'Low HDL often accompanies high TG' },
  ],
  associatedConditions: [
    { condition: 'Metabolic syndrome', direction: 'decreased', typicalPattern: 'Low HDL with high TG, central obesity', sensitivity: 'moderate', specificity: 'moderate', notes: 'Diagnostic criterion for metabolic syndrome' },
  ],
  interferingFactors: [
    { factor: 'Acute illness', effect: 'falsely-decreased', mechanism: 'Acute phase response', clinicalRelevance: 'Wait until recovered', mitigation: 'Recheck when well' },
  ],
  temporalPatterns: [
    { scenario: 'Exercise program', pattern: 'HDL rises 5-10% over months', timeframe: 'Months', clinicalUse: 'Encourage sustained exercise' },
    { scenario: 'Smoking cessation', pattern: 'HDL improves within weeks', timeframe: 'Weeks', clinicalUse: 'Benefit of quitting' },
  ],
  clinicalPearls: ['Low HDL is a cardiovascular risk factor but NOT a treatment target', 'Drugs that raise HDL have not reduced CV events', 'Focus on raising HDL through lifestyle (exercise, smoking cessation)'],
  patientQuestions: ['How can I increase my HDL naturally?', 'Is there medication for low HDL?'],
};

const TRIGLYCERIDES: LabTestEducation = {
  id: 'triglycerides',
  name: 'Triglycerides',
  abbreviations: ['TG', 'Trig'],
  category: 'lipid',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Triglycerides are fats in your blood. They come from food and are also made by your liver. High levels increase cardiovascular risk and can cause pancreatitis.',
  physiologicalBasis: {
    analyte: 'Triglycerides (triacylglycerols)',
    source: 'Dietary fat (chylomicrons) and liver synthesis (VLDL)',
    normalFunction: 'Energy storage and transport; released from adipose tissue when needed',
    regulation: 'Insulin promotes TG storage; fasting releases TG; lipoprotein lipase clears TG',
    clearance: 'Lipoprotein lipase in capillaries breaks down TG for tissue uptake',
    involvedOrgans: ['Liver', 'Adipose tissue', 'Muscle', 'Intestines'],
    metabolicPathways: ['Lipoprotein metabolism', 'Fatty acid synthesis', 'Beta-oxidation'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18, fasting: true }, lowValue: 0, highValue: 150, unit: 'mg/dL', notes: 'Normal <150' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High triglycerides increase cardiovascular risk and very high levels can cause acute pancreatitis. Theyre often elevated with obesity, diabetes, and metabolic syndrome.',
    pathophysiology: 'Elevated TG reflects increased VLDL production (insulin resistance, excess calories) or decreased clearance (lipoprotein lipase deficiency).',
    causeCategories: [
      { category: 'Metabolic/lifestyle', description: 'Most common causes', examples: ['Obesity', 'Diabetes', 'High carbohydrate diet', 'Excess alcohol'] },
      { category: 'Secondary', description: 'Due to other conditions', examples: ['Hypothyroidism', 'Nephrotic syndrome', 'Chronic kidney disease'] },
      { category: 'Medications', description: 'Drug-induced', examples: ['Estrogens', 'Beta-blockers', 'Thiazides', 'Retinoids', 'Steroids'] },
      { category: 'Genetic', description: 'Inherited disorders', examples: ['Familial hypertriglyceridemia', 'Familial combined hyperlipidemia'] },
    ],
    commonCauses: [
      { cause: 'Obesity/metabolic syndrome', mechanism: 'Insulin resistance increases hepatic VLDL production', typicalLevel: 'moderate', associatedFindings: ['Low HDL', 'Central obesity', 'High glucose'], clinicalContext: 'Obesity, prediabetes' },
      { cause: 'Uncontrolled diabetes', mechanism: 'Insulin deficiency/resistance impairs lipoprotein lipase', typicalLevel: 'moderate', associatedFindings: ['High glucose', 'A1c elevated'], clinicalContext: 'Poorly controlled diabetes' },
      { cause: 'Excess alcohol', mechanism: 'Alcohol increases hepatic TG synthesis', typicalLevel: 'variable', associatedFindings: ['Elevated GGT'], clinicalContext: 'Heavy drinking' },
    ],
    lessCauses: [
      { cause: 'Familial hypertriglyceridemia', mechanism: 'Genetic overproduction of VLDL', typicalLevel: 'severe', associatedFindings: ['Very high TG', 'Family history'], clinicalContext: 'Very high levels, pancreatitis history' },
    ],
    severityGuidance: [
      { level: 'mild', range: '150-199 mg/dL', clinicalSignificance: 'Borderline high', typicalCauses: ['Lifestyle', 'Diet'], urgency: 'routine' },
      { level: 'moderate', range: '200-499 mg/dL', clinicalSignificance: 'High; increases CV risk', typicalCauses: ['Metabolic syndrome', 'Diabetes'], urgency: 'routine' },
      { level: 'severe', range: '500-999 mg/dL', clinicalSignificance: 'Very high; pancreatitis risk', typicalCauses: ['Diabetes + genetic', 'Severe insulin resistance'], urgency: 'soon' },
      { level: 'critical', range: '>=1000 mg/dL', clinicalSignificance: 'Extremely high; high pancreatitis risk', typicalCauses: ['Genetic + secondary causes'], urgency: 'urgent' },
    ],
    worryingFeatures: ['TG >500 (pancreatitis risk)', 'History of pancreatitis', 'Lipemic (milky) serum', 'Eruptive xanthomas'],
    followUpTests: ['Glucose/A1c', 'TSH', 'Liver function tests', 'Renal function', 'Secondary cause workup'],
    questionsForDoctor: ['What is causing my high triglycerides?', 'Am I at risk for pancreatitis?', 'What dietary changes should I make?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low triglycerides are not concerning and dont require treatment.',
    pathophysiology: 'Low TG reflects efficient metabolism or reduced intake.',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'hdl', testName: 'HDL', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'High TG often with low HDL (metabolic syndrome)' },
    { testId: 'glucose', testName: 'Glucose', relationship: 'complements', whenToOrder: 'With elevated TG', interpretationContext: 'Assess for diabetes/insulin resistance' },
  ],
  associatedConditions: [
    { condition: 'Acute pancreatitis', direction: 'elevated', typicalPattern: 'Very high TG (>1000) can cause pancreatitis', sensitivity: 'moderate', specificity: 'moderate', notes: 'TG >500 increases risk' },
    { condition: 'Metabolic syndrome', direction: 'elevated', typicalPattern: 'High TG with low HDL', sensitivity: 'moderate', specificity: 'moderate', notes: 'Diagnostic criterion' },
  ],
  interferingFactors: [
    { factor: 'Non-fasting', effect: 'falsely-elevated', mechanism: 'Postprandial lipemia from dietary fat', clinicalRelevance: 'Fasting important for TG', mitigation: '9-12 hour fast recommended' },
    { factor: 'Recent alcohol', effect: 'falsely-elevated', mechanism: 'Alcohol increases TG synthesis', clinicalRelevance: 'Avoid alcohol before test', mitigation: 'No alcohol 24-48 hours before' },
  ],
  temporalPatterns: [
    { scenario: 'Dietary intervention', pattern: 'TG can drop 20-50% with diet changes', timeframe: 'Weeks', clinicalUse: 'Encourage low-carb, low-alcohol diet' },
    { scenario: 'Fibrate therapy', pattern: 'TG drops 30-50% in weeks', timeframe: 'Weeks', clinicalUse: 'Consider if very high TG' },
  ],
  clinicalPearls: ['Fasting is more important for TG than other lipids', 'TG >500 = pancreatitis risk; >1000 = high risk', 'High TG makes calculated LDL inaccurate', 'Treat underlying cause first (diabetes, alcohol, diet)'],
  patientQuestions: ['Can diet lower my triglycerides?', 'Do I need medication?', 'Should I avoid alcohol?'],
};

const HEMOGLOBIN_A1C: LabTestEducation = {
  id: 'hba1c',
  name: 'Hemoglobin A1c',
  abbreviations: ['HbA1c', 'A1c', 'Glycated Hemoglobin'],
  category: 'endocrine',
  specimen: 'whole-blood',
  resultType: 'numeric',
  whatItMeasures: 'HbA1c measures your average blood sugar over the past 2-3 months by showing how much glucose has attached to hemoglobin in red blood cells.',
  physiologicalBasis: {
    analyte: 'Glycated hemoglobin (glucose-bound)',
    source: 'Red blood cells with glucose-modified hemoglobin',
    normalFunction: 'Reflects cumulative glucose exposure over RBC lifespan (~120 days)',
    regulation: 'Proportional to average blood glucose levels',
    clearance: 'Follows RBC turnover (120-day lifespan)',
    involvedOrgans: ['Red blood cells', 'Pancreas (insulin)', 'All glucose-metabolizing tissues'],
    metabolicPathways: ['Non-enzymatic glycation', 'Glucose metabolism'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 4.0, highValue: 5.6, unit: '%', notes: 'Normal' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Elevated A1c means your average blood sugar has been high. A1c 5.7-6.4% indicates prediabetes; >=6.5% indicates diabetes.',
    pathophysiology: 'High blood glucose causes more glucose to bind irreversibly to hemoglobin. The higher the average glucose, the higher the A1c.',
    causeCategories: [
      { category: 'Diabetes mellitus', description: 'Insufficient insulin or insulin resistance', examples: ['Type 1 diabetes', 'Type 2 diabetes', 'LADA'] },
      { category: 'Prediabetes', description: 'Early glucose dysregulation', examples: ['Impaired fasting glucose', 'Impaired glucose tolerance'] },
    ],
    commonCauses: [
      { cause: 'Type 2 diabetes', mechanism: 'Insulin resistance and relative deficiency', typicalLevel: 'variable', associatedFindings: ['Elevated fasting glucose', 'Metabolic syndrome features'], clinicalContext: 'Obesity, family history' },
      { cause: 'Prediabetes', mechanism: 'Early insulin resistance', typicalLevel: 'mild', associatedFindings: ['FPG 100-125', 'Metabolic syndrome'], clinicalContext: 'Overweight, family history' },
    ],
    lessCauses: [
      { cause: 'Type 1 diabetes', mechanism: 'Autoimmune beta cell destruction', typicalLevel: 'severe', associatedFindings: ['Very high glucose at diagnosis', 'Ketones'], clinicalContext: 'Younger, weight loss, polyuria' },
    ],
    severityGuidance: [
      { level: 'mild', range: '5.7-6.4%', clinicalSignificance: 'Prediabetes - increased diabetes risk', typicalCauses: ['Prediabetes', 'Insulin resistance'], urgency: 'routine' },
      { level: 'moderate', range: '6.5-8%', clinicalSignificance: 'Diabetes - treatment indicated', typicalCauses: ['Diabetes'], urgency: 'routine' },
      { level: 'severe', range: '>9%', clinicalSignificance: 'Poorly controlled diabetes - high complication risk', typicalCauses: ['Uncontrolled diabetes'], urgency: 'soon' },
    ],
    worryingFeatures: ['A1c >10%', 'Rapidly rising A1c', 'Symptoms of hyperglycemia', 'Ketones'],
    followUpTests: ['Fasting glucose', 'Lipid panel', 'Renal function', 'Urine microalbumin', 'Dilated eye exam'],
    questionsForDoctor: ['Do I have diabetes?', 'What should my A1c target be?', 'How can I lower my A1c?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low A1c can indicate frequent hypoglycemia or conditions affecting red blood cells.',
    pathophysiology: 'Low A1c from: (1) Frequent low blood sugars, (2) Shortened RBC lifespan (hemolysis), (3) Anemia, (4) Blood loss.',
    causeCategories: [
      { category: 'Hypoglycemia', description: 'Low blood sugars', examples: ['Insulin excess', 'Sulfonylurea use', 'Insulinoma'] },
      { category: 'RBC conditions', description: 'Shortened RBC survival', examples: ['Hemolytic anemia', 'Blood loss', 'Chronic kidney disease'] },
    ],
    commonCauses: [
      { cause: 'Overtreatment of diabetes', mechanism: 'Frequent hypoglycemia lowers average glucose', typicalLevel: 'mild', associatedFindings: ['Hypoglycemia symptoms'], clinicalContext: 'On insulin or sulfonylureas' },
    ],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: ['Unexplained low A1c', 'Hypoglycemia symptoms', 'Anemia'],
    followUpTests: ['CBC', 'Reticulocyte count', 'Glucose monitoring'],
    questionsForDoctor: ['Am I having low blood sugars?', 'Is my A1c accurate?'],
  },
  relatedTests: [
    { testId: 'glucose', testName: 'Fasting Glucose', relationship: 'complements', whenToOrder: 'For diagnosis and monitoring', interpretationContext: 'A1c shows long-term control; glucose shows point-in-time' },
  ],
  associatedConditions: [
    { condition: 'Diabetes mellitus', direction: 'elevated', typicalPattern: '>=6.5% for diagnosis', sensitivity: 'moderate', specificity: 'high', notes: 'Diagnostic criterion' },
    { condition: 'Prediabetes', direction: 'elevated', typicalPattern: '5.7-6.4%', sensitivity: 'moderate', specificity: 'moderate', notes: 'High risk for progression' },
  ],
  interferingFactors: [
    { factor: 'Hemoglobin variants', effect: 'variable', mechanism: 'Sickle cell, thalassemia affect some assays', clinicalRelevance: 'May be falsely high or low', mitigation: 'Use alternative assays or fructosamine' },
    { factor: 'Anemia/hemolysis', effect: 'falsely-decreased', mechanism: 'Shortened RBC survival', clinicalRelevance: 'A1c underestimates glucose', mitigation: 'Use fructosamine or CGM' },
    { factor: 'Recent transfusion', effect: 'variable', mechanism: 'Donor RBCs affect result', clinicalRelevance: 'Wait 3 months after transfusion', mitigation: 'Use alternative markers' },
  ],
  temporalPatterns: [
    { scenario: 'Treatment initiation', pattern: 'A1c drops over 2-3 months with improved control', timeframe: 'Months', clinicalUse: 'Recheck every 3 months until at goal' },
  ],
  clinicalPearls: ['A1c reflects 2-3 month average, weighted toward recent weeks', 'Each 1% A1c change = ~30 mg/dL average glucose change', 'Target usually <7% for most adults with diabetes', 'A1c may be inaccurate with hemoglobinopathies or altered RBC turnover'],
  patientQuestions: ['What does my A1c mean?', 'What should my A1c target be?', 'How often should I check it?'],
};

const CHLORIDE: LabTestEducation = {
  id: 'chloride',
  name: 'Chloride',
  abbreviations: ['Cl'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Chloride is an electrolyte that helps maintain fluid balance, blood volume, and acid-base balance. It typically moves opposite to bicarbonate.',
  physiologicalBasis: {
    analyte: 'Chloride ion',
    source: 'Dietary salt (sodium chloride)',
    normalFunction: 'Maintains electrical neutrality, fluid balance, and acid-base status',
    regulation: 'Kidneys regulate excretion; moves opposite to bicarbonate',
    clearance: 'Renal excretion',
    involvedOrgans: ['Kidneys', 'GI tract', 'Sweat glands'],
    metabolicPathways: ['Acid-base balance', 'Fluid homeostasis'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 98, highValue: 106, unit: 'mEq/L' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High chloride (hyperchloremia) often indicates dehydration or metabolic acidosis. It usually moves opposite to bicarbonate.',
    pathophysiology: 'Chloride rises with: (1) Dehydration (concentration), (2) Loss of bicarbonate (diarrhea, renal tubular acidosis), (3) Excess saline infusion.',
    causeCategories: [
      { category: 'Dehydration', description: 'Water loss concentrates electrolytes', examples: ['Poor intake', 'Diabetes insipidus'] },
      { category: 'Metabolic acidosis', description: 'Bicarbonate loss raises chloride', examples: ['Diarrhea', 'Renal tubular acidosis'] },
      { category: 'Iatrogenic', description: 'Treatment-related', examples: ['Excess normal saline', 'Certain medications'] },
    ],
    commonCauses: [
      { cause: 'Diarrhea', mechanism: 'Bicarbonate loss in stool raises chloride', typicalLevel: 'mild', associatedFindings: ['Low bicarbonate', 'Non-anion gap acidosis'], clinicalContext: 'Recent diarrhea' },
      { cause: 'Normal saline infusion', mechanism: 'Excess chloride administration', typicalLevel: 'mild', associatedFindings: ['High chloride', 'Normal anion gap acidosis'], clinicalContext: 'Hospitalized, receiving IV fluids' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '107-115 mEq/L', clinicalSignificance: 'Common with dehydration or mild acidosis', typicalCauses: ['Dehydration', 'Diarrhea'], urgency: 'routine' },
    ],
    worryingFeatures: ['Severe acidosis', 'Associated with significant bicarbonate loss'],
    followUpTests: ['CO2/bicarbonate', 'Anion gap', 'BUN/Cr', 'Arterial blood gas if severe'],
    questionsForDoctor: ['Why is my chloride high?', 'Do I have an acid-base problem?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low chloride (hypochloremia) usually indicates vomiting, diuretic use, or metabolic alkalosis.',
    pathophysiology: 'Chloride falls with: (1) Vomiting (loss of HCl), (2) Diuretics (increased excretion), (3) Conditions causing metabolic alkalosis.',
    causeCategories: [
      { category: 'GI losses', description: 'Loss from stomach', examples: ['Vomiting', 'Nasogastric suction'] },
      { category: 'Renal losses', description: 'Increased urinary excretion', examples: ['Loop/thiazide diuretics', 'Bartter syndrome'] },
      { category: 'Dilution', description: 'Excess water', examples: ['SIADH', 'Water intoxication'] },
    ],
    commonCauses: [
      { cause: 'Vomiting', mechanism: 'Loss of gastric HCl', typicalLevel: 'moderate', associatedFindings: ['High bicarbonate', 'Metabolic alkalosis'], clinicalContext: 'Recent vomiting' },
      { cause: 'Diuretics', mechanism: 'Increased renal chloride loss', typicalLevel: 'mild', associatedFindings: ['Low potassium', 'Metabolic alkalosis'], clinicalContext: 'On loop or thiazide diuretics' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '90-97 mEq/L', clinicalSignificance: 'Common with diuretics or mild vomiting', typicalCauses: ['Diuretics', 'Vomiting'], urgency: 'routine' },
      { level: 'severe', range: '<90 mEq/L', clinicalSignificance: 'Significant depletion', typicalCauses: ['Severe vomiting', 'NG suction'], urgency: 'soon' },
    ],
    worryingFeatures: ['Severe metabolic alkalosis', 'Associated hypokalemia'],
    followUpTests: ['Bicarbonate', 'Potassium', 'Arterial blood gas'],
    questionsForDoctor: ['Is this from my medication?', 'Do I need to replace chloride?'],
  },
  relatedTests: [
    { testId: 'sodium', testName: 'Sodium', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'Sodium and chloride usually move together' },
    { testId: 'co2', testName: 'CO2/Bicarbonate', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'Chloride and bicarbonate move opposite' },
  ],
  associatedConditions: [
    { condition: 'Metabolic alkalosis', direction: 'decreased', typicalPattern: 'Low Cl with high bicarbonate', sensitivity: 'moderate', specificity: 'moderate', notes: 'Chloride-responsive alkalosis' },
    { condition: 'Normal anion gap acidosis', direction: 'elevated', typicalPattern: 'High Cl with low bicarbonate', sensitivity: 'moderate', specificity: 'moderate', notes: 'Hyperchloremic acidosis' },
  ],
  interferingFactors: [],
  temporalPatterns: [],
  clinicalPearls: ['Chloride and bicarbonate move in opposite directions', 'Use anion gap to interpret chloride in context', 'High chloride acidosis = normal anion gap acidosis'],
  patientQuestions: ['Why does chloride matter?', 'How does it relate to my acid-base balance?'],
};

const CO2_BICARBONATE: LabTestEducation = {
  id: 'co2',
  name: 'Carbon Dioxide (Bicarbonate)',
  abbreviations: ['CO2', 'HCO3', 'Bicarb'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Serum CO2 mostly measures bicarbonate, the main buffer in your blood. It indicates your acid-base status.',
  physiologicalBasis: {
    analyte: 'Total CO2 (mostly bicarbonate)',
    source: 'Generated from CO2 + H2O ↔ H2CO3 ↔ HCO3- + H+',
    normalFunction: 'Primary blood buffer; maintains pH in normal range',
    regulation: 'Kidneys regulate bicarbonate reabsorption/excretion; lungs regulate CO2',
    clearance: 'Kidneys excrete or regenerate bicarbonate; lungs excrete CO2',
    involvedOrgans: ['Kidneys', 'Lungs', 'Red blood cells'],
    metabolicPathways: ['Acid-base buffering', 'Carbonic anhydrase system'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 23, highValue: 29, unit: 'mEq/L' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High CO2/bicarbonate indicates metabolic alkalosis (too much base) or compensation for respiratory acidosis (chronic lung disease).',
    pathophysiology: 'Bicarbonate rises with: (1) Loss of acid (vomiting), (2) Gain of base (excess bicarbonate), (3) Compensation for chronic hypercapnia.',
    causeCategories: [
      { category: 'Metabolic alkalosis', description: 'Primary bicarbonate excess', examples: ['Vomiting', 'Diuretics', 'Excess alkali intake'] },
      { category: 'Respiratory compensation', description: 'Response to chronic CO2 retention', examples: ['COPD', 'Chronic respiratory failure'] },
    ],
    commonCauses: [
      { cause: 'Vomiting', mechanism: 'Loss of gastric acid', typicalLevel: 'moderate', associatedFindings: ['Low chloride', 'Low potassium'], clinicalContext: 'Recent vomiting' },
      { cause: 'Diuretics', mechanism: 'Volume contraction alkalosis', typicalLevel: 'mild', associatedFindings: ['Low potassium', 'Low chloride'], clinicalContext: 'On loop/thiazide diuretics' },
      { cause: 'COPD compensation', mechanism: 'Kidneys retain bicarbonate to compensate for CO2 retention', typicalLevel: 'mild', associatedFindings: ['Chronic respiratory disease'], clinicalContext: 'Known COPD' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '30-35 mEq/L', clinicalSignificance: 'Mild alkalosis or COPD compensation', typicalCauses: ['Diuretics', 'COPD'], urgency: 'routine' },
      { level: 'severe', range: '>40 mEq/L', clinicalSignificance: 'Significant metabolic alkalosis', typicalCauses: ['Severe vomiting', 'Alkali ingestion'], urgency: 'soon' },
    ],
    worryingFeatures: ['Very high bicarbonate', 'Associated with severe hypokalemia', 'Neurologic symptoms'],
    followUpTests: ['Arterial blood gas', 'Potassium', 'Chloride', 'Urine chloride'],
    questionsForDoctor: ['Do I have metabolic alkalosis?', 'Is this from my medications?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low CO2/bicarbonate indicates metabolic acidosis (too much acid) or compensation for respiratory alkalosis (hyperventilation).',
    pathophysiology: 'Bicarbonate falls with: (1) Increased acid production (DKA, lactic acidosis), (2) Bicarbonate loss (diarrhea, RTA), (3) Compensation for hyperventilation.',
    causeCategories: [
      { category: 'Metabolic acidosis', description: 'Acid accumulation or bicarbonate loss', examples: ['DKA', 'Lactic acidosis', 'Renal failure', 'Diarrhea'] },
      { category: 'Respiratory compensation', description: 'Response to hyperventilation', examples: ['Anxiety', 'Pain', 'Sepsis early'] },
    ],
    commonCauses: [
      { cause: 'Diarrhea', mechanism: 'Bicarbonate loss in stool', typicalLevel: 'mild', associatedFindings: ['High chloride', 'Normal anion gap'], clinicalContext: 'Recent diarrhea' },
      { cause: 'Diabetic ketoacidosis', mechanism: 'Ketoacid accumulation', typicalLevel: 'severe', associatedFindings: ['High glucose', 'Ketones', 'High anion gap'], clinicalContext: 'Diabetes, nausea, abdominal pain' },
      { cause: 'Chronic kidney disease', mechanism: 'Impaired acid excretion', typicalLevel: 'mild', associatedFindings: ['Elevated creatinine', 'Normal/high anion gap'], clinicalContext: 'Known CKD' },
    ],
    lessCauses: [
      { cause: 'Lactic acidosis', mechanism: 'Lactate accumulation from tissue hypoxia', typicalLevel: 'severe', associatedFindings: ['High lactate', 'High anion gap'], clinicalContext: 'Shock, sepsis, tissue hypoperfusion' },
    ],
    severityGuidance: [
      { level: 'mild', range: '18-22 mEq/L', clinicalSignificance: 'Mild acidosis', typicalCauses: ['Mild diarrhea', 'Early CKD'], urgency: 'routine' },
      { level: 'moderate', range: '12-17 mEq/L', clinicalSignificance: 'Moderate acidosis - needs evaluation', typicalCauses: ['Significant acidosis'], urgency: 'soon' },
      { level: 'severe', range: '<12 mEq/L', clinicalSignificance: 'Severe acidosis - dangerous', typicalCauses: ['DKA', 'Severe lactic acidosis'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Very low bicarbonate (<10)', 'High anion gap', 'Altered mental status', 'Kussmaul breathing'],
    followUpTests: ['Anion gap', 'Arterial blood gas', 'Lactate', 'Ketones', 'BUN/Cr'],
    questionsForDoctor: ['What is causing my acidosis?', 'Is this an emergency?'],
  },
  relatedTests: [
    { testId: 'chloride', testName: 'Chloride', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'Calculate anion gap: Na - (Cl + CO2)' },
  ],
  associatedConditions: [
    { condition: 'Diabetic ketoacidosis', direction: 'decreased', typicalPattern: 'Very low with high anion gap', sensitivity: 'high', specificity: 'moderate', notes: 'Medical emergency' },
    { condition: 'COPD', direction: 'elevated', typicalPattern: 'Chronic elevation as compensation', sensitivity: 'moderate', specificity: 'low', notes: 'Metabolic compensation for respiratory acidosis' },
  ],
  interferingFactors: [
    { factor: 'Air exposure', effect: 'falsely-decreased', mechanism: 'CO2 escapes from sample', clinicalRelevance: 'Process samples quickly', mitigation: 'Minimize air exposure' },
  ],
  temporalPatterns: [],
  clinicalPearls: ['Always calculate anion gap when CO2 is low', 'High anion gap = added acid (DKA, lactic, uremia, toxins)', 'Normal anion gap = bicarbonate loss (diarrhea, RTA)', 'Low CO2 + low pCO2 = respiratory alkalosis'],
  patientQuestions: ['What does bicarbonate do?', 'Why is my CO2 abnormal?'],
};

const CALCIUM: LabTestEducation = {
  id: 'calcium',
  name: 'Calcium',
  abbreviations: ['Ca', 'Total Ca'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Calcium is essential for bones, muscle function, nerve signaling, and blood clotting. About half is bound to albumin; half is "free" (active).',
  physiologicalBasis: {
    analyte: 'Total serum calcium (bound + ionized)',
    source: 'Diet; 99% stored in bones',
    normalFunction: 'Bone structure, muscle contraction, nerve conduction, blood clotting, enzyme function',
    regulation: 'PTH (increases Ca), vitamin D (increases absorption), calcitonin (decreases Ca)',
    clearance: 'Kidney excretion (PTH-regulated), bone deposition',
    involvedOrgans: ['Bones', 'Kidneys', 'Parathyroid glands', 'Intestines'],
    metabolicPathways: ['PTH-vitamin D axis', 'Bone remodeling'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 8.5, highValue: 10.5, unit: 'mg/dL' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High calcium (hypercalcemia) can cause fatigue, confusion, constipation, kidney stones, and bone pain. Main causes are hyperparathyroidism and malignancy.',
    pathophysiology: 'Calcium rises from: (1) Excess PTH (pulls Ca from bone, increases absorption), (2) Malignancy (bone destruction or PTHrP), (3) Excess vitamin D, (4) Immobility.',
    causeCategories: [
      { category: 'Primary hyperparathyroidism', description: 'Parathyroid gland overactivity', examples: ['Parathyroid adenoma', 'Parathyroid hyperplasia'] },
      { category: 'Malignancy', description: 'Cancer-related', examples: ['Bone metastases', 'PTHrP-producing tumors', 'Myeloma'] },
      { category: 'Other', description: 'Less common causes', examples: ['Vitamin D toxicity', 'Granulomatous disease', 'Thiazides', 'Immobilization'] },
    ],
    commonCauses: [
      { cause: 'Primary hyperparathyroidism', mechanism: 'PTH oversecretion from adenoma', typicalLevel: 'mild', associatedFindings: ['High/high-normal PTH', 'Low phosphorus', 'High urine calcium'], clinicalContext: 'Asymptomatic, incidental finding' },
      { cause: 'Malignancy', mechanism: 'Bone destruction or PTHrP production', typicalLevel: 'moderate', associatedFindings: ['Low PTH', 'Known cancer', 'Weight loss'], clinicalContext: 'Known cancer, rapid onset' },
    ],
    lessCauses: [
      { cause: 'Vitamin D toxicity', mechanism: 'Excess vitamin D increases absorption', typicalLevel: 'moderate', associatedFindings: ['High 25-OH vitamin D', 'Low PTH'], clinicalContext: 'Taking high-dose vitamin D' },
    ],
    severityGuidance: [
      { level: 'mild', range: '10.5-12 mg/dL', clinicalSignificance: 'Often asymptomatic', typicalCauses: ['Primary HPT'], urgency: 'routine' },
      { level: 'moderate', range: '12-14 mg/dL', clinicalSignificance: 'May have symptoms', typicalCauses: ['HPT', 'Malignancy'], urgency: 'soon' },
      { level: 'severe', range: '>14 mg/dL', clinicalSignificance: 'Hypercalcemic crisis risk', typicalCauses: ['Malignancy', 'Severe HPT'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Ca >14', 'Altered mental status', 'Cardiac arrhythmia', 'Renal failure', 'Severe dehydration'],
    followUpTests: ['PTH', 'Vitamin D (25-OH)', 'Phosphorus', 'Creatinine', 'PTHrP if malignancy suspected'],
    questionsForDoctor: ['Do I have hyperparathyroidism?', 'Could this be cancer?', 'Do I need surgery?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low calcium (hypocalcemia) can cause muscle cramps, tingling, and in severe cases, seizures. Must correct for albumin level.',
    pathophysiology: 'Calcium falls from: (1) Low PTH (post-surgery, autoimmune), (2) Low vitamin D, (3) Low albumin (false low), (4) Severe illness (redistribution).',
    causeCategories: [
      { category: 'Hypoparathyroidism', description: 'Low PTH', examples: ['Post-thyroidectomy', 'Autoimmune', 'Genetic'] },
      { category: 'Vitamin D deficiency', description: 'Impaired absorption', examples: ['Malnutrition', 'Malabsorption', 'Chronic kidney disease'] },
      { category: 'Redistribution', description: 'Calcium shifting', examples: ['Pancreatitis', 'Tumor lysis', 'Hungry bone syndrome'] },
      { category: 'Artifact', description: 'Not true hypocalcemia', examples: ['Low albumin (correct for albumin)'] },
    ],
    commonCauses: [
      { cause: 'Low albumin', mechanism: 'Total Ca low but ionized Ca normal', typicalLevel: 'mild', associatedFindings: ['Low albumin', 'Normal ionized calcium'], clinicalContext: 'Liver disease, malnutrition, inflammation' },
      { cause: 'Vitamin D deficiency', mechanism: 'Impaired intestinal absorption', typicalLevel: 'mild', associatedFindings: ['Low vitamin D', 'High PTH (secondary)'], clinicalContext: 'Limited sun, malabsorption' },
      { cause: 'Post-thyroid surgery', mechanism: 'Parathyroids damaged/removed', typicalLevel: 'variable', associatedFindings: ['Low PTH', 'Recent surgery'], clinicalContext: 'Post-thyroidectomy' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '7.5-8.5 mg/dL', clinicalSignificance: 'May be asymptomatic; correct for albumin', typicalCauses: ['Low albumin', 'Vitamin D deficiency'], urgency: 'routine' },
      { level: 'severe', range: '<7 mg/dL', clinicalSignificance: 'Risk of tetany, seizures, arrhythmia', typicalCauses: ['Hypoparathyroidism', 'Severe deficiency'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Tetany', 'Seizures', 'Cardiac arrhythmia', 'Chvostek/Trousseau signs'],
    followUpTests: ['Albumin (correct calcium)', 'Ionized calcium', 'PTH', 'Vitamin D', 'Magnesium'],
    questionsForDoctor: ['Is this truly low or just low albumin?', 'Do I need calcium supplements?'],
  },
  relatedTests: [
    { testId: 'pth', testName: 'PTH', relationship: 'explains', whenToOrder: 'When calcium abnormal', interpretationContext: 'High Ca + high PTH = primary HPT; High Ca + low PTH = malignancy/vitamin D' },
    { testId: 'albumin', testName: 'Albumin', relationship: 'complements', whenToOrder: 'Always with calcium', interpretationContext: 'Correct calcium for albumin: add 0.8 for each 1 g/dL albumin below 4' },
  ],
  associatedConditions: [
    { condition: 'Primary hyperparathyroidism', direction: 'elevated', typicalPattern: 'High Ca + high PTH', sensitivity: 'high', specificity: 'high', notes: 'Most common cause of outpatient hypercalcemia' },
    { condition: 'Malignancy', direction: 'elevated', typicalPattern: 'High Ca + low PTH', sensitivity: 'moderate', specificity: 'moderate', notes: 'Most common cause of inpatient hypercalcemia' },
  ],
  interferingFactors: [
    { factor: 'Albumin level', effect: 'variable', mechanism: 'Low albumin = low total Ca but normal ionized', clinicalRelevance: 'Always correct for albumin', mitigation: 'Corrected Ca = Ca + 0.8 × (4 - albumin)' },
    { factor: 'Hemolysis', effect: 'falsely-elevated', mechanism: 'Red cell release', clinicalRelevance: 'Re-draw if suspected', mitigation: 'Proper technique' },
  ],
  temporalPatterns: [],
  clinicalPearls: ['Always correct total calcium for albumin', 'High calcium + high PTH = primary hyperparathyroidism', 'High calcium + low PTH = malignancy or vitamin D excess', 'Check magnesium in hypocalcemia (needed for PTH action)'],
  patientQuestions: ['Why is my calcium high/low?', 'Do I have a parathyroid problem?', 'Do I need calcium supplements?'],
};

const MAGNESIUM: LabTestEducation = {
  id: 'magnesium',
  name: 'Magnesium',
  abbreviations: ['Mg'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Magnesium is essential for nerve/muscle function, heart rhythm, and over 300 enzyme reactions. Most is in bones and cells; only 1% is in blood.',
  physiologicalBasis: {
    analyte: 'Serum magnesium',
    source: 'Diet (nuts, greens, whole grains)',
    normalFunction: 'Enzyme cofactor, nerve/muscle function, cardiac rhythm, bone structure',
    regulation: 'Kidneys regulate excretion; PTH affects reabsorption',
    clearance: 'Renal excretion',
    involvedOrgans: ['Kidneys', 'Bones', 'Intestines', 'Heart', 'Muscles'],
    metabolicPathways: ['ATP metabolism', 'Protein synthesis', 'Neuromuscular function'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 1.7, highValue: 2.3, unit: 'mg/dL' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High magnesium (hypermagnesemia) usually occurs with kidney failure or excessive magnesium intake. It can cause muscle weakness, low blood pressure, and cardiac problems.',
    pathophysiology: 'Magnesium rises when kidneys cant excrete it (renal failure) or with excessive intake (IV magnesium, antacids, laxatives).',
    causeCategories: [
      { category: 'Renal failure', description: 'Impaired excretion', examples: ['Acute kidney injury', 'Chronic kidney disease', 'End-stage renal disease'] },
      { category: 'Excessive intake', description: 'Iatrogenic or supplements', examples: ['IV magnesium', 'Mg-containing antacids/laxatives'] },
    ],
    commonCauses: [
      { cause: 'Kidney failure', mechanism: 'Impaired renal excretion', typicalLevel: 'moderate', associatedFindings: ['Elevated creatinine', 'Other electrolyte abnormalities'], clinicalContext: 'Known CKD' },
      { cause: 'Magnesium-containing medications', mechanism: 'Excess intake with impaired excretion', typicalLevel: 'variable', associatedFindings: ['Taking Mg supplements, antacids, or laxatives'], clinicalContext: 'CKD + Mg medications' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '2.5-4 mg/dL', clinicalSignificance: 'Often asymptomatic', typicalCauses: ['Renal impairment'], urgency: 'routine' },
      { level: 'severe', range: '>6 mg/dL', clinicalSignificance: 'Cardiac conduction problems, hypotension, respiratory depression', typicalCauses: ['Severe renal failure', 'Mg overdose'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Mg >6', 'Cardiac arrhythmia', 'Hypotension', 'Respiratory depression', 'Absent reflexes'],
    followUpTests: ['Renal function', 'EKG', 'Medication review'],
    questionsForDoctor: ['Is this from my kidneys or medications?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low magnesium (hypomagnesemia) is common and causes muscle cramps, tremor, weakness, and cardiac arrhythmias. It also impairs calcium and potassium regulation.',
    pathophysiology: 'Magnesium falls from: (1) GI losses (diarrhea, malabsorption), (2) Renal losses (diuretics, alcohol), (3) Poor intake, (4) Redistribution.',
    causeCategories: [
      { category: 'GI losses', description: 'Diarrhea, malabsorption', examples: ['Chronic diarrhea', 'Celiac', 'Short bowel', 'PPI use'] },
      { category: 'Renal losses', description: 'Increased urinary excretion', examples: ['Loop/thiazide diuretics', 'Alcohol', 'Cisplatin', 'Aminoglycosides'] },
      { category: 'Poor intake', description: 'Dietary deficiency', examples: ['Alcoholism', 'Malnutrition'] },
      { category: 'Redistribution', description: 'Shift into cells', examples: ['Refeeding syndrome', 'Hungry bone syndrome'] },
    ],
    commonCauses: [
      { cause: 'Diuretics', mechanism: 'Increased renal magnesium loss', typicalLevel: 'mild', associatedFindings: ['Low potassium', 'On loop/thiazide'], clinicalContext: 'Taking diuretics' },
      { cause: 'Alcohol use', mechanism: 'Increased renal excretion + poor intake', typicalLevel: 'moderate', associatedFindings: ['Liver dysfunction', 'Tremor'], clinicalContext: 'Heavy alcohol use' },
      { cause: 'PPI use', mechanism: 'Impaired intestinal absorption', typicalLevel: 'mild', associatedFindings: ['Long-term PPI use'], clinicalContext: 'On proton pump inhibitor' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '1.4-1.7 mg/dL', clinicalSignificance: 'May cause subtle symptoms', typicalCauses: ['Diuretics', 'PPI'], urgency: 'routine' },
      { level: 'moderate', range: '1.0-1.4 mg/dL', clinicalSignificance: 'Symptomatic, affects K/Ca', typicalCauses: ['Moderate depletion'], urgency: 'soon' },
      { level: 'severe', range: '<1.0 mg/dL', clinicalSignificance: 'Arrhythmia risk, seizures', typicalCauses: ['Severe depletion'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Mg <1.0', 'Cardiac arrhythmia', 'Refractory hypokalemia or hypocalcemia', 'Seizures', 'Tetany'],
    followUpTests: ['Potassium', 'Calcium', 'EKG', 'Urine magnesium (24hr)'],
    questionsForDoctor: ['Is this from my medications?', 'Do I need magnesium supplements?', 'Can I fix this with diet?'],
  },
  relatedTests: [
    { testId: 'potassium', testName: 'Potassium', relationship: 'complements', whenToOrder: 'When Mg low', interpretationContext: 'Must correct Mg to fix refractory hypokalemia' },
    { testId: 'calcium', testName: 'Calcium', relationship: 'complements', whenToOrder: 'When Mg low', interpretationContext: 'Mg needed for PTH function' },
  ],
  associatedConditions: [
    { condition: 'Diuretic use', direction: 'decreased', typicalPattern: 'Low Mg with low K', sensitivity: 'moderate', specificity: 'low', notes: 'Common cause of hypomagnesemia' },
    { condition: 'Alcoholism', direction: 'decreased', typicalPattern: 'Low Mg with other deficiencies', sensitivity: 'high', specificity: 'moderate', notes: 'Multiple mechanisms' },
  ],
  interferingFactors: [
    { factor: 'Hemolysis', effect: 'falsely-elevated', mechanism: 'Red cell magnesium released', clinicalRelevance: 'Redraw if suspected', mitigation: 'Proper technique' },
  ],
  temporalPatterns: [
    { scenario: 'Oral replacement', pattern: 'Slow to correct (days-weeks)', timeframe: 'Days-weeks', clinicalUse: 'Oral Mg has poor bioavailability' },
  ],
  clinicalPearls: ['Low Mg impairs potassium repletion - must fix Mg to fix K', 'Low Mg impairs PTH secretion - causes hypocalcemia', 'Serum Mg poorly reflects total body stores', 'PPIs cause hypomagnesemia with chronic use'],
  patientQuestions: ['Do I need magnesium supplements?', 'Which foods have magnesium?', 'Is this from my medications?'],
};

const PHOSPHORUS: LabTestEducation = {
  id: 'phosphorus',
  name: 'Phosphorus',
  abbreviations: ['Phos', 'PO4', 'Phosphate'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Phosphorus is essential for bone health, energy production (ATP), and cell function. It works closely with calcium and is regulated by PTH and vitamin D.',
  physiologicalBasis: {
    analyte: 'Inorganic phosphate',
    source: 'Diet (dairy, meat, nuts); 85% in bones',
    normalFunction: 'Bone structure, ATP energy, DNA/RNA, cell membranes, acid-base buffering',
    regulation: 'PTH (decreases phosphorus), vitamin D (increases absorption), FGF23 (increases excretion)',
    clearance: 'Kidney excretion (PTH-regulated)',
    involvedOrgans: ['Bones', 'Kidneys', 'Parathyroid glands', 'Intestines'],
    metabolicPathways: ['Calcium-phosphorus homeostasis', 'ATP metabolism'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 2.5, highValue: 4.5, unit: 'mg/dL' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High phosphorus (hyperphosphatemia) usually indicates kidney disease or hypoparathyroidism. Very high levels can cause calcium-phosphorus precipitation.',
    pathophysiology: 'Phosphorus rises with: (1) Impaired kidney excretion (CKD), (2) Low PTH (hypoparathyroidism), (3) Cell breakdown (rhabdomyolysis, tumor lysis), (4) Excess intake.',
    causeCategories: [
      { category: 'Kidney disease', description: 'Impaired excretion', examples: ['CKD stages 4-5', 'Acute kidney injury'] },
      { category: 'Hypoparathyroidism', description: 'Low PTH', examples: ['Post-surgical', 'Autoimmune'] },
      { category: 'Cell lysis', description: 'Phosphorus release', examples: ['Tumor lysis syndrome', 'Rhabdomyolysis'] },
    ],
    commonCauses: [
      { cause: 'Chronic kidney disease', mechanism: 'Impaired renal excretion', typicalLevel: 'moderate', associatedFindings: ['Elevated creatinine', 'Low calcium'], clinicalContext: 'Known CKD stage 4-5' },
      { cause: 'Hypoparathyroidism', mechanism: 'Low PTH increases renal phosphorus reabsorption', typicalLevel: 'moderate', associatedFindings: ['Low calcium', 'Low PTH'], clinicalContext: 'Post-thyroid surgery' },
    ],
    lessCauses: [
      { cause: 'Tumor lysis syndrome', mechanism: 'Massive cell death releases phosphorus', typicalLevel: 'severe', associatedFindings: ['High K, high uric acid, low Ca'], clinicalContext: 'After cancer treatment' },
    ],
    severityGuidance: [
      { level: 'mild', range: '4.5-6 mg/dL', clinicalSignificance: 'Common in CKD', typicalCauses: ['CKD'], urgency: 'routine' },
      { level: 'severe', range: '>7 mg/dL', clinicalSignificance: 'Risk of calcium-phosphorus precipitation', typicalCauses: ['Severe CKD', 'Tumor lysis'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Very high phosphorus with low calcium', 'Tumor lysis syndrome', 'Calciphylaxis signs'],
    followUpTests: ['Calcium', 'PTH', 'Creatinine', 'Vitamin D'],
    questionsForDoctor: ['Is this from my kidneys?', 'Do I need phosphorus binders?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low phosphorus (hypophosphatemia) can cause muscle weakness and bone problems. Common causes include malnutrition, alcohol, and refeeding syndrome.',
    pathophysiology: 'Phosphorus falls with: (1) Decreased intake/absorption, (2) Cellular uptake (refeeding, insulin), (3) Renal losses (hyperparathyroidism), (4) Antacids.',
    causeCategories: [
      { category: 'Refeeding syndrome', description: 'Phosphorus shifts into cells', examples: ['Refeeding after starvation', 'TPN initiation'] },
      { category: 'Hyperparathyroidism', description: 'Excess PTH increases urinary loss', examples: ['Primary HPT'] },
      { category: 'Alcohol/malnutrition', description: 'Poor intake', examples: ['Alcoholism', 'Malnutrition'] },
      { category: 'Antacids', description: 'Bind phosphorus in gut', examples: ['Aluminum-containing antacids'] },
    ],
    commonCauses: [
      { cause: 'Refeeding syndrome', mechanism: 'Insulin drives phosphorus into cells', typicalLevel: 'severe', associatedFindings: ['Recent refeeding', 'Low K, Mg'], clinicalContext: 'Malnourished patient starting nutrition' },
      { cause: 'Alcoholism', mechanism: 'Poor intake + GI losses', typicalLevel: 'moderate', associatedFindings: ['Low Mg, K'], clinicalContext: 'Heavy alcohol use' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '2.0-2.5 mg/dL', clinicalSignificance: 'Often asymptomatic', typicalCauses: ['Mild depletion'], urgency: 'routine' },
      { level: 'severe', range: '<1.5 mg/dL', clinicalSignificance: 'Muscle weakness, respiratory failure risk', typicalCauses: ['Refeeding', 'Severe depletion'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Phos <1.0', 'Muscle weakness', 'Respiratory failure', 'Altered mental status'],
    followUpTests: ['Calcium', 'Potassium', 'Magnesium', 'PTH'],
    questionsForDoctor: ['Why is my phosphorus low?', 'Do I need supplements?'],
  },
  relatedTests: [
    { testId: 'calcium', testName: 'Calcium', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'Ca and Phos move opposite with PTH changes' },
    { testId: 'pth', testName: 'PTH', relationship: 'explains', whenToOrder: 'When phosphorus abnormal', interpretationContext: 'PTH lowers phosphorus, raises calcium' },
  ],
  associatedConditions: [
    { condition: 'Chronic kidney disease', direction: 'elevated', typicalPattern: 'Progressive rise in CKD stages 4-5', sensitivity: 'high', specificity: 'moderate', notes: 'Key CKD-MBD component' },
    { condition: 'Refeeding syndrome', direction: 'decreased', typicalPattern: 'Rapid drop when feeding starts', sensitivity: 'high', specificity: 'moderate', notes: 'Can be life-threatening' },
  ],
  interferingFactors: [
    { factor: 'Hemolysis', effect: 'falsely-elevated', mechanism: 'Red cell phosphorus released', clinicalRelevance: 'Significant', mitigation: 'Redraw if suspected' },
    { factor: 'Recent meal', effect: 'falsely-decreased', mechanism: 'Postprandial shift', clinicalRelevance: 'Minor', mitigation: 'Fasting preferred' },
  ],
  temporalPatterns: [],
  clinicalPearls: ['Phosphorus and calcium typically move opposite', 'Check phosphorus in refeeding syndrome - can drop dangerously', 'CKD patients need phosphorus binders', 'PTH lowers phosphorus; vitamin D raises it'],
  patientQuestions: ['Why is phosphorus important?', 'What foods affect phosphorus?'],
};

const URIC_ACID: LabTestEducation = {
  id: 'uric-acid',
  name: 'Uric Acid',
  abbreviations: ['UA', 'Urate'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Uric acid is a waste product from purine breakdown. High levels can cause gout (painful joint inflammation) and kidney stones.',
  physiologicalBasis: {
    analyte: 'Uric acid (urate)',
    source: 'Purine metabolism (from diet and cell turnover)',
    normalFunction: 'Waste product; has some antioxidant properties',
    regulation: 'Renal excretion (90% of clearance)',
    clearance: 'Kidney excretion; small amount GI',
    involvedOrgans: ['Liver', 'Kidneys', 'Joints (when deposits form)'],
    metabolicPathways: ['Purine catabolism'],
  },
  referenceRanges: [
    { population: { sex: 'male', ageMin: 18 }, lowValue: 3.5, highValue: 7.2, unit: 'mg/dL' },
    { population: { sex: 'female', ageMin: 18 }, lowValue: 2.5, highValue: 6.0, unit: 'mg/dL' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High uric acid (hyperuricemia) increases risk of gout and kidney stones. Most people with high uric acid dont develop gout.',
    pathophysiology: 'Uric acid rises from: (1) Overproduction (high purine diet, cell turnover), (2) Underexcretion (kidney disease, diuretics), (3) Both.',
    causeCategories: [
      { category: 'Decreased excretion', description: 'Kidney-related', examples: ['CKD', 'Diuretics', 'Low-dose aspirin', 'Alcohol'] },
      { category: 'Increased production', description: 'High cell turnover', examples: ['High purine diet', 'Myeloproliferative disorders', 'Psoriasis', 'Tumor lysis'] },
    ],
    commonCauses: [
      { cause: 'Diet/lifestyle', mechanism: 'High purine intake (red meat, shellfish, beer)', typicalLevel: 'mild', associatedFindings: ['Obesity', 'Metabolic syndrome'], clinicalContext: 'High purine diet, beer consumption' },
      { cause: 'Diuretics', mechanism: 'Reduced renal uric acid excretion', typicalLevel: 'mild', associatedFindings: ['On thiazide or loop diuretics'], clinicalContext: 'Taking diuretics' },
      { cause: 'Kidney disease', mechanism: 'Impaired excretion', typicalLevel: 'moderate', associatedFindings: ['Elevated creatinine'], clinicalContext: 'Known CKD' },
    ],
    lessCauses: [
      { cause: 'Tumor lysis syndrome', mechanism: 'Massive cell breakdown releases purines', typicalLevel: 'severe', associatedFindings: ['High K, high phos, low Ca'], clinicalContext: 'After cancer treatment' },
    ],
    severityGuidance: [
      { level: 'mild', range: 'Men: 7.2-9, Women: 6-8 mg/dL', clinicalSignificance: 'Increased gout risk', typicalCauses: ['Diet', 'Medications'], urgency: 'routine' },
      { level: 'severe', range: '>10 mg/dL', clinicalSignificance: 'High risk of gout flare, stones, tumor lysis', typicalCauses: ['Severe disease', 'Tumor lysis'], urgency: 'soon' },
    ],
    worryingFeatures: ['Very high levels (>12)', 'Acute gout flare', 'Kidney stones', 'Tumor lysis syndrome'],
    followUpTests: ['Renal function', '24-hr urine uric acid (overproduction vs underexcretion)', 'Joint aspiration if gout suspected'],
    questionsForDoctor: ['Will I get gout?', 'Should I change my diet?', 'Do I need medication?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low uric acid is uncommon and usually not concerning. It can indicate liver disease, certain medications, or rare genetic conditions.',
    pathophysiology: 'Low uric acid from: (1) Decreased production (liver disease), (2) Increased excretion (SIADH, medications), (3) Genetic conditions.',
    causeCategories: [
      { category: 'Medications', description: 'Drug effects', examples: ['Allopurinol', 'Losartan', 'High-dose aspirin'] },
      { category: 'Liver disease', description: 'Decreased production', examples: ['Severe liver disease'] },
    ],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'creatinine', testName: 'Creatinine', relationship: 'complements', whenToOrder: 'Assess kidney function', interpretationContext: 'CKD impairs uric acid excretion' },
  ],
  associatedConditions: [
    { condition: 'Gout', direction: 'elevated', typicalPattern: 'Chronically elevated; may be normal during flare', sensitivity: 'moderate', specificity: 'low', notes: 'Not all hyperuricemia leads to gout' },
    { condition: 'Metabolic syndrome', direction: 'elevated', typicalPattern: 'Part of metabolic syndrome cluster', sensitivity: 'moderate', specificity: 'low', notes: 'Associated with insulin resistance' },
  ],
  interferingFactors: [
    { factor: 'Recent alcohol', effect: 'falsely-elevated', mechanism: 'Alcohol impairs uric acid excretion', clinicalRelevance: 'Important', mitigation: 'Avoid alcohol before test' },
    { factor: 'High-dose aspirin', effect: 'falsely-decreased', mechanism: 'Uricosuric at high doses', clinicalRelevance: 'Dose-dependent', mitigation: 'Note medication dose' },
  ],
  temporalPatterns: [
    { scenario: 'Gout flare', pattern: 'May be paradoxically normal during acute flare', timeframe: 'Days', clinicalUse: 'Dont rule out gout based on normal level during attack' },
    { scenario: 'Urate-lowering therapy', pattern: 'Falls over weeks with treatment', timeframe: 'Weeks', clinicalUse: 'Target <6 mg/dL for gout' },
  ],
  clinicalPearls: ['Uric acid can be normal during acute gout flare', 'Target uric acid <6 mg/dL in gout patients', 'Beer is doubly bad - high purines + alcohol effect', 'Most hyperuricemia does NOT cause gout'],
  patientQuestions: ['Will I get gout?', 'What foods should I avoid?', 'Do I need to take medication?'],
};

const CRP: LabTestEducation = {
  id: 'crp',
  name: 'C-Reactive Protein',
  abbreviations: ['CRP', 'hs-CRP'],
  category: 'inflammatory',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'CRP is an acute phase protein that rises quickly with inflammation or infection. High-sensitivity CRP (hs-CRP) assesses cardiovascular risk.',
  physiologicalBasis: {
    analyte: 'C-reactive protein',
    source: 'Liver produces CRP in response to IL-6',
    normalFunction: 'Part of innate immune response; activates complement, opsonizes pathogens',
    regulation: 'Synthesized by liver in response to inflammatory cytokines (IL-6)',
    clearance: 'Half-life about 19 hours; falls rapidly when inflammation resolves',
    involvedOrgans: ['Liver', 'Immune system'],
    metabolicPathways: ['Acute phase response'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 0, highValue: 3, unit: 'mg/L', notes: 'Standard CRP; <10 typically normal' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Elevated CRP indicates inflammation somewhere in the body - from infection, autoimmune disease, injury, or chronic conditions.',
    pathophysiology: 'CRP rises within hours of inflammatory stimulus and can increase 1000-fold. It reflects IL-6 levels and overall inflammatory burden.',
    causeCategories: [
      { category: 'Infection', description: 'Bacterial typically higher than viral', examples: ['Bacterial infection', 'Viral infection (lower)', 'Sepsis'] },
      { category: 'Autoimmune/inflammatory', description: 'Chronic inflammation', examples: ['Rheumatoid arthritis', 'IBD', 'Lupus', 'Vasculitis'] },
      { category: 'Tissue injury', description: 'Acute damage', examples: ['Surgery', 'Trauma', 'MI', 'Pancreatitis'] },
      { category: 'Malignancy', description: 'Cancer-related', examples: ['Advanced cancer', 'Lymphoma'] },
    ],
    commonCauses: [
      { cause: 'Bacterial infection', mechanism: 'Strong IL-6 release', typicalLevel: 'severe', associatedFindings: ['Fever', 'Elevated WBC', 'Localizing symptoms'], clinicalContext: 'Fever, infection symptoms' },
      { cause: 'Rheumatoid arthritis flare', mechanism: 'Autoimmune inflammation', typicalLevel: 'moderate', associatedFindings: ['Joint pain/swelling', 'Elevated ESR'], clinicalContext: 'Known RA' },
      { cause: 'Post-surgical', mechanism: 'Tissue injury response', typicalLevel: 'moderate', associatedFindings: ['Recent surgery'], clinicalContext: 'Post-operative' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '3-10 mg/L', clinicalSignificance: 'Mild inflammation or CV risk', typicalCauses: ['Chronic low-grade inflammation', 'Obesity'], urgency: 'routine' },
      { level: 'moderate', range: '10-100 mg/L', clinicalSignificance: 'Significant inflammation', typicalCauses: ['Active autoimmune disease', 'Moderate infection'], urgency: 'soon' },
      { level: 'severe', range: '>100 mg/L', clinicalSignificance: 'Severe inflammation - bacterial infection likely', typicalCauses: ['Bacterial infection', 'Sepsis', 'Severe tissue injury'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Very high CRP (>100)', 'Rapid rise', 'Associated with sepsis features', 'Unexplained elevation'],
    followUpTests: ['CBC', 'Cultures if infection suspected', 'ESR', 'Procalcitonin if bacterial infection', 'Imaging based on symptoms'],
    questionsForDoctor: ['What is causing my inflammation?', 'Do I have an infection?', 'Is this related to my arthritis?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low CRP simply indicates absence of significant inflammation.',
    pathophysiology: 'CRP falls rapidly when inflammation resolves.',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'esr', testName: 'ESR', relationship: 'complements', whenToOrder: 'Together for inflammation', interpretationContext: 'CRP rises/falls faster than ESR' },
    { testId: 'procalcitonin', testName: 'Procalcitonin', relationship: 'complements', whenToOrder: 'If bacterial infection suspected', interpretationContext: 'Procalcitonin more specific for bacterial infection' },
  ],
  associatedConditions: [
    { condition: 'Bacterial infection', direction: 'elevated', typicalPattern: 'Very high (often >100)', sensitivity: 'high', specificity: 'low', notes: 'CRP >100 suggests bacterial etiology' },
    { condition: 'Rheumatoid arthritis', direction: 'elevated', typicalPattern: 'Elevated during flares', sensitivity: 'moderate', specificity: 'low', notes: 'Used to monitor disease activity' },
  ],
  interferingFactors: [
    { factor: 'Obesity', effect: 'falsely-elevated', mechanism: 'Chronic low-grade inflammation from adipose tissue', clinicalRelevance: 'Baseline may be elevated', mitigation: 'Consider baseline in obese patients' },
  ],
  temporalPatterns: [
    { scenario: 'Acute infection', pattern: 'Rises within 6 hours, peaks at 48 hours', timeframe: 'Hours', clinicalUse: 'Rapid response makes it useful for acute illness' },
    { scenario: 'Post-surgical', pattern: 'Peaks day 2-3, then falls', timeframe: 'Days', clinicalUse: 'Rising CRP after initial fall suggests complication' },
  ],
  clinicalPearls: ['CRP >100 usually indicates bacterial infection', 'CRP rises and falls faster than ESR', 'hs-CRP is used for cardiovascular risk assessment', 'Normal CRP doesnt exclude serious disease'],
  patientQuestions: ['What is causing my inflammation?', 'Do I have an infection?'],
};

const ESR: LabTestEducation = {
  id: 'esr',
  name: 'Erythrocyte Sedimentation Rate',
  abbreviations: ['ESR', 'Sed Rate'],
  category: 'inflammatory',
  specimen: 'whole-blood',
  resultType: 'numeric',
  whatItMeasures: 'ESR measures how fast red blood cells settle in a tube. Faster settling indicates inflammation. Its a non-specific marker that rises with many conditions.',
  physiologicalBasis: {
    analyte: 'Rate of red blood cell settling',
    source: 'Affected by plasma proteins (especially fibrinogen, immunoglobulins)',
    normalFunction: 'Indirect measure of acute phase proteins and inflammation',
    regulation: 'Rises with increased fibrinogen and immunoglobulins',
    clearance: 'Falls slowly as inflammation resolves (days to weeks)',
    involvedOrgans: ['Liver (produces fibrinogen)', 'Immune system'],
    metabolicPathways: ['Acute phase response'],
  },
  referenceRanges: [
    { population: { sex: 'male', ageMin: 18, ageMax: 50 }, lowValue: 0, highValue: 15, unit: 'mm/hr' },
    { population: { sex: 'female', ageMin: 18, ageMax: 50 }, lowValue: 0, highValue: 20, unit: 'mm/hr' },
    { population: { sex: 'male', ageMin: 50 }, lowValue: 0, highValue: 20, unit: 'mm/hr', notes: 'Increases with age' },
    { population: { sex: 'female', ageMin: 50 }, lowValue: 0, highValue: 30, unit: 'mm/hr', notes: 'Increases with age' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Elevated ESR indicates inflammation but is very non-specific. Combined with symptoms, it helps diagnose and monitor inflammatory conditions.',
    pathophysiology: 'Inflammation increases fibrinogen and immunoglobulins, which cause red cells to aggregate and settle faster.',
    causeCategories: [
      { category: 'Infection', description: 'Any significant infection', examples: ['Bacterial infection', 'TB', 'Osteomyelitis', 'Endocarditis'] },
      { category: 'Autoimmune/inflammatory', description: 'Chronic inflammation', examples: ['RA', 'Lupus', 'PMR/GCA', 'Vasculitis'] },
      { category: 'Malignancy', description: 'Cancer-related', examples: ['Multiple myeloma', 'Lymphoma', 'Metastatic cancer'] },
      { category: 'Physiologic', description: 'Normal variants', examples: ['Pregnancy', 'Advanced age', 'Anemia'] },
    ],
    commonCauses: [
      { cause: 'Polymyalgia rheumatica/Giant cell arteritis', mechanism: 'Severe systemic inflammation', typicalLevel: 'severe', associatedFindings: ['ESR often >50-100', 'Shoulder/hip pain', 'Headache (GCA)'], clinicalContext: 'Older adult with proximal muscle pain' },
      { cause: 'Rheumatoid arthritis', mechanism: 'Chronic autoimmune inflammation', typicalLevel: 'moderate', associatedFindings: ['Joint pain/swelling', 'Elevated CRP'], clinicalContext: 'Known RA' },
      { cause: 'Multiple myeloma', mechanism: 'Very high immunoglobulin levels', typicalLevel: 'severe', associatedFindings: ['Very high ESR (>100)', 'Anemia', 'High total protein'], clinicalContext: 'Fatigue, bone pain' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '20-40 mm/hr', clinicalSignificance: 'Mild inflammation or physiologic', typicalCauses: ['Mild inflammation', 'Age-related'], urgency: 'routine' },
      { level: 'moderate', range: '40-100 mm/hr', clinicalSignificance: 'Significant inflammation', typicalCauses: ['Active inflammatory disease', 'Infection'], urgency: 'soon' },
      { level: 'severe', range: '>100 mm/hr', clinicalSignificance: 'Think PMR/GCA, myeloma, severe infection, malignancy', typicalCauses: ['PMR/GCA', 'Myeloma', 'Severe infection'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Very high ESR (>100)', 'New headache/visual symptoms (GCA)', 'Unexplained elevation', 'Constitutional symptoms'],
    followUpTests: ['CRP', 'CBC', 'SPEP (if very high ESR)', 'Temporal artery biopsy if GCA suspected'],
    questionsForDoctor: ['What is causing my elevated ESR?', 'Do I have temporal arteritis?', 'Do I need more tests?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low ESR is usually normal. Very low ESR can occur with polycythemia or sickle cell disease.',
    pathophysiology: 'Low ESR from increased blood viscosity or abnormal red cells.',
    causeCategories: [
      { category: 'Polycythemia', description: 'Increased RBC mass', examples: ['Polycythemia vera'] },
      { category: 'Abnormal RBCs', description: 'Cell shape changes', examples: ['Sickle cell disease'] },
    ],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'crp', testName: 'CRP', relationship: 'complements', whenToOrder: 'Together for inflammation', interpretationContext: 'CRP more specific and changes faster' },
  ],
  associatedConditions: [
    { condition: 'Giant cell arteritis', direction: 'elevated', typicalPattern: 'Very high (often >50-100)', sensitivity: 'high', specificity: 'low', notes: 'Classic finding; urgent to evaluate' },
    { condition: 'Multiple myeloma', direction: 'elevated', typicalPattern: 'Very high due to M-protein', sensitivity: 'high', specificity: 'low', notes: 'Consider SPEP if ESR >100' },
  ],
  interferingFactors: [
    { factor: 'Anemia', effect: 'falsely-elevated', mechanism: 'Lower RBC concentration increases settling', clinicalRelevance: 'Common confounder', mitigation: 'Interpret in context of Hgb' },
    { factor: 'Pregnancy', effect: 'falsely-elevated', mechanism: 'Increased fibrinogen', clinicalRelevance: 'Normal in pregnancy', mitigation: 'Use CRP instead in pregnancy' },
    { factor: 'Age', effect: 'falsely-elevated', mechanism: 'Physiologic increase with age', clinicalRelevance: 'Age-adjusted reference ranges', mitigation: 'Rule of thumb: age/2 for men; (age+10)/2 for women' },
  ],
  temporalPatterns: [
    { scenario: 'Acute inflammation', pattern: 'Rises over days, falls over weeks', timeframe: 'Days-weeks', clinicalUse: 'Slower response than CRP' },
    { scenario: 'Treatment response', pattern: 'Falls gradually with treatment', timeframe: 'Weeks', clinicalUse: 'Monitor disease activity' },
  ],
  clinicalPearls: ['ESR >100 = think PMR/GCA, myeloma, severe infection, malignancy', 'ESR is affected by anemia, age, and pregnancy', 'CRP is more specific and responds faster', 'Normal ESR doesnt exclude serious disease'],
  patientQuestions: ['What does elevated ESR mean?', 'Could I have temporal arteritis?'],
};

const PT_INR: LabTestEducation = {
  id: 'pt-inr',
  name: 'Prothrombin Time / INR',
  abbreviations: ['PT', 'INR', 'Pro Time'],
  category: 'coagulation',
  specimen: 'plasma',
  resultType: 'numeric',
  whatItMeasures: 'PT measures how long it takes blood to clot via the extrinsic pathway. INR standardizes PT for monitoring warfarin. It reflects liver function and coagulation factor status.',
  physiologicalBasis: {
    analyte: 'Prothrombin time (clotting time)',
    source: 'Measures factors I, II, V, VII, X (extrinsic and common pathways)',
    normalFunction: 'Assesses extrinsic coagulation pathway; prolonged = slower clotting',
    regulation: 'Liver synthesizes clotting factors; vitamin K required for II, VII, IX, X',
    clearance: 'N/A (functional test)',
    involvedOrgans: ['Liver'],
    metabolicPathways: ['Coagulation cascade (extrinsic pathway)'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 11, highValue: 13.5, unit: 'seconds', notes: 'PT' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Prolonged PT/elevated INR means your blood takes longer to clot. This can be from warfarin therapy, liver disease, vitamin K deficiency, or factor deficiencies.',
    pathophysiology: 'PT prolonged when: (1) Clotting factors are deficient (liver disease, DIC), (2) Vitamin K is deficient (needed for factor synthesis), (3) Warfarin blocks vitamin K, (4) Factor inhibitors present.',
    causeCategories: [
      { category: 'Warfarin therapy', description: 'Intentional anticoagulation', examples: ['Therapeutic warfarin'] },
      { category: 'Liver disease', description: 'Impaired factor synthesis', examples: ['Cirrhosis', 'Acute liver failure'] },
      { category: 'Vitamin K deficiency', description: 'Inadequate vitamin K', examples: ['Malabsorption', 'Antibiotics', 'Malnutrition'] },
      { category: 'DIC', description: 'Consumption of factors', examples: ['Disseminated intravascular coagulation'] },
    ],
    commonCauses: [
      { cause: 'Warfarin therapy', mechanism: 'Blocks vitamin K-dependent factor synthesis', typicalLevel: 'variable', associatedFindings: ['On warfarin', 'Therapeutic INR 2-3'], clinicalContext: 'On anticoagulation' },
      { cause: 'Liver disease', mechanism: 'Impaired hepatic synthesis of factors', typicalLevel: 'variable', associatedFindings: ['Elevated bilirubin', 'Low albumin', 'Low platelets'], clinicalContext: 'Known liver disease' },
      { cause: 'Vitamin K deficiency', mechanism: 'Cant carboxylate vitamin K-dependent factors', typicalLevel: 'moderate', associatedFindings: ['Prolonged PT corrects with vitamin K'], clinicalContext: 'Malnutrition, malabsorption, antibiotics' },
    ],
    lessCauses: [
      { cause: 'DIC', mechanism: 'Consumption of clotting factors', typicalLevel: 'moderate', associatedFindings: ['Low fibrinogen', 'Low platelets', 'Elevated D-dimer'], clinicalContext: 'Sepsis, trauma, malignancy' },
    ],
    severityGuidance: [
      { level: 'mild', range: 'INR 1.5-2', clinicalSignificance: 'Mild coagulopathy', typicalCauses: ['Mild liver disease', 'Subtherapeutic warfarin'], urgency: 'routine' },
      { level: 'moderate', range: 'INR 2-4', clinicalSignificance: 'Therapeutic range (warfarin) or significant coagulopathy', typicalCauses: ['Therapeutic warfarin', 'Liver disease'], urgency: 'routine' },
      { level: 'severe', range: 'INR >4', clinicalSignificance: 'High bleeding risk', typicalCauses: ['Warfarin overdose', 'Severe liver disease'], urgency: 'urgent' },
    ],
    worryingFeatures: ['INR >4 (high bleeding risk)', 'Active bleeding', 'Need for urgent procedure', 'Rapidly rising INR'],
    followUpTests: ['PTT', 'Fibrinogen', 'Mixing study if unexplained', 'Liver function tests'],
    questionsForDoctor: ['Is my warfarin dose correct?', 'Is my liver causing this?', 'Do I need vitamin K?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Short PT/low INR indicates normal or increased clotting tendency. This is usually normal.',
    pathophysiology: 'Can reflect adequate factor levels or hypercoagulable state.',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'ptt', testName: 'PTT', relationship: 'complements', whenToOrder: 'Together for coagulation workup', interpretationContext: 'PT = extrinsic path; PTT = intrinsic path' },
    { testId: 'fibrinogen', testName: 'Fibrinogen', relationship: 'complements', whenToOrder: 'If DIC suspected', interpretationContext: 'Low fibrinogen suggests DIC or liver failure' },
  ],
  associatedConditions: [
    { condition: 'Cirrhosis', direction: 'elevated', typicalPattern: 'Progressive prolongation with liver failure', sensitivity: 'high', specificity: 'moderate', notes: 'Part of MELD score' },
    { condition: 'Warfarin therapy', direction: 'elevated', typicalPattern: 'Target INR 2-3 for most indications', sensitivity: 'high', specificity: 'high', notes: 'Primary monitoring test' },
  ],
  interferingFactors: [
    { factor: 'Heparin contamination', effect: 'falsely-elevated', mechanism: 'Heparin in sample', clinicalRelevance: 'Check sample source', mitigation: 'Avoid heparinized lines' },
    { factor: 'Lupus anticoagulant', effect: 'variable', mechanism: 'May prolong PT', clinicalRelevance: 'Can affect INR accuracy', mitigation: 'Chromogenic assays if suspected' },
  ],
  temporalPatterns: [
    { scenario: 'Warfarin initiation', pattern: 'INR rises over 3-5 days', timeframe: 'Days', clinicalUse: 'Factor VII drops first (short half-life)' },
    { scenario: 'Vitamin K administration', pattern: 'INR improves within 24 hours', timeframe: 'Hours', clinicalUse: 'Response indicates vitamin K deficiency vs. liver failure' },
  ],
  clinicalPearls: ['INR is only standardized for warfarin monitoring, not liver disease', 'Factor VII has shortest half-life so PT rises first in liver failure', 'If PT prolonged and PTT normal = factor VII deficiency or early warfarin', 'PT corrects with vitamin K if deficiency; not if liver failure'],
  patientQuestions: ['Is my warfarin level right?', 'Why is my blood taking longer to clot?', 'Do I need to adjust my medication?'],
};

const PTT: LabTestEducation = {
  id: 'ptt',
  name: 'Partial Thromboplastin Time',
  abbreviations: ['PTT', 'aPTT', 'APTT'],
  category: 'coagulation',
  specimen: 'plasma',
  resultType: 'numeric',
  whatItMeasures: 'PTT measures the intrinsic and common coagulation pathways. Its used to monitor heparin therapy and evaluate bleeding disorders.',
  physiologicalBasis: {
    analyte: 'Activated partial thromboplastin time',
    source: 'Measures factors I, II, V, VIII, IX, X, XI, XII (intrinsic and common pathways)',
    normalFunction: 'Assesses intrinsic pathway; prolonged = slower clotting',
    regulation: 'Liver synthesizes most factors; factor VIII from endothelium',
    clearance: 'N/A (functional test)',
    involvedOrgans: ['Liver', 'Endothelium'],
    metabolicPathways: ['Coagulation cascade (intrinsic pathway)'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 25, highValue: 35, unit: 'seconds' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Prolonged PTT means slower clotting via the intrinsic pathway. Common causes are heparin, hemophilia, lupus anticoagulant, or liver disease.',
    pathophysiology: 'PTT prolonged when: (1) Intrinsic factors deficient (hemophilia A=VIII, B=IX), (2) Heparin therapy, (3) Factor inhibitors (lupus anticoagulant, acquired inhibitors), (4) DIC.',
    causeCategories: [
      { category: 'Heparin therapy', description: 'Intentional anticoagulation', examples: ['Unfractionated heparin'] },
      { category: 'Factor deficiency', description: 'Congenital or acquired', examples: ['Hemophilia A (VIII)', 'Hemophilia B (IX)', 'Factor XI deficiency'] },
      { category: 'Inhibitors', description: 'Antibodies to factors', examples: ['Lupus anticoagulant', 'Acquired factor VIII inhibitor'] },
      { category: 'Liver disease/DIC', description: 'Multiple factor deficiency', examples: ['Cirrhosis', 'DIC'] },
    ],
    commonCauses: [
      { cause: 'Heparin therapy', mechanism: 'Potentiates antithrombin', typicalLevel: 'variable', associatedFindings: ['On heparin', 'Therapeutic PTT 1.5-2.5x normal'], clinicalContext: 'On anticoagulation' },
      { cause: 'Lupus anticoagulant', mechanism: 'Antiphospholipid antibody prolongs PTT in vitro', typicalLevel: 'mild', associatedFindings: ['Doesnt correct with mixing study'], clinicalContext: 'May have clotting history (paradoxical)' },
    ],
    lessCauses: [
      { cause: 'Hemophilia A', mechanism: 'Factor VIII deficiency', typicalLevel: 'moderate', associatedFindings: ['Low factor VIII', 'Normal PT'], clinicalContext: 'Male with bleeding history' },
      { cause: 'Acquired factor VIII inhibitor', mechanism: 'Autoantibody to factor VIII', typicalLevel: 'severe', associatedFindings: ['Very prolonged PTT', 'Doesnt correct with mixing'], clinicalContext: 'New onset bleeding' },
    ],
    severityGuidance: [
      { level: 'mild', range: '35-50 seconds', clinicalSignificance: 'Mild prolongation', typicalCauses: ['Mild factor deficiency', 'Low-dose heparin'], urgency: 'routine' },
      { level: 'severe', range: '>70 seconds', clinicalSignificance: 'Significant coagulopathy; high bleeding risk', typicalCauses: ['Heparin overdose', 'Severe factor deficiency'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Very prolonged PTT', 'Active bleeding', 'Doesnt correct with mixing study (inhibitor)'],
    followUpTests: ['PT', 'Mixing study', 'Factor levels', 'Lupus anticoagulant panel'],
    questionsForDoctor: ['Is my heparin dose correct?', 'Do I have hemophilia?', 'What is causing my prolonged PTT?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Short PTT may indicate hypercoagulability or elevated factor VIII.',
    pathophysiology: 'Can reflect acute phase response (elevated factor VIII) or lab variation.',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'pt-inr', testName: 'PT/INR', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'PT = extrinsic; PTT = intrinsic' },
    { testId: 'mixing-study', testName: 'Mixing Study', relationship: 'explains', whenToOrder: 'Unexplained prolonged PTT', interpretationContext: 'Corrects = factor deficiency; doesnt correct = inhibitor' },
  ],
  associatedConditions: [
    { condition: 'Hemophilia A', direction: 'elevated', typicalPattern: 'Prolonged PTT, normal PT, low factor VIII', sensitivity: 'high', specificity: 'moderate', notes: 'X-linked recessive' },
    { condition: 'Lupus anticoagulant', direction: 'elevated', typicalPattern: 'Prolonged PTT, doesnt correct', sensitivity: 'moderate', specificity: 'moderate', notes: 'Associated with clotting despite prolonged PTT' },
  ],
  interferingFactors: [
    { factor: 'Heparin contamination', effect: 'falsely-elevated', mechanism: 'Heparin in sample', clinicalRelevance: 'Common issue', mitigation: 'Avoid heparinized lines' },
  ],
  temporalPatterns: [
    { scenario: 'Heparin infusion', pattern: 'PTT changes rapidly with dose adjustments', timeframe: 'Hours', clinicalUse: 'Check 6 hours after dose change' },
  ],
  clinicalPearls: ['PTT monitors unfractionated heparin, not LMWH', 'Lupus anticoagulant prolongs PTT but causes CLOTTING', 'If PTT prolonged and PT normal = intrinsic pathway factor deficiency or heparin', 'Mixing study helps distinguish deficiency from inhibitor'],
  patientQuestions: ['Is my heparin dose correct?', 'Do I have a bleeding disorder?'],
};

const D_DIMER: LabTestEducation = {
  id: 'd-dimer',
  name: 'D-Dimer',
  abbreviations: ['D-Dimer'],
  category: 'coagulation',
  specimen: 'plasma',
  resultType: 'numeric',
  whatItMeasures: 'D-dimer is a breakdown product of blood clots. Its used to help rule out deep vein thrombosis (DVT) and pulmonary embolism (PE).',
  physiologicalBasis: {
    analyte: 'Fibrin degradation products',
    source: 'Produced when plasmin breaks down cross-linked fibrin clots',
    normalFunction: 'Marker of clot formation and breakdown',
    regulation: 'Rises when clots form and are broken down (fibrinolysis)',
    clearance: 'Cleared by reticuloendothelial system; half-life 6-8 hours',
    involvedOrgans: ['Vascular system', 'Liver', 'Spleen'],
    metabolicPathways: ['Coagulation', 'Fibrinolysis'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18, ageMax: 50 }, lowValue: 0, highValue: 500, unit: 'ng/mL' },
    { population: { ageMin: 50 }, lowValue: 0, highValue: 999, unit: 'ng/mL', notes: 'Age-adjusted: age x 10 ng/mL' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Elevated D-dimer indicates clot formation/breakdown somewhere in the body. Its sensitive but NOT specific - many conditions elevate it.',
    pathophysiology: 'D-dimer rises whenever fibrin clots form and are broken down - from DVT/PE, but also surgery, trauma, inflammation, cancer, pregnancy, etc.',
    causeCategories: [
      { category: 'Venous thromboembolism', description: 'DVT/PE', examples: ['Deep vein thrombosis', 'Pulmonary embolism'] },
      { category: 'DIC', description: 'Disseminated intravascular coagulation', examples: ['Sepsis-associated DIC', 'Cancer-associated DIC'] },
      { category: 'Other clot/lysis', description: 'Many conditions', examples: ['Surgery', 'Trauma', 'Cancer', 'Pregnancy', 'Inflammation', 'Liver disease'] },
    ],
    commonCauses: [
      { cause: 'Recent surgery/trauma', mechanism: 'Wound healing involves clot formation', typicalLevel: 'moderate', associatedFindings: ['Recent procedure'], clinicalContext: 'Post-operative' },
      { cause: 'DVT/PE', mechanism: 'Clot formation', typicalLevel: 'moderate', associatedFindings: ['Leg swelling (DVT)', 'Dyspnea (PE)'], clinicalContext: 'Clinical suspicion for VTE' },
      { cause: 'Malignancy', mechanism: 'Cancer activates coagulation', typicalLevel: 'variable', associatedFindings: ['Known or suspected cancer'], clinicalContext: 'Cancer patients' },
      { cause: 'Inflammation/infection', mechanism: 'Acute phase response', typicalLevel: 'mild', associatedFindings: ['Elevated CRP'], clinicalContext: 'Acute illness' },
    ],
    lessCauses: [
      { cause: 'DIC', mechanism: 'Systemic clot formation and breakdown', typicalLevel: 'severe', associatedFindings: ['Low platelets', 'Prolonged PT/PTT', 'Low fibrinogen'], clinicalContext: 'Sepsis, malignancy, obstetric emergency' },
    ],
    severityGuidance: [
      { level: 'mild', range: '500-1000 ng/mL', clinicalSignificance: 'Mildly elevated - many causes', typicalCauses: ['Inflammation', 'Mild illness'], urgency: 'routine' },
      { level: 'moderate', range: '1000-5000 ng/mL', clinicalSignificance: 'Significant elevation', typicalCauses: ['VTE possible', 'Surgery', 'Cancer'], urgency: 'soon' },
      { level: 'severe', range: '>5000 ng/mL', clinicalSignificance: 'Very high - consider DIC, massive PE', typicalCauses: ['DIC', 'Large VTE', 'Major trauma'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Very high D-dimer with DIC features', 'Clinical suspicion for PE with elevated D-dimer'],
    followUpTests: ['CT angiography if PE suspected', 'Leg ultrasound if DVT suspected', 'DIC panel if suspected'],
    questionsForDoctor: ['Do I have a blood clot?', 'Do I need imaging?', 'Why is my D-dimer elevated?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Normal/low D-dimer is useful to RULE OUT DVT/PE in low-risk patients. A negative D-dimer essentially excludes VTE.',
    pathophysiology: 'Normal D-dimer means no significant clot formation/breakdown occurring.',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'fibrinogen', testName: 'Fibrinogen', relationship: 'complements', whenToOrder: 'If DIC suspected', interpretationContext: 'Low fibrinogen + high D-dimer suggests DIC' },
  ],
  associatedConditions: [
    { condition: 'Pulmonary embolism', direction: 'elevated', typicalPattern: 'Elevated but non-specific', sensitivity: 'high', specificity: 'low', notes: 'Normal D-dimer rules OUT PE in low-risk patients' },
    { condition: 'DIC', direction: 'elevated', typicalPattern: 'Very elevated', sensitivity: 'high', specificity: 'low', notes: 'Part of DIC diagnostic criteria' },
  ],
  interferingFactors: [
    { factor: 'Age', effect: 'falsely-elevated', mechanism: 'Baseline increases with age', clinicalRelevance: 'Use age-adjusted cutoff', mitigation: 'Age x 10 ng/mL for patients >50' },
    { factor: 'Pregnancy', effect: 'falsely-elevated', mechanism: 'Physiologic increase', clinicalRelevance: 'Higher cutoffs needed', mitigation: 'Interpret cautiously in pregnancy' },
    { factor: 'Inflammation', effect: 'falsely-elevated', mechanism: 'Non-specific elevation', clinicalRelevance: 'Reduces specificity', mitigation: 'Clinical context important' },
  ],
  temporalPatterns: [
    { scenario: 'Acute VTE', pattern: 'Peaks within hours, normalizes over weeks with treatment', timeframe: 'Days-weeks', clinicalUse: 'Not used for monitoring treatment' },
  ],
  clinicalPearls: ['D-dimer is for RULING OUT VTE, not ruling in', 'Only useful in LOW pretest probability patients', 'Many things elevate D-dimer - its not specific', 'Use age-adjusted cutoff (age x 10 ng/mL) in elderly'],
  patientQuestions: ['Do I have a blood clot?', 'Why is my D-dimer elevated?'],
};

const FERRITIN: LabTestEducation = {
  id: 'ferritin',
  name: 'Ferritin',
  abbreviations: ['Ferr'],
  category: 'hematology',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Ferritin is the main iron storage protein. Low ferritin indicates iron deficiency; high ferritin can indicate iron overload or inflammation.',
  physiologicalBasis: {
    analyte: 'Ferritin protein',
    source: 'Produced by many cells; reflects iron stores in liver, spleen, bone marrow',
    normalFunction: 'Stores iron in non-toxic form; releases iron when needed',
    regulation: 'Increases with iron loading; also acute phase reactant (rises with inflammation)',
    clearance: 'Reflects tissue iron stores',
    involvedOrgans: ['Liver', 'Spleen', 'Bone marrow'],
    metabolicPathways: ['Iron metabolism'],
  },
  referenceRanges: [
    { population: { sex: 'male', ageMin: 18 }, lowValue: 30, highValue: 400, unit: 'ng/mL' },
    { population: { sex: 'female', ageMin: 18 }, lowValue: 15, highValue: 200, unit: 'ng/mL' },
    { population: { sex: 'female', pregnancy: true }, lowValue: 15, highValue: 150, unit: 'ng/mL' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High ferritin can indicate iron overload (hemochromatosis) or be an acute phase response to inflammation, infection, or liver disease.',
    pathophysiology: 'Ferritin rises from: (1) True iron overload (hemochromatosis, transfusions), (2) Inflammation (acute phase reactant), (3) Liver disease (ferritin leaks from damaged hepatocytes).',
    causeCategories: [
      { category: 'Iron overload', description: 'Excess body iron', examples: ['Hereditary hemochromatosis', 'Transfusion-dependent anemias', 'Iron supplement overuse'] },
      { category: 'Inflammation', description: 'Acute phase response', examples: ['Chronic inflammation', 'Infection', 'Autoimmune disease', 'Cancer'] },
      { category: 'Liver disease', description: 'Hepatocyte damage', examples: ['Hepatitis', 'NAFLD', 'Alcoholic liver disease'] },
    ],
    commonCauses: [
      { cause: 'Inflammation/infection', mechanism: 'Acute phase reactant', typicalLevel: 'moderate', associatedFindings: ['Elevated CRP', 'Normal transferrin saturation'], clinicalContext: 'Acute illness, chronic disease' },
      { cause: 'NAFLD', mechanism: 'Hepatocyte injury + metabolic syndrome', typicalLevel: 'moderate', associatedFindings: ['Elevated ALT', 'Metabolic syndrome'], clinicalContext: 'Obesity, diabetes' },
      { cause: 'Hereditary hemochromatosis', mechanism: 'HFE gene mutation causes excess iron absorption', typicalLevel: 'severe', associatedFindings: ['Elevated transferrin saturation (>45%)', 'Organ damage'], clinicalContext: 'Family history, liver disease' },
    ],
    lessCauses: [
      { cause: 'Transfusion iron overload', mechanism: 'Accumulated from repeated transfusions', typicalLevel: 'severe', associatedFindings: ['Transfusion-dependent anemia'], clinicalContext: 'Thalassemia, sickle cell, MDS' },
    ],
    severityGuidance: [
      { level: 'mild', range: '400-1000 ng/mL', clinicalSignificance: 'Mildly elevated - often inflammation or liver disease', typicalCauses: ['Inflammation', 'Liver disease'], urgency: 'routine' },
      { level: 'severe', range: '>1000 ng/mL', clinicalSignificance: 'Significantly elevated - evaluate for iron overload', typicalCauses: ['Hemochromatosis', 'Transfusion overload'], urgency: 'soon' },
    ],
    worryingFeatures: ['Very high ferritin (>1000)', 'Elevated transferrin saturation', 'Evidence of organ damage'],
    followUpTests: ['Transferrin saturation', 'Iron panel', 'CRP', 'Liver function tests', 'HFE gene testing if hemochromatosis suspected'],
    questionsForDoctor: ['Is this from iron overload or inflammation?', 'Do I have hemochromatosis?', 'Do I need genetic testing?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low ferritin indicates iron deficiency and depleted iron stores. Its the most specific marker for iron deficiency anemia.',
    pathophysiology: 'Ferritin falls when iron stores are depleted from inadequate intake, poor absorption, or chronic blood loss.',
    causeCategories: [
      { category: 'Iron deficiency', description: 'Depleted stores', examples: ['Dietary deficiency', 'GI blood loss', 'Menstrual blood loss', 'Malabsorption'] },
    ],
    commonCauses: [
      { cause: 'GI blood loss', mechanism: 'Chronic occult bleeding', typicalLevel: 'moderate', associatedFindings: ['Microcytic anemia', 'Low iron/TIBC elevated'], clinicalContext: 'Older adult, GI symptoms' },
      { cause: 'Menstrual blood loss', mechanism: 'Heavy periods', typicalLevel: 'moderate', associatedFindings: ['Premenopausal woman', 'Microcytic anemia'], clinicalContext: 'Heavy periods' },
      { cause: 'Dietary deficiency', mechanism: 'Inadequate intake', typicalLevel: 'mild', associatedFindings: ['Vegetarian/vegan', 'Poor diet'], clinicalContext: 'Restricted diet' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '10-30 ng/mL', clinicalSignificance: 'Borderline/depleting stores', typicalCauses: ['Early iron deficiency'], urgency: 'routine' },
      { level: 'severe', range: '<10 ng/mL', clinicalSignificance: 'Severe iron deficiency', typicalCauses: ['Significant blood loss', 'Severe deficiency'], urgency: 'soon' },
    ],
    worryingFeatures: ['Very low ferritin with anemia', 'Unexplained iron deficiency (consider GI malignancy)', 'Symptoms of severe anemia'],
    followUpTests: ['CBC', 'Iron, TIBC', 'Reticulocyte count', 'GI workup if unexplained'],
    questionsForDoctor: ['Why am I iron deficient?', 'Do I need iron supplements?', 'Do I need testing for bleeding?'],
  },
  relatedTests: [
    { testId: 'iron', testName: 'Serum Iron', relationship: 'complements', whenToOrder: 'Together for iron status', interpretationContext: 'Low ferritin = iron deficiency; high ferritin needs iron/TIBC to distinguish overload from inflammation' },
    { testId: 'tibc', testName: 'TIBC', relationship: 'complements', whenToOrder: 'With iron and ferritin', interpretationContext: 'Transferrin saturation = iron/TIBC helps interpret ferritin' },
  ],
  associatedConditions: [
    { condition: 'Iron deficiency anemia', direction: 'decreased', typicalPattern: 'Low ferritin is specific for iron deficiency', sensitivity: 'moderate', specificity: 'high', notes: 'Most specific marker' },
    { condition: 'Hemochromatosis', direction: 'elevated', typicalPattern: 'Very high ferritin with high transferrin saturation', sensitivity: 'high', specificity: 'low', notes: 'Need transferrin sat and gene testing' },
  ],
  interferingFactors: [
    { factor: 'Inflammation', effect: 'falsely-elevated', mechanism: 'Acute phase reactant', clinicalRelevance: 'Can mask iron deficiency', mitigation: 'Check CRP; may need soluble transferrin receptor' },
    { factor: 'Liver disease', effect: 'falsely-elevated', mechanism: 'Hepatocyte release', clinicalRelevance: 'Doesnt reflect iron stores', mitigation: 'Consider liver disease effect' },
  ],
  temporalPatterns: [
    { scenario: 'Iron replacement', pattern: 'Rises over weeks-months with treatment', timeframe: 'Weeks-months', clinicalUse: 'Target ferritin 50-100 for repletion' },
  ],
  clinicalPearls: ['Ferritin <30 ng/mL = iron deficiency', 'Ferritin is an acute phase reactant - may be normal despite iron deficiency in inflammation', 'High ferritin + high transferrin sat = iron overload; high ferritin + normal sat = inflammation', 'Unexplained iron deficiency in elderly = GI workup'],
  patientQuestions: ['Am I iron deficient?', 'Do I have too much iron?', 'Why is my ferritin high/low?'],
};

const IRON: LabTestEducation = {
  id: 'iron',
  name: 'Serum Iron',
  abbreviations: ['Fe', 'Iron'],
  category: 'hematology',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Serum iron measures the amount of iron circulating in your blood bound to transferrin. Its part of the iron panel for evaluating anemia.',
  physiologicalBasis: {
    analyte: 'Serum iron (transferrin-bound)',
    source: 'Diet; recycled from old red blood cells',
    normalFunction: 'Transported by transferrin to bone marrow for hemoglobin synthesis',
    regulation: 'Hepcidin regulates absorption and release from stores',
    clearance: 'Used for RBC production; stored as ferritin',
    involvedOrgans: ['Intestines (absorption)', 'Liver', 'Bone marrow', 'Spleen'],
    metabolicPathways: ['Iron absorption', 'Transferrin transport', 'Hemoglobin synthesis'],
  },
  referenceRanges: [
    { population: { sex: 'male', ageMin: 18 }, lowValue: 65, highValue: 175, unit: 'mcg/dL' },
    { population: { sex: 'female', ageMin: 18 }, lowValue: 50, highValue: 170, unit: 'mcg/dL' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High serum iron can indicate iron overload (hemochromatosis), excess supplementation, hemolysis, or liver disease.',
    pathophysiology: 'Iron rises with: (1) Iron overload states, (2) Hemolysis (releasing RBC iron), (3) Acute liver disease, (4) Recent iron ingestion.',
    causeCategories: [
      { category: 'Iron overload', description: 'Excess body iron', examples: ['Hemochromatosis', 'Transfusions', 'Excess supplements'] },
      { category: 'Hemolysis', description: 'RBC destruction releases iron', examples: ['Hemolytic anemia'] },
      { category: 'Liver disease', description: 'Release from hepatocytes', examples: ['Acute hepatitis', 'Cirrhosis'] },
    ],
    commonCauses: [
      { cause: 'Hemochromatosis', mechanism: 'Excess iron absorption', typicalLevel: 'moderate', associatedFindings: ['High ferritin', 'High transferrin saturation'], clinicalContext: 'Family history, liver disease' },
      { cause: 'Recent iron supplement', mechanism: 'Recent ingestion', typicalLevel: 'variable', associatedFindings: ['History of iron intake'], clinicalContext: 'On iron supplements' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '175-300 mcg/dL', clinicalSignificance: 'Mildly elevated', typicalCauses: ['Supplements', 'Hemolysis'], urgency: 'routine' },
      { level: 'severe', range: '>300 mcg/dL', clinicalSignificance: 'Significantly elevated', typicalCauses: ['Hemochromatosis', 'Iron overdose'], urgency: 'soon' },
    ],
    worryingFeatures: ['Very high iron with high transferrin saturation', 'Signs of iron toxicity (acute overdose)'],
    followUpTests: ['TIBC', 'Transferrin saturation', 'Ferritin', 'HFE gene testing'],
    questionsForDoctor: ['Do I have iron overload?', 'Should I stop iron supplements?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low serum iron indicates iron deficiency or anemia of chronic disease. Must interpret with TIBC and ferritin.',
    pathophysiology: 'Iron falls with: (1) True iron deficiency (depleted stores), (2) Inflammation (iron sequestration), (3) Chronic kidney disease.',
    causeCategories: [
      { category: 'Iron deficiency', description: 'Depleted stores', examples: ['Blood loss', 'Poor diet', 'Malabsorption'] },
      { category: 'Anemia of chronic disease', description: 'Iron sequestration', examples: ['Chronic inflammation', 'Infection', 'Cancer'] },
    ],
    commonCauses: [
      { cause: 'Iron deficiency anemia', mechanism: 'Depleted stores', typicalLevel: 'moderate', associatedFindings: ['Low ferritin', 'High TIBC', 'Microcytic anemia'], clinicalContext: 'Blood loss history' },
      { cause: 'Anemia of chronic disease', mechanism: 'Hepcidin blocks iron release', typicalLevel: 'mild', associatedFindings: ['Normal/high ferritin', 'Low TIBC'], clinicalContext: 'Chronic illness' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '40-60 mcg/dL', clinicalSignificance: 'Borderline low', typicalCauses: ['Early deficiency', 'Mild inflammation'], urgency: 'routine' },
      { level: 'severe', range: '<30 mcg/dL', clinicalSignificance: 'Significantly low', typicalCauses: ['Iron deficiency', 'Chronic disease'], urgency: 'soon' },
    ],
    worryingFeatures: ['Very low iron with anemia', 'Unexplained iron deficiency'],
    followUpTests: ['Ferritin', 'TIBC', 'CBC with indices', 'Reticulocyte count'],
    questionsForDoctor: ['Am I iron deficient?', 'Why is my iron low?'],
  },
  relatedTests: [
    { testId: 'ferritin', testName: 'Ferritin', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'Ferritin reflects stores; iron reflects circulating' },
    { testId: 'tibc', testName: 'TIBC', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'TIBC high in iron deficiency, low in chronic disease' },
  ],
  associatedConditions: [
    { condition: 'Iron deficiency anemia', direction: 'decreased', typicalPattern: 'Low iron, high TIBC, low ferritin', sensitivity: 'moderate', specificity: 'moderate', notes: 'Classic pattern' },
    { condition: 'Anemia of chronic disease', direction: 'decreased', typicalPattern: 'Low iron, low TIBC, normal/high ferritin', sensitivity: 'moderate', specificity: 'moderate', notes: 'Different from iron deficiency' },
  ],
  interferingFactors: [
    { factor: 'Recent iron intake', effect: 'falsely-elevated', mechanism: 'Recent supplement or meal', clinicalRelevance: 'Significant', mitigation: 'Fasting sample, hold supplements' },
    { factor: 'Diurnal variation', effect: 'variable', mechanism: 'Higher in morning', clinicalRelevance: 'Minor', mitigation: 'Consistent timing' },
  ],
  temporalPatterns: [],
  clinicalPearls: ['Serum iron varies a lot day-to-day; interpret with TIBC and ferritin', 'Fasting sample is preferred', 'Iron deficiency: low iron, HIGH TIBC, low ferritin', 'Chronic disease: low iron, LOW TIBC, normal/high ferritin'],
  patientQuestions: ['What does serum iron tell me?', 'How is it different from ferritin?'],
};

const TIBC: LabTestEducation = {
  id: 'tibc',
  name: 'Total Iron Binding Capacity',
  abbreviations: ['TIBC', 'Iron Binding Capacity'],
  category: 'hematology',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'TIBC measures the total capacity of transferrin to bind iron. High TIBC indicates iron deficiency; low TIBC suggests chronic disease or iron overload.',
  physiologicalBasis: {
    analyte: 'Total iron binding capacity (indirect measure of transferrin)',
    source: 'Transferrin produced by liver',
    normalFunction: 'Transferrin transports iron; TIBC reflects available binding sites',
    regulation: 'Transferrin production increases when iron stores are low',
    clearance: 'N/A (reflects transferrin level)',
    involvedOrgans: ['Liver'],
    metabolicPathways: ['Iron transport'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMin: 18 }, lowValue: 250, highValue: 400, unit: 'mcg/dL' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High TIBC indicates iron deficiency - the body makes more transferrin trying to capture any available iron.',
    pathophysiology: 'Liver increases transferrin production when iron stores are depleted, resulting in more iron-binding capacity.',
    causeCategories: [
      { category: 'Iron deficiency', description: 'Compensatory response', examples: ['Iron deficiency anemia', 'Early iron depletion'] },
      { category: 'Pregnancy', description: 'Physiologic increase', examples: ['Normal pregnancy'] },
    ],
    commonCauses: [
      { cause: 'Iron deficiency', mechanism: 'Increased transferrin synthesis', typicalLevel: 'moderate', associatedFindings: ['Low iron', 'Low ferritin', 'Microcytic anemia'], clinicalContext: 'Blood loss, poor diet' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '400-500 mcg/dL', clinicalSignificance: 'Mildly elevated', typicalCauses: ['Early iron deficiency'], urgency: 'routine' },
      { level: 'severe', range: '>500 mcg/dL', clinicalSignificance: 'Significant iron deficiency', typicalCauses: ['Severe iron deficiency'], urgency: 'soon' },
    ],
    worryingFeatures: ['Very high TIBC with symptomatic anemia'],
    followUpTests: ['Iron', 'Ferritin', 'CBC', 'Reticulocytes'],
    questionsForDoctor: ['Is this iron deficiency?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low TIBC suggests anemia of chronic disease or iron overload - the body downregulates transferrin.',
    pathophysiology: 'Inflammation suppresses transferrin production; iron overload also reduces transferrin.',
    causeCategories: [
      { category: 'Anemia of chronic disease', description: 'Inflammatory suppression', examples: ['Chronic infection', 'Cancer', 'Autoimmune disease'] },
      { category: 'Iron overload', description: 'Decreased transferrin with excess iron', examples: ['Hemochromatosis', 'Transfusion overload'] },
      { category: 'Liver disease', description: 'Decreased synthesis', examples: ['Cirrhosis'] },
    ],
    commonCauses: [
      { cause: 'Anemia of chronic disease', mechanism: 'Inflammation suppresses transferrin', typicalLevel: 'mild', associatedFindings: ['Low iron', 'Normal/high ferritin'], clinicalContext: 'Chronic illness' },
      { cause: 'Hemochromatosis', mechanism: 'Iron overload downregulates transferrin', typicalLevel: 'moderate', associatedFindings: ['High iron', 'High ferritin', 'High transferrin saturation'], clinicalContext: 'Iron overload' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '200-250 mcg/dL', clinicalSignificance: 'Mildly low', typicalCauses: ['Chronic disease', 'Mild overload'], urgency: 'routine' },
      { level: 'severe', range: '<200 mcg/dL', clinicalSignificance: 'Significantly low', typicalCauses: ['Severe chronic disease', 'Iron overload'], urgency: 'soon' },
    ],
    worryingFeatures: ['Low TIBC with high iron and ferritin (iron overload)'],
    followUpTests: ['Iron', 'Ferritin', 'Transferrin saturation', 'CRP'],
    questionsForDoctor: ['Do I have iron overload or chronic disease?'],
  },
  relatedTests: [
    { testId: 'iron', testName: 'Serum Iron', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'Transferrin saturation = Iron/TIBC' },
    { testId: 'ferritin', testName: 'Ferritin', relationship: 'complements', whenToOrder: 'Always together', interpretationContext: 'Complete iron panel' },
  ],
  associatedConditions: [
    { condition: 'Iron deficiency', direction: 'elevated', typicalPattern: 'High TIBC, low iron, low ferritin', sensitivity: 'moderate', specificity: 'moderate', notes: 'Distinguishes from chronic disease' },
    { condition: 'Anemia of chronic disease', direction: 'decreased', typicalPattern: 'Low TIBC, low iron, normal/high ferritin', sensitivity: 'moderate', specificity: 'moderate', notes: 'Key differentiator from iron deficiency' },
  ],
  interferingFactors: [
    { factor: 'Inflammation', effect: 'falsely-decreased', mechanism: 'Negative acute phase reactant', clinicalRelevance: 'Can confuse interpretation', mitigation: 'Check CRP' },
  ],
  temporalPatterns: [],
  clinicalPearls: ['Transferrin saturation = Iron/TIBC x 100', 'Iron deficiency: high TIBC (body wants more iron)', 'Chronic disease: low TIBC (body restricting iron)', 'Transferrin saturation >45% suggests iron overload'],
  patientQuestions: ['What does TIBC mean?', 'How does it help determine my iron status?'],
};

// ============================================
// Vitamin B12
// ============================================

const VITAMIN_B12: LabTestEducation = {
  id: 'vitamin-b12',
  name: 'Vitamin B12',
  abbreviations: ['B12', 'Cobalamin'],
  category: 'vitamins-minerals',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Vitamin B12 (cobalamin) level in blood, essential for nerve function and red blood cell production',
  physiologicalBasis: {
    analyte: 'Cobalamin (vitamin B12)',
    source: 'Dietary intake (animal products) and body stores in liver',
    normalFunction: 'Cofactor for DNA synthesis, nerve myelin maintenance, and red blood cell maturation',
    regulation: 'Absorption requires intrinsic factor from stomach; stored in liver for years',
    clearance: 'Minimal loss; recycled through enterohepatic circulation',
    involvedOrgans: ['Stomach', 'Terminal ileum', 'Liver', 'Bone marrow', 'Nervous system'],
    metabolicPathways: ['One-carbon metabolism', 'Methylation reactions', 'Homocysteine conversion'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 200, highValue: 900, unit: 'pg/mL', notes: 'Some labs use 300 as lower limit' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Usually not clinically significant; may indicate excess supplementation or certain conditions',
    pathophysiology: 'Excess intake or release from damaged liver cells',
    causeCategories: [
      { category: 'Supplementation', description: 'Excess B12 intake', examples: ['B12 injections', 'High-dose supplements'] },
      { category: 'Liver disease', description: 'Release of stored B12', examples: ['Hepatitis', 'Cirrhosis', 'Liver cancer'] },
    ],
    commonCauses: [
      { cause: 'B12 supplementation', mechanism: 'Excess intake', typicalLevel: 'variable', associatedFindings: ['Normal MCV'], clinicalContext: 'Common in patients on supplements' },
    ],
    lessCauses: [
      { cause: 'Myeloproliferative disorders', mechanism: 'Increased B12 binding proteins', typicalLevel: 'moderate', associatedFindings: ['Elevated WBC or platelets'], clinicalContext: 'Polycythemia vera, CML' },
    ],
    severityGuidance: [
      { level: 'mild', range: '900-1500 pg/mL', clinicalSignificance: 'Usually not concerning', typicalCauses: ['Supplementation'], urgency: 'routine' },
    ],
    worryingFeatures: ['Unexplained elevation without supplementation', 'Liver function abnormalities'],
    followUpTests: ['Liver function tests', 'CBC'],
    questionsForDoctor: ['Are you taking B12 supplements?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'B12 deficiency can cause anemia and neurological problems',
    pathophysiology: 'Inadequate intake, absorption, or increased requirements leading to impaired DNA synthesis',
    causeCategories: [
      { category: 'Malabsorption', description: 'Cannot absorb B12', examples: ['Pernicious anemia', 'Gastric surgery', 'Celiac disease'] },
      { category: 'Dietary', description: 'Insufficient intake', examples: ['Strict vegan diet', 'Malnutrition'] },
      { category: 'Medications', description: 'Drug-induced deficiency', examples: ['Metformin', 'Proton pump inhibitors'] },
    ],
    commonCauses: [
      { cause: 'Pernicious anemia', mechanism: 'Autoimmune destruction of intrinsic factor-producing cells', typicalLevel: 'severe', associatedFindings: ['High MCV', 'Neurological symptoms'], clinicalContext: 'Classic cause, often elderly' },
      { cause: 'Dietary deficiency', mechanism: 'No animal product intake', typicalLevel: 'moderate', associatedFindings: ['Normal folate initially'], clinicalContext: 'Strict vegans without supplementation' },
    ],
    lessCauses: [
      { cause: 'Crohn disease', mechanism: 'Terminal ileum disease impairs absorption', typicalLevel: 'moderate', associatedFindings: ['GI symptoms', 'Low albumin'], clinicalContext: 'Inflammatory bowel disease' },
    ],
    severityGuidance: [
      { level: 'mild', range: '150-200 pg/mL', clinicalSignificance: 'Borderline deficiency', typicalCauses: ['Early deficiency', 'Dietary'], urgency: 'soon' },
      { level: 'moderate', range: '100-150 pg/mL', clinicalSignificance: 'Definite deficiency', typicalCauses: ['Malabsorption', 'Pernicious anemia'], urgency: 'soon' },
      { level: 'severe', range: '<100 pg/mL', clinicalSignificance: 'Severe deficiency, risk of neurological damage', typicalCauses: ['Pernicious anemia', 'Severe malabsorption'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Neurological symptoms (numbness, balance problems)', 'Very high MCV', 'Pancytopenia'],
    followUpTests: ['MMA (methylmalonic acid)', 'Homocysteine', 'Anti-intrinsic factor antibodies', 'CBC with MCV'],
    questionsForDoctor: ['What is causing my B12 deficiency?', 'Do I need B12 injections or oral supplements?'],
  },
  relatedTests: [
    { testId: 'folate', testName: 'Folate', relationship: 'complements', whenToOrder: 'Always with B12', interpretationContext: 'Both cause megaloblastic anemia' },
    { testId: 'mma', testName: 'Methylmalonic Acid', relationship: 'confirms', whenToOrder: 'When B12 borderline', interpretationContext: 'Elevated in B12 deficiency' },
  ],
  associatedConditions: [
    { condition: 'Pernicious anemia', direction: 'decreased', typicalPattern: 'Very low B12, high MCV', sensitivity: 'high', specificity: 'moderate', notes: 'Autoimmune cause' },
    { condition: 'Subacute combined degeneration', direction: 'decreased', typicalPattern: 'Very low B12, neurological symptoms', sensitivity: 'high', specificity: 'high', notes: 'Neurological emergency' },
  ],
  interferingFactors: [
    { factor: 'Recent B12 injection', effect: 'falsely-elevated', mechanism: 'Exogenous B12', clinicalRelevance: 'Check timing of last injection', mitigation: 'Wait before testing' },
    { factor: 'Folate deficiency', effect: 'variable', mechanism: 'Can mask B12 deficiency symptoms', clinicalRelevance: 'Always check both', mitigation: 'Test both B12 and folate' },
  ],
  temporalPatterns: [
    { scenario: 'Starting B12 therapy', pattern: 'Rapid normalization of levels', timeframe: 'Days to weeks', clinicalUse: 'Monitor response' },
  ],
  clinicalPearls: ['B12 deficiency can cause irreversible neurological damage if untreated', 'MCV may be normal if concurrent iron deficiency', 'Neurological symptoms can occur before anemia', 'MMA more specific than homocysteine for B12 deficiency'],
  patientQuestions: ['Why is my B12 low?', 'Do I need injections or can I take pills?', 'How long until my symptoms improve?'],
};

// ============================================
// Folate
// ============================================

const FOLATE: LabTestEducation = {
  id: 'folate',
  name: 'Folate',
  abbreviations: ['Folic Acid', 'Vitamin B9', 'RBC Folate'],
  category: 'vitamins-minerals',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Folate (vitamin B9) level, essential for DNA synthesis and cell division',
  physiologicalBasis: {
    analyte: 'Folate/folic acid',
    source: 'Dietary intake (leafy greens, fortified foods) and supplements',
    normalFunction: 'Cofactor for DNA synthesis and repair, important for rapidly dividing cells',
    regulation: 'Absorbed in small intestine; body stores last 3-4 months',
    clearance: 'Renal excretion; enterohepatic circulation',
    involvedOrgans: ['Small intestine', 'Liver', 'Bone marrow'],
    metabolicPathways: ['One-carbon metabolism', 'Purine and pyrimidine synthesis', 'Homocysteine metabolism'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 3, highValue: 20, unit: 'ng/mL', notes: 'Serum folate reflects recent intake' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'High folate is generally not harmful; usually from supplements',
    pathophysiology: 'Excess intake from supplements or fortified foods',
    causeCategories: [
      { category: 'Supplementation', description: 'Folic acid supplements', examples: ['Prenatal vitamins', 'Folate supplements'] },
    ],
    commonCauses: [
      { cause: 'Folic acid supplementation', mechanism: 'Excess intake', typicalLevel: 'variable', associatedFindings: ['Normal other values'], clinicalContext: 'Very common with prenatal vitamins' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '>20 ng/mL', clinicalSignificance: 'Not clinically significant', typicalCauses: ['Supplementation'], urgency: 'routine' },
    ],
    worryingFeatures: ['May mask B12 deficiency - always check B12'],
    followUpTests: ['Vitamin B12'],
    questionsForDoctor: ['Are you taking folic acid supplements?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Folate deficiency causes megaloblastic anemia and can cause birth defects in pregnancy',
    pathophysiology: 'Inadequate intake or absorption leads to impaired DNA synthesis',
    causeCategories: [
      { category: 'Dietary', description: 'Poor intake', examples: ['Alcoholism', 'Poor diet'] },
      { category: 'Malabsorption', description: 'Cannot absorb folate', examples: ['Celiac disease', 'Inflammatory bowel disease'] },
      { category: 'Increased requirements', description: 'Need more than usual', examples: ['Pregnancy', 'Hemolytic anemia'] },
    ],
    commonCauses: [
      { cause: 'Alcoholism', mechanism: 'Decreased intake and impaired absorption', typicalLevel: 'moderate', associatedFindings: ['High MCV', 'Liver abnormalities'], clinicalContext: 'Common in heavy drinkers' },
      { cause: 'Poor dietary intake', mechanism: 'Insufficient folate-rich foods', typicalLevel: 'mild', associatedFindings: ['Normal B12'], clinicalContext: 'Elderly, poor diet' },
    ],
    lessCauses: [
      { cause: 'Medications', mechanism: 'Folate antagonists', typicalLevel: 'moderate', associatedFindings: ['Known medication use'], clinicalContext: 'Methotrexate, phenytoin' },
    ],
    severityGuidance: [
      { level: 'mild', range: '2-3 ng/mL', clinicalSignificance: 'Borderline deficiency', typicalCauses: ['Dietary'], urgency: 'soon' },
      { level: 'moderate', range: '<2 ng/mL', clinicalSignificance: 'Definite deficiency', typicalCauses: ['Alcoholism', 'Malabsorption'], urgency: 'soon' },
    ],
    worryingFeatures: ['Pregnancy (neural tube defect risk)', 'Severe anemia', 'Pancytopenia'],
    followUpTests: ['Vitamin B12', 'CBC with MCV', 'Homocysteine'],
    questionsForDoctor: ['What is causing my folate deficiency?', 'Should I take supplements?'],
  },
  relatedTests: [
    { testId: 'vitamin-b12', testName: 'Vitamin B12', relationship: 'complements', whenToOrder: 'Always with folate', interpretationContext: 'Both cause megaloblastic anemia' },
    { testId: 'homocysteine', testName: 'Homocysteine', relationship: 'confirms', whenToOrder: 'If deficiency suspected', interpretationContext: 'Elevated in both B12 and folate deficiency' },
  ],
  associatedConditions: [
    { condition: 'Megaloblastic anemia', direction: 'decreased', typicalPattern: 'Low folate, high MCV', sensitivity: 'high', specificity: 'moderate', notes: 'Same picture as B12 deficiency' },
    { condition: 'Neural tube defects', direction: 'decreased', typicalPattern: 'Low maternal folate in early pregnancy', sensitivity: 'high', specificity: 'moderate', notes: 'Prevention with supplementation' },
  ],
  interferingFactors: [
    { factor: 'Recent folate intake', effect: 'falsely-elevated', mechanism: 'Reflects recent intake', clinicalRelevance: 'Serum folate fluctuates', mitigation: 'Consider RBC folate for chronic status' },
  ],
  temporalPatterns: [
    { scenario: 'Starting folate therapy', pattern: 'Rapid improvement in anemia', timeframe: 'Days to weeks', clinicalUse: 'Monitor response' },
  ],
  clinicalPearls: ['Folate supplementation can mask B12 deficiency - always check both', 'RBC folate reflects longer-term status than serum folate', 'Critical in pregnancy for preventing neural tube defects', 'Responds to treatment faster than B12 deficiency'],
  patientQuestions: ['Why is my folate low?', 'What foods contain folate?', 'Should I take supplements?'],
};

// ============================================
// Vitamin D (25-OH)
// ============================================

const VITAMIN_D: LabTestEducation = {
  id: 'vitamin-d',
  name: 'Vitamin D, 25-Hydroxy',
  abbreviations: ['25-OH Vitamin D', 'Calcidiol', '25(OH)D'],
  category: 'vitamins-minerals',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Vitamin D status - the storage form that reflects overall vitamin D levels',
  physiologicalBasis: {
    analyte: '25-hydroxyvitamin D (calcidiol)',
    source: 'Skin synthesis from sunlight and dietary intake; converted in liver to 25-OH form',
    normalFunction: 'Precursor to active vitamin D; regulates calcium absorption and bone health',
    regulation: 'Produced in liver from vitamin D2/D3; reflects body stores',
    clearance: 'Converted to active form (1,25-OH) in kidney; has long half-life (2-3 weeks)',
    involvedOrgans: ['Skin', 'Liver', 'Kidney', 'Bone', 'Intestine'],
    metabolicPathways: ['Calcium homeostasis', 'Bone metabolism', 'Immune function'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 30, highValue: 100, unit: 'ng/mL', notes: '20-30 ng/mL considered insufficient; <20 deficient' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Vitamin D toxicity is rare but possible with excessive supplementation',
    pathophysiology: 'Excess vitamin D leads to increased calcium absorption and hypercalcemia',
    causeCategories: [
      { category: 'Excess supplementation', description: 'Too much vitamin D intake', examples: ['High-dose supplements', 'Multiple sources'] },
    ],
    commonCauses: [
      { cause: 'Excessive supplementation', mechanism: 'Intake exceeds needs', typicalLevel: 'variable', associatedFindings: ['Hypercalcemia possible'], clinicalContext: 'Taking high doses without monitoring' },
    ],
    lessCauses: [
      { cause: 'Granulomatous disease', mechanism: 'Extra-renal conversion to active form', typicalLevel: 'mild', associatedFindings: ['Sarcoidosis', 'Lymphoma'], clinicalContext: 'Rare cause' },
    ],
    severityGuidance: [
      { level: 'mild', range: '100-150 ng/mL', clinicalSignificance: 'Excess but usually tolerated', typicalCauses: ['Supplementation'], urgency: 'soon' },
      { level: 'severe', range: '>150 ng/mL', clinicalSignificance: 'Risk of toxicity', typicalCauses: ['Excessive supplementation'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Hypercalcemia', 'Kidney stones', 'Nausea/vomiting'],
    followUpTests: ['Calcium', 'Phosphorus', 'PTH', 'Kidney function'],
    questionsForDoctor: ['How much vitamin D are you taking?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Vitamin D deficiency is very common and can affect bones, muscles, and immune function',
    pathophysiology: 'Insufficient vitamin D leads to impaired calcium absorption and bone health issues',
    causeCategories: [
      { category: 'Insufficient synthesis', description: 'Not enough sun exposure', examples: ['Indoor lifestyle', 'Northern latitudes', 'Dark skin'] },
      { category: 'Dietary', description: 'Poor intake', examples: ['Vegan diet', 'Milk allergy'] },
      { category: 'Malabsorption', description: 'Cannot absorb vitamin D', examples: ['Celiac disease', 'Gastric bypass'] },
    ],
    commonCauses: [
      { cause: 'Insufficient sun exposure', mechanism: 'Skin cannot produce enough vitamin D', typicalLevel: 'moderate', associatedFindings: ['Indoor lifestyle'], clinicalContext: 'Very common' },
      { cause: 'Obesity', mechanism: 'Vitamin D sequestered in fat tissue', typicalLevel: 'mild', associatedFindings: ['High BMI'], clinicalContext: 'May need higher doses' },
    ],
    lessCauses: [
      { cause: 'Chronic kidney disease', mechanism: 'Cannot convert to active form', typicalLevel: 'moderate', associatedFindings: ['Elevated creatinine'], clinicalContext: 'Need active form supplement' },
    ],
    severityGuidance: [
      { level: 'mild', range: '20-30 ng/mL', clinicalSignificance: 'Insufficiency', typicalCauses: ['Mild sun/dietary deficiency'], urgency: 'routine' },
      { level: 'moderate', range: '10-20 ng/mL', clinicalSignificance: 'Deficiency', typicalCauses: ['Significant deficiency'], urgency: 'soon' },
      { level: 'severe', range: '<10 ng/mL', clinicalSignificance: 'Severe deficiency', typicalCauses: ['Malabsorption', 'Severe deficiency'], urgency: 'soon' },
    ],
    worryingFeatures: ['Bone pain', 'Muscle weakness', 'Osteoporosis', 'Frequent falls'],
    followUpTests: ['Calcium', 'PTH', 'Phosphorus', 'Bone density scan'],
    questionsForDoctor: ['How much vitamin D should I take?', 'Should I get more sun exposure?'],
  },
  relatedTests: [
    { testId: 'calcium', testName: 'Calcium', relationship: 'complements', whenToOrder: 'With vitamin D', interpretationContext: 'Vitamin D regulates calcium' },
    { testId: 'pth', testName: 'PTH', relationship: 'complements', whenToOrder: 'If vitamin D abnormal', interpretationContext: 'Secondary hyperparathyroidism with low vitamin D' },
  ],
  associatedConditions: [
    { condition: 'Osteomalacia', direction: 'decreased', typicalPattern: 'Very low vitamin D, bone pain', sensitivity: 'high', specificity: 'moderate', notes: 'Soft bones in adults' },
    { condition: 'Rickets', direction: 'decreased', typicalPattern: 'Severe deficiency in children', sensitivity: 'high', specificity: 'high', notes: 'Bone deformities in children' },
  ],
  interferingFactors: [
    { factor: 'Season', effect: 'variable', mechanism: 'Sun exposure varies by season', clinicalRelevance: 'Levels lowest in winter', mitigation: 'Consider seasonal variation' },
    { factor: 'Skin pigmentation', effect: 'variable', mechanism: 'Darker skin produces less vitamin D', clinicalRelevance: 'Higher risk of deficiency', mitigation: 'May need more supplementation' },
  ],
  temporalPatterns: [
    { scenario: 'Starting supplementation', pattern: 'Gradual increase over months', timeframe: '2-3 months', clinicalUse: 'Recheck after 3 months of therapy' },
  ],
  clinicalPearls: ['25-OH vitamin D is the best measure of vitamin D status', 'Deficiency extremely common in northern latitudes', 'Obese patients may need higher doses', 'Check PTH if vitamin D very low (secondary hyperparathyroidism)'],
  patientQuestions: ['How much vitamin D should I take?', 'Is it from not getting enough sun?', 'What are the symptoms of deficiency?'],
};

// ============================================
// LDH (Lactate Dehydrogenase)
// ============================================

const LDH: LabTestEducation = {
  id: 'ldh',
  name: 'Lactate Dehydrogenase',
  abbreviations: ['LDH', 'LD'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'An enzyme released when cells are damaged, found in many tissues throughout the body',
  physiologicalBasis: {
    analyte: 'Lactate dehydrogenase enzyme',
    source: 'Present in nearly all body tissues including heart, liver, kidney, muscle, blood cells',
    normalFunction: 'Converts lactate to pyruvate; essential for energy metabolism',
    regulation: 'Released into blood when cells are damaged or destroyed',
    clearance: 'Metabolized in liver; half-life about 24 hours',
    involvedOrgans: ['Heart', 'Liver', 'Kidney', 'Muscle', 'Red blood cells', 'Lung'],
    metabolicPathways: ['Glycolysis', 'Gluconeogenesis'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 140, highValue: 280, unit: 'U/L', notes: 'Varies by laboratory method' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Indicates tissue damage somewhere in the body; non-specific marker',
    pathophysiology: 'Cellular injury releases LDH into bloodstream from damaged tissues',
    causeCategories: [
      { category: 'Hemolysis', description: 'Red blood cell destruction', examples: ['Hemolytic anemia', 'Sample hemolysis'] },
      { category: 'Tissue damage', description: 'Organ injury', examples: ['Heart attack', 'Liver disease', 'Muscle damage'] },
      { category: 'Malignancy', description: 'Cancer-related', examples: ['Lymphoma', 'Leukemia', 'Metastatic cancer'] },
    ],
    commonCauses: [
      { cause: 'Hemolysis', mechanism: 'RBC destruction releases LDH', typicalLevel: 'variable', associatedFindings: ['Low haptoglobin', 'High bilirubin'], clinicalContext: 'Most common cause; check for specimen hemolysis' },
      { cause: 'Tissue hypoxia', mechanism: 'Cellular damage from low oxygen', typicalLevel: 'moderate', associatedFindings: ['Clinical context of ischemia'], clinicalContext: 'Heart attack, stroke, shock' },
    ],
    lessCauses: [
      { cause: 'Lymphoma', mechanism: 'Tumor cell turnover', typicalLevel: 'moderate', associatedFindings: ['Lymphadenopathy'], clinicalContext: 'Prognostic marker in lymphoma' },
      { cause: 'Pulmonary embolism', mechanism: 'Lung tissue damage', typicalLevel: 'mild', associatedFindings: ['Dyspnea', 'Chest pain'], clinicalContext: 'Non-specific but supportive finding' },
    ],
    severityGuidance: [
      { level: 'mild', range: '280-500 U/L', clinicalSignificance: 'Mild elevation', typicalCauses: ['Minor hemolysis', 'Mild tissue injury'], urgency: 'routine' },
      { level: 'moderate', range: '500-1000 U/L', clinicalSignificance: 'Significant elevation', typicalCauses: ['Hemolytic anemia', 'Organ damage'], urgency: 'soon' },
      { level: 'severe', range: '>1000 U/L', clinicalSignificance: 'Marked elevation', typicalCauses: ['Severe hemolysis', 'Malignancy', 'Major tissue damage'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Persistent elevation', 'Very high levels', 'Associated with other abnormalities'],
    followUpTests: ['LDH isoenzymes', 'Haptoglobin', 'Reticulocyte count', 'Liver function tests'],
    questionsForDoctor: ['Where is the LDH coming from?', 'What other tests can help identify the source?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low LDH is rarely clinically significant',
    pathophysiology: 'Rare genetic conditions can cause low LDH',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [
      { cause: 'Genetic LDH deficiency', mechanism: 'Rare genetic variant', typicalLevel: 'mild', associatedFindings: ['Usually asymptomatic'], clinicalContext: 'Very rare' },
    ],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'haptoglobin', testName: 'Haptoglobin', relationship: 'complements', whenToOrder: 'If hemolysis suspected', interpretationContext: 'Low haptoglobin confirms hemolysis' },
    { testId: 'ast', testName: 'AST', relationship: 'complements', whenToOrder: 'With LDH', interpretationContext: 'Both elevated in tissue damage' },
  ],
  associatedConditions: [
    { condition: 'Hemolytic anemia', direction: 'elevated', typicalPattern: 'Very high LDH, low haptoglobin', sensitivity: 'high', specificity: 'low', notes: 'Non-specific for type of hemolysis' },
    { condition: 'Lymphoma', direction: 'elevated', typicalPattern: 'Elevated LDH, often very high', sensitivity: 'moderate', specificity: 'low', notes: 'Prognostic marker' },
  ],
  interferingFactors: [
    { factor: 'Sample hemolysis', effect: 'falsely-elevated', mechanism: 'RBCs in sample release LDH', clinicalRelevance: 'Very common artifact', mitigation: 'Redraw if hemolyzed' },
    { factor: 'Exercise', effect: 'falsely-elevated', mechanism: 'Muscle releases LDH', clinicalRelevance: 'Recent strenuous exercise', mitigation: 'Avoid exercise before test' },
  ],
  temporalPatterns: [
    { scenario: 'Myocardial infarction', pattern: 'Rises 24-48h, peaks 3-6 days', timeframe: 'Days', clinicalUse: 'Historical marker; troponin now preferred' },
  ],
  clinicalPearls: ['LDH is very non-specific - elevated in many conditions', 'Always check for sample hemolysis first', 'LDH isoenzymes can help identify tissue source', 'Important prognostic marker in lymphoma and some cancers'],
  patientQuestions: ['What does elevated LDH mean?', 'How do we find out what is causing it?'],
};

// ============================================
// Amylase
// ============================================

const AMYLASE: LabTestEducation = {
  id: 'amylase',
  name: 'Amylase',
  abbreviations: ['Amy'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'An enzyme that helps digest carbohydrates, mainly from pancreas and salivary glands',
  physiologicalBasis: {
    analyte: 'Amylase enzyme',
    source: 'Primarily pancreas and salivary glands; small amounts from other tissues',
    normalFunction: 'Breaks down starch into sugars during digestion',
    regulation: 'Released into digestive tract; small amounts normally in blood',
    clearance: 'Filtered by kidneys; short half-life (2 hours)',
    involvedOrgans: ['Pancreas', 'Salivary glands', 'Kidneys'],
    metabolicPathways: ['Carbohydrate digestion'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 30, highValue: 110, unit: 'U/L', notes: 'Varies by laboratory' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Most commonly indicates pancreatitis or salivary gland problems',
    pathophysiology: 'Pancreatic or salivary gland inflammation releases amylase into blood',
    causeCategories: [
      { category: 'Pancreatic', description: 'Pancreas problems', examples: ['Acute pancreatitis', 'Chronic pancreatitis', 'Pancreatic cancer'] },
      { category: 'Salivary', description: 'Salivary gland problems', examples: ['Mumps', 'Sialadenitis'] },
      { category: 'Other', description: 'Non-pancreatic/salivary causes', examples: ['Renal failure', 'Macroamylasemia'] },
    ],
    commonCauses: [
      { cause: 'Acute pancreatitis', mechanism: 'Pancreatic inflammation releases amylase', typicalLevel: 'severe', associatedFindings: ['Abdominal pain', 'Elevated lipase'], clinicalContext: 'Classic presentation with abdominal pain' },
      { cause: 'Salivary gland inflammation', mechanism: 'Salivary tissue damage', typicalLevel: 'moderate', associatedFindings: ['Jaw/cheek swelling'], clinicalContext: 'Mumps, stones, infection' },
    ],
    lessCauses: [
      { cause: 'Macroamylasemia', mechanism: 'Amylase bound to immunoglobulin', typicalLevel: 'mild', associatedFindings: ['Normal lipase', 'Asymptomatic'], clinicalContext: 'Benign condition' },
      { cause: 'Renal failure', mechanism: 'Decreased clearance', typicalLevel: 'mild', associatedFindings: ['Elevated creatinine'], clinicalContext: 'Usually mild elevation' },
    ],
    severityGuidance: [
      { level: 'mild', range: '110-200 U/L', clinicalSignificance: 'Mild elevation', typicalCauses: ['Non-pancreatic causes'], urgency: 'routine' },
      { level: 'moderate', range: '200-500 U/L', clinicalSignificance: 'Moderate elevation', typicalCauses: ['Possible pancreatitis'], urgency: 'soon' },
      { level: 'severe', range: '>3x upper limit', clinicalSignificance: 'Strongly suggests pancreatitis', typicalCauses: ['Acute pancreatitis'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Severe abdominal pain', 'Very high levels (>3x normal)', 'Concurrent elevated lipase'],
    followUpTests: ['Lipase', 'CT abdomen', 'Liver function tests'],
    questionsForDoctor: ['Is this from my pancreas?', 'What is causing the inflammation?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low amylase is usually not clinically significant but can indicate pancreatic insufficiency',
    pathophysiology: 'Damaged or destroyed pancreatic tissue produces less amylase',
    causeCategories: [
      { category: 'Pancreatic insufficiency', description: 'Pancreas not producing enough enzymes', examples: ['Chronic pancreatitis', 'Cystic fibrosis', 'Pancreatic cancer'] },
    ],
    commonCauses: [
      { cause: 'Advanced chronic pancreatitis', mechanism: 'Pancreatic tissue destroyed', typicalLevel: 'moderate', associatedFindings: ['Steatorrhea', 'Diabetes'], clinicalContext: 'End-stage pancreatic disease' },
    ],
    lessCauses: [],
    severityGuidance: [
      { level: 'mild', range: '<30 U/L', clinicalSignificance: 'May indicate pancreatic insufficiency', typicalCauses: ['Chronic pancreatitis', 'Cystic fibrosis'], urgency: 'routine' },
    ],
    worryingFeatures: ['Steatorrhea (fatty stools)', 'Weight loss', 'Diabetes'],
    followUpTests: ['Lipase', 'Fecal elastase', 'CT abdomen'],
    questionsForDoctor: ['Does my pancreas work normally?'],
  },
  relatedTests: [
    { testId: 'lipase', testName: 'Lipase', relationship: 'complements', whenToOrder: 'Always with amylase for pancreatitis', interpretationContext: 'Lipase more specific for pancreatitis' },
  ],
  associatedConditions: [
    { condition: 'Acute pancreatitis', direction: 'elevated', typicalPattern: '>3x normal, with elevated lipase', sensitivity: 'high', specificity: 'moderate', notes: 'Rises within hours, falls in 3-5 days' },
    { condition: 'Chronic pancreatitis', direction: 'variable', typicalPattern: 'May be normal or low in advanced disease', sensitivity: 'low', specificity: 'low', notes: 'Pancreas may be "burned out"' },
  ],
  interferingFactors: [
    { factor: 'Lipemia', effect: 'falsely-decreased', mechanism: 'Interferes with assay', clinicalRelevance: 'In hypertriglyceridemia', mitigation: 'Consider lipase instead' },
  ],
  temporalPatterns: [
    { scenario: 'Acute pancreatitis', pattern: 'Rises within 6-12 hours, peaks at 24 hours, normalizes in 3-5 days', timeframe: 'Days', clinicalUse: 'Lipase stays elevated longer' },
  ],
  clinicalPearls: ['Lipase is more specific for pancreatitis than amylase', 'Amylase can be elevated from non-pancreatic sources (salivary, renal)', 'Magnitude of elevation does not correlate with severity of pancreatitis', 'Amylase may be normal in chronic or recurrent pancreatitis'],
  patientQuestions: ['Is this from my pancreas?', 'What causes pancreatitis?'],
};

// ============================================
// Lipase
// ============================================

const LIPASE: LabTestEducation = {
  id: 'lipase',
  name: 'Lipase',
  abbreviations: ['Lip'],
  category: 'chemistry',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'An enzyme that digests fats, primarily produced by the pancreas',
  physiologicalBasis: {
    analyte: 'Lipase enzyme',
    source: 'Primarily pancreas; small amounts from stomach, tongue, and other tissues',
    normalFunction: 'Breaks down triglycerides into fatty acids and glycerol for absorption',
    regulation: 'Released into digestive tract; small amounts normally in blood',
    clearance: 'Renal clearance; longer half-life than amylase (8-14 hours)',
    involvedOrgans: ['Pancreas', 'Small intestine', 'Kidneys'],
    metabolicPathways: ['Fat digestion and absorption'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 0, highValue: 160, unit: 'U/L', notes: 'Varies by laboratory' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Highly suggestive of pancreatitis; more specific for pancreas than amylase',
    pathophysiology: 'Pancreatic injury releases lipase into bloodstream',
    causeCategories: [
      { category: 'Pancreatic', description: 'Pancreas problems', examples: ['Acute pancreatitis', 'Chronic pancreatitis', 'Pancreatic cancer'] },
      { category: 'Non-pancreatic', description: 'Other abdominal conditions', examples: ['Bowel obstruction', 'Cholecystitis'] },
    ],
    commonCauses: [
      { cause: 'Acute pancreatitis', mechanism: 'Pancreatic inflammation releases lipase', typicalLevel: 'severe', associatedFindings: ['Abdominal pain', 'Elevated amylase'], clinicalContext: 'Classic presentation' },
    ],
    lessCauses: [
      { cause: 'Renal failure', mechanism: 'Decreased clearance', typicalLevel: 'mild', associatedFindings: ['Elevated creatinine'], clinicalContext: 'Usually mild elevation' },
      { cause: 'Bowel obstruction', mechanism: 'Intestinal ischemia', typicalLevel: 'mild', associatedFindings: ['Abdominal distension', 'Vomiting'], clinicalContext: 'Non-pancreatic cause' },
    ],
    severityGuidance: [
      { level: 'mild', range: '160-480 U/L', clinicalSignificance: 'Up to 3x normal', typicalCauses: ['Various causes'], urgency: 'soon' },
      { level: 'moderate', range: '480-800 U/L', clinicalSignificance: '3-5x normal', typicalCauses: ['Likely pancreatitis'], urgency: 'urgent' },
      { level: 'severe', range: '>3x upper limit', clinicalSignificance: 'Strongly suggests pancreatitis', typicalCauses: ['Acute pancreatitis'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Severe abdominal pain', '>3x upper limit of normal', 'Signs of organ failure'],
    followUpTests: ['Amylase', 'CT abdomen', 'Liver function tests', 'Triglycerides'],
    questionsForDoctor: ['Is this pancreatitis?', 'How severe is it?', 'What caused it?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low lipase is not clinically significant; may indicate pancreatic insufficiency if chronic',
    pathophysiology: 'Destruction of pancreatic tissue reduces lipase production',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [
      { cause: 'Chronic pancreatitis (end-stage)', mechanism: 'Pancreatic tissue destroyed', typicalLevel: 'mild', associatedFindings: ['Steatorrhea'], clinicalContext: 'Pancreas "burned out"' },
    ],
    severityGuidance: [],
    worryingFeatures: ['Steatorrhea', 'Weight loss'],
    followUpTests: ['Fecal elastase'],
    questionsForDoctor: ['Is my pancreas working normally?'],
  },
  relatedTests: [
    { testId: 'amylase', testName: 'Amylase', relationship: 'complements', whenToOrder: 'Usually together for pancreatitis', interpretationContext: 'Lipase more specific' },
  ],
  associatedConditions: [
    { condition: 'Acute pancreatitis', direction: 'elevated', typicalPattern: '>3x normal', sensitivity: 'high', specificity: 'high', notes: 'Preferred test for diagnosis' },
  ],
  interferingFactors: [
    { factor: 'Lipemia', effect: 'variable', mechanism: 'Can interfere with assay', clinicalRelevance: 'In hypertriglyceridemic pancreatitis', mitigation: 'Dilution of sample' },
  ],
  temporalPatterns: [
    { scenario: 'Acute pancreatitis', pattern: 'Rises within 4-8 hours, peaks at 24 hours, stays elevated 8-14 days', timeframe: 'Days to weeks', clinicalUse: 'Stays elevated longer than amylase' },
  ],
  clinicalPearls: ['Lipase is more specific for pancreatitis than amylase', 'Stays elevated longer than amylase', '>3x upper limit strongly suggests pancreatitis', 'Level does not correlate with severity'],
  patientQuestions: ['Do I have pancreatitis?', 'What caused it?', 'How serious is it?'],
};

// ============================================
// Troponin
// ============================================

const TROPONIN: LabTestEducation = {
  id: 'troponin',
  name: 'Troponin',
  abbreviations: ['TnI', 'TnT', 'cTnI', 'cTnT', 'hs-TnI', 'hs-TnT'],
  category: 'cardiac',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'A protein released from heart muscle cells when they are damaged; the most sensitive marker for heart attack',
  physiologicalBasis: {
    analyte: 'Cardiac troponin I or T',
    source: 'Heart muscle cells (cardiomyocytes)',
    normalFunction: 'Regulates cardiac muscle contraction as part of the contractile apparatus',
    regulation: 'Bound within heart muscle; released when cells are injured',
    clearance: 'Gradual decline over days after release',
    involvedOrgans: ['Heart'],
    metabolicPathways: ['Cardiac muscle contraction'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 0, highValue: 0.04, unit: 'ng/mL', notes: 'High-sensitivity assays have different cutoffs; check lab-specific values' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Indicates heart muscle damage; most commonly from heart attack but other causes exist',
    pathophysiology: 'Cardiac myocyte injury releases troponin into bloodstream',
    causeCategories: [
      { category: 'Ischemic', description: 'Heart attack', examples: ['STEMI', 'NSTEMI', 'Unstable angina with injury'] },
      { category: 'Non-ischemic cardiac', description: 'Other heart problems', examples: ['Myocarditis', 'Heart failure', 'Takotsubo cardiomyopathy'] },
      { category: 'Non-cardiac', description: 'Systemic conditions', examples: ['Sepsis', 'Pulmonary embolism', 'Renal failure'] },
    ],
    commonCauses: [
      { cause: 'Acute myocardial infarction', mechanism: 'Coronary artery occlusion causes myocyte death', typicalLevel: 'severe', associatedFindings: ['Chest pain', 'ECG changes', 'Rising pattern'], clinicalContext: 'Medical emergency' },
      { cause: 'Myocarditis', mechanism: 'Inflammatory damage to heart muscle', typicalLevel: 'moderate', associatedFindings: ['Viral illness', 'Young patient', 'No CAD risk factors'], clinicalContext: 'Often post-viral' },
    ],
    lessCauses: [
      { cause: 'Pulmonary embolism', mechanism: 'Right heart strain', typicalLevel: 'mild', associatedFindings: ['Dyspnea', 'Hypoxia', 'CT findings'], clinicalContext: 'Prognostic marker in PE' },
      { cause: 'Sepsis', mechanism: 'Demand ischemia', typicalLevel: 'mild', associatedFindings: ['Infection signs', 'Hemodynamic instability'], clinicalContext: 'Common in severe sepsis' },
      { cause: 'Chronic kidney disease', mechanism: 'Reduced clearance, chronic injury', typicalLevel: 'mild', associatedFindings: ['Elevated creatinine'], clinicalContext: 'May have stable baseline elevation' },
    ],
    severityGuidance: [
      { level: 'mild', range: '0.04-0.4 ng/mL', clinicalSignificance: 'Elevated, needs evaluation', typicalCauses: ['Various causes'], urgency: 'urgent' },
      { level: 'moderate', range: '0.4-2 ng/mL', clinicalSignificance: 'Significant elevation', typicalCauses: ['MI, myocarditis'], urgency: 'emergent' },
      { level: 'severe', range: '>2 ng/mL', clinicalSignificance: 'Large infarct or severe injury', typicalCauses: ['Large MI'], urgency: 'emergent' },
    ],
    worryingFeatures: ['Chest pain', 'Rising pattern', 'ECG changes', 'Hemodynamic instability'],
    followUpTests: ['Serial troponins (q3-6h)', 'ECG', 'Echocardiogram', 'Coronary angiography'],
    questionsForDoctor: ['Am I having a heart attack?', 'What is causing this?', 'Do I need cardiac catheterization?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Normal or undetectable troponin is reassuring and suggests no significant cardiac injury',
    pathophysiology: 'Intact cardiac myocytes retain troponin',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'bnp', testName: 'BNP', relationship: 'complements', whenToOrder: 'If heart failure suspected', interpretationContext: 'Different aspects of cardiac disease' },
    { testId: 'ecg', testName: 'ECG', relationship: 'complements', whenToOrder: 'Always with troponin', interpretationContext: 'Essential for MI diagnosis' },
  ],
  associatedConditions: [
    { condition: 'Acute MI', direction: 'elevated', typicalPattern: 'Rising and/or falling pattern', sensitivity: 'high', specificity: 'high', notes: 'Gold standard for diagnosis' },
    { condition: 'Myocarditis', direction: 'elevated', typicalPattern: 'Variable elevation', sensitivity: 'high', specificity: 'moderate', notes: 'Need clinical correlation' },
  ],
  interferingFactors: [
    { factor: 'Chronic kidney disease', effect: 'falsely-elevated', mechanism: 'Chronic low-level injury and reduced clearance', clinicalRelevance: 'May have stable baseline', mitigation: 'Look for rising pattern, not single value' },
    { factor: 'Recent cardiac procedure', effect: 'falsely-elevated', mechanism: 'Procedure-related injury', clinicalRelevance: 'Expected after surgery/intervention', mitigation: 'Clinical context' },
  ],
  temporalPatterns: [
    { scenario: 'Acute MI', pattern: 'Rises 3-6 hours, peaks 12-24 hours, falls over 5-14 days', timeframe: 'Days', clinicalUse: 'Serial measurements needed; look for rise/fall pattern' },
  ],
  clinicalPearls: ['Any troponin elevation requires urgent evaluation', 'Serial troponins essential - look for rise/fall pattern', 'High-sensitivity assays detect smaller amounts', 'Peak troponin correlates with infarct size'],
  patientQuestions: ['Am I having a heart attack?', 'Why is my troponin elevated?', 'What happens next?'],
};

// ============================================
// BNP (B-type Natriuretic Peptide)
// ============================================

const BNP: LabTestEducation = {
  id: 'bnp',
  name: 'B-type Natriuretic Peptide',
  abbreviations: ['BNP'],
  category: 'cardiac',
  specimen: 'plasma',
  resultType: 'numeric',
  whatItMeasures: 'A hormone released by heart muscle when it is stretched, used to evaluate heart failure',
  physiologicalBasis: {
    analyte: 'B-type natriuretic peptide',
    source: 'Ventricular myocardium in response to wall stress/stretch',
    normalFunction: 'Promotes natriuresis (sodium excretion), diuresis, vasodilation to reduce cardiac workload',
    regulation: 'Released in response to increased ventricular filling pressure',
    clearance: 'Neprilysin degradation and renal clearance; half-life ~20 minutes',
    involvedOrgans: ['Heart', 'Kidneys', 'Blood vessels'],
    metabolicPathways: ['Natriuretic peptide system', 'Volume regulation'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 0, highValue: 100, unit: 'pg/mL', notes: 'Age and BMI affect levels; higher cutoffs in elderly' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Suggests heart failure or cardiac strain; very useful for ruling out heart failure when normal',
    pathophysiology: 'Ventricular wall stretch from volume/pressure overload triggers BNP release',
    causeCategories: [
      { category: 'Heart failure', description: 'Primary indication', examples: ['Systolic HF', 'Diastolic HF', 'Decompensated HF'] },
      { category: 'Other cardiac', description: 'Cardiac strain', examples: ['Pulmonary embolism', 'Valvular disease', 'Atrial fibrillation'] },
      { category: 'Non-cardiac', description: 'Other causes', examples: ['Renal failure', 'Sepsis', 'Advanced age'] },
    ],
    commonCauses: [
      { cause: 'Heart failure', mechanism: 'Ventricular wall stress', typicalLevel: 'moderate', associatedFindings: ['Dyspnea', 'Edema', 'Orthopnea'], clinicalContext: 'Primary diagnostic use' },
      { cause: 'Atrial fibrillation', mechanism: 'Atrial stretch', typicalLevel: 'mild', associatedFindings: ['Irregular pulse', 'Palpitations'], clinicalContext: 'Often mildly elevated' },
    ],
    lessCauses: [
      { cause: 'Pulmonary embolism', mechanism: 'Right heart strain', typicalLevel: 'mild', associatedFindings: ['Dyspnea', 'Chest pain'], clinicalContext: 'Prognostic marker' },
      { cause: 'Renal failure', mechanism: 'Reduced clearance', typicalLevel: 'mild', associatedFindings: ['Elevated creatinine'], clinicalContext: 'Higher cutoffs needed' },
    ],
    severityGuidance: [
      { level: 'mild', range: '100-400 pg/mL', clinicalSignificance: 'Possible HF, need clinical correlation', typicalCauses: ['Mild HF', 'Other cardiac'], urgency: 'soon' },
      { level: 'moderate', range: '400-900 pg/mL', clinicalSignificance: 'Probable heart failure', typicalCauses: ['Heart failure'], urgency: 'urgent' },
      { level: 'severe', range: '>900 pg/mL', clinicalSignificance: 'Severe HF or acute decompensation', typicalCauses: ['Severe heart failure'], urgency: 'emergent' },
    ],
    worryingFeatures: ['Severe dyspnea', 'Hypoxia', 'Hypotension', 'Very high levels (>1000)'],
    followUpTests: ['Echocardiogram', 'Chest X-ray', 'Troponin', 'Basic metabolic panel'],
    questionsForDoctor: ['Do I have heart failure?', 'How severe is it?', 'What is causing it?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Normal BNP has high negative predictive value - heart failure very unlikely',
    pathophysiology: 'Normal ventricular filling pressures',
    causeCategories: [
      { category: 'Obesity', description: 'Lower BNP in obese patients', examples: ['BMI >30'] },
    ],
    commonCauses: [
      { cause: 'Normal cardiac function', mechanism: 'No ventricular wall stress', typicalLevel: 'mild', associatedFindings: ['No HF symptoms'], clinicalContext: 'Reassuring' },
    ],
    lessCauses: [
      { cause: 'Obesity', mechanism: 'Reduced BNP production from adipocytes', typicalLevel: 'mild', associatedFindings: ['High BMI'], clinicalContext: 'May have HF with low BNP' },
    ],
    severityGuidance: [],
    worryingFeatures: ['Obesity (can have HF with lower BNP)'],
    followUpTests: ['Echo if clinical suspicion high despite normal BNP'],
    questionsForDoctor: ['Can I rule out heart failure?'],
  },
  relatedTests: [
    { testId: 'nt-probnp', testName: 'NT-proBNP', relationship: 'complements', whenToOrder: 'Alternative marker', interpretationContext: 'Longer half-life, different cutoffs' },
    { testId: 'troponin', testName: 'Troponin', relationship: 'complements', whenToOrder: 'If MI suspected', interpretationContext: 'Different aspects of cardiac disease' },
  ],
  associatedConditions: [
    { condition: 'Heart failure', direction: 'elevated', typicalPattern: 'Degree correlates with severity', sensitivity: 'high', specificity: 'moderate', notes: 'Very helpful for ruling out HF' },
  ],
  interferingFactors: [
    { factor: 'Obesity', effect: 'falsely-decreased', mechanism: 'Reduced BNP production', clinicalRelevance: 'May underestimate HF in obese', mitigation: 'Lower diagnostic threshold' },
    { factor: 'Renal failure', effect: 'falsely-elevated', mechanism: 'Reduced clearance', clinicalRelevance: 'Higher cutoffs needed (200 pg/mL)', mitigation: 'Adjust for GFR' },
    { factor: 'Age', effect: 'falsely-elevated', mechanism: 'Normal increase with age', clinicalRelevance: 'Higher values normal in elderly', mitigation: 'Age-adjusted cutoffs' },
  ],
  temporalPatterns: [
    { scenario: 'Acute HF treatment', pattern: 'Should decrease 30-50% with treatment', timeframe: 'Days', clinicalUse: 'Monitor response to therapy' },
  ],
  clinicalPearls: ['BNP <100 pg/mL makes HF very unlikely', 'Obese patients may have HF with lower BNP', 'Useful for prognosis and monitoring therapy', 'Higher cutoffs needed in renal failure and elderly'],
  patientQuestions: ['Do I have heart failure?', 'What does my BNP level mean?', 'How is my heart failure being treated?'],
};

// ============================================
// NT-proBNP
// ============================================

const NT_PROBNP: LabTestEducation = {
  id: 'nt-probnp',
  name: 'NT-proBNP',
  abbreviations: ['N-terminal pro-BNP', 'proBNP'],
  category: 'cardiac',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'Inactive fragment released when BNP is produced; longer lasting marker of heart failure',
  physiologicalBasis: {
    analyte: 'N-terminal pro-B-type natriuretic peptide',
    source: 'Released from ventricles along with BNP when proBNP is cleaved',
    normalFunction: 'Inactive fragment; no physiological function but useful biomarker',
    regulation: 'Released in response to ventricular wall stress',
    clearance: 'Primarily renal clearance; longer half-life than BNP (60-120 minutes)',
    involvedOrgans: ['Heart', 'Kidneys'],
    metabolicPathways: ['Natriuretic peptide system'],
  },
  referenceRanges: [
    { population: { sex: 'all', ageMax: 50 }, lowValue: 0, highValue: 300, unit: 'pg/mL', notes: 'Age-dependent cutoffs' },
    { population: { sex: 'all', ageMin: 50, ageMax: 75 }, lowValue: 0, highValue: 450, unit: 'pg/mL', notes: 'Age 50-75' },
    { population: { sex: 'all', ageMin: 75 }, lowValue: 0, highValue: 900, unit: 'pg/mL', notes: 'Age >75' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Elevated NT-proBNP suggests heart failure or cardiac strain; very sensitive marker',
    pathophysiology: 'Ventricular wall stress causes proBNP release and cleavage',
    causeCategories: [
      { category: 'Heart failure', description: 'Primary indication', examples: ['HFrEF', 'HFpEF', 'Acute decompensation'] },
      { category: 'Other cardiac', description: 'Cardiac strain', examples: ['Atrial fibrillation', 'Pulmonary embolism', 'Valvular disease'] },
      { category: 'Non-cardiac', description: 'Other causes', examples: ['Renal failure', 'Sepsis', 'Advanced age'] },
    ],
    commonCauses: [
      { cause: 'Heart failure', mechanism: 'Ventricular wall stress', typicalLevel: 'moderate', associatedFindings: ['Dyspnea', 'Edema', 'Reduced EF'], clinicalContext: 'Primary diagnostic use' },
    ],
    lessCauses: [
      { cause: 'Chronic kidney disease', mechanism: 'Reduced clearance', typicalLevel: 'mild', associatedFindings: ['Elevated creatinine'], clinicalContext: 'Very common confounder' },
    ],
    severityGuidance: [
      { level: 'mild', range: '300-900 pg/mL (age <50)', clinicalSignificance: 'Gray zone, needs evaluation', typicalCauses: ['Possible HF'], urgency: 'soon' },
      { level: 'moderate', range: '900-1800 pg/mL', clinicalSignificance: 'Probable HF', typicalCauses: ['Heart failure'], urgency: 'urgent' },
      { level: 'severe', range: '>1800 pg/mL', clinicalSignificance: 'Severe HF', typicalCauses: ['Severe heart failure'], urgency: 'emergent' },
    ],
    worryingFeatures: ['Severe dyspnea', 'Hypoxia', 'Very high levels'],
    followUpTests: ['Echocardiogram', 'Chest X-ray', 'BMP', 'Troponin'],
    questionsForDoctor: ['Do I have heart failure?', 'Why is my level so high?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Normal NT-proBNP essentially rules out heart failure',
    pathophysiology: 'Normal ventricular function',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'bnp', testName: 'BNP', relationship: 'complements', whenToOrder: 'Alternative marker', interpretationContext: 'Different half-life and cutoffs' },
  ],
  associatedConditions: [
    { condition: 'Heart failure', direction: 'elevated', typicalPattern: 'Higher with worse severity', sensitivity: 'high', specificity: 'moderate', notes: 'Age-adjusted cutoffs needed' },
  ],
  interferingFactors: [
    { factor: 'Age', effect: 'falsely-elevated', mechanism: 'Normal increase with age', clinicalRelevance: 'Must use age-adjusted cutoffs', mitigation: 'Age-specific reference ranges' },
    { factor: 'Renal failure', effect: 'falsely-elevated', mechanism: 'Reduced renal clearance', clinicalRelevance: 'Major confounder in CKD', mitigation: 'Higher thresholds in CKD' },
    { factor: 'Obesity', effect: 'falsely-decreased', mechanism: 'Reduced production', clinicalRelevance: 'May miss HF in obese', mitigation: 'Lower threshold' },
  ],
  temporalPatterns: [
    { scenario: 'HF treatment', pattern: 'Should decrease with effective therapy', timeframe: 'Days to weeks', clinicalUse: 'Monitor response' },
  ],
  clinicalPearls: ['Age-adjusted cutoffs essential', 'More affected by renal function than BNP', 'Longer half-life - better for outpatient monitoring', '<300 pg/mL (age <50) rules out HF'],
  patientQuestions: ['What does this number mean for my heart?', 'Is my heart failure getting better or worse?'],
};

// ============================================
// Procalcitonin
// ============================================

const PROCALCITONIN: LabTestEducation = {
  id: 'procalcitonin',
  name: 'Procalcitonin',
  abbreviations: ['PCT'],
  category: 'inflammatory',
  specimen: 'serum',
  resultType: 'numeric',
  whatItMeasures: 'A marker that rises specifically in bacterial infections, helping distinguish bacterial from viral infections',
  physiologicalBasis: {
    analyte: 'Procalcitonin (precursor to calcitonin)',
    source: 'Normally produced only in thyroid; in infection, produced by many tissues in response to bacterial toxins',
    normalFunction: 'Normally no function; procalcitonin is converted to calcitonin in thyroid',
    regulation: 'Induced by bacterial endotoxins and inflammatory cytokines',
    clearance: 'Half-life 25-30 hours; levels fall quickly when infection controlled',
    involvedOrgans: ['All tissues in response to bacterial infection'],
    metabolicPathways: ['Inflammatory response'],
  },
  referenceRanges: [
    { population: { sex: 'all' }, lowValue: 0, highValue: 0.05, unit: 'ng/mL', notes: '<0.1 generally considered normal' },
  ],
  elevatedInterpretation: {
    generalMeaning: 'Suggests bacterial infection, especially systemic/severe; helps guide antibiotic decisions',
    pathophysiology: 'Bacterial toxins induce procalcitonin production from multiple tissues',
    causeCategories: [
      { category: 'Bacterial infection', description: 'Primary indication', examples: ['Sepsis', 'Pneumonia', 'Meningitis', 'UTI'] },
      { category: 'Non-infectious', description: 'Other causes', examples: ['Major surgery', 'Severe trauma', 'Burns'] },
    ],
    commonCauses: [
      { cause: 'Bacterial sepsis', mechanism: 'Systemic bacterial infection', typicalLevel: 'severe', associatedFindings: ['Fever', 'Elevated WBC', 'Hemodynamic instability'], clinicalContext: 'Very high levels suggest severe sepsis' },
      { cause: 'Bacterial pneumonia', mechanism: 'Lower respiratory infection', typicalLevel: 'moderate', associatedFindings: ['Cough', 'Infiltrate on CXR'], clinicalContext: 'Helps distinguish from viral' },
    ],
    lessCauses: [
      { cause: 'Major surgery', mechanism: 'Tissue trauma', typicalLevel: 'mild', associatedFindings: ['Recent surgery'], clinicalContext: 'Transient elevation' },
      { cause: 'Severe trauma/burns', mechanism: 'Tissue damage', typicalLevel: 'mild', associatedFindings: ['Trauma history'], clinicalContext: 'Non-infectious elevation' },
    ],
    severityGuidance: [
      { level: 'mild', range: '0.1-0.25 ng/mL', clinicalSignificance: 'Bacterial infection unlikely', typicalCauses: ['Viral infection', 'Localized bacterial'], urgency: 'routine' },
      { level: 'moderate', range: '0.25-0.5 ng/mL', clinicalSignificance: 'Possible bacterial infection', typicalCauses: ['Local bacterial infection'], urgency: 'soon' },
      { level: 'severe', range: '>0.5 ng/mL', clinicalSignificance: 'Likely bacterial infection', typicalCauses: ['Systemic bacterial infection'], urgency: 'urgent' },
      { level: 'critical', range: '>2 ng/mL', clinicalSignificance: 'Severe bacterial infection/sepsis', typicalCauses: ['Sepsis'], urgency: 'emergent' },
    ],
    worryingFeatures: ['Very high levels (>10)', 'Signs of sepsis', 'Hemodynamic instability'],
    followUpTests: ['Blood cultures', 'CBC with differential', 'Lactate', 'Source imaging'],
    questionsForDoctor: ['Do I have a bacterial infection?', 'Do I need antibiotics?'],
  },
  decreasedInterpretation: {
    generalMeaning: 'Low procalcitonin suggests bacterial infection is unlikely or resolved',
    pathophysiology: 'Absence of bacterial stimulus',
    causeCategories: [],
    commonCauses: [],
    lessCauses: [],
    severityGuidance: [],
    worryingFeatures: [],
    followUpTests: [],
    questionsForDoctor: [],
  },
  relatedTests: [
    { testId: 'crp', testName: 'CRP', relationship: 'complements', whenToOrder: 'General inflammation', interpretationContext: 'CRP less specific for bacterial infection' },
    { testId: 'lactate', testName: 'Lactate', relationship: 'complements', whenToOrder: 'If sepsis suspected', interpretationContext: 'Marker of tissue hypoperfusion' },
  ],
  associatedConditions: [
    { condition: 'Sepsis', direction: 'elevated', typicalPattern: 'Very high levels (often >10)', sensitivity: 'high', specificity: 'moderate', notes: 'Correlates with severity' },
    { condition: 'Bacterial pneumonia', direction: 'elevated', typicalPattern: 'Moderate elevation', sensitivity: 'high', specificity: 'moderate', notes: 'Helps distinguish from viral' },
  ],
  interferingFactors: [
    { factor: 'Renal failure', effect: 'falsely-elevated', mechanism: 'Reduced clearance', clinicalRelevance: 'Higher baseline in CKD', mitigation: 'Use higher thresholds' },
    { factor: 'Recent surgery', effect: 'falsely-elevated', mechanism: 'Tissue trauma', clinicalRelevance: 'Post-operative elevation', mitigation: 'Clinical context' },
  ],
  temporalPatterns: [
    { scenario: 'Bacterial infection with treatment', pattern: 'Should decrease 50% daily with effective antibiotics', timeframe: 'Days', clinicalUse: 'Guide antibiotic duration' },
  ],
  clinicalPearls: ['Low PCT helps avoid unnecessary antibiotics in viral infections', 'Very useful for antibiotic stewardship', 'Levels correlate with infection severity', 'Falls quickly with effective treatment - can guide antibiotic duration'],
  patientQuestions: ['Do I have a bacterial infection?', 'Do I need antibiotics?', 'Can I stop antibiotics based on this?'],
};

export const LAB_TESTS: Record<string, LabTestEducation> = {
  hemoglobin: HEMOGLOBIN,
  wbc: WHITE_BLOOD_CELL_COUNT,
  platelets: PLATELET_COUNT,
  creatinine: CREATININE,
  glucose: GLUCOSE,
  hematocrit: HEMATOCRIT,
  mcv: MCV,
  rdw: RDW,
  'reticulocyte-count': RETICULOCYTE_COUNT,
  bun: BUN,
  sodium: SODIUM,
  potassium: POTASSIUM,
  ast: AST,
  alt: ALT,
  'alkaline-phosphatase': ALKALINE_PHOSPHATASE,
  'total-bilirubin': TOTAL_BILIRUBIN,
  ggt: GGT,
  albumin: ALBUMIN,
  'total-protein': TOTAL_PROTEIN,
  tsh: TSH,
  'free-t4': FREE_T4,
  'total-cholesterol': TOTAL_CHOLESTEROL,
  ldl: LDL_CHOLESTEROL,
  hdl: HDL_CHOLESTEROL,
  triglycerides: TRIGLYCERIDES,
  hba1c: HEMOGLOBIN_A1C,
  chloride: CHLORIDE,
  co2: CO2_BICARBONATE,
  calcium: CALCIUM,
  magnesium: MAGNESIUM,
  phosphorus: PHOSPHORUS,
  'uric-acid': URIC_ACID,
  crp: CRP,
  esr: ESR,
  'pt-inr': PT_INR,
  ptt: PTT,
  'd-dimer': D_DIMER,
  ferritin: FERRITIN,
  iron: IRON,
  tibc: TIBC,
  'vitamin-b12': VITAMIN_B12,
  folate: FOLATE,
  'vitamin-d': VITAMIN_D,
  ldh: LDH,
  amylase: AMYLASE,
  lipase: LIPASE,
  troponin: TROPONIN,
  bnp: BNP,
  'nt-probnp': NT_PROBNP,
  procalcitonin: PROCALCITONIN,
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
