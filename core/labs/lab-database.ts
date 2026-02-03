/**
 * Lab Database
 *
 * Comprehensive catalog of laboratory tests with educational content,
 * interpretations, and clinical information.
 */

import type { LabTest, LabPanel, LabCategory } from './types';

// ============================================
// Lab Test Database
// ============================================

export const LAB_TESTS: Map<string, LabTest> = new Map();
export const LAB_PANELS: Map<string, LabPanel> = new Map();

// ============================================
// Complete Blood Count (CBC)
// ============================================

LAB_TESTS.set('wbc', {
  id: 'wbc',
  name: 'White Blood Cell Count',
  abbreviations: ['WBC', 'Leukocytes'],
  loincCode: '6690-2',
  category: 'cbc',
  specimen: 'whole-blood',

  whatItMeasures: 'White blood cells are your immune system\'s defense force. This test counts how many are in your blood, helping detect infections, immune problems, or blood disorders.',

  explanations: {
    simple: 'White blood cells fight infections and disease in your body.',
    basic: 'WBC count measures immune cells in your blood. High counts usually mean your body is fighting an infection. Low counts may leave you vulnerable to getting sick.',
    detailed: 'White blood cells (leukocytes) include neutrophils, lymphocytes, monocytes, eosinophils, and basophils. Each type has specific functions in immune defense. The total WBC count indicates overall immune activity, but the differential (breakdown by type) provides more specific diagnostic information.',
    medical: 'Leukocytosis (>11,000/uL) occurs with infection, inflammation, stress, corticosteroids, or malignancy. Leukopenia (<4,500/uL) suggests bone marrow suppression, viral infection, or autoimmune destruction. Left shift (bands, metamyelocytes) indicates acute bacterial infection. Smear review essential for morphologic abnormalities.',
    expert: 'WBC kinetics involve marginated and circulating pools. Demargination (epinephrine, corticosteroids) rapidly increases WBC without true proliferation. Granulocyte colony-stimulating factors regulate myelopoiesis. Leukemoid reaction (WBC >50,000 with orderly maturation) must be distinguished from CML (blast cells, low LAP score, BCR-ABL positive).',
  },

  referenceRanges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 4.5, high: 11.0, unit: 'K/uL', criticalLow: 2.0, criticalHigh: 30.0 },
  ],

  highInterpretation: {
    generalMeaning: 'Your body has mobilized more immune cells than usual, typically indicating infection, inflammation, or stress.',
    pathophysiology: 'Elevated WBC (leukocytosis) occurs when bone marrow produces more cells in response to infection, inflammation releases cytokines, or malignancy causes uncontrolled production.',
    commonCauses: [
      { cause: 'Bacterial infection', mechanism: 'Bone marrow releases neutrophils to fight bacteria', frequency: 'common', severity: 'variable', associatedFindings: ['Elevated neutrophils', 'Left shift (bands)'], clinicalContext: 'Fever, localized infection signs' },
      { cause: 'Stress/inflammation', mechanism: 'Corticosteroids and catecholamines cause demargination', frequency: 'common', severity: 'mild', associatedFindings: ['Elevated neutrophils, low lymphocytes'], clinicalContext: 'Surgery, trauma, anxiety, steroid use' },
      { cause: 'Smoking', mechanism: 'Chronic low-grade inflammation', frequency: 'common', severity: 'mild', clinicalContext: 'Chronic smokers may have WBC 1-2K higher' },
    ],
    uncommonCauses: [
      { cause: 'Leukemia', mechanism: 'Malignant proliferation of WBCs', frequency: 'uncommon', severity: 'severe', associatedFindings: ['Blast cells on smear', 'Anemia', 'Low platelets'], clinicalContext: 'Fatigue, bleeding, recurrent infections' },
      { cause: 'Myeloproliferative neoplasms', mechanism: 'Clonal bone marrow disorders', frequency: 'rare', severity: 'severe', associatedFindings: ['Splenomegaly', 'JAK2 mutation'], conditionId: 'mpn' },
    ],
    severityLevels: [
      { level: 'mild', rangeDescription: '11-15 K/uL', clinicalSignificance: 'Common with minor infections or stress', typicalCauses: ['URI', 'Stress', 'Steroids'], urgency: 'routine' },
      { level: 'moderate', rangeDescription: '15-25 K/uL', clinicalSignificance: 'Significant infection or inflammation', typicalCauses: ['Pneumonia', 'Appendicitis'], urgency: 'soon' },
      { level: 'severe', rangeDescription: '25-50 K/uL', clinicalSignificance: 'Severe infection or leukemoid reaction', typicalCauses: ['Sepsis', 'C. diff colitis'], urgency: 'urgent' },
      { level: 'critical', rangeDescription: '>50 K/uL', clinicalSignificance: 'Must rule out leukemia', typicalCauses: ['CML', 'Acute leukemia'], urgency: 'emergent' },
    ],
    worryingFeatures: ['WBC > 50,000 without obvious infection', 'Blast cells on smear', 'Associated anemia and low platelets', 'Night sweats, weight loss'],
    followUpTests: ['WBC differential', 'Peripheral blood smear', 'CRP/ESR', 'Blood cultures if febrile'],
    questionsForDoctor: ['Which type of white blood cell is elevated?', 'Is this from infection or something else?', 'Do I need additional testing?'],
  },

  lowInterpretation: {
    generalMeaning: 'You have fewer immune cells than normal, which may increase your risk of infections.',
    pathophysiology: 'Low WBC (leukopenia) occurs from decreased bone marrow production, increased destruction, or sequestration in the spleen.',
    commonCauses: [
      { cause: 'Viral infection', mechanism: 'Many viruses temporarily suppress bone marrow', frequency: 'common', severity: 'mild', clinicalContext: 'Self-limited, recovers in 1-2 weeks' },
      { cause: 'Medications', mechanism: 'Bone marrow suppression', frequency: 'common', severity: 'variable', associatedFindings: ['Temporal relationship to drug'], clinicalContext: 'Chemotherapy, methotrexate, clozapine' },
    ],
    uncommonCauses: [
      { cause: 'Aplastic anemia', mechanism: 'Bone marrow failure', frequency: 'rare', severity: 'severe', associatedFindings: ['Pancytopenia', 'Low reticulocytes'] },
      { cause: 'HIV', mechanism: 'Destroys CD4 lymphocytes', frequency: 'uncommon', severity: 'moderate', clinicalContext: 'Risk factors, opportunistic infections' },
    ],
    severityLevels: [
      { level: 'mild', rangeDescription: '3.5-4.5 K/uL', clinicalSignificance: 'Often benign', typicalCauses: ['Viral infection', 'Ethnic neutropenia'], urgency: 'routine' },
      { level: 'moderate', rangeDescription: '2-3.5 K/uL', clinicalSignificance: 'Warrants investigation', typicalCauses: ['Medication effect', 'Active viral infection'], urgency: 'soon' },
      { level: 'severe', rangeDescription: '<2 K/uL or ANC <1000', clinicalSignificance: 'Significant infection risk', typicalCauses: ['Chemotherapy', 'Bone marrow failure'], urgency: 'urgent' },
      { level: 'critical', rangeDescription: 'ANC <500', clinicalSignificance: 'Neutropenic - very high infection risk', typicalCauses: ['Severe chemotherapy effect'], urgency: 'emergent', action: 'If febrile, this is an emergency' },
    ],
    worryingFeatures: ['ANC < 500', 'Fever with low WBC (neutropenic fever = emergency)', 'All cell lines low (pancytopenia)'],
    followUpTests: ['WBC differential with ANC', 'Peripheral smear', 'HIV test', 'Autoimmune workup', 'Bone marrow biopsy if unexplained'],
    questionsForDoctor: ['Am I at increased risk for infections?', 'Should I avoid sick people?', 'Is this related to any medication?'],
  },

  criticalValues: [
    { direction: 'high', threshold: 30, unit: 'K/uL', immediateRisk: 'May indicate serious infection or leukemia', requiredAction: 'Urgent evaluation', timeframe: 'Same day' },
    { direction: 'low', threshold: 2, unit: 'K/uL', immediateRisk: 'High infection risk', requiredAction: 'Check ANC, infection precautions', timeframe: 'Same day' },
  ],

  relatedTests: [
    { testId: 'differential', testName: 'WBC Differential', relationship: 'complements', whenToOrder: 'Always with WBC', interpretationContext: 'Shows which WBC type is abnormal' },
    { testId: 'blood-smear', testName: 'Peripheral Blood Smear', relationship: 'explains', whenToOrder: 'If WBC very high or low', interpretationContext: 'Can show blast cells, toxic granulations' },
    { testId: 'crp', testName: 'C-Reactive Protein', relationship: 'complements', whenToOrder: 'If infection suspected', interpretationContext: 'Rising CRP suggests acute inflammation' },
  ],

  associatedConditions: [
    { conditionId: 'bacterial-infection', conditionName: 'Bacterial Infection', direction: 'elevated', pattern: 'Neutrophilia with left shift' },
    { conditionId: 'viral-infection', conditionName: 'Viral Infection', direction: 'variable', pattern: 'Often lymphocytosis or mild leukopenia' },
    { conditionId: 'leukemia', conditionName: 'Leukemia', direction: 'elevated', pattern: 'Very high WBC or presence of blasts' },
  ],

  anatomyLinks: [
    { organId: 'bone-marrow', organName: 'Bone Marrow', relationship: 'produced-by', description: 'WBCs are produced in the bone marrow' },
    { organId: 'spleen', organName: 'Spleen', relationship: 'affected-by', description: 'Spleen filters and stores WBCs' },
    { organId: 'lymph-nodes', organName: 'Lymph Nodes', relationship: 'affected-by', description: 'Lymphocytes mature in lymph nodes' },
  ],

  interferingFactors: [
    { factor: 'Recent exercise', effect: 'falsely-elevated', mechanism: 'Demargination of WBCs', clinicalRelevance: 'Transient effect', mitigation: 'Draw blood at rest' },
    { factor: 'Steroids', effect: 'falsely-elevated', mechanism: 'Demargination and delayed apoptosis', clinicalRelevance: 'Very common', mitigation: 'Note steroid use when interpreting' },
  ],

  temporalPatterns: [
    { scenario: 'Acute bacterial infection', pattern: 'Rises within hours, peaks at 24-48h', timeframe: 'Hours to days', clinicalUse: 'Track response to antibiotics' },
    { scenario: 'Post-chemotherapy nadir', pattern: 'Lowest point 7-14 days after chemo', timeframe: 'Days to weeks', clinicalUse: 'Plan for neutropenic precautions' },
  ],

  clinicalPearls: [
    'The differential is more informative than total WBC alone',
    'Steroid effect: high WBC, high neutrophils, low lymphocytes - dont confuse with infection',
    'Left shift (bands) suggests bacterial infection even if WBC normal',
    'Neutropenic fever is an emergency requiring immediate antibiotics',
  ],

  patientQuestions: [
    'Is my immune system working normally?',
    'Am I fighting an infection right now?',
    'Should I avoid getting sick?',
  ],

  keyFacts: [
    'Normal range: 4,500-11,000/uL',
    'Neutrophils are most numerous (60-70%)',
    'ANC <500 is severe neutropenia',
    'Left shift indicates immature cells',
  ],
});

LAB_TESTS.set('hemoglobin', {
  id: 'hemoglobin',
  name: 'Hemoglobin',
  abbreviations: ['Hgb', 'Hb'],
  loincCode: '718-7',
  category: 'cbc',
  specimen: 'whole-blood',

  whatItMeasures: 'Hemoglobin is the protein in red blood cells that carries oxygen from your lungs to every tissue in your body. This test measures how much hemoglobin is in your blood.',

  explanations: {
    simple: 'Hemoglobin carries oxygen in your red blood cells.',
    basic: 'Hemoglobin carries oxygen from your lungs to your tissues and returns carbon dioxide. Low hemoglobin (anemia) causes fatigue and shortness of breath. High levels may indicate too many red blood cells.',
    detailed: 'Hemoglobin is a tetramer of globin chains with iron-containing heme groups. Each molecule can bind 4 oxygen molecules. Production is regulated by erythropoietin (EPO) from the kidneys. Low hemoglobin is classified by MCV (size) as microcytic, normocytic, or macrocytic.',
    medical: 'Hemoglobin synthesis requires iron (heme), B6 (heme), and B12/folate (DNA synthesis). Anemia workup uses MCV and reticulocyte count. Reticulocyte index >2% suggests appropriate marrow response. Polycythemia may be primary (PV with JAK2 mutation) or secondary (hypoxia, EPO-secreting tumors).',
    expert: 'Hemoglobin exists in relaxed (R, high O2 affinity) and tense (T, low O2 affinity) conformational states. Cooperative binding creates the sigmoidal oxygen dissociation curve. The Bohr effect (pH, CO2) and 2,3-DPG shift the curve. Methemoglobin (Fe3+) cannot bind O2. HbA1c reflects glycation over the 120-day RBC lifespan.',
  },

  referenceRanges: [
    { condition: { sex: 'male', ageMin: 18, ageUnit: 'years' }, low: 13.5, high: 17.5, unit: 'g/dL', criticalLow: 7.0, criticalHigh: 20.0 },
    { condition: { sex: 'female', ageMin: 18, ageUnit: 'years' }, low: 12.0, high: 16.0, unit: 'g/dL', criticalLow: 7.0, criticalHigh: 20.0 },
  ],

  highInterpretation: {
    generalMeaning: 'Your blood has more oxygen-carrying capacity than typical. This can be compensation for low oxygen states or indicate a blood disorder.',
    pathophysiology: 'Elevated hemoglobin occurs from increased red blood cell production (response to hypoxia or malignancy), dehydration concentrating blood, or blood transfusions.',
    commonCauses: [
      { cause: 'Dehydration', mechanism: 'Concentrated blood makes hemoglobin appear higher', frequency: 'common', severity: 'mild', associatedFindings: ['Elevated hematocrit', 'High BUN/Cr ratio'], clinicalContext: 'Poor fluid intake, hot weather, illness' },
      { cause: 'Chronic lung disease', mechanism: 'Low oxygen triggers EPO release, increasing RBC production', frequency: 'common', severity: 'moderate', associatedFindings: ['Elevated RBC count'], clinicalContext: 'Known COPD, pulmonary fibrosis' },
      { cause: 'Sleep apnea', mechanism: 'Intermittent hypoxia triggers compensatory RBC production', frequency: 'common', severity: 'mild', clinicalContext: 'Snoring, daytime fatigue, obesity' },
    ],
    uncommonCauses: [
      { cause: 'Polycythemia vera', mechanism: 'JAK2 mutation causes uncontrolled RBC production', frequency: 'rare', severity: 'severe', associatedFindings: ['Very high RBC, may have elevated WBC/platelets', 'Splenomegaly'], clinicalContext: 'Facial plethora, itching after showers' },
    ],
    severityLevels: [
      { level: 'mild', rangeDescription: 'Men: 17.5-18.5, Women: 16-17 g/dL', clinicalSignificance: 'Often dehydration or mild hypoxia', typicalCauses: ['Dehydration', 'Mild altitude effect'], urgency: 'routine' },
      { level: 'moderate', rangeDescription: 'Men: 18.5-20, Women: 17-18.5 g/dL', clinicalSignificance: 'Warrants workup', typicalCauses: ['Chronic lung disease', 'Sleep apnea'], urgency: 'soon' },
      { level: 'severe', rangeDescription: '> 20 g/dL', clinicalSignificance: 'Increases blood clot risk', typicalCauses: ['Polycythemia vera'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Persistent elevation despite hydration', 'Headaches, dizziness, visual changes', 'History of blood clots', 'Itching after warm showers'],
    followUpTests: ['Hematocrit', 'EPO level', 'Iron studies', 'Pulse oximetry', 'JAK2 mutation if polycythemia suspected'],
    questionsForDoctor: ['Is this from dehydration or something else?', 'Should I have my oxygen levels checked?', 'Do I need testing for polycythemia vera?'],
  },

  lowInterpretation: {
    generalMeaning: 'Your blood has less oxygen-carrying capacity than normal. This is called anemia and can cause fatigue and shortness of breath.',
    pathophysiology: 'Low hemoglobin results from decreased production (nutritional deficiency, bone marrow problem), blood loss (bleeding), or increased destruction (hemolysis).',
    commonCauses: [
      { cause: 'Iron deficiency anemia', mechanism: 'Without iron, hemoglobin cant be made', frequency: 'common', severity: 'variable', associatedFindings: ['Low MCV (microcytic)', 'Low ferritin', 'High TIBC'], clinicalContext: 'Heavy periods, GI bleeding, poor diet' },
      { cause: 'Anemia of chronic disease', mechanism: 'Chronic inflammation sequesters iron', frequency: 'common', severity: 'mild', associatedFindings: ['Normal or low MCV', 'Normal/high ferritin'], clinicalContext: 'Chronic infections, autoimmune disease, cancer' },
      { cause: 'B12 deficiency', mechanism: 'B12 needed for DNA synthesis in developing RBCs', frequency: 'common', severity: 'moderate', associatedFindings: ['High MCV (macrocytic)', 'Low B12 level'], clinicalContext: 'Vegans, pernicious anemia, metformin use' },
    ],
    uncommonCauses: [
      { cause: 'Aplastic anemia', mechanism: 'Bone marrow failure', frequency: 'rare', severity: 'severe', associatedFindings: ['Low WBC and platelets (pancytopenia)'], clinicalContext: 'Drug exposure, viral illness' },
      { cause: 'Hemolytic anemia', mechanism: 'RBCs destroyed faster than produced', frequency: 'uncommon', severity: 'variable', associatedFindings: ['High reticulocyte count', 'High LDH', 'Low haptoglobin'], clinicalContext: 'Jaundice, dark urine' },
    ],
    severityLevels: [
      { level: 'mild', rangeDescription: 'Men: 11-13.5, Women: 10-12 g/dL', clinicalSignificance: 'May have minimal symptoms', typicalCauses: ['Early iron deficiency', 'Chronic disease'], urgency: 'routine' },
      { level: 'moderate', rangeDescription: '8-10 g/dL', clinicalSignificance: 'Likely symptomatic', typicalCauses: ['Significant iron deficiency'], urgency: 'soon' },
      { level: 'severe', rangeDescription: '< 8 g/dL', clinicalSignificance: 'May need transfusion', typicalCauses: ['Active bleeding', 'Severe hemolysis'], urgency: 'urgent' },
      { level: 'critical', rangeDescription: '< 7 g/dL', clinicalSignificance: 'Life-threatening if acute', typicalCauses: ['Massive hemorrhage'], urgency: 'emergent' },
    ],
    worryingFeatures: ['Hemoglobin dropping rapidly', 'Signs of active bleeding', 'Severe symptoms (chest pain, severe dyspnea)', 'Pancytopenia'],
    lifestyleFactors: ['Iron-rich foods (red meat, beans, spinach)', 'Vitamin C enhances iron absorption', 'Avoid tea/coffee with meals (inhibits iron absorption)'],
    followUpTests: ['Reticulocyte count', 'Iron studies (ferritin, iron, TIBC)', 'B12 and folate', 'Peripheral blood smear'],
    questionsForDoctor: ['What type of anemia do I have?', 'Do I need supplements?', 'Should I be tested for bleeding?', 'Will I need a transfusion?'],
  },

  criticalValues: [
    { direction: 'high', threshold: 20, unit: 'g/dL', immediateRisk: 'Hyperviscosity, stroke risk', requiredAction: 'Hematology evaluation', timeframe: 'Same day' },
    { direction: 'low', threshold: 7, unit: 'g/dL', immediateRisk: 'Cardiac ischemia, hypoxia', requiredAction: 'Likely transfusion needed', timeframe: 'Immediate' },
  ],

  relatedTests: [
    { testId: 'hematocrit', testName: 'Hematocrit', relationship: 'complements', whenToOrder: 'Always with Hgb in CBC', interpretationContext: 'Hematocrit is roughly 3x hemoglobin' },
    { testId: 'mcv', testName: 'MCV', relationship: 'explains', whenToOrder: 'Part of CBC', interpretationContext: 'Classifies anemia as micro/normo/macrocytic' },
    { testId: 'ferritin', testName: 'Ferritin', relationship: 'explains', whenToOrder: 'To evaluate iron stores', interpretationContext: 'Low = iron deficiency, High = inflammation or iron overload' },
    { testId: 'reticulocyte', testName: 'Reticulocyte Count', relationship: 'explains', whenToOrder: 'To assess marrow response', interpretationContext: 'High = marrow responding, Low = marrow problem' },
  ],

  associatedConditions: [
    { conditionId: 'iron-deficiency-anemia', conditionName: 'Iron Deficiency Anemia', direction: 'decreased', pattern: 'Microcytic, low ferritin' },
    { conditionId: 'b12-deficiency', conditionName: 'B12 Deficiency', direction: 'decreased', pattern: 'Macrocytic' },
    { conditionId: 'polycythemia-vera', conditionName: 'Polycythemia Vera', direction: 'elevated', pattern: 'Persistently elevated with other cell lines' },
  ],

  anatomyLinks: [
    { organId: 'bone-marrow', organName: 'Bone Marrow', relationship: 'produced-by', description: 'Red blood cells with hemoglobin are made here' },
    { organId: 'kidney', organName: 'Kidney', relationship: 'affected-by', description: 'Produces EPO that stimulates RBC production' },
    { organId: 'spleen', organName: 'Spleen', relationship: 'cleared-by', description: 'Old RBCs are recycled in the spleen' },
  ],

  interferingFactors: [
    { factor: 'Dehydration', effect: 'falsely-elevated', mechanism: 'Concentrated blood', clinicalRelevance: 'Common', mitigation: 'Recheck after hydration' },
    { factor: 'IV fluids', effect: 'falsely-decreased', mechanism: 'Diluted blood', clinicalRelevance: 'In hospitalized patients', mitigation: 'Note IV status' },
    { factor: 'Pregnancy', effect: 'falsely-decreased', mechanism: 'Plasma volume expansion', clinicalRelevance: 'Normal in pregnancy', mitigation: 'Use pregnancy reference ranges' },
  ],

  temporalPatterns: [
    { scenario: 'Acute blood loss', pattern: 'May be normal initially, drops over 24-48 hours', timeframe: 'Hours to days', clinicalUse: 'Repeat Hgb if acute bleeding suspected' },
    { scenario: 'Iron supplementation', pattern: 'Rises ~1 g/dL per month', timeframe: 'Weeks to months', clinicalUse: 'Check in 1-2 months after starting iron' },
  ],

  clinicalPearls: [
    'Hemoglobin can be normal immediately after acute bleeding - drop comes later',
    'Normal Hgb with low ferritin = early iron deficiency',
    'Hgb should be roughly 3x Hct - if not, consider lab error',
    'Chronic anemia is better tolerated than acute',
    'MCV classifies anemia: low = iron/thalassemia, high = B12/folate, normal = chronic disease',
  ],

  patientQuestions: [
    'How does my hemoglobin compare to normal?',
    'What could be causing this?',
    'What symptoms should I watch for?',
  ],

  keyFacts: [
    'Hemoglobin carries oxygen in blood',
    'WHO defines anemia: <13 g/dL (men), <12 g/dL (women)',
    'Hgb <7 typically requires transfusion',
    'Men have higher Hgb due to testosterone',
  ],
});

LAB_TESTS.set('platelets', {
  id: 'platelets',
  name: 'Platelet Count',
  abbreviations: ['PLT', 'Thrombocytes'],
  loincCode: '777-3',
  category: 'cbc',
  specimen: 'whole-blood',

  whatItMeasures: 'Platelets are tiny cell fragments that help your blood clot. When you get a cut, platelets rush to the site and form a plug to stop bleeding.',

  explanations: {
    simple: 'Platelets help your blood clot to stop bleeding.',
    basic: 'Platelets clump together at injury sites to form a plug. Low counts increase bleeding risk, while very high counts can cause clotting or paradoxically bleeding problems.',
    detailed: 'Platelets are produced by megakaryocytes in bone marrow. About 1/3 are stored in the spleen. They have a 7-10 day lifespan. Thrombopoietin (TPO) from the liver regulates production.',
    medical: 'Thrombocytopenia (<150K) can be from decreased production, increased destruction (ITP, TTP, HIT), or sequestration. Thrombocytosis (>400K) is usually reactive. Always check smear for pseudothrombocytopenia (EDTA clumping).',
    expert: 'Megakaryocyte maturation involves endomitosis creating polyploid cells. TPO binds c-Mpl receptor, activating JAK2-STAT signaling. JAK2 V617F mutation causes constitutive activation in myeloproliferative neoplasms. Platelet activation involves integrin aIIbB3 activation for fibrinogen binding.',
  },

  referenceRanges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 150, high: 400, unit: 'K/uL', criticalLow: 20, criticalHigh: 1000 },
  ],

  highInterpretation: {
    generalMeaning: 'You have more platelets than typical. This is usually reactive (responding to something else) rather than a primary problem.',
    pathophysiology: 'Thrombocytosis occurs reactively (infection, inflammation, blood loss, iron deficiency) or from bone marrow disorders (essential thrombocythemia, other MPNs).',
    commonCauses: [
      { cause: 'Infection/Inflammation', mechanism: 'IL-6 stimulates TPO production', frequency: 'common', severity: 'mild', associatedFindings: ['Elevated CRP/ESR'], clinicalContext: 'Active infection, autoimmune flare' },
      { cause: 'Iron deficiency', mechanism: 'TPO and EPO have structural similarities', frequency: 'common', severity: 'mild', associatedFindings: ['Low ferritin', 'Low hemoglobin'], clinicalContext: 'Heavy periods, GI blood loss' },
      { cause: 'Post-splenectomy', mechanism: 'Spleen normally sequesters 30% of platelets', frequency: 'common', severity: 'moderate', clinicalContext: 'History of splenectomy' },
    ],
    uncommonCauses: [
      { cause: 'Essential thrombocythemia', mechanism: 'JAK2/CALR/MPL mutation causing clonal production', frequency: 'rare', severity: 'severe', associatedFindings: ['Persistently >600K', 'Abnormal platelet function'], conditionId: 'et' },
    ],
    severityLevels: [
      { level: 'mild', rangeDescription: '400-600 K/uL', clinicalSignificance: 'Usually reactive', typicalCauses: ['Infection', 'Iron deficiency'], urgency: 'routine' },
      { level: 'moderate', rangeDescription: '600-1000 K/uL', clinicalSignificance: 'Warrants workup', typicalCauses: ['Significant inflammation', 'Post-splenectomy'], urgency: 'soon' },
      { level: 'severe', rangeDescription: '> 1000 K/uL', clinicalSignificance: 'Thrombosis risk', typicalCauses: ['Essential thrombocythemia'], urgency: 'urgent' },
    ],
    worryingFeatures: ['Persistently > 1 million', 'Thrombosis or unexplained bleeding', 'No obvious reactive cause'],
    followUpTests: ['Iron studies', 'CRP/ESR', 'Peripheral smear', 'JAK2 mutation if primary suspected'],
    questionsForDoctor: ['Is this reactive or a bone marrow problem?', 'Do I need blood thinners?', 'Should I have mutation testing?'],
  },

  lowInterpretation: {
    generalMeaning: 'You have fewer platelets than normal (thrombocytopenia), which can increase your risk of bleeding.',
    pathophysiology: 'Low platelets occur from decreased production, increased destruction (ITP, TTP, HIT, DIC), sequestration in enlarged spleen, or dilution.',
    commonCauses: [
      { cause: 'Immune thrombocytopenia (ITP)', mechanism: 'Antibodies destroy platelets', frequency: 'common', severity: 'moderate', associatedFindings: ['Isolated thrombocytopenia', 'Large platelets on smear'], clinicalContext: 'May follow viral illness' },
      { cause: 'Liver disease/cirrhosis', mechanism: 'Spleen enlargement sequesters platelets', frequency: 'common', severity: 'mild', associatedFindings: ['Splenomegaly', 'Abnormal LFTs'], clinicalContext: 'Known liver disease' },
      { cause: 'Medications', mechanism: 'Immune or marrow suppression', frequency: 'common', severity: 'variable', clinicalContext: 'Heparin, quinine, sulfa drugs, chemo' },
    ],
    uncommonCauses: [
      { cause: 'TTP/HUS', mechanism: 'Microthrombi consume platelets', frequency: 'rare', severity: 'severe', associatedFindings: ['Microangiopathic hemolytic anemia', 'Elevated LDH'], clinicalContext: 'Emergency - fever, neuro changes' },
      { cause: 'Heparin-induced thrombocytopenia (HIT)', mechanism: 'Antibodies to heparin-PF4 complex', frequency: 'uncommon', severity: 'moderate', associatedFindings: ['Recent heparin', '50% drop', 'Paradoxical thrombosis'], clinicalContext: '5-10 days after heparin start' },
    ],
    severityLevels: [
      { level: 'mild', rangeDescription: '100-150 K/uL', clinicalSignificance: 'Low bleeding risk', typicalCauses: ['ITP', 'Liver disease'], urgency: 'routine' },
      { level: 'moderate', rangeDescription: '50-100 K/uL', clinicalSignificance: 'Increased surgical bleeding risk', typicalCauses: ['ITP', 'Bone marrow problems'], urgency: 'soon' },
      { level: 'severe', rangeDescription: '20-50 K/uL', clinicalSignificance: 'Significant bleeding risk', typicalCauses: ['ITP', 'Leukemia'], urgency: 'urgent' },
      { level: 'critical', rangeDescription: '< 20 K/uL', clinicalSignificance: 'Risk of spontaneous bleeding', typicalCauses: ['Severe ITP', 'TTP', 'Marrow failure'], urgency: 'emergent' },
    ],
    worryingFeatures: ['Active bleeding', 'Petechiae appearing', 'Schistocytes on smear (TTP)', 'New neurologic symptoms'],
    followUpTests: ['Peripheral blood smear (essential)', 'Recheck in citrate tube if clumping suspected', 'Hemolysis labs if TTP concern', 'HIT antibody if on heparin'],
    questionsForDoctor: ['Why are my platelets low?', 'Am I at risk for dangerous bleeding?', 'Should I avoid any medications?'],
  },

  criticalValues: [
    { direction: 'high', threshold: 1000, unit: 'K/uL', immediateRisk: 'Thrombosis risk', requiredAction: 'Hematology consultation', timeframe: 'Same day' },
    { direction: 'low', threshold: 20, unit: 'K/uL', immediateRisk: 'Spontaneous bleeding risk', requiredAction: 'Consider transfusion', timeframe: 'Immediate' },
  ],

  relatedTests: [
    { testId: 'mpv', testName: 'Mean Platelet Volume', relationship: 'complements', whenToOrder: 'Part of CBC', interpretationContext: 'High MPV with low platelets = destruction; Low MPV = production problem' },
    { testId: 'blood-smear', testName: 'Peripheral Smear', relationship: 'explains', whenToOrder: 'Always if unexpected thrombocytopenia', interpretationContext: 'Can show clumping, large platelets, schistocytes' },
    { testId: 'pt-inr', testName: 'PT/INR', relationship: 'complements', whenToOrder: 'If bleeding concern', interpretationContext: 'Assesses coagulation cascade' },
  ],

  associatedConditions: [
    { conditionId: 'itp', conditionName: 'Immune Thrombocytopenia', direction: 'decreased', pattern: 'Isolated thrombocytopenia' },
    { conditionId: 'ttp', conditionName: 'TTP', direction: 'decreased', pattern: 'With MAHA and neuro changes', notes: 'Medical emergency' },
    { conditionId: 'cirrhosis', conditionName: 'Cirrhosis', direction: 'decreased', pattern: 'Mild decrease with splenomegaly' },
  ],

  anatomyLinks: [
    { organId: 'bone-marrow', organName: 'Bone Marrow', relationship: 'produced-by', description: 'Platelets come from megakaryocytes in bone marrow' },
    { organId: 'spleen', organName: 'Spleen', relationship: 'cleared-by', description: 'Spleen sequesters ~30% of platelets' },
  ],

  interferingFactors: [
    { factor: 'EDTA-induced clumping', effect: 'falsely-decreased', mechanism: 'EDTA causes some peoples platelets to clump', clinicalRelevance: 'Common!', mitigation: 'Recheck in citrate tube' },
    { factor: 'Giant platelets', effect: 'falsely-decreased', mechanism: 'Large platelets counted as RBCs', clinicalRelevance: 'In destruction states', mitigation: 'Manual count' },
  ],

  temporalPatterns: [
    { scenario: 'ITP treatment', pattern: 'Rises in 1-2 weeks with steroids', timeframe: 'Weeks', clinicalUse: 'Monitor response' },
    { scenario: 'HIT', pattern: 'Drops 5-10 days after heparin start', timeframe: 'Days', clinicalUse: 'Plot 4Ts score' },
  ],

  clinicalPearls: [
    'Always check the smear for pseudothrombocytopenia (clumping)',
    'MPV helps distinguish destruction (high) from production problem (low)',
    'TTP: think pentad - low platelets, hemolysis, fever, neuro, renal',
    'HIT: 4Ts score - Thrombocytopenia, Timing, Thrombosis, oTher causes',
  ],

  patientQuestions: [
    'Am I at risk for bleeding?',
    'Should I avoid any activities?',
    'Could a medication be causing this?',
  ],

  keyFacts: [
    'Normal lifespan: 7-10 days',
    'PLT <10,000 = high spontaneous bleeding risk',
    'PLT <50,000 may need transfusion before surgery',
    'Check smear for clumping artifact',
  ],
});

// ============================================
// Continue with more tests - Lipid Panel
// ============================================

LAB_TESTS.set('total-cholesterol', {
  id: 'total-cholesterol',
  name: 'Total Cholesterol',
  abbreviations: ['TC', 'Chol'],
  loincCode: '2093-3',
  category: 'lipid',
  specimen: 'serum',

  whatItMeasures: 'Total cholesterol measures all the cholesterol in your blood, including LDL (bad), HDL (good), and VLDL. Cholesterol is a waxy substance needed for cell membranes and hormones.',

  explanations: {
    simple: 'Cholesterol is a type of fat in your blood that your body needs, but too much can clog arteries.',
    basic: 'Total cholesterol includes LDL (bad - deposits in arteries), HDL (good - removes cholesterol), and VLDL. High total cholesterol increases heart disease risk, but the breakdown matters more.',
    detailed: 'Cholesterol is essential for cell membranes, hormone synthesis, and bile acid production. The liver produces most cholesterol; diet contributes ~20%. High LDL promotes atherosclerosis, while high HDL is protective.',
    medical: 'Total cholesterol = LDL + HDL + VLDL. The Friedewald equation calculates LDL: TC - HDL - (TG/5). Non-HDL cholesterol (TC - HDL) captures all atherogenic lipoproteins and is a secondary target after LDL.',
    expert: 'Cholesterol homeostasis involves SREBP-2 transcription factor regulation. LDL receptor expression is controlled by intracellular cholesterol. PCSK9 degrades LDL receptors; PCSK9 inhibitors dramatically lower LDL. HDL reverse cholesterol transport involves ABCA1, LCAT, and CETP.',
  },

  referenceRanges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 200, unit: 'mg/dL', optimalHigh: 180, notes: '<200 desirable' },
  ],

  highInterpretation: {
    generalMeaning: 'Your total cholesterol is elevated, which may increase your risk of heart disease. However, the individual components (LDL, HDL) matter more than the total.',
    pathophysiology: 'High cholesterol occurs from increased production (genetics, diet), decreased clearance (hypothyroidism, liver disease), or a combination. LDL deposits in arterial walls, initiating atherosclerosis.',
    commonCauses: [
      { cause: 'Diet high in saturated fat', mechanism: 'Saturated fat reduces LDL receptor expression', frequency: 'common', severity: 'mild', clinicalContext: 'Red meat, full-fat dairy, fried foods' },
      { cause: 'Genetic hypercholesterolemia', mechanism: 'LDL receptor mutations or ApoB defects', frequency: 'uncommon', severity: 'severe', associatedFindings: ['Very high LDL', 'Family history of early heart disease'], conditionId: 'familial-hypercholesterolemia' },
      { cause: 'Hypothyroidism', mechanism: 'Thyroid hormone needed for LDL receptor expression', frequency: 'common', severity: 'moderate', associatedFindings: ['Elevated TSH'], clinicalContext: 'Fatigue, weight gain, constipation' },
    ],
    uncommonCauses: [
      { cause: 'Nephrotic syndrome', mechanism: 'Liver increases lipoprotein synthesis', frequency: 'uncommon', severity: 'moderate', associatedFindings: ['Proteinuria', 'Low albumin'] },
    ],
    severityLevels: [
      { level: 'borderline', rangeDescription: '200-239 mg/dL', clinicalSignificance: 'Borderline high', typicalCauses: ['Diet', 'Mild genetic'], urgency: 'routine' },
      { level: 'mild', rangeDescription: '240-279 mg/dL', clinicalSignificance: 'High', typicalCauses: ['Diet + genetic factors'], urgency: 'routine' },
      { level: 'severe', rangeDescription: '>280 mg/dL', clinicalSignificance: 'Very high - consider familial', typicalCauses: ['Familial hypercholesterolemia'], urgency: 'soon' },
    ],
    worryingFeatures: ['TC > 300 (especially with family history)', 'LDL > 190', 'Personal or family history of early heart disease'],
    lifestyleFactors: ['Reduce saturated and trans fats', 'Increase fiber (oatmeal, beans)', 'Exercise regularly', 'Maintain healthy weight'],
    medicationEffects: [
      { medication: 'Statins', effect: 'decrease', mechanism: 'Inhibit HMG-CoA reductase', clinicalRelevance: 'First-line therapy' },
      { medication: 'Thiazides', effect: 'increase', mechanism: 'May raise LDL', clinicalRelevance: 'Usually minor' },
    ],
    followUpTests: ['Lipid panel with LDL, HDL, triglycerides', 'TSH (rule out hypothyroidism)', 'Fasting glucose (check for metabolic syndrome)'],
    questionsForDoctor: ['Is my LDL specifically high?', 'Do I need medication or can diet help?', 'What is my 10-year cardiovascular risk?'],
  },

  lowInterpretation: {
    generalMeaning: 'Very low cholesterol is uncommon and may indicate malnutrition, liver disease, or certain genetic conditions. Moderately low cholesterol is generally not concerning.',
    pathophysiology: 'Very low cholesterol can occur with severe malnutrition, malabsorption, liver failure, or rare genetic disorders like abetalipoproteinemia.',
    commonCauses: [
      { cause: 'Hyperthyroidism', mechanism: 'Increased LDL receptor expression and clearance', frequency: 'common', severity: 'mild', associatedFindings: ['Low TSH'] },
      { cause: 'Malnutrition', mechanism: 'Inadequate substrate for cholesterol synthesis', frequency: 'uncommon', severity: 'moderate', clinicalContext: 'Weight loss, poor diet' },
    ],
    uncommonCauses: [
      { cause: 'Liver failure', mechanism: 'Liver cant synthesize cholesterol', frequency: 'rare', severity: 'severe', associatedFindings: ['Abnormal LFTs', 'Coagulopathy'] },
    ],
    severityLevels: [
      { level: 'borderline', rangeDescription: '< 150 mg/dL', clinicalSignificance: 'Usually not concerning', typicalCauses: ['Healthy diet', 'Statin effect'], urgency: 'routine' },
    ],
    worryingFeatures: ['TC < 100 without statin use', 'Associated malnutrition', 'Liver disease signs'],
    followUpTests: ['Liver function tests', 'Thyroid function', 'Nutritional assessment'],
    questionsForDoctor: ['Is this level too low?', 'Should I investigate why its low?'],
  },

  relatedTests: [
    { testId: 'ldl', testName: 'LDL Cholesterol', relationship: 'complements', whenToOrder: 'Always with total cholesterol', interpretationContext: 'LDL is the primary treatment target' },
    { testId: 'hdl', testName: 'HDL Cholesterol', relationship: 'complements', whenToOrder: 'Always with total cholesterol', interpretationContext: 'Higher HDL is protective' },
    { testId: 'triglycerides', testName: 'Triglycerides', relationship: 'complements', whenToOrder: 'Always with lipid panel', interpretationContext: 'High TG increases CV risk independently' },
  ],

  associatedConditions: [
    { conditionId: 'atherosclerosis', conditionName: 'Atherosclerosis', direction: 'elevated', pattern: 'Chronic elevation' },
    { conditionId: 'hypothyroidism', conditionName: 'Hypothyroidism', direction: 'elevated', pattern: 'Secondary hyperlipidemia' },
  ],

  anatomyLinks: [
    { organId: 'liver', organName: 'Liver', relationship: 'produced-by', description: 'Liver synthesizes most cholesterol' },
    { organId: 'heart', organName: 'Heart', relationship: 'affected-by', description: 'Coronary arteries affected by atherosclerosis' },
  ],

  interferingFactors: [
    { factor: 'Non-fasting state', effect: 'variable', mechanism: 'Triglycerides rise after eating, affecting calculated LDL', clinicalRelevance: 'Fasting preferred for LDL accuracy', mitigation: 'Fast 9-12 hours' },
    { factor: 'Acute illness', effect: 'falsely-decreased', mechanism: 'Acute inflammation lowers cholesterol', clinicalRelevance: 'Delay testing if acutely ill', mitigation: 'Wait 6 weeks after illness' },
  ],

  clinicalPearls: [
    'LDL is more important than total cholesterol for treatment decisions',
    'Non-HDL cholesterol (TC - HDL) is a secondary target',
    'Always check thyroid function if cholesterol is elevated',
    'Calculate 10-year ASCVD risk to guide statin therapy',
  ],

  patientQuestions: [
    'Is my cholesterol too high?',
    'Do I need medication?',
    'How much can diet and exercise help?',
  ],

  keyFacts: [
    '<200 mg/dL is desirable',
    '200-239 is borderline high',
    '>240 is high',
    'LDL matters more than total',
  ],

  criticalValues: undefined,
  temporalPatterns: undefined,
});

// ============================================
// Lab Panels
// ============================================

LAB_PANELS.set('cbc', {
  id: 'cbc',
  name: 'Complete Blood Count',
  abbreviation: 'CBC',
  category: 'cbc',
  description: 'Measures the different cells in your blood including red cells, white cells, and platelets.',
  includedTests: ['wbc', 'rbc', 'hemoglobin', 'hematocrit', 'mcv', 'mch', 'mchc', 'rdw', 'platelets', 'mpv', 'neutrophils', 'lymphocytes', 'monocytes', 'eosinophils', 'basophils'],
  purpose: 'Screen for and monitor blood disorders, infections, anemia, and many other conditions.',
  commonIndications: ['Routine health screening', 'Fatigue evaluation', 'Infection workup', 'Bleeding evaluation', 'Pre-surgical assessment'],
  overallInterpretation: 'The CBC provides a snapshot of your blood cells. Abnormalities can point to specific diagnoses, but often require additional testing for confirmation.',
  limitations: ['Cannot diagnose specific conditions alone', 'Results can be affected by many transient factors', 'Normal results dont exclude all blood disorders'],
  whenToExpand: ['Add reticulocyte count if anemia present', 'Add peripheral smear if any cells abnormal', 'Add iron studies for microcytic anemia', 'Add B12/folate for macrocytic anemia'],
});

LAB_PANELS.set('cmp', {
  id: 'cmp',
  name: 'Comprehensive Metabolic Panel',
  abbreviation: 'CMP',
  category: 'cmp',
  description: 'Measures electrolytes, kidney function, liver function, and blood sugar.',
  includedTests: ['glucose', 'bun', 'creatinine', 'egfr', 'sodium', 'potassium', 'chloride', 'co2', 'calcium', 'total-protein', 'albumin', 'bilirubin-total', 'alp', 'ast', 'alt'],
  purpose: 'Screen for and monitor diabetes, kidney disease, liver disease, and electrolyte imbalances.',
  commonIndications: ['Routine health screening', 'Medication monitoring', 'Fatigue evaluation', 'Dehydration assessment'],
  overallInterpretation: 'The CMP provides a broad view of your metabolic health. Abnormalities often require additional testing to determine the cause.',
  limitations: ['Snapshot in time', 'Many results are non-specific', 'Normal results dont exclude early disease'],
  whenToExpand: ['Add hepatitis panel if liver enzymes elevated', 'Add GGT for liver evaluation', 'Add urinalysis for kidney evaluation'],
});

LAB_PANELS.set('lipid-panel', {
  id: 'lipid-panel',
  name: 'Lipid Panel',
  abbreviation: 'Lipids',
  category: 'lipid',
  description: 'Measures cholesterol and triglycerides to assess cardiovascular risk.',
  includedTests: ['total-cholesterol', 'ldl', 'hdl', 'triglycerides', 'vldl', 'non-hdl-cholesterol'],
  purpose: 'Assess cardiovascular disease risk and guide treatment with lifestyle changes or medications.',
  commonIndications: ['Cardiovascular risk assessment', 'Statin therapy monitoring', 'Diabetes screening', 'Family history of heart disease'],
  overallInterpretation: 'The lipid panel helps predict your risk of heart disease and stroke. LDL is the primary treatment target.',
  limitations: ['Single measurement may not reflect average levels', 'Doesnt capture all cardiovascular risk factors', 'Diet affects results'],
  whenToExpand: ['Add Lp(a) for high-risk patients', 'Add ApoB for more accurate atherogenic particle assessment', 'Add hsCRP for inflammation'],
});

LAB_PANELS.set('thyroid-panel', {
  id: 'thyroid-panel',
  name: 'Thyroid Panel',
  abbreviation: 'Thyroid',
  category: 'thyroid',
  description: 'Measures thyroid function to detect overactive or underactive thyroid.',
  includedTests: ['tsh', 'free-t4', 'free-t3', 'tpo-antibody', 'thyroglobulin-antibody'],
  purpose: 'Screen for and monitor thyroid disorders including hypothyroidism and hyperthyroidism.',
  commonIndications: ['Fatigue evaluation', 'Weight changes', 'Thyroid nodule workup', 'Thyroid medication monitoring'],
  overallInterpretation: 'TSH is the primary screening test. Abnormal TSH requires free T4 measurement. Antibodies help determine the cause of thyroid dysfunction.',
  limitations: ['TSH alone may miss central hypothyroidism', 'Recent illness can affect results', 'Biotin supplements can interfere with testing'],
  whenToExpand: ['Add T3 if hyperthyroidism suspected', 'Add thyroid antibodies if Hashimotos suspected', 'Thyroid ultrasound for nodules'],
});

// ============================================
// Helper Functions
// ============================================

export function getLabTest(id: string): LabTest | undefined {
  return LAB_TESTS.get(id);
}

export function getLabTestByName(name: string): LabTest | undefined {
  const lowerName = name.toLowerCase();
  for (const test of LAB_TESTS.values()) {
    if (test.name.toLowerCase() === lowerName ||
        test.abbreviations.some(a => a.toLowerCase() === lowerName)) {
      return test;
    }
  }
  return undefined;
}

export function getLabPanel(id: string): LabPanel | undefined {
  return LAB_PANELS.get(id);
}

export function getLabTestsByCategory(category: LabCategory): LabTest[] {
  return Array.from(LAB_TESTS.values()).filter(t => t.category === category);
}

export function getAllLabTests(): LabTest[] {
  return Array.from(LAB_TESTS.values());
}

export function getAllLabPanels(): LabPanel[] {
  return Array.from(LAB_PANELS.values());
}

export function searchLabTests(query: string): LabTest[] {
  const lowerQuery = query.toLowerCase();
  return Array.from(LAB_TESTS.values()).filter(test =>
    test.name.toLowerCase().includes(lowerQuery) ||
    test.abbreviations.some(a => a.toLowerCase().includes(lowerQuery)) ||
    test.whatItMeasures.toLowerCase().includes(lowerQuery)
  );
}
